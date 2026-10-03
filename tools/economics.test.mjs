import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { decimal, driverEconomics, rideEconomics, acquisition, breakEven, monthlyCashFlow, fundingEnvelope, scenario, runModel } from './economics.mjs';
const input = JSON.parse(readFileSync(new URL('../docs/research/economics-inputs.json',import.meta.url),'utf8'));
const fresh = () => structuredClone(input.baseline);
const fmt = x => x.format();
const row = (boundary, amount) => ({ boundary, amount, status:'assumed', source:'synthetic oracle' });
const city = () => ({...fresh(),city:'Kutaisi',completedRides:'10000'});
const emptyMonth = () => Object.fromEntries(Object.keys(input.monthly).map(k=>[k,k==='fixedCosts'?[]:'0']));

test('12 GEL exact oracle retains blended sub-cent PSP cost',()=>{
  const b=fresh(), r=rideEconomics(b.ride,b.tax,b.cash);
  assert.equal(fmt(r.nominalCommission),'1.8000000000');
  assert.equal(fmt(r.pspCost),'0.1440000000');
  assert.equal(fmt(r.totalCosts),'0.8140000000');
  assert.equal(fmt(r.contribution),'0.9860000000');
  assert.equal(r.contribution.n,493n); assert.equal(r.contribution.d,500n);
  assert.equal(fmt(r.recognizedRevenue),'1.8000000000');
  assert.equal(fmt(r.driverFarePassthrough),'10.2000000000');
});
test('10% and 20% sensitivities match independent business-model examples',()=>{
  for(const [rate,expected] of [['0.10','0.3860000000'],['0.20','1.5860000000']]) {
    const b=fresh(); b.ride.commissionRate=rate;
    assert.equal(fmt(rideEconomics(b.ride,b.tax,b.cash).contribution),expected);
  }
});
test('conditional inclusive tax preserves exact fraction and differs from exclusive/principal',()=>{
  const b=fresh();
  const inclusive=rideEconomics(b.ride,{mode:'agent_commission_inclusive',rate:'0.18'},b.cash);
  assert.equal(fmt(inclusive.recognizedRevenue),'1.5254237288');
  assert.equal(fmt(inclusive.contribution),'0.7114237288');
  assert.equal(inclusive.contribution.n,20987n); assert.equal(inclusive.contribution.d,29500n);
  const exclusive=rideEconomics(b.ride,{mode:'agent_commission_exclusive',rate:'0.18'},b.cash);
  assert.equal(fmt(exclusive.grossFeeDue),'2.1240000000');
  assert.equal(fmt(exclusive.contribution),'0.9860000000');
  const principal=rideEconomics(b.ride,{mode:'principal_fare_inclusive',rate:'0.18'},b.cash);
  assert.equal(fmt(principal.recognizedRevenue),'10.1694915254');
  assert.equal(fmt(principal.contribution),'-0.8445084746');
});
test('explicit display rounding is half away from zero, separate from exact expected economics',()=>{
  assert.equal(decimal('0.005').format(2),'0.01');
  assert.equal(decimal('-0.005').format(2),'-0.01');
  assert.equal(decimal('0.144').format(2),'0.14');
  assert.equal(decimal('1').div('3').format(10),'0.3333333333');
  assert.equal(decimal('-0.0001').format(2),'0.00');
});
test('driver online-hour example includes idle hours, tips and incentives once',()=>{
  const b=fresh(); assert.equal(fmt(driverEconomics(b.driver).netPerOnlineHour),'14.5000000000');
  b.driver.tips='100'; b.driver.incentives='200';
  assert.equal(fmt(driverEconomics(b.driver).grossReceipts),'5400.0000000000');
  assert.equal(fmt(driverEconomics(b.driver).netPerOnlineHour),'16.0000000000');
  b.driver.onlineHours='100'; assert.equal(fmt(driverEconomics(b.driver).netPerOnlineHour),'32.0000000000');
});
test('reject zero online hours; retain negative net and nonpositive contribution',()=>{
  const b=fresh(); b.driver.onlineHours='0'; assert.throws(()=>driverEconomics(b.driver),/positive/);
  b.driver.onlineHours='200'; b.driver.eligibleFares='100'; assert.equal(fmt(driverEconomics(b.driver).netPerOnlineHour),'-10.5750000000');
  assert.equal(breakEven('250000','0').monthlyRides,null);
  assert.equal(breakEven('250000','-1').monthlyRides,null);
});
test('break-even counts ceil actual rides using unrounded contribution',()=>{
  assert.equal(breakEven('250000','0.986').monthlyRides,'253550');
  const b=fresh(), r=rideEconomics(b.ride,{mode:'agent_commission_inclusive',rate:'0.18'},b.cash);
  // BUSINESS-MODEL.md says "about 351408"; a whole-ride ceiling is 351409.
  assert.equal(breakEven('250000',r.contribution).monthlyRides,'351409');
});
test('cost duplicate boundaries, pass-through/CAC and capital overlap are rejected',()=>{
  const b=fresh(); b.ride.costs.push(row('map','0.08'));
  assert.throws(()=>rideEconomics(b.ride,b.tax,b.cash),/duplicate/);
  for(const name of ['psp','acquisition','driver_fare','tips','tax','fixed_opex','cash_default']) {
    const x=fresh();x.ride.costs.push(row(name,'1'));assert.throws(()=>rideEconomics(x.ride,x.tax,x.cash),/duplicate/);
  }
  const d=fresh().driver;d.costs.push(row('lease','100'));assert.throws(()=>driverEconomics(d),/capital/);
  const e=fresh().driver;e.costs.push(row('empty_distance','100'));assert.throws(()=>driverEconomics(e),/empty distance/);
  const m=emptyMonth();m.fixedCosts.push(row('infra_incremental','100'));assert.throws(()=>monthlyCashFlow(m,[city()]),/duplicate/);
});
test('nonfinite, unsafe, negative, unknown and missing inputs fail loudly',()=>{
  for(const x of [NaN,Infinity,-Infinity,Number.MAX_SAFE_INTEGER+1,'9007199254740992',null,undefined,true,{},'1e3','0.1234567890123']) assert.throws(()=>decimal(x));
  for(const x of ['-1',null,'unknown']) {const b=fresh();b.ride.fare=x;assert.throws(()=>rideEconomics(b.ride,b.tax,b.cash));}
  const missing=fresh();delete missing.ride.pspRate;assert.throws(()=>rideEconomics(missing.ride,missing.tax,missing.cash),/missing/);
  const typo=fresh();typo.ride.pspFee='1';assert.throws(()=>rideEconomics(typo.ride,typo.tax,typo.cash),/unsupported/);
  const b=fresh();b.ride.cardShare='1.1';assert.throws(()=>rideEconomics(b.ride,b.tax,b.cash),/fraction/);
  assert.throws(()=>rideEconomics(fresh().ride,{mode:'approved_tax',rate:'0'},fresh().cash),/unknown tax/);
  assert.throws(()=>rideEconomics(fresh().ride,{mode:'unresolved_no_tax',rate:'0.18'},fresh().cash),/rate 0/);
});
test('cash receivable recognition never equates unpaid debt with liquidity',()=>{
  const b=fresh();b.ride.cardShare='0';b.cash.collectionFraction='0.5';b.cash.defaultFraction='0.1';
  const r=rideEconomics(b.ride,b.tax,b.cash);
  assert.equal(fmt(r.cashReceivable),'1.8000000000'); assert.equal(fmt(r.cashCollected),'0.9000000000');
  assert.equal(fmt(r.cashWrittenOff),'0.1800000000'); assert.equal(fmt(r.cashOutstanding),'0.7200000000');
  assert.equal(fmt(r.contribution),'0.9500000000');
  b.cash.defaultFraction='0.6';assert.throws(()=>rideEconomics(b.ride,b.tax,b.cash),/exceeds 1/);
});
test('month cash bridges current/prior debt, settlement delay, tax, reserves and funding',()=>{
  const c=city();c.completedRides='100';c.cash.collectionFraction='0.5';c.cash.defaultFraction='0.1';c.cash.cardSettlementFraction='0';
  const m=emptyMonth();Object.assign(m,{priorCashCollection:'20',priorCashWriteoff:'5',priorCardCollection:'30',reserveDeposit:'10',reserveRelease:'5',funding:'100',capex:'5'});
  const r=monthlyCashFlow(m,[c],{cash:'0',cashReceivables:'50',cardReceivables:'40',taxPayable:'0',reserve:'0'});
  assert.equal(fmt(r.receipts),'86.0000000000'); assert.equal(fmt(r.closingCashReceivables),'53.8000000000');
  assert.equal(fmt(r.closingCardReceivables),'118.0000000000'); assert.equal(fmt(r.closingReserve),'5.0000000000');
  assert.equal(fmt(r.operatingCashCosts),'81.4000000000'); assert.equal(fmt(r.closingCash),'94.6000000000');
  const taxCity=city();taxCity.completedRides='1';taxCity.tax={mode:'agent_commission_inclusive',rate:'0.18'};
  const t=monthlyCashFlow(emptyMonth(),[taxCity]);assert.equal(fmt(t.closingTaxPayable),'0.2745762712');
  const over=emptyMonth();over.taxRemittance='1';assert.throws(()=>monthlyCashFlow(over,[taxCity]),/exceeds/);
  const debt=emptyMonth();debt.priorCashCollection='1';assert.throws(()=>monthlyCashFlow(debt,[city()]),/exceeds/);
});
test('additional PSP fees and cash collection costs are explicit, not assumed free',()=>{
  const b=fresh();b.ride.cardExtraFee='0.10';b.ride.cashCollectionCost='0.05';b.ride.serviceRevenue='0.20';
  const r=rideEconomics(b.ride,b.tax,b.cash);assert.equal(fmt(r.pspCost),'0.2040000000');
  assert.equal(fmt(r.cashCollectionCost),'0.0200000000');assert.equal(fmt(r.contribution),'1.1060000000');
});
test('introductory subsidies differ from steady contribution; acquisition deducted only monthly',()=>{
  const b=fresh();b.ride.costs.find(x=>x.boundary==='introductory_incentives').amount='0.5';
  const r=rideEconomics(b.ride,b.tax,b.cash);assert.equal(fmt(r.contribution),'0.4860000000');
  assert.equal(fmt(r.contributionBeforeIntroductoryIncentives),'0.9860000000');
  const m=emptyMonth();m.acquisitionSpend='100';const c=city();c.completedRides='1';
  assert.equal(fmt(monthlyCashFlow(m,[c]).operatingResultAfterFixedAndAcquisition),'-99.0140000000');
});
test('cohort CAC/LTV/payback use paid/retained denominators and explicit horizon',()=>{
  const c={kind:'first_paid_rider',spend:'100',activeUsers:10,ridesPerUserByMonth:['5','5','5'],retentionCostPerUserByMonth:['0','0','0']};
  const a=acquisition(c,'1');assert.equal(fmt(a.cac),'10.0000000000');assert.equal(fmt(a.ltv),'15.0000000000');assert.equal(a.paybackMonths,2);assert.equal(fmt(a.ltvCac),'1.5000000000');
  assert.equal(acquisition(c,'-1').paybackMonths,null);assert.equal(fmt(acquisition(c,'-1').ltv),'-15.0000000000');
  c.activeUsers=0;assert.equal(acquisition(c,'1').cac,null);
  c.kind='registrations';assert.throws(()=>acquisition(c,'1'),/denominator/);
});
test('all adverse modifiers affect independent expected outcomes without changing online hours',()=>{
  const c=city(), find=n=>scenario(c,input.scenarios.find(s=>s.name===n).modifiers);
  const fare=find('fare_minus_20_percent');assert.equal(fmt(rideEconomics(fare.ride,fare.tax,fare.cash).contribution),'0.6548000000');assert.equal(fmt(driverEconomics(fare.driver).netPerOnlineHour),'9.4000000000');
  const util=find('utilization_minus_30_percent');assert.equal(util.completedRides,'7000.000000000000');assert.equal(fmt(driverEconomics(util.driver).netPerOnlineHour),'6.8500000000');
  const psp=find('psp_plus_50_percent');assert.equal(fmt(rideEconomics(psp.ride,psp.tax,psp.cash).contribution),'0.9140000000');
  const inc=find('incentives_double');assert.equal(fmt(rideEconomics(inc.ride,inc.tax,inc.cash).contribution),'0.6860000000');
  const cac=find('acquisition_plus_50_percent');assert.equal(fmt(acquisition(cac.acquisition[1],'0.986').cac),'60.0000000000');
  const trough=find('seasonal_trough_assumed_50_percent');assert.equal(fmt(driverEconomics(trough.driver).netPerOnlineHour),'1.7500000000');
  const outage=find('provider_outage_assumed_half_activity_unsettled_cards');const r=monthlyCashFlow(emptyMonth(),[outage]);assert.equal(fmt(r.closingCardReceivables),'5400.0000000000');
  const combined=find('combined_adverse');assert.equal(fmt(driverEconomics(combined.driver).netPerOnlineHour),'-3.8600000000');
});
test('funding envelope and full five-city monthly schedules reproduce independent totals',()=>{
  assert.equal(fmt(fundingEnvelope(12,'280000','600000','0.25').envelope),'4950000.0000000000');
  assert.equal(fmt(fundingEnvelope(15,'280000','600000','0.25').envelope),'6000000.0000000000');
  const result=runModel(input);assert.equal(result.scenarios.length,10);
  for(const s of result.scenarios) {assert.deepEqual(s.cities.map(x=>x.city),['Zugdidi','Kutaisi','Batumi','Tbilisi','Rustavi']); assert.equal(s.cashFlowHorizons[0].months.length,12);assert.equal(s.cashFlowHorizons[1].months.length,15);}
  const normal=result.scenarios[0];assert.equal(fmt(normal.month.fixedCosts),'280000.0000000000');assert.equal(fmt(normal.month.accrualContribution),'49300.0000000000');assert.equal(fmt(normal.month.netCashFlow),'-280700.0000000000');
  assert.equal(fmt(normal.cashFlowHorizons[0].months[11].closingCash),'1581600.0000000000');
  assert.equal(fmt(normal.cashFlowHorizons[1].months[14].closingCash),'889500.0000000000');
  assert.equal(fmt(result.scenarios[9].month.closingCashReceivables),'14400.0000000000');
  const adverse=result.scenarios.find(s=>s.name==='combined_adverse').cashFlowHorizons[1].months[14];
  assert.equal(fmt(adverse.closingCash),'-148785.0000000000');
  assert.equal(fmt(adverse.additionalFundingToAvoidNegativeCash),'148785.0000000000');
});
test('five-city kit rejects duplicated cities and claiming collected evidence',()=>{
  const duplicate=structuredClone(input);duplicate.cities[4].city='Zugdidi';assert.throws(()=>runModel(duplicate),/five distinct/);
  const observed=structuredClone(input);observed.cities[0].collected=1;assert.throws(()=>runModel(observed),/synthetic/);
});
