# Phase 2: Reproducible platform foundation — Context

Gathered: 2026-10-03. Status: future implementation plan; blocked on M0 and implementation authorization.

<domain>
## Phase boundary
Deliver PLAT-01/02/03, API-01, EVT-01 and OBS-01 with a production-quality staging tracer and recovery evidence. This phase creates the real monorepo/toolchains/contracts/CI and bounded AWS staging infrastructure after authorization. It is not public launch, complete trip/payment functionality, or permission to incur cloud charges now.
</domain>

<decisions>
## Implementation decisions
### Architecture and durability
- **D-01:** Use one Go backend module, modular domain ownership and separate workload entrypoints; no domain-per-microservice/datastore split or Kubernetes without evidence.
- **D-02:** PostgreSQL/PostGIS is durable truth; Redis is rebuildable hot state; Kafka-compatible outbox/inbox delivery is at least once with idempotent effects.
- **D-03:** External REST/OpenAPI, genuine process-boundary gRPC/protobuf and authorized WebSocket snapshot/cursor recovery share explicit versions, deadlines, errors and idempotency.
### Reproducibility and telemetry
- **D-04:** Pin verified compatible toolchains/dependencies; use lockfiles, contract/boundary checks, protected checks and immutable artifact provenance before promotion.
- **D-05:** Use AWS/Terraform/Docker/ECS initially with short-lived deployment identity, protected state/secrets and scrubbed OpenTelemetry correlation; region/cost/privacy choices follow reviewed M0 evidence.
### Authority and release
- **D-06:** Require actual M0 acceptance and later implementation authorization; require scoped staging identity/budget before apply, no production mutations or city activation in this phase.
### the agent's Discretion
Choose exact supported versions at execution time and compatible schema/test tooling. M0 supplies legal/region/privacy/cost constraints; 02-04 prepares published cost estimates and the broker harness, authorizes a bounded trial, then measures Go-client/auth/schema/partition/replay compatibility and cost. Select the staging candidate from those actual trial results; final production broker/capacity remains gated by later load/release evidence. Record official provenance and costs. Keep root foundation documents stable so plan references remain valid; move/copy them only with an explicit reference migration.
</decisions>

<canonical_refs>
Read `.planning/STATE.md`, `PROJECT.md`, `REQUIREMENTS.md`, `ROADMAP.md`, Phase 1 final evidence/summaries, `MASTER-SPEC.md`, `TECHNICAL-SPEC.md`, `DOMAIN-BOUNDARIES.md`, `REPOSITORY-STRUCTURE.md`, `AGENTS.md`, `VALIDATION-AND-LAUNCH-GATES.md`, ADR-001/002/003/004/006/009/010 and `docs/contracts/` output from 01-03. If Phase 1 final outputs do not exist, stop the dependent implementation task; do not create approvals.
</canonical_refs>

<code_context>
At foundation delivery there is no application code or selected application dependency version. `go test`, Docker builds and Terraform apply in plans are future commands after the relevant source is created. The local GSD installation is assessed separately in GSD-WORKFLOW.md and must not be installed/updated by this phase implicitly.

The six dependency-ordered plans are 02-01 backend/bootstrap/contracts; 02-02 retained TypeScript/Dart clients; 02-03 retained Kotlin client and integrated CI/provenance; 02-04 infrastructure and bounded broker trial; 02-05 real synthetic staging runtime/correlation; 02-06 event/realtime failure recovery and acceptance. Each owns at most 14 declared files and three tasks; later plans may modify earlier retained files sequentially.
</code_context>

<deferred>
Complete identity/eligibility, fare/dispatch and financial service implementation belongs to later phases. The tracer uses synthetic nonfinancial trip-like aggregates and synthetic accounts, protected from public use. Production rollout, load certification, financial integration and native driver iOS are outside this phase.
</deferred>
