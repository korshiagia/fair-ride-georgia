---
phase: 01-validation-contracts
plan: "05"
subsystem: product-contracts
tags: [drafts, georgia, state-machines, idempotency, privacy, threats, city-policy]
requires:
  - phase: 01-04
    provides: "Dated public evidence and provisional directions, cutoff 2026-10-04"
provides:
  - "Six linked DRAFT / UNREVIEWED contracts for independent 01-06 desk review"
  - "26 Screen/Transition/Operation/Acceptance sets; 11 Policy, 10 Data and 27 Threat IDs"
affects: [01-06, future-01-03-integration, product, dispatch, finance, privacy]
actuals:
  tokens: 41504
  tasks: 3
  commits: 3
plan_head_before: 84057004ed1f83e8517f27dbc7f2c4e5396febce
plan_head_after: cbb68b716e92a4f62c6ac63f4b592704ac78ffa5
tech-stack:
  added: []
  patterns: [bidirectional-draft-ids, independent-state-machines, fail-closed-policy, purpose-bound-data-lineage]
key-files:
  created:
    - docs/contracts/drafts/screen-state-inventory.md
    - docs/contracts/drafts/trip-transition-catalogue.md
    - docs/contracts/drafts/api-behavior.md
    - docs/contracts/drafts/city-policy-schema.md
    - docs/security/drafts/privacy-data-map.md
    - docs/security/drafts/threat-model.md
  modified: []
key-decisions:
  - "Preserve separate trip, assignment, payment, safety and future-booking aggregates and PostgreSQL durable authority"
  - "Every city/airport/directional corridor remains HOLD/DISABLED with actual professional/company gates open"
  - "Provider-derived content and own/customer evidence have distinct rights through all storage, logs, events, devices, backups and replay"
  - "Customer refund funding is distinct from lawful beneficiary recovery; UNKNOWN queries original operation before retry"
requirements-completed: []
coverage:
  - id: D1
    description: "Draft actor/screen/state and adverse acceptance inventory"
    requirement: PRD-01
    verification: [{kind: other, ref: "01-05 Task 1 declared PowerShell presence/nonempty loop plus stable ID/link checks", status: pass}]
    human_judgment: true
    rationale: "Local file/ID checks do not establish UX accessibility, actual behavior or independent acceptance"
  - id: D2
    description: "Draft guarded state transition and recovery catalogue"
    requirement: PRD-01
    verification: [{kind: other, ref: "01-05 Task 1 declared loop plus author invariant/actor/version/generation/recovery coverage", status: pass}]
    human_judgment: true
    rationale: "Written guards require independent 01-06 desk challenge and future actual race/fault evidence"
  - id: D3
    description: "Proposed API errors, idempotency, durable responses and reconnect"
    requirement: PRD-01
    verification: [{kind: other, ref: "01-05 Task 1 loop and 26 operation/transition/acceptance links", status: pass}]
    human_judgment: true
    rationale: "No API exists or ran; actual provider and client compatibility remain open"
  - id: D4
    description: "Draft five-city/airport/service policy schema and HOLD rows"
    requirement: BIZ-01
    verification: [{kind: other, ref: "01-05 Task 2 declared loop, five cities/three airports/11 policy anchors and dated ordering coverage", status: pass}]
    human_judgment: true
    rationale: "Current source scope is desk evidence; exact local/operator/company applicability and accepted rates are unresolved"
  - id: D5
    description: "Draft ten-category privacy data, lineage, surfaces and recovery map"
    requirement: PRD-01
    verification: [{kind: other, ref: "01-05 Task 2 declared loop and category/surface/lineage/tombstone coverage", status: pass}]
    human_judgment: true
    rationale: "Lawful bases, roles, retention, transfers, processor/licence and actual erasure/restore need accountable review"
  - id: D6
    description: "Draft 27-threat STRIDE register and reverse traceability"
    requirement: PRD-01
    verification: [{kind: other, ref: "01-05 Task 3 declared check and six-file/974-link/152-ID inspection", status: pass}]
    human_judgment: true
    rationale: "Proposed controls and NOT RUN negative cases are not a security certification"
duration: 20min 17sec
started: "2026-10-04T18:35:37.563Z"
completed_at: "2026-10-04T18:55:54.062Z"
completed: 2026-10-04
status: complete
scope: independent-local-draft-preparation-only
phase_status: open
m0_status: open
actual_scenarios: NOT RUN
---

# Phase 01 Plan 05: Linked draft journey, policy, API, privacy and threat contracts Summary

**Six DRAFT / UNREVIEWED contracts trace quote-to-refund and all product surfaces through guarded states, independent five-city policy, data lineage and negative threats.**

Only the three authorized local preparation tasks are complete. Phase 1, M0, all requirements, original 01-01/01-02 actual checkpoints and dependent integrated 01-03 remain OPEN. Native automatic advance stayed disabled. No application, infrastructure, account, outreach, spending, live money, city activation, professional opinion or actual provider/security/field result was created.

## Accomplishments and deliverables

- [Screen/state inventory](../../../docs/contracts/drafts/screen-state-inventory.md): 26 actor/surface/state entries, accessible ka/en degraded interactions and 26 adverse Acceptance IDs; full personal quote → request → offer → arrival → PIN → start → completion → payment → receipt/dispute/refund journey plus cash, corporate, fleet, scheduled, airport and intercity overlays.
- [Transition catalogue](../../../docs/contracts/drafts/trip-transition-catalogue.md): 26 proposed owning-domain rows, actor/current resource, expected versions/session/assignment generations, guard, PostgreSQL durable effect, deterministic rejection and original-intent uncertainty recovery. Passenger active-immediate uniqueness across distinct keys and one quote binding, exclusive trip/driver/vehicle assignment, immutable currency-balanced postings, policy/amendment consent and separate safety ownership preserved.
- [API behavior](../../../docs/contracts/drafts/api-behavior.md): 26 proposed operations, server-derived effective relationships, scoped key/payload hash/current-access replay, localized error semantics, snapshot/cursor/version recovery, finite hypothetical retries, outbox/inbox and provider UNKNOWN query/reconciliation. Names and envelopes are proposals, not deployed interfaces.
- [City policy schema](../../../docs/contracts/drafts/city-policy-schema.md): 11 Policy IDs covering schema, five city rows, three airport overlays, scheduled overlay and directional corridor family; all 20 city pairs explicitly HOLD. Exact pickup/origin/destination/traversed jurisdictions, approval/effective/expiry/recheck ordering, tariff/notice/no-show/amendment and disabled activation gate. No airport permission or local classification inherited.
- [Privacy data map](../../../docs/security/drafts/privacy-data-map.md): 10 Data IDs with purpose/subject/source/proposed controller/basis/access, DB/event/log/object/device/Redis/analytics/backup/processor surfaces, lineage/licence, retention hypotheses, rights/hold/transfer and restore/replay tombstones. Financial minimal facts and identity mappings remain distinct.
- [Threat register](../../../docs/security/drafts/threat-model.md): 27 stable STRIDE Threat IDs with trust boundary, severity, P/D/R controls, owner, unresolved external/engineering dependency and mapped adverse acceptance. All six draft files provide reverse links. Every actual negative scenario is NOT RUN.

All D-01–06 remain represented. BIZ-02/BIZ-03/BIZ-04/VND-01 unclassified edge items stay explicitly flagged unresolved at original actual gates; adjacency, missing-input and ordering backstops and the four plan prohibitions are retained. Numerical commission, arrival, timing, retry, retention and capacity proposals are hypotheses requiring named review; public provider statements are not company approval.

## Atomic task commits

1. **Trace one complete journey through screen, transition and proposed API contracts** — `b0fdbf23d3d72143cc22ac30958e23c6c597680c` — `docs(01-05): trace draft journey states and proposed API behavior`; exactly the three declared Task 1 draft files.
2. **Define five-city policy and end-to-end privacy surfaces** — `27008e25f25bc158ad267bbea0c7b9970f565786` — `docs(01-05): define draft city policy and privacy data boundaries`; exactly the two declared Task 2 files.
3. **Map product threats and negative acceptance cases** — `cbb68b716e92a4f62c6ac63f4b592704ac78ffa5` — `docs(01-05): map draft threats negative cases and reverse trace links`; threat file plus necessary reverse Threat-ID indices in the five already owned drafts.

Normal hooks remained enabled; author identity was supplied per command as Codex <codex@localhost>. No branch/worktree switch, persistent identity mutation, blanket staging/reset, stash, clean, forced push or tracked deletion. Final branch: `codex/phase-01-validation-contracts`; sequential shared checkout, isolation=none, not a worktree.

Plan metadata: intentionally uncommitted under `planning.commit_docs=false`; SDK skip confirmation is recorded below. Shared STATE/ROADMAP/PROJECT/REQUIREMENTS/VALIDATION/config/plans and original canonical 01-03 targets are parent-owned and untouched by this executor. No requirement completion command ran.

Guarded SDK metadata command returned `committed=false`, `skipped=true`, `reason=skipped_commit_docs_false`; this is the intentional success path. No raw Git fallback or forced planning staging was used.

## Files Created/Modified

- `docs/contracts/drafts/screen-state-inventory.md` — Screen and Acceptance catalogue.
- `docs/contracts/drafts/trip-transition-catalogue.md` — Guarded transitions and recovery.
- `docs/contracts/drafts/api-behavior.md` — Proposed command/read/reconnect behavior.
- `docs/contracts/drafts/city-policy-schema.md` — Five-city and service gates.
- `docs/security/drafts/privacy-data-map.md` — Data categories and all surfaces.
- `docs/security/drafts/threat-model.md` — Threats, controls and negative cases.

## Actual verification and its limits

- Installed native plan structure check: **node C:/Users/korsh/.codex/gsd-core/bin/gsd-tools.cjs verify plan-structure .planning/phases/01-validation-contracts/01-05-PLAN.md** returned valid=true, errors=[], warnings=[], 3 tasks. It proves plan structure only.
- All three exact PLAN automated PowerShell commands passed: declared files exist and are nonempty. All three were rerun in overall verification. Task 1 tracer check was rerun before expansion under resolved `human_verify_mode=end-of-phase`, automated-only verification; no actual human/professional gate was synthesized or auto-approved.
- Local author content/ID checks passed: 26 SCR, 26 TR, 26 OP, 26 AC, 11 POL, 10 DATA, 27 TH = **152 stable explicit anchors**, no duplicate anchor or undefined/unfinished generated field on final inspection.
- A read-only existing-Node inspection resolved **974 local Markdown file/anchor links in six files**, with no missing target/anchor. It checked every numbered journey set, all six evidence/scope markers, all STRIDE categories and P/D/R control dimensions. Source-ledger paths and original checkpoint refs exist. No HTTP/API/network call or package install used.
- Author desk coverage checks passed for every written Task acceptance criterion: full journey and actor/degraded variants; current relationship/version/generation/durable/UNKNOWN guard rules; five cities/three airports/directional HOLD; data purpose/surface/lineage/retention/hold/delete/restore/transfer; mapped high-impact controls and negative cases. These are authored design inspection and text/link coverage, not an independent review, race/security/accessibility certification or proof of lawful compliance.
- Working/staged `git diff --check` passed for final task contents; exact staged ownership inspected before each normal-hook commit. Post-commit deletion check: none. The first staged check caught trailing EOF blank lines and was corrected before committing.
- Measured ledger `.git/gsd-plan-head-before-01-05` base and `git rev-list --count base..HEAD` give **3** task commits. Realized six-file Git diff is **166,016 characters / 4 = 41,504 estimateTokens**; this is calibration scale, not model usage. Summary/planning metadata excluded from realized task diff.
- Stub/threat-surface inspection: no TODO/FIXME/coming-soon/placeholder/undefined artifact content on final check; deliberate UNKNOWN/HOLD/UNSET and NOT RUN are planned evidence gates, not application stubs. No deployed network/auth/file/schema surface was introduced outside the plan's proposed contract boundaries. No skipped implementation test exists because this plan is document-only/TDD-applicable=false.
- Actual app/device/provider/maps/field/security/restore scenarios: **NOT RUN**. Existing economics tests were not rerun; no new claim of market/professional/provider acceptance.

## Decisions made

Preserved canonical selected directions rather than changing architecture. Stable local ID namespaces allow bidirectional author/reviewer tracing. City/service policies fail closed on absent, expired, future or conflicting approval; accepted fare snapshots stay immutable while current access/risk still rechecks. Callback authenticity and original operation lookup precede confirmed money effects; customer refund funding and lawful post-payout recovery remain separate, with no split reversal/custody assumption. Every sensitive surface inherits purpose/licence/retention/deletion/replay restrictions.

## Deviations from plan

**1. [Rule 1 — Bug] Corrected generated screen table field offsets before expansion.**
- Found during: Task 1 author readback after its initial commit.
- Issue: visible-state/data/negative-case fields were shifted; acceptance text became undefined.
- Fix: corrected all 26 visible/data/adverse fields, verified 26 valid DATA links and substantive AC outcomes, then amended only the executor's current Task 1 commit before Task 2. Final Task 1 hash above supersedes intermediate hashes; no other agent's commit or shared file was rewritten.
- Files: screen-state-inventory.md. Verification: final undefined scan, ID/data/acceptance checks and overall 974-link inspection PASS. Final commit: b0fdbf2.

**2. [Rule 2 — Missing critical contract] Made identity bootstrap authority explicit.**
- Found during: Task 1 guard review.
- Issue: universal authenticated mutation wording required a session before initial OTP verification.
- Fix: explicitly limited initial TR-01 to server-issued expiring challenge principal/version/attempt fence; session authority only follows verified proof. Existing session recovery and every subsequent mutation retain authentication. New-resource expected absence and read-only snapshot distinction also explicit.
- Files: trip-transition-catalogue.md. Verification: scoped bootstrap text and TR/OP linkage inspected; committed in amended Task 1 b0fdbf2.

**3. [Rule 2 — Missing critical traceability] Added reverse Threat-ID indices during Task 3.**
- Found during: Task 3 cross-artifact linking.
- Issue: the earlier drafts linked the future threat file but lacked individual stable TH-ID return paths; explicit orchestrator requirement calls for bidirectional stable links.
- Fix: added SCR/TR/OP → TH/AC, DATA → TH and POL → TH indices to the five already owned drafts. Threat rows return to exact journey/data/policy IDs. Task 3 therefore modifies those files alongside its declared threat file, keeping the total scope at six drafts.
- Verification: 974 links/152 anchors inspected without missing target. Commit: cbb68b7.

The orchestrator's strict ownership overrides broad SDK instructions to mutate shared metadata or complete mapped requirements. Summary remains local/uncommitted by configured choice; parent coordinates tracking and 01-06. No architecture/external-action deviation.

## Authentication gates / user setup

SDK advisory summary verification initially interpreted a backticked full CLI command ending in PLAN.md as a claimed filename. The command formatting was changed and an explicit six-file inventory added; the SDK/runtime was not changed. This is an advisory parser limitation, not a missing contract or failed plan task. Final advisory result is recorded below.

None for this local preparation. No credentials, accounts, server startup, app bootstrap or package installation was necessary. Original external checkpoints remain open; no public-source request is pending and no missing evidence was fabricated.

## Readiness and unresolved gates

Ready only for independently executed **01-06 local desk review**, with fresh reviewer tracing the committed six-file package and challenging negative cases. All actual outcomes remain NOT RUN. Independent desk review must preserve contradictions and limits rather than certify the product.

Original 01-01 protocol-specific privacy/storage review plus authorized actual interviews/diaries and economics inputs remain pending. Original 01-02 company-specific Georgian legal/accounting, merchant/beneficiary/funds-flow, map licence/transfer and actual PSP/maps evidence remain pending. Original 01-03 integration, accountable M0 review and later implementation instruction remain unchanged. No canonical draft import or Phase 2 implementation authorization follows from this summary.

## Self-Check: PASSED for scoped local preparation

All six draft artifacts and this summary exist. All three full task hashes resolve as commits; final draft working diff and staged index are empty. Presence/nonempty, IDs, 974 local links and documented coverage checks passed as bounded above. No full requirement, Phase 1, M0, professional or actual application/provider/security/field acceptance is claimed.

Final native verify-summary advisory returned passed=true, errors=[], summary_exists=true, files_created checked=2/found=2, commits_exist=true and self_check=passed. Its two-file default probe is a bounded advisory; the separate explicit self-check covered all six files and all three full hashes. Optional shared WINDOWS ledger is absent; no out-of-ownership ledger was created or changed.


## Corrective appendix — independent F-01–12 return, draft v0.2

Revised on 2026-10-05 (Asia/Tbilisi) under the user's continuing bounded local document authorization, after the independent 01-06 review. Public source cutoff/access remains **2026-10-04**; this pass obtained no new external evidence. The original three task commits and their dated execution metrics above are preserved; they were not rerun or amended. This appendix records a separate one-commit correction, not a new plan or requirement completion.

Correction base: **3fdae401fd42f4ecd0dc243bb7e38ff7f404922b** (independent review completed).
Correction commit: **df25a3eb743d3bfc0414e2037b91f7a19469e615** — docs(01-05): reconcile independently reviewed draft contract findings.
Correction commit count measured by Git base..HEAD: **1**.
Exact committed files: the same six source drafts listed above; no deletions. This SUMMARY remains uncommitted under planning.commit_docs=false. Shared tracking/canonical files and the independent review sources are outside executor ownership and untouched by this correction.

Each disposition below is **WRITTEN-CORRECTION / AWAITING-INDEPENDENT-REVIEW**. It means the source owner has supplied the bounded written fix; it does not close a finding, prove an application control or confer professional/company acceptance. The independent reviewer retains the original report/history and owns subsequent re-review.

| Finding | Exact changed source sections / interacting IDs | Local written correction and readback evidence |
|---|---|---|
| [F-01](../../../docs/reviews/drafts/contract-desk-review.md#f-01) | API [shared envelope](../../../docs/contracts/drafts/api-behavior.md#proposal-status-and-shared-envelope), [challenge authority](../../../docs/contracts/drafts/api-behavior.md#identity-challenge-authority); TR [authority matrix](../../../docs/contracts/drafts/trip-transition-catalogue.md#authority-matrix); SCR/AC-01, DATA-02/09, TH-01 | Explicit CHALLENGE/HUMAN_SESSION/WORKLOAD_INTENT union; initial challenge proof/version and session_generation=NONE, original challenge-key result lookup with anti-enumeration/protected recovery. Established recovery remains current-session/step-up. Browser initial issue has preauthentication CSRF context, not impossible prior bearer prerequisite. |
| [F-02](../../../docs/reviews/drafts/contract-desk-review.md#f-02) | TR [finite authority matrix](../../../docs/contracts/drafts/trip-transition-catalogue.md#authority-matrix) / [terminal cleanup](../../../docs/contracts/drafts/trip-transition-catalogue.md#terminal-cleanup); OP-05/13/14/17/18; SCR/AC-05/13/14/17; DATA-04; TH-05/13/14/17 | Finite versioned grants separate current human ACL from existing lawful economic intent. Historical party/amount/currency/payment-op/reference/posting-rule and current worker tenant/purpose/audit fences retained. Failed authorization fee-free cancellation releases own claims without driver session/settlement/VOID success; no blanket new spending or visibility bypass. |
| [F-03](../../../docs/reviews/drafts/contract-desk-review.md#f-03) | API [snapshot protocol](../../../docs/contracts/drafts/api-behavior.md#snapshot-protocol); TR/OP/SCR/AC/TH-25; DATA-03/06/08 | Consistent authorized PG cut and independent trip/assignment/payment-operation/safety-case/booking/amendment vector. Durable per-owner outbox coverage registration precedes read; equal trip version does not suppress new payment/case state. Owner gaps/expired replay/current grant loss reauthorize/refetch; snapshot-only fallback is explicit, cursor never commit acknowledgment. |
| [F-04](../../../docs/reviews/drafts/contract-desk-review.md#f-04) | TR [scheduled handoff](../../../docs/contracts/drafts/trip-transition-catalogue.md#scheduled-handoff); OP/SCR/AC/TH-20; [policy interactions](../../../docs/contracts/drafts/city-policy-schema.md#policy-v02-interactions); DATA-08 | Due trigger rereads current jurisdiction/service/authority/credit, reconciles scheduled pricing/quote/amendment consent, persists one mapped live trip/payment intent and actual passenger claim. TR-05 funding then TR-06 fresh search deadline; duplicate/old triggers cannot create second live mapping. Expired quote, active rider, revoked corporate spender or UNKNOWN auth yields owned HOLD/reconfirm/reschedule, no no-show inference or long-lived assignment. |
| [F-05](../../../docs/reviews/drafts/contract-desk-review.md#f-05) | TR [terminal cleanup](../../../docs/contracts/drafts/trip-transition-catalogue.md#terminal-cleanup) / TR-06; OP/SCR/AC/TH-06; DATA-03 | NO_DRIVER guarded PG winner invalidates own offers/reservations and releases trip-specific passenger claim exactly once. Accept-vs-expire serializes; stale cleanup cannot release committed/newer claims. Historical bound quote remains bound; genuine retry needs new lawful quote. VOID uncertainty is separate. |
| [F-06](../../../docs/reviews/drafts/contract-desk-review.md#f-06) | TR [terminal cleanup](../../../docs/contracts/drafts/trip-transition-catalogue.md#terminal-cleanup) / TR-19; OP/SCR/AC/TH-19; DATA-03/06 | Explicit approved ABORTED locks state/version/generation, wins once against completion and releases only own assignment/trip/passenger/driver/vehicle claims, preserving history. Safety case/provisional money independent; accounting HOLD does not prevent authorized lifecycle release. Report/GPS/heartbeat cannot release or imply completion/capture. |
| [F-07](../../../docs/reviews/drafts/contract-desk-review.md#f-07) | TR global guard / [terminal cleanup](../../../docs/contracts/drafts/trip-transition-catalogue.md#terminal-cleanup) / TR-18; API result mapping; SCR/AC/TH-18; POL-SCHEMA | Lifecycle cancellation preconditions separated from optional fee entitlement. Valid prestart cancel confirms release with fee ZERO/REVIEW_PENDING and no debit when evidence/notice/funding missing; poststart cancel still conflicts. Independent trip/fee/VOID result prevents fee HOLD from keeping claims locked. |
| [F-08](../../../docs/reviews/drafts/contract-desk-review.md#f-08) | TR [PIN protocol](../../../docs/contracts/drafts/trip-transition-catalogue.md#pin-secret-envelope); API shared envelope/result mapping; SCR/AC/TH-10; DATA-05 / [secret lifecycle](../../../docs/security/drafts/privacy-data-map.md#privacy-v02-interactions) | Separate keyed verifier and secret-key request MAC/version with segregated keys, no raw/unkeyed low-entropy PIN hash on DB/result/log/event/device/backup. Atomic finite attempts across keys and actors, consume/start/reissue version race. Original successful-result lookup needs no consumed-code guess; changed key/payload cannot reset bounds. Approved numerical/crypto/retention design remains external engineering review. |
| [F-09](../../../docs/reviews/drafts/contract-desk-review.md#f-09) | TR [amendment funding](../../../docs/contracts/drafts/trip-transition-catalogue.md#amendment-funding); OP/SCR/AC/TH-11/13; POL funding fields; DATA-04 | Consent stays pending funding until approved existing coverage/increment/replacement authorization or current corporate delta reserve confirms. Stable operation/supersession/allocation refs and total capture cap prevent independently captured old/new holds. UNKNOWN queries same operation; absent capability/refusal preserves original terms/HOLD or explicit approved resolution; no hidden cash/extra paid service/second key. |
| [F-10](../../../docs/reviews/drafts/contract-desk-review.md#f-10) | TR [beneficiary precedence](../../../docs/contracts/drafts/trip-transition-catalogue.md#beneficiary-precedence); TR/OP/SCR/AC-07/14/21; DATA-04; TH-07/14/21; POL beneficiary fields | Eligibility/candidate agreement at assignment is distinct from event-time agreement/version/party/allocation economic snapshot. Reviewed service-specific earning rule decides whether assignment-time selection carries forward; missing rule accounting HOLD. Current fleet access/future transfer cannot rewrite entitlement; lawful corrections append audited balanced references, no cross-party netting. |
| [F-11](../../../docs/reviews/drafts/contract-desk-review.md#f-11) | API [browser contract](../../../docs/contracts/drafts/api-behavior.md#browser-session-contract); TR/OP/SCR/AC/TH-21/22/23; DATA-02/09 | Secure/HttpOnly cookie + reviewed SameSite, bound CSRF and exact origin controls, login preauthentication context, rotation/expiry/revocation propagated to old tabs/socket/cache/jobs/exports. MFA/resource/purpose/step-up/audit remain separate. Mobile OS-secure bearer vs browser cookie distinctions; no selected implemented stack or fabricated browser tests. |
| [F-12](../../../docs/reviews/drafts/contract-desk-review.md#f-12) | API [wire/result mapping](../../../docs/contracts/drafts/api-behavior.md#wire-state-and-result-mapping); TR independent machines and canonical TR/SCR-18 aliases; OP-25 companion read; TH interactions | Canonical DRIVER_EN_ROUTE/DRIVER_ARRIVED wire mapping; independent payment phase/outcome, booking handoff/amendment fields. Named original-command/key lookup with effect_class/outcome/vector/query reference distinguishes no-effect rejection from committed intent/UNKNOWN. All55 transition row codes have explicit HTTP/effect/recovery mapping; provider original-operation reconciliation precedes retry, no exactly-once claim. |

### Correction verification and limits

Observed locally after correction:
- All three exact 01-05 declared PowerShell presence/nonempty commands passed.
- Full read-only resolution across the six drafts plus two unchanged independent review files passed **1,580 local Markdown file/anchor references** with no errors.
- Stable explicit inventory remains **152**:26 SCR,26 TR,26 OP,26 AC,27 TH,11 POL,10 DATA. Added v0.2 section anchors are auxiliary navigation, not recycled business IDs. Journey row table column shape remained consistent.
- All **55** distinct transition-row outcome codes appear in the proposed wire/result mapping. Author semantic readback compared each F-01–12 recommendation against changed global clauses, rows, recovery protocols and interacting screen/policy/data/threat rules; supplemental clause-presence assertions passed for all12.
- Git diff --check passed; the normal guarded Git commit staged exactly six owned source drafts and introduced no file deletions. Read-only Git comparison confirmed both independent review files unchanged from correction base.
- All **38 actual NC scenarios remain NOT RUN**. Structural/presence/assertion checks do not certify contract correctness, cryptography, CSRF/ACL propagation, provider finality, concurrency, licensed data or professional acceptance. Fresh independent review remains required.

Local validation adjustments: an initial presence script overcounted table fields and treated an auxiliary data-prefixed section anchor as a category ID; field counts were corrected and the auxiliary anchor renamed privacy-v02-interactions. Initial literal-presence assertions were aligned to the actual clause case/phrasing. These were local check/navigation adjustments; no failed application/control scenario was run or converted to success.

No new genuine bounded source issue is knowingly left unaddressed by the author; the independent finding dispositions stay open until the reviewer decides against this exact commit. Merchant funding/VOID/increment/MIT/finality, licence/current jurisdiction/airport/corridor rights, earning-time agreement, privacy/key/retention and staffed safety evidence remain legitimate OPEN-EXTERNAL / OPEN-ENGINEERING gates. Original01-01/02 actual checkpoints, dependent01-03, all requirements, Phase1 and M0 stay OPEN. All activations DISABLED/HOLD; requirements-completed: [].

### Correction self-check

PASSED: correction hash exists; exact six files exist and have v0.2 headers with original2026-10-04 public cutoff; no independent review/shared/canonical/application/tooling files are part of the corrective commit. SUMMARY corrective appendix saved locally and intentionally uncommitted. Independent re-review is outstanding.
