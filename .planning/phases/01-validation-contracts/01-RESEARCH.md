# Phase 1 research contract

Date: 2026-10-03. Status: desk-research baseline; new field/professional/provider evidence pending.

## Inputs and conclusions

`research/MARKET-REGULATORY.md` and `SOURCE-REGISTER.md` hold the dated primary-source review. Treat the earlier chat's commission/income/permit figures according to that register, never as newly measured facts. The selected five-city scope requires jurisdiction-specific evidence. `BUSINESS-MODEL.md` defines the formula boundaries and illustrative 15% scenario; it does not establish commercial viability. `TECHNICAL-SPEC.md` and ADRs define correctness and privacy contracts, not working software.

## Research to perform

| Question | Method and output | Evidence limit |
|---|---|---|
| Where can eligible drivers legally accept pickups? | Current official municipal/national rules and airport access terms, effective dates, written professional interpretation, five-city matrix | Absence of a discovered rule is not permission; no airport entitlement inferred from an API/map |
| Do fair economics and reliable pickup matter enough to switch? | Consented city/shift interviews, driver cost diaries, rider booking-friction samples; anonymized findings and limitations | Convenience samples are directional; no fabricated market share or causal claim |
| Can commission sustain both parties? | Reproducible model with fare/hours/cost distributions, idle/deadhead time, PSP/cash loss, tax treatment and monthly funding needs | GMV differs from recognized revenue; assumed costs remain marked until replaced |
| Can a PSP support the reviewed model? | Capability matrix and sandbox evidence for auth/capture/refund/late outcome/payout, beneficiary and split reversal; signed relevant terms later | Public API documentation does not guarantee merchant approval, tariffs or payout permissions |
| Can maps work lawfully and accurately? | Licensed five-city pickup/ETA/address test corpus, permitted storage and fallback evidence | Do not retain vendor routes or mix map outputs contrary to licensing |
| Are product contracts implementable? | State/actor/invariant table, screen inventory, API behavior, privacy data inventory, threats and acceptance mapping | A plan review does not certify security, legal compliance or launch readiness |

## Primary-source starting points

Recheck relevant official sources at execution time and retain exact effective/access dates. Use [Matsne](https://matsne.gov.ge/en), [National Bank of Georgia](https://nbg.gov.ge/en), [Tbilisi taxi portal](https://taxi.tbilisi.gov.ge/), the relevant municipality/airport's official current terms, [TBC developer documentation](https://developers.tbcbank.ge/), and each mapping provider's official licensing/capability documentation. These are starting points, not assertions that a linked homepage answers a particular legal question. Preserve full claim-specific URLs in the evidence register. External outreach requires authorization when the task reaches it.

## Report and decision policy

Every input carries owner, date, city/shift/season scope, observed/assumed status and reproducibility. Store raw consented records in a reviewed restricted evidence store; the repository gets pseudonymized aggregates and evidence references. Reports preserve adverse outcomes and disagreement. Vendor scoring must weight mandatory capability first, then cost/quality; a cheap provider failing funds-flow/retention terms cannot win. M0 review must identify the actual responsible business owner, counsel/accountant and technical/security reviewers.
