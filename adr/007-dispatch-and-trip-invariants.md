# ADR-007 — Durable assignment invariants and generation fencing

Date: 2026-10-03. Status: **Proposed mandatory correctness baseline**. Decision owner: trip/dispatch lead.

## Context

Two drivers can accept the same trip; one driver can receive competing trips; delayed mobile commands can arrive after expiry/rematch. Redis lock ownership or broker partition ownership cannot establish a durable business assignment.

## Decision

Core PostgreSQL transactions commit all assignment decisions. Unique active-assignment constraints cover trip, driver and vehicle. Initial offers are sequential: one live offer per trip, driver and vehicle, with DB-backed reservation, server-time expiry and attempt generation. Use stable lock order, conditional state/version updates and fencing generations. A stale worker or client cannot accept or start an old assignment. PostgreSQL supports uniqueness, partial indexes and explicit concurrency semantics. [Constraints](https://www.postgresql.org/docs/current/ddl-constraints.html), [isolation](https://www.postgresql.org/docs/current/transaction-iso.html).

Offer leases expire; committed assignments remain until an explicit guarded release/terminal transition. No heartbeat timeout reassigns an in-progress ride. Arrival and start require current assignment generation, with durable evidence and one-use PIN consumption. Redis and matching workers propose candidates; core verifies current eligibility at commit.

## Validation and consequences

Property/concurrency tests assert no duplicate active trip/driver/vehicle assignment across cancellation/accept/start/rematch races, duplicate requests, expired offers, process crash and broker/Redis failure. Observe contention and conflict rates. Ranking uses documented pickup ETA/idle opportunity terms with cohort fairness checks and preaccept economic visibility. Parallel offers require a separate measured optimization decision and preserve the same authoritative commit rules. Neither fairness ranking nor emergency operator access may bypass invariants.
