# Executable task baseline — Fair Ride Georgia

Date: 2026-10-03. **48 work cards; 78 v1 requirements; 12 phases; no tasks executed.** The cards cover the complete five-city program. Paths below refer to the proposed future monorepo, not files already implemented. The pack itself lives at this directory root.

## How to execute

Start with the three native Phase 1 PLAN files. They prepare reviewable materials, collect actual authorized evidence and close M0 before implementation. Six native Phase 2 plans define the first production foundation implementation; their existence is not permission to start code or spend. Later work cards must be refined into current GSD PLAN files after prior phases: exact current paths, at most three tasks per plan, waves, nonempty requirements, threat model, must_haves and independent plan check. This rolling refinement preserves full scope while avoiding fictitious future code knowledge.

Tasks are dependency-aware acceptance contracts, not completed tickets. Each task completes only with linked artifacts, verification result, domain-owner review and actual external evidence where required. Preparing a form does not complete an interview. A provider page does not prove a merchant agreement. Test commands referenced by future tasks must first be created, tested and recorded in the relevant repository; do not claim unavailable helpers were run.

External outreach, real-money actions, AWS creation, store publication and city activation occur only when execution has appropriate explicit authorization. Read-only research, local review/spec fixes and reversible artifact preparation continue without repeated permission. All already-selected planning choices remain in effect unless evidence/user steering changes them.

Calendar baseline is 12–15 months on assumed staffing, not task duration commitments. Early phases use an end-to-end **production tracer** through final contracts/infrastructure; a tracer is a verification pattern, not discarded application code or a reduced commercial product. Security, money and assignment invariants apply from the first relevant implementation.

## Phase 1 — Business, regulatory and product contracts (M0)

### T01 — City evidence and research instrument

- **Requirements:** BIZ-01 BIZ-04
- **Depends on:** None
- **Responsible roles:** Product + Georgia counsel
- **Outputs / owned paths:** docs/research/cities/{city}.md; docs/research/interviews/{driver,rider}-guide.md; docs/research/consent.md

**Action:** Create dated source/effective-law matrix for all five cities, competitor evidence and driver/rider interview/shift diary guides. Before collecting real evidence, complete research-scoped professional privacy review of controller/processors, lawful basis/consent, minimization, retention/deletion, restricted storage, transfers and DPIA need. Sample across category, weekday/weekend, shift and device; do not contact respondents without explicit execution authorization.

**Verification and done:** Five city packs show primary evidence or labeled unknowns; initial targets per city are 15 driver interviews, 20 rider interviews and 10 seven-day driver cost diaries, a purposive adjustable discovery quota, not representativeness. Collect only consented minimized evidence; record refusals, seasonal limits and sampling bias.

### T02 — Unit economics and runway model

- **Requirements:** BIZ-02
- **Depends on:** T01 evidence
- **Responsible roles:** Product + finance
- **Outputs / owned paths:** docs/business/unit-economics.md; docs/business/cash-flow-model.md

**Action:** Replace financial placeholders using driver cost diaries, actual fee quotes and city cohort assumptions. Model 10/15/20% commission, cash/card, tax sensitivity, seasonality and hiring ramp; separate GMV, revenue, contribution, CAC and liquidity reserves.

**Verification and done:** Every input has provenance/date/status; calculations reconcile; adverse case runway and fair driver online-hour economics are visible; actual VAT/funds model incorporated after T03.

### T03 — Legal funds flow and vendor proof

- **Requirements:** BIZ-03 VND-01
- **Depends on:** T01 city evidence
- **Responsible roles:** Counsel + finance + backend/platform leads
- **Outputs / owned paths:** docs/legal/operator-model.md; docs/legal/funds-flow.md; docs/vendors/{maps,psp}-evaluation.md

**Action:** Prepare principal/agent alternatives and payment sequence, local permit/airport questions and vendor scorecards. Obtain professional review and authorized provider sandbox/contract evidence; test map corpus across five cities, PSP token/preauth/refund/split/payout constraints.

**Verification and done:** Signed or explicitly attributable reviewed decision states issuer, tax base, fee incidence, refund after split and custody/exemption boundaries. No vendor marked contracted on a public marketing page. Review outcome updates economics.

### T04 — Product contracts and M0 baseline review

- **Requirements:** PRD-01
- **Depends on:** T01 T02 T03
- **Responsible roles:** Product + UX + architecture + security
- **Outputs / owned paths:** docs/contracts/{journeys,state-machines,api-inventory}.md; docs/security/{threat-model,data-map}.md; docs/operations/city-policy-schema.md; docs/decisions/M0-readiness.md

**Action:** Translate master into screen/state, authorization/finance/assignment invariants and contract examples, minimizing real data. Independently inspect requirement coverage and legal/vendor implications, then record concrete M0 evidence and unresolved conditions.

**Verification and done:** All 78 v1 requirements mapped; phase1 six IDs evidence reviewed; city/schema/API/privacy/financial contracts consistent; unclosed blocker blocks affected implementation, rather than becoming an assumed default.

## Phase 2 — Reproducible platform foundation (M1)

### T05 — Repository ownership and pinned compatibility

- **Requirements:** PLAT-01 PLAT-03
- **Depends on:** T04 M0; explicit implementation instruction
- **Responsible roles:** Platform + domain leads
- **Outputs / owned paths:** CODEOWNERS; docs/contracts/toolchain-matrix.md; apps/backend/go.mod; native/web manifests

**Action:** Initialize the proposed monorepo only in the implementation request. Move foundation into docs/foundation preserving links and .planning paths. Pin compatible supported toolchains/native SDKs; assign module and review ownership; enforce imports against storage-boundary violations.

**Verification and done:** Clean checkout reproduces backend/web/mobile contract builds on appropriate OS runners; no secrets in source; each critical module has reviewer coverage; Flutter/iOS building uses authorized macOS runner.

### T06 — CI, release and contract entrypoints

- **Requirements:** PLAT-02 API-01
- **Depends on:** T05
- **Responsible roles:** Platform + QA
- **Outputs / owned paths:** contracts/{openapi,proto,events}/; .github/workflows/; tests/contracts/

**Action:** Define OpenAPI/error/idempotency/version contracts and actual interprocess protobufs; build tested contract generation/lint/breaking checks. Use short-lived build/deploy identity, immutable artifacts, provenance and critical test gating.

**Verification and done:** Generated-client roundtrip is deterministic; invalid contracts/security findings fail CI; mutation conflict/retry semantics documented; OIDC trust constrained to intended repository/environment.

### T07 — Instrumented staging tracer and infra isolation

- **Requirements:** OBS-01
- **Depends on:** T05 T06; staging credentials and spend authorization
- **Responsible roles:** Platform + backend
- **Outputs / owned paths:** infra/terraform/{modules,environments}/; infra/observability/; apps/backend/cmd/

**Action:** Create a minimal production-quality synthetic authorized command through core, DB and realtime using the final ownership/transport skeleton. Plan network/IAM/state/backup boundaries and selected broker capacity from approved cost evidence. Use synthetic data.

**Verification and done:** Staging trace connects API/database/worker/socket without PIN/tokens/route PII; isolated state/accounts/secrets; failed provider dependency has bounded deadline; remote infrastructure creation occurs only within authorized environment.

### T08 — Durable outbox/inbox and foundation acceptance

- **Requirements:** EVT-01
- **Depends on:** T06 T07
- **Responsible roles:** Backend + QA
- **Outputs / owned paths:** apps/backend/internal/platform/; contracts/events/; tests/resilience/; docs/contracts/platform-acceptance.md

**Action:** Implement outbox and consumer inbox primitives with durable event IDs, partition/version contract and unknown external-effect treatment. Connect tracer; stop/restart publisher and consumers and validate replay; publish affected checks for future plans.

**Verification and done:** Crash before/after commit/publish/ack does not lose committed synthetic event or repeat effect; snapshots recover socket gaps; lag/capacity alarms exist; Phase2 six requirements evidence linked.

## Phase 3 — Identity, driver eligibility and city policy (M1)

### T09 — Identity lifecycle and abuse protection

- **Requirements:** IAM-01
- **Depends on:** T08
- **Responsible roles:** Backend + mobile
- **Outputs / owned paths:** apps/backend/internal/identity/; tests/security/identity/

**Action:** Implement phone verification, refresh rotation, revoke/recovery and provider adapter with rate limiting and anti-enumeration. Treat phone OTP as account authentication, not driver identity proof.

**Verification and done:** Expired/replayed OTP and refresh reject; revocation clears sessions/sockets; lost-device recovery and SMS outage are tested; counters do not leak phone presence.

### T10 — Privileged and tenant authorization

- **Requirements:** IAM-02 IAM-03
- **Depends on:** T09
- **Responsible roles:** Backend + security + web
- **Outputs / owned paths:** apps/backend/internal/identity/; apps/web-consoles/features/access/; tests/security/authorization/

**Action:** Implement staff MFA, role/relationship/city/purpose attributes, deny-by-default object policy and audited break-glass. Apply same checks to jobs/sockets/exports, not only REST.

**Verification and done:** Cross-account/tenant/city/object attempts fail; staff cannot silently expand purpose or override finance; changing membership invalidates subscriptions and future jobs.

### T11 — Driver, vehicle and credential onboarding

- **Requirements:** DRV-01 DRV-02 DRV-03
- **Depends on:** T09 T10
- **Responsible roles:** Supply backend + driver + operations
- **Outputs / owned paths:** apps/backend/internal/supply/; apps/driver-android/feature/enrollment/; apps/web-consoles/features/supply/

**Action:** Implement verified driver/vehicle association, evidence upload scanning and expiring jurisdiction/category documents. Use effective-dated contracts; current-trip restriction workflow has safe staffed handling.

**Verification and done:** Unverified/revoked/expired driver receives no new offer; duplicate associations reject; expiring document does not erase current ride; reviewers see only authorized minimal evidence.

### T12 — Five-city policy eligibility

- **Requirements:** CITY-01
- **Depends on:** T11
- **Responsible roles:** Supply + policy owners
- **Outputs / owned paths:** apps/backend/internal/policy/; packages/policy-fixtures/; docs/operations/city-eligibility.md

**Action:** Load separately approved city/service boundaries and permit policy; preserve origin/destination/traversed jurisdiction. Disable unapproved airport/city/cross-zone features explicitly.

**Verification and done:** Five city configs versioned; Tbilisi A/B does not become non-Tbilisi rule; offline/changed eligibility is checked again at accept; changes can disable new work without losing active history.

## Phase 4 — Addressing, quotes and pricing policy (M1)

### T13 — Mapping adapters and pickup quality

- **Requirements:** GEO-01
- **Depends on:** T12 VND-01 vendor proof
- **Responsible roles:** Backend routing + mobile UX
- **Outputs / owned paths:** apps/backend/internal/routing/; test-data/maps/; tests/mobile-field/maps/

**Action:** Implement selected geocode/routing adapters, license-compliant caching/provenance and manual address selection. Exercise approved urban/airport/regional road corpus and accessible pickup points.

**Verification and done:** Corpus success/error/disputed cases recorded by city; no map-permission flow still books; location/pickup confusion resolved without logging PII; provider storage terms enforced.

### T14 — Deterministic transparent quote

- **Requirements:** FARE-01
- **Depends on:** T13
- **Responsible roles:** Pricing backend + finance + passenger
- **Outputs / owned paths:** apps/backend/internal/pricing/; contracts/openapi/quotes/; packages/policy-fixtures/

**Action:** Implement integer-minor-unit/decimal money, components, policy/route versions, validity, surge cap and approved toll/airport conditions. Quotes are reproducible from stored accepted permitted facts.

**Verification and done:** Rounding/boundaries/currency tests match approved fixtures; fare breakdown and expiry displayed; route provider outage does not invent price; no silent fee omitted.

### T15 — Quote binding and amendment semantics

- **Requirements:** FARE-02
- **Depends on:** T14
- **Responsible roles:** Pricing + trip owners
- **Outputs / owned paths:** apps/backend/internal/pricing/; apps/backend/internal/workflows/; tests/contracts/fares/

**Action:** Bind quote to request transaction and fare snapshot. Define authorized amendment/refusal/termination for changed stops/destination; old mobile compatibility retained.

**Verification and done:** Expired/tampered/different-city quote rejects; duplicate accept idempotent; accepted normal traffic/detour does not silently reprice; amendment requires user approval and stores delta/reason.

### T16 — Waiting cancellation and policy rollout

- **Requirements:** FARE-03 FARE-04
- **Depends on:** T15
- **Responsible roles:** Pricing + operations + UX
- **Outputs / owned paths:** apps/backend/internal/policy/; apps/web-consoles/features/policies/; docs/operations/fare-policy.md

**Action:** Implement policy schema and synthetic qualifying evidence contract before actual arrival implementation. Simulate fee impacts, dual approve risk changes, stage by city and provide rollback.

**Verification and done:** No wait fee for absent/pending arrival evidence; cancellations show reason and fee; previous quotes retain version; dry-run/approval history records proposed fares and thresholds.

## Phase 5 — Location, dispatch and realtime correctness (M1)

### T17 — Location session and ingestion pipeline

- **Requirements:** LOC-01 LOC-02
- **Depends on:** T16
- **Responsible roles:** Location backend + driver
- **Outputs / owned paths:** apps/backend/internal/telemetry/; apps/driver-android/core/location/; tests/mobile-field/

**Action:** Implement driver-owned session generation/sequence/capture age, hot projection expiration and bounded telemetry stream. Test supported real Android devices and network loss with visible tracking status.

**Verification and done:** Duplicate/out-of-order/stale samples cannot become current; spoof/jump signal reviewed; killed background tracking visibly unavailable; buffered history cannot regain availability.

### T18 — Candidate computation and fairness policy

- **Requirements:** DIS-01 DIS-04
- **Depends on:** T17
- **Responsible roles:** Dispatch + product + data
- **Outputs / owned paths:** apps/backend/internal/dispatch/; apps/backend/internal/routing/; tests/concurrency/matching/

**Action:** Compute candidates by lawful eligibility, location freshness, occupancy, category and route ETA; score versioned idle/ETA terms. Replay synthetic city-skewed shifts for opportunity/fairness without secret decline punishment.

**Verification and done:** No ineligible/stale candidate offered; score components attributable; missing device data separate from poor quality; metrics reveal starvation/hot-zone behavior.

### T19 — Durable reservation acceptance and expiry

- **Requirements:** DIS-02 DIS-03
- **Depends on:** T18
- **Responsible roles:** Trip/dispatch backend + QA
- **Outputs / owned paths:** apps/backend/internal/workflows/; apps/backend/migrations/; tests/concurrency/assignments/

**Action:** Implement unique active assignment/offer constraints per trip/driver/vehicle, verify effective driver-vehicle binding, unique quote binding and standard passenger one-active-immediate-trip guard even with distinct device keys; use stable trip/driver/vehicle row locking, leases, generation fencing, bounded matching deadlines and explicit rematch. Scheduled requests are separate; corporate bookings for distinct passengers have explicit principals. Core alone commits; Redis/Kafka are not authority.

**Verification and done:** Many concurrent accepts/cancel/expiry/retry/crash cases create one winner; two devices with distinct keys return existing immediate trip/conflict; stale generation rejects; active trip never reassigned on heartbeat TTL; no-supply terminates and communicates.

### T20 — Realtime subscriptions and resynchronization

- **Requirements:** RT-01
- **Depends on:** T19
- **Responsible roles:** Realtime + mobile/web
- **Outputs / owned paths:** apps/backend/cmd/realtime/; contracts/openapi/snapshots/; tests/journeys/reconnect/

**Action:** Implement per-object auth, cursor/version, bounded queues/backpressure and authoritative snapshot after gaps. Membership/session changes revoke subscriptions.

**Verification and done:** Lost/reordered/duplicate fanout and reconnect converge; no tenant/PII leakage; push is supplemental; disconnected rider sees pending/stale status instead of false acknowledgment.

## Phase 6 — Complete trip experience and mobile apps (M2)

### T21 — Trip/PIN/cancellation state contracts

- **Requirements:** RID-01 RID-02 RID-04
- **Depends on:** T20
- **Responsible roles:** Trip backend + driver + QA
- **Outputs / owned paths:** apps/backend/internal/trip/; tests/concurrency/transitions/; contracts/events/trip/

**Action:** Implement separate lifecycle aggregates, server PIN digest/one-use/attempt bounds and authorized guarded transitions. Define audited exception and cancellation racing start/completion.

**Verification and done:** Invalid actor/PIN/version rejects; terminal history cannot be rewritten; replay doesn't reconsume code or complete twice; payment failure does not rewind a trip.

### T22 — Fare changes and notification workflows

- **Requirements:** RID-03 NTF-01
- **Depends on:** T21
- **Responsible roles:** Pricing + communications + clients
- **Outputs / owned paths:** apps/backend/internal/communication/; apps/passenger/lib/; apps/driver-android/feature/trip/

**Action:** Implement accepted fare changes and stale-notification cancellation; localized channel templates and purpose/consent. Existing offline command queue uses original idempotency key and server confirmation.

**Verification and done:** Destination/stop amendment consent and refusal tested; queue can expire safely; no secret PIN/precise location in unauthorized notification; SMS outage bounded.

### T23 — Passenger complete journey

- **Requirements:** MOB-01
- **Depends on:** T21 T22
- **Responsible roles:** Flutter + UX + QA
- **Outputs / owned paths:** apps/passenger/; tests/journeys/passenger/

**Action:** Build Android/iOS full quote/search/arrival/PIN/ride/payment-status/receipt-support/settings screens against generated contracts. Device permissions and connectivity lifecycle are explicit.

**Verification and done:** UI journeys run on both OS release candidates with denied location, background/reconnect, large text and failed payment states. Any receipt/support backend fixture is labeled synthetic and proves only its UI contract. Full MOB-01 integrated acceptance remains pending until T28/T29/T32 provide actual finance/arrival/support outcomes at M2; no local UI state is presented as committed server result.

### T24 — Driver complete journey and accessibility

- **Requirements:** MOB-02 ACC-01
- **Depends on:** T21 T22 T23
- **Responsible roles:** Android + UX + QA + web
- **Outputs / owned paths:** apps/driver-android/; packages/web-design-system/; tests/mobile-field/device-matrix/; docs/contracts/accessibility.md

**Action:** Build driver offer/arrival/PIN/trip/earnings and supported Android foreground workflow. Apply shared semantic accessibility requirements across passenger/driver/web and evaluate screen-reader/text/touch/localization.

**Verification and done:** Field battery/OEM/OS/device tests document supported baseline and exclusions; core screens accessible in ka/en; legal accessibility roadmap incorporated for 2027 rules. Earnings UI uses an explicit contract fixture initially; real ledger/payout integration and full MOB-02 acceptance are verified at M2 after T25–T32.

## Phase 7 — Payments, ledger and settlement (M2)

### T25 — Ledger and PSP durable operations

- **Requirements:** PAY-01 PAY-02
- **Depends on:** T24 BIZ-03 signed model
- **Responsible roles:** Finance backend + counsel/accountant + QA
- **Outputs / owned paths:** apps/backend/internal/{ledger,payment}/; tests/concurrency/payments/

**Action:** Implement accounting accounts/posting rules from approved principal/agent model, durable intent, provider idempotency/authenticity/amount/reference checks and unknown-result recovery.

**Verification and done:** Every journal balances per currency; authorize/capture timeout and duplicate callback do not duplicate money; no retry creates new payment intent; raw PAN/CVV absent.

### T26 — Cash commissions and beneficiary payout

- **Requirements:** PAY-03 PAY-04
- **Depends on:** T25
- **Responsible roles:** Finance + operations + web
- **Outputs / owned paths:** apps/backend/internal/ledger/; apps/web-consoles/features/finance/; docs/operations/payouts.md

**Action:** Implement cash receivable and collection/debt review; payout legal beneficiaries/cadence, bank-change step-up, maker/checker and pending/failed UI.

**Verification and done:** Cash not fabricated as PSP settlement; default costs shown; no duplicate transfers under retry; revoked membership doesn't reroute past entitlement; legal balance-netting rule followed.

### T27 — Provider-bank-ledger reconciliation

- **Requirements:** PAY-05
- **Depends on:** T26
- **Responsible roles:** Finance + QA
- **Outputs / owned paths:** apps/backend/internal/payment/; tests/journeys/reconciliation/; docs/runbooks/reconciliation.md

**Action:** Match trip/journal/payment/bank/batch records daily. Quarantine late/missing/unexpected entries, accountable exception SLA and provider pollback.

**Verification and done:** Synthetic omissions/duplicates/currency mismatches produce correct exceptions; suspense items visible; reconciled payout readiness stops on unresolved material discrepancy.

### T28 — Refund after split and legal receipts

- **Requirements:** PAY-06 REC-01
- **Depends on:** T27
- **Responsible roles:** Finance + support + web/mobile
- **Outputs / owned paths:** apps/backend/internal/{ledger,payment}/; docs/contracts/receipts.md; tests/journeys/refunds/

**Action:** Implement partial/full refund and post-payout recovery receivables/contract limits, not assumed provider split reversal. Render correct issuer/tax/amount corrections and history.

**Verification and done:** Refund after paid split follows provider confirmed limits; repeated refund idempotent; old journal immutable; receipt/invoice reconciles to authorized posted amounts.

## Phase 8 — Arrival proof, safety, support and privacy (M2)

### T29 — Arrival evidence and wait dispute

- **Requirements:** ARR-01 SUP-01
- **Depends on:** T28
- **Responsible roles:** Telemetry + trip + support/UX
- **Outputs / owned paths:** apps/backend/internal/{telemetry,trip,support}/; apps/web-consoles/features/disputes/

**Action:** Implement field-calibrated approach/geofence/accuracy/duration decision, durable minimal evidence and passenger notice/grace. Build evidence-led no-show/arrival/fare/lost-item case flow.

**Verification and done:** Opposite-road/urban-canyon/stale/denied-GPS scenarios don't autocharge unfairly; exception reason audited; support can reverse with approved financial entry and explain decision.

### T30 — Rules risk, emergency escalation and appeals

- **Requirements:** SAFE-01 SAFE-02 SAFE-03
- **Depends on:** T29
- **Responsible roles:** Safety product + operations + backend
- **Outputs / owned paths:** apps/backend/internal/safety/; docs/operations/emergency.md; tests/journeys/safety/

**Action:** Implement versioned proportional rules, severity routing and accountable safety cases; explicit112 fallback, trip-share revocation, disconnected behavior and human appeals.

**Verification and done:** Staffed drill reaches owned escalation; no claimed112 integration; sanctions explainable/appealable; PIN/geofence not treated as physical safety proof; outage fallback visible.

### T31 — Privacy inventory and subject rights

- **Requirements:** PRIV-01 PRIV-02
- **Depends on:** T30
- **Responsible roles:** Privacy/legal + backend/platform
- **Outputs / owned paths:** apps/backend/internal/privacy/; docs/security/data-map.md; docs/legal/transfer-review.md

**Action:** Implement verified subject requests, minimization, processor/transfers and deletion/hold workflow, category schedule approvals. Limit finance/history identities via pseudonymous retained references.

**Verification and done:** Export belongs to verified subject; other riders/drivers/corp private trips excluded; erase respects reviewed hold; approved legal basis/transfer/retention for every category.

### T32 — Abuse controls and sensitive staff audit

- **Requirements:** ABUSE-01 AUD-01
- **Depends on:** T31
- **Responsible roles:** Security + operations + QA
- **Outputs / owned paths:** tests/security/abuse/; apps/backend/internal/{identity,safety}/; docs/security/access-matrix.md

**Action:** Exercise spoof/replay/OTP/PIN farming/cash/staff misuse controls. Audit sensitive reads/changes and large adjustment two-person approvals.

**Verification and done:** Controls detect/bound abuse without automatic unsupported punitive inference; tamper attempt visible; exports/sockets/jobs follow purpose restriction; incident evidence access reviewed. M2 additionally runs actual integrated passenger/driver card-and-cash journeys through arrival/PIN/completion/posted receipt/support with T21–T31 outputs; fixture-only UI success cannot complete MOB-01/MOB-02.

## Phase 9 — Fleet and corporate products (M3)

### T33 — Corporate tenant and employee model

- **Requirements:** CORP-01
- **Depends on:** T32
- **Responsible roles:** Corporate backend + web
- **Outputs / owned paths:** apps/backend/internal/corporate/; apps/web-consoles/features/corporate/; tests/security/corporate/

**Action:** Implement membership/cost-center principal and effective-date revocation; business booking visibility stays distinct from employees' private rides.

**Verification and done:** Cross-tenant references/jobs/exports reject; employee removal prevents new booking and invalidates subscriptions; historical business/private views correct.

### T34 — Corporate spend and credit contract

- **Requirements:** CORP-02 CORP-03
- **Depends on:** T33
- **Responsible roles:** Corporate + finance + product
- **Outputs / owned paths:** apps/backend/internal/{corporate,ledger}/; tests/journeys/corporate/

**Action:** Reserve approved booking budget atomically, enforce time/category/cost caps on amendments, approval workflow, invoices/credit aging and recovery.

**Verification and done:** Race cannot overspend approved budget; cancelled trip releases reservation once; invoices/credit reconcile; revoked authorization cannot approve queued work.

### T35 — Fleet associations and transfer access

- **Requirements:** FLT-01
- **Depends on:** T33
- **Responsible roles:** Fleet backend + web + supply
- **Outputs / owned paths:** apps/backend/internal/fleet/; apps/web-consoles/features/fleet/; tests/security/fleet/

**Action:** Implement effective vehicle/driver contracts, delegated access, transfer/removal and scoped historical records.

**Verification and done:** Joining new fleet doesn't expose another fleet's historical personal data; overlapping incompatible association rejected; live-trip reassignment handled safely.

### T36 — Fleet statements and payouts

- **Requirements:** FLT-02
- **Depends on:** T34 T35
- **Responsible roles:** Fleet + finance + operations
- **Outputs / owned paths:** apps/backend/internal/{fleet,ledger}/; tests/journeys/fleet-settlement/

**Action:** Calculate shares/beneficiary under versioned signed agreement; support commission/tip and adjustments; authorize each statement export.

**Verification and done:** Posted amount history unchanged by new membership/share; statements reconcile to payout/bank; no unauthorized manager sees private earnings.

## Phase 10 — Scheduled, airport and intercity service (M3)

### T37 — Scheduled booking aggregate and deadlines

- **Requirements:** SCH-01
- **Depends on:** T36
- **Responsible roles:** Booking backend + mobile/web
- **Outputs / owned paths:** apps/backend/internal/booking/; tests/journeys/scheduling/

**Action:** Store local civil time/IANA zone and UTC instant; distinct schedule/confirmation obligation, matching window and notification. Future booking is not current exclusive driver assignment. If named driver/vehicle capacity is promised, reserve non-overlapping effective-time windows plus calibrated deadhead buffers transactionally, with amendment/cancellation release.

**Verification and done:** Restart/clock-boundary/repeated job execution trigger once; supply request vs guarantee displayed; current driver exclusivity and future capacity commitments remain separate; concurrent overlapping driver/vehicle promises reject and cancellation releases capacity once.

### T38 — Airport approved meeting point workflow

- **Requirements:** APT-01
- **Depends on:** T37 local airport pack
- **Responsible roles:** Booking + operations + maps + mobile
- **Outputs / owned paths:** docs/operations/airports/; apps/backend/internal/{booking,policy}/; tests/mobile-field/airports/

**Action:** Use approved access/correct pickup rules, parking/wait/no-show disclosures and optional flight-data fallback; validate actual passenger-driver meeting points.

**Verification and done:** Each airport separately gated; absent flight feed doesn't invent timing; inaccessible pickup disabled/replaced with approved alternative; fees match agreed quote.

### T39 — Intercity itinerary and driver economics

- **Requirements:** INT-01
- **Depends on:** T37 T38
- **Responsible roles:** Booking + pricing + supply + safety
- **Outputs / owned paths:** apps/backend/internal/{booking,pricing}/; docs/operations/intercity.md; tests/journeys/intercity/

**Action:** Validate origin/destination jurisdiction, route closures/tolls, paid/unpaid return economics, category and roadside escalation. No unapproved border/medical/unaccompanied-minor service.

**Verification and done:** Quote shows conditions; driver sees remunerated cost and return assumption; unavailable route/supply yields bounded explicit outcome; return empty-mile costs included.

### T40 — Replacement, no-show and service fallback

- **Requirements:** SCH-02
- **Depends on:** T38 T39
- **Responsible roles:** Booking + safety/support + finance
- **Outputs / owned paths:** tests/journeys/scheduled-recovery/; docs/runbooks/scheduled-service.md

**Action:** Exercise late/no driver, driver cancellation, rider no-show, outage and replacement offer with generation fencing and staffed assistance.

**Verification and done:** Replacement cannot duplicate active assignment; deadline/revised fare requires consent; no replacement provides explicit cancellation/refund support and records service quality.

## Phase 11 — Production reliability and security certification (M4)

### T41 — Load, SLO and cost certification

- **Requirements:** REL-01 REL-04 DATA-01
- **Depends on:** T40
- **Responsible roles:** SRE + QA + data/product
- **Outputs / owned paths:** tests/load/; infra/observability/; docs/reports/capacity.md; docs/contracts/metrics.md

**Action:** Benchmark documented synthetic sustained/burst/hot-zone workloads and real-device latencies; define SLI denominators/provider errors. Use minimized projections for analytics and regional broker/cloud monthly cost.

**Verification and done:** Measured envelope, bottlenecks and costs recorded;99.95% target evidence/limitations explicit; unbounded transactional BI absent; trip/ledger correctness zero-error checks pass.

### T42 — Restore chaos and release rollback

- **Requirements:** REL-02 REL-03 ROLL-01
- **Depends on:** T41
- **Responsible roles:** SRE + backend + finance
- **Outputs / owned paths:** tests/resilience/; docs/runbooks/{restore,release,provider-outage}.md

**Action:** Drill AZ/DB/Redis/broker/provider/network failure; full/regional restore from backups with erasure tombstones and PSP reconciliation; non-destructive migration expand/contract rollback.

**Verification and done:** Core RPO<=5min/RTO<=30min and regional RPO<=1h/RTO<=4h proposed targets measured or explicitly re-approved; no duplicate assignments/effects; restored service gates finance checks.

### T43 — Security and supply-chain exit

- **Requirements:** SEC-01 SEC-02
- **Depends on:** T42
- **Responsible roles:** Independent assessor + security/platform
- **Outputs / owned paths:** docs/reports/security-review.md; tests/security/; .github/workflows/security/

**Action:** Obtain independent identity/tenant/finance/mobile/API assessment; test intrusion/secret rotation and provenance/oidc trust. Resolve exploitable critical/high issues or formally block launch.

**Verification and done:** No unresolved exploitable high/critical issue; real assessment not merely checklist; release artifacts traceable, supply chain controls fail closed on relevant findings.

### T44 — Retention erasure and certification signoff

- **Requirements:** PRIV-03
- **Depends on:** T41 T42 T43
- **Responsible roles:** Privacy/legal + SRE + owners
- **Outputs / owned paths:** docs/reports/privacy-erasure.md; docs/decisions/M4-certification.md

**Action:** Exercise retention across DB/events/object/analytics/logs/backups/vendor processor and legal holds; independent integration check of all v1 capabilities, exclusions/rollback.

**Verification and done:** Restored backups replay erasure tombstones; immutable journals retain only reviewed minimal facts; source-specific caching complies; full product regression and cert evidence linked.

## Phase 12 — Five-city operational activation (M4)

### T45 — Five city legal/provider launch packs

- **Requirements:** LCH-01 LCH-05
- **Depends on:** T44
- **Responsible roles:** Operations + counsel + finance + product
- **Outputs / owned paths:** docs/operations/launch/{city}/; docs/decisions/city-enablements.md

**Action:** Create individually dated jurisdiction/airport/city hours, PSP/data/insurance/app-store/contract readiness, marketing terms and incident/accountable-owner approvals.

**Verification and done:** All five packs have actual evidence or remain disabled; countrywide permission not inferred; no provider/store status fabricated; no critical open gate on enabled service.

### T46 — Liquidity quality and driver-economics cohorts

- **Requirements:** LCH-02
- **Depends on:** T45 T47; controlled operational authorization
- **Responsible roles:** City operations + product/data
- **Outputs / owned paths:** docs/reports/city-cohorts/; docs/operations/coverage-plan.md

**Action:** Activate controlled staffed production cohorts and measure zone/time supply, requests, fulfilled outcomes, cancellations/ETA/driver online-hour costs and retained riders.

**Verification and done:** Valid denominators/time windows and confidence/bias reported; proposed gates met on each enabled cohort or re-approved from evidence; no automatic citywide expansion from registered driver totals.

### T47 — Staffed incident/support/finance readiness

- **Requirements:** LCH-03
- **Depends on:** T45
- **Responsible roles:** Operations lead + safety + finance
- **Outputs / owned paths:** docs/operations/roster.md; docs/reports/incident-drills.md

**Action:** Verify service hours actual roster/training/relief, simultaneous safety case capacity, 112 fallback, on-call and provider finance contacts. Run busy-shift no-show/payment/safety exercises.

**Verification and done:** Roster covers promised hours; one continuous seat budgeted ~5–6 FTE, concurrency/leave explicitly tested; urgent acknowledgment/ownership evidence and failure escalation available.

### T48 — Budgeted activation and stop criteria

- **Requirements:** LCH-04
- **Depends on:** T46 T47
- **Responsible roles:** Product + finance + operations + engineering
- **Outputs / owned paths:** docs/decisions/{city-activation,spend-limits}.md; docs/runbooks/city-stop.md

**Action:** Enable approved coverage in evidence-based sequence, release measured promotional caps, monitor runway/unit economics. Define stop/new-booking-disable while protecting in-progress rides and payouts.

**Verification and done:** Every enabled city meets actual gate signoff; only specifically authorized launch/spend executed; triggers halt growth/new rides safely, never erase active history or owed money.

## Requirement-to-task coverage

| Requirement | Work cards | Primary phase |
|---|---|---|
| BIZ-01 | T01 | 1 |
| BIZ-02 | T02 | 1 |
| BIZ-03 | T03 | 1 |
| BIZ-04 | T01 | 1 |
| VND-01 | T03 | 1 |
| PRD-01 | T04 | 1 |
| PLAT-01 | T05 | 2 |
| PLAT-02 | T06 | 2 |
| PLAT-03 | T05 | 2 |
| API-01 | T06 | 2 |
| EVT-01 | T08 | 2 |
| OBS-01 | T07 | 2 |
| IAM-01 | T09 | 3 |
| IAM-02 | T10 | 3 |
| IAM-03 | T10 | 3 |
| DRV-01 | T11 | 3 |
| DRV-02 | T11 | 3 |
| DRV-03 | T11 | 3 |
| CITY-01 | T12 | 3 |
| GEO-01 | T13 | 4 |
| FARE-01 | T14 | 4 |
| FARE-02 | T15 | 4 |
| FARE-03 | T16 | 4 |
| FARE-04 | T16 | 4 |
| LOC-01 | T17 | 5 |
| LOC-02 | T17 | 5 |
| DIS-01 | T18 | 5 |
| DIS-02 | T19 | 5 |
| DIS-03 | T19 | 5 |
| DIS-04 | T18 | 5 |
| RT-01 | T20 | 5 |
| RID-01 | T21 | 6 |
| RID-02 | T21 | 6 |
| RID-03 | T22 | 6 |
| RID-04 | T21 | 6 |
| MOB-01 | T23 | 6 |
| MOB-02 | T24 | 6 |
| ACC-01 | T24 | 6 |
| NTF-01 | T22 | 6 |
| PAY-01 | T25 | 7 |
| PAY-02 | T25 | 7 |
| PAY-03 | T26 | 7 |
| PAY-04 | T26 | 7 |
| PAY-05 | T27 | 7 |
| PAY-06 | T28 | 7 |
| REC-01 | T28 | 7 |
| ARR-01 | T29 | 8 |
| SAFE-01 | T30 | 8 |
| SAFE-02 | T30 | 8 |
| SAFE-03 | T30 | 8 |
| SUP-01 | T29 | 8 |
| PRIV-01 | T31 | 8 |
| PRIV-02 | T31 | 8 |
| ABUSE-01 | T32 | 8 |
| AUD-01 | T32 | 8 |
| CORP-01 | T33 | 9 |
| CORP-02 | T34 | 9 |
| CORP-03 | T34 | 9 |
| FLT-01 | T35 | 9 |
| FLT-02 | T36 | 9 |
| SCH-01 | T37 | 10 |
| APT-01 | T38 | 10 |
| INT-01 | T39 | 10 |
| SCH-02 | T40 | 10 |
| REL-01 | T41 | 11 |
| REL-02 | T42 | 11 |
| REL-03 | T42 | 11 |
| REL-04 | T41 | 11 |
| SEC-01 | T43 | 11 |
| SEC-02 | T43 | 11 |
| PRIV-03 | T44 | 11 |
| ROLL-01 | T42 | 11 |
| DATA-01 | T41 | 11 |
| LCH-01 | T45 | 12 |
| LCH-02 | T46 | 12 |
| LCH-03 | T47 | 12 |
| LCH-04 | T48 | 12 |
| LCH-05 | T45 | 12 |

No work card is automatically marked done when its output filename exists. Verifiers check behavior/evidence, external dependencies and cross-module wiring. Critical acceptance includes race/crash/provider-unknown outcomes and city-specific operational exceptions, not implementation-mirroring assertions.
