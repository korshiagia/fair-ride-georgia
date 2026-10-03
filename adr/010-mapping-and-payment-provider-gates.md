# ADR-010 — Mapping and payments selected by Georgian capability evidence

Date: 2026-10-03. Status: **Open provider selection gate**. Decision owner: product/platform/finance; legal approves licenses and agreements.

## Context

Routing/address quality determines pickup trust, pricing and dispatch economics. Payment API availability does not imply approved ride-hailing collection, split payouts, refunds or settlement terms. No provider has been commercially approved for this platform.

## Decision

Define routing/search/geocoding and payment-provider interfaces before vendor-specific integration. Compare at least two candidates with the same Georgian corpus: Georgian/Latin spelling, numbered entrances, informal landmarks, one-way streets, prohibited turns, airport access, intercity routes, bridges, urban canyon and Batumi seasonal traffic. Include route/ETA error distributions, accessibility, outages, rate limits, client SDK support, operational latency and cost per completed ride.

Licensing is a hard capability. Google Routes restricts caching/display use; Mapbox distinguishes temporary results from permanently licensed geocodes. A stored trip path, audit reconstruction or mixed-provider map cannot be presumed permitted. [Google Routes policies](https://developers.google.com/maps/documentation/routes/policies), [Mapbox geocoding storage](https://docs.mapbox.com/api/search/geocoding/).

PSP evaluation covers merchant approval, GEL settlement, saved-card/consent rules, preauth/partial capture, idempotency/query recovery, webhook verification, refunds/chargebacks, split/payout availability, reconciliation exports, sandbox and support. Verify documentation against written merchant confirmation; cash and corporate invoicing have distinct legal/accounting gates.

## Consequences

An adapter supports migration and controlled failover; it does not permit mixing licensed data unlawfully or transparent PSP retries that double charge. Contracts record source/provider versions and permissible retention. Do not pin a map, PSP, identity, SMS or AWS region until evidence and costs are reviewed. No new credentials, bank enrollment or chargeable benchmark environment is created by this record.
