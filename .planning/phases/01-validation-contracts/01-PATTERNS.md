# Phase 01: Business, regulatory and product contracts — Pattern Map

**Mapped:** 2026-10-04, Asia/Tbilisi  
**Scope:** Independent local draft preparation; original 01-01/02/03 dependencies, external reviews and M0 remain open. No implementation, provider run, professional acceptance or city activation.  
**Files classified:** 7 recommended draft deliverables. **Document analog coverage:** 7/7 role matches; **application-code analog coverage:** 0/7. Five principal document analogs below are Git-tracked; source-path verification used `git ls-files -- <path>`. There is no application implementation to copy. Existing local economics tools are preparation utilities, not product/API analogs.

## File Classification

These are recommended paths for the new independent plan, not existing contracts. Preserve original 01-03 targets outside `drafts/`.

| New file | Role | Data flow | Closest tracked document analog | Match |
|---|---|---|---|---|
| `docs/contracts/drafts/screen-state-inventory.md` | component specification | request-response / streaming | `MASTER-SPEC.md` §§5,7 | document role-match |
| `docs/contracts/drafts/trip-transition-catalogue.md` | model specification | event-driven / CRUD | `TECHNICAL-SPEC.md` §§3–7 | document role-match |
| `docs/contracts/drafts/city-policy-schema.md` | config specification | transform / request-response | `docs/research/city-evidence.md` §§City-specific readiness, Regulatory follow-up | document role-match |
| `docs/contracts/drafts/api-behavior.md` | route/controller specification | request-response / streaming | `TECHNICAL-SPEC.md` §8 | document role-match |
| `docs/security/drafts/privacy-data-map.md` | model specification | file-I/O / event-driven | `TECHNICAL-SPEC.md` §10 | document role-match |
| `docs/security/drafts/threat-model.md` | middleware/control specification | request-response / event-driven | `TECHNICAL-SPEC.md` §9 | document role-match |
| `docs/reviews/drafts/contract-traceability.md` | test/review specification | batch / transform | `docs/vendors/evidence-index.md` §§Evidence classes, Claim and gate mapping | document role-match |

## Pattern Assignments

### Screen inventory

**Analog:** `MASTER-SPEC.md`, lines 94–110 (journey), 121–134 (screen inventory). Preserve its passenger, driver, operations, fleet and corporate coverage; include scheduled/airport/intercity variants even when permission is unknown. Reuse table structure with explicit stable draft IDs:

`Screen ID | actor | trip/payment/assignment/safety state | action/transition ID | visible result | error/degraded/offline state | accessibility/language | data category | acceptance case`.

Do not present pending/unknown payment as successful completion of the money flow. Manual address entry remains available when location permission is denied.

### Transition catalogue

**Analog:** `TECHNICAL-SPEC.md`, lines 58–84 and §§5–7. Concrete reusable excerpts:

> All state-changing application commands record actor, request ID, idempotency key, expected aggregate version, city-policy version, server decision time and relevant reasons. (line 58)

> A quote can bind to only one trip. Return the authorized current trip or a deterministic conflict on a competing request. (line 84)

Recommended row: `Transition ID | owning domain | actor/resource relationship | source→target state | expected version/generation | guards/eligibility | quote/policy snapshot | durable effects/outbox | rejection | timeout/unknown/recovery | audit/data | acceptance ID`.

Separate trip, assignment, payment and safety machines rather than inventing one combined status. Quote→request→offer→arrival→PIN→start→completion→payment/refund must trace concurrent accepts, two-device distinct-key creation, expired offers, cancellation/start races, stale GPS, PIN replay/brute force and completion/payment divergence. PostgreSQL owns exclusive assignment and balanced immutable postings; Redis/socket/broker delivery is not durable command success.

### City policy schema

**Analog:** `docs/research/city-evidence.md`, lines 28–36 and 86 onward. Copy its independent city/airport status columns, not its public population as operational eligibility. Concrete row excerpt (line 36):

> Rustavi | OPEN-EXTERNAL; transport listing is not a legal opinion | Any Tbilisi airport corridor OPEN-EXTERNAL; no local capability inferred

Fields: `policy ID/version | city/service | pickup jurisdiction | origin/destination/traversed jurisdictions | national/local/operator source IDs | category/eligibility | effective/expiry/recheck | zones/fees/wait/no-show amendments | permission status | accountable owner | activation gate | default disabled`.

Include Zugdidi, Kutaisi, Batumi, Tbilisi and Rustavi separately. Preserve recent national taxi-framework and Zugdidi jurisdiction qualifications from the dated evidence; do not generalize Tbilisi A/B conditions nationwide. Airport access remains separately gated.

### API behavior

**Analog:** `TECHNICAL-SPEC.md`, lines 139–167. Copy these exact policy excerpts:

> The server derives actor/tenant from validated membership, not a client-supplied unrestricted tenant header. (line 141)

> 401 is invalid session, 403 unauthorized relationship, 404 conceals inaccessible objects where appropriate, 409 state/version or idempotency-payload conflict, 422 business/validation rejection, 429 limit with `Retry-After`, 503 temporary unavailability. (line 149)

Recommended row: `Operation ID | purpose/domain | authenticated actor | resource/tenant relationship | request/precondition | durable success boundary | response/error | idempotency scope/payload conflict | deadline/retry/unknown recovery | snapshot/reconnect | compatibility | acceptance IDs`.

Use proposed REST `/v1` conventions, stable localized error codes, current-access checks on replay and per-resource subscription authorization. Endpoint names/payloads are new draft design, never existing APIs. Seven-day response retention is an engineering proposal, not an approved legal schedule; business-effect uniqueness survives response-cache expiry. Keep gRPC for actual process boundaries.

### Privacy data map

**Analog:** `TECHNICAL-SPEC.md`, lines 192–209. Copy the qualification first:

> This is an engineering schedule for legal/DPO approval, not a statement of Georgian statutory periods. (line 194)

Recommended row: `Data ID/category | purpose | subject | source | proposed basis/controller/processor | domain owner | access/purpose restriction | DB/event/object/cache/device/analytics/log/backup surface | vendor/product lineage | retention trigger/status | hold/deletion/export | replay/restore tombstones | transfer/subprocessor | evidence/open gate`.

Do not turn proposed days/months into legal facts. Cover route, PIN/identity, PSP references and incident evidence; exclude plaintext PIN/payment credentials from queues/logs. Immutable postings use minimal pseudonymous business facts with separately managed identity mapping. Provider-specific map storage/display rights can be stricter than internal retention.

### Threat model

**Analog:** `TECHNICAL-SPEC.md`, lines 171–190; relationship semantics in `DOMAIN-BOUNDARIES.md` §4, lines 55–63. Concrete reusable excerpts:

> Personal rides remain private to the passenger even when the passenger is an employee. (`DOMAIN-BOUNDARIES.md`, line 57)

> Background jobs, exports, WebSockets, object-storage signed links and caches require the same tenant/purpose authorization. (`TECHNICAL-SPEC.md`, line 175)

Recommended row: `Threat ID | asset/actor/trust boundary | abuse/race | severity | preventative/detective/recovery control | owner | mapped operation/data/transition | negative acceptance case | residual uncertainty/external dependency`.

Include staff MFA and audited sensitive intervention; effective-dated memberships and earning-beneficiary snapshots; fare tampering, offer/PIN replay, PSP callback/unknown outcomes, post-payout refunds, tenant/export leaks, GPS abuse, evidence deletion/restore and overstated emergency assistance. PIN or arrival evidence cannot guarantee safety or justify a weak-location penalty.

### Draft traceability and review

**Analog:** `docs/vendors/evidence-index.md`, lines 5–14, 50–61, 67–74 and 78–92. Reuse the concrete evidence split:

```text
PUBLIC-PRIMARY: Narrow publisher/document statement, source version and accessed text
PROFESSIONAL: Named dated counsel/accountant/privacy opinion with exact facts
MERCHANT-TERMS: Provider-written company/product/capability/fee/licence confirmation
SYNTHETIC-SANDBOX: Authorized actual provider-environment run; local simulation is different
AUTHORIZED-FIELD: Actual safe, lawful city observations against independent ground truth
```

Use `Requirement | D-ID | draft artifact/section | transition/operation/data/threat IDs | public source IDs | selected direction/hypothesis | acceptance scenario | verification method | actual result/status | external reviewer/gate`. This is a draft consistency package, not `m0-review.md` or M0 acceptance. Structural/link checks prove local consistency only; actual outcomes remain NOT RUN/NOT RECEIVED.

## Shared Patterns

- **Document front matter/status:** `docs/legal/review-brief.md`, lines 1–3: title/version, preparation date, PREPARED/UNREVIEWED, requirement/decision/threat IDs and narrow approval limit. Every draft should name scope, owner, assumptions and pending professional/provider/field evidence.
- **Evidence provenance:** `research/SOURCE-REGISTER.md`, lines 7–8: `ID | Source / direct link | Publisher and type | Source/effective date | Scoped evidence and limitation`; add access date, version and supersession/change trigger. Preserve historical rows; dated 2026-10-04 claim updates refine prior extraction limits rather than erasing them.
- **Source and decision precedence:** user instructions/AGENTS contracts are controlling. Existing canonical master/technical/domain/gate/ADR directions constrain drafts; newer claim-specific public evidence refines dated factual limitations. Record conflicts and proposed resolution explicitly; a draft cannot silently supersede an ADR, permission or acceptance gate.
- **Money/recovery:** `docs/legal/funds-flow.md` §§State and authoritative evidence, Scenario walkthrough, Daily reconciliation; `TECHNICAL-SPEC.md`, line 133: persist intent, mark uncertain PSP outcome UNKNOWN, query/reconcile before another charge. Customer refund funding and lawful beneficiary recovery after payout are separate obligations. Never assume split reversal or platform custody authority; never claim DB/broker/PSP end-to-end exactly once.

## No Application Analog Found

All seven deliverables describe future product contracts. No controller, service, middleware, mobile UI, product OpenAPI or product regression suite exists to supply implementation excerpts. The document role labels above classify planning responsibilities, not existing application files. Use current tracked specifications/public-evidence ledgers and explicitly labeled design proposals.

## Metadata

**Search scope:** tracked root specifications, `adr/`, `docs/research/`, `docs/legal/`, `docs/vendors/`, `research/`, Phase 01 context/research/plans/summary. No existing `docs/contracts/` or `docs/security/` implementation contracts found. Project `.codex/skills/` and `.agents/skills/` directories absent.  
**Principal document analogs:** five (`MASTER-SPEC.md`, `TECHNICAL-SPEC.md`, `DOMAIN-BOUNDARIES.md`, `docs/research/city-evidence.md`, `docs/vendors/evidence-index.md`); supporting evidence/status patterns are explicitly cited above.  
**Verification:** analog paths are tracked; quoted excerpts and section references derived from local documents. No external source refresh, product test or professional review performed by this mapping task. Original 01-03 reviewed targets and original plan gates are preserved.
