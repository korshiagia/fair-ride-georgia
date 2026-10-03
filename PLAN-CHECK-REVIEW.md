# Foundation plan-check review

**Review date:** 2026-10-04, Asia/Tbilisi  
**Scope:** Nine native plans for Phases 1–2; read-only goal-backward review of the planning foundation.  
**Planning conclusion:** **PASS WITH WARNING — no material blocker found.**  
**Strict checker status:** `issues_found`: 0 blockers, 1 scope warning, 0 info findings.

ცხრა გეგმა ფარავს პირველი ორი ფაზის ყველა მოთხოვნასა და დაფიქსირებულ გადაწყვეტილებას. არსებითი ბლოკერი არ გამოვლენილა. Phase 2-ის თითო გეგმის 10–14 ფაილი რჩება მოცულობის გაფრთხილებად. ეს დასკვნა ეხება დაგეგმვის ხარისხს; რეალური კვლევა, M0-ის მიღება, პროგრამული განხორციელება და გაშვების მზადყოფნა ჯერ დაუდასტურებელია.

## Basis and limits

Reviewed PROJECT, REQUIREMENTS, ROADMAP, STATE, both phase CONTEXT/RESEARCH/VALIDATION files, every task/action/acceptance/verification/must-have in all nine plans, foundation AGENTS, validation/launch gates, master/technical/domain/repository contracts and relevant ADRs. A second independent read-only pass checked requirement and locked-decision coverage. No plan or canonical specification was altered by this review.

The orchestrator's actual read-only validation results establish @opengsd/gsd-core **1.15.0**, valid frontmatter and task structure for all nine plans, six of six decision references per phase, healthy planning state, consistent roadmap/state, no same-wave declared-file collisions, 78 unique v1 requirements mapped across 12 phases and 48 work cards, 18 supported configuration keys and no broken local Markdown links in its 57-file pre-report snapshot. These results prove structural properties; they do not establish field findings, professional opinions, working services or successful implementation tests. Missing SUMMARY/VERIFICATION files are expected for unexecuted phases.

No application, native-client build, economics calculator, Docker build, Terraform operation, broker trial, CI release, security drill or external outreach was executed for this review. Future paths in the plans intentionally describe artifacts that execution will create. No entire native new-project/plan/execute workflow is claimed to have run.

## Goals and requirement coverage

Phase 1 must produce independently reviewed five-city evidence, economics/funds-flow/provider conclusions and implementable product/privacy/security contracts. Phase 2 must reproducibly build and deploy an isolated, authenticated staging tracer, enforce release/contract controls and prove observable durable-event/realtime recovery. Every roadmap requirement is claimed in plan frontmatter and covered by concrete executable work or a blocking real-evidence checkpoint.

| Requirement | Concrete planned coverage | Acceptance boundary |
|---|---|---|
| BIZ-01 | 01-01 T1/T3 city/airport evidence; 01-02 legal review; 01-03 T2 integration | Separate dated evidence for Zugdidi, Kutaisi, Batumi, Tbilisi and Rustavi; no inferred permissions |
| BIZ-02 | 01-01 T1/T3 calculator, driver online-hour outcomes, contribution/cash flow and adverse cases; 01-03 T2 reconciles actual tax/provider inputs | Reproducible reviewed model; assumed fees cannot become validated facts |
| BIZ-03 | 01-02 T1/T2/T3 professional review, principal/agent, driver relationship, issuer/tax and money scenarios | Actual attributable written Georgian legal/accounting evidence |
| BIZ-04 | 01-01 T1/T2/T3 stratified collection, privacy gate, anonymized findings and limitations | Actual consented/lawful evidence; quotas alone do not prove representativeness |
| VND-01 | 01-02 T1/T2/T3 maps/PSP mandatory rubric, terms, sandbox references and decision | Capability/licensing evidence precedes recommendation; no assumed merchant approval |
| PRD-01 | 01-03 T1/T2/T3 full screen/state/city/API/privacy/security catalogue and M0 review | Independent review of full five-city scope and all six Phase 2 plans |
| PLAT-01 | 02-01 Go bootstrap; 02-02 TS/Dart; 02-03 Kotlin/build instructions; 02-04 staging; 02-05 runtime promotion | Actual clean second-environment builds and isolated staging evidence |
| PLAT-02 | 02-03 T2/T3 protected CI and immutable package provenance; 02-05 T3 image/IaC scanning and promotion | Real required-check protection and attested artifact; absent credentials block completion |
| PLAT-03 | 02-01 T2/T3 ownership and negative import tests; 02-05 T1 workload wiring | One modular Go core; network boundaries only between actual processes |
| API-01 | 02-01 T3 machine contracts; 02-02/03 retained clients; 02-05/06 actual transport/recovery tests | Authentication, errors, versions, deadlines, cancellation, pagination and scoped idempotency all explicit |
| EVT-01 | 02-04 broker compatibility; 02-05 transactional state/outbox; 02-06 T1 retained publisher/inbox and crash/replay tests | Durable unique synthetic effects; external PSP/bank idempotency/reconciliation contracts preserved by ADR-003 and implemented in their later owning phase |
| OBS-01 | 02-04 collector controls; 02-05 real API/core/DB/worker/realtime correlation; 02-06 recovery telemetry | Actual correlated evidence without raw route/PIN/token/payment/incident payloads |

The remaining 66 v1 requirements retain their later primary phases. Nothing in PROJECT directly implies their implementation must be completed in Phases 1–2. The synthetic tracer and retained contract packages therefore do not reduce the complete five-city product scope or substitute for later mobile, assignment, finance, safety and launch acceptance.

## Locked decisions and deferred scope

| Context | Decision coverage |
|---|---|
| Phase 1 D-01 / D-02 | 01-01 city-specific provenance and actual-evidence checkpoint; 01-02 provider/legal evidence; 01-03 reconciliation |
| Phase 1 D-03 | 01-01 T1/T3: 15% sensitivity input, no launch subscription, driver online-hour economics and nonduplicated costs |
| Phase 1 D-04 | 01-02: written professional responsibilities/funds-flow review; no assumed custody or provider capability |
| Phase 1 D-05 | 01-03 T1: separate states, durable assignment, reproducible quotes, minimal arrival evidence, PIN and human safety/appeal controls |
| Phase 1 D-06 | 01-03 blocking M0 review; 02-01 implementation-entry checkpoint |
| Phase 2 D-01 / D-02 | 02-01 ownership; 02-05 real workload entrypoints; 02-04 actual Kafka trial; 02-06 durable recovery |
| Phase 2 D-03 | 02-01 explicit protocol semantics; 02-02/03 retained compatibility clients; 02-05/06 runtime cancellation/pagination/authorization/recovery |
| Phase 2 D-04 | Pinned verified versions, retained lockfiles, created verifiers before CI, actual protected checks and verified immutable provenance |
| Phase 2 D-05 | 02-04 bounded AWS/Terraform/Docker/ECS staging and redaction; 02-05 short-lived promotion identity and real correlation |
| Phase 2 D-06 | Actual M0/implementation prerequisites; concrete staging scope/budget gate; no production mutations or city activation |

All twelve recorded decisions have full planned coverage. Deferred driver iOS, subscriptions, learned matching, final tariffs, signed contracts, public activation and full customer-trip/payment implementation are excluded from the relevant phases. Conditional production sizing and later finance/load certification are explicitly assigned to later phases, rather than invented as a reduced version of a locked Phase 2 decision.

## Dependency, ownership and wiring review

| Plan | Tasks | Declared files | Wave | Dependencies | Assessment |
|---|---:|---:|---:|---|---|
| 01-01 | 3 | 7 | 1 | — | Valid |
| 01-02 | 3 | 6 | 1 | — | Valid |
| 01-03 | 3 | 7 | 2 | 01-01, 01-02 | Valid |
| 02-01 | 3 | 14 | 1 | Phase 1/M0 entry gate | Scope warning |
| 02-02 | 3 | 10 | 2 | 02-01 | Scope warning |
| 02-03 | 3 | 13 | 3 | 02-01, 02-02 | Scope warning |
| 02-04 | 3 | 14 | 4 | 02-03 | Scope warning |
| 02-05 | 3 | 11 | 5 | 02-04 | Scope warning |
| 02-06 | 3 | 14 | 6 | 02-05 | Scope warning |

The graph is acyclic, all references resolve to declared plans, and wave numbers respect dependencies. Phase 2's Wave 1 is local to Phase 2; ROADMAP and 02-01's blocking checkpoint enforce its Phase 1 prerequisite. Sequential plans deliberately update retained go.mod/go.sum, runtime wiring, release workflow and staging evidence. Their ordering prevents concurrent ownership conflicts.

The only same-wave pair, 01-01/01-02, owns disjoint files. Economics can retain explicitly provisional vendor/tax inputs; 01-03 waits for both plans and reconciles those inputs before M0. It therefore does not require the parallel provider/legal plan to finish early or silently share mutable results. No other specific undeclared temporal coupling or incompatible data transformation was found. Telemetry redaction does not remove authoritative state needed for recovery: minimized observable fields and retained PostgreSQL records have different roles.

Critical wiring is executable: canonical examples feed created verifiers and native clients; CI consumes those existing targets; real workload entrypoints call the tracer; the tracer writes state/outbox transactionally; 02-06 refactors it into retained event modules and wires publisher/consumer processes; realtime recovery fetches an authorized authoritative snapshot. The plans include explicit negative cases, actual target/test-count inspection, missing-configuration failure, restored negative fixtures and accountable acceptance. File presence alone cannot accept legal/provider/CI/staging/recovery outcomes.

## Prior material concerns resolved

| Earlier concern | Verifiable correction |
|---|---|
| Oversized Phase 2 plans | Six ordered plans now declare 10–14 files and exactly three tasks each. No plan reaches 15 files or five tasks. Residual warning retained below. |
| Field privacy reviewed after collection | `01-validation-contracts/01-01-PLAN.md:67` requires dated protocol-specific privacy review before the first interview/diary record; line 69 explicitly blocks missing lawful-basis/storage/transfer review. |
| CI demonstration before verifiers existed | `02-platform-foundation/02-01-PLAN.md:76` creates/verifies entrypoints before client/CI consumers; `02-03-PLAN.md:65` requires those existing entrypoints and actual negative CI evidence. |
| Trial evidence demanded before its harness/authorization | `02-platform-foundation/02-04-PLAN.md:59` prepares harness/protocol/published cost estimate; line 64 is the blocking scoped trial gate; line 75 runs the authorized actual trial. |
| API cancellation/pagination omission | `02-platform-foundation/02-01-PLAN.md:74` specifies downstream cancellation, deadlines and owned/expiring pagination cursors; 02-05/06 require runtime evidence. |

## Check applicability and evidence limits

- **Task completeness, requirement coverage, dependencies, key links, derivation, context/scope reduction, data contracts and foundation AGENTS compliance:** no material defect found. The installed native validator recognizes tracer tasks as automatic implementation work.
- **Architectural tier compliance:** SKIPPED under the formal Dimension 7c check; neither RESEARCH file contains an Architectural Responsibility Map. Canonical domain/ADR ownership is still respected by the reviewed actions.
- **Nyquist 8a–8e:** SKIPPED under the formal applicability rule; neither RESEARCH file contains a Validation Architecture section. Both VALIDATION files exist and correctly remain draft/noncompliant until actual evidence. This is no certification of feedback duration or automated coverage.
- **Probe-only failing-direction/path dimensions:** no deterministic probe payload was supplied, so no result is inferred and no probe was rerun. Inline nonzero-exit checks and deliberate failure cases were reviewed for meaning; future exact commands remain subject to execution-time validation.
- **Research resolution:** no unresolved Open Questions section. Version/provider/region/identity choices are explicitly execution prerequisites, with tasks and gates resolving them before dependent use; future field research is an intended Phase 1 output.
- **Pattern/review incorporation:** no phase PATTERNS or REVIEWS artifact was supplied. Project skill directories and configured agent-skill mappings are absent. No estimate block is present; calibrated token-budget measurement is not claimed.

## Warning and structured finding

**WARNING — scope sanity:** Each Phase 2 plan remains at the 10-file warning threshold or above, including 02-03 T1's ten-file native-wrapper/client target and 02-04 T1's fourteen-file infrastructure/harness proposal. Cohesive targets and sequential ownership explain the retained slices, and the orchestrator explicitly accepts this advisory for foundation delivery. The larger tasks can still increase execution-context pressure; this is not a 15-file blocker and does not justify dropping required behavior.

Evidence: `02-platform-foundation/02-01-PLAN.md:7`, `02-02-PLAN.md:7`, `02-03-PLAN.md:7`, `02-04-PLAN.md:7`, `02-05-PLAN.md:7`, `02-06-PLAN.md:7`; task concentration at `02-03-PLAN.md:52` and `02-04-PLAN.md:57`.

```yaml
issues:
  - plan: null
    plans: ["02-01", "02-02", "02-03", "02-04", "02-05", "02-06"]
    dimension: scope_sanity
    severity: warning
    required_property: "Per-plan work should remain below the high-file-count warning threshold so execution retains enough context for substantive verification."
    description: "The six Phase 2 plans declare 14, 10, 13, 14, 11 and 14 files respectively; 02-03 Task 1 and 02-04 Task 1 concentrate ten and fourteen files. Each plan has three tasks and none reaches the mandatory 15-file blocker threshold."
    evidence: "All six Phase 2 PLAN.md files, line 7; 02-03-PLAN.md:52; 02-04-PLAN.md:57."
    disposition: "Accepted scope advisory for this foundation delivery; reassess when exact execution versions and target tooling are selected."
    fix_hint: "One possible mitigation is an additional bootstrap or infrastructure slice at execution-plan refinement, preserving all requirements, dependency order and real-evidence gates."
```

## Real prerequisites and recommendation

Phase 1 still needs actual named research/privacy/legal/finance/provider reviewers, lawful restricted evidence storage, appropriate outreach/access authority, real five-city observations and documented M0 acceptance. See `01-01-PLAN.md:67`, `01-02-PLAN.md:63` and `01-03-PLAN.md:74`. These are blocking future execution gates, not missing foundation deliverables.

Phase 2 remains blocked on M0 and a later implementation instruction, then actual repository/owner/native-runner setup and verified compatible dependencies (`02-01-PLAN.md:54`). Cloud apply requires a concrete reviewed plan, scoped identity, protected state/secrets, bounded budget and teardown authority (`02-04-PLAN.md:64`). Staging promotion reuses that authorization but checks actual target readiness. Independent acceptance requires real CI/native/staging/fault evidence (`02-06-PLAN.md:75`); missing/zero-test targets, duplicate effects, unauthorized access or unresolved exploitable high findings cannot pass.

**No material blocker requires foundation rework.** Preserve the accepted scope warning in the pre-execution quality record. Refine exact tools/commands and, if needed, task slicing when authorized execution begins; keep all evidence gates active. M2 integrated mobile/finance/arrival/support acceptance and M4 production/security/privacy/load/staffing/city launch gates remain future requirements. This report does not authorize implementation, external contact, spending, production release or city activation.
