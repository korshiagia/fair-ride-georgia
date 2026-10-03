# Foundation project instructions

The active repository root is `C:/Projects/fair-ride-georgia`. Current scope is specifications, plans and local repository setup. The user authorized creating this project under `C:/Projects`; local Git initialization and a documentation baseline are part of that setup. Do not implement application code, bootstrap infrastructure, install/update global GSD, contact people/providers, spend money or activate cities during this setup request.

Read `.planning/STATE.md`, `.planning/PROJECT.md`, `MASTER-SPEC.md`, `TECHNICAL-SPEC.md`, `DOMAIN-BOUNDARIES.md`, `VALIDATION-AND-LAUNCH-GATES.md`, relevant ADRs and the active phase plan before changes. User instructions take precedence. Preserve other agents' work and use declared ownership/disjoint files.

## Non-negotiable contracts

- Five target cities: Zugdidi, Kutaisi, Batumi, Tbilisi, Rustavi. Maintain separate jurisdictions and city/airport readiness.
- PostgreSQL is authoritative for trip/driver exclusive assignment and immutable balanced money postings. Redis is rebuildable, WebSocket/Kafka delivery is not a durable command acknowledgment.
- Do not claim exactly-once money effects across DB/broker/PSP. Use outbox, consumer deduplication, PSP keys, reconciliation and recovery.
- Keep trip/payment/assignment/safety states separate. Preserve policy version and authorized fare amendments.
- Reject cross-tenant/resource access server-side; staff MFA and sensitive-action audit.
- Low-quality/stale location must not automatically create a waiting/cancellation penalty. PIN/arrival evidence does not guarantee safety.
- Route/identity/payment/incident data minimization and reviewed retention must cover logs, event payloads and backups.
- Domain boundaries are not a mandate for one network service/database per domain. gRPC only for actual process boundaries.
- Keep Kafka architecture; choose managed provider/shape on measured reliability/cost/privacy evidence. Kubernetes needs an ADR and measured trigger.

## Evidence and planning

Label source-backed facts, selected directions, unvalidated hypotheses and external gates. Record source date/effective date/version and access date. No fabricated interview, quotation, legal review, permission, deployment or test outcome. An existing specification or prepared plan is not completed implementation.

GSD-compatible plans require nonempty requirement IDs, explicit files, dependencies, wave, acceptance, must_haves and threat model. Structural validators alone cannot certify requirement coverage or design correctness. Native automatic execution remains disabled; observe actual user authorization for future actions. Copyable commands must match the installed GSD runtime identity; no invented CLI flags.

Use Georgian when communicating with the user. Precise technical documents can remain English. Saved output links should refer to deliverables, not scratch scripts. Work in this root when building the eventual monorepo, after M0 and an implementation instruction.
