# Domain boundaries and ownership

Baseline: 2026-10-03. Status: proposed contract boundaries using the accepted technology direction. Domains are logical modules; they are not a list of microservices. The five cities are configuration/jurisdiction scopes, not five copies of the product.

## 1. Ownership map

| Domain / proposed core schema | Owned aggregates and authoritative writes | Public application contract | Important emitted events |
|---|---|---|---|
| Identity & access / `identity` | Account, session, credential metadata, roles, effective-dated tenant memberships, consent evidence | Authenticate, revoke session, authorize relationship, update verified contact | `identity.session_revoked`, `identity.membership_changed` |
| Supply & eligibility / `supply` | Driver profile, vehicle, permit/eligibility review, fleet membership, service categories, shift declaration | Evaluate eligibility by city/service/time, approve/suspend eligibility with reasons | `supply.eligibility_changed`, `supply.driver_shift_changed` |
| City & service policy / `policy` | Versioned service area polygons, tariff eligibility, jurisdiction references, airport/intercity permissions, policy approval | Resolve applicable city/service policy; validate route crossing and effective date | `policy.version_published` |
| Mapping & route adapter / `routing` | Vendor configuration, approved storage provenance, customer-selected waypoint data; no ownership of a vendor's map dataset | Geocode/search, calculate route/ETA, compare provider health, licensed fallback | `routing.provider_health_changed` |
| Pricing / `pricing` | Fare policy version, immutable quote, amendment proposal, deterministic calculation evidence | Quote, bind quote, approve amendment, calculate final chargeable components | `pricing.quote_bound`, `pricing.amendment_accepted` |
| Trip orchestration / `trip` | Trip lifecycle/version, booking principal, participants, start/end/arrival evidence, cancellation facts | Request, transition, authorize permitted actions, snapshot, terminate/rematch | `trip.requested`, `trip.arrived`, `trip.started`, `trip.completed`, `trip.cancelled` |
| Dispatch commitment / `dispatch` | Attempt generation, offer, reservation, active assignment and assignment history | Issue/revoke offer, accept assignment atomically, release/rematch, explain decision | `dispatch.offer_issued`, `trip.assigned`, `dispatch.assignment_released` |
| Location & matching / separate workload, `telemetry` evidence interface | Session-bound hot presence, validated sequence/freshness, candidate ranking; durable evidence submitted to trip owner | Ingest, obtain recent signed-to-session sample facts, rank candidates | `telemetry.sample_validated` on restricted stream; aggregated freshness metrics |
| Safety & risk / `safety` | Risk rule version, reasoned decision, safety/support case, evidence-access justification, appeal | Evaluate action risk, report/triage/escalate, approve narrow restriction, review appeal | `safety.case_opened`, `safety.restriction_changed` |
| Finance ledger / `ledger` | Accounts, immutable journal batches, reversals, economic entitlements, reconciliation exceptions | Post balanced effect, calculate approved payable/receivable views, reconcile, approve adjustment | `ledger.effect_posted`, `ledger.exception_opened` |
| Payment orchestration / `payment` | Intent, PSP operation attempts, webhook receipts, authorization/capture/refund states, bank payout requests | Authorize, capture, query unknown outcome, refund, settle/reconcile, payout | `payment.authorization_confirmed`, `payment.capture_confirmed`, `payment.outcome_unknown` |
| Corporate / `corporate` | Organization, approved booker/employee policy, cost centre, spending budget, invoice agreement | Authorize business booking, reserve budget, invoice approved business facts | `corporate.booking_approved`, `corporate.invoice_issued` |
| Fleet / `fleet` | Fleet organization, management relationships, vehicle/driver assignment permissions, agreed settlement view | Manage authorized fleet objects; evaluate delegation and effective membership | `fleet.membership_changed` |
| Scheduled, airport & intercity booking / `booking` | Scheduled request, itinerary, check-in obligations, reschedule/no-show policy; references to trip | Schedule/confirm itinerary, trigger matching window, replace schedule with history | `booking.scheduled`, `booking.ready_for_dispatch` |
| Communications / `communication` | Notification intent, template version, delivery attempt/consent, masked-call mapping | Send approved notification, cancel stale intent, report delivery | `communication.delivery_failed` |
| Support & quality / `support` | Complaint, review moderation, service-quality follow-up, disputes; safety cases remain safety-owned | Open case, present minimized evidence, request authorized adjustment, appeal | `support.dispute_opened`, `support.case_resolved` |
| Privacy / `privacy` | Data-subject request, retention/deletion job, approved legal hold, vendor erasure evidence | Export minimized verified-subject data, erase, hold/release, replay tombstones | `privacy.erasure_requested`, `privacy.erasure_completed` |
| Operations & analytics / projections | Read models, dashboards, aggregate experiment measures; no authoritative trip/finance writes | Query bounded authorized projections; approved interventions call owning domain | Versioned projection rebuilds; no independent business facts |

Events are notifications of facts already committed by the owner. An event consumer cannot decide that a trip is assigned simply because it received a matching proposal. Domain events have one publisher owner; schema changes require contract review. Every table, topic, API and migration receives an owner in the implementation phase.

## 2. Transaction boundaries

| Application use case | Transaction participants / consistency requirement | Asynchronous follow-up |
|---|---|---|
| Request trip | Identity relationship and policy eligibility; quote binding + trip record + payment intent + optional corporate budget reservation + outbox in one core transaction | Card authorization outside transaction; matching only after approved payment/credit eligibility |
| Accept offer | Trip + dispatch + current driver eligibility lock/check; assignment uniqueness + version/generation + outbox atomically | Notify passenger/driver; realtime projection |
| Confirm arrival / start | Trip + assignment generation + safety restriction + minimal evidence/PIN consumption atomically | Notification and audit projection |
| Complete ride | Trip + deterministic approved fare facts; completion and settlement intent/outbox atomically | Payment capture; journal posting through durable effect IDs; reconciliation |
| Card refund | Approved case/adjustment intent and durable payment operation; no DB transaction spans a PSP call | Confirm PSP result, post approved reversal, reconcile bank record |
| Rematch before start | Trip + old assignment release + offer revocation + generation advance atomically | New ranking/offer and clear passenger communication |
| Eligibility restriction | Supply/safety reasons and effective version; active-trip handling must be explicit | Propagate to matching, revoke new offers, staffed handling for an ongoing ride |
| Membership removal | Identity/fleet/corporate effective relationship update and outbox | Revoke sockets, expire export links/caches and reassess queued jobs |

Use explicit core application coordinators for these transactions; they depend on named domain interfaces. A transactional unit of work passes only where needed. No distributed transaction or Kafka message replaces a local invariant. Database unique constraints, locks and documented retry behavior remain authoritative. PostgreSQL documents unique and partial-index constraints and isolation semantics. [Constraints](https://www.postgresql.org/docs/current/ddl-constraints.html), [isolation](https://www.postgresql.org/docs/current/transaction-iso.html).

Payment journal posting may occur in the completion transaction only when the approved accounting policy defines a deterministically earned entitlement at that moment. PSP capture/settlement confirmations remain separate journal effects. A completion-to-journal asynchronous path has explicit pending status, SLA, reconciliation and no payout until approved payable state. This distinction prevents an event-delay problem from becoming an unexplained financial gap.

## 3. Dependency rules

Identity exposes subject and authorization context; it does not own ride business rules. City policy provides immutable versions, not mutable global switches hidden in pricing. Supply declares eligibility; dispatch evaluates it again when committing an offer. Pricing owns money formulas and policy versions; trip binds decisions. Location validates facts and ranks; dispatch commits. Safety supplies explainable restrictions, while trip owns guarded transitions. Ledger owns financial truth; payment owns provider state; neither derives final trip status from a webhook. Corporate/fleet view an authorized subset through core APIs.

Core domains may read immutable value objects and public application interfaces of another module. They must not import the other module's storage adapter or mutate its tables. Cross-module direct SQL joins in command paths require an explicit documented coordinator; read models can aggregate committed facts under ACL. Avoid a universal `models` package that every module changes. Shared kernel stays small: identifiers, money primitives, clock interfaces, error codes, authorization context and tracing metadata; business models stay with their owners.

Routing, PSP, SMS/push, identity verification and bank APIs use anti-corruption adapters. Domain language must not become vendor-specific callback enums. Provider migrations preserve references and capabilities explicitly. Retries and uncertain outcomes are part of the adapter contract, not hidden HTTP-library defaults.

## 4. City, tenant and itinerary scopes

`city_id` governs pickup jurisdiction and service configuration; crossing-city routes retain origin, destination and traversed jurisdictions. It is not a security tenant. `fleet_id` and `corporate_id` represent organizational relationships, and `booking_principal` declares whose spending authority applies. A driver's fleet and a passenger's corporate account are independent. Personal rides remain private to the passenger even when the passenger is an employee.

Use effective-dated relationships and explicit record permissions. Historical records do not automatically migrate into a new fleet manager's view. A corporate policy cannot grant access to an unrelated driver's location trail. Administrative city scope is an additional restriction, not permission to see every resident's trip. Every export, job and socket subscription must enforce the same object relationships as REST. OWASP recommends least privilege, default denial and authorization on each request. [Authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html).

Scheduled journeys are not prematurely assigned active trips for days. They reserve contractual booking obligations and trigger matching at a versioned time window. Airport rules and intercity routes attach explicit service policies; they must not silently reuse generic city cancellation/wait rules. Time storage preserves scheduled local time and zone; actual transitions use server time.

Named future driver/vehicle commitments use non-overlapping reservation intervals with approach, deadhead and turnaround buffers, committed atomically; pooled-capacity commitments have approved capacity and contingency rules. These reservations do not occupy current active-trip assignments indefinitely, but dispatch must check that the current ride can finish before the next commitment. A corporate/fleet beneficiary agreement is snapshotted for earnings/settlement so later membership changes cannot alter historical payables.

## 5. Extraction gates

The location/realtime workload split is selected because high-frequency telemetry and long-lived connections differ from transactional commands. Other domains remain in core. A proposed extraction must show: a measured bottleneck or required isolation, named team ownership, explicit storage boundary, contract/version strategy, reliable data migration, failure/latency budget, privacy implications, and lower total operational cost or a justified benefit. The first candidates may be analytics, communications or routing; trip/dispatch/ledger correctness must not be fragmented for aesthetics.

Domain ownership is reviewed alongside ADRs and executable plans. Names may change before source creation; invariants and ownership cannot disappear during renaming.
