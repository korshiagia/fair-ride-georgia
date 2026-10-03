# Validation, assumptions and launch gates

Baseline: 2026-10-03. Every numeric target is proposed unless marked as observed evidence. No field interview, vendor quotation, legal signoff, app/security/load test, live payment or city activation has been completed. This register is the explicit path for validating what desk research cannot establish. It is not a statement of legal compliance.

## Status model and owners

- **DEFINED**: user-selected cities and technology direction.
- **VERIFIED-DESK**: bounded primary-source fact with source date/effective version in SOURCE-REGISTER.
- **SELECTED-PROPOSED**: architecture/business choice suitable for review, still needs outcomes.
- **OPEN-EXTERNAL**: real interview/contract/professional/municipal/provider evidence required.
- **OPEN-ENGINEERING**: implementation, device/race/fault/load/security proof required.
- **PASSED**: attributable dated evidence reviewed by the accountable owner; never inferred from a document filename.

Owner roles are planning responsibilities. Before execution, assign a named person and reviewer; an agent can prepare materials but cannot impersonate a legal signer, customer interviewee or operational staff.

| Assumption / decision | Status | Validation | Accountable role / requirement |
|---|---|---|---|
| Five cities are in scope | DEFINED | User answer 2026-10-03; propagate city configurations | Product / CITY-01, LCH-01 |
| Kutaisi→Zugdidi→Batumi→Tbilisi/Rustavi sequence | SELECTED-PROPOSED | Compare committed supply/requests/permissions/hour and operations; change order if evidence favors another city | Operations / BIZ-04, LCH-02 |
| Fairness/trust differentiates sufficiently | OPEN-EXTERNAL | Driver/rider switch interviews, service teardown and real retained cohort evidence | Product / BIZ-04 |
| 15% commission sustainable | SELECTED-PROPOSED, OPEN-EXTERNAL | Contracted fees, legal tax basis, driver costs, cash risk and adverse contribution/runway model | Finance / BIZ-02, BIZ-03 |
| 15 FTE and 12–15 month planning horizon | SELECTED-PROPOSED | Available team, skill coverage, validated dependencies, hiring ramp and actual quotations | Product/engineering lead / PLAT-01 |
| 4.95–6.00m GEL illustrative envelope | SELECTED-PROPOSED | Monthly cash flow from actual salaries/vendors/ops/acquisition/working-capital inputs | Finance / BIZ-02, LCH-04 |
| Local rules outside Tbilisi and airport pickup access | OPEN-EXTERNAL | Dated municipality/airport rules and attributable counsel/operator permission review for each location | Counsel/ops / BIZ-01, APT-01, LCH-01 |
| Principal/agent, VAT, driver classification, invoice issuer | OPEN-EXTERNAL | Written Georgian counsel/accountant conclusion tied to actual contract and funds diagram | Counsel/finance / BIZ-03, REC-01 |
| Split/preauth/refund/beneficiary payout capabilities | OPEN-EXTERNAL | Bank/PSP contractual confirmation plus sandbox outcomes; distinguish callback signing vs status pollback | Finance/payment lead / VND-01, PAY-01..06 |
| Map quality, caching/storage rights, route provenance | OPEN-EXTERNAL | Five-city corpus including bad road-side access; license/cost review; evidence not persisted beyond rights | Routing/legal / VND-01, GEO-01 |
| Go modular core and workload split | SELECTED-PROPOSED | Boundary/transaction tests plus load evidence and measured operating cost | Architecture / PLAT-03 |
| Kafka managed shape and AWS region | OPEN-ENGINEERING, OPEN-EXTERNAL | Compatibility/load/auth/replay benchmark, actual RTT, privacy/service availability, 30-day total cost | Platform / EVT-01, REL-04 |
| Mobile background location reliable | OPEN-ENGINEERING | Supported Android/OEM/OS device matrix under permission, process-kill, low battery and poor network | Android/QA / LOC-02, MOB-02 |
| Arrival thresholds distinguish real pickup | OPEN-ENGINEERING | City road/urban-canyon/airport field corpus; low-confidence exception and disputes | Trip/location/ops / ARR-01 |
| Privacy schedule and transfers lawful/necessary | OPEN-EXTERNAL | Data/purpose/processor map, current law/authority, DPIA, retention and transfer mechanism review | Privacy/counsel / PRIV-01..03 |
| Accessibility contract sufficient | OPEN-EXTERNAL, OPEN-ENGINEERING | Current/future applicable rules + real screen-reader/text/manual-address testing | UX/counsel/QA / ACC-01 |
| Safety promise backed by real service | OPEN-EXTERNAL | Roster, trained triage/concurrency, named escalation/112 fallback and disconnected drill | Safety operations / SAFE-02, LCH-03 |
| Technical SLO/recovery envelope affordable | OPEN-ENGINEERING | Measured benchmark, restore/reconciliation and incident/cost review | SRE/finance / REL-01..04 |

## M0 — before application implementation

Foundation artifacts are already prepared in this pack. M0 is closed only after Phase 1 converts open business/design conditions into an evidence-backed baseline:

1. Five-city evidence inventory and authorized anonymized driver/rider/shift research, with sampling bias disclosed.
   Research has its own privacy review before any real collection: controller/processor roles, lawful basis/consent, minimization, retention/deletion, restricted evidence storage, transfers and DPIA decision are reviewed in the field protocol. The later full M0 data map does not retroactively authorize interviews or diaries.
2. Principal/agent/driver/legal/tax model and proposed funds path professionally reviewed; no assuming a PSP exemption from the word agency.
3. Provider capability, privacy/region and license review; concrete sandbox selection/quotations if available, or clearly bounded non-live adapter contract without pretending an executed contract.
4. Contribution/runway/driver-hour economics recalculated with actual inputs and adverse scenarios; fares/fees kept disabled until approved.
5. State-machine/invariant, screen/accessibility, domain ownership, privacy threat/data and API contract catalogue independently checked.
6. Product/engineering owner records M0 decision and unresolved capability-specific blockers. Foundational non-live work can only proceed on an explicitly reviewed bounded contract; live airport/payment/privacy work waits for its applicable gate.

This user request authorizes preparation of specifications and plans. It does not start application implementation. The first executable research plans can prepare materials locally; actual outreach/reviews require real human/vendor participation and appropriate execution authorization. A rejection or missing provider answer is evidence of an open gate, not permission to invent terms.

## Technical acceptance at M4

M2 is an earlier integration gate: Phase 6 UI contracts may exercise synthetic finance/support fixtures during development, but MOB-01/MOB-02 full-service acceptance waits for actual Phase 7 ledger/PSP/receipt and Phase 8 arrival/support integration. No fixture response establishes financial settlement or production eligibility. Complete card/cash passenger-driver journeys at T32 before closing M2.

Targets below align with TECHNICAL-SPEC section 12. All are unmeasured. Define test clients, geography, supported app versions, hardware, event sizes and percentile computation before running them; do not mix server latency with mobile network/PSP end-to-end latency.

| Test | Proposed acceptance |
|---|---|
| Core critical availability | 99.95% rolling 30-day valid quote/booking/transition requests; dependency errors and maintenance counted; business rejections measured separately |
| Core server commands | p95≤300ms, p99≤1s at server ingress; external-route/PSP budgets reported independently |
| Candidate computation | p95≤1s; human acceptance and fulfillment are separate marketplace metrics |
| Location/realtime | Sample to hot projection p95≤500ms; fanout≤2s under healthy benchmark load; OS/network stale samples separately measured |
| Sustained/peak locations | 5,000 online drivers × hypothetical 2s all-active cadence=2,500 samples/s; 10,000-driver peak=5,000/s; 10,000/s reconnect burst 60s |
| Socket and command envelope | 20,000 authenticated sockets; 100,000 targeted messages/s burst; 25 new trips/s sustained,100/s 60s burst; separate lifecycle/read mix500/s |
| Backlog recovery | Drain24h synthetic worker backlog in2h without violating critical command SLOs; no historical message/payment side effects during projection rebuild |
| In-region restore | RPO≤5min/RTO≤30min; Redis rebuild≤5min after authoritative source recovery |
| Region disaster | RPO≤1h/RTO≤4h with approved backup region and reconciled PSP/bank/evidence recovery; no active-active trip writes |
| Correctness | Zero double driver/trip/vehicle assignments, duplicate immediate trips for a standard passenger across distinct keys, duplicate financial effects, unbalanced journal batches and unauthorized tenant/resource access in concurrency/fault suite |

Availability SLO evidence cannot be manufactured before an observation window exists. Certification records short test coverage, then controlled-operation measurement; if the period is shorter, report that limitation. Recovery objectives do not promise no possible acknowledged-record loss: disclose the restore window, reconcile external effects, audit missing evidence and do not reopen inconsistent finance/assignment mutation. Provider HA is not a successful project restore drill.

Critical checks include two-device distinct-key ride creation; expired offer/replay/generation races; cancellation vs PIN/start/completion; worker publish/ack crash; PSP timeout then delayed callback; partial refund after split/payout; ledger/cash/credit reconciliation; city/tenant/job/socket/export authorization; permission/GPS/internet loss; urban/airport arrival false positive; deleted data reappearing from restore/replay; and non-destructive release/migration recovery.

No unresolved exploitable critical/high security issue, finance/assignment correctness defect, unsupported custody flow or unstaffed advertised safety service may be waived by a generic success checkbox. Other findings require a named documented acceptance, limited blast radius and fix deadline.

## Five-city commercial activation

Each city/zone/hour receives its own signed launch pack. Even controlled real-person cohorts require approved local/payment/privacy conditions and trained support/safety coverage before their first ride (T45 and T47 precede T46). Proposed quality thresholds for **ordinary immediate city service** are below; scheduled/airport/intercity have separate deadlines. These are starting product targets, not observed Georgian norms or guaranteed public SLAs. Internal readiness certification is not a government certificate or substitute for permits.

| Measure | Definition and proposed gate |
|---|---|
| Dispatch fulfillment | ≥95% eligible immediate requests receive confirmed assignment before advertised matching deadline; count no-driver/timeouts; passenger withdrawals separately recorded, not silently removed |
| Completed service | ≥90% eligible requests complete, with pre/post-assignment cancellations and no-shows reported separately |
| Pickup ETA | p90 actual pickup≤8min within advertised initial zone/hour; separately show prediction error and inaccessible pickup exceptions |
| Driver cancellation | <5% assigned rides cancelled by driver pre-start, excluding evidence-backed rematch as separately reported cause |
| Driver economics | Matched city/shift/category cost-diary median net contribution per online hour no worse than baseline; compare unpaid mileage and downside cohorts, not just fare totals |
| Rider retention | Proposed30-day paid-repeat rate≥25% for first-paid-ride cohort, disclose incomplete window/promotion effects; adjust from evidence with recorded rationale |
| Ride contribution | Positive contribution after routine incentives in the defined city cohort; introductory acquisition/subsidy burn separately capped and funded |
| Support/safety | Urgent connected-channel triage drill p95 ownership acknowledgment≤30s during promised service hours; actual roster and simultaneous-case capacity;112/offline fallback visible |

At least 200 eligible requests per launch cohort is a proposed operational smoke sample, not statistical proof. Maintain zone/hour/category strata and uncertainty intervals; extend observation if seasonality, insufficient events or promotional selection makes evidence weak. Thirty-day retention needs its actual window. Do not claim broader city readiness from one favorable peak-hour cohort. Assumption changes require explicit recorded business review rather than quietly redefining the denominator to pass.

City pack contents: jurisdiction/airport clearance, enabled geozones/categories/hours, current tariffs and disclosures, eligible driver cohort, mapping field sample, PSP/receipt/payout readiness, privacy/insurance/store decisions, staffing/relief, incident and refund drills, measured cohorts, approved acquisition caps/runway and stop conditions. Public launch instructions and actual spending must be separately authorized at execution.

## Stop and recovery rules

Any assignment/money duplication or confirmed tenant leak stops affected new mutations, preserves current trips/evidence, opens high-severity incident and disables growth until root cause/reconciliation/repair evidence. Provider failure pauses its affected new payments/quotes rather than fabricating acknowledgment. Low supply reduces enabled coverage/promised hours or pauses acquisition; never conceal no-driver outcomes. Unstaffed emergency triage prevents advertising the affected safety/operating-hours service.

At each gate, record decision ID, requirement IDs, artifact links, test/version/environment/source date, observation window, residual limits, named responsible reviewer, action and expiry/review trigger. See TASK-PLAN and native Phase 1/2 plans for concrete work.
