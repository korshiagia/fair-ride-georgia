# PSP and maps evaluation instrument — v1.0

Prepared 2026-10-04, Asia/Tbilisi. **Status: PREPARED; all commercial eligibility and actual test results UNKNOWN / NOT RUN.** BIZ-03/VND-01, D-01/02/04, T-01-03/04. No provider selected, account created, sandbox invoked, charge made, quote obtained or contract signed. This document declares a reproducible future comparison, not provider acceptance. [Evidence index](evidence-index.md) distinguishes public documentation from merchant-specific terms and actual outcomes; [funds flow](../legal/funds-flow.md) establishes required scenarios.

## Candidate register

| Candidate / product scope | Public evidence and narrow finding | Qualification / next evidence | Current decision |
|---|---|---|---|
| TBC E-Commerce | E-P01 FAQ documents feature activation and split-program confirmation; E-P02 documents payment-details/preauth status fields | Reviewed business underwriting, beneficiary/refund/payout scope, fee offer and synthetic F-01–09 evidence; identify exact product, not any TBC API | HOLD — mandatory criteria UNKNOWN |
| Bank of Georgia Payment Manager | E-P03 official docs index lists preauthorization confirmation/rejection, refund and split pages; E-P04 is a distinct top-up/OCT product, not proof of driver bank payout | Exact merchant/product scope, primary method-specific details, split reversal/beneficiary, payout and recovery evidence; do not merge billing/top-up/Payment Manager capabilities | HOLD — mandatory criteria UNKNOWN |
| Payze — alternative discovery lead | E-P05 official documents page found in search; direct retrieval failed. E-L02 NBG provider-list page supplied no extractable registration entries | **Qualification not established.** Before admission: exact Georgian legal entity/current regulatory status, actual bank/acquirer relationship, official technical docs, reviewed ride-service fit, F cases and current terms. Otherwise reject/replace with another properly evidenced alternative | NOT QUALIFIED / HOLD; no registration, split or onboarding assertion |
| Google Maps Platform, specific Routes/search/geocoding products | E-M01 Routes policy restricts caching/display; place-ID exception is narrow | Product/region/term-specific permitted pickup/search/routing, retention/transfer and outage strategy; five-city actual evidence | HOLD — quality/terms not reviewed |
| Mapbox, Geocoding v6 + separately licensed routing/search/maps | E-M02 distinguishes temporary/permanent geocoding; v6 POI search uses another product | Exact Search/Navigation/mobile/offline agreements and city corpus; permanent geocoding is not an unrestricted routing-data licence | HOLD |
| Contracted OSM-based service / approved self-hosted data path, alternative | Existing MR-33 official public tile policy is a dated discovery reference, not refreshed capability evidence | Supplier or approved deployment contract, ODbL/attribution/derivative-database analysis, update source, routing/ETA and operated SLA; no infrastructure built | HOLD; public OSM tiles are not a commercial offline/SLA substitute |

Shortlist is a selected research direction. No “qualified alternative” is invented: Payze must pass qualification before comparable admission; an actual qualified alternative can be added with evidence and the same unchanged gates. At least two eligible candidates are preferred for comparison; one or zero yields an explicit constrained-path review, not a fabricated competitor score.

## Decision algorithm — hard gates before weighted scoring

Each row has `PASS | FAIL | UNKNOWN`, evidence IDs, reviewer, exact scope/product/version, date and expiry. PASS requires the row's evidence types, current usable terms for this company/service and reproducible actual outcomes where specified. Public docs alone never pass company eligibility, liability or commercial terms. FAIL requires affirmative contradiction/failed actual check; inaccessible, stale, missing or unreviewed evidence is UNKNOWN, never PASS or numeric zero. Conflicting evidence makes UNKNOWN pending resolution.

1. Freeze service scope, legal model, test matrix, currency/volume/feature mix, thresholds, weights and evidence-validity policy before tests. Proposed thresholds/weights below require business/technical/professional review; they are not accepted laws or SLAs.
2. Evaluate all applicable hard gates. **Any FAIL → REJECT for that scope. No FAIL but any UNKNOWN → HOLD. All PASS → ELIGIBLE for that exact scope only.** There is no weighted score for REJECT/HOLD.
3. `N/A` is not a pass shortcut. Only a dated, named reviewer-approved scope exclusion with no dependency can remove a criterion from the applicability set. Unsupported split may use an independently approved legal/bank payout alternative; it cannot be removed while the chosen funds path depends on split. Removing airports does not imply airport approval. Preserve rejected prior scope.
4. For ELIGIBLE candidates, every weighted input must have dated evidence. A missing quality/cost observation produces `SCORE UNKNOWN`, no rank; do not renormalize weights or impute a zero price. If all scores exist, compute `score = Σ(weight × category_score / 5)`, bounded 0–100; retain full precision, round display to two decimals only.
5. Rank only within identical product/service/city/volume/observation scope. Ties within 1.00 point: lower actual total cost, then better actual recovery/pickup score; unresolved tie returns a documented business decision. Five-city recommendation requires independent city PASS and score evidence; never average away a failed city. Signing/onboarding/launch still requires separate authorization.

Synthetic logic examples only: mandatory `[PASS, UNKNOWN]` → HOLD/no score; `[PASS, FAIL]` → REJECT/no score; all PASS + unknown reserve/price → ELIGIBLE/SCORE UNKNOWN; all PASS + known category scores `[4,3,5,2]` with PSP weights below → 73.00. These examples are not candidate results.

## Mandatory PSP gates

| ID | Must-pass condition / acceptance | Evidence needed and actual future checks | Present result, all candidates |
|---|---|---|---|
| P-01 Legal model / company eligibility | Exact agent/principal/service classification and merchant entity permitted; lawful collection/custody and GEL settlement | Approved L-01/06/08 opinion + merchant-written underwriting/product/beneficiary scope; sandbox cannot prove legal eligibility | UNKNOWN |
| P-02 Authorization lifecycle | Preauth validity, full/partial capture and unused-hold cancel/expiry meet approved fare/amendment policy | Current exact method docs + company feature confirmation + F-01/02 actual sandbox; amount/expiry limits and decline paths recorded | UNKNOWN |
| P-03 Unknown-result recovery / replay | Stable operation identity, safe dedup/retry semantics or evidenced query-before-retry process; no duplicate effects under F-03 | Key retention/scope + lookup/finality documents/terms, verified actual delayed/duplicate/out-of-order/no-callback outcomes; provider inability to simulate is UNKNOWN | UNKNOWN |
| P-04 Callback and tenant security | Authentic callback or authenticated authoritative query, replay protection, least privilege/MFA/audit and no cross-resource action | Primary protocol + security review + synthetic invalid/mismatched/replayed callback/tenant F cases; no secrets in evidence | UNKNOWN |
| P-05 Refund / chargeback after distribution | Full and partial refund, total cap and post-split/post-payout liability/recovery path supported for each enabled payment method | Merchant terms, fee/chargeback deadline/negative-balance rules + F-04/05/09, including full split refund; no unsupported method enabled | UNKNOWN |
| P-06 Beneficiary / payout | Reviewed individual/fleet beneficiary/KYC/account path and correct payout/unknown recovery; split OR approved separate payout model | Counsel + merchant/bank-written terms + F-07/09, bank-equivalent evidence; payout-to-saved-card is not inferred bank-transfer eligibility | UNKNOWN |
| P-07 Reconciliation / liquidity | Trip/intent/effect/PSP/bank IDs trace gross/net, fee/reserve, cutoff, payout and refund; working capital funded | Actual format samples/synthetic outputs, statement specification and fee/reserve/settlement terms; F-01–09 trace, exception ownership | UNKNOWN |
| P-08 Privacy / PCI / transfer | Reviewed hosted/tokenized path, minimization/retention/erasure, processor regions/subprocessors/transfers/logs/backups | Security/privacy/counsel review + actual applicable agreements and schema; no PAN/CVV or privileged/raw docs in Git | UNKNOWN |
| P-09 Fees / commercial validity / access | Complete applicable fee, reserve, payout, currency, suspension/support schedules and authorized non-live sandbox available | Dated written company quote/terms/expiry, sandbox access authority and actual test environment identity; no assumed public price | UNKNOWN |
| P-10 Cash / corporate compatibility | Chosen cash commission collection and corporate credit paths do not require unsupported PSP custody/netting | L-11/13 accounting/legal model, F-06/08 evidence and bank/collection terms when used; explicit feature exclusions if approved | UNKNOWN |

Any duplicate money effect, unbalanced journal, cross-tenant action or unsupported legal collection is a mandatory FAIL if actually observed. Technical docs and a passed synthetic simulator alone do not establish real PSP/bank behavior.

## Mandatory maps gates and licensing worksheet

| ID | Must-pass condition | Evidence / proposed selected threshold | Present result |
|---|---|---|---|
| M-01 Product/service licence | Search/geocode/route/display/mobile/offline/cache/storage/audit/export/mixed-provider use fits exact intended service | Applicable agreement and counsel/privacy review; document product-by-product rights, attribution, derivative data, allowed retention/deletion and region/subprocessors | UNKNOWN |
| M-02 Five-city ground truth / pickup | Each city separately supports reviewed addresses/entrances and lawful safe pickup; airports independently gated | Corpus below + independently sourced licensed ground truth; proposed ≥95% city pickup checks correct and **zero observed prohibited pickup/turn accepted** | UNKNOWN / NOT RUN |
| M-03 Route and ETA | Legal directions for reviewed network; ETA and route quality meet declared service cohort | Actual authorized observations; per observation `normalized_error=abs(predicted_seconds−observed_seconds)/max(120,0.30×observed_seconds)`; proposed city p90 normalized error ≤1 and zero confirmed illegal turn. City/season/airport/corridor scopes distinct | UNKNOWN / NOT RUN |
| M-04 Search/geocoding and confidence | Georgian/Latin address, reverse geocode and uncertain results handled | Proposed ≥90% city exact/acceptable address checks, confidence/precision recorded; ambiguous/wrong-city response must request correction instead of auto-penalty | UNKNOWN / NOT RUN |
| M-05 Degradation | Timeout, stale location, no network, rate-limit and provider outage handled under licensed fallback | Synthetic fault instrument + licensed manual pin/landmark/last approved information flow; no fabricated ETA, implicit fee or unlicensed cached route/offline download | UNKNOWN / NOT RUN |
| M-06 Cost/support/transfer validity | Actual quota/billing/minimum/overage/support terms plus reviewed location transfers and evidence retention | Written terms/region/DPA, exact observation/price expiry; records from each enabled city and actual data lineage | UNKNOWN |

For **each candidate × product**, complete: `search input rights; geocode temporary/permanent permission; route/ETA cache allowed duration; own GPS vs vendor-derived geometry; trip/audit evidence retention; logs/event payloads/backups retention; export/transfer/subprocessor region; display attribution; mixed-provider restrictions; mobile offline entitlement; deletion/restore; exact clause/version; reviewer; status; recheck`. All candidate cells are UNKNOWN until completed. E-M01/02 supply narrow public constraints only. Provider content must not be copied to a corpus or cached for audit without permission. Preserve own authorized inputs/provenance separately from licensed outputs.

Manual fallback proposal: ask rider to choose a reviewed safe meeting point or correct a pin/landmark; show unavailable/uncertain estimate and obtain confirmation. If no safe lawful pickup/route or payment eligibility exists, pause that request/capability. Offline mode may show permitted locally retained booking details and support/emergency choices only; offline maps/routes need explicit rights. Provider fallback is separately licensed and must preserve attribution/provenance; it never grants municipal or airport rights.

## Five-city corpus — ready-to-review cases, not measured facts

These are proposed public-landmark query seeds, not verified coordinates/entrances, safe stopping locations or permissions. Before an authorized run, a local reviewer supplies independent licensed ground truth, exact origin/destination/entrance/one-way rules, time window and safe observation protocol. Missing truth yields UNKNOWN, not failure or guessed coordinates. No individual GPS trail required in Git.

Each seed expands into five named operations: **G** Georgian/Latin search + accepted address; **P** reverse geocode + entrance/pickup side; **R** legal route/one-way/bridge/prohibited-turn check; **E** predicted vs actually observed route/ETA; **D** ambiguity/stale/no-network/429/timeout fallback. Four seeds × five operations = **20 proposed cases per city / 100 total per candidate**, with subcases recorded separately. This small proposed corpus is a smoke review, not representativeness or a production SLA. Airport/corridor/second-season cases are additional to ordinary city acceptance.

| Seed IDs / city | Exact proposed query pair / route | Specific review challenge and expected safe behavior | Actual result |
|---|---|---|---|
| Z-01 / Zugdidi | `დადიანების სასახლე` / `Dadiani Palace, Zugdidi` → `ზუგდიდის რკინიგზის სადგური` | Public landmark versus actual legal entrance/station meeting point; Georgian/Latin agreement | NOT RUN |
| Z-02 / Zugdidi | `ზუგდიდის რკინიგზის სადგური` / `Zugdidi railway station` → `ზუგდიდის ცენტრალური ბაზარი` | Rail-arrival pickup, informal landmark search; curb/safe-stop ground truth pending | NOT RUN |
| Z-03 / Zugdidi | `თავისუფლების ქუჩა, ზუგდიდი` / `Tavisuplebis Street, Zugdidi` → Z-01 | Local reviewer selects two actual numbered public entrances; same street/ambiguous number must not auto-select wrong city | NOT RUN |
| Z-04 / Zugdidi | Z-01 → reviewer-selected public peripheral destination inside approved Zugdidi scope | Missing address/poor GPS, urban-edge route and manual confirmation; no airport extrapolation | NOT RUN |
| K-01 / Kutaisi | `თეთრი ხიდი, ქუთაისი` / `White Bridge, Kutaisi` → `ქუთაისის რკინიგზის სადგური` | Bridge/vehicle-access distinction, lawful pickup approach; do not route car over an unreviewed pedestrian segment | NOT RUN |
| K-02 / Kutaisi | `ქუთაისის რკინიგზის სადგური` / `Kutaisi railway station` → `კოლხური შადრევანი` | Station entrance, roundabout/one-way approach and safe meeting point | NOT RUN |
| K-03 / Kutaisi | `რუსთაველის გამზირი, ქუთაისი` / `Rustaveli Avenue, Kutaisi` → K-01 | Reviewer-selected numbered public entrances; Georgian/Latin/reverse accuracy, building centroid versus curb | NOT RUN |
| K-04 / Kutaisi | K-02 → reviewer-selected public peripheral destination inside approved urban scope | Sparse addressing, network interruption and route confidence | NOT RUN |
| B-01 / Batumi | `ბათუმის რკინიგზის სადგური` / `Batumi railway station` → `ევროპის მოედანი, ბათუმი` | Arrival pickup, lawful road approach, tourist spelling; independent legal stopping evidence | NOT RUN |
| B-02 / Batumi | `ბათუმის ბულვარი` / `Batumi Boulevard` → B-01 | Pedestrian/vehicle-access distinction; choose lawful road entrance instead of landmark centre | NOT RUN |
| B-03 / Batumi | `გორგილაძის ქუჩა, ბათუმი` / `Gorgiladze Street, Batumi` → B-01 | Numbered entrance/one-way and dense-building GPS; propose day/night/rain strata | NOT RUN |
| B-04 / Batumi | B-01 → reviewer-selected public peripheral destination | Peak versus contrasting off-season observations separately required; seasonal ETA never inferred from one run | NOT RUN |
| T-01 / Tbilisi | `თბილისის ცენტრალური სადგური` / `Tbilisi Central railway station` → `თავისუფლების მოედანი, თბილისი` | Multiple entrances, urban canyon, lawful curb/pickup; A/B eligibility separately checked | NOT RUN |
| T-02 / Tbilisi | `მეტრო ავლაბარი` / `Avlabari metro, Tbilisi` → T-01 | River/bridge/one-way detour; forbidden turn and driver approach | NOT RUN |
| T-03 / Tbilisi | `რუსთაველის გამზირი, თბილისი` / `Rustaveli Avenue, Tbilisi` → T-02 | Reviewer-selected numbered entrance versus Kutaisi namesake, pedestrian restrictions, weak GPS fallback | NOT RUN |
| T-04 / Tbilisi | T-01 → reviewer-selected public peripheral destination | City-scope boundary, congestion time windows and confidence; no geofence fee based only on stale GPS | NOT RUN |
| R-01 / Rustavi | `რუსთავის მერია` / `Rustavi City Hall` → `რუსთავის რკინიგზის სადგური` | Address/local landmark and lawful entrance/pickup approach | NOT RUN |
| R-02 / Rustavi | `რუსთავის რკინიგზის სადგური` / `Rustavi railway station` → `მეგობრობის გამზირი, რუსთავი` | Rail arrival, numbered public entrance and pedestrian/vehicle approach | NOT RUN |
| R-03 / Rustavi | `მეგობრობის გამზირი, რუსთავი` / `Megobroba Avenue, Rustavi` → R-01 | Reviewer selects two numbered public entrances; Georgian/Latin/reverse and ambiguity behavior | NOT RUN |
| R-04 / Rustavi | R-01 → reviewer-selected public destination on opposite reviewed urban zone | Bridge/detour legality, network loss and wrong-city rejection; boundary ground truth needed | NOT RUN |

Additional scope rows: **K-AIR** Kutaisi airport ↔ K-02; **B-AIR** Batumi airport ↔ B-01; **T-AIR** Tbilisi airport ↔ T-01; **R-T** Rustavi R-01 ↔ Tbilisi T-02 in both directions; **Z-REG** Zugdidi urban ↔ proposed regional/airport corridor only after destination clearance. Actual result for each: NOT RUN. Each needs independent jurisdiction/operator meeting-point review; mapping a road does not grant pickup rights. Airport failure cannot be hidden in city averages. Batumi contrasting seasons remain separate incomplete coverage until actually observed.

Execution record per atomic case: `candidate/product/version; city/service/seed/op ID; reviewer/authorization; input language; synthetic/public input and licence provenance; ground-truth restricted reference; expected route/pickup; UTC + Asia/Tbilisi time; device/network; predicted metres/seconds; observed metres/seconds; error/confidence; actual fallback; retained permitted output reference; PASS/FAIL/UNKNOWN; issue/severity; rerun cause`. Keep all failures and missing strata. G/P/R reviews can use approved synthetic/public inputs; E field observation requires contact/data/safety authority. A provider simulator cannot supply an actual observed ETA.

## Weighted comparison — selected direction, not professional acceptance

Only after mandatory PASS and evidence completeness. Scores below are continuous 0–5, from raw data; no assessor-assigned “good” rating. Freeze same case denominator and observation window for all compared candidates. `clamp(x,0,1)=min(1,max(0,x))`.

| PSP category | Weight | Category score and evidence |
|---|---:|---|
| Lifecycle quality | 40 | `5 × (valid completed non-fault lifecycle cases / all planned comparable non-fault lifecycle cases)`; F-01/02/04/05/07 actual provider runs, incomplete planned runs keep score UNKNOWN |
| Total economic cost | 25 | `5 × min(eligible positive TCO)/candidate TCO`; complete actual-term TCO at identical workload; zero/negative exceptional quote requires separately reviewed normalization, no divide by zero |
| Recovery / reconciliation | 20 | `5 × (correctly resolved fault/reconciliation cases / all planned comparable fault cases)`; F-03/09 plus cash/corporate matching; mandatory correctness failures reject regardless of score |
| Support response | 15 | `5 × clamp(agreed common target seconds / actual measured p90 acknowledgment seconds,0,1)`; target proposed 900s for synthetic urgent provider incident, approved window/case set and support contact authority required; contractual promise alone not measured response |
| Total | **100** | Display score to two decimals after full-precision sum; current all candidates: SCORE UNKNOWN |

| Maps category (calculate per city) | Weight | Category score and evidence |
|---|---:|---|
| Address/geocoding | 25 | `5 × acceptable G/reverse address checks / all planned address checks`; same reviewer truth and both spellings |
| Pickup/entrance | 25 | `5 × correct P checks / all planned P checks`; no unsafe/prohibited result may pass hard gates |
| Route/ETA quality | 25 | Mean of `5 × correct R / all R` and `5 × mean(clamp(1−abs(predicted−observed)/max(observed,1),0,1))` over all E observations; observed seconds >0 required, no invented zero denominator |
| Comparable total cost | 15 | `5 × min(eligible positive city TCO)/candidate city TCO`; actual same mix search/geocode/routes/matrices/mobile/offline calls and rights |
| Degradation/operations | 10 | `5 × correct D / all planned D`; licensed fallback and no fabricated estimate/penalty |
| Total | **100** | Each city separately; overall five-city score = minimum city score, only if all five are eligible and scored |

All planned operations need actual records or explicit pre-run reviewed changes; omitting a failed/unfinished case cannot improve a denominator. For percentiles, sort the declared complete observations ascending and use nearest rank at `ceil(0.90×n)` (one-based); `n=0` is UNKNOWN. For support scoring, an observed zero acknowledgment time yields 5, avoiding division by zero; the timestamp/time-resolution provenance must be retained. A score compares this sample and terms only; it does not prove production reliability. Re-run mandatory gates and refresh costs on any material model/product/licence/region change.

## Commercial worksheet and cost boundary — all prices UNKNOWN

For each candidate/product collect values **and** `unit; currency; tax inclusive/exclusive; charging trigger; payer; evidence ID; effective date; expiry; volume tier/minimum; scenario coverage; reviewer`. Blank is UNKNOWN, not 0. Fill every field, even when written terms explicitly say zero or not applicable.

| Field group | Required fields (current values UNKNOWN) | Economics treatment |
|---|---|---|
| PSP transaction | domestic/foreign-card %, fixed per auth/capture, decline/void/expiry, saved-card/token, 3DS/currency conversion | Apply to exact event/volume mix; avoid counting percent on full GMV and card GMV twice |
| Refund/dispute | full/partial refund charge, retained original fees, chargeback/representment, split reversal, beneficiary recovery | Fees versus unrecovered principal separated; refunded fare passthrough is not automatically platform loss |
| Settlement/payout | GEL/other currency, payout fixed/%, beneficiary KYC fee, minimum, frequency/cutoff/weekends, settlement delay, limits | Working-capital timing separate from contribution; bank and PSP fees assigned one boundary each |
| Reserve/default | rolling/fixed reserve %, release schedule, collateral, negative balance, cash debt collection/default, corporate aging/default | Reserve principal is restricted asset/liability according to accountant, not fee expense; only actual funding cost/loss enters expense |
| Maps | search/autocomplete keystrokes, geocode/reverse/permanent, route/matrix elements, traffic, map loads/MAU/navigation/offline, minimum/overage | Count all booking/matching/failed-request calls per completed ride; fixed licence costs distinct from variable calls |
| Validity/support | quote/contract version, price end date, VAT basis, regions/transfers, suspension/SLA/support tier and test rights | No public list price becomes company offer; unknown items block cost ranking |

Proposed comparable workload for quotation (assumption only): 10,000 completed rides/month, fare 12 GEL sensitivity baseline, 60% card/40% cash, 2% card refunds, 1% disputes and one reviewed payout schedule. Actual operation counts/countries/cards/refund sizes/map calls/fleet/corporate volumes must be supplied as explicit workload inputs before quotation/scoring; this illustrative mix cannot substitute for measurement.

`PSP TCO = Σ(event_count × fixed_fee + applicable_amount × percentage) + fixed licence/support + explicit FX + documented collection/dispute loss + separately reported reserve/settlement funding cost`. `Maps TCO = Σ(product_billable_units × actual_unit_rate) + licence/support/overage`, with actual tiers/free allowances applied once. Unknown reserve, payout, refund or currency values make TCO UNKNOWN. Provide 01-01 with named canonical boundary IDs, unit/period, tax/legal scenario, source and assumption status; do not overwrite its calculator inputs here. Report fee expense, cash tied in reserves/receivables and liability separately.

## Unsent provider/map evidence request

**Draft only; no contact/access/spend authorized or performed.**

„გთხოვთ დაადასტუროთ ჩვენს აღწერილ ქართულ ride-service მოდელზე ზუსტი მერჩანტის/პროდუქტის დაშვება, ბენეფიციარები, GEL settlement, preauth/capture/cancel, UNKNOWN პასუხის უსაფრთხო აღდგენა, refund split/payout-ის შემდეგ, reconciliation და სრული საკომისიო/რეზერვი/payout პირობები მოქმედების ვადით. რუბრიკის F-01–09 შემთხვევებზე გვჭირდება მხოლოდ წინასწარ ავტორიზებული სინთეტიკური გარემოს მტკიცებულება. Map სერვისისთვის გთხოვთ მიუთითოთ ხუთი ქალაქის პროდუქტის ფარგლები და search/geocode/route/ETA/offline/cache/storage/display/transfer პირობების ზუსტი მუხლები. ანგარიშის გახსნა, live გადახდა ან ხელშეკრულება ამ მოთხოვნით არ იწყება. გასაღებები და კონფიდენციალური პირობები მიიღება შეთანხმებული დაცული არხით.“

No provider-decision.md exists at this stage because no decision is defensible from public-doc discovery alone. Task 2 obtains authorized actual evidence; Task 3 applies this frozen rubric and records limitations/rejections. All five cities, airports and critical money/privacy conditions remain open.
