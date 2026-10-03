# Product, business and architecture decision register

Date: 2026-10-03. Names below are responsible roles until people are assigned. Accepted user direction differs from a proposed engineering/business choice and an open external gate. A decision marked proposed is a concrete recommendation; it is not an observed outcome or signed permission.

| ID | Decision | Status | Owner | Revisit/closure trigger |
|---|---|---|---|---|
| D-01 | All five cities: Zugdidi,Kutaisi,Batumi,Tbilisi,Rustavi | User-defined | Product | Explicit scope change |
| D-02 | Full production product, readiness-gated geographic activation | User-defined + selected release method | Product/ops | City quality/service evidence |
| D-03 | Kutaisi→Zugdidi→Batumi→Tbilisi/Rustavi tentative order | Selected-proposed | Ops | Supply/demand/permissions indicate better order |
| D-04 | Transparent per-trip commission;15% modeling input | Selected-proposed | Finance/product | Actual tax/vendor/driver/cash contribution results |
| D-05 | No subscription at initial launch | Selected-proposed | Product | Sustained volume and fair break-even disclosure |
| D-06 | Principal/agent, driver relationship and invoice/tax responsibilities | Open-external | Counsel/finance | Written reviewed contracts and funds path |
| D-07 | Licensed PSP/acquirer; no autonomous stored-value wallet | Selected boundary; vendor open | Finance/payment | Signed capabilities, legal review, sandbox evidence |
| D-08 | 15 product/engineering roles plus specialists/staffed ops | Selected-proposed | Engineering/product | Actual recruitment, runway and coverage matrix |
| D-09 | 12–15mo/4.95–6.00m GEL illustrative program envelope | Selected-proposed | Finance/product | Bottom-up quotes/ramp/working capital schedule |
| D-10 | GSD Core1.15.0 local workflow; no automatic lifecycle execution | Audited selected tooling | Engineering | Runtime upgrade tested in separate change |
| D-11 | Go modular core + workload isolation | Selected-proposed architecture | Architecture | ADR-001 extraction/operating evidence |
| D-12 | PostgreSQL/PostGIS truth; Redis rebuildable | User direction | Backend/platform | ADR-002 compatibility/restore |
| D-13 | Kafka/outbox/inbox; managed shape/region after evidence | Direction defined, provider open | Platform | ADR-003 benchmark/cost/privacy |
| D-14 | REST external, gRPC only actual workload boundary, WebSockets snapshot/version | User direction + selected contracts | Backend/mobile | ADR-004 breaking compatibility review |
| D-15 | Passenger Flutter both OS; driver Kotlin Android | User direction | Mobile | ADR-005 device/store matrix |
| D-16 | Driver Swift only when device economics support it | Conditional scope | Product/mobile | Measured iOS driver requirement and funded coverage |
| D-17 | AWS/ECS/Terraform; Kubernetes evidence gate | User direction | SRE | ADR-006 operating need/lifecycle-cost comparison |
| D-18 | PostgreSQL assignment/one-immediate-passenger guards, sequential offers and fencing | Selected invariant | Trip/dispatch | ADR-007 concurrency evidence; optimization preserves invariants |
| D-19 | Locked quotes; separate trip/payment; balanced append-only ledger | Selected invariant, accounting gate | Pricing/finance | ADR-008 legal/posting/PSP proof |
| D-20 | Deterministic risk and matching; human appeals | Selected-proposed | Safety/product | ADR-009 ML eval/privacy/rollback evidence |
| D-21 | Retention/privacy transfer/authority review and accessibility from foundation | Open-external + mandatory engineering work | Privacy/counsel/UX | Current law/source effective date + erasure/accessibility proof |
| D-22 | Map/PSP adapters selected by capabilities/licenses/cost | Open vendor selection | Routing/payment | ADR-010 field corpus/signed capability/cost matrix |

Record final decisions through the relevant ADR or business/legal decision artifact with date, reviewed evidence and affected requirement/task IDs. Significant provider/rate/schema/security changes update master, contracts, requirements and plans atomically. Do not mark all v1 requirements complete because these decisions are documented.
