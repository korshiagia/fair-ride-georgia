# Phase 1: Business, regulatory and product contracts — Context

Gathered: 2026-10-03. Status: brief-derived planning baseline; execution and external evidence not completed.

<domain>
## Phase boundary
Deliver reviewed business/legal/provider/product contracts for M0. Requirements: BIZ-01, BIZ-02, BIZ-03, BIZ-04, VND-01, PRD-01. Prepare reviewable forms and desk research first; professional opinions, field data, provider terms and budget commitment remain actual future evidence. No app code, live payments, deployment or city activation.
</domain>

<decisions>
## Implementation decisions
### Scope and evidence
- **D-01:** Cover Zugdidi, Kutaisi, Batumi, Tbilisi and Rustavi independently; local and airport permissions cannot be inferred from another city.
- **D-02:** Keep facts, dated sources, chosen directions and hypotheses distinct; interviews and legal/provider approval require actual evidence.
### Economics and trust
- **D-03:** Model 15% commission as a sensitivity input, no launch subscription; measure driver net online-hour economics and platform contribution/cash flow without double-counting.
- **D-04:** Written Georgian legal/accounting review must establish principal/agent, tax/receipt, driver relationship and funds flow; no assumed stored-value/custody or bank capability.
- **D-05:** Preserve separate trip/payment/assignment/incident states; durable exclusive assignment, reproducible quotes, minimal arrival evidence, pickup PIN, appeal and human safety ownership are mandatory.
### M0 gate
- **D-06:** Phase 2 implementation stays blocked until M0 evidence is reviewed and a later user instruction authorizes implementation; preparing this foundation needs no additional approval.
### the agent's Discretion
Choose research instruments, candidate shortlists and report presentation. Sampling quotas below are initial evidence-collection targets, not statistical representativeness or approved spending. Tradeoffs can change through documented decisions, without dropping invariants.
</decisions>

<specifics>
Initial research design: 15 drivers and 20 riders per city, stratified by zone/time/category and multihoming; 10 driver seven-day cost diaries per city. Propose a second Batumi season cohort and explicitly report missing seasonal coverage. Adjust recruitment feasibility/consent and budget in the research protocol before authorized fieldwork. Do not make driver-income or airport-access promises.
</specifics>

<canonical_refs>
Read `.planning/PROJECT.md`, `REQUIREMENTS.md`, `ROADMAP.md`, `MASTER-SPEC.md`, `BUSINESS-MODEL.md`, `TECHNICAL-SPEC.md`, `DOMAIN-BOUNDARIES.md`, `VALIDATION-AND-LAUNCH-GATES.md`, `research/MARKET-REGULATORY.md`, `research/SOURCE-REGISTER.md`, `adr/007-dispatch-and-trip-invariants.md`, `adr/008-fares-ledger-and-payments.md`, `adr/009-privacy-risk-and-safety.md`, `adr/010-mapping-and-payment-provider-gates.md`. Root documents are canonical in this bundle; plans create subsequent reviewed contracts under `docs/`.
</canonical_refs>

<code_context>
No application repository, field interview, professional opinion, provider contract or executable app test exists. The foundation contains desk research and illustrative economics. Native plan structure checks are distinct from evidence validation.
</code_context>

<deferred>
Application development, final tariffs, signed vendor/driver contracts and public city activation occur later. Conditional driver iOS, subscriptions and learned matching retain their explicit triggers. Preparing outreach text does not authorize sending it.
</deferred>
