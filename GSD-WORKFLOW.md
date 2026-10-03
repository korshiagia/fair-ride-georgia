# GSD workflow decision and compatibility audit

Status: selected for this project; foundation prepared from the user's brief, not a claim that the complete native initialization/execution workflow has run. Audit date: 2026-10-03, Asia/Tbilisi.

## Decision

Use the already installed **OpenGSD GSD Core 1.15.0 for Codex**, pinned to this assessed version. GSD manages research, decisions, phase plans, execution, and evidence. It does not determine the ride-hailing runtime architecture. Keep the Go modular backend, domain boundaries, selective location/dispatch processes, and infrastructure decisions in project specifications and ADRs.

The user's instruction already authorizes the foundation documents and delegates ordinary design choices. Do not repeat introductory questionnaires or request permission to write these documents. Record unknown budgets, legal interpretation, payment-provider terms, supply commitments, and launch economics as hypotheses with owners and evidence gates. The five target cities are Zugdidi, Kutaisi, Batumi, Tbilisi, and Rustavi; a technical architecture supporting them does not itself authorize five simultaneous commercial launches.

This delivery is a **brief-driven, GSD-compatible foundation**. It deliberately does not run native `new-project` end to end: that workflow can initialize Git, commit documentation, add instruction files, and advance into further workflows. None of those actions is needed to complete this specification-only request. Do not initialize Git, install or update GSD, create application code, provision cloud resources, or mark execution plans complete as part of this foundation.

**2026-10-04 project setup:** a later user instruction authorizes creating the existing project in `C:/Projects`. Local Git initialization and a documentation baseline are now included in that setup scope. The paragraph above records the earlier foundation-only delivery; it does not block this authorized setup. Native `new-project`/phase execution and application implementation have not been run. See [PROJECT-SETUP.md](PROJECT-SETUP.md).

## Installed identity and upstream verification

| Evidence | Observed result |
|---|---|
| Installed root | `C:/Users/korsh/.codex/gsd-core` |
| `VERSION` and `runtime-identity --raw` | `1.15.0`; package `@opengsd/gsd-core` |
| `.gsd-runtime` | `codex` |
| Baked package identity | `bin/lib/package-identity.cjs`: repository `open-gsd/gsd-core` |
| Instruction filename query | `AGENTS.md` |
| Local Node runtime | `24.15.0`; upstream package requires Node >= 24 |
| Git metadata in installed root | No `.git`; no local source commit can be proved |
| Upstream release | Tag `v1.15.0` exists, release page identifies commit `b10ab3fdeb6274b373859ccd6e99b7e1cf17388e` |
| Agent installation query | All 35 expected roles installed; no missing/incomplete roles |

The installed package coordinates agree with the [upstream tagged package manifest](https://github.com/open-gsd/gsd-core/blob/v1.15.0/package.json) and [v1.15.0 release](https://github.com/open-gsd/gsd-core/releases/tag/v1.15.0). The upstream commit identifies the release; it is **not** a claim that local converted workflow and agent files are byte-identical to that source commit. Preserve local fingerprints and rerun compatibility checks before any future upgrade. The [primary repository](https://github.com/open-gsd/gsd-core) names Codex among its supported agent runtimes.

Local SHA-256 fingerprints:

| File, relative to installed root | SHA-256 |
|---|---|
| `bin/gsd-tools.cjs` | `57AE39AB017C4E78CA59AAFEF9E87166D4D276948C90C8127CAC4EA6F2950C65` |
| `bin/lib/package-identity.cjs` | `34051A3E4874FAE454A7FF861D0A2E020743B6AC0248AE790D3CA5E33BDC635B` |
| `bin/lib/capability-registry.cjs` | `68899CE8442A2FB2E4B2F641CFBDE0B3D521E066EA42F637E5C90F5A0E51B991` |
| `bin/shared/config-schema.manifest.json` | `78C28D6D800ED9019AC84735BFCD3DBA235B6B0F82B5D7C96705DC0097333C1B` |
| `workflows/new-project.md` | `69E6BFB11CD32646D34FB287B2CD3699F329CAA6B485227E9247D6A06D33F29A` |
| `workflows/plan-phase.md` | `09DE16C4E60E492ABF50B4C15F8ADB9BFE0F1E79713924D54AED3C7126C5E82C` |
| `templates/phase-prompt.md` | `985A810B9A5B7935D2578C76888BCB2B1FADAEFDA9A77BBE9F54D5A4123C913E` |

## Workflow contract

1. **Project foundation:** maintain `.planning/PROJECT.md`, `REQUIREMENTS.md`, `ROADMAP.md`, `STATE.md`, `config.json`, project research, master specifications, and ADRs. Requirements remain unvalidated until there is evidence; a researched public statement is not validation of customer demand or profitability.
2. **Specify and discuss a phase:** use `$gsd-spec-phase N` for the delivery contract and `$gsd-discuss-phase N` only for material undecided choices. Existing approved specifications may feed `$gsd-plan-phase N --prd <spec>` or ADRs via `--ingest`. Do not overwrite locked decisions with agent preferences. Separate user constraints, accepted ADRs, and provisional recommendations.
3. **Research and plan:** use `$gsd-plan-phase N`; research official sources and local contracts, then write executable plans. A typed `gsd-plan-checker` reviews task specificity, dependency waves, requirement coverage, decision coverage, threat mitigation, and validation design. The documented planning workflow has a bounded revision loop. Review blockers must be fixed or explicitly resolved; a successful file-format check is insufficient. See the [tagged planning guide](https://github.com/open-gsd/gsd-core/blob/v1.15.0/docs/how-to/plan-a-phase.md).
4. **Execute only after the phase is authorized:** `$gsd-execute-phase N` runs bounded tasks with named file ownership and summaries. Create code only when the implementation phase begins. Do not use `--auto`, an auto-advance chain, or an autonomous all-phases workflow for this foundation request.
5. **Verify:** check real user outcomes, invariants, critical links, tests, and operational behavior. `$gsd-verify-work N` supplies user acceptance checks. Use `$gsd-code-review`, `$gsd-secure-phase`, and targeted gap plans where appropriate. `SUMMARY.md` records task execution; `VERIFICATION.md` records goal achievement; neither is a substitute for the other.
6. **Release:** use a milestone audit and `$gsd-ship` only within a separately authorized implementation/release scope. Live traffic, payment contracts, driver contracts, tariff publication, and production deployment require real readiness evidence and the applicable business authorization. Ordinary reversible engineering and documentation do not need additional approval prompts.

For implementation phases, keep GSD's production-quality tracer first: prove one real path through the relevant layers, then expand it. This is compatible with a durable production foundation. Do not enable `--mvp` enrichment: the user has expressly ruled out a disposable MVP. A documentation phase can use a traceable specification path instead of fabricating a UI/API/database tracer or writing a prototype.

## Requirements, decisions, and evidence

Every requirement has a stable ID, one owning roadmap phase, acceptance evidence, and an explicit status. Every plan lists a nonempty `requirements` array drawn from that phase. Map cross-cutting safety, privacy, reliability, and accounting requirements to concrete tasks as well as their owning phase. Track decisions in phase `CONTEXT.md` with `D-NN` references and cite those decisions in plan actions or `must_haves` so the decision-coverage gate can find them.

Use this chain:

`Source / hypothesis -> requirement -> phase -> ADR / decision -> plan / task -> test / evaluation -> evidence -> release gate`

Avoid two errors: treating roadmap coverage as proof of implementation, and marking business hypotheses validated merely because documents were generated. Native validators are useful structural tools; foundation review must also inspect invariants, scope, business gates, and source dates.

| Phase characteristic | Required additional contract / evidence |
|---|---|
| Any change to identity, money, trip state, location, safety, or infrastructure | Threat model; authorization and abuse cases; retention and failure behavior; security review |
| Backend behavior | Contract/integration tests and meaningful invariant tests; concurrency and replay tests where needed |
| Location/dispatch | GPS replay corpus, stale/out-of-order/duplicate events, contested offers, route-provider failure, load and failure simulation |
| Pricing/accounting/payments | Golden tariff fixtures, quote-version replay, idempotency, balanced ledger, reconciliation, refund/dispute evidence |
| Passenger/driver/console UI | `$gsd-ui-phase` before implementation; accessibility, Georgian localization, degraded connectivity, UI review and acceptance checks |
| ML or LLM features introduced later | `$gsd-ai-integration-phase`, evaluation dataset/rubrics, monitoring and `$gsd-eval-review`; no assumed AI dependency for rule-based dispatch/risk |
| Commercial release | City supply/demand proof, provider/regulatory readiness, staffed safety/support, restore/rollback exercise, release evidence |

Configure ASVS level 2 as an engineering target for applicable web/API controls. It is not a certification or a claim that mobile controls are covered; mobile and platform-specific threat tests must also be specified. Documentation-only tasks use source and traceability checks; do not invent application tests for documents.

## Minimal project configuration

The following keys were checked against the installed `isValidConfigKey` API, which combines the central schema and first-party capability schemas. Keep the project configuration explicit and small:

```json
{
  "mode": "interactive",
  "granularity": "fine",
  "runtime": "codex",
  "response_language": "Georgian",
  "phase_id_convention": "sequential",
  "parallelization": false,
  "planning": { "commit_docs": false },
  "workflow": {
    "research": true,
    "ai_integration_phase": true,
    "plan_check": true,
    "verifier": true,
    "auto_advance": false,
    "text_mode": true,
    "context_coverage_gate": true,
    "nyquist_validation": true,
    "security_enforcement": true,
    "security_asvs_level": 2,
    "security_block_on": "high"
  }
}
```

`planning.commit_docs=false` prevents planning workflow commits for this document package; executor workflows can still commit application work later, so this is not a global no-commit enforcement mechanism. `parallelization=false` is a conservative starting value for execution until repository ownership/isolation is configured. It does not prohibit parallel research during this chat. `interactive` and `auto_advance=false` keep phase progression explicit; they do not demand redundant permission for already authorized tasks. Do not place secrets or provider tokens in this file.

Several capabilities such as research, security, and Nyquist own config keys outside `config-schema.manifest.json`; checking that manifest alone yields false negatives. Conversely, the shipped broad template contains `gates`/`safety` blocks that are not a basis for adding invented gate controls to this minimal config. Do not assume all template fields are enforceable.

`workflow.ai_integration_phase=true` is explicit so future learned/LLM capabilities retain the framework/domain/evaluation design gate. The current v1 matching and risk rules are deterministic; enabling the workflow does not create an AI runtime or authorize adding one.

For native inspection, use `milestone: v1.0` (unquoted) and `milestone_name: Five-city production program` in STATE frontmatter, and a matching `## v1.0 — Five-city production program` heading before all twelve roadmap phases. M0–M4 are business gate groups within that release. Write the goal as a plain sentence immediately below each phase heading, followed by the same `**Goal:**` field. The installed planning inspector reads the leading free prose and stops at bold annotations; the main roadmap parser reads the explicit bold goal. Both must see the same contract. Future phase folders may carry a `NN-BRIEF.md` scope baseline without implying detailed CONTEXT/PLAN or executed evidence.

## Executable plan format

Use `.planning/phases/NN-phase-name/NN-MM-PLAN.md`. Follow local `templates/phase-prompt.md`:

```yaml
---
phase: 01-foundation
plan: "01"
type: execute
wave: 1
depends_on: []
files_modified: [docs/example-spec.md]
autonomous: true
requirements: [FOUND-01]
user_setup: []
must_haves:
  truths:
    - "The specification states observable acceptance evidence for FOUND-01."
  artifacts:
    - path: docs/example-spec.md
      provides: "Requirement delivery contract"
  key_links: []
---
```

The example identifiers and paths illustrate format; actual plans must use this project's real requirement IDs and paths. Each automatic task has `<name>`, `<files>`, `<read_first>`, a concrete `<action>`, runnable `<verify>`, measurable `<acceptance_criteria>`, and `<done>`. Include objective, execution context, project context, tasks, verification, success criteria, output-summary path, and a `<threat_model>` when security enforcement is active. Checkpoints must set `autonomous:false`. A decision with irreversible effects earns a specific decision gate when implementation would make it binding; research documenting alternatives can proceed immediately. Dependencies must refer to real plans; waves must increase across dependencies, and simultaneous plans must own disjoint files unless a justified coupling is declared.

The native frontmatter schema currently checks eight required fields and **does not enforce `requirements`**, despite the plan template requiring it. Coverage review must therefore additionally reject empty/missing requirement lists, unmapped IDs, dropped locked decisions, and invalid dependencies.

## Read-only validation commands

These commands are for PowerShell. The active monorepo root is `C:/Projects/fair-ride-georgia`; `.planning` belongs directly under it. The original document package was prepared in `outputs/foundation` and retained as a historical snapshot. Use the explicit local dispatcher to avoid resolving another package's colliding `gsd-tools` binary. Do not use `--version`; the dispatcher rejects it.

```powershell
$gsdTool = 'C:\Users\korsh\.codex\gsd-core\bin\gsd-tools.cjs'
$foundationRoot = 'C:\Projects\fair-ride-georgia'
node $gsdTool runtime-identity --raw
node $gsdTool --cwd $foundationRoot query validate.health
node $gsdTool --cwd $foundationRoot query validate.consistency
node $gsdTool --cwd $foundationRoot query roadmap.validate
node $gsdTool --cwd $foundationRoot query planning.inspect

$planFiles = Get-ChildItem -LiteralPath (Join-Path $foundationRoot '.planning\phases') -Recurse -File -Filter '*-PLAN.md'
foreach ($planFile in $planFiles) {
  $frontmatterResult = node $gsdTool --cwd $foundationRoot query frontmatter.validate $planFile.FullName --schema plan | ConvertFrom-Json
  if (-not $frontmatterResult.valid) { throw "Invalid plan frontmatter: $($planFile.FullName)" }
  $structureResult = node $gsdTool --cwd $foundationRoot query verify.plan-structure $planFile.FullName | ConvertFrom-Json
  if (-not $structureResult.valid -or $structureResult.task_count -lt 1) { throw "Invalid task structure: $($planFile.FullName)" }
  $structureResult.warnings
}
```

Inspect JSON `valid`, `passed`, health `status`, errors, and warnings; do not infer success only from the shell exit code. Structured validators should omit `--raw`: for example, frontmatter and plan structure emit a bare `valid`/`invalid` in raw mode, which cannot be parsed as their JSON object. A not-yet-executed plan lacks a summary by design. Future phases may have no detailed plan yet; review resulting warnings against the stated planning horizon. Do not run `validate.health --repair`, initialize Git, migrate configuration, mark phases complete, or generate execution summaries merely to silence warnings.

The config-key check has no dedicated validator command in this dispatcher. A read-only check can parse `.planning/config.json`, flatten leaf key paths, and pass each to `require('C:/Users/korsh/.codex/gsd-core/bin/lib/config-schema.cjs').isValidConfigKey(key, foundationRoot)`. This checks supported keys; inspect values and effective defaults separately. For a phase with a real `CONTEXT.md`, run `query check.decision-coverage-plan <phase-directory> <context-path> --raw` and require `passed:true`. A full typed plan-checker review still remains a distinct gate after these structural checks.

## Codex compatibility observations

- Current tools expose typed `collaboration.spawn_agent`, role names, asynchronous agent messages, and waiting. The skill adapter's statement that spawning always requires a new explicit user request is stale in this session: the active developer policy authorizes proactive delegation. No generic-agent workaround is needed when the chosen role is visible.
- `request_user_input` is restricted in this session; imported Claude `AskUserQuestion` examples are not directly callable. The user's detailed brief and delegated choices authorize document preparation. Preserve material unanswered business choices as explicit hypotheses and future execution gates instead of invoking a text questionnaire and stopping the foundation.
- Workflows contain POSIX/Bash launcher blocks. The host shell is PowerShell; invoke the verified Node dispatcher with an explicit absolute path. Do not paste Bash preambles into PowerShell or assume shell-local functions persist across calls.
- `query validate.agents` reports complete installation and correct Codex agent declaration posture, but its `sandbox_posture` reports **26 role files with `workspace-write` where the installed validator expects `read-only`**. This records a mismatch in the existing global agent configuration, not a missing-agent failure. The current chat explicitly has filesystem permissions disabled and shared file ownership, so this foundation uses bounded document ownership. It does not silently rewrite global agent TOMLs. Before native multi-agent application execution, reconcile that posture with the actual Codex host contract and verify isolation through a harmless capability check.
- Agent spawn does not itself create a Git worktree. Native isolated execution must use the negotiated GSD/Codex isolation adapter when available. Independent planning files may be written with explicit ownership; application execution must not pretend shared working-directory agents are isolated.
- Installing a global agent definition and parsing a plan does not prove any production safety or performance claim. Maintain the verification and release evidence explicitly.

## Local provenance

Inspected without modifying the global installation: `VERSION`, `.gsd-runtime`, `bin/gsd-tools.cjs`, `bin/lib/package-identity.cjs`, `runtime-identity.cjs`, `config.cjs`, `config-schema.cjs`, `frontmatter.cjs`, `verify.cjs`, `capability-registry.cjs`, config default/schema manifests, `templates/config.json`, `phase-prompt.md`, `roadmap.md`, `state.md`, `workflows/new-project.md`, `plan-phase.md`, `spec-phase.md`, and planner instructions. Invoking skills inspected: `C:/Users/korsh/.agents/skills/gsd-new-project/SKILL.md` and `gsd-plan-phase/SKILL.md`. Exact package identity and agent installation queries succeeded. Structure/coverage results for the final project artifacts belong in the foundation's final validation record; this workflow assessment does not invent those results.

## ქართული შეჯამება

ამ პროექტისთვის შერჩეულია უკვე დაყენებული **OpenGSD GSD Core 1.15.0**, Codex-ის მხარდაჭერით. ვიწყებთ სრულ სპეციფიკაციას, არქიტექტურულ გადაწყვეტილებებსა და შემოწმებად გეგმებს; აპლიკაციის კოდი და წარმოებაში გაშვება შემდეგი ეტაპია. თითოეულ მოთხოვნას ექნება ფაზა, დავალება და მტკიცებულება. დაუდასტურებელი ბიზნესვარაუდები ცალკე რჩება, ხოლო მძღოლებთან პირობები, გადახდები და ქალაქში გაშვება შესაბამისი კვლევისა და რეალური მზადყოფნის შემდეგ გადაწყდება.
