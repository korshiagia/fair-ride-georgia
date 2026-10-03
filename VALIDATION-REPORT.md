# Foundation validation report

Final check date: 2026-10-04, Asia/Tbilisi. Source/initial specification baseline: 2026-10-03. Scope: specification consistency, traceability, source/research audit and installed GSD plan structure. This report does not assert implemented application behavior, completed fieldwork, legal compliance or production readiness.

Relocation recheck, 2026-10-04: the active root is now `C:/Projects/fair-ride-georgia`. The same read-only validation passed on all 61 project files, with `.git` excluded: 78 requirements, 12 phases, 48 work cards, nine valid native plans, 18 supported configuration keys, both decision-coverage checks and no broken local links or validation failures. Source dates and the original substantive reviews are unchanged; local repository setup is recorded in [PROJECT-SETUP.md](PROJECT-SETUP.md).

## Structural and traceability results

Read-only validation completed successfully against the installed OpenGSD `@opengsd/gsd-core` 1.15.0 dispatcher. Results were inspected as structured output, rather than inferred from shell success alone.

| Check | Actual result |
|---|---|
| v1 requirements | 78 unique IDs, all mapped to a primary phase and work card |
| Roadmap | 12 phases; release `v1.0`, Five-city production program; all 12 native goals discovered |
| Work cards | 48, with actions, accountable roles, owned paths, prerequisites and acceptance |
| Card dependency graph | Acyclic; staffing T47 and applicable readiness T45 precede real-person cohorts T46 |
| Native GSD plans | 9 plans; 3 tasks per plan; nonempty known requirement coverage |
| Native frontmatter validation | 9/9 valid; no missing or invalid required field |
| Native plan structure | 9/9 valid; zero structural errors or warnings |
| Phase 1 requirement coverage | All 6 Phase 1 requirement IDs covered |
| Phase 2 requirement coverage | All 6 Phase 2 requirement IDs covered |
| Native decision coverage | Phase 1 6/6; Phase 2 6/6; neither silently skipped |
| Plan prerequisites/waves | Valid named dependencies, increasing waves and no conflicting same-wave file ownership |
| Declared plan scope | Every native plan has at most 14 declared files; substantive scope advisory discussed separately |
| GSD project health | `healthy`, zero errors and warnings |
| GSD consistency | `passed:true`, zero errors and warnings |
| GSD roadmap validation | No warnings |
| Configuration | All 18 leaf keys supported by installed capability-aware schema; automatic phase progression off |
| Local document references | No broken Markdown file links in the validation snapshot; final references rechecked during packaging |
| Financial arithmetic | 0.986 GEL illustrative contribution; conditional VAT sensitivity 0.7114237288; illustrative funding 4.95m/6.00m GEL reproduced |

The native inspection's missing execution summaries, verification/UAT evidence and checkpoint-shape diagnostics are expected for a not-yet-executed program. Later phases have only BRIEF scope files and work cards, not invented CONTEXT/PLAN/SUMMARY/VERIFICATION outcomes. Draft Nyquist files remain `nyquist_compliant:false` and `wave_0_complete:false` until real execution evidence exists.

## Substantive review and corrections

The source/business review corrected commission wording, provider callback authentication assumptions, a VAT-sensitivity transcription, discovery quota consistency, pre-cohort staffing order and file-completeness probes. See [original independent source/business review](research/FOUNDATION-REVIEW.md).

The architecture review added passenger distinct-key duplication guards, trip/driver/vehicle physical exclusivity, future resource calendars, uncertain PSP recovery, immutable minimal money facts, beneficiary snapshot/split-refund recovery and replay safeguards. See [architecture review](ARCHITECTURE-REVIEW.md).

Specialist goal-backward plan checking led to the six-plan Phase 2 split, research-privacy review before any real field collection, verifiers/native contract targets before CI proof, and a concrete broker protocol/harness/cost plan before authorized trial and final shape selection. See [final plan review](PLAN-CHECK-REVIEW.md) for its actual disposition. A 10–14 file scope advisory remains distinct from the native structure checks; it is accepted for coherent initial contract/toolchain/infrastructure units and must be reconsidered if execution adds scope.

The final specialist result is **PASS WITH WARNING** for planning delivery: zero blocking findings, one accepted aggregate file-scope advisory. Its independent crosscheck covers all twelve Phase 1/2 requirement IDs and all twelve locked decisions. A final clarification limits the early local broker trial to the data-only compose profile; 02-04's native structure was rechecked successfully after that change. This planning acceptance is separate from the still-pending real M0 and implementation gates.

## Limits and next action

This is a reviewed foundation suitable for starting the documented Phase 1 research/contract work. All 78 v1 implementation or operational requirements remain unchecked. No native init/execute lifecycle, application source build, real AWS deployment, broker load trial, PSP charge/payout, field interview, professional opinion, signed airport/provider agreement or public launch occurred in preparing this pack.

Field collection first needs its specific approved privacy/consent/storage protocol and actual authorized participants. M0 still requires real business/legal/provider/economics evidence and reviewed product contracts. Implementation requires the accepted bounded M0 contract and subsequent implementation instruction. Production additionally requires measured finance/dispatch/mobile/security/restore and staffed five-city readiness.

The global GSD agent posture audit found 26 existing role configuration mismatches, documented in GSD-WORKFLOW. Global configuration was preserved. Before future native automated executors, verify their actual isolation/sandbox posture; this does not invalidate the local read-only plan checks or authorize global changes.
