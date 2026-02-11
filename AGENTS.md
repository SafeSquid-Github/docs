# Documentation Agent Guide

**RULE: No files or folders should have space in their name. Always use underscores (_). Example: getting_started, not Getting Started or getting started.**

This guide defines how AI agents create and maintain CISO-grade, enterprise documentation for SafeSquid SWG. Content serves security and network technicians, system administrators, and operations teams as well as CISOs and security leadership.

## Operating Principles

**Content-first. Infrastructure-never.**

**CRITICAL**: This agent exists only for documentation and content creation.

**Contribution:** Documentation changes are submitted via pull request (e.g. GitHub PR). All edits require review before merge. Follow this guide and the pre-publication checklist; link to the repo or contributing guide when directing contributors.

## Agent Scope and Limitations

The agent should:

✅ **DO:**
- Create and edit documents in the `docs/` folder
- Create and edit blog posts in the `blog/` folder
- Research and write technically precise content
- Follow documentation guidelines and standards
- Update existing documentation files
- Add diagrams, screenshots, and log evidence

❌ **DO NOT:**
- Build or modify the Docusaurus project infrastructure
- Change configuration files (docusaurus.config.ts, package.json, etc.)
- Modify build scripts or deployment processes
- Alter the project structure outside of content folders
- Install dependencies or run build commands

## Naming and Path Rules

- No spaces in file or folder names.
- Use **snake_case** for folders and doc names: `getting_started`, `ssl_inspection`, `audit_and_forensics`.
- Use predictable asset names: `feature-short_description.webp`.

## Project Overview

### About and Audience

SafeSquid SWG documentation (Docusaurus 3.7.0) is a technically precise knowledge base for enterprise zero-trust web security. **Audience:** CISOs and security leadership; security and network technicians; system administrators; security architects; compliance and risk teams; operations.

**CISO-grade bar (every document):** Write so CISOs can justify controls, support audits, brief the board, and compare solutions. **Criteria:** (1) **Risk-and-control** — tie features to a risk and to the control SafeSquid provides. (2) **Compliance** — where relevant, cite NIST, ISO 27001, PCI-DSS, HIPAA, GDPR, SOC 2 and state what can be shown (logs, reports, config). (3) **Evidence** — state what is logged, reportable, auditable and how to prove control effectiveness. (4) **Business impact** — problem and benefits must include impact (reputation, legal, operational, cost). (5) **No fluff** — no marketing superlatives; state facts, assumptions, limitations, trade-offs; every security claim verifiable.

### Project Structure
- **Content:** `docs/[section-number]-[section-name]/`; `blog/` (date-prefixed); images in `/static/img/` as `/img/category/image-name.webp` (WebP preferred).
- **Infrastructure:** Node ≥18, npm, Docusaurus build; hosting Apache/Nginx; Algolia search; GA analytics. Agent does not modify config, build, or infra.

## Information Architecture

Maintain explicit document types and keep each page single-purpose.

### Content Types

- **get_started** (onboarding): Fastest path to first working deployment.
- **how_to** (task): One task end-to-end with verification.
- **admin_guide** (operational): Day-2 operations, lifecycle, troubleshooting.
- **concepts** (explain): Definitions, models, evaluation order, data flows.
- **reference** (exhaustive): Fields, parameters, defaults, limits, CLI/API.
- **troubleshooting** (symptom-first): Diagnosis → root cause → fix → verify.
- **release_notes** (product changes): Version/date, summary; new features, improvements, fixes. Place in a dedicated release-notes section or CHANGELOG; link from relevant how-to or reference docs so readers can see what changed.

## Writing Guidelines

### Principles (style)

1. **Threat-first** — Lead with risks and problem statements, not feature lists.
2. **Outcome-focused** — Show what users accomplish and the business/security result.
3. **Active & direct** — Active voice, present tense, imperatives for procedures.
4. **Concrete & named** — Real threats, apps, scenarios (e.g. ransomware, TeamViewer); no vague abstractions.
5. **Opinionated** — Warn against bad practices; recommend best paths; state limitations and trade-offs.

All docs must also meet the **CISO-grade bar** (see About and Audience): risk-and-control, compliance where relevant, evidence/audit trail, business impact, no fluff.

### Document design

**Frontmatter:** Every doc: `title`, `description`, `keywords`; optional `sidebar_position` when required.

**Six content blocks (how-to and admin docs)** — in order; use bottom-line headings, not block names as headings:

1. **Problem Statement** — Security challenge; risk and business impact (per CISO bar); real-world scenarios; business context.
2. **Key Benefits** — Desired outcome; control objectives and compliance (per CISO bar); value proposition; competitive advantage (factual).
3. **Prerequisites** — Client-side prep; SafeSquid-side setup; system requirements; call out certs, IAM, etc.
4. **Implementation Actions** — One action per step; exact UI paths and field names; safe defaults and decision points; verification per step; congruence with problem.
5. **Verification and Evidence** — Interface checks; log analysis; performance; auditor-ready evidence (report names, export paths, log snippets).
6. **Troubleshooting** — Symptom → cause → resolution → verification; escalation criteria.

**Next steps:** Every how-to and get_started must end with "Next steps" (or equivalent) + 1–3 related docs.

**Get_started:** Goal, Prerequisites, minimal Day-1 steps, Verification, Next steps. Prefer general path; defer advanced variants.

### Voice, structure, and formatting

- **Voice:** Active voice; imperative for procedures ("Click the Button"). "You" permitted in explanatory prose; avoid abstract "enterprises/organizations." Opinionated; no hedging ("may," "might") or marketing fluff. Sentences ≤20 words; 8–12 preferred.
- **PBAC:** Problem-first; benefit and risk mandatory; advantage factual and comparative; call-to-action procedural and testable. Narrative flow; cover all cases.
- **Headings:** 3–7 words; state conclusion not topic; action-oriented; no "Overview"/"Introduction." Lists: parallel structure; lead with action verbs.
- **Clarity:** Acronyms on first use; name exact target for "configure/set/update"; concrete nouns; descriptive link text (no "click here"); relative paths. Use concrete examples and numbers where helpful ("Block downloads >100MB during business hours"); analogies when they aid understanding. UI: **bold** or `code` for labels and menu paths (e.g. **Configuration → NGFW**).
- **Formatting:** Lead with threat or outcome (never "This section describes…"); tables for comparisons; Mermaid for workflows; paragraphs ≤5 lines. See **Format conventions** and **Icons and visual conventions** below.
- **Evidence:** Images in `/static/img/` → `/img/category/name.webp`; alt text; screenshots and logs per feature. Diagrams: Mermaid preferred; caption or alt. Logs: what to check, where, pattern, success indicator. Code: language tags, comments, expected output when relevant.

#### Format conventions

Use these consistently so readers can scan and follow procedures:

- **User-entered text vs system output:** In commands and examples, use **bold** for what the user types or selects (e.g. **your-domain.com**, **Save**). Use `code` or a code block for system output, command names, file paths, and config (e.g. `Connection refused`, `/etc/safesquid/config`, `curl -v https://example.com`). Do not use bold for output or code for user input.
- **Menu paths:** One style project-wide: **Menu → Submenu → Item** or **Menu > Item** (e.g. **Configuration → NGFW**, **File > Save**). Use **bold** for each clickable element.
- **Key actions and UI:** **Bold** for buttons, tabs, and field labels; `code` for values, paths, and commands.

#### Icons and visual conventions

Use icons and symbols consistently so meaning is clear at a glance:

- **✅** — Success, recommended, or "use when." **❌** — Failure, not recommended, or "don't use when." **⚠️** — Warning, caution, or "requires care."
- Use ✅❌⚠️ in lists, decision tables, and Before/After comparisons; avoid mixing with other symbols for the same meaning in the same doc.
- Callout boxes (Note, Tip, Warning/Caution) carry their own visual weight; use at most one of each type per section. For long content, prefer a short callout plus a dedicated section.

**Frontmatter + body template:**
```markdown
---
title: "Document Title"
description: "Brief purpose statement"
keywords: [keyword1, keyword2, keyword3]
# optional: sidebar_position
---
# Bottom-line title
## Bottom-line section heading
### Specific subheading
`inline code` and code blocks with syntax highlighting
```

### Standard feature page structure (optional full template)

For feature overviews, sections in this order: **Hero** (threat-focused headline + 2–3 sentence hook; **The problem** / **What SafeSquid does** / **Outcome**) → **Why This Matters** (threat narrative: scenario, cost, why current approaches fail) → **How [Feature] Works** (components with examples; Mermaid if helpful) → **Before/After** table (Scenario | Without [Feature] | With [Feature] | ❌/✅) → **When to Use / When NOT** (✅ Use when… / ❌ Don't use when…) → **How to Configure** (links to task docs; optional config snippet) → **⚠️ Common Pitfalls** ([Mistake]: [What breaks] → [Fix or link]) → **Related Topics** (Prerequisites, Next Steps, Troubleshooting) → **CISO Takeaway** (Risk | Control | Evidence | Action).

Threat narrative shape: **[Scenario]** Who does what; what data is at risk; consequence. **[Cost]** Quantify if possible. **[Problem]** Why current approaches fail.

### Content patterns

- **Threat narrative:** Open feature pages with vivid scenario (who, data at risk, consequence, why current approaches fail); 2–4 short paragraphs; name real threats.
- **Before/After table:** | Scenario | Without [Feature] | With [Feature] | with ❌/✅.
- **When to use / When not:** ✅ Use when… / ❌ Don't use when… with requirements and anti-patterns.
- **Common Pitfalls:** On config-heavy pages: **⚠️ Common Pitfalls** — **[Mistake]:** [What breaks] → [Fix or link].
- **Decision tables:** Requirements as rows, options as columns (✅/❌/⚠️); one-line **Recommendation**.
- **Workflow:** Mermaid for multi-step flows; clear node labels and decisions.
- **CISO takeaway:** **Risk:** [gap] | **Control:** [what SafeSquid provides] | **Evidence:** [logs/reports] | **Action:** [next step].
- **Deployment-scenario recommendations:** In deployment, architecture, or get_started docs, add brief recommendations by scenario (e.g. small office, branch, high-availability, cloud). For each scenario: when to use it, key constraints, and a pointer to the relevant task doc or config section. Helps readers choose a path and compare options.

### Page type templates

- **Feature overview:** Hero → Why This Matters → How It Works → Before/After → When to Use / When NOT → Config overview (links) → Common Pitfalls → Related → CISO Takeaway.
- **Task guide:** Action-oriented title; Prerequisites (links); time estimate if helpful; numbered steps with screenshots where helpful; Verification; link to troubleshooting; Related tasks.
- **Use case:** Clear goal as title; business context (one paragraph); requirements; configuration steps; testing; variations for different environments.

### Admonitions, code, and examples

- **Callouts:** Note (extra info/scope); Tip (recommended approach); Warning/Caution (risk before step). At most one of each per section; short; at point of relevance.
- **Code:** Complete, working; syntax highlighting; context and expected output; test before publish.
- **Good vs bad:**
  - **Opening:** Bad = feature-focused, passive ("This section provides information about…"). Good = threat-focused, active ("Your proxy sees thousands of requests per second… Is that your CEO downloading an M&A contract? A contractor uploading customer data? Without profiling, every request is a mystery box…").
  - **Config:** Bad = passive, vague ("The certificate must be deployed… various methods depending on OS."). Good = active, specific ("Deploy the Root CA to your clients: **Windows (AD):** Group Policy → Trusted Root store → [link]; **macOS:** MDM or Keychain import → [link]; **Linux:** copy to `/usr/local/share/ca-certificates/` and run `update-ca-certificates` → [link].").
  - **Features:** Bad = abstract ("Application Signatures enable identification by application."). Good = concrete ("Block **TeamViewer** and **AnyDesk** for contractors; detect **Tor Browser** and **Psiphon**; allow **Zoom** and **Teams** but block **Discord** and **Telegram**. SafeSquid inspects SNI, headers, and patterns.").

## Research methodology

Before drafting: gather SafeSquid sources (docs, guides, release notes); at least one relevant standard or framework (NIST, ISO 27001, PCI-DSS, HIPAA, etc.); threat/risk context; competitor context (factual, non-derogatory); related SafeSquid sections. Verify technical steps and UI paths; verify regulatory refs; ensure competitor claims are sourceable. Produce a short research note (problem, risk, standards, how SafeSquid addresses it, differentiators)—for agent use only, not published in the doc.

## Content creation workflow

1. **Research** — per Research methodology.
2. **Select content type and page goal** — get_started, how_to, admin_guide, concepts, reference, or troubleshooting; single purpose.
3. **Plan headings** — bottom-line, 3–7 words (per Writing Guidelines).
4. **Draft** — six-block scaffolding and PBAC; add evidence (diagrams, screenshots, logs); cross-links and next steps.
5. **Run pre-publication checklist** — verify against Writing Guidelines, structure, technical, review.

**Placement:** Docs in `docs/[section-number]-[section-name]/`; blog in `blog/` with date prefix (YYYY-MM-DD-Title.md); images in `/static/img/`; internal links relative.

### Main file (main.md)

**CRITICAL:** Every `docs/<section>/` folder must have `main.md` as the navigation hub. Headings follow Voice, structure, and formatting.

**Contents:** (1) Section overview (one paragraph). (2) Document index — every doc in the folder with a PBAC summary in 4 sentences (Problem → Benefit → Advantage → Call-to-Action). Optional: Prerequisites, procedures, troubleshooting, external resources. Template: frontmatter + H1 + section-specific H2/H3 + doc links with PBAC descriptions.

### Avoiding ambiguity

When writing or editing docs, apply these patterns so readers are never left guessing:

1. **UI location:** Don't say only "Click Configure." Give breadcrumb context: "In the SafeSquid interface header → click **Configure**."
2. **Cross-references:** Don't use bare links. Add a short purpose: "[Configuration Portal](/docs/.../Configuration_Portal/) — web interface for policy and system settings."
3. **Implicit assumptions:** State prerequisites before steps. Don't say "Run the installer"; say "Ensure you have root access. Run the installer: `/path/to/setup.sh`."
4. **Undefined terminology:** Define technical terms on first use or link to glossary. E.g. "**LACP bonding** (Link Aggregation Control Protocol — combines multiple interfaces for bandwidth and redundancy)."
5. **Troubleshooting:** Include failure symptoms, not only "if it fails, check X." E.g. "If you see 'Bad archive mirror' or 'Failed to retrieve pre-configuration', check DNS and gateway settings."
6. **Screenshot-dependent steps:** Don't say "Click the button as shown below." Describe it in text: "Click the **Generate** button (green button in the Certificate Management section) as shown below."

Flag for follow-up: missing screenshots, version-specific UI notes, missing default ports or full file paths.

## Testing Instructions

### Pre-publication checklist

Verify against the sections above; no need to duplicate every rule here.

- **Content:** Frontmatter complete; correct content type and page goal; six blocks present and ordered; opens with threat/outcome; jargon defined; real threats/apps named; concrete examples; Common Pitfalls on config-heavy pages; Next steps at end. CISO bar met: risk and business impact, compliance where relevant, evidence/audit trail, trade-offs stated, CISO Takeaway on major security pages. PBAC and voice/formatting per Writing Guidelines.
- **Structure:** Headings per guidelines; main.md present with section overview and doc index (PBAC summaries); main.md updated for new/changed docs.
- **Technical:** Markdown valid; internal links relative and working; images in `/static/img/`, paths correct; frontmatter valid YAML; code blocks with syntax highlighting. Screenshots current; code tested or scoped; procedures produce expected results.
- **Review:** Terminology and formatting consistent; format conventions followed (user-entered bold, output code, consistent menu style); icons used consistently (✅❌⚠️); cross-references correct; ready for publication and proper file placement. For release notes: version/date and summary present; linked from relevant docs where appropriate.

## Security and delivery

**Content security:** No real credentials, API keys, or passwords in examples; use placeholders (`your-secret-key`, `your-domain.com`). Mark sensitive config points; promote secure configs and hardened defaults; warn on risky settings; provide rollback guidance. No real user data; anonymized examples; validate external links and third-party refs.

**Delivery:** Create → validate against guidelines → ready for build (handled by others). Post-creation: address feedback, schedule reviews, keep content fresh; show last-reviewed/updated date where the pipeline allows.