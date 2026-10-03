# Independent foundation review

Date: 2026-10-03, Asia/Tbilisi. Review type: specification, evidence and arithmetic review. Application code, live infrastructure, fieldwork, contracts and production behavior have not been verified by this review.

## Review status

Completed original document review: the core product/business/technical/domain/ADR/GSD contracts, decision register, all 78 v1 requirements, 48 work cards, consolidated launch gates, the original six native Phase 1/2 plans and their context/research/validation files were read. All six findings below were corrected and reread. No financial/regulatory/market-evidence consistency defect remained open in that review's scope. Architecture-specific execution-plan refinements and their disposition are recorded separately in `ARCHITECTURE-REVIEW.md`; later execution must recheck plans against actual M0 evidence and the codebase.

Final integration note, 2026-10-04: the three original Phase 2 plans were divided into six smaller plans, giving nine native plans in the final pack. Source/financial facts retain their 2026-10-03 research date. Field collection now explicitly requires a protocol-specific professional privacy review before its first real record. Final native nine-plan checks and the specialist review are recorded in [VALIDATION-REPORT](../VALIDATION-REPORT.md) and [PLAN-CHECK-REVIEW](../PLAN-CHECK-REVIEW.md); the original review above does not claim an additional market interview or legal opinion occurred.

The pack consistently preserves all five user-selected cities—Zugdidi, Kutaisi, Batumi, Tbilisi and Rustavi—and a complete product scope. The proposed Kutaisi → Zugdidi → Batumi → Tbilisi/Rustavi activation order is explicitly conditional on permissions, supply/demand and operational evidence. No claim of weaker competition establishes this order. No implementation or operating requirement is marked completed.

## Findings and disposition

Paths below are relative to `outputs/foundation/`; line references identify the reviewed version.

| ID / severity | Exact location | Finding and proposed correction | Status |
|---|---|---|---|
| F-01 / P1 contract consistency | `research/MARKET-REGULATORY.md:11`, `:153` versus `BUSINESS-MODEL.md:7` and `MASTER-SPEC.md:68` | Research described a 15% all-in commission ceiling while the canonical business model uses a modeling input with unresolved commission tax base and VAT incidence. Remove the ceiling/offer commitment and label the VAT-inclusive calculation as conditional sensitivity. | Corrected in research; current wording matches the canonical modeling-input distinction. No driver offer has been approved. |
| F-02 / P1 provider contract | `.planning/REQUIREMENTS.md:69` | PAY-01 required a signed webhook without confirming provider support. TBC's documented PaymentID callback is followed by an authoritative status query; a vendor-independent requirement must specify provider verification/status recovery, amount/currency/reference checks and idempotency, with signature validation where supported. | Corrected and reread: provider-verified callbacks/status/amount/currency recovery; signatures conditional on support. |
| F-03 / P2 arithmetic | `BUSINESS-MODEL.md:43` | Conditional VAT contribution is `1.8 / 1.18 − 0.814 = 0.7114237288`. At assumed fixed cost 250,000 this is approximately 351,408 rides/month and 11,714/day, rather than 351,444/month and 11,715/day. Use the unrounded formula consistently. | Corrected and reread: unrounded expression and 351,408 / 11,714 values present. |
| F-04 / P2 executable consistency | `TASK-PLAN.md:26`, `.planning/phases/01-validation-contracts/01-CONTEXT.md:26`, `research/MARKET-REGULATORY.md:175`, `:176` | Initial sample targets differed: 10/10 interviews, 15/20 interviews, and seven-day versus fourteen-day diaries. Choose one initial protocol—native context baseline: 15 driver and 20 rider interviews, plus 10 seven-day driver diaries per city—and propagate it. Keep quotas adjustable and avoid representativeness claims. | Corrected and reread across research, task card, context and native 01-01:60; purposive, expandable targets agree. |
| F-05 / P1 cohort entry gate | `TASK-PLAN.md:537`, `:541`, `:548`, `:552` | T46 previously activated controlled staffed production cohorts before T47's formal staffing/drill readiness task. Real-person cohorts require trained coverage, escalation and applicable legal/privacy/payment conditions before their first ride. Order T45 → T47 → T46, then T48. | Corrected and reread: T47 depends on T45, T46 depends on both T45/T47; `VALIDATION-AND-LAUNCH-GATES.md:75` explicitly requires these gates before the first cohort ride. |
| F-06 / P2 automated completeness checks | `.planning/phases/01-validation-contracts/01-02-PLAN.md:56`, `:72`, `01-03-PLAN.md:58`, `:67` | Bare PowerShell `Test-Path` prints `False` while the shell can still exit successfully. Native automated file-completeness commands should throw/fail on a missing required path; human evidence review remains necessary even when all paths exist. | Corrected and reread: every listed artifact probe throws on a missing leaf. Future multi-command checks must each pass; a final command's exit code cannot erase an earlier failure. |

The milestone labels “production/security certification” describe future internal acceptance. `VALIDATION-AND-LAUNCH-GATES.md:75` now explicitly distinguishes internal readiness verification from a government certificate or permit. `GSD-WORKFLOW.md:72` correctly states that ASVS level 2 is an engineering target rather than a certification. No external certification is claimed by this review.

## Arithmetic and traceability checks

The illustrative calculations below were reproduced independently. All inputs remain assumptions; arithmetic correctness does not establish viability, market demand or a tax conclusion.

| Check | Reproduced value | Assessment |
|---|---:|---|
| GEL 12 fare × modeled 15% commission | 1.800000 | Matches |
| Illustrative 60% card share × 2% PSP charge × GEL 12 fare | 0.144000 | Matches; the rate is not a bank quotation |
| Maps + communication + infrastructure | 0.160000 | Matches |
| Other variable support/loss/incentive cost | 0.510000 | Matches |
| Non-VAT-adjusted contribution | 0.986000 | Matches |
| Modeled 10% / 20% contribution | 0.386000 / 1.586000 | Matches; not recommended public offers |
| Conditional VAT-inclusive contribution at hypothetical 18% | 0.7114237288 | Matches formula; break-even transcription corrected |
| Non-VAT-adjusted break-even at fixed cost 250,000 | 253,549.6957/month; 8,451.6565/day | Published rounded values match |
| Hypothetical driver monthly net per online hour | `(6,000 × 0.85 − 2,200) / 200 = 14.50` | Matches; income/cost/hour assumptions are explicit |
| 12-month illustrative total with 25% contingency | 4,950,000 GEL | Matches listed assumptions |
| 15-month illustrative total with 25% contingency | 6,000,000 GEL | Matches listed assumptions |
| Continuous staffing seat arithmetic | 168 / 40 = 4.2 nominal FTE | Matches; leave/concurrency still needs roster evidence |

Requirements-to-task table check: **78 distinct v1 IDs, 78 distinct traceability rows, 48 work cards, no missing or unexpected ID**. The requirement phase ownership is consistent with the 12-phase roadmap. Later native plans are intentionally rolling plans; this is not proof those phases are executable today. Phase 1/2 validation files correctly use pending/draft status and `nyquist_compliant: false`.

Native plan check: six files, each with three tasks, nonempty requirement IDs, `autonomous: false`, a threat model and must-have evidence. Phase 1's parallel research/legal preparation joins at 01-03 for actual M0 review; Phase 2's dependency waves are 1 → 2 → 3. The later implementation instruction and scoped staging account/plan/cost gate are explicit, and existing applicable authorization is reused. Phase 2 uses restricted synthetic diagnostic records and tests actual failure boundaries; it does not exercise real payment, airport, production-data or city activation. No execution SUMMARY exists for these plans; future test commands were not run during this document review.

## Legal and evidence boundaries that passed review

- Commission and median driver income are attributed to Bolt's own current pages, with the June 2026 measurement period and missing methodology kept visible. They do not become independent driver profitability or market-share claims.
- The 35,558 historical A-permit lead is explicitly secondary/historical. GeoStat's 2025-04-01 workbook contains different vehicle and holder table totals; neither is treated as daily active supply or TAM.
- Tbilisi A/B conditions are not applied nationwide. Final amended Tbilisi annex, city-specific interpretation and airport rights remain open. Airport maps and competitor airport categories are not access permission.
- Privacy research uses the current State Audit Office authority after the change effective 2026-03-02. The historical transition version is labeled non-final. Technical retention durations are proposed engineering schedules; no statutory retention period is invented.
- Payment-law research uses the final Georgian text and flags the English translation's non-final 2015 version. Commercial-agent applicability, principal/agent accounting, driver status, tax base, withholding, insurance and money custody remain company-specific professional-review gates.
- Bank documentation supports candidate capabilities, not merchant underwriting, published rates for this company, payout rights or completed contracts. BOG's split-refund limitation is carried into PAY-06, technical rules and work card T28.
- Accessibility distinguishes existing duties from the 2027-09-01 effective date of the reviewed website/app amendment. Source extraction does not replace review of implementing rules.
- Official legal/provider facts are linked to scoped primary sources in the source register. MR-05 alone is a clearly labeled secondary historical lead. No long source quotations or fabricated interview/vendor evidence appear in the reviewed materials.
- ADR-009 and TECHNICAL-SPEC require lawful basis/transfer/DPIA decisions before real collection. The later privacy implementation phase cannot serve as permission to collect real users' data earlier. Earlier staging implementation uses synthetic records.
- The driver cost formula explicitly allocates deadhead/empty return into fuel and maintenance once, and unpaid time into online hours. Loan principal and depreciation cannot duplicate the same economic cost (`research/MARKET-REGULATORY.md:147`).
- Preparing these specifications and research materials is authorized. The review does not add an approval requirement for this completed local documentation work. Future outreach, contracts, spending and public activation must follow the actual authorization in force when those actions occur.

## Remaining evidence is work, not a document defect

Desk research cannot produce actual interview/diary observations, signed professional opinions, bank underwriting, airport pickup rights, contracted vendor prices, recruited staff, app-store approval, measured dispatch density, measured quality or fault/load/payout outcomes. M0 and city-launch evidence stay open until those outputs exist and accountable owners review them. Source rechecking at sign-off is necessary because undated live policies and amended laws can change.

ქართული მოკლე დასკვნა: ხუთივე ქალაქი და სრული პროდუქტის მასშტაბი გეგმაში შენარჩუნებულია. 15% მხოლოდ ფინანსური მოდელის ვარაუდია; ბანკის ფასები, იურიდიული დასკვნები და რეალური მოთხოვნა ჯერ გადასამოწმებელია. დოკუმენტების მიმოხილვა შესრულებულ პროგრამად ან ქალაქის ჩართვის ნებართვად არ ითვლება.
