---
title: "Docs Team Agent Design"
description: "Design spec for the four-agent documentation team: researcher, writer, validator, and SafeSquid sysadmin"
keywords: [agents, team, documentation, validation, safesquid]
---

# Docs Team Agent Design

## Overview

Four agents in `.claude/agents/` implement a writer-led, validator-gated documentation pipeline for the SafeSquid SWG Mintlify docs repo. The writer leads every session, pulls the researcher as needed, and hands completed docs to the validator. The validator owns the approval gate — no doc is done until it passes all three checks.

---

## Agent Roster

### `doc-writer` (team lead)

**Type:** `general-purpose`

**Tools:** Read, Edit, Write, Glob, Grep, Bash

**Responsibilities:**
- Accept a bare topic (e.g. `"SSL Inspection how-to"`) or a raw content brief
- Read the relevant section of `docs/` to understand existing structure and style before drafting
- Send research requests to `doc-researcher` — open loop, any number of follow-up rounds until satisfied
- Draft the doc following AGENTS.md: six-block structure (Problem Statement → Key Benefits → Prerequisites → Implementation Actions → Verification and Evidence → Troubleshooting), CISO-grade bar, PBAC voice, correct frontmatter
- Send the completed file path to `doc-validator` with a short summary
- Receive structured PASS/FAIL feedback from the validator and revise until PASS
- Notify the user when the validator issues an all-clear

**Does not:** run `npm run validate` directly (delegated to validator), navigate the SafeSquid UI

---

### `doc-researcher`

**Type:** `general-purpose`

**Tools:** WebSearch, WebFetch

**Responsibilities:**
- Respond to research requests from the writer — topic + specific questions
- Search for: SafeSquid product documentation, relevant threat intelligence, applicable compliance frameworks (NIST SP 800-53, ISO 27001, PCI-DSS, HIPAA, GDPR, SOC 2)
- Return a structured research note for each response:
  - **Problem** — the security challenge or risk
  - **Risk** — business and operational impact
  - **Standards** — applicable frameworks and control references
  - **SafeSquid angle** — how the product addresses the problem
  - **Differentiators** — factual, sourceable points
- Flag gaps or contradictions found during research
- Respond to as many follow-up rounds as the writer sends

**Does not:** write or edit documentation files

---

### `doc-validator` (gatekeeper)

**Type:** `general-purpose`

**Tools:** Read, Glob, Grep, Bash, agent-browser

**Responsibilities:**
- Receive a completed doc file path from the writer
- Run three gates in sequence:

  **Gate 1 — Pre-publication checklist (AGENTS.md)**
  - Frontmatter complete (`title`, `description`, `keywords`)
  - Correct content type and six-block structure
  - CISO bar met in body copy (risk/control, compliance, evidence, business impact)
  - PBAC voice and formatting conventions
  - Internal links relative and resolving; image paths correct
  - No credentials or real secrets; placeholders used
  - `docs/docs.json` updated if new pages were added
  - `main.md` present and updated for the section

  **Gate 2 — UI verification**
  - Delegate to `safesquid-sysadmin` with an ordered list of UI paths extracted from the doc
  - Receive CONFIRMED / MISMATCH report per path
  - Use `agent-browser` independently to check rendered page layout and image rendering on the Mintlify local preview (`http://localhost:3000`) where relevant

  **Gate 3 — Build check**
  - Run `npm run validate` from repo root
  - Capture exit code and any errors

- Return structured result to writer:
  - **PASS** — all three gates clear; doc is approved
  - **FAIL** — itemised issues per gate, each actionable
- Track revision round number; flag escalation to the user if more than 3 rounds pass without a PASS

**Does not:** navigate the SafeSquid admin interface directly (delegated to sysadmin)

---

### `safesquid-sysadmin`

**Type:** `general-purpose`

**Tools:** agent-browser

**Responsibilities:**
- Called by `doc-validator` with an ordered list of UI paths to verify
- Open `http://safesquid.cfg` at `10.200.2.253` using browser automation
- Navigate each path and confirm menus, field labels, and button names match what the doc describes
- Return a verification report per path:
  - `CONFIRMED` — label and path match the doc exactly
  - `MISMATCH: found "<actual label>"` — label or path differs from the doc
  - `NOT FOUND` — path does not exist in the current UI

**What counts as a mismatch:** label text differs (case-sensitive), menu path is wrong, field does not exist, button name differs

**Does not:** edit docs, run shell commands, access any system other than `http://safesquid.cfg`

---

## Data Flow

```
User (topic or brief)
        │
        ▼
  doc-writer
        │ { topic, questions[] }
        ▼
  doc-researcher ──► structured research note
        │
  doc-writer reviews note
        │
        ├─ gaps remain ──► follow-up questions to doc-researcher (repeat)
        │
        └─ satisfied ──► drafts doc, saves to docs/
                          │
                          │ "validate: <file path> — <change summary>"
                          ▼
                    doc-validator
                          │
                          ├─ Gate 1: checklist
                          │
                          ├─ Gate 2: delegates UI paths to safesquid-sysadmin
                          │          + own browser check (localhost:3000)
                          │
                          └─ Gate 3: npm run validate
                                │
                                ├─ PASS ──► notifies doc-writer: "approved"
                                │           doc-writer notifies user
                                │
                                └─ FAIL ──► itemised issues to doc-writer
                                            doc-writer revises (loop, max 3 rounds)
                                            round 3+ ──► escalate to user
```

---

## Message Contracts

| From | To | Content |
|---|---|---|
| Writer | Researcher | Topic + explicit questions as a numbered list |
| Researcher | Writer | Structured note: Problem / Risk / Standards / SafeSquid angle / Differentiators |
| Writer | Validator | File path + short summary of what the doc covers (or what changed on a revision) |
| Validator | Sysadmin | Ordered list of UI paths extracted from the doc |
| Sysadmin | Validator | Per-path: `CONFIRMED`, `MISMATCH: found "<actual>"`, or `NOT FOUND` |
| Validator | Writer | Gate-by-gate: PASS or FAIL with itemised, actionable issues |

---

## Team Invocation

**Team name:** `docs-team`

**Starting a session:**
1. Spawn `doc-writer` (or message it if already running) with a topic or brief
2. The writer bootstraps by reading `.claude/agents/` to discover teammates and reading the relevant `docs/` section for context

**Input modes:**

| Input | Writer behaviour |
|---|---|
| Bare topic (`"SSL Inspection how-to"`) | Sends research request to researcher first, then drafts |
| Content brief (notes, outline, raw info) | May skip researcher or send targeted follow-up questions only |

**Shutdown:** After validator PASS and doc committed, writer notifies the user. Team idles until the next topic is sent.

---

## File Locations

```
.claude/agents/
  doc-writer.md
  doc-researcher.md
  doc-validator.md
  safesquid-sysadmin.md
```

All four files are versioned in the repo. The SafeSquid admin URL (`http://safesquid.cfg` / `10.200.2.253`) is hardcoded in `safesquid-sysadmin.md`.
