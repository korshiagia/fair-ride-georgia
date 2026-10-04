# ADR-008 — Bound quotes, financial journals and provider uncertainty

Date: 2026-10-03. Status: **Proposed baseline; accounting and merchant launch gates open**. Decision owner: finance/backend lead; accountant/legal approve accounting policy.

Public-evidence refinement: **2026-10-04**. See [current provider research](../research/PUBLIC-PROVIDERS-2026-10-04.md). This changes the proposed design reference, not accounting approval or commercial eligibility.

## Context

Trust depends on explaining the agreed fare and driver payout. Cash, card and corporate invoicing have different collection/credit facts. Trip completion is independent of capture, bank settlement and later disputes.

## Decision

Bind immutable quote/fare/commission/cancellation versions when booking. Normal traffic or driver route choice cannot silently alter an upfront price. Destination/stops changes require a passenger-approved versioned amendment; disclosed wait/toll exceptions need evidence. Money uses integer minor units and deterministic approved rounding.

Keep trip, payment state and append-only double-entry ledger separate. Every journal effect balances, has a unique business reference and posting-rule version. Refunds/chargebacks/support adjustments append corrections. Cash collection does not become PSP settlement. Provider operations use durable intent, stable reference and `UNKNOWN` outcome recovery through query/reconciliation before retrying a charge or payout.

## Gates and consequences

Accountant/legal must decide principal/agent model, driver contracting/status, taxes, invoice/receipt issuer, chart of accounts, commission debt, driver payouts and any corporate credit policy. No wallet/escrow is implied. PSP docs alone do not approve this business model or merchant features. TBC documents recurring payments and preauthorization, while activation is merchant-specific. [Recurring API](https://developers.tbcbank.ge/reference/post_v1-tpay-payments-execution), [merchant activation FAQ](https://developers.tbcbank.ge/docs/e-commerce-faq).

Test duplicate and out-of-order callbacks, timeout-after-capture, partial refund, chargeback, cash debt, payout timeout and daily trip/journal/PSP/bank reconciliation. Real-money launch waits for signed provider capabilities and approved accounting rules.

## Publicly informed design refinement — 2026-10-04

Use BOG Payment Manager as the first documentation reference for durable operation keys, signed raw-body callback verification and queried action reconciliation; TBC is the comparison path. This is a specification choice, not a bank contract. [BOG callback](https://api.bog.ge/docs/en/payments/standard-process/callback/), [payment details](https://api.bog.ge/docs/en/payments/standard-process/get-payment-details/).

BOG's published split flow does not reverse completed/in-progress transfers when the original payment is refunded. Therefore immediate distribution is not the default refund-safe proposal. Specify customer refund funding separately from any lawful recovery from the driver/fleet. Prefer a reviewed bank-approved payout schedule or approved direct-beneficiary flow with funded refunds; defer the choice if neither is authorized. A payout delay must not become unapproved platform custody/wallet activity. [Split constraints](https://api.bog.ge/docs/en/payments/split-payment/).

The full/partial refund-after-payout cases F-04/05 remain required. Stable keys do not establish exactly-once effects across the DB/broker/provider; key lifetime, payload mismatch, replay, finality, merchant availability and actual test results remain unknown. Refund/payout reserves and settlement delays are working-capital constraints, separate from fees and revenue.
