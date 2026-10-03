# Requirements: Fair Ride Georgia

**Defined:** 2026-10-03
**Core value:** Reliable transparent rides and sustainable driver earnings, with financial/safety invariants.

## v1 Requirements

v1 is the complete five-city production service described in MASTER-SPEC, not a disposable MVP. All checkboxes remain open: documentation does not prove implementation or operational/legal validation. One primary phase owns each requirement; other phases can provide dependencies and regression checks. Business review evidence and fieldwork are execution tasks. UI contracts in Phase 6 may use explicitly synthetic receipt/support fixtures; full MOB-01/MOB-02 integrated acceptance stays pending until M2 verifies actual Phase 7 finance and Phase 8 arrival/support behavior. Fixture success must not mark an integrated requirement complete.

### Business, regulatory and product contracts

- [ ] **BIZ-01**: Every target city has a dated evidence pack distinguishing verified law, local unknowns, airport access and required approvals.
- [ ] **BIZ-02**: The financial model shows driver net contribution per online hour and platform contribution, cash flow, taxes and adverse scenarios without double-counted costs.
- [ ] **BIZ-03**: Operator principal/agent role, driver relationship, tax/receipt responsibilities and funds flow receive written Georgian professional review before provider contracts.
- [ ] **BIZ-04**: City/shift-specific driver and rider research produces anonymized evidence, sampling limitations and measured demand/supply hypotheses.
- [ ] **VND-01**: Mapping and PSP candidates are scored against documented routes/payment capabilities, terms, region, costs and sandbox/contract evidence.
- [ ] **PRD-01**: Screen/state inventory, domain invariants, city policy schema and acceptance contracts are reviewed against all five cities and traceable requirement IDs.

### Reproducible platform foundation

- [ ] **PLAT-01**: A clean checkout has documented reproducible developer and staging builds with separated credentials and compatible pinned tools.
- [ ] **PLAT-02**: CI checks contracts, critical tests and dependency/security findings before creating a traceable signed or attested release artifact.
- [ ] **PLAT-03**: Core modules enforce declared dependencies and ownership; only workload-isolated processes cross network boundaries.
- [ ] **API-01**: Published REST and internal gRPC contracts define authentication, errors, versions, deadlines, cancellation, pagination and idempotency scope.
- [ ] **EVT-01**: Database commits publish through a recoverable outbox and consumer inbox/deduplication contract; retry cannot duplicate external effects.
- [ ] **OBS-01**: A staging tracer propagates correlation from API through core, database, event worker and realtime without recording secrets or raw route PII.

### Identity, driver eligibility and city policy

- [ ] **IAM-01**: Riders/drivers can verify a phone, recover/revoke sessions and receive protection against OTP abuse and account enumeration.
- [ ] **IAM-02**: Staff use MFA, least privilege and auditable just-in-time escalation for sensitive operations.
- [ ] **IAM-03**: Authorization verifies resource ownership, tenant and role server-side; cross-user and cross-tenant access is denied.
- [ ] **DRV-01**: A driver cannot go online without required identity, license, vehicle and jurisdiction eligibility.
- [ ] **DRV-02**: Expired/revoked documents block new offers while a safe current-trip resolution is recorded.
- [ ] **DRV-03**: Vehicle-driver-fleet associations enforce valid category, ownership/contract and non-conflicting effective dates.
- [ ] **CITY-01**: Zugdidi, Kutaisi, Batumi, Tbilisi and Rustavi have separate versioned service-zone and jurisdiction policies with enable/disable controls.

### Addressing, quotes and pricing policy

- [ ] **GEO-01**: Riders can select and confirm road-accessible pickup/dropoff in every city even when precise location permission is denied.
- [ ] **FARE-01**: A quote exposes GEL total, fee components, policy version, validity, category and known airport/intercity conditions.
- [ ] **FARE-02**: An accepted quote remains reproducible and cannot change without a disclosed authorized fare amendment.
- [ ] **FARE-03**: Waiting/cancellation/no-show fees require policy version, qualifying evidence, notice and reviewable reasons.
- [ ] **FARE-04**: Tariff/geofence changes have simulated impact, scoped approval and rollback, and do not alter existing accepted quotes.

### Location, dispatch and realtime correctness

- [ ] **LOC-01**: Location rejects/restricts stale, out-of-order, inaccurate or implausible samples and distinguishes device from server time.
- [ ] **LOC-02**: Driver location works under supported background/foreground restrictions and explicitly shows when tracking is unavailable.
- [ ] **DIS-01**: Dispatch excludes stale/offline/ineligible/occupied drivers and incompatible pickup/category/jurisdiction candidates.
- [ ] **DIS-02**: Concurrent accepts, duplicate requests and retries cannot create two active assignments for one ride/driver/vehicle or two immediate active trips for one standard passenger, even across devices with distinct keys; validate effective driver-vehicle binding, and keep scheduled/corporate distinct-passenger rules explicit.
- [ ] **DIS-03**: Offer expiry, no supply, driver disconnect and assignment recovery terminate or recover within specified deadlines with passenger notification.
- [ ] **DIS-04**: Dispatch policy version records explainable scoring and fairness/ETA metrics without unexplained punitive rejection behavior.
- [ ] **RT-01**: Clients recover authoritative trip snapshot/version after lost, duplicated or reordered realtime messages.

### Complete trip experience and mobile apps

- [ ] **RID-01**: Trip state transitions reject illegal changes and preserve distinct trip, payment, assignment and incident states.
- [ ] **RID-02**: Only the current assigned driver can start a ride with verified pickup PIN or an explicitly reviewed audited exception.
- [ ] **RID-03**: Stops/destination changes obtain required consent and create a reproducible fare amendment.
- [ ] **RID-04**: Rider/driver cancellations record actor, reason, version and policy/evidence, with idempotent outcome.
- [ ] **MOB-01**: Passenger Flutter Android/iOS supports the complete quote-to-receipt flow including offline, denied permissions and account/privacy screens.
- [ ] **MOB-02**: Driver Kotlin Android supports enrollment, offers, arrival/PIN, trip completion and earnings with battery/network lifecycle recovery.
- [ ] **ACC-01**: Passenger, driver and web journeys pass the documented accessibility matrix for language, text scaling, screen readers and non-color status cues.
- [ ] **NTF-01**: Transactional push/SMS/in-app messages are localized, consent/purpose-aware, retriable and do not expose PIN/location to unauthorized recipients.

### Payments, ledger and settlement

- [ ] **PAY-01**: Licensed PSP integration handles authorization/capture/cancel/refund and provider-verified callbacks with authoritative status/amount/currency recovery under the agreed funds flow; validate signatures where the provider supports them.
- [ ] **PAY-02**: Every money movement balances in a currency-aware append-only double-entry ledger and corrections use new entries.
- [ ] **PAY-03**: Cash rides create explainable commission receivables/collections and reviewed debt rules without fabricated PSP cash settlement.
- [ ] **PAY-04**: Driver/fleet payouts use the contracted beneficiary and cadence with approval, duplicate protection and clear pending/failed states.
- [ ] **PAY-05**: Daily PSP/bank/ledger reconciliation identifies missing, duplicated, late and mismatched amounts and routes exceptions to accountable owners.
- [ ] **PAY-06**: Partial/full refund after payout/split creates recovery accounting, tracks provider limitations and never silently assumes split reversal.
- [ ] **REC-01**: Receipts/invoices reflect the legally reviewed issuer and posted amounts, including reversal/correction history.

### Arrival proof, safety, support and privacy

- [ ] **ARR-01**: Arrival/wait eligibility uses quality-aware road-compatible geofence evidence with auditable low-confidence exception and rider dispute.
- [ ] **SAFE-01**: A rules-based risk engine versions signals and decisions, rate-limits abuse and routes high-impact actions for human review.
- [ ] **SAFE-02**: Emergency journey includes explicit 112 call fallback, monitored escalation, loss-of-connectivity behavior and trained operational ownership.
- [ ] **SAFE-03**: Riders/drivers can appeal high-impact fraud/safety/eligibility decisions with reason codes and human review.
- [ ] **SUP-01**: Support can handle fare/arrival/no-show/lost-item complaints from evidence and policy without unrestricted PII access.
- [ ] **PRIV-01**: Each personal-data category has purpose, legal basis, access, processor, retention proposal and reviewed cross-border transfer path.
- [ ] **PRIV-02**: Subject access/export/deletion requests authenticate the requester and respect documented financial/legal-hold exceptions.
- [ ] **ABUSE-01**: Anti-abuse controls cover location replay/spoof, OTP abuse, PIN brute force, offer farming, cash fraud and staff misuse.
- [ ] **AUD-01**: Sensitive staff policy, finance, access and safety actions have actor/reason/version audit trails and dual approval where required.

### Fleet and corporate products

- [ ] **CORP-01**: Corporate tenants, employees and cost centers are isolated and employee revocation prevents new unauthorized corporate bookings.
- [ ] **CORP-02**: Corporate spend/category/time policies and approval limits are enforced at booking and amendment.
- [ ] **CORP-03**: Corporate invoicing, credit limits and aging/recovery integrate with ledger and documented contracts.
- [ ] **FLT-01**: Fleet managers see only authorized drivers/vehicles and effective associations, with protected transfer/removal workflows.
- [ ] **FLT-02**: Fleet statements and settlement reconcile contracted shares/beneficiaries without changing driver history.

### Scheduled, airport and intercity service

- [ ] **SCH-01**: Scheduled bookings persist explicit local/UTC time and confirmation/assignment deadlines, distinguish requests from guaranteed supply, and enforce non-overlapping named-driver/vehicle commitment windows with deadhead buffers separately from active assignments.
- [ ] **APT-01**: Each airport journey uses approved access/meeting-point and transparent parking/wait/no-show terms, with unavailable data fallback.
- [ ] **INT-01**: Intercity journeys check origin/destination eligibility, return/deadhead economics, route/fees and roadside/incident fallback.
- [ ] **SCH-02**: Scheduled/airport/intercity driver cancellation/no-show triggers bounded replacement and explicit rider notice, refund or assisted resolution.

### Production reliability and security certification

- [ ] **REL-01**: Published measured SLO dashboards, alert owners and runbooks cover trip/API, dispatch, realtime, finance and provider failures.
- [ ] **REL-02**: Backup/PITR restore and regional-disaster drills demonstrate approved RPO/RTO with ledger and active-trip consistency checks.
- [ ] **REL-03**: AZ/process/Redis/Kafka/maps/PSP/network failure exercises preserve money/assignment invariants and degrade safely.
- [ ] **REL-04**: Measured workload benchmarks pass documented sustained/burst envelopes and cost limits before capacity sizing is approved.
- [ ] **SEC-01**: Independent security review and penetration testing close exploitable high-severity defects in identity, tenant, finance and mobile/API flows.
- [ ] **SEC-02**: Release pipeline enforces dependency provenance, secrets scanning, image/IaC controls and audited short-lived deploy identity.
- [ ] **PRIV-03**: Deletion/retention/legal hold are verified across primary records, events, analytics, object storage, backups and observability.
- [ ] **ROLL-01**: Versioned backward-compatible deployments and expand/contract migrations pass rollback/recovery drills without losing posted money or active rides.
- [ ] **DATA-01**: Operational analytics uses defined event/metric contracts and pseudonymized projections without unbounded BI on the transactional primary.

### Five-city operational activation

- [ ] **LCH-01**: All five cities have individually approved launch packs with dated local/airport permissions and enabled coverage boundaries.
- [ ] **LCH-02**: City/hour cohorts meet measured supply/fulfillment/ETA/retention/driver-economics thresholds before broader public availability.
- [ ] **LCH-03**: Promised service hours have actual trained support/safety coverage, incident escalation, finance operators and relief staffing.
- [ ] **LCH-04**: Promotional spend, cash runway and rollback/stop thresholds are approved against measured city contribution and acquisition cohorts.
- [ ] **LCH-05**: All provider/legal/privacy/store/insurance requirements have evidence owners and no unresolved critical launch gate.

## v2 Requirements

- **IOS-01**: Native driver Swift/SwiftUI, conditional on driver device evidence and funded support.
- **ML-01**: Learned ETA/matching/risk under documented evaluation, shadow rollout, appeal and rollback.
- **SUB-01**: Driver subscription with observed demand, break-even disclosure and refund/exit terms.
- **EXP-01**: Additional Georgian cities under separate readiness/permission packs.

## Out of Scope

| Capability | Reason |
|---|---|
| Bank/payment custody or transferable stored-value wallet | PSP/legal classification not authorized or established |
| Unaccompanied minors, medical transport, own vehicle fleet | Separate safety/legal/insurance model required |
| Autonomous driving or algorithm-only safety appeals | Different product and unacceptable unresolved control model |
| Day-one Kubernetes, one service/database per domain, active-active multi-region | No measured operating requirement yet |
| Guaranteed airport pickup, 112 integration or guaranteed earnings without agreements | Cannot promise service not evidenced |

## Traceability

| Requirement | Phase | Status |
|---|---|---|
| BIZ-01 | Phase 1 | Pending |
| BIZ-02 | Phase 1 | Pending |
| BIZ-03 | Phase 1 | Pending |
| BIZ-04 | Phase 1 | Pending |
| VND-01 | Phase 1 | Pending |
| PRD-01 | Phase 1 | Pending |
| PLAT-01 | Phase 2 | Pending |
| PLAT-02 | Phase 2 | Pending |
| PLAT-03 | Phase 2 | Pending |
| API-01 | Phase 2 | Pending |
| EVT-01 | Phase 2 | Pending |
| OBS-01 | Phase 2 | Pending |
| IAM-01 | Phase 3 | Pending |
| IAM-02 | Phase 3 | Pending |
| IAM-03 | Phase 3 | Pending |
| DRV-01 | Phase 3 | Pending |
| DRV-02 | Phase 3 | Pending |
| DRV-03 | Phase 3 | Pending |
| CITY-01 | Phase 3 | Pending |
| GEO-01 | Phase 4 | Pending |
| FARE-01 | Phase 4 | Pending |
| FARE-02 | Phase 4 | Pending |
| FARE-03 | Phase 4 | Pending |
| FARE-04 | Phase 4 | Pending |
| LOC-01 | Phase 5 | Pending |
| LOC-02 | Phase 5 | Pending |
| DIS-01 | Phase 5 | Pending |
| DIS-02 | Phase 5 | Pending |
| DIS-03 | Phase 5 | Pending |
| DIS-04 | Phase 5 | Pending |
| RT-01 | Phase 5 | Pending |
| RID-01 | Phase 6 | Pending |
| RID-02 | Phase 6 | Pending |
| RID-03 | Phase 6 | Pending |
| RID-04 | Phase 6 | Pending |
| MOB-01 | Phase 6 | Pending |
| MOB-02 | Phase 6 | Pending |
| ACC-01 | Phase 6 | Pending |
| NTF-01 | Phase 6 | Pending |
| PAY-01 | Phase 7 | Pending |
| PAY-02 | Phase 7 | Pending |
| PAY-03 | Phase 7 | Pending |
| PAY-04 | Phase 7 | Pending |
| PAY-05 | Phase 7 | Pending |
| PAY-06 | Phase 7 | Pending |
| REC-01 | Phase 7 | Pending |
| ARR-01 | Phase 8 | Pending |
| SAFE-01 | Phase 8 | Pending |
| SAFE-02 | Phase 8 | Pending |
| SAFE-03 | Phase 8 | Pending |
| SUP-01 | Phase 8 | Pending |
| PRIV-01 | Phase 8 | Pending |
| PRIV-02 | Phase 8 | Pending |
| ABUSE-01 | Phase 8 | Pending |
| AUD-01 | Phase 8 | Pending |
| CORP-01 | Phase 9 | Pending |
| CORP-02 | Phase 9 | Pending |
| CORP-03 | Phase 9 | Pending |
| FLT-01 | Phase 9 | Pending |
| FLT-02 | Phase 9 | Pending |
| SCH-01 | Phase 10 | Pending |
| APT-01 | Phase 10 | Pending |
| INT-01 | Phase 10 | Pending |
| SCH-02 | Phase 10 | Pending |
| REL-01 | Phase 11 | Pending |
| REL-02 | Phase 11 | Pending |
| REL-03 | Phase 11 | Pending |
| REL-04 | Phase 11 | Pending |
| SEC-01 | Phase 11 | Pending |
| SEC-02 | Phase 11 | Pending |
| PRIV-03 | Phase 11 | Pending |
| ROLL-01 | Phase 11 | Pending |
| DATA-01 | Phase 11 | Pending |
| LCH-01 | Phase 12 | Pending |
| LCH-02 | Phase 12 | Pending |
| LCH-03 | Phase 12 | Pending |
| LCH-04 | Phase 12 | Pending |
| LCH-05 | Phase 12 | Pending |

**Coverage:** v1 requirements: 78; mapped: 78; unmapped: 0. Native plans exist for phases 1–2; later tasks are baseline executable work cards and require rolling GSD phase refinement before execution. No scope is silently deferred.

Last updated: 2026-10-03 after user selected all five cities.
