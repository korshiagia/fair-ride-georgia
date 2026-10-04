---
status: draft-unreviewed
reviewer_type: independent local technical analysis
public_evidence_cutoff: 2026-10-04
requirements-completed: []
phase_1: open
m0: open
implementation: open
actual_scenarios: NOT RUN
---
# Independent contract desk review

**DRAFT / UNREVIEWED — 2026-10-04, Asia/Tbilisi.** Fresh independent local technical reviewer, not the author of the six committed source drafts. This review is local reasoning, not professional legal/privacy/finance approval, merchant acceptance, field evidence or security certification. Public-source cutoff/access is the completed 01-04 baseline 2026-10-04; no provider/application API ran here. All actual scenarios **NOT RUN**, actual professional/company acceptance **NOT RECEIVED**. [Full traceability](contract-traceability.md) accounts for every source ID.

Source baseline cbb68b716e92a4f62c6ac63f4b592704ac78ffa5. We compared each actor/source/guard/effect/rejection/recovery row against universal clauses, policy/data/threat rows and canonical MASTER/TECHNICAL/DOMAIN/gates/ADRs. Local file/anchor checks cannot establish semantic correctness; findings below are the independent challenge. Six source drafts remain unchanged.

## Disposition and severity

CONSISTENT-DESK means local logic only and always retains OPEN-ENGINEERING and applicable OPEN-EXTERNAL gates. REVISE-DRAFT names a bounded written fix; it is not a confirmed exploitable application bug. OPEN-EXTERNAL requires named attributable scope-specific evidence; OPEN-ENGINEERING requires future authorized executable evidence. Severity describes consequence if an ambiguity is implemented: high = authority/assignment/money/privacy correctness gap; medium = recovery/contract ambiguity; information = coherent proposed rule or unvalidated prerequisite. No waiver or M0 decision follows.

## Journey findings

<a id="f-01"></a>
### F-01 — Medium / REVISE-DRAFT: initial identity exception is not consistently expressed in API authority

Sources: [TR independent machines](../../contracts/drafts/trip-transition-catalogue.md#independent-machines-and-ownership) permits a challenge-bound principal for bootstrap without bearer session. [OP shared envelope](../../contracts/drafts/api-behavior.md#proposal-status-and-shared-envelope) says authenticated session/workload principal and session_generation; [OP-01](../../contracts/drafts/api-behavior.md#op-01) inherits expected version/session generation and AUTH_REQUIRED. [J-01](contract-traceability.md#j-01).

The explicit TR exception prevents treating this as an absent design, but the API's universal envelope leaves its representation and rejection precedence ambiguous. Expected: a valid initial server-issued expiring challenge, challenge version/key and anti-enumeration controls can issue exactly one new session without an existing session generation. Wrong challenge fails safely; subsequent recovery/revocation uses current authority.

Owner: identity/API/security lead. Bounded fix: name challenge authority/envelope variant and explicit NONE session generation for first issue; specify safe challenge rejection and original-key challenge status lookup when response is lost. Evidence: independently reviewed envelope/row reconciliation then actual forged/replay/expired/lost-response identity cases. Actual NOT RUN; security/privacy approval NOT RECEIVED.

<a id="f-02"></a>
### F-02 — High / REVISE-DRAFT: asynchronous finance and failed-authorization termination need explicit authority lifetime

Sources: [global TR guards](../../contracts/drafts/trip-transition-catalogue.md#global-mutation-contract--applies-to-every-tr-row) require current session/effective relationship at commit; NONE assignment examples exclude post-completion finance; [TR-05](../../contracts/drafts/trip-transition-catalogue.md#tr-05), [TR-12](../../contracts/drafts/trip-transition-catalogue.md#tr-12), [TR-13](../../contracts/drafts/trip-transition-catalogue.md#tr-13), [TR-14](../../contracts/drafts/trip-transition-catalogue.md#tr-14), [TR-17](../../contracts/drafts/trip-transition-catalogue.md#tr-17), [TR-18](../../contracts/drafts/trip-transition-catalogue.md#tr-18). [J-05](contract-traceability.md#j-05) / [J-13](contract-traceability.md#j-13).

A driver assignment is RELEASED at completion; a customer logout or membership removal must deny customer reads/new spending without preventing confirmation/reconciliation of a previously authorized external obligation. Workload identity + authorized business intent is present, but the universal current-relationship/session/assignment fences do not distinguish their subjects. SCR-05 says failed authorization leads fee-free cancellation; TR-05 keeps trip REQUESTED and TR-18 actor list does not explicitly name payment-failure coordinator.

Expected: finance verifies current worker/service authority and durable original lawful intent/economic party, payment-operation version and stable external reference; released assignment or logged-out customer cannot strand confirmed capture/refund. No new payer authority arises from old intent. Failed prestart authorization requests a specifically permitted fee-free termination that races safely with cancellation/search and releases the passenger claim once.

Owner: trip/payment/identity/finance leads with counsel. Bounded fix: explicit per-operation authority/version matrix, NONE vs historical assignment reference, reconciliation allowed versus new effect forbidden, and payment-failure terminal command/actor. Evidence: reviewed contract plus future revoked-customer/late-callback/worker restart and failed-auth cancellation races. Actual NOT RUN; original financial/professional gates open.

<a id="f-03"></a>
### F-03 — High / REVISE-DRAFT: snapshot trip version does not order independent machines

Sources: [TR-25](../../contracts/drafts/trip-transition-catalogue.md#tr-25), [OP snapshot](../../contracts/drafts/api-behavior.md#snapshot-events-and-recovery), [TR independent machines](../../contracts/drafts/trip-transition-catalogue.md#independent-machines-and-ownership), [TH-25](../../security/drafts/threat-model.md#th-25). [J-25](contract-traceability.md#j-25).

Snapshot names trip_version, assignment generation, policy/amendment and payment/safety status; client discards older aggregate versions. No explicit payment/safety/case/booking versions or snapshot cut is named. Completion trip version can remain unchanged while capture UNKNOWN→CAPTURED or safety NONE→OPEN; reordered distinct-aggregate events cannot be fenced with trip_version alone. Cursor is delivery position, not total cross-topic order.

Expected: independently version every exposed machine, return authorized consistent snapshot cut/cursor strategy and merge only newer owner versions; subscribe-from-snapshot gap cannot lose a payment/safety event between read and subscribe. Equal trip version does not suppress newer financial status. Gaps or unavailable replay trigger authoritative re-fetch.

Owner: API/realtime/trip/payment/safety leads. Bounded fix: document per-aggregate version vector and snapshot/cursor race protocol with duplicate/gap/reorder examples. Evidence: reviewed event envelopes plus future read-subscribe-gap, payment-only and safety-only updates with revoked access. Actual NOT RUN; OPEN-ENGINEERING persists.

<a id="f-04"></a>
### F-04 — High / REVISE-DRAFT: scheduled trigger's handoff into live trip guards is under-specified

Sources: [TR-20](../../contracts/drafts/trip-transition-catalogue.md#tr-20) says dispatch creates own trip via booking contract; [TR-04](../../contracts/drafts/trip-transition-catalogue.md#tr-04) assumes unexpired quote, personal immediate active claim and payment intent; [POL-SCHEDULED](../../contracts/drafts/city-policy-schema.md#pol-scheduled), [TH-20](../../security/drafts/threat-model.md#th-20). [J-20](contract-traceability.md#j-20).

Future calendar separation/nonoverlap and actual-trip feasibility are coherent, but the trigger does not explicitly link quote expiry/reconfirmation, active passenger claim, credit/preauth timing, membership revocation or atomic booking→trip deduplication. A future booking can collide with a currently active immediate trip even with a free named vehicle.

Expected: original booking cannot spawn duplicate live trips after reordered trigger/restart; one linked trip requires approved fare terms/current eligibility/payment/credit and rider claim. Passenger already active or payment UNKNOWN produces a reasoned owned HOLD/replacement/reconfirmation, no second live assignment or automatic no-show fee. Timing/contingency remains proposal.

Owner: booking/trip/pricing/payment/corporate/ops leads. Bounded fix: explicit trigger transaction and guarded hold/replacement path; define fare snapshot validity rather than silently extend expired immediate quote. Evidence: source-row reconciliation then actual trigger/active-rider/expired-quote/revoked-member/unknown-payment cases and approved operator service obligations. NOT RUN / NOT RECEIVED.

<a id="f-05"></a>
### F-05 — High / REVISE-DRAFT: NO_DRIVER terminal effect omits passenger active-claim release

Sources: [TR-04](../../contracts/drafts/trip-transition-catalogue.md#tr-04) acquires active passenger claim; [TR-06](../../contracts/drafts/trip-transition-catalogue.md#tr-06) terminal NO_DRIVER effect names attempts/offers/hold release but not claim release; [TR-12](../../contracts/drafts/trip-transition-catalogue.md#tr-12) and [TR-18](../../contracts/drafts/trip-transition-catalogue.md#tr-18) explicitly release it. [J-06](contract-traceability.md#j-06).

A future implementation could use the canonical partial active index and release implicitly, but the proposed explicit durable claim variant lacks a terminal release contract. This is a source omission, not an observed stuck booking.

Expected: NO_DRIVER expiry transaction rechecks current state/generation, revokes live offers/reservations and releases only that trip's passenger claim atomically; later old worker cannot release a newer claim. Bound quote remains bound to historical trip; retry needs a lawful new quote rather than rebinding it. Hold reversal remains pending until verified.

Owner: trip/dispatch/DB lead. Bounded fix: include claim release and old-expiry-vs-winning-accept ordering in TR-06/OP-06/AC-06; reconcile ABORTED release too. Evidence: independent clause review then actual expiry/accept/new-booking/old-worker races. Actual NOT RUN; OPEN-ENGINEERING.

## Confirmed journey traces and unresolved prerequisites

Each record below is an independent desk comparison of the corresponding SCR/TR/OP/AC/TH set linked from the trace row; it is not an actual test. Actual status for every record: NOT RUN; external acceptance NOT RECEIVED. Owners require named appointment. All retain OPEN-ENGINEERING; absent lawful/company/field inputs retain OPEN-EXTERNAL.

<a id="f-13"></a>
### F-13 — Information / CONSISTENT-DESK: Manual pickup

Source: [J-02 complete source set](contract-traceability.md#j-02), including exact TR/OP/AC/TH rows and DATA-01. Independent expected behavior: Denied GPS preserves manual address; invalid/border pickup cannot become eligible quote. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Routing/UX. Required evidence: future concurrency/fault/accessibility/device scenario with state/effect evidence and source-version review. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-14"></a>
### F-14 — Information / OPEN-EXTERNAL: Quote

Source: [J-03 complete source set](contract-traceability.md#j-03), including exact TR/OP/AC/TH rows and DATA-01. Independent expected behavior: Missing tariff/licence yields HOLD; immutable GEL disclosure, expiry and provider lineage bind consent. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Pricing/routing. Required evidence: exact professional/company/licence or staffed service decision plus attributable actual scenario. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-15"></a>
### F-15 — Information / CONSISTENT-DESK: Booking

Source: [J-04 complete source set](contract-traceability.md#j-04), including exact TR/OP/AC/TH rows and DATA-04. Independent expected behavior: Distinct device keys still acquire one passenger-active claim and one quote binding atomically. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Trip/DB/corporate. Required evidence: future concurrency/fault/accessibility/device scenario with state/effect evidence and source-version review. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-16"></a>
### F-16 — Information / CONSISTENT-DESK: Accept offer

Source: [J-07 complete source set](contract-traceability.md#j-07), including exact TR/OP/AC/TH rows and DATA-03. Independent expected behavior: One PG trip/driver/vehicle winner; current eligible vehicle binding, generation and server expiry at commit. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Dispatch/DB/supply. Required evidence: future concurrency/fault/accessibility/device scenario with state/effect evidence and source-version review. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-17"></a>
### F-17 — Information / CONSISTENT-DESK: En route

Source: [J-08 complete source set](contract-traceability.md#j-08), including exact TR/OP/AC/TH rows and DATA-03. Independent expected behavior: Disconnect never expires committed assignment; current generation alone may advance en-route. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Trip/mobile/ops. Required evidence: future concurrency/fault/accessibility/device scenario with state/effect evidence and source-version review. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-18"></a>
### F-18 — Information / CONSISTENT-DESK: Arrival

Source: [J-09 complete source set](contract-traceability.md#j-09), including exact TR/OP/AC/TH rows and DATA-03. Independent expected behavior: Weak/stale GPS stays pending, no fee; arrival exception cannot invent qualifying passenger notice. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Trip/location/ops. Required evidence: future concurrency/fault/accessibility/device scenario with state/effect evidence and source-version review. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-19"></a>
### F-19 — Information / CONSISTENT-DESK: PIN/start

Source: [J-10 complete source set](contract-traceability.md#j-10), including exact TR/OP/AC/TH rows and DATA-05. Independent expected behavior: Atomic one-use PIN + start; old driver/replay fails; narrow MFA exception preserves exclusivity. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Trip/security. Required evidence: future concurrency/fault/accessibility/device scenario with state/effect evidence and source-version review. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-20"></a>
### F-20 — Information / CONSISTENT-DESK: Amendment

Source: [J-11 complete source set](contract-traceability.md#j-11), including exact TR/OP/AC/TH rows and DATA-01. Independent expected behavior: Current consent/version/spending authority approves exact delta; reorder/driver consent alone fails. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Pricing/trip/corporate. Required evidence: future concurrency/fault/accessibility/device scenario with state/effect evidence and source-version review. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-21"></a>
### F-21 — Information / CONSISTENT-DESK: Completion

Source: [J-12 complete source set](contract-traceability.md#j-12), including exact TR/OP/AC/TH rows and DATA-03. Independent expected behavior: Completion releases claims; duplicate effect cannot recalculate fare; capture failure never rewinds terminal trip. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Trip/pricing/finance. Required evidence: future concurrency/fault/accessibility/device scenario with state/effect evidence and source-version review. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-22"></a>
### F-22 — Information / CONSISTENT-DESK: Receipt/history

Source: [J-15 complete source set](contract-traceability.md#j-15), including exact TR/OP/AC/TH rows and DATA-04. Independent expected behavior: Reviewed issuer/posts gate receipt; employee personal ride cannot enter corporate history/export. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Finance/corporate/privacy. Required evidence: future concurrency/fault/accessibility/device scenario with state/effect evidence and source-version review. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-23"></a>
### F-23 — Information / CONSISTENT-DESK: Dispute/support

Source: [J-16 complete source set](contract-traceability.md#j-16), including exact TR/OP/AC/TH rows and DATA-06. Independent expected behavior: Case-purpose access, separate finance authority; no journal editing or completed-trip rematch. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Support/safety/privacy. Required evidence: future concurrency/fault/accessibility/device scenario with state/effect evidence and source-version review. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-24"></a>
### F-24 — Information / OPEN-EXTERNAL: Post-payout refund

Source: [J-17 complete source set](contract-traceability.md#j-17), including exact TR/OP/AC/TH rows and DATA-04. Independent expected behavior: Fund customer refund independently; lawful recovery/loss distinct; no presumed BOG split reversal/custody. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Finance/payment/counsel. Required evidence: exact professional/company/licence or staffed service decision plus attributable actual scenario. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-25"></a>
### F-25 — Information / CONSISTENT-DESK: Cancel/rematch

Source: [J-18 complete source set](contract-traceability.md#j-18), including exact TR/OP/AC/TH rows and DATA-03. Independent expected behavior: Lock serializes cancel vs arrival/PIN/start; prestart rematch advances generation; absent fee proof gives no penalty. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Trip/dispatch/ops. Required evidence: future concurrency/fault/accessibility/device scenario with state/effect evidence and source-version review. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-26"></a>
### F-26 — Information / OPEN-EXTERNAL: Safety/share/abort

Source: [J-19 complete source set](contract-traceability.md#j-19), including exact TR/OP/AC/TH rows and DATA-06. Independent expected behavior: Sent request != human ownership; offline 112 fallback; explicit fenced abort, revocable sharing, no safety proof. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Safety/ops/privacy. Required evidence: exact professional/company/licence or staffed service decision plus attributable actual scenario. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-27"></a>
### F-27 — Information / CONSISTENT-DESK: Fleet

Source: [J-21 complete source set](contract-traceability.md#j-21), including exact TR/OP/AC/TH rows and DATA-02. Independent expected behavior: Effective grants restrict history/vehicle edits; later transfer cannot reroute already earned payable. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Fleet/supply/finance. Required evidence: future concurrency/fault/accessibility/device scenario with state/effect evidence and source-version review. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-28"></a>
### F-28 — Information / CONSISTENT-DESK: Corporate

Source: [J-22 complete source set](contract-traceability.md#j-22), including exact TR/OP/AC/TH rows and DATA-07. Independent expected behavior: Distinct authorized passengers retain active-rider protection; revocation rejects personal data and unauthorized spend. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Corporate/identity/finance. Required evidence: future concurrency/fault/accessibility/device scenario with state/effect evidence and source-version review. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-29"></a>
### F-29 — Information / CONSISTENT-DESK: Staff/policy/eligibility

Source: [J-23 complete source set](contract-traceability.md#j-23), including exact TR/OP/AC/TH rows and DATA-09. Independent expected behavior: MFA, purpose, independent checker/audit; no self-approval or fare snapshot rewrite; all activation disabled. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Policy/security/business. Required evidence: future concurrency/fault/accessibility/device scenario with state/effect evidence and source-version review. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-30"></a>
### F-30 — Information / OPEN-EXTERNAL: Privacy rights

Source: [J-24 complete source set](contract-traceability.md#j-24), including exact TR/OP/AC/TH rows and DATA-10. Independent expected behavior: Verified subject, narrow holds; pending processor/device deletion cannot say complete; tombstones before restore reopen. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Privacy/counsel/SRE. Required evidence: exact professional/company/licence or staffed service decision plus attributable actual scenario. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-31"></a>
### F-31 — Information / CONSISTENT-DESK: Telemetry/notices/replay

Source: [J-26 complete source set](contract-traceability.md#j-26), including exact TR/OP/AC/TH rows and DATA-03. Independent expected behavior: Buffered history cannot restore availability; inbox/outbox replay cannot reexecute notices or money. The row guard is coherent with the corresponding adverse AC and threat control; numeric defaults are not approved. Owner: Location/platform/privacy. Required evidence: future concurrency/fault/accessibility/device scenario with state/effect evidence and source-version review. See subsequent adversarial detail for interactions; a coherent base row does not close a separately named revision.

<a id="f-32"></a>
### F-32 — Information / CONSISTENT-DESK: local preparation supply chain

Sources: [TH-27](../../security/drafts/threat-model.md#th-27), [J-23](contract-traceability.md#j-23), DATA-09/AC-23. Expected: preparation refuses package/runtime/app changes and stages only owned documentation; future build provenance is separate. Owner: executor/orchestrator, future security/platform lead. Evidence in this lane is exact staged ownership and normal-hook local commits, not execution of a product supply-chain test. Actual application negative case NOT RUN.
