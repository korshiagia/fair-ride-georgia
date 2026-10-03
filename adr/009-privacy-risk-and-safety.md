# ADR-009 — Minimized location evidence, explainable risk and staffed safety

Date: 2026-10-03. Status: **Proposed baseline; privacy/legal/operations gates open**. Decision owner: safety/privacy lead, with security and local legal review.

## Context

Exact location, contact details, identity documents and safety evidence create substantial misuse risk. GPS can be inaccurate or spoofed. PIN/geofence features cannot guarantee personal safety. Automated sanctions can wrongly restrict income or mobility.

## Decision

Collect only approved purpose-bound evidence, separate ephemeral presence from durable arrival/start/end facts, and apply category-specific retention/deletion. TECHNICAL-SPEC durations are proposals, never statutory claims. Approve lawful bases, transfer contracts, DPIA, access/export/erasure and case-specific legal holds before live collection.

Enforce object/tenant/purpose authorization, least privilege, audited evidence access and narrow break-glass handling. Use versioned rules with understandable reason codes, reversible restrictions, human review and appeal. OWASP supports default-deny per-request permissions. [Authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html).

Device integrity, location plausibility and arrival/PIN evidence are corroborating signals. Play Integrity provides app/device risk signals, not proof of true GPS or safe participants. [Integrity overview](https://developer.android.com/google/play/integrity/overview).

## Gates and validation

All operating hours need trained safety/support coverage and approved incident escalation. Emergency calling is accessible; official emergency-service integration is not claimed without agreement. Test spoof/replay signals, low-accuracy disputes, insider access, tenant exports, deletion propagation and restore-time deletion replay. Do not store PIN/tokens/precise coordinates in ordinary logs or enable sensitive-screen session replay without review. Launch requires staffing/drills as well as software controls.
