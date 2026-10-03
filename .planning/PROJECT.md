# Fair Ride Georgia

## What This Is

A complete production-grade ride-hailing platform for Zugdidi, Kutaisi, Batumi, Tbilisi and Rustavi. Driver-friendly transparent economics, reproducible fares, proof of arrival, pickup PIN, human-reviewed safety/disputes, corporate/fleet and scheduled airport/intercity capabilities are in the committed product scope. Passenger Flutter Android/iOS, driver native Kotlin Android and TypeScript/React/Next.js web consoles share documented contracts.

The active repository root is `C:/Projects/fair-ride-georgia` and contains foundation specifications and local project setup only. No application implementation, live infrastructure, vendor contract, field research or launch has been performed.

## Core Value

A rider gets a reliable transparent journey and a driver gets explainable sustainable earnings, with correct assignments and money even when networks or providers fail.

## Requirements

### Validated

None yet. Specifications and desk research are not proof of implemented/operational capabilities.

### Active

- [ ] Deliver all 78 v1 requirements in REQUIREMENTS.md with evidence and traceability.
- [ ] Establish production infrastructure, security, finance, privacy and operational contracts before city activation.
- [ ] Support all five cities with individually reviewed local rules; allow readiness-gated activation.
- [ ] Preserve a modular monolith foundation with independently scalable location/dispatch computation and realtime workloads.

### Out of Scope

- Disposable MVP, one service/database per domain, speculative Kubernetes or active-active multi-region.
- Acting as a bank or issuing transferable stored value without a separate authorized legal model.
- Guaranteed driver income, guaranteed airport access or 112 integration absent supporting evidence/contracts.
- Native driver iOS, learned dispatch and subscriptions until their separately documented triggers.

## Business Context

Primary users: riders, individual drivers, fleet managers, corporate travel administrators and staffed operators. Initial cities were selected by the user on 2026-10-03. Proposed commission economics use a 15% modeling input, not a validated offer. No subscription at launch. Default activation order Kutaisi→Zugdidi→Batumi→Tbilisi/Rustavi is provisional and changes if liquidity/permissions show a better sequence.

Planning baseline: 15 product/engineering roles; contracted legal/finance/security; staffed operations and incident escalation; 12–15 month horizon; 4.95–6.00m GEL illustrative envelope. All staffing/cost/rate inputs need actual quotes and monthly cash-flow modeling. See BUSINESS-MODEL.md, not a spending approval.

Success: city/hour fulfillment, pickup ETA, driver online-hour economics, positive routine contribution, retained users, reconciled financial outcomes, safety response and measured technical SLOs. Avoid vanity registration/TAM assumptions.

## Context

Latest user instruction is authoritative. Prior ChatGPT material is context and contains hypotheses. GSD Core locally installed is @opengsd/gsd-core 1.15.0, audited in GSD-WORKFLOW.md. This is a brief-driven manually prepared compatible foundation, not a claim that native new-project/execute workflows completed.

Read MASTER-SPEC.md, BUSINESS-MODEL.md, TECHNICAL-SPEC.md, DOMAIN-BOUNDARIES.md, adr/, research/SOURCE-REGISTER.md and VALIDATION-AND-LAUNCH-GATES.md. Read STATE.md first when resuming.

## Constraints

- Scope: full product program, no application code in this request.
- Architecture: Go; PostgreSQL/PostGIS source of truth; Redis projections; Kafka-compatible events/outbox; external REST, actual cross-process gRPC, WebSockets recovery.
- Deployment: AWS/Terraform/Docker/ECS initially; cloud region and event-broker sizing after provider/privacy/cost validation.
- Quality: atomic ledger/assignment, idempotency, authorization, privacy, restore, incident handling and accessibility are release invariants.
- Evidence: do not fabricate interviews, quotes, signed permissions, current versions or test outcomes.
- Communication: Georgian user-facing summary; English precise technical/research artifacts with Georgian executive context.
- External action: preparing research materials is authorized; actually contacting participants/providers or spending/deploying requires specific authorization when execution reaches that action.

## Key Decisions

| Decision | Rationale | Outcome |
|---|---|---|
| Five-city production program | User specified all five cities | Defined scope |
| Modular Go core with workload split | Scale without premature distributed business transactions | Selected architecture direction, ADR-001 |
| Durable PostgreSQL assignment and ledger | Redis/events cannot establish money/exclusive assignment truth | Selected invariant |
| Flat commission modeling before subscription | Preserve driver volume risk transparency | Proposed business baseline; BIZ-02/03 validation |
| Rolling GSD planning | Detailed future plans become stale without implementation evidence | Selected process; initial phases 1–2 have native plans |
| ECS initially | Team/operating simplicity; Kubernetes needs evidence | Selected direction; region/cost gate open |

## Evolution

After each phase, mark requirements complete only with implemented or reviewed evidence, update decision outcomes, record new constraints and review city readiness. At each milestone audit finance/safety/privacy/domain integration and scope. Change a contract through ADR + affected requirement + plan + verification update together. A future user correction overrides this planning assumption and must be propagated across the pack.

Last updated: 2026-10-03.
