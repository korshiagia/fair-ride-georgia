# Legal/provider evidence index — 01-02, v1.0

Prepared/access cutoff **2026-10-04, Asia/Tbilisi**. Status: public-source discovery + prepared instruments; actual professional/company/provider outcomes absent. BIZ-03/VND-01, D-01/02/04, T-01-03/04. No invented review, merchant availability, permission, quote or test outcome. This register is an evidence acquisition/validation index, not a provider decision or M0 acceptance.

## Evidence classes and acceptance

| Class | What it can establish | What it cannot establish alone |
|---|---|---|
| PUBLIC-PRIMARY | Narrow publisher/document statement, source version and accessed text | Current company legal opinion, merchant approval, individual/fleet beneficiary rights, prices or successful tests |
| HISTORICAL / INACCESSIBLE / DISCOVERY | Version history or a lead to obtain evidence; failed retrieval retained | Current effective rule or product behavior; search excerpt not full terms |
| PROFESSIONAL | Named dated counsel/accountant/privacy opinion with exact facts and permitted redacted summary | Out-of-scope company/service approval or bank underwriting; privileged originals kept restricted |
| MERCHANT-TERMS | Provider-written company/product/capability/fee/licence confirmation with scope and validity | Actual recovery behavior or guaranteed city route/ETA quality |
| SYNTHETIC-SANDBOX | Authorized actual provider-environment F-ID/corpus run with expected/actual/reviewer/version | Live settlement, legal permission or merchant underwriting; local simulation is a different evidence class |
| AUTHORIZED-FIELD | Actual safe, lawful city observations against independently sourced ground truth | Statistical representativeness or annual seasonality from a small sample |

Prepared questions, proposed posting examples, thresholds and weights are **SELECTED-DIRECTION / UNVALIDATED-HYPOTHESIS**, not evidence of acceptance. Current count: professional opinions 0; company offers/approvals 0; authorized provider sandbox runs 0; maps/ETA field runs 0; signed agreements 0; contacts 0.

## Refreshed public primary sources — narrow paraphrases

Every source below was accessed/attempted on 2026-10-04, Asia/Tbilisi. Relative “updated … ago” text is recorded as relative, never converted to an invented effective date. Recheck exact applicable terms at professional/provider sign-off and before integration/activation. Where a live source has no exact date, validity for company terms is UNKNOWN.

| ID | Publisher / exact source | Publication / effective date / version | Verified public claim and limits | Uses / current decision status |
|---|---|---|---|---|
| E-L01 | Matsne, [Law on Payment Systems and Payment Services](https://matsne.gov.ge/en/document/view/1673253) | Law 6304-Iს issued 2012-05-25, published 2012-06-12, activation 2012-07-01; extracted English consolidation **2015-06-12–2015-09-03**, explicitly not final | Page identifies a statutory review starting point and warns this edition is not final. No substantive current exemption/licensing conclusion drawn | L-08/P-01; current Georgian version and professional application UNKNOWN |
| E-L02 | National Bank of Georgia, [Provider list](https://nbg.gov.ge/en/page/payment-service-providers) | Undated live page; revision/effective date not exposed | Retrieved title/navigation only; no extractable provider entity entries. Does not confirm Payze or any candidate's current registration in this access | Alternative qualification lead; registration/status UNKNOWN, obtain authoritative current record |
| E-P01 | TBC, [E-Commerce FAQ](https://developers.tbcbank.ge/docs/e-commerce-faq) | Undated live FAQ, page says “Updated 6 months ago”; effective product/contract version not exposed | Recurring and split require bank confirmation; split requires requesting/joining bank programme. Callback payment ID can be used to retrieve details. FAQ testing-limit text does not identify a free synthetic sandbox | P-01/03/06/09; public-doc observation only; company activation and authorized safe test environment UNKNOWN |
| E-P02 | TBC, [Get E-Commerce payment details](https://developers.tbcbank.ge/docs/checkout-get-checkout-payment-details) | Public v1 tpay documentation; “Updated 6 months ago”, exact publication/effective date unknown | Documents payId lookup, processing/return statuses and preauth/confirmedAmount fields. Schema alone does not prove safe idempotency, payout or post-split refunds | F-01/03/05, P-02/03/07; merchant terms and actual outcomes UNKNOWN |
| E-P02a | TBC, [Create E-Commerce payment](https://developers.tbcbank.ge/docs/checkout-create-checkout-payment) | Public v1 tpay documentation; exact effective date not established | Documents payment initiation and merchant-specific available methods. No API request executed; examples/keys were not copied | P-02/09; enablement, amount/expiry/fare policy and test availability UNKNOWN |
| E-P03 | Bank of Georgia, [Official documentation index](https://api.bog.ge/docs/en/llms.txt) | Live machine-readable product index; exact build/effective date not exposed | Payment Manager index lists preauth full/partial confirmation, full rejection, refund and split docs. It separates top-up/OCT, billing and banking products | P-02/05/06; index is discovery evidence, no method-specific or merchant confirmation |
| E-P04 | Bank of Georgia, [Top-up/OCT standard process](https://api.bog.ge/docs/en/payments-addons/standard-process/) | Undated live payments-addons page; exact version/effective date unknown | Describes refund/payment-details/callback and payout to previously saved cards in this product. Its method-specific refund constraints cannot be transferred blindly to Payment Manager or bank payouts | P-05/06; same-name functionality across products is not proof of ride/fleet availability |
| E-P05 | Payze, [Official related-documents discovery page](https://payze.io/en/documents) | Search result undated; direct page retrieval failed | Primary-domain search excerpt identifies a related-documents page. Contents, entity licence, current product features and terms **not verified** | Alternative candidate only, NOT QUALIFIED; no fee/split/registration assertion |
| E-M01 | Google, [Routes API policies and attribution](https://developers.google.com/maps/documentation/routes/policies) | Page last updated **2026-09-28 UTC**; live policy, applicable agreement/effective terms need review | Routes content caching/display restrictions apply; place IDs have a narrow storage exception. Map display must follow product requirements | M-01/05/06; does not grant general route cache, mixed map, offline or company licence |
| E-M02 | Mapbox, [Geocoding API: storing results](https://docs.mapbox.com/api/search/geocoding/#storing-geocoding-results) | Geocoding v6 live docs, publication/effective date not shown | Temporary geocodes cannot be cached; permanent storage has eligibility conditions. v6 POI data uses separate Search Box API | M-01/04; no purchased/permanent/storage/routing/offline entitlement assumed |
| E-CITY | [01-01 city-evidence refresh](../research/city-evidence.md), exact primary links in CE-Z/K/B/T/R/N rows | Access 2026-10-04; each public source date/version listed there | Incorporates city-specific historical rules/operator pages and explicit inaccessible/current-rule gaps without duplicating or editing them | L-03/04/05/15; Zugdidi, Kutaisi, Batumi, Tbilisi, Rustavi and airports remain separately OPEN-EXTERNAL |

Primary docs supply discovery constraints only. Unknown source dates remain unknown; public document validity does not become a merchant quote expiry. The inherited [source register](../../research/SOURCE-REGISTER.md) has access 2026-10-03 for unrefreshed entries (including MR-33 OSM policy and MR-27 tax source); do not silently relabel those as refreshed.

## Failed retrievals and unresolved document paths

| Attempt | Date / result | Required follow-up / effect |
|---|---|---|
| TBC guessed paths `/reference/payment-cancellation`, `/docs/preauthorization`, `/reference/get_v1-tpay-payments-paymentid` | 2026-10-04, web tool inaccessible | Use official navigated E-P02/02a and provider-supplied exact versioned cancellation/capture reference; no inferred capabilities |
| BOG `/docs/payments` and granular `.md` preauthorization approve/reject, refund and split pages listed by E-P03 | 2026-10-04, web tool inaccessible | Index retrieved successfully; obtain actual product pages/current documents later. Method implementation/details stay UNKNOWN |
| Payze related-documents page | 2026-10-04, direct retrieval inaccessible | Official search excerpt only; obtain authoritative exact entity/docs and regulatory validation before qualifying |
| NBG provider-list page | 2026-10-04, page retrieved but no entity rows | Obtain current official registration record; no “not found”/absence claim from extraction failure |
| Current consolidated Tbilisi annex/tax/privacy interpretations | CE-T01/02 and CE-N01/02 describe available/failed source access | Professional current Georgian interpretation still required; historical/partial page is not current approval |

No subscription/purchase, provider log-in or bypass was attempted to resolve access gaps. A failed public retrieval is recorded as an evidence gap, not an authentication success or provider rejection.

## Actual-evidence intake templates — currently empty by design

These are pending external prerequisites, not missing implementation stubs. Complete only from genuine authorized evidence. Do not create review-outcome.md or provider-decision.md from these templates alone.

| Evidence ID family | Required record / owner | Present state |
|---|---|---|
| PR-L01–16 | Named counsel/accountant, professional capacity, scope/conflicts, signed/datable original restricted ref, permitted redacted conclusion, current law clause/effective version, F-ID mapping, conditions and review date | NOT RECEIVED; all legal/tax/payment/insurance/permit findings UNKNOWN |
| MT-TBC / MT-BOG / MT-ALT | Exact legal merchant/provider entity and product, underwriting approval scope, beneficiary/KYC, auth/refund/split/payout/recovery capability, security/data terms, actual quote and validity, issuer/settlement/chargeback liabilities | NOT RECEIVED; all company capability and price gates UNKNOWN |
| MT-MAP-candidate-product | Applicable product/region agreement, storage/display/cache/offline/export/derivative/transfer restrictions, DPA/subprocessors, pricing/quota and expiry; reviewer acceptance | NOT RECEIVED; rights beyond narrow public observations UNKNOWN |
| SB-candidate-F01–09 | Authorized actual synthetic environment, product/version, expected/actual output, operation IDs redacted, timing/callback/query, journal/reconciliation trace, adverse case and reviewer | NOT RUN; provider-sandbox outcomes 0 |
| MAP-candidate-city-seed-op | Rubric case G/P/R/E/D, licensed independent truth ref, query/version/time/network, actual quality/error/fallback and lawful retained evidence, reviewer | NOT RUN; each named city 0/20 proposed ordinary cases; airport/corridor cases 0 |
| SIGN-scope | Named business, professional, technical/privacy/security reviewers; accepted model/weights/thresholds, critical conditions disposition, exact service/city/term expiry and change trigger | NOT RECEIVED; M0 OPEN |

Record template for every evidence item: `ID; class; precise claim and P/M/L/F IDs; provider/entity/product; city/service/jurisdiction; author/owner/reviewer; document number/version; publication/effective/access/expiry dates; observation period/timezone; input/output units and denominator; approved redacted result; original restricted reference; integrity hash if lawful; contradictory sources; uncertainty/conditions; decision scope; next review trigger`. Restricted refs must not contain bearer tokens, signed download URLs or private participant identifiers.

Evidence validation before marking PASS: authenticate original/author/source; match exact company/product/service; verify current version/validity; trace to the named mandatory row and actual expected/observed case; verify redaction and retention/transfer permission; independent reviewer reproduces; resolve contradictions. Legal opinion and bank terms require different responsible reviewers. If expiry/effective applicability is uncertain, status is UNKNOWN; no automatic 30/90-day assumption. Planned evidence freshness is selected for reviewer approval: current applicable legal version at sign-off; quote/contract within explicit issuer validity; sandbox version matches selected product; city/season/road evidence rerun on material scope/road/licence changes.

## Claim and gate mapping

| Requirement / decision / threat | Prepared artifact and evidence dependencies | Completion limit |
|---|---|---|
| BIZ-03 / D-04 / T-01-03 | L-01–16 brief + F-01–09 payer/obligation/bank/journal/reconciliation/liability cases; PR and MT required | Instruments prepared; no professional approval, custody exemption, tax treatment or receipt issuer concluded |
| VND-01 / D-01/02 / T-01-04 | P-01–10, M-01–06 before weighted comparison; E-P/M public docs + MT + SB + five-city MAP records | No provider selected/qualified commercially; no actual comparison score/test outcome |
| D-01 city/airport separation | CE city source scope + urban/airport/corridor rubric rows | No city/airport activated; map presence does not confer access |
| T-01-04 restricted evidence | Synthetic IDs, hosted/tokenized payment proposal, authorized intake, minimal redacted summaries, logs/events/backups and transfer review | No raw cards/secrets/privileged/raw personal records committed; operational controls not implemented |

The Task 1 human-check can review technical preparation for completeness and explicit unknowns; it cannot substitute for counsel/accountant acceptance or provider-specific evidence. External Task 2 remains the gate. Task 3 will produce reviewed outcomes/recommendations only when actual evidence permits them; no requirement, plan or M0 completion is claimed now.
