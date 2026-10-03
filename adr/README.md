# Architecture decision register

Baseline: 2026-10-03. These records make the current architecture reviewable. **User direction** means the technology/scope was given by the user. **Proposed baseline** means a design decision derived from that direction, pending foundation review and evidence. **Launch gate** means a decision that must be resolved before the affected live capability, real-money flow or data collection. This bundle authorizes no spend, vendor contract, app implementation or production release.

| ID | Decision | Status | Evidence / review trigger |
|---|---|---|---|
| [001](001-modular-core-and-workload-split.md) | Modular core plus separate location/matching, realtime and workers | Proposed baseline | Measured business-module bottleneck or operational isolation need |
| [002](002-authoritative-stores.md) | PostgreSQL/PostGIS authoritative; Redis reconstructable | User direction; implementation proposed | RDS/PostGIS compatibility, benchmark, restore evidence |
| [003](003-events-and-kafka.md) | Kafka + transactional outbox/inbox | User direction; provider gate open | Broker/client benchmark and approved regional total cost |
| [004](004-api-and-realtime-contracts.md) | External REST, actual internal gRPC, durable WebSocket reconnection | User direction; contract details proposed | Client compatibility and reconnect/race tests |
| [005](005-mobile-platforms.md) | Flutter passenger; Kotlin/Compose driver; Swift driver evidence gate | User direction; device/store gates open | Local device/network/OS field evidence |
| [006](006-aws-and-operations.md) | AWS/ECS/Terraform operations; Kubernetes evidence gate | User direction; topology/region proposed | RTT, privacy/service availability, cost and recovery evidence |
| [007](007-dispatch-and-trip-invariants.md) | Durable assignment uniqueness, sequential offers, generation fencing | Proposed invariant baseline | Concurrency/crash test evidence; parallel-offer optimization request |
| [008](008-fares-ledger-and-payments.md) | Bound transparent quote, separate payment state, append-only journal | Proposed baseline; accounting/merchant gates open | Principal/agent, tax, PSP/bank and reconciliation approval |
| [009](009-privacy-risk-and-safety.md) | Minimized evidence, explainable rules, staffed safety and appeals | Proposed baseline; legal/operations gates open | DPIA, retention/access map, safety staffing and incident drills |
| [010](010-mapping-and-payment-provider-gates.md) | Capability-based vendor adapters; no premature provider lock | Open selection gate | Georgia route/address corpus, licensing and PSP merchant confirmation |

Accepted ADRs must have an owner and approval date; superseding decisions preserve the old record and link their replacement. Every significant change updates affected contracts, requirements, threat/financial analysis and executable task acceptance criteria before implementation.
