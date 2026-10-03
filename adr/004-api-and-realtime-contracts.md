# ADR-004 — REST commands, gRPC workload calls and reconnectable realtime

Date: 2026-10-03. Status: **User protocol direction; detailed contracts proposed**. Decision owner: API/client leads.

## Context

Mobile clients update less frequently than backend releases and routinely lose connectivity. WebSocket messages can be lost, duplicated or reordered. Commands require understandable errors, replay safety and authorization.

## Decision

Use versioned REST/JSON/OpenAPI externally, including driver command/location interfaces. Use gRPC/Protobuf only across actual internal workload boundaries, with workload identity, bounded messages, explicit deadlines and cancellation. gRPC requires a project-defined deadline policy. [Deadline documentation](https://grpc.io/docs/guides/deadlines/).

Use authenticated WebSockets for authorized trip/driver/tenant updates. A durable core snapshot carries trip version, assignment generation and permitted actions. Reconnect starts with a snapshot and cursor; gaps force refetch. Notifications and push never replace source-of-truth state. REST commands include scoped idempotency key, stable payload and expected aggregate version; error codes are stable and localized messages are separate.

## Consequences and validation

Do not expose domain tables or hidden risk scores. Define event/envelope and REST examples, finite retries, unknown-payment handling and supported mobile contract window. A socket subscription must enforce object/tenant permission and respond to membership removal. Test connection drain, network loss, old client/new server, duplicate transitions and cursor gaps. Internal core modules do not pay RPC latency for local calls. Authenticated Next.js console responses require deliberate cache behavior across replicas. [Next.js self-hosting](https://nextjs.org/docs/app/guides/self-hosting).
