# Roadmap: Fair Ride Georgia

## Overview

Build the full fair/trust five-city service on production infrastructure through measurable contracts, durable invariants and staffed readiness. This roadmap is the implementation program; the foundation pack is planning output only. No phase is completed by writing this roadmap. Calendar planning baseline is 12–15 months with the assumed 15-person product/engineering team; gate sequencing, not deadlines, controls execution.

## Milestones

| Milestone | Phases | Exit |
|---|---|---|
| M0 Contract validated | 1 | Field/legal/provider/product evidence reviewed |
| M1 Platform foundation | 2–5 | Reproducible platform, supply, quote, dispatch contracts verified |
| M2 Complete ride service | 6–8 | Mobile, financial settlement, trust and operations verified |
| M3 Commercial capabilities | 9–10 | Fleet/corporate and airport/intercity/scheduled verified |
| M4 Production certification and five-city activation | 11–12 | Reliability/security gates and all five launch packs passed |

## v1.0 — Five-city production program

- [ ] **Phase 1: Business, regulatory and product contracts** - M0 production program.
- [ ] **Phase 2: Reproducible platform foundation** - M1 production program.
- [ ] **Phase 3: Identity, driver eligibility and city policy** - M1 production program.
- [ ] **Phase 4: Addressing, quotes and pricing policy** - M1 production program.
- [ ] **Phase 5: Location, dispatch and realtime correctness** - M1 production program.
- [ ] **Phase 6: Complete trip experience and mobile apps** - M2 production program.
- [ ] **Phase 7: Payments, ledger and settlement** - M2 production program.
- [ ] **Phase 8: Arrival proof, safety, support and privacy** - M2 production program.
- [ ] **Phase 9: Fleet and corporate products** - M3 production program.
- [ ] **Phase 10: Scheduled, airport and intercity service** - M3 production program.
- [ ] **Phase 11: Production reliability and security certification** - M4 production program.
- [ ] **Phase 12: Five-city operational activation** - M4 production program.

### Phase 1: Business, regulatory and product contracts
Five-city legal/evidence and anonymized field-research packs distinguish known facts and unresolved conditions.
**Goal:** Five-city legal/evidence and anonymized field-research packs distinguish known facts and unresolved conditions.
**Depends on**: Nothing (first phase)
**Requirements**: BIZ-01, BIZ-02, BIZ-03, BIZ-04, VND-01, PRD-01
**Success Criteria** (what must be TRUE):
  1. Five-city legal/evidence and anonymized field-research packs distinguish known facts and unresolved conditions.
  2. Reviewed economics/funds flow and provider selection record support a sustainable contract.
  3. Screen/domain/API/privacy contracts are sufficient for an independently checked first implementation plan.
**Plans**: 3 plans

Plans:
- [ ] 01-01: City evidence, field research and economics
- [ ] 01-02: Legal/funds-flow/provider contracts
- [ ] 01-03: Product/security/privacy/API contracts and M0 review

### Phase 2: Reproducible platform foundation
A clean environment builds and deploys a staging tracer with pinned compatible tools and isolated identities.
**Goal:** A clean environment builds and deploys a staging tracer with pinned compatible tools and isolated identities.
**Depends on**: Phase 1
**Requirements**: PLAT-01, PLAT-02, PLAT-03, API-01, EVT-01, OBS-01
**Success Criteria** (what must be TRUE):
  1. A clean environment builds and deploys a staging tracer with pinned compatible tools and isolated identities.
  2. Contract errors/idempotency and outbox recovery are observable through scrubbed telemetry.
  3. Critical CI controls protect release provenance; no invented runnable verification commands remain.
**Plans**: 6 plans

Plans:
- [ ] 02-01: Backend bootstrap and server contracts
- [ ] 02-02: Retained TypeScript/Dart contract clients
- [ ] 02-03: Kotlin client and integrated CI/provenance
- [ ] 02-04: Staging infrastructure and bounded Kafka trial
- [ ] 02-05: Instrumented synthetic staging tracer
- [ ] 02-06: Durable event/realtime recovery and foundation acceptance

### Phase 3: Identity, driver eligibility and city policy
Riders/drivers authenticate and staff use MFA with tested role/tenant isolation.
**Goal:** Riders/drivers authenticate and staff use MFA with tested role/tenant isolation.
**Depends on**: Phase 2
**Requirements**: IAM-01, IAM-02, IAM-03, DRV-01, DRV-02, DRV-03, CITY-01
**Success Criteria** (what must be TRUE):
  1. Riders/drivers authenticate and staff use MFA with tested role/tenant isolation.
  2. Only eligible driver/vehicle/city combinations receive new work and expired documents revoke eligibility.
  3. All five city policy objects are versioned and disabled until individually authorized.
**Plans**: TBD during rolling phase planning

Plans:
- [ ] Rolling plans: refine TASK-PLAN work cards for phase 3 with current code paths and evidence before execution.

### Phase 4: Addressing, quotes and pricing policy
Every city has tested map/pickup samples and permission-denied manual selection.
**Goal:** Every city has tested map/pickup samples and permission-denied manual selection.
**Depends on**: Phase 3
**Requirements**: GEO-01, FARE-01, FARE-02, FARE-03, FARE-04
**Success Criteria** (what must be TRUE):
  1. Every city has tested map/pickup samples and permission-denied manual selection.
  2. Fare quote acceptance is reproducible; changes require authorized amendments.
  3. Waiting/cancellation policy is evidence-based, visible and can be simulated/rolled back.
**Plans**: TBD during rolling phase planning

Plans:
- [ ] Rolling plans: refine TASK-PLAN work cards for phase 4 with current code paths and evidence before execution.

### Phase 5: Location, dispatch and realtime correctness
Stale/offline/ineligible candidates never receive valid assignments.
**Goal:** Stale/offline/ineligible candidates never receive valid assignments.
**Depends on**: Phase 4
**Requirements**: LOC-01, LOC-02, DIS-01, DIS-02, DIS-03, DIS-04, RT-01
**Success Criteria** (what must be TRUE):
  1. Stale/offline/ineligible candidates never receive valid assignments.
  2. Concurrent/replayed acceptance results in at most one active assignment per trip and driver.
  3. Location/realtime interruptions recover from authoritative state and policy fairness is measurable.
**Plans**: TBD during rolling phase planning

Plans:
- [ ] Rolling plans: refine TASK-PLAN work cards for phase 5 with current code paths and evidence before execution.

### Phase 6: Complete trip experience and mobile apps
Passenger Android/iOS and driver Android implement contract-complete trip UX with poor-connectivity and permission handling; full finance/arrival/support integration is accepted at M2 after phases 7–8.
**Goal:** Passenger Android/iOS and driver Android implement contract-complete trip UX with poor-connectivity and permission handling; full finance/arrival/support integration is accepted at M2 after phases 7–8.
**Depends on**: Phase 5
**Requirements**: RID-01, RID-02, RID-03, RID-04, MOB-01, MOB-02, ACC-01, NTF-01
**Success Criteria** (what must be TRUE):
  1. Passenger Android/iOS and driver Android implement trip UX with poor connectivity and permission restrictions; explicitly synthetic receipt/support contract tests remain distinct from M2 integrated service acceptance.
  2. Trip, assignment, payment and incident state machines stay distinct; PIN and fare amendment consent enforce transitions.
  3. Cancellation/notification and accessibility matrices pass.
**Plans**: TBD during rolling phase planning

Plans:
- [ ] Rolling plans: refine TASK-PLAN work cards for phase 6 with current code paths and evidence before execution.

### Phase 7: Payments, ledger and settlement
Card and cash money flows post balanced immutable entries and duplicate callbacks cannot duplicate effects.
**Goal:** Card and cash money flows post balanced immutable entries and duplicate callbacks cannot duplicate effects.
**Depends on**: Phase 6
**Requirements**: PAY-01, PAY-02, PAY-03, PAY-04, PAY-05, PAY-06, REC-01
**Success Criteria** (what must be TRUE):
  1. Card and cash money flows post balanced immutable entries and duplicate callbacks cannot duplicate effects.
  2. Driver/fleet payout, partial refund after split and reconciliation exceptions match contracted provider capabilities.
  3. Receipt/invoice issuer and tax calculation follow approved legal contracts.
**Plans**: TBD during rolling phase planning

Plans:
- [ ] Rolling plans: refine TASK-PLAN work cards for phase 7 with current code paths and evidence before execution.

### Phase 8: Arrival proof, safety, support and privacy
Arrival/wait fee proof handles low confidence and disputes without automatic unfair fees.
**Goal:** Arrival/wait fee proof handles low confidence and disputes without automatic unfair fees.
**Depends on**: Phase 7
**Requirements**: ARR-01, SAFE-01, SAFE-02, SAFE-03, SUP-01, PRIV-01, PRIV-02, ABUSE-01, AUD-01
**Success Criteria** (what must be TRUE):
  1. Arrival/wait fee proof handles low confidence and disputes without automatic unfair fees.
  2. Risk/emergency/support workflows have trained accountable human owners and tested connectivity fallbacks.
  3. Privacy rights, processor transfer inventory and staff audits enforce least privilege; M2 integrates actual mobile trip/arrival/PIN/card/cash/receipt/support outcomes from phases 6–8 before marking those dependent requirements complete.
**Plans**: TBD during rolling phase planning

Plans:
- [ ] Rolling plans: refine TASK-PLAN work cards for phase 8 with current code paths and evidence before execution.

### Phase 9: Fleet and corporate products
Corporate/fleet tenants cannot observe or mutate another tenant's resources.
**Goal:** Corporate/fleet tenants cannot observe or mutate another tenant's resources.
**Depends on**: Phase 8
**Requirements**: CORP-01, CORP-02, CORP-03, FLT-01, FLT-02
**Success Criteria** (what must be TRUE):
  1. Corporate/fleet tenants cannot observe or mutate another tenant's resources.
  2. Booking/approval/credit/category policies and fleet associations enforce effective contracts.
  3. Statements, invoices and ledger reconcile against authorized beneficiaries.
**Plans**: TBD during rolling phase planning

Plans:
- [ ] Rolling plans: refine TASK-PLAN work cards for phase 9 with current code paths and evidence before execution.

### Phase 10: Scheduled, airport and intercity service
Scheduling stores UTC/local instants and deadlines; supply guarantee status is explicit.
**Goal:** Scheduling stores UTC/local instants and deadlines; supply guarantee status is explicit.
**Depends on**: Phase 9
**Requirements**: SCH-01, APT-01, INT-01, SCH-02
**Success Criteria** (what must be TRUE):
  1. Scheduling stores UTC/local instants and deadlines; supply guarantee status is explicit.
  2. Approved airport meeting points and intercity economics/legal rules govern fares and offers.
  3. No-show/replacement/fallback/refund workflows pass staffed exercises.
**Plans**: TBD during rolling phase planning

Plans:
- [ ] Rolling plans: refine TASK-PLAN work cards for phase 10 with current code paths and evidence before execution.

### Phase 11: Production reliability and security certification
Approved SLO/cost/load tests and failover/restore drills show safe assignment and money behavior.
**Goal:** Approved SLO/cost/load tests and failover/restore drills show safe assignment and money behavior.
**Depends on**: Phase 10
**Requirements**: REL-01, REL-02, REL-03, REL-04, SEC-01, SEC-02, PRIV-03, ROLL-01, DATA-01
**Success Criteria** (what must be TRUE):
  1. Approved SLO/cost/load tests and failover/restore drills show safe assignment and money behavior.
  2. Security findings, privacy erasure/holds and supply-chain release gates meet exit rules.
  3. Backward-compatible deployments, migration rollback and analytics boundaries are verified.
**Plans**: TBD during rolling phase planning

Plans:
- [ ] Rolling plans: refine TASK-PLAN work cards for phase 11 with current code paths and evidence before execution.

### Phase 12: Five-city operational activation
Zugdidi, Kutaisi, Batumi, Tbilisi and Rustavi each hold a signed individually dated launch pack.
**Goal:** Zugdidi, Kutaisi, Batumi, Tbilisi and Rustavi each hold a signed individually dated launch pack.
**Depends on**: Phase 11
**Requirements**: LCH-01, LCH-02, LCH-03, LCH-04, LCH-05
**Success Criteria** (what must be TRUE):
  1. Zugdidi, Kutaisi, Batumi, Tbilisi and Rustavi each hold a signed individually dated launch pack.
  2. City/zone/hour cohorts meet measured quality, driver economics and cash-runway criteria.
  3. Promised operating hours are staffed and provider/store/legal dependencies and stop conditions are closed.
**Plans**: TBD during rolling phase planning

Plans:
- [ ] Rolling plans: refine TASK-PLAN work cards for phase 12 with current code paths and evidence before execution.

## Progress

Execution order is numeric. During detailed planning, independent read-only research or disjoint tasks may run in parallel; dependent mutation/finance/assignment work remains ordered. Phases are conservative gate groups, not a requirement to run every task serially.

| Phase | Milestone | Plans Complete | Status | Completed |
|---|---|---|---|---|
| 1. Business, regulatory and product contracts | M0 | 0/3 | Not started | — |
| 2. Reproducible platform foundation | M1 | 0/6 | Not started | — |
| 3. Identity, driver eligibility and city policy | M1 | 0/TBD | Not started | — |
| 4. Addressing, quotes and pricing policy | M1 | 0/TBD | Not started | — |
| 5. Location, dispatch and realtime correctness | M1 | 0/TBD | Not started | — |
| 6. Complete trip experience and mobile apps | M2 | 0/TBD | Not started | — |
| 7. Payments, ledger and settlement | M2 | 0/TBD | Not started | — |
| 8. Arrival proof, safety, support and privacy | M2 | 0/TBD | Not started | — |
| 9. Fleet and corporate products | M3 | 0/TBD | Not started | — |
| 10. Scheduled, airport and intercity service | M3 | 0/TBD | Not started | — |
| 11. Production reliability and security certification | M4 | 0/TBD | Not started | — |
| 12. Five-city operational activation | M4 | 0/TBD | Not started | — |
