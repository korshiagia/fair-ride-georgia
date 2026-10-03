# ADR-006 — AWS/ECS operations and evidence-based infrastructure growth

Date: 2026-10-03. Status: **User infrastructure direction; region/topology/cost proposals**. Decision owner: platform lead; finance/legal review region and cost.

## Context

The team needs repeatable releases, observable failure and verified disaster recovery. Kubernetes expertise, scale and economics are not established. A region choice affects Georgian mobile latency, vendor availability and personal-data transfers.

## Decision

Use Docker workloads on AWS ECS initially, Terraform for reviewed infrastructure, separate environment/account isolation, private data services, least-privilege task identity and encrypted state/backups. Select region through Georgia device RTT, service support, legal transfer assessment and complete cost model. Critical stateless services span AZs with explicit deployment rollback. AWS documents ECS circuit-breaker health checks and rollback behavior. [ECS deployment circuit breaker](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-circuit-breaker.html).

Use OpenTelemetry collector/instrumentation, Grafana operational dashboards and scrubbed Sentry errors. GitHub Actions promotes immutable tested images with short-lived OIDC AWS credentials. [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/), [GitHub OIDC](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws).

## Gates and review triggers

RPO/RTO/SLO numbers in TECHNICAL-SPEC are proposed acceptance targets, not achieved claims. Required evidence includes AZ failure, DB restore, broker outage, Redis rebuild, payment reconciliation and regional restore drills. Terraform state/plan handling remains confidential even if display values are masked. [Terraform sensitive state](https://developer.hashicorp.com/terraform/language/manage-sensitive-data).

Adopt Kubernetes only with a demonstrated ECS limitation, owning operational team, security/upgrade plan and favorable total lifecycle cost. No cloud account or chargeable infrastructure is provisioned by this document.
