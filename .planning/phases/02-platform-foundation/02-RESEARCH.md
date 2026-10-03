# Phase 2 research contract

Date: 2026-10-03. Status: architecture guidance researched; versions, cloud plan and runtime behavior need execution evidence.

## Selected approach

`TECHNICAL-SPEC.md`, `DOMAIN-BOUNDARIES.md` and ADR-001 through 004/006 govern the implementation. Keep core transactional modules together, split location/realtime workloads for measured operating needs, and use a shared schema/event contract. Stage one synthetic authenticated create/read/version-update path through database/outbox/worker/realtime so retries, crashes and resynchronization are testable before financial/dispatch features are expanded.

## Execution research and primary sources

At implementation time verify compatible versions and provenance from [Go downloads](https://go.dev/dl/), [PostgreSQL supported versions](https://www.postgresql.org/support/versioning/), [PostGIS documentation](https://postgis.net/documentation/), official Redis/Kafka documentation, [AWS ECS guidance](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html), [Terraform documentation](https://developer.hashicorp.com/terraform/docs), [GitHub Actions OIDC](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws), [OpenTelemetry documentation](https://opentelemetry.io/docs/), and the official Flutter/Android/Next.js toolchain docs before bootstrap. A dependency must have exact coordinates/version and reviewed provenance; no guessed packages or "latest" image tags.

No cloud region, broker tier, database instance, maps contract or PSP approval is currently settled. M0 resolves legal/region/privacy/budget constraints, not a Kafka benchmark before code exists. In 02-04 create a real Go compatibility harness and bounded trial protocol plus dated published 30-day cost estimate before cloud authorization. After scoped authorization measure Go-client/TLS/auth/schema/partition/replay and actual usage; extrapolate costs with uncertainty including idle capacity, storage, network/egress/fanout, environments and support. Choose the staging candidate from actual trial evidence; final production capacity/provider shape remains gated by later load/release evidence. AWS staging uses separate identity/state from production; no apply precedes a reviewable plan, authorized budget and valid credentials.

## Failure behavior to prove

DB rollback emits no durable event. Crash after DB commit before publish leaves an outbox record recoverable. Publish succeeds but acknowledgment is lost can deliver again without duplicate durable effects. Worker crash before/after inbox commit is recoverable; poison messages are quarantined with alertable reasons. Broker/Redis outages cannot erase accepted durable state. Realtime reconnect fetches authoritative snapshot/version and filters obsolete messages. Revocation and cross-tenant subscriptions are denied across REST/gRPC/WebSocket. Deadline expiry, process shutdown and schema changes preserve bounded recovery. Trace metadata crosses boundaries while excluding PIN, token, raw route and incident narratives.

## Open decisions

Chosen maintained library/tool versions, contract regeneration/lint packages, schema migration tool, staging account and region, database/broker/Redis cost ceiling, secrets and signing identities, developer OS/device build access. Resolve them before source generation and record the exact commands actually created. Swift/iOS signing access is not assumed on this Windows host; passenger iOS build/release validation needs a suitable authorized runner later.
