# Substantive architecture review

Date: 2026-10-03. Scope: foundation documents and future execution plans. This is a contract-consistency review, not a test result, professional legal opinion, financial certification or production approval.

Reviewed: MASTER-SPEC, BUSINESS-MODEL, TECHNICAL-SPEC, DOMAIN-BOUNDARIES, REPOSITORY-STRUCTURE, ADR register/001–010, REQUIREMENTS, Phase 1/2 context, Phase 1 plans 01-01/02/03, and Phase 2 plans 02-01/02/03.

Final integration note, 2026-10-04: this architecture review describes the original six-plan layout. Phase 2 has since been divided into six bounded plans; current broker evaluation is 02-04, runtime tracer is 02-05 and recovery/acceptance is 02-06. Original design findings remain integrated in the technical contracts. The final nine-plan graph, scope, authorization and ordering review is recorded separately in [PLAN-CHECK-REVIEW](PLAN-CHECK-REVIEW.md) and [VALIDATION-REPORT](VALIDATION-REPORT.md). No application or broker trial has been executed.

## Findings resolved in the technical baseline

| Finding | Why it matters | Required resolution / evidence |
|---|---|---|
| Distinct idempotency keys on two passenger devices can create two rides | A retry key only deduplicates that key, not a concurrent business request | TECHNICAL-SPEC now requires one active immediate trip per standard passenger and one binding per quote; scheduled/delegated corporate use has explicit separate identity rules. Requirement/plan traceability must preserve this invariant |
| Driver uniqueness alone does not exclude two drivers using one fleet vehicle | A physically shared resource must not be double-assigned | Active offer/assignment uniqueness includes trip, driver and vehicle, with effective relationship snapshot and stable lock order; requirement/correctness gates must include vehicle |
| Card request could otherwise enter matching while authorization is unknown | A timeout may conceal an actual authorization; a second operation can double charge | REQUESTED→SEARCHING has an approved payment/credit guard; PSP intent commits first and uncertain result is queried/reconciled, never silently changed to cash |
| Scheduled bookings require future resource exclusivity | Current active-trip uniqueness cannot protect next week's named driver or vehicle | Separate future commitment calendar with non-overlap, deadhead/turnaround buffers and dispatch feasibility; pooled capacity has explicit confirmation/contingency terms |
| Immutable money history can overretain private identity/location | Financial immutability does not justify an immutable copy of every personal field | Minimal journal facts plus pseudonymous references; separate lawful identity mapping/retention; deletion/hold/restore protocol covers every storage surface |
| Fleet transfer and split refund can change who owes money | A current membership is not proof of the historical beneficiary; a paid split is not automatically reversible | Snapshot beneficiary agreement/terms at earning event; partial/split refund recovery allocation and provider limits are versioned, reconciled and approved |
| Historic event replay can duplicate external side effects | Kafka redelivery/rebuild does not create a safe new charge, refund or notification | Isolated projection rebuild, inbox/business-effect uniqueness, durable external intent, stable provider reference and narrowly approved recovery |
| Restored DB may lack a successful external capture/payout | Database RPO and provider effects have independent boundaries | Quarantine/query/reconcile before replay; verified reconstruction/manual resolution; financial record obligations review can require stricter RPO |
| Arrival event or notification intent alone cannot justify wait charges | GPS and push delivery are imperfect; fee eligibility has a customer-facing notice contract | Approved evidence + notification/grace/cap/dispute policy, with pending/unknown behavior and no invisible fee default |

The technical author performed these consistency checks while integrating the independently owned master/business documents. Production still requires independent security, accounting, legal and operational evidence. No outcome above is marked implemented.

## Cross-document consistency assessment

| Area | Assessment |
|---|---|
| Five-city/full-scope product | Tbilisi/Rustavi/Kutaisi/Batumi/Zugdidi all remain in scope; rollout sequence is a revisable hypothesis and public activation follows phase 12 qualification |
| Deployment model | Modular Go core plus isolated location/matching, realtime and workers; no domain-per-service/database or day-one Kubernetes |
| Store authority | PostgreSQL/PostGIS owns durable business facts; Redis state is reconstructable; cache locks cannot commit assignments |
| Event semantics | Outbox/inbox, per-key order, schema versions and replay scope are explicit; no Kafka-to-DB/PSP exactly-once promise |
| Mobile recovery | Durable snapshot/version/generation precedes realtime resumption; OS background limits, low-end device field evidence and protected local intents are required |
| Quote and economics | Immutable accepted policy/amendments; 15% is a sensitivity assumption; GMV, driver earnings and recognized platform revenue remain distinct |
| Financial scope | Card/cash/corporate, refund after payout/split, uncertain provider outcomes and beneficiary terms are separate reviewed scenarios |
| Safety/arrival/PIN | Evidence is dispute-capable, PIN is one-use/current assignment; rules have human review/appeal and actual staffed escalation |
| Privacy/licensing | Proposed durations are not Georgian law; payment/identity periods remain counsel/accountant gates; mapping provenance/storage rights restrict retained data |
| Reliability/cost | SLO/RPO/load values are hypothetical acceptance targets; AWS region, managed Kafka topology/cost and restore evidence remain open |
| Phase 1 plans | Research materials precede actual field/legal/provider evidence; no fabricated interviews, undocumented merchant approval or file-presence certification |
| Phase 2 context | Synthetic staging tracer, native tools/contracts/CI; gated by actual M0 and later implementation/cloud scope |
| Phase 2 recovery plans | Actual PostgreSQL/broker failure boundaries, Redis/socket loss and revoked/cross-principal reconnect are tested on synthetic state; no financial or dispatch certification is inferred |

## Execution-plan refinements resolved

1. **02-02 Kafka evaluation — resolved in the plan:** Task 1 now explicitly reads ADR-003, requires Go client/auth/schema/partition/replay compatibility evidence and a regional 30-day cost model covering idle capacity, storage, network/egress, fanout, environments and support. The task and human verification distinguish the bounded authorized staging trial from final production broker/capacity approval. Actual benchmark, cost and access evidence remain future execution obligations.
2. **02-01 native build artifact scope — resolved in the plan:** Declared files now include retained backend bootstrap source/tests and TypeScript, Dart and Kotlin contract libraries/tests with native build configuration. Task 2 specifies generation, parsing, stable errors, additive-field compatibility and version-conflict tests, plus concrete build/test entrypoints. Acceptance requires reproducible library/backend outputs and explicitly leaves complete application packaging to Phase 6. No complete app build is inferred from version manifests.

The revised plans were reread after these changes. Both reported plan precision findings are closed for foundation delivery; no implementation, benchmark or production certification is claimed.

## Open implementation and launch gates

The unresolved decisions are intentional and assigned to research/review work: five-city jurisdiction/airport permission, principal/agent and tax/receipt/funds flow, driver contracting, provider activation and payment recovery capability, mapping quality/licensing, AWS region/broker total cost and compatible versions, field GPS/network/OS calibration, privacy lawful bases/transfers/retention, named staffing/budget and measured marketplace economics. They do not prevent delivering a reviewable foundation; they do prevent falsely marking the affected implementation or public launch ready.

Phase 2 plans must be reviewed against the accepted M0 contracts when executed; today no app contract or external capability has been exercised. Later phase planning must preserve the new passenger/vehicle/calendar invariants in atomic requirements and negative acceptance tests, not leave them only in narrative prose.
