# ADR-002 — PostgreSQL/PostGIS authority and Redis hot projections

Date: 2026-10-03. Status: **User technology direction; implementation proposed**. Decision owner: backend/data lead.

## Context

Trip/driver assignment, quote versions and money need durable relational invariants. Driver positions change much faster than business records. Arrival evidence must have spatial meaning and survive a cache outage.

## Decision

Use PostgreSQL with compatible PostGIS as source of truth. One schema per owner module, controlled cross-domain transactions and immutable business history. Index active assignment uniqueness; read replicas only for noncritical reporting. Use explicit WGS84 coordinate order and geography meter distances for radius checks. PostGIS `ST_DWithin` is index-aware and accepts meters for geography. [PostGIS reference](https://postgis.net/docs/ST_DWithin.html).

Use Redis for reconstructable presence, geographic candidate indices, bounded caches and delivery metadata. A separate session/freshness record is mandatory; stale GEO membership cannot prove availability. Redis has geographic search and key expiry primitives, but these do not replace core correctness. [Redis GEO](https://redis.io/docs/latest/develop/data-types/geospatial/), [key expiry](https://redis.io/docs/latest/develop/using-commands/keyspace/).

## Consequences and gates

No ledger, committed assignment, permit decision or sanction lives only in Redis. DB query plans, geographic indexes, lock contention, connection pools and partition/archive strategy are measured before launch. RDS PostgreSQL is the initial managed recommendation; engine/PostGIS extension matrix, region, backup and restore tests remain gates. [RDS PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html). Aurora and additional stores require evidence; raw location history is privacy-controlled streaming/archive data, not an unlimited transactional table.
