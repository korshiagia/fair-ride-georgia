# ADR-001 — Modular transactional core and limited workload split

Date: 2026-10-03. Status: **Proposed baseline**. Decision owner: technical lead; product/operations review required.

## Context

The product spans five cities and has substantial trip, financial, tenant and safety rules. Telemetry and long-lived connections have different traffic patterns from business commands. There is no measured reason to deploy a service/database per domain or per city. Production quality requires controlled boundaries and recoverable state, not a large service count.

## Decision

Use one Go modular business core with module-owned schemas in one PostgreSQL cluster. Independently scale Go location ingestion/candidate matching, realtime gateway and workers. Core alone commits dispatch assignments, trip transitions, quote binding and financial effects. Domain calls inside core are in-process. Shared backend release/contracts begin in one Go module and monorepo.

## Alternatives and consequences

A single process for every workload minimizes deployments but couples socket/telemetry pressure to transaction capacity. Microservices for every domain add network races, orchestration, observability and migration costs before a measured need. The selected split bounds noisy workloads while retaining local transactions for correctness. The core database is an important failure boundary, addressed through managed HA, admission control and tested recovery.

## Validation and reopening

Validate independent scaling, graceful shutdown, connection draining and DB pool limits under the synthetic envelope in TECHNICAL-SPEC. A new business service requires a measured limitation, storage/contract migration plan, named owning team and total operations cost. ECS supports multi-AZ service placement/rebalancing, but the project must test its own failure behavior. [AWS ECS AZ guidance](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-rebalancing.html).
