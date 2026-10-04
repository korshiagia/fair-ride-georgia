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

## Interaction gaps found by independent negative challenge

<a id="f-06"></a>
### F-06 — High / REVISE-DRAFT: abort path omits release of active claims

Sources: [TR-19](../../contracts/drafts/trip-transition-catalogue.md#tr-19) records ABORTED end evidence/provisional fare but no assignment/passenger-claim release; [TR-12](../../contracts/drafts/trip-transition-catalogue.md#tr-12) and [TR-18](../../contracts/drafts/trip-transition-catalogue.md#tr-18) explicitly release. [J-19](contract-traceability.md#j-19), TH-19/DATA-06.

Expected: explicit authorized abort atomically ends the trip and releases only its live passenger/driver/vehicle claims; case continues separately and provisional money does not pretend completion/capture. A safety report alone never releases assignment. Abort racing complete has one terminal winner and no duplicate settlement intent.

Owner: trip/safety/dispatch/DB lead. Bounded fix: declare terminal release and its source/version/generation guard in abort effect/AC, preserving approved safe physical handling and ongoing case. Evidence: clause reconciliation and actual abort-vs-complete/late driver replay/new booking tests. Actual NOT RUN; staffed/accounting policy NOT RECEIVED.

<a id="f-07"></a>
### F-07 — Medium / REVISE-DRAFT: fee rejection must not accidentally reject valid cancellation

Sources: [TR global rejection](../../contracts/drafts/trip-transition-catalogue.md#global-mutation-contract--applies-to-every-tr-row) says all failed guards reject before effect; [TR-18](../../contracts/drafts/trip-transition-catalogue.md#tr-18) groups cancellation/rematch and FEE_EVIDENCE_HOLD; [ordering exceptions](../../contracts/drafts/trip-transition-catalogue.md#ordering-and-finance-exceptions) says missing notice/quality gives no automatic penalty. [J-18](contract-traceability.md#j-18).

The monetary no-fee rule is explicit, but cancellation guard versus fee-decision guard is not separately stated in the row. Expected: otherwise valid prestart cancellation terminates/release regardless of missing qualifying fee evidence; fee decision is zero/pending manual review without automatic debit, not a blocked cancellation that keeps passenger/driver claims held. Illegal post-start cancellation still conflicts; use explicit abort workflow. Arrival/start/complete concurrency decides state under lock, never client timestamp.

Owner: trip/finance/ops/API. Bounded fix: split lifecycle outcome from optional fee entitlement/rejection, with one deterministic response carrying independent statuses. Evidence: independent review then actual weak-GPS/notice-failed cancellation and cancel-vs-arrival/start/complete cases. NOT RUN; fee/notice policy NOT RECEIVED.

<a id="f-08"></a>
### F-08 — High / REVISE-DRAFT: PIN payload fingerprint needs a secret-safe definition

Sources: [OP shared canonical payload hash](../../contracts/drafts/api-behavior.md#proposal-status-and-shared-envelope), [TR-10](../../contracts/drafts/trip-transition-catalogue.md#tr-10), [DATA-05](../../security/drafts/privacy-data-map.md#data-05) keyed verifier/no secret plaintext in response cache, [TH-10](../../security/drafts/threat-model.md#th-10). [J-10](contract-traceability.md#j-10).

Digest for stored PIN verifier is keyed, but generic canonical request hash for start has no stated handling for PIN input. Retaining an unkeyed fingerprint of a low-entropy PIN alongside known trip fields can enable offline enumeration even without plaintext. This is a specification ambiguity, not an observed leak.

Expected: idempotency still rejects different start payload for one key and returns one committed start under current authorization, while retained request/result/queue/events/logs cannot be used to recover a code. Verification/consume/version update is atomic; invalid attempts are atomically accounted so concurrent guesses cannot exceed approved limit. Lost response retrieves original start evidence without requiring reuse of consumed PIN as a new attempt. Reissue revokes old verifier.

Owner: security/trip/API/privacy. Bounded fix: specify secret-safe keyed payload fingerprint/segregated verifier and retention/rotation, exclude PIN from retained canonical raw payload and error detail, explicitly fence attempt increments/reissue with start. Evidence: accepted cryptographic/retention design then future database/log/cache dump inspection, parallel attempts/start/reissue and replay tests. NOT RUN; expiry/attempt/digest durations are UNSET proposals.

<a id="f-09"></a>
### F-09 — Medium / REVISE-DRAFT: amendment above existing card authorization needs an explicit path

Sources: [TR-11](../../contracts/drafts/trip-transition-catalogue.md#tr-11) approves passenger/corporate delta; [TR-13](../../contracts/drafts/trip-transition-catalogue.md#tr-13) requires bound fare/authorized amount; [funds F-01](../../legal/funds-flow.md#scenario-walkthrough--payer--obligation--pspbank--journal--reconciliation--liability), [J-11](contract-traceability.md#j-11). Finality/merchant capability remains UNKNOWN.

Expected: approving a price delta does not grant a larger capture capability. If amended fare exceeds authorized amount, approved incremental/replacement authorization or explicit permitted alternative funding must succeed before additional paid service is accepted; UNKNOWN gives pending/owned resolution and preserves agreed original service or explicit termination, never silent cash/new-key second charge. Corporate amendment re-reserves budget atomically or fails without spend.

Owner: pricing/payment/corporate/finance/UX. Bounded fix: define amendment money eligibility/consent choreography and failure path; keep unsupported provider methods HOLD. Evidence: company preauth/incremental/MIT terms and actual amendment/limit/timeout/failure cases, accessible consent. NOT RECEIVED / NOT RUN.

<a id="f-10"></a>
### F-10 — Medium / REVISE-DRAFT: beneficiary snapshot timing needs a declared precedence

Sources: [TR-07](../../contracts/drafts/trip-transition-catalogue.md#tr-07) writes beneficiary contract snapshot at assignment; [TR-14](../../contracts/drafts/trip-transition-catalogue.md#tr-14) uses snapshotted beneficiary; [DATA-04](../../security/drafts/privacy-data-map.md#data-04); [TECHNICAL section 7](../../../TECHNICAL-SPEC.md#7-quotes-fares-and-financial-ledger) snapshots at economic event; [J-21](contract-traceability.md#j-21).

Assignment time and reviewed earning event may differ. Freeze at assignment can be a legitimate contractual selection, but it is not automatically the canonically described earning-time rule; current membership cannot silently rewrite either historical entitlement.

Expected: contract decides effective beneficiary/earning instant per exact service; assignment snapshot binds only if that agreement says so. Membership change during trip yields one explainable lawful beneficiary allocation; payout authorization uses that party, not new fleet membership. No cross-party debt netting.

Owner: finance/fleet/counsel/trip. Bounded fix: distinguish eligibility snapshot, beneficiary agreement version and approved earning event/effective selection; link deterministic transfer-during-trip acceptance. Evidence: F-07/08 contract/professional decision plus actual transfer/payout tests. NOT RECEIVED / NOT RUN.

<a id="f-11"></a>
### F-11 — High / REVISE-DRAFT: web-console session/CSRF protection is not represented in draft API contract

Sources: [OP shared envelope](../../contracts/drafts/api-behavior.md#proposal-status-and-shared-envelope) specifies bearer/session and server-derived authority; [TR-23](../../contracts/drafts/trip-transition-catalogue.md#tr-23)/[TH-23](../../security/drafts/threat-model.md#th-23) require MFA/audit; [TECHNICAL security section](../../../TECHNICAL-SPEC.md#9-security-tenant-isolation-and-safety-operations) explicitly requires secure/HttpOnly browser cookies with CSRF protection. [J-23](contract-traceability.md#j-23).

MFA and object ACL do not replace origin/CSRF protection when browsers automatically attach session cookies. The drafts do not explicitly narrow universal session commands with the canonical browser control or a corresponding negative case. Canonical rule remains binding; this is a propagation gap.

Expected: forged cross-site browser mutation cannot use existing staff/fleet/corporate authenticated cookie; secure/HttpOnly session, CSRF/origin controls and step-up/audit remain enforced, with server role/purpose/resource checks. SameSite alone must not be asserted as tested proof.

Owner: identity/web/API/security lead. Bounded fix: carry the canonical browser-session control and cross-site negative acceptance into API/threat/console links without selecting a new identity architecture. Evidence: independently reviewed session contract then actual forged-origin/token/session rotation/access tests. NOT RUN.

<a id="f-12"></a>
### F-12 — Medium / REVISE-DRAFT: aliases and uncertain-result error semantics need explicit wire mapping

Sources: [TR independent machine enums](../../contracts/drafts/trip-transition-catalogue.md#independent-machines-and-ownership) uses DRIVER_EN_ROUTE/DRIVER_ARRIVED; [SCR-18](../../contracts/drafts/screen-state-inventory.md#scr-18)/[TR-18](../../contracts/drafts/trip-transition-catalogue.md#tr-18) shorten EN_ROUTE/ARRIVED. [OP errors](../../contracts/drafts/api-behavior.md#errors-deadlines-and-degraded-reads) lists HTTP families but not PAYMENT_UNKNOWN, REFUND_UNKNOWN, PAYOUT_UNKNOWN, ARRIVAL_PENDING, DELIVERY_UNKNOWN. [Global recovery](../../contracts/drafts/trip-transition-catalogue.md#global-mutation-contract--applies-to-every-tr-row) calls for command-result query but no named proposal specifies its independent status schema.

Expected: canonical wire enums remain DRIVER_EN_ROUTE/DRIVER_ARRIVED; aliases are documentation shorthand only. Durable accepted intent with UNKNOWN external result has an explicit non-final operation status/query reference, not a generic error that prompts a fresh mutation. Not-yet-committed rejection differs from committed intent/pending result, with localized safe explanation. Client can query original operation/key under current access; no leaked existence to revoked reader.

Owner: API/trip/payment/UX lead. Bounded fix: label aliases, map each row code to HTTP + committed/none/pending effect class + query/retry behavior and version; name the command-result retrieval contract. Evidence: enum/error-schema review then future lost-response/deadline/unknown/old-client cases. NOT RUN.

## Semantic negative-case record — actual scenarios NOT RUN

NC rows are thought experiments against exact source sets; expected behavior is not observed behavior. Linked J rows return to SCR/TR/OP/AC/TH and DATA anchors, including nonlocal policy. Finding links state severity, disposition and bounded fix. CONSISTENT-DESK cases keep OPEN-ENGINEERING; every evidence-owner cell is a prerequisite, not completed evidence. All numeric time/rate/retention/cap/buffer values remain hypotheses. No implementation/provider test or package was introduced.

| Case ID / adversarial input | Sources / finding | Deterministic expected result | Independent observation / exact future evidence and owner | Actual |
|---|---|---|---|---|
| <a id="nc-01"></a>NC-01 Different booking keys on two devices; same or different quotes | [J-04](contract-traceability.md#j-04) / [F-15](#f-15) | Both contend on PG passenger claim; one authorized trip/conflict, same quote bound once; no two payment intents that could charge twice. | Written disposition in linked Finding; Current lawfully delegated passenger and durable unique-constraint/crash evidence; trip/DB. | NOT RUN |
| <a id="nc-02"></a>NC-02 Two drivers / two trips / shared driver or vehicle concurrent accepts | [J-07](contract-traceability.md#j-07) / [F-16](#f-16) | Sequential live offer reservation plus PG trip/driver/vehicle constraints select one valid winner; failed contender emits no assignment effect. | Written disposition in linked Finding; DB locks/constraints and effective vehicle proof; dispatch/DB/supply. | NOT RUN |
| <a id="nc-03"></a>NC-03 Expiry exactly at server-time boundary; old worker/session/generation | [J-07](contract-traceability.md#j-07) / [F-16](#f-16) | At expires_at offer invalid; current winner survives stale release; future generation cannot be inferred from device clock. | Written disposition in linked Finding; Race at expiry/rematch/restart with version/generation trace; dispatch/QA. | NOT RUN |
| <a id="nc-04"></a>NC-04 Duplicate/reordered command; payload conflict; result cache expired | [J-04](contract-traceability.md#j-04) / [F-15](#f-15) | Same key+payload preserves one effect under current ACL; mismatch rejects; business uniqueness outlives cache. | Written disposition in linked Finding; Durable command/result and business-reference tests; API/DB. | NOT RUN |
| <a id="nc-05"></a>NC-05 No supply timeout racing valid accept | [J-06](contract-traceability.md#j-06) / [F-05](#f-05) | One terminal or assignment outcome under lock; NO_DRIVER releases own claim/offers, never later trip claim. | Written disposition in linked Finding; Terminal/new booking/late expiry race; trip/dispatch. | NOT RUN |
| <a id="nc-06"></a>NC-06 Cancel vs arrival / weak GPS / unknown notice | [J-18](contract-traceability.md#j-18) / [F-07](#f-07) | State lock selects one lifecycle result; otherwise valid cancel releases claims with no inferred penalty. | Written disposition in linked Finding; Fee/notice legal policy and cancellation race/drill; trip/ops/finance. | NOT RUN |
| <a id="nc-07"></a>NC-07 Cancel vs PIN/start/completion | [J-18](contract-traceability.md#j-18) / [F-25](#f-25) | Cancel only prestart; consumed PIN/start wins -> cancellation conflict; after start explicit abort; terminal cannot rewind. | Written disposition in linked Finding; DB serialization, effect counts and user explanation; trip/QA. | NOT RUN |
| <a id="nc-08"></a>NC-08 Safety abort vs completion/late driver command | [J-19](contract-traceability.md#j-19) / [F-06](#f-06) | One terminal winner; claims release once; case independent, no implicit complete-charge from abort. | Written disposition in linked Finding; Abort release/end evidence/settlement race plus staffed procedure; safety/trip. | NOT RUN |
| <a id="nc-09"></a>NC-09 Urban canyon/stale location / spoofed high accuracy flag | [J-09](contract-traceability.md#j-09) / [F-18](#f-18) | Insufficient arrival evidence remains pending; no wait/cancel/no-show penalty from weak GPS or attestation. | Written disposition in linked Finding; Five-city/airport road-side calibrated corpus plus audited manual exception; location/ops. | NOT RUN |
| <a id="nc-10"></a>NC-10 Arrival accepted but qualifying notice failed/unknown | [J-09](contract-traceability.md#j-09) / [F-18](#f-18) | No chargeable timer until every approved notice/grace/cap condition holds; outbox intent is not delivery. | Written disposition in linked Finding; Delivery facts and reviewed notice/grace/appeal policy; communications/finance. | NOT RUN |
| <a id="nc-11"></a>NC-11 PIN brute-force / replay / two parallel starts / reissue | [J-10](contract-traceability.md#j-10) / [F-08](#f-08) | Atomically limit attempts, consume one current verifier/start once; retained fingerprint cannot expose low-entropy code. | Written disposition in linked Finding; Key/attempt/reissue/race/dump inspection; security/trip/privacy. | NOT RUN |
| <a id="nc-12"></a>NC-12 PIN unavailable / offline input / staff exception | [J-10](contract-traceability.md#j-10) / [F-19](#f-19) | Pending offline intent; no bypass. Independent narrow MFA/reason/evidence exception preserves generation/exclusivity; PIN no safety guarantee. | Written disposition in linked Finding; Approved exception and accessibility/recovery/abuse tests; safety/security. | NOT RUN |
| <a id="nc-13"></a>NC-13 Denied GPS, manual address, coordinate order, empty pickup | [J-02](contract-traceability.md#j-02) / [F-13](#f-13) | Manual safe input possible; empty/border/invalid coordinate rejected before eligible quote; permitted own input retained. | Written disposition in linked Finding; Accessible ka/en device/address and licensed ground truth; UX/routing. | NOT RUN |
| <a id="nc-14"></a>NC-14 Initial identity bootstrap vs universal session envelope | [J-01](contract-traceability.md#j-01) / [F-01](#f-01) | Challenge-bound proof issues session without impossible prior session prerequisite; expired/forged challenge reveals no account. | Written disposition in linked Finding; Identity envelope/anti-enumeration/recovery cases; identity/security. | NOT RUN |
| <a id="nc-15"></a>NC-15 Lost response / reconnect read-subscribe gap / independent status reorder | [J-25](contract-traceability.md#j-25) / [F-03](#f-03) | Query original key + snapshot, independent owner versions; gap refetch; delivery cursor never durable commit. | Written disposition in linked Finding; Snapshot cut/vector and concurrent payment/safety-only events; API/realtime. | NOT RUN |
| <a id="nc-16"></a>NC-16 Stale amendment / driver-only consent / rejected delta | [J-11](contract-traceability.md#j-11) / [F-20](#f-20) | Exact passenger consent and budget/version fence; old approval rejects; original fare/service retained or explicit abort/dispute. | Written disposition in linked Finding; Accessible consent/version/amendment tests; pricing/corporate. | NOT RUN |
| <a id="nc-17"></a>NC-17 Amendment exceeds card hold or corporate budget | [J-11](contract-traceability.md#j-11) / [F-09](#f-09) | Consent alone never enlarges charge authority; pending approval preserves original or owned explicit resolution, no hidden cash. | Written disposition in linked Finding; Provider auth/credit terms and actual limits/timeout cases; payment/finance. | NOT RUN |
| <a id="nc-18"></a>NC-18 Duplicate completion / invalid endpoint / capture failure | [J-12](contract-traceability.md#j-12) / [F-21](#f-21) | One immutable completion/fare/release/settlement intent; payment failure never rewinds terminal trip. | Written disposition in linked Finding; Completion/crash and approved deterministic fare/rounding evidence; trip/pricing. | NOT RUN |
| <a id="nc-19"></a>NC-19 Fleet transfer midtrip / new manager historical view / payable | [J-21](contract-traceability.md#j-21) / [F-10](#f-10) | Effective object/history grants separate from earning beneficiary; explicit earning-time rule, no rerouting/netting. | Written disposition in linked Finding; F-07 professional fleet contract and negative grants/payout tests; fleet/finance. | NOT RUN |
| <a id="nc-20"></a>NC-20 Corporate multiple passengers / removed employee / private rides | [J-22](contract-traceability.md#j-22) / [F-28](#f-28) | Actual passengers individually claim live trip; revoked spend denied; employee's personal history absent from tenant view. | Written disposition in linked Finding; Corporate credit/controller/employee terms plus budget/ACL tests; corporate/privacy. | NOT RUN |
| <a id="nc-21"></a>NC-21 Cross-tenant REST, socket, queued job | [J-25](contract-traceability.md#j-25) / [F-03](#f-03) | Reject unrelated or revoked subject at execution/subscription/replay; no safe error metadata disclosure; worker acts only lawful intent. | Written disposition in linked Finding; Adversarial two-tenant cases including stale grant generation; identity/API/realtime. | NOT RUN |
| <a id="nc-22"></a>NC-22 Async export creation/download, object link, caches, idempotent replay | [J-24](contract-traceability.md#j-24) / [F-30](#f-30) | Recheck current subject/tenant/purpose at generation and retrieval; revoked URL/cache cannot retain old visibility; signed link lifetime alone insufficient. | Written disposition in linked Finding; Revocation between enqueue/generate/download; object/CDN/permission tests; privacy/security. | NOT RUN |
| <a id="nc-23"></a>NC-23 Staff sensitive policy/finance/evidence action, suppressed audit | [J-23](contract-traceability.md#j-23) / [F-29](#f-29) | MFA/JIT scope, reason/audit and independent checker where required; staff city scope no universal record privilege. | Written disposition in linked Finding; Actual approval/access/audit tamper tests and named roles; security/business. | NOT RUN |
| <a id="nc-24"></a>NC-24 Cross-site browser action with existing authenticated cookie | [J-23](contract-traceability.md#j-23) / [F-11](#f-11) | CSRF/origin protection rejects forged request even though MFA session exists; no sensitive effect. | Written disposition in linked Finding; Browser session/CSRF negative cases; identity/web/security. | NOT RUN |
| <a id="nc-25"></a>NC-25 PSP timeout after original create/auth/capture; duplicate/out-of-order callback | [J-13](contract-traceability.md#j-13) / [F-02](#f-02) | UNKNOWN queries original operation first; authenticate/corroborate merchant/amount/currency/reference; one confirmed journal effect, no settled downgrade. | Written disposition in linked Finding; PP-B06/07, PP-T04 actual key/finality/F-01..03/09; payment/security. | NOT RUN |
| <a id="nc-26"></a>NC-26 Payout timeout with beneficiary membership/session revocation | [J-14](contract-traceability.md#j-14) / [F-02](#f-02) | Current worker and original lawful payable authority query stable bank reference; deny new requester access, avoid duplicate transfer. | Written disposition in linked Finding; Bank original-reference lookup and F-03/07/09 with revocation; finance/payment. | NOT RUN |
| <a id="nc-27"></a>NC-27 Full/partial refund after split and payout; subsequent chargeback | [J-17](contract-traceability.md#j-17) / [F-24](#f-24) | Customer obligation separately funded; cap captures minus verified refund/dispute allocation; original refs, separate lawful recovery/loss, no split clawback assumption. | Written disposition in linked Finding; F-04/05/09 and approved liquidity/liability/fees/tax model; finance/counsel/bank. | NOT RUN |
| <a id="nc-28"></a>NC-28 Ledger unbalanced currency batch / correction replay / reported cash | [J-14](contract-traceability.md#j-14) / [F-22](#f-22) | Reject any unbalanced batch per currency before commit; corrections append unique references; cash report != collected commission/PSP settlement. | Written disposition in linked Finding; Chart/posting/rounding/issuer and journal/bank/cash reconciliation; accountant/ledger. | NOT RUN |
| <a id="nc-29"></a>NC-29 Erasure then restore old DB/event/log/object/cache/analytics history | [J-24](contract-traceability.md#j-24) / [F-30](#f-30) | Independently recover tombstones/hold releases before reopen; sanitize every derivative and block external replay effects. | Written disposition in linked Finding; Per-surface manifest, staged restore diff and processor receipts; privacy/SRE. | NOT RUN |
| <a id="nc-30"></a>NC-30 Legal hold subset / unavailable processor or offline device erasure | [J-24](contract-traceability.md#j-24) / [F-30](#f-30) | Narrow reviewed subset has owner/review/end; other categories erased; unsupported vendor/device proof remains partial/pending. | Written disposition in linked Finding; Approved rights/hold/DPIA/DPA/transfer schedule and actual receipts; privacy/counsel. | NOT RUN |
| <a id="nc-31"></a>NC-31 Google/Mapbox provenance, derived copies, expired storage licence | [J-03](contract-traceability.md#j-03) / [F-14](#f-14) | No long-term polyline/ETA/screenshot archive from narrow lat/lng or Place ID exception; temporary geocode/Search rights do not grant permanent route/vehicle/offline use. | Written disposition in linked Finding; PP-G03/04, PP-M02/03/05/06 exact applicable product/contract/region approval; routing/privacy/counsel. | NOT RUN |
| <a id="nc-32"></a>NC-32 Scheduled named driver/vehicle overlap, active rider, trigger reorder | [J-20](contract-traceability.md#j-20) / [F-04](#f-04) | Buffered future nonoverlap distinct from active assignment; current trip/payment/quote/rider gates at trigger, one live trip mapping. | Written disposition in linked Finding; Accepted schedule guarantee/contingency plus trigger/claim race; booking/trip/ops. | NOT RUN |
| <a id="nc-33"></a>NC-33 Airport/city/corridor boundary; reverse itinerary; unknown flight data | [J-20](contract-traceability.md#j-20) / [F-26](#f-26) | Exact separate pickup/dropoff/traversed rights; unknown flight or access yields HOLD/explicit uncertainty, no inferred no-show fee/airport guarantee. | Written disposition in linked Finding; Three airport/operator/company rights and 20 directional route records; counsel/ops. | NOT RUN |
| <a id="nc-34"></a>NC-34 Future policy version / overlap / missing tariff or permit | [J-23](contract-traceability.md#j-23) / [F-29](#f-29) | Server time/effective interval wins, not highest version/access date; conflicts/missing approval HOLD; bound quote fare unchanged. | Written disposition in linked Finding; Source-current review and boundary/interval tests; policy/counsel. | NOT RUN |
| <a id="nc-35"></a>NC-35 Redis loss / Kafka outage / buffered samples / historical replay | [J-26](contract-traceability.md#j-26) / [F-31](#f-31) | DB truth survives; fresh session rehydrates presence; outbox bounded admission; isolated sanitized replay disables charge/refund/payout/notices. | Written disposition in linked Finding; Broker/Redis/crash/dedupe/replay capacity tests; platform/location. | NOT RUN |
| <a id="nc-36"></a>NC-36 Offline emergency/share expiry; unstaffed safety promise | [J-19](contract-traceability.md#j-19) / [F-26](#f-26) | No received/owned/112-integration claim from send; clear call fallback, revoked minimal share; stop advertised staffed capability absent roster. | Written disposition in linked Finding; Named actual roster/concurrency/disconnect/share drill; safety/ops/privacy. | NOT RUN |
| <a id="nc-37"></a>NC-37 Wire alias / UNKNOWN error / original command-result query | [J-25](contract-traceability.md#j-25) / [F-12](#f-12) | Canonical enums and explicit committed-intent/nonfinal status allow same-operation recovery without new key. | Written disposition in linked Finding; Reviewed enum/status schema and old-client/lost-result cases; API/UX. | NOT RUN |
| <a id="nc-38"></a>NC-38 Preparation unexpectedly requests install or application action | [J-23](contract-traceability.md#j-23) / [F-32](#f-32) | Refuse action outside document ownership; no install/global/code/infra/provider call. | Written disposition in linked Finding; Exact staged ownership and scoped execution; executor/orchestrator. | NOT RUN |

## Invariant conclusions and actual-evidence boundary

PostgreSQL exclusively owns trip/driver/vehicle/passenger assignment claims and immutable balanced currency journals. Redis presence/cache is reconstructable; stale buffered history cannot establish availability. Kafka at-least-once outbox/inbox and WebSocket cursor delivery are not durable command success. Provider keys/deduplication plus original-operation reconciliation do not establish exactly-once money effects across DB/broker/PSP. No completion/receipt/arrival/PIN/device signal proves settlement or personal safety.

Trip terminal facts, assignment lifetime, payment operations, safety/support cases and future bookings remain independently owned. The identified omissions/aliases remain REVISE-DRAFT; coherent surrounding controls do not erase them. Error wording must reveal pending uncertainty without offering an unsafe new action. Three hypothetical client retries/30-second deadline, seven-day cache, 15% commission, GPS/arrival/retention/buffer numbers are unaccepted proposals and cannot become defaults from this review. Publicly documented bank rates/limits are publisher facts with undated validity, not company terms.

## Independent verdict and evidence-gated return

**Local review verdict: REVISE-DRAFT.** The six source drafts provide substantial coherent guards, but F-01–12 require bounded reconciliation before their affected clauses can be accepted. This review did not edit them. A provisional cross-reference does not resolve a missing guard or contradictory universal clause.

| Review result | Exact IDs | Count | Meaning / accountable owner |
|---|---|---:|---|
| High / REVISE-DRAFT | F-02, F-03, F-04, F-05, F-06, F-08, F-11 | 7 | Potential assignment/authority/money/privacy correctness consequences if implemented; each Finding names domain owner and bounded written fix. |
| Medium / REVISE-DRAFT | F-01, F-07, F-09, F-10, F-12 | 5 | Contract/recovery wording needs explicit precedence; each Finding names owner and evidence. |
| Information / CONSISTENT-DESK | F-13, F-15, F-16, F-17, F-18, F-19, F-20, F-21, F-22, F-23, F-25, F-27, F-28, F-29, F-31, F-32 | 16 | Local base rule comparison only. F-19/20/27/28/29 and other base rules retain linked revision interactions; all future execution evidence remains OPEN-ENGINEERING. |
| Information / OPEN-EXTERNAL | F-14, F-24, F-26, F-30 | 4 | Attributable applicable mapping/payment/legal/privacy/safety evidence and actual adverse runs remain absent; owners in Findings. |

The [26 journey rows and reverse DATA/POL/threat inventory](contract-traceability.md#journey-trace) provisionally link every SCR/TR/OP/AC/POL/DATA/TH source ID. [Requirements](contract-traceability.md#requirement-closure-and-actual-evidence), [decisions](contract-traceability.md#decision-closure), [revision return](contract-traceability.md#revision-return-to-source-owners), [edge/prohibition reconciliation](contract-traceability.md#edge-probe-reconciliation-and-descriptor-less-prohibitions) and the [provisional 01-03 handoff](contract-traceability.md#provisional-01-03-handoff) retain omissions, source facts, selected directions, unvalidated hypotheses and external gates separately. A checked link means the reference exists; it does not validate its underlying contract or source applicability.

All six requirement IDs BIZ-01/BIZ-02/BIZ-03/BIZ-04/VND-01/PRD-01 remain open. D-01–06 retain proposed directions and actual acceptance conditions; none becomes an implementation decision merely from this review. Four unclassified actual-evidence edges remain UNRESOLVED; all seven descriptor-less prohibition flags remain flagged/unverified. All actual NC-01–38 scenarios remain NOT RUN, all actual professional/company review NOT RECEIVED.

Return ownership: named accountable domain reviewers must accept or revise each F-01–12 against exact source versions, then separately authorized engineering proves the negative cases. Counsel/accountant/bank/mapping/airport/operations/research/privacy owners supply only their applicable actual evidence. The original 01-01/01-02 checkpoints and dependent 01-03 remain open; canonical contracts, M0, Phase 1, implementation and all five city/three airport/directed-corridor activations are not completed by the local lane.

The documentation tasks can finish with this candid revision verdict because their deliverable is an independent review and bounded handoff. They cannot finish the original validation requirements. No provider API, application build/test, account, package, infrastructure, outreach, charge, refund or payout was executed.

## Local verification record

Observed on 2026-10-04: each of the three plan-declared PowerShell file-existence/nonempty commands passed; the tracer's automated command was also rerun after Task 1. Read-only independent local resolution of all 1,495 Markdown references across the six source drafts and two review files found no missing file/anchor. Explicit source-anchor inventory matched every one of the expected 152 IDs (26 SCR, 26 TR, 26 OP, 26 AC, 27 TH, 11 POL, 10 DATA), with none omitted. Per-journey checks found all 26 exact SCR/TR/OP/AC/TH sets and named finding returns. Inventory checks found 32 finding anchors, 38 negative-case anchors with actual NOT RUN status, six requirement rows, six decisions, ten edge records and seven prohibition flags; no inventory errors.

These observations concern repository structure, inventory and local written comparison. The independent semantic result is the 12 unresolved revisions and the expected-behavior/evidence record above. The checks did not observe the negative scenarios, certify requirement coverage/design correctness, validate external links or provider capability, or produce professional acceptance. Source drafts remain byte-for-byte unchanged in this plan's Git diff. All command/provider/application/field/security behavior remains future evidence, NOT RUN; the original external evidence remains NOT RECEIVED.
