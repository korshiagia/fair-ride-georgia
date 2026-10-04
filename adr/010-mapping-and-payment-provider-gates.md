# ADR-010 — Mapping and payments selected by Georgian capability evidence

Date: 2026-10-03. Status: **Open provider selection gate**. Decision owner: product/platform/finance; legal approves licenses and agreements.

Public-evidence refinement: **2026-10-04**; provisional documentation/candidate order selected, commercial eligibility and measured quality still open. [Dated report and exact source ledger](../research/PUBLIC-PROVIDERS-2026-10-04.md).

## Context

Routing/address quality determines pickup trust, pricing and dispatch economics. Payment API availability does not imply approved ride-hailing collection, split payouts, refunds or settlement terms. No provider has been commercially approved for this platform.

## Decision

Define routing/search/geocoding and payment-provider interfaces before vendor-specific integration. Compare at least two candidates with the same Georgian corpus: Georgian/Latin spelling, numbered entrances, informal landmarks, one-way streets, prohibited turns, airport access, intercity routes, bridges, urban canyon and Batumi seasonal traffic. Include route/ETA error distributions, accessibility, outages, rate limits, client SDK support, operational latency and cost per completed ride.

Licensing is a hard capability. Google Routes restricts caching/display use; Mapbox distinguishes temporary results from permanently licensed geocodes. A stored trip path, audit reconstruction or mixed-provider map cannot be presumed permitted. [Google Routes policies](https://developers.google.com/maps/documentation/routes/policies), [Mapbox geocoding storage](https://docs.mapbox.com/api/search/geocoding/).

PSP evaluation covers merchant approval, GEL settlement, saved-card/consent rules, preauth/partial capture, idempotency/query recovery, webhook verification, refunds/chargebacks, split/payout availability, reconciliation exports, sandbox and support. Verify documentation against written merchant confirmation; cash and corporate invoicing have distinct legal/accounting gates.

## Consequences

An adapter supports migration and controlled failover; it does not permit mixing licensed data unlawfully or transparent PSP retries that double charge. Contracts record source/provider versions and permissible retention. Commercial commitment to a map, PSP, identity, SMS or AWS region waits for evidence/cost review; provisional documentation choices below are permitted planning work. No new credentials, bank enrollment or chargeable benchmark environment is created by this record.

## Selected public-research direction — 2026-10-04

- **BOG Payment Manager first** for specifying operation-key, signed-callback and UNKNOWN recovery; **TBC E-Commerce** is the documented capability/public-price comparator. **UNIPAY** is a registry-backed research alternative, not an eligible full-service provider. No mandatory UNKNOWN becomes PASS and no eligible weighted score exists.
- **Google Maps/Geocoding/Routes first** as a coherent documentation stack, with appropriate Pro SKUs for traffic-aware features. No claim of superior Georgian address/ETA quality is made. Route-matrix billing scales with origin×destination elements; budget candidate fanout and failed bookings, not only completed rides.
- **Mapbox conditional alternative**: its published vehicle-use, offline redistribution and temporary/permanent data constraints need exact product/licence review. Search Box's published language list does not include Georgian; this is not proof that every Mapbox product lacks Georgian data.
- Retain provider provenance per derived value. Customer-provided coordinates and approved own arrival/trip facts are distinct from provider route geometry, duration, labels and screenshots. Google Routes' limited 30-day lat/lng exception cannot justify indefinite polyline archives. Privacy/licence retention applies to logs, events, caches and backups.
- Prefer manual correction and an explicit unavailable/uncertain estimate before a separately licensed fallback. A fallback or provider switch may not reuse prohibited vendor content, invent an ETA or confer airport pickup rights.

Public reference choices and synthetic cost scenarios are in the report's PP ledger. They do not authorize API usage/accounts, certify five-city quality, settle bank fees/reserves or choose a contracted vendor. Revisit the direction after actual merchant/licence evidence and the shared five-city corpus.
