# Business model and planning economics

Date: 2026-10-03. Currency: GEL. All financial inputs below are explicit planning assumptions, not researched quotations, current market prices, tax advice, or revenue forecasts. User-selected cities: Zugdidi, Kutaisi, Batumi, Tbilisi, Rustavi.

## Commercial baseline

Choose a simple per-trip commission model first, with **15% as the modeling assumption**. Display the precise taxable commission base, driver deductions, promotions, tips and payout timing. Validate legal incidence and gross/net VAT treatment before quoting this rate to drivers. Tips accrue to drivers; tax/PSP handling still needs confirmation. Corporate service/credit fees require a separately disclosed agreement. Fleet revenue shares must specify the contracting party.

Do not launch subscriptions before reliable driver demand exists. Previous 99/249 GEL and 3–5% examples are hypotheses. A subscription transfers volume risk to a driver; a later plan needs explicit break-even disclosure, opt-out/refund terms and observed demand.

The principal-versus-agent decision affects recognized revenue, VAT base, passenger invoices, who owes the driver, refund liability, cash handling and PSP contracts. GMV is not automatically platform revenue. This is gate BIZ-03; until closed, figures are sensitivity calculations only.

## Marketplace economics and definitions

Measure drivers' earnings per **online hour**, including idle time, pickup distance and cancellations. An advertised weekly total without hours, expenses and commission basis cannot establish driver net profit.

Let B = eligible fares, T = tips, c = effective commission fraction, I = driver incentives, H = non-overlapping online hours, C = verified attributable fuel/energy + maintenance + depreciation/lease + insurance + taxes/other operating costs. Gross driver receipts = B × (1−c) + T + I. Net driver contribution per online hour = (gross receipts − C)/H. Fleet rent/financing must not be double-counted in depreciation. Report self-reported and directly measured costs separately.

Driver shift logs need: city/zone, day/hour, eligible vehicle category, offered/accepted/completed/cancelled trips, paid distance, pickup/unpaid distance, online hours, fares, incentives, tips, commission and actual costs. Multihoming time is tagged, not counted twice.

Platform ride contribution = net recognized commission/service revenue − PSP charges − map/routing − SMS/communications − incremental infrastructure − attributable support − fraud/refund loss − variable driver/passenger incentives. Exclude tip passthrough and driver fare passthrough from platform revenue. Exclude salaries, fixed contracts and acquisition CAC here if CAC is modeled separately; never subtract them twice. Distinguish steady-state contribution and contribution after introductory subsidies.

For cash rides, driver receives the fare directly and may owe a commission receivable. The platform must collect it under documented terms, reconcile collection/default risk, and apply a disclosed reviewed debt policy. Cash does not imply zero payment cost or automatically allow balance netting under every contract.

## Ride sensitivity example

Illustration inputs: eligible fare 12.00; c=15%; card share 60%; illustrative PSP charge 2% of card fare; map 0.08; communication 0.03; infrastructure 0.05; incremental support 0.15; expected refund/fraud loss 0.06; variable incentives 0.30. These values need vendor quotes and observed operational costs.

| Component | GEL / completed ride | Formula or boundary |
|---|---:|---|
| Nominal platform commission | 1.800 | 12 × 0.15, before VAT/legal model |
| Blended PSP cost | 0.144 | 12 × 0.60 × 0.02; authorization/refund/fixed fees omitted, must add |
| Map + communication + infrastructure | 0.160 | 0.08 + 0.03 + 0.05 |
| Incremental support | 0.150 | Must use actual case rate × handling cost |
| Refund/fraud loss | 0.060 | Expected unrecovered loss, not total refunded passthrough |
| Variable incentives | 0.300 | Actual allocated cost; no double counting with CAC |
| Indicative contribution, pre-tax model | **0.986** | 1.800 − 0.144 − 0.160 − 0.150 − 0.060 − 0.300 |

At these **illustrative** costs, 10% commission gives 0.386/ride; 20% gives 1.586/ride. This is not a recommendation to charge 20%. Lower realized fare, high cash default, additional PSP fees or tax treatment can change every result.

Conditional tax sensitivity only: if a 1.80 commission is VAT-inclusive at an assumed 18%, net commission is 1.80/1.18 = 1.5254 and illustrative contribution falls to 0.7114. This does **not** establish VAT registration, rate applicability, fee base or recovery rights. Counsel/accountant must supply the actual regime before this scenario is used commercially.

At assumed monthly fixed opex 250,000, break-even on contribution 0.986 would need about 253,550 completed rides/month, or 8,452/day using 30 days. Under the conditional VAT scenario, using unrounded contribution 1.80/1.18−0.814, about 351,408/month, or 11,714/day. Demand and feasible driver capacity have not been validated. This exercise explains why low commission alone cannot prove a viable business.

Driver illustration: B=6,000/month, c=15%, no tips/incentives implies 5,100 gross receipts before costs. At 200 online hours and hypothetical C=2,200, net contribution=14.50/hour. All three B/H/C are assumed. This must never be described as guaranteed take-home income.

## Acquisition and retention

Track driver CAC per newly eligible **active driver** who completes a defined retained shift cohort, not per registration. Track passenger CAC per rider completing a first paid ride and retention at 30/90 days. Define observation windows, cohort denominator and promotional spend allocation before comparing cities.

LTV model = retained completed rides × verified contribution − retention costs, with explicit cohort horizon; no perpetuity/exponential-growth assumption. Paid growth requires conservative LTV/CAC and cash runway validation, with confidence bounds. Provisional target: contribution after routine incentives positive by city cohort, and acquisition payback within 6 months on observed 90-day retention extrapolation; extrapolation remains labeled until longer evidence exists.

Driver retention and passenger retention can conflict with ETA, over-supply and pricing. Measure offer acceptance, fulfillment, cancellation, pickup ETA, driver online-hour receipts, unpaid mileage and subsidy per retained user jointly.

## Bottom-up funding envelope

Selected planning baseline: 15 product/engineering FTE with blended **assumed** fully loaded 12,000/FTE/month (not a Georgian salary benchmark). Monthly engineering=180,000. Add assumed fractional legal/finance/security=20,000/month; phased operations=60,000/month at full staffed baseline; vendor/cloud/tools=20,000/month; measured launch research/acquisition reserve=600,000 total. Operations includes 24/7 coverage provision but final staffing depends on concurrency and incident demand; it is not a promise that a nominal headcount always suffices.

| Horizon | Engineering | Specialists | Ops assumption | Vendors/tools | Research/acquisition | Subtotal | 25% contingency | Planning envelope |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 12 months | 2,160,000 | 240,000 | 720,000 | 240,000 | 600,000 | 3,960,000 | 990,000 | **4,950,000** |
| 15 months | 2,700,000 | 300,000 | 900,000 | 300,000 | 600,000 | 4,800,000 | 1,200,000 | **6,000,000** |

This envelope includes neither an owned vehicle fleet nor unlimited demand subsidies. PSP collateral/reserves, corporate receivables funding, real taxes, insurance, office/device procurement and coverage expansion can require additional cash. Obtain actual quotations and build monthly cash flow before assigning a committed funding target. If engineering/ops hires ramp rather than start together, recalibrate each month; do not claim the whole envelope is day-one burn.

The 12–15 month horizon is a sequencing assumption, not an estimated delivery guarantee. Foundation/contract discovery can change staffing, scope dependencies and the financing decision. A smaller available team requires a longer schedule or explicit product scope decision; it cannot silently remove financial/safety controls.

## Staffing and city service capacity

Core roles: 4 backend (one technical lead), 2 web, 2 Flutter, 2 Android, 1 platform/SRE, 2 QA/automation, 1 product, 1 UX. Assign module owners, reviewer coverage and release responsibility. Contract security testing, Georgian counsel/accountant and insurance expertise. Do not assign every operational task to engineers.

One continuously staffed seat requires 168 coverage hours/week. At 40 productive coverage hours/person/week, the arithmetic minimum is 4.2 FTE; leave/training/sick time and peak concurrency require more, provisionally 5–6 per seat. Initially plan shared five-city operations with at least one monitored safety triage seat and an accountable trained escalation roster during operating hours; public 24/7 availability requires actual 24/7 coverage evidence. General support seats are additional and scale by requests/hour × average handling time / allowed utilization. Two staff cannot sustain a 24/7 seat.

City launch acquisition budgets are released against evidence: route/hour-specific supply, fulfillment, wait fee dispute quality, rider retention and driver cost diary. Do not dilute drivers across all five cities to maximize a registration count.

## Pricing decisions still to be measured

Commission 15% is a proposed modeling baseline. Fare rates, waiting grace/caps, cancellation amounts, airport fees, no-show windows, payout cadence and maximum corporate credit are not invented here. The governing contracts and versioned policy schemas must exist before the provider/city is enabled. Apply them in shadow/sandbox and then controlled staffed operation; no policy omission is handled by an invisible default fee.

Record city-level cash/card mix, fare distribution, PSP fixed/variable fees, map calls/ride, matching attempts/request, support incidence and payment failure. Use adverse scenarios: fare −20%, utilization −30%, acquisition +50%, PSP cost +50%, incentives double, seasonal demand trough and provider outage. Reconcile ledger to PSP bank statements before replacing assumptions with measured figures.

Reference evidence and legal limitations: [MARKET-REGULATORY](research/MARKET-REGULATORY.md), [SOURCE-REGISTER](research/SOURCE-REGISTER.md), [validation gates](VALIDATION-AND-LAUNCH-GATES.md).
