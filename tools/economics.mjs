// Analysis only: exact rational GEL arithmetic, never a transaction/ledger engine.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const gcd = (a, b) => b === 0n ? (a < 0n ? -a : a) : gcd(b, a % b);
export class Decimal {
  constructor(n, d = 1n) {
    if (d === 0n) throw new Error('division by zero');
    if (d < 0n) { n = -n; d = -d; }
    const g = gcd(n, d); this.n = n / g; this.d = d / g;
  }
  add(b) { b = decimal(b); return new Decimal(this.n * b.d + b.n * this.d, this.d * b.d); }
  sub(b) { b = decimal(b); return new Decimal(this.n * b.d - b.n * this.d, this.d * b.d); }
  mul(b) { b = decimal(b); return new Decimal(this.n * b.n, this.d * b.d); }
  div(b) { b = decimal(b); return new Decimal(this.n * b.d, this.d * b.n); }
  cmp(b) { b = decimal(b); const x = this.n * b.d - b.n * this.d; return x < 0n ? -1 : x > 0n ? 1 : 0; }
  format(places = 10) {
    if (!Number.isInteger(places) || places < 0 || places > 12) throw new Error('invalid display precision');
    const scale = 10n ** BigInt(places), sign = this.n < 0n ? '-' : '';
    const abs = this.n < 0n ? -this.n : this.n;
    let q = abs * scale / this.d;
    if ((abs * scale % this.d) * 2n >= this.d) q++;
    if (q === 0n) return places ? `0.${'0'.repeat(places)}` : '0';
    const digits = q.toString().padStart(places + 1, '0');
    return sign + (places ? digits.slice(0, -places) + '.' + digits.slice(-places) : digits);
  }
  toJSON() { return this.format(); }
}
export function decimal(value) {
  if (value instanceof Decimal) return value;
  if (typeof value === 'number' && (!Number.isFinite(value) || Math.abs(value) > Number.MAX_SAFE_INTEGER)) throw new Error('nonfinite or unsafe numeric input');
  if (!['number', 'string'].includes(typeof value)) throw new Error('unknown or invalid numeric input');
  const s = String(value);
  if (!/^-?\d+(\.\d{1,12})?$/.test(s) || s.length > 30) throw new Error('invalid decimal input (at most 12 places; no exponent)');
  const [whole, fraction = ''] = s.split('.');
  const n = BigInt(whole.replace('-', '') + fraction) * (s.startsWith('-') ? -1n : 1n);
  const out = new Decimal(n, 10n ** BigInt(fraction.length));
  if ((out.n < 0n ? -out.n : out.n) > BigInt(Number.MAX_SAFE_INTEGER) * out.d) throw new Error('unsafe decimal input');
  return out;
}
const zero = () => decimal(0);
const sum = xs => xs.reduce((a, b) => a.add(b), zero());
function amount(v, name) { const x = decimal(v); if (x.cmp(0) < 0) throw new Error(`${name}: negative input`); return x; }
function rate(v, name) { const x = amount(v, name); if (x.cmp(1) > 0) throw new Error(`${name}: fraction must be <= 1`); return x; }
function count(v, name) { if (!Number.isSafeInteger(v) || v < 0) throw new Error(`${name}: invalid count`); return v; }
function exactKeys(obj, keys, label) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) throw new Error(`${label}: object required`);
  for (const k of keys) if (!Object.hasOwn(obj, k)) throw new Error(`${label}: missing ${k}`);
  for (const k of Object.keys(obj)) if (!keys.includes(k)) throw new Error(`${label}: unsupported ${k}`);
}
const schemas = {
  ride: ['fare','commissionRate','cardShare','pspRate','cardExtraFee','cashCollectionCost','serviceRevenue','costs'],
  driver: ['eligibleFares','commissionRate','tips','incentives','onlineHours','costs'],
  cash: ['collectionFraction','defaultFraction','cardSettlementFraction'],
  tax: ['mode','rate'],
  cost: ['boundary','amount','status','source'],
  cohort: ['kind','spend','activeUsers','ridesPerUserByMonth','retentionCostPerUserByMonth'],
};
function costs(rows, scope, seen = new Set()) {
  if (!Array.isArray(rows)) throw new Error(`${scope}: costs array required`);
  return sum(rows.map(row => {
    exactKeys(row, schemas.cost, scope);
    if (typeof row.boundary !== 'string' || !/^[a-z][a-z0-9_-]+$/.test(row.boundary)) throw new Error('invalid cost boundary');
    if (seen.has(row.boundary)) throw new Error(`duplicate cost boundary: ${row.boundary}`);
    seen.add(row.boundary);
    if (!['assumed','observed','self-reported'].includes(row.status) || typeof row.source !== 'string' || !row.source.trim()) throw new Error('cost provenance required');
    return amount(row.amount, row.boundary);
  }));
}
export function driverEconomics(input) {
  exactKeys(input, schemas.driver, 'driver');
  const h = amount(input.onlineHours, 'onlineHours');
  if (h.cmp(0) === 0) throw new Error('onlineHours must be positive; idle time included');
  const boundaries = new Set(['commission']);
  const c = costs(input.costs, 'driver', boundaries);
  const ids = input.costs.map(x => x.boundary);
  if (ids.includes('depreciation') && (ids.includes('lease') || ids.includes('loan_principal'))) throw new Error('duplicate capital allocation: depreciation versus lease/loan principal');
  if (ids.includes('lease') && ids.includes('loan_principal')) throw new Error('duplicate capital allocation');
  if (ids.includes('empty_distance')) throw new Error('empty distance must be allocated once to fuel/maintenance, not another cost');
  const fares = amount(input.eligibleFares, 'eligibleFares');
  const commission = fares.mul(rate(input.commissionRate, 'commissionRate'));
  const grossReceipts = fares.sub(commission).add(amount(input.tips,'tips')).add(amount(input.incentives,'incentives'));
  const net = grossReceipts.sub(c);
  return { commission, grossReceipts, costs: c, net, onlineHours: h, netPerOnlineHour: net.div(h) };
}
export function rideEconomics(input, tax, cash) {
  exactKeys(input, schemas.ride, 'ride'); exactKeys(tax, schemas.tax, 'tax'); exactKeys(cash, schemas.cash, 'cash');
  const fare = amount(input.fare,'fare'), c = rate(input.commissionRate,'commissionRate');
  const card = rate(input.cardShare,'cardShare'), cashShare = decimal(1).sub(card);
  const collection = rate(cash.collectionFraction,'collectionFraction'), defaultRate = rate(cash.defaultFraction,'defaultFraction');
  if (collection.add(defaultRate).cmp(1) > 0) throw new Error('cash collection + default exceeds 1');
  rate(cash.cardSettlementFraction,'cardSettlementFraction');
  const nominalCommission = fare.mul(c), service = amount(input.serviceRevenue,'serviceRevenue');
  const driverFarePassthrough = fare.sub(nominalCommission);
  const pspCost = fare.mul(card).mul(rate(input.pspRate,'pspRate')).add(card.mul(amount(input.cardExtraFee,'cardExtraFee')));
  const cashCollectionCost = cashShare.mul(amount(input.cashCollectionCost,'cashCollectionCost'));
  const variableCosts = costs(input.costs, 'ride', new Set(['psp','cash_collection','commission','driver_fare','tips','acquisition','fixed_opex','tax','cash_default']));
  const grossPlatformFee = nominalCommission.add(service), t = rate(tax.rate,'tax rate');
  let recognizedRevenue, taxAccrued, principalDriverCost, grossFeeDue;
  if (tax.mode === 'unresolved_no_tax') {
    if (t.cmp(0) !== 0) throw new Error('unresolved_no_tax must use rate 0');
    recognizedRevenue = grossPlatformFee; taxAccrued = zero(); principalDriverCost = zero(); grossFeeDue = grossPlatformFee;
  } else if (tax.mode === 'agent_commission_inclusive') {
    recognizedRevenue = grossPlatformFee.div(decimal(1).add(t)); taxAccrued = grossPlatformFee.sub(recognizedRevenue); principalDriverCost = zero(); grossFeeDue = grossPlatformFee;
  } else if (tax.mode === 'agent_commission_exclusive') {
    recognizedRevenue = grossPlatformFee; taxAccrued = grossPlatformFee.mul(t); principalDriverCost = zero(); grossFeeDue = grossPlatformFee.add(taxAccrued);
  } else if (tax.mode === 'principal_fare_inclusive') {
    recognizedRevenue = fare.add(service).div(decimal(1).add(t)); taxAccrued = fare.add(service).sub(recognizedRevenue);
    principalDriverCost = driverFarePassthrough; grossFeeDue = grossPlatformFee;
  } else throw new Error('unknown tax mode');
  const cashReceivable = grossFeeDue.mul(cashShare);
  const cashCollected = cashReceivable.mul(collection), cashWrittenOff = cashReceivable.mul(defaultRate);
  const cashOutstanding = cashReceivable.sub(cashCollected).sub(cashWrittenOff);
  const totalCosts = pspCost.add(cashCollectionCost).add(variableCosts).add(cashWrittenOff).add(principalDriverCost);
  const steadyCosts = input.costs.filter(x => x.boundary !== 'introductory_incentives');
  const introductoryCost = variableCosts.sub(costs(steadyCosts,'steady-state'));
  const contribution = recognizedRevenue.sub(totalCosts);
  return { taxMode: tax.mode, taxApplicability: 'unreviewed hypothetical sensitivity', fare, nominalCommission, grossPlatformFee,
    grossFeeDue, driverFarePassthrough, recognizedRevenue, taxAccrued, principalDriverCost, pspCost,
    cashCollectionCost, variableCosts, cashReceivable, cashCollected, cashWrittenOff, cashOutstanding,
    totalCosts, contribution, contributionBeforeIntroductoryIncentives: contribution.add(introductoryCost) };
}
export function acquisition(input, contribution) {
  exactKeys(input, schemas.cohort, 'acquisition');
  if (!['retained_active_driver','first_paid_rider'].includes(input.kind)) throw new Error('acquisition denominator must be active driver or first paid rider');
  const n = count(input.activeUsers,'activeUsers'), spend = amount(input.spend,'acquisition spend');
  if (!Array.isArray(input.ridesPerUserByMonth) || !input.ridesPerUserByMonth.length || input.ridesPerUserByMonth.length !== input.retentionCostPerUserByMonth?.length) throw new Error('cohort horizon arrays mismatch');
  const rides = input.ridesPerUserByMonth.map(x => amount(x,'retained rides'));
  const retention = input.retentionCostPerUserByMonth.map(x => amount(x,'retention cost'));
  const cm = decimal(contribution), ltv = sum(rides.map((x,i) => x.mul(cm).sub(retention[i])));
  if (n === 0) return { kind: input.kind, cac: null, ltv, ltvCac: null, paybackMonths: null, reason: 'no observed active-user denominator', horizonMonths: rides.length };
  const cac = spend.div(n); let cumulative = zero(), paybackMonths = cac.cmp(0) === 0 ? 0 : null;
  rides.forEach((r,i) => { cumulative = cumulative.add(r.mul(cm).sub(retention[i])); if (paybackMonths === null && cumulative.cmp(cac) >= 0) paybackMonths = i + 1; });
  return { kind: input.kind, cac, ltv, ltvCac: cac.cmp(0) > 0 ? ltv.div(cac) : null, paybackMonths, horizonMonths: rides.length,
    reason: paybackMonths === null ? 'not repaid within explicit horizon; no perpetual LTV' : 'hypothetical cohort; retention not observed' };
}
export function breakEven(fixed, contribution) {
  const f = amount(fixed,'fixed opex'), c = decimal(contribution);
  if (c.cmp(0) <= 0) return { monthlyRides: null, dailyRides30Days: null, reason: 'nonpositive contribution: no finite break-even' };
  const rides = f.div(c); const ceiling = (rides.n + rides.d - 1n) / rides.d;
  return { monthlyRides: ceiling.toString(), dailyRides30Days: rides.div(30), reason: 'capacity and demand unvalidated' };
}
export function monthlyCashFlow(input, cities, opening = { cash: '0', cashReceivables: '0', cardReceivables: '0', taxPayable: '0', reserve: '0' }) {
  exactKeys(input, ['fixedCosts','acquisitionSpend','researchSpend','capex','funding','taxRemittance','priorCashCollection','priorCashWriteoff','priorCardCollection','reserveDeposit','reserveRelease','otherCashCost'], 'month');
  exactKeys(opening, ['cash','cashReceivables','cardReceivables','taxPayable','reserve'], 'opening');
  const fixed = costs(input.fixedCosts,'fixed', new Set(['psp','cash_collection','cash_default','acquisition','introductory_incentives','routine_incentives','map','communications','infra_incremental','support_incremental','fraud_refund','tax','driver_fare','tips']));
  const v = Object.fromEntries(Object.entries(input).filter(([k])=>k!=='fixedCosts').map(([k,x])=>[k,amount(x,k)]));
  const old = Object.fromEntries(Object.entries(opening).map(([k,x])=>[k,k==='cash'?decimal(x):amount(x,k)]));
  if (v.priorCashCollection.add(v.priorCashWriteoff).cmp(old.cashReceivables) > 0 || v.priorCardCollection.cmp(old.cardReceivables) > 0) throw new Error('prior collection/writeoff exceeds opening receivable');
  const seen = new Set(); let receipts = zero(), cashDue = zero(), cashCollected = zero(), writeoff = zero(), cardDue = zero(), cardCollected = zero(), taxAccrued = zero(), operatingCashCosts = zero(), contribution = zero();
  cities.forEach(city => {
    if (seen.has(city.city)) throw new Error('duplicate city in monthly model'); seen.add(city.city);
    const rides = amount(city.completedRides,'completedRides'), r = rideEconomics(city.ride, city.tax, city.cash);
    const card = rate(city.ride.cardShare,'cardShare');
    cashDue = cashDue.add(r.cashReceivable.mul(rides)); cashCollected = cashCollected.add(r.cashCollected.mul(rides)); writeoff = writeoff.add(r.cashWrittenOff.mul(rides));
    const due = r.grossFeeDue.mul(card).mul(rides), collected = due.mul(city.cash.cardSettlementFraction);
    cardDue = cardDue.add(due); cardCollected = cardCollected.add(collected);
    taxAccrued = taxAccrued.add(r.taxAccrued.mul(rides));
    // Principal case: driver fare is already excluded from retained cash receipts.
    operatingCashCosts = operatingCashCosts.add(r.pspCost.add(r.cashCollectionCost).add(r.variableCosts).mul(rides));
    contribution = contribution.add(r.contribution.mul(rides));
  });
  receipts = cashCollected.add(cardCollected).add(v.priorCashCollection).add(v.priorCardCollection);
  const taxAvailable = old.taxPayable.add(taxAccrued), reserveAvailable = old.reserve.add(v.reserveDeposit);
  if (v.taxRemittance.cmp(taxAvailable) > 0 || v.reserveRelease.cmp(reserveAvailable) > 0) throw new Error('tax remittance/reserve release exceeds available balance');
  const outflows = operatingCashCosts.add(fixed).add(v.acquisitionSpend).add(v.researchSpend).add(v.capex).add(v.taxRemittance).add(v.reserveDeposit).add(v.otherCashCost);
  const netCashFlow = receipts.add(v.funding).add(v.reserveRelease).sub(outflows), closingCash = old.cash.add(netCashFlow);
  return { receipts, operatingCashCosts, fixedCosts: fixed, acquisitionSpend: v.acquisitionSpend, researchSpend: v.researchSpend,
    accrualContribution: contribution, operatingResultAfterFixedAndAcquisition: contribution.sub(fixed).sub(v.acquisitionSpend).sub(v.researchSpend).sub(v.priorCashWriteoff),
    cashCommissionDue: cashDue, cashCommissionCollected: cashCollected, cashCommissionWrittenOff: writeoff,
    closingCashReceivables: old.cashReceivables.add(cashDue).sub(cashCollected).sub(writeoff).sub(v.priorCashCollection).sub(v.priorCashWriteoff),
    cardFeesDue: cardDue, cardFeesCollected: cardCollected, closingCardReceivables: old.cardReceivables.add(cardDue).sub(cardCollected).sub(v.priorCardCollection),
    taxAccrued, closingTaxPayable: taxAvailable.sub(v.taxRemittance), closingReserve: reserveAvailable.sub(v.reserveRelease),
    outflows, netCashFlow, closingCash, additionalFundingToAvoidNegativeCash: closingCash.cmp(0)<0 ? zero().sub(closingCash) : zero() };
}
export function fundingEnvelope(months, monthlyFixed, reserve, contingency) {
  count(months,'horizon'); if (!months) throw new Error('horizon must be positive');
  const subtotal = amount(monthlyFixed,'monthlyFixed').mul(months).add(amount(reserve,'research/acquisition reserve'));
  const extra = subtotal.mul(rate(contingency,'contingency'));
  return { months, subtotal, contingency: extra, envelope: subtotal.add(extra), status: 'assumed; excludes unquoted working-capital and tax additions' };
}
export function scenario(city, modifiers) {
  exactKeys(modifiers, ['fareFactor','utilizationFactor','cacFactor','pspFactor','incentiveFactor','demandFactor','cardSettlementFraction',...['cashCollectionFraction','cashDefaultFraction'].filter(k=>Object.hasOwn(modifiers,k))], 'scenario');
  const s = structuredClone(city);
  for (const k of ['fareFactor','utilizationFactor','cacFactor','pspFactor','incentiveFactor','demandFactor']) amount(modifiers[k],k);
  rate(modifiers.cardSettlementFraction,'cardSettlementFraction');
  const activity = decimal(modifiers.utilizationFactor).mul(modifiers.demandFactor);
  s.completedRides = decimal(s.completedRides).mul(activity).format(12);
  s.ride.fare = decimal(s.ride.fare).mul(modifiers.fareFactor).format(12);
  s.ride.pspRate = decimal(s.ride.pspRate).mul(modifiers.pspFactor).format(12);
  s.ride.cardExtraFee = decimal(s.ride.cardExtraFee).mul(modifiers.pspFactor).format(12);
  s.ride.costs.forEach(x => { if (['routine_incentives','introductory_incentives'].includes(x.boundary)) x.amount = decimal(x.amount).mul(modifiers.incentiveFactor).format(12); });
  s.driver.eligibleFares = decimal(s.driver.eligibleFares).mul(modifiers.fareFactor).mul(activity).format(12);
  s.driver.incentives = decimal(s.driver.incentives).mul(activity).mul(modifiers.incentiveFactor).format(12);
  s.driver.tips = decimal(s.driver.tips).mul(activity).format(12);
  s.cash.cardSettlementFraction = modifiers.cardSettlementFraction;
  if (Object.hasOwn(modifiers,'cashCollectionFraction')) s.cash.collectionFraction = rate(modifiers.cashCollectionFraction,'cashCollectionFraction').format(12);
  if (Object.hasOwn(modifiers,'cashDefaultFraction')) s.cash.defaultFraction = rate(modifiers.cashDefaultFraction,'cashDefaultFraction').format(12);
  s.acquisition.forEach(x => { x.spend = decimal(x.spend).mul(modifiers.cacFactor).format(12); x.ridesPerUserByMonth = x.ridesPerUserByMonth.map(r => decimal(r).mul(activity).format(12)); });
  return s;
}
export function runModel(input) {
  exactKeys(input,['modelVersion','provenance','baseline','cities','scenarios','taxAlternatives','monthly','funding'], 'model');
  if (input.modelVersion !== '1.0.0-analysis') throw new Error('unknown model version');
  const expected = ['Zugdidi','Kutaisi','Batumi','Tbilisi','Rustavi'];
  if (!Array.isArray(input.cities) || input.cities.length !== 5 || new Set(input.cities.map(x=>x.city)).size !== 5 || input.cities.some(x=>!expected.includes(x.city))) throw new Error('five distinct required cities');
  const cityInputs = input.cities.map(c => { exactKeys(c,['city','status','source','collected','completedRides'], 'city'); if(c.status!=='assumed' || c.collected!==0 || typeof c.source!=='string' || !c.source.trim()) throw new Error('kit only accepts labeled synthetic city inputs; observed field analysis requires a versioned revision'); return { ...structuredClone(input.baseline),city:c.city,completedRides:c.completedRides }; });
  const outputs = input.scenarios.map(s => {
    const cities = cityInputs.map(c=>scenario(c,s.modifiers));
    return { name:s.name, status:'assumed stress, not forecast',cities:cities.map(c=>{
      const ride=rideEconomics(c.ride,c.tax,c.cash);
      return { city:c.city,completedRides:c.completedRides,driver:driverEconomics(c.driver),ride,acquisition:c.acquisition.map(a=>acquisition(a,ride.contribution)), breakEvenIllustrative250k:breakEven('250000',ride.contribution) };
    }),month:monthlyCashFlow({...input.monthly,acquisitionSpend:decimal(input.monthly.acquisitionSpend).mul(s.modifiers.cacFactor).format(12)},cities,input.funding.opening),
    cashFlowHorizons:[12,15].map(horizon=>{
      // Uniform hypothetical activity and fixed staffing, not a hiring or launch ramp.
      let opening = structuredClone(input.funding.opening);
      const rows = [];
      const budgetPerMonth = amount(input.funding.researchAcquisitionReserve,'reserve').div(horizon);
      for(let month=1;month<=horizon;month++) {
        const row = monthlyCashFlow({...input.monthly,researchSpend:budgetPerMonth.div(2).format(12),acquisitionSpend:budgetPerMonth.div(2).mul(s.modifiers.cacFactor).format(12)},cities,opening);
        rows.push({month,...row});
        opening={cash:row.closingCash,cashReceivables:row.closingCashReceivables,cardReceivables:row.closingCardReceivables,taxPayable:row.closingTaxPayable,reserve:row.closingReserve};
      }
      return {horizonMonths:horizon,status:'assumed uniform monthly schedule; no validated ramp',months:rows};
    }) };
  });
  const fixed = costs(input.monthly.fixedCosts,'fixed');
  return { modelVersion:input.modelVersion,status:'all synthetic assumptions; not validated economics',precision:'exact rational internally; display 10 decimal places half away from zero; transaction cents separate',provenance:input.provenance,
    scenarios:outputs,taxAlternatives:input.taxAlternatives.map(t=>rideEconomics(input.baseline.ride,t,input.baseline.cash)),
    funding:[12,15].map(m=>fundingEnvelope(m,fixed,input.funding.researchAcquisitionReserve,input.funding.contingencyRate)) };
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    if (process.argv.length > 3) throw new Error('usage: node tools/economics.mjs [inputs.json]');
    const path = process.argv[2] || fileURLToPath(new URL('../docs/research/economics-inputs.json',import.meta.url));
    console.log(JSON.stringify(runModel(JSON.parse(readFileSync(path,'utf8'))),null,2));
  } catch (e) { console.error(`Economics input rejected: ${e.message}`); process.exitCode = 1; }
}
