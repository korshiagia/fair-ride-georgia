# Future monorepo structure

Baseline: 2026-10-03. Status: proposed structure for approval during the first implementation phase. This document describes future files; it does not create empty app scaffolding, install dependencies or initialize a remote repository.

One monorepo supports shared API/event contracts, atomic client/server changes and a small engineering team. Different languages retain their native build systems. Do not force Dart/Kotlin/Go into a JavaScript build tool. Path-aware CI schedules affected builds, while integration/contract tests cover shared interfaces. Backend has one Go module initially; independent module/versioning is introduced only when a genuine library/service lifecycle requires it.

```text
fair-ride-georgia/
├── README.md                       # product entrypoint, local onboarding
├── AGENTS.md                       # approved agent rules and ownership constraints
├── CODEOWNERS
├── .github/
│   ├── workflows/                  # build, test, security, release, OIDC deployment
│   └── pull_request_template.md
├── .planning/                      # GSD state, requirements, phases, verification
├── docs/
│   ├── foundation/                 # approved master/business/technical documents
│   ├── adr/
│   ├── contracts/                  # state-transition and compatibility catalogue
│   ├── runbooks/                   # incidents, PSP unknowns, restore, safe rollout
│   ├── security/                   # threat model, access matrix, privacy data map
│   └── operations/                 # city onboarding, support/safety, fare approval
├── contracts/
│   ├── openapi/                    # REST source; generated-client diff checked
│   ├── proto/                      # only actual inter-workload gRPC contracts
│   ├── events/                     # envelope and domain event schemas
│   └── examples/                   # synthetic fixtures; no real PII or credentials
├── apps/
│   ├── backend/
│   │   ├── go.mod                  # one pinned module / toolchain
│   │   ├── go.sum
│   │   ├── cmd/
│   │   │   ├── core/
│   │   │   ├── location-dispatch/
│   │   │   ├── realtime/
│   │   │   ├── worker/
│   │   │   └── migrate/
│   │   ├── internal/
│   │   │   ├── identity/           # each domain: domain, application, adapters
│   │   │   ├── supply/
│   │   │   ├── policy/
│   │   │   ├── pricing/
│   │   │   ├── trip/
│   │   │   ├── dispatch/
│   │   │   ├── telemetry/
│   │   │   ├── safety/
│   │   │   ├── ledger/
│   │   │   ├── payment/
│   │   │   ├── corporate/
│   │   │   ├── fleet/
│   │   │   ├── booking/
│   │   │   ├── support/
│   │   │   ├── privacy/
│   │   │   ├── communication/
│   │   │   ├── routing/
│   │   │   ├── workflows/          # named cross-domain transactional coordinators
│   │   │   └── platform/           # clock, IDs, DB unit-of-work, auth context, OTel
│   │   ├── migrations/             # global ordered manifest; ownership per schema
│   │   └── tests/                  # invariants, integration, architecture boundaries
│   ├── web-consoles/               # TypeScript/React/Next.js, approved UX boundaries
│   │   ├── app/
│   │   ├── features/
│   │   └── tests/
│   ├── passenger/                  # Flutter/Dart Android+iOS, feature-first layers
│   │   ├── lib/
│   │   ├── android/
│   │   ├── ios/
│   │   └── integration_test/
│   └── driver-android/             # Kotlin/Compose + foreground location service
│       ├── app/
│       ├── core/
│       ├── feature/
│       └── benchmark/
├── packages/
│   ├── api-clients/                # generated TS/Dart/Kotlin, schema version tracked
│   ├── web-design-system/          # web-only accessible tokens/components
│   └── policy-fixtures/            # approved synthetic city/fare/access test cases
├── infra/
│   ├── terraform/
│   │   ├── modules/                # VPC, ECS, DB, Redis, Kafka, secrets, telemetry
│   │   └── environments/           # dev/staging/prod; no secrets or state in Git
│   ├── docker/
│   └── observability/              # collector config, dashboards, alert definitions
├── tests/
│   ├── contracts/
│   ├── journeys/                   # passenger-driver-ops complete workflows
│   ├── concurrency/                # offer races, duplicate effects, assignment fencing
│   ├── load/
│   ├── resilience/                 # DB/broker/Redis/PSP outages, restore drills
│   ├── security/                   # tenant/object ACL, abuse cases
│   └── mobile-field/               # device matrix, city GPS/network/battery evidence
├── tools/                          # approved generators and safe local helpers
└── test-data/                      # synthetic, minimized, licensed fixtures
```

Native driver iOS is not an empty directory on day one. If its commercial and device evidence gate passes, add `apps/driver-ios/` with Swift/SwiftUI and Apple platform tests through ADR-005. No additional languages or frameworks are presumed.

## Module layout and migration policy

Each backend module uses `domain/` for pure business rules/value objects, `application/` for commands and public interfaces, and `adapters/` for persistence/transport/provider integration. Transport validation does not replace domain guards. The shared `platform/` directory must not accumulate a universal business model. Architecture checks prevent importing another module's storage adapters; approved cross-module workflows are visible and reviewed.

Use a global ordered migration manifest to make deployment deterministic, with schema/module ownership and non-destructive expand/contract upgrades. Schema changes support the previous deployed server/client contract during rolling releases. Test restore and migration on representative synthetic data. Money/history migrations require reconciliation and dedicated review; a rollback is not a destructive reversal of financial history.

Generated clients/schemas are reproducible; CI checks regeneration and breaking compatibility. Web, Dart and Kotlin cannot share runtime UI/business objects, but they share semantic contracts and synthetic examples. Mobile clients tolerate old servers/new additive fields; server changes respect the approved supported-app-version window. Flutter's architecture guide supports intentional layered structure; exact state-management libraries remain a compatibility/maintainability choice, not an accidental dependency. [Flutter architecture](https://docs.flutter.dev/app-architecture).

## CI and review controls

Changes to dispatch state transitions, ledger posting rules, access policy, fare policy and migrations require named domain review. Required checks cover contracts, genuine behavioral/invariant tests, lint/type checks, affected platform builds, dependency/image/IaC scans and a relevant integration journey. Critical fixes receive targeted fault/race coverage, not tests that merely copy implementation details. APK/iOS/web/backend artifacts record revision, schema versions and SBOM; immutable artifacts are promoted across environments.

Repository credentials, app signing and AWS roles remain outside Git. GitHub deploy credentials use short-lived OIDC and narrowly scoped trust. [GitHub AWS OIDC](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws). Terraform plans/state require restricted handling even when values are marked sensitive. [Terraform sensitive data](https://developer.hashicorp.com/terraform/language/manage-sensitive-data).

The active project is initialized at `C:/Projects/fair-ride-georgia`. Foundation documents remain canonical at the repository root because current plans reference them there. Any future move into `docs/foundation/` must update and verify all plan references in the same change. GSD execution records remain distinct from product and architecture contracts: planning tooling orchestrates work, while these contracts define the system to be built.
