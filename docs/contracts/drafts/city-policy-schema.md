# Five-city and service policy schema

**DRAFT / UNREVIEWED — v0.2. Revised 2026-10-05, Asia/Tbilisi. Source cutoff/access: 2026-10-04.**

Requirements supported, not completed: PRD-01, BIZ-01, VND-01. Decisions: D-01, D-02, D-03, D-04, D-05, D-06. Owner role: Policy / Georgian counsel / city operations; named accountable reviewer not appointed. All application/device/PSP/field/security scenarios: **NOT RUN**. No implementation, provider access, live funds, professional acceptance, M0 approval or city activation is established.

Evidence classes: PUBLIC-PRIMARY / DOCUMENTED_PUBLIC describe only the dated publisher statement; SELECTED-DIRECTION is a proposed design; UNVALIDATED-HYPOTHESIS includes every numerical policy/limit/retention choice; PROFESSIONAL, MERCHANT-TERMS and AUTHORIZED-FIELD are missing actual gates. Original [01-01](../../../.planning/phases/01-validation-contracts/01-01-CHECKPOINT.md) and [01-02](../../../.planning/phases/01-validation-contracts/01-02-CHECKPOINT.md) actual checkpoints remain open. [01-04 evidence](../../../research/PUBLIC-EVIDENCE-UPDATE-2026-10-04.md) is the bounded public baseline. The independent 01-06 desk review and subsequent re-review do not replace canonical 01-03 or M0 plus later implementation instruction.

Revision v0.2 reconciles the bounded written recommendations [F-01–12](../../reviews/drafts/contract-desk-review.md#f-01); original IDs are retained. Written corrections await independent re-review and do not close actual evidence gates.

## Schema and fail-closed resolver — selected design, not live configuration

<a id="pol-schema"></a>POL-SCHEMA is a proposed immutable policy-record contract. No sample below is an active rate/zone/permission. Blank or unknown mandatory field results in HOLD/DISABLED. City is jurisdiction configuration, **not** tenant authorization. Fleet/corporate relationship follows [TR-21](trip-transition-catalogue.md#tr-21) / [TR-22](trip-transition-catalogue.md#tr-22) independently.

| Field family | Required content / validity guard | Review owner |
|---|---|---|
| Identity | policy_id; monotonically increasing immutable version; predecessor/supersedes; exact city/service/category/directional itinerary scope; approval status | Policy/product |
| Geography | pickup jurisdiction/legal classification; origin, destination, traversed jurisdictions; authoritative boundary source/version; safe pickup/dropoff polygons/meeting point and precision tolerance | Counsel/city ops/routing |
| Evidence | national/local/operator source IDs; publisher; document/version/hash if permitted; adopted/published/effective/accessed dates; expiry/recheck time and material-change trigger; redacted actual approval refs | Counsel/operator evidence owner |
| Eligibility | required current driver/vehicle/company permit, category, inspection, insurance and effective relationship; method and legal verification right; no inferred category from driver's licence B | Supply/counsel |
| Tariff | currency/minor-unit/rounding rule; commission/issuer/tax basis; upfront components, surge disclosure/cap, toll/airport costs; consented amendment version | Product/finance/counsel |
| Evidence-based charges | arrival quality/road accessibility; qualifying notice, grace/cap, wait/cancel/no-show reasons, review/appeal; independent fee decision and forbidden weak-GPS shortcut | Trip/UX/ops/counsel |
| Scheduling | local civil time + IANA zone + UTC, check-in/trigger/cutoff, flight delay, driver replacement/refund and no-show obligations; named buffered capacity commitments and contingency | Booking/ops |
| Privacy/provider | permitted own/customer vs vendor-derived data, display/storage licence, DPA/processor/region/transfer and retention-policy version; data purposes and purpose-bound access | Privacy/legal/routing/payment |
| Authority | accountable named owner and independent reviewer; MFA/reason/dual approval for sensitive policy; exact scope/effective interval; residual blocks; immutable change history | Business owner/security |
| Activation | explicit enabled=false default; separate M0, implementation and capability/launch approvals; operating hours/coverage/staff readiness; stop/recovery and review trigger | Product/ops |

Dates use half-open validity intervals [effective_at, expiry_at), compared with authoritative server UTC decision time; preserve original civil time for schedules. Null expiry is never presumed infinite legal validity: it needs an explicitly reviewed no-fixed-expiry instrument plus review/change triggers. Approval date is not effective date. accessed_at is not commencement. Every source must be checked for supersession at sign-off and material change.

Resolution sequence: validate exact jurisdiction/boundary and service; require all mandatory current national/local/operator conditions; reject conflicting/overlapping approved policy intervals for the same scope rather than select an arbitrary latest row; validate source publication/effectivity/expiry/recheck at server decision time; enforce exact category/driver/vehicle/company/route eligibility; require reviewed provider/privacy/finance and operational capability; bind immutable accepted quote/policy/amendment. The unique reviewed successor may supersede predecessor only from its effective_at; higher version alone cannot enable a future-dated policy. Existing accepted fares retain snapshots; current revocation/risk may block unsafe new actions without silently changing charge rules.

## Separate jurisdiction rows — access/cutoff 2026-10-04

Each row has v0.1 DRAFT, enabled=false, dated evidence **only**, no operational effective interval/expiry accepted. All missing actual permit/license/tariff/owner signatures remain UNKNOWN. [Legal L/UP ledger](../../../research/PUBLIC-LEGAL-2026-10-04.md), [UP source register](../../../research/SOURCE-REGISTER.md) and [CE city pack](../../research/city-evidence.md) supply source dates/versions/access limits.

| Policy ID | City and independent pickup jurisdiction | Dated public source scope | Actual city gate / next recheck |
|---|---|---|---|
| <a id="pol-zug"></a>POL-ZUG | Zugdidi urban service distinct from municipality/community boundary | L1/L2, L13/L14, UP-L01/04, CE-Z01; 2017-06-15 merger; exact election-call commencement unknown; code latest listed adopted 2026-05-27 | HOLD / DISABLED / OPEN-EXTERNAL. Counsel must resolve current legal classification/local implementation and any later status change, company/driver/vehicle eligibility and safe zones; no exemption inferred |
| <a id="pol-kut"></a>POL-KUT | Kutaisi city jurisdiction; airport location/jurisdiction separate and unconfirmed | L1/L2, CE-K01; national amendment published/effective 2026-05-29, final law latest listed published 2026-07-03 | HOLD / DISABLED / OPEN-EXTERNAL. Current municipal implementing rules, category/permit/company eligibility and pickup polygons need actual review |
| <a id="pol-bat"></a>POL-BAT | Batumi city; airport separate | L1/L2, CE-B01; historic enforcement notice 2024-12-11 does not prove current tariff/permission | HOLD / DISABLED / OPEN-EXTERNAL. Current municipal rules and two contrasting actual seasons/road access, no annual quality inferred |
| <a id="pol-tbi"></a>POL-TBI | Tbilisi administrative pickup boundary; A/B taxi categories require exact law | L3, CE-T01/02; 2018 original resolution + 2023-03-17 amendment with 2023-04-01 general/2023-03-20 selected effect; full October2026 consolidation unavailable | HOLD / DISABLED / OPEN-EXTERNAL. Exact current Georgian annex, lawful permit verification, category/vehicle/company conditions; licence B differs from taxi permit B |
| <a id="pol-rus"></a>POL-RUS | Rustavi city; Tbilisi corridor neither extends jurisdiction nor tenant access | L1/L2, CE-R01/02; undated municipal transport/geography pages, accessed 2026-10-04 | HOLD / DISABLED / OPEN-EXTERNAL. Current city implementation and directional intercity/return classification and driver/vehicle rights required |

National wider self-governing-city taxi framework is a **PUBLIC-PRIMARY fact** effective 2026-05-29; it does not establish every named locality's legal classification or implementing permission. Tbilisi categories never become national defaults. Public population, competitor presence, airport traffic and map coverage are context, not eligible supply/service authorization.

## Airport and service overlays — never inherit activation

| Policy ID | Exact proposed scope | Public scope / actual limits | Gate |
|---|---|---|---|
| <a id="pol-apt-kut"></a>POL-APT-KUT | Kutaisi airport pickup and dropoff as distinct subscopes; origin/destination jurisdiction must be reviewed | L10/CE-K03 undated passenger parking page, access2026-10-04; no commercial pickup, queue, solicitation or meeting entitlement | HOLD / DISABLED / OPEN-EXTERNAL; operator+counsel confirm actual airport jurisdiction, access times/rights, points, fee/notice/flight-delay policy and company eligibility |
| <a id="pol-apt-bat"></a>POL-APT-BAT | Batumi airport pickup/dropoff separate from city | L11/CE-B02 undated operator taxi page, access2026-10-04; taxi existence only | HOLD / DISABLED / OPEN-EXTERNAL; concession/meeting/parking/flight-delay/no-show terms and independent airport rights missing |
| <a id="pol-apt-tbi"></a>POL-APT-TBI | Tbilisi airport pickup/dropoff; all city-origin corridors independent | L12/CE-T04 undated operator page, access2026-10-04; published operator fare is not our tariff | HOLD / DISABLED / OPEN-EXTERNAL; app/prebooked rights, curb/queue/meeting, insurance and exact contract missing |
| <a id="pol-scheduled"></a>POL-SCHEDULED | Scheduled overlay on each approved city/airport/directional corridor | Selected proposal only; timezone/calendars/buffers and actual supply capacity unknown | HOLD / DISABLED; confirmed future booking != active assignment or unconditional driver guarantee |
| <a id="pol-corridor"></a>POL-CORRIDOR | Directional intercity origin→destination, all traversed jurisdictions and safe stops; return direction independently resolved | CE-R02 and city legal ledgers; no corridor rights, stop permits, prices or observed deadhead economics | HOLD / DISABLED / OPEN-EXTERNAL for every directional pair below; counsel+ops+finance per exact itinerary |

Zugdidi has no local airport capability claimed. A Zugdidi-origin journey to any of the three airports must join POL-ZUG, its exact directional corridor/traversed permissions, and the appropriate POL-APT-* **destination/dropoff or pickup** subscope. Rustavi→Tbilisi airport similarly requires POL-RUS plus exact traversed jurisdictions/airport, not just POL-TBI. Airport location must not be assumed equal to a named city administrative boundary.

All distinct directed city pairs remain separate candidate entries under POL-CORRIDOR:

- Zugdidi → Kutaisi; Zugdidi → Batumi; Zugdidi → Tbilisi; Zugdidi → Rustavi: each HOLD / DISABLED; reverse route has its own eligibility/economics.
- Kutaisi → Zugdidi; Kutaisi → Batumi; Kutaisi → Tbilisi; Kutaisi → Rustavi: each HOLD / DISABLED; reverse route has its own eligibility/economics.
- Batumi → Zugdidi; Batumi → Kutaisi; Batumi → Tbilisi; Batumi → Rustavi: each HOLD / DISABLED; reverse route has its own eligibility/economics.
- Tbilisi → Zugdidi; Tbilisi → Kutaisi; Tbilisi → Batumi; Tbilisi → Rustavi: each HOLD / DISABLED; reverse route has its own eligibility/economics.
- Rustavi → Zugdidi; Rustavi → Kutaisi; Rustavi → Batumi; Rustavi → Tbilisi: each HOLD / DISABLED; reverse route has its own eligibility/economics.

## Traceability, proposals and open gates

[SCR-02/03](screen-state-inventory.md#scr-02), [TR-03](trip-transition-catalogue.md#tr-03), [OP-03](api-behavior.md#op-03) bind permitted quote facts; [TR-20](trip-transition-catalogue.md#tr-20) / [OP-20](api-behavior.md#op-20) / [AC-20](screen-state-inventory.md#ac-20) apply calendar/service gates; [TR-23](trip-transition-catalogue.md#tr-23) / [AC-23](screen-state-inventory.md#ac-23) enforce policy approvals. [DATA-08](../../security/drafts/privacy-data-map.md#data-08) and [DATA-09](../../security/drafts/privacy-data-map.md#data-09) return here for schedule/policy provenance. [Threat register](../../security/drafts/threat-model.md) challenges inheritance, missing inputs and ordering.

No numerical tariff, wait/grace/cap, offer/PIN expiry, response retention, calendar buffer, payout timing or retention is accepted. Baseline 15% commission, arrival75m/30m/3 samples/15s and freshness/retention values are UNVALIDATED-HYPOTHESES under product/location/security/privacy/finance/counsel review. Missing input disables its dependent behavior; do not substitute national average, competitor fare, airport website fee or another city's policy.

All policy scenarios actual NOT RUN; no professional/operator acceptance. BIZ-02/BIZ-03/BIZ-04/VND-01 unclassified edges remain flagged unresolved at original gates. All D-01–06 and the four plan prohibitions are retained: no state collapse, jurisdiction inheritance, GPS/PIN safety shortcut, or assumed evidence presented as reviewed/observed.



<a id="policy-v02-interactions"></a>
## Versioned lifecycle, funding and beneficiary fields — v0.2

[POL-SCHEMA](#pol-schema) carries independent cancellation_lifecycle_rule and optional_fee_rule versions. Missing arrival quality/qualifying notice/grace/fee policy/funding means fee ZERO or REVIEW_PENDING without debit; valid prestart cancel still releases its claims under [terminal cleanup](trip-transition-catalogue.md#terminal-cleanup). Terminal reason/source/version/generation remain guarded. Fee-free failed authorization cleanup never depends on successful settlement or PSP VOID; UNKNOWN VOID is independent.

Amendment policy declares consent/fare/currency rule, approved funding coverage, actual provider incremental/replacement capability evidence, old/new hold allocation and total capture cap, corporate delta reservation and refusal/UNKNOWN resolution. Absent accepted capability gives AMENDMENT_FUNDING_HOLD before extra paid service; [funding choreography](trip-transition-catalogue.md#amendment-funding) preserves original accepted terms. Public documentation does not prove company merchant capability.

Beneficiary policy requires service-specific agreement/version/effective interval, approved economic earning event and midtrip-transfer allocation. Assignment candidate agreement binds earnings only if the reviewed earning rule selects it. Missing/conflicting rule gives ACCOUNTING_HOLD for entitlement/payout while trip terminal release proceeds. [Economic precedence](trip-transition-catalogue.md#beneficiary-precedence) prevents current fleet access from rewriting historical payables; lawful corrections append audited balanced effects.

[POL-SCHEDULED](#pol-scheduled), airport overlays and directed corridors require trigger_generation, due/check-in/expiry window, approved automatic payment authority, quote-validity/reconfirmation/amendment rule, actual passenger claim and booking→trip dedupe. [Live handoff](trip-transition-catalogue.md#scheduled-handoff) rechecks current city/company/driver/vehicle/airport/directional rights, corporate membership/credit and fare/payment at trigger. Active passenger, expired quote, UNKNOWN payment or removed spend grant means owned HOLD/reconfirm/reschedule, never inferred no-show fee. Future commitment is not live assignment. Required fields do not enable any five city, three airport, scheduled or twenty directional capabilities. Earning/licence/merchant/guarantee rules remain external gates; numeric limits remain hypotheses.

## Reverse policy threat index

| Policy ID | Mapped negative threats |
|---|---|
| [POL-SCHEMA](#pol-schema) | [TH-20](../../security/drafts/threat-model.md#th-20) / [TH-23](../../security/drafts/threat-model.md#th-23); source/pickup/quote also [TH-02](../../security/drafts/threat-model.md#th-02) / [TH-03](../../security/drafts/threat-model.md#th-03) |
| [POL-ZUG](#pol-zug) | [TH-20](../../security/drafts/threat-model.md#th-20) / [TH-23](../../security/drafts/threat-model.md#th-23); source/pickup/quote also [TH-02](../../security/drafts/threat-model.md#th-02) / [TH-03](../../security/drafts/threat-model.md#th-03) |
| [POL-KUT](#pol-kut) | [TH-20](../../security/drafts/threat-model.md#th-20) / [TH-23](../../security/drafts/threat-model.md#th-23); source/pickup/quote also [TH-02](../../security/drafts/threat-model.md#th-02) / [TH-03](../../security/drafts/threat-model.md#th-03) |
| [POL-BAT](#pol-bat) | [TH-20](../../security/drafts/threat-model.md#th-20) / [TH-23](../../security/drafts/threat-model.md#th-23); source/pickup/quote also [TH-02](../../security/drafts/threat-model.md#th-02) / [TH-03](../../security/drafts/threat-model.md#th-03) |
| [POL-TBI](#pol-tbi) | [TH-20](../../security/drafts/threat-model.md#th-20) / [TH-23](../../security/drafts/threat-model.md#th-23); source/pickup/quote also [TH-02](../../security/drafts/threat-model.md#th-02) / [TH-03](../../security/drafts/threat-model.md#th-03) |
| [POL-RUS](#pol-rus) | [TH-20](../../security/drafts/threat-model.md#th-20) / [TH-23](../../security/drafts/threat-model.md#th-23); source/pickup/quote also [TH-02](../../security/drafts/threat-model.md#th-02) / [TH-03](../../security/drafts/threat-model.md#th-03) |
| [POL-APT-KUT](#pol-apt-kut) | [TH-20](../../security/drafts/threat-model.md#th-20) / [TH-23](../../security/drafts/threat-model.md#th-23); source/pickup/quote also [TH-02](../../security/drafts/threat-model.md#th-02) / [TH-03](../../security/drafts/threat-model.md#th-03) |
| [POL-APT-BAT](#pol-apt-bat) | [TH-20](../../security/drafts/threat-model.md#th-20) / [TH-23](../../security/drafts/threat-model.md#th-23); source/pickup/quote also [TH-02](../../security/drafts/threat-model.md#th-02) / [TH-03](../../security/drafts/threat-model.md#th-03) |
| [POL-APT-TBI](#pol-apt-tbi) | [TH-20](../../security/drafts/threat-model.md#th-20) / [TH-23](../../security/drafts/threat-model.md#th-23); source/pickup/quote also [TH-02](../../security/drafts/threat-model.md#th-02) / [TH-03](../../security/drafts/threat-model.md#th-03) |
| [POL-SCHEDULED](#pol-scheduled) | [TH-20](../../security/drafts/threat-model.md#th-20) / [TH-23](../../security/drafts/threat-model.md#th-23); source/pickup/quote also [TH-02](../../security/drafts/threat-model.md#th-02) / [TH-03](../../security/drafts/threat-model.md#th-03) |
| [POL-CORRIDOR](#pol-corridor) | [TH-20](../../security/drafts/threat-model.md#th-20) / [TH-23](../../security/drafts/threat-model.md#th-23); source/pickup/quote also [TH-02](../../security/drafts/threat-model.md#th-02) / [TH-03](../../security/drafts/threat-model.md#th-03) |
