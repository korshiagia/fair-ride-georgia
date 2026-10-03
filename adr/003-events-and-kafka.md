# ADR-003 — Kafka event streaming with outbox/inbox effects

Date: 2026-10-03. Status: **User event-stream direction; managed provider/cost gate open**. Decision owner: platform/backend lead; budget owner approves costs.

## Context

Notifications, analytics, evidence pipelines and projections require replayable events. A database write and broker publish can fail independently. Provider effects may complete despite a network timeout.

## Decision

Retain Kafka as the selected event-stream architecture. Commit core changes and outbox rows atomically; publish at least once. Consumers persist effect + inbox dedupe atomically, then acknowledge offsets. Topic ownership, envelope/schema version, partition key, ACL, replay horizon, retention and PII classification are explicit. Trip ordering is per trip partition; driver telemetry ordering is per session/driver. Aggregate version detects gaps. No cross-partition global order is assumed.

Kafka exactly-once features do not make a database, PSP or bank side effect exactly-once. External effects require stable business IDs, durable intents, dedupe and reconciliation. [Kafka delivery design](https://kafka.apache.org/41/design/design/).

## Provider gate and consequences

Compare MSK Provisioned, MSK Serverless and a compatible managed broker using regional Go-client/auth/load/replay tests. Model idle cluster/partition fees, storage, throughput, fanout, networking, registry, logging, support and dev/staging/prod at 30-day cost. Do not interpret serverless as free while idle. [MSK pricing](https://aws.amazon.com/msk/pricing/).

Core can tolerate a bounded broker outage via its outbox and snapshot fallback; resource limits and recovery alarms are mandatory. Kafka is not the assignment lock or command acknowledgment authority. Any first-launch deferral requires a new explicit ADR and user decision preserving contracts, durability and migration tests; this ADR does not authorize silently replacing Kafka with an in-memory queue.
