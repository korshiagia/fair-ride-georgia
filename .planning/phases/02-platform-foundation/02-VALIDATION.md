---
phase: "2"
slug: platform-foundation
status: draft
nyquist_compliant: false
wave_0_complete: false
created: "2026-10-03"
---

# Phase 2 validation strategy

All implementation checks are planned and pending. No app source, staged service, CI result, deployment, benchmark or recovery exercise is represented as completed.

## Test infrastructure and dependencies

Six sequential waves separate actual source creation from evidence checks. Wave 1 creates Go bootstrap/boundary tests and a tested schema verifier. Wave 2 creates retained TypeScript/Dart contract targets. Wave 3 creates retained Kotlin contracts, then integrates existing checks in CI and artifact provenance. Wave 4 creates infrastructure plus the real broker harness/protocol/cost estimate, authorizes a bounded staging trial and measures its actual result. Wave 5 creates/promotes real synthetic runtime entrypoints and correlated staging tests using already-authorized scope. Wave 6 proves outbox/realtime failure recovery and reviews foundation acceptance. Every plan contains three tasks and at most 14 declared files.

Quick future checks: Go unit/race/boundary tests from `apps/backend`; root `node --test tools/verify-contracts.test.mjs` and `node tools/verify-contracts.mjs` after 02-01 creates them; actual TypeScript typecheck/test, Dart analyze/test and Kotlin `:contracts:build :contracts:test` after respective creation. Cloud/dependency integration tests use an explicit `integration` build tag and exact named targets; ordinary unit checks do not require cloud credentials. A selected integration test must fail, never skip/pass, when required target configuration is absent. Exact versions are verified at execution time.

Full future checks use real PostgreSQL/PostGIS/Redis/broker and scoped staging endpoints. Named tests `TestKafkaCompatibility`, `TestStagingTracer` and `TestFoundationRecovery` are future source contracts created before invocation. Assert target discovery and actual test execution counts; a zero-test successful exit is not evidence. Record actual durations and feedback limits once the harness exists rather than inventing timings.

| Task | Wave | Requirements | Threats | Planned validation | Exists now / status |
|---|---|---|---|---|---|
| 02-01-1 | 1 | All phase precondition | T-02-01 | Actual M0, implementation authority, repository/owner and isolation prerequisites | No / pending checkpoint |
| 02-01-2 | 1 | PLAT-01/03 | T-02-01/02 | Pinned Go bootstrap source, meaningful tests and clean build provenance | No / future creation |
| 02-01-3 | 1 | PLAT-03/API-01 | T-02-02/03 | Tested schema/boundary entrypoints, errors/idempotency, deadline/cancel and cursor negative contracts | No / future creation |
| 02-02-1 | 2 | PLAT-01/API-01 | T-02-02/03 | Real TypeScript retained contract compilation/parsing/compatibility tests | No / future creation |
| 02-02-2 | 2 | PLAT-01/API-01 | T-02-02/03 | Real Dart retained contract analysis/parsing/compatibility tests | No / future creation |
| 02-02-3 | 2 | PLAT-01/API-01 | T-02-02/03 | Clean second-environment builds and observed incompatible-fixture failure/restoration | No / future evidence |
| 02-03-1 | 3 | PLAT-01/API-01 | T-02-02/03 | Native Kotlin retained contract compilation, shared positive/negative parsing fixtures | No / future creation |
| 02-03-2 | 3 | PLAT-02 | T-02-01/02/03 | Already-created verifier/boundary/native targets in actual protected CI; broken fixture/import fails | No / future CI evidence |
| 02-03-3 | 3 | PLAT-01/02 | T-02-01/02 | Real immutable retained-package artifact and verified revision/schema/dependency/SBOM provenance | No / future evidence |
| 02-04-1 | 4 | PLAT-01/EVT-01/OBS-01 | T-02-04/05/06/07 | IaC/compose validation, local real broker cases, protocol and published full 30-day estimates | No / future creation |
| 02-04-2 | 4 | PLAT-01/OBS-01 | T-02-04 | Scoped account/role/state/secrets, concrete plan and bounded trial cost/teardown authorization | No / pending checkpoint |
| 02-04-3 | 4 | PLAT-01/EVT-01/OBS-01 | T-02-04/05/06/07 | Actual candidate Go-client/auth/schema/partition/replay trial and measured usage/cost extrapolation | No / future trial |
| 02-05-1 | 5 | PLAT-01/API-01/OBS-01 | T-02-01/03/05/07 | Real runtime builds, synthetic durable command, ownership/cursor/idempotency and deadline/cancel propagation | No / future creation |
| 02-05-2 | 5 | PLAT-01/OBS-01 | T-02-01/04/05 | Actual environment/secret readiness under existing scoped authority; no repeated permission request | No / future preflight |
| 02-05-3 | 5 | PLAT-01/API-01/OBS-01 | T-02-01/03/04/05/07 | Verified runtime image and real authorized API/core/DB/worker/realtime trace with denied access | No / future staging evidence |
| 02-06-1 | 6 | EVT-01 | T-02-06/07 | Actual core/worker event-module wiring, crash-boundary replay and durable inbox/outbox effect uniqueness | No / future creation |
| 02-06-2 | 6 | API-01/EVT-01/OBS-01 | T-02-03/05/07 | Actual realtime-module wiring, cursor/snapshot/revocation/Redis-loss recovery and evidence index | No / future creation |
| 02-06-3 | 6 | PLAT-01/02/03/API-01/EVT-01/OBS-01 | All | Independent foundation acceptance from actual CI/staging/recovery evidence | No / pending review |

## Wave 0 and manual prerequisites

- [ ] M0 accepted and implementation separately authorized before Wave 1.
- [ ] Actual repository ownership and credentials for protected checks; unavailable protection blocks PLAT-02.
- [ ] Maintained pinned toolchains and canonical contract inputs from Phase 1.
- [ ] Source/verifier/native targets exist in their declared earlier tasks before invoking them.
- [ ] Wave 4's published full-cost protocol and reviewed concrete plan precede cloud budget/apply authority.
- [ ] Wave 4 actual broker compatibility and scoped staging credentials precede Wave 5 promotion.
- [ ] Reuse explicit implementation/staging authorization; obtain only genuinely missing credentials or uncovered external scope.

## Acceptance and sign-off

Pass only after a second clean environment builds the retained native targets, negative contract/security fixtures fail correctly, core boundaries enforce ownership, protected CI and immutable artifact metadata identify revision/schema/dependencies, and the authenticated staging tracer is correlated without secret/PII leakage. Real DB/broker/Redis/realtime crash cases must preserve accepted durable synthetic outcomes. Duplicate effects and unauthorized access must be zero in the reviewed corpus. Failure injection remains within authorized synthetic staging, with ownership/budget/teardown evidence. Final production broker/capacity, actual assignment/finance and five-city load/release certification belong to later phases.

- [ ] Exact test discovery, actual runs and reviewed evidence recorded; no missing/zero-test entrypoints.
- [ ] All six requirements and D-01 through D-06 covered.
- [ ] No unresolved high security finding or public/production/real-customer mutation.
- [ ] No raw route/PIN/token/incident payload in telemetry.
- [ ] Regional cost extrapolation includes idle/storage/network/fanout/environments/support and measured trial limits.
- [ ] Independent foundation acceptance is recorded with remaining production/finance/dispatch limitations.

Approval: pending. Set validated/Nyquist flags only after executing and auditing the actual harness.
