---
title: Documentation maintenance and pre-publication checklist
description: Checklist for contributors and agents to validate documentation before submitting a pull request. Aligns with AGENTS.md.
keywords:
  - documentation checklist
  - pre-publication
  - docs contribution
  - SafeSquid docs
---

# Documentation maintenance and pre-publication checklist

Use this checklist before submitting documentation changes (e.g. via pull request). It summarizes the pre-publication requirements from [AGENTS.md](/AGENTS.md). Full writing guidelines, voice, and format conventions are in AGENTS.md.

## Pre-publication checklist

### Content

- [ ] **Frontmatter** — Every doc has `title`, `description`, `keywords`; optional `sidebar_position` when needed.
- [ ] **Content type and goal** — Doc has a single purpose (get_started, how_to, admin_guide, concepts, reference, or troubleshooting).
- [ ] **Structure** — Content covers problem, benefits, prerequisites, implementation (and verification/troubleshooting where appropriate). Different headings or merged/omitted blocks are acceptable.
- [ ] **Opening** — Doc opens with threat or outcome; never "This section describes..." or similar.
- [ ] **Jargon** — Terms defined on first use or linked to glossary.
- [ ] **Concrete examples** — Real threats, apps, or scenarios named where relevant.
- [ ] **Common Pitfalls** — Config-heavy pages include a Common Pitfalls section (or equivalent).
- [ ] **Next steps** — Section hubs (main.md), how-tos, and get_started docs end with "Next steps" (or equivalent) and 1–3 related docs.
- [ ] **CISO bar in body copy** — Risk, control, evidence, compliance where relevant, business impact, trade-offs stated in the prose. Do not use separate CISO takeaway callouts.

### Structure

- [ ] **Headings** — 3–7 words; bottom-line or action-oriented; no "Overview" or "Introduction" as main heading.
- [ ] **Section hubs (main.md)** — Section has main.md with a one-paragraph overview (outcome-led) and a Quickstart path or path-by-topic with PBAC descriptions. main.md updated when adding or changing child docs.

### Technical

- [ ] **Markdown** — Valid; internal links relative and working.
- [ ] **Images** — In `/static/img/`; paths correct (e.g. `/img/category/name.webp`); alt text descriptive (e.g. "Click the **Generate** button" not "clicking on generate").
- [ ] **Frontmatter** — Valid YAML.
- [ ] **Code** — Language tags and syntax highlighting; procedures produce expected results where stated.

### Review

- [ ] **Format** — User-entered text **bold**; system output and paths `code`; menu paths **Menu → Submenu → Item**.
- [ ] **Icons** — ✅❌⚠️ used consistently; no mixed symbols for the same meaning.
- [ ] **Cross-references** — Descriptive link text; no bare "click here" links.
- [ ] **Release notes** — If applicable: version/date and summary present; linked from relevant how-tos.

### Security and placement

- [ ] **No secrets** — No real credentials, API keys, or passwords; use placeholders (e.g. `your-domain.com`).
- [ ] **Placement** — Docs in `docs/[section-number]-[section-name]/`; blog in `blog/` with date prefix; file and folder names use underscores (no spaces).

## Quick reference

- **Naming:** Snake_case for files and folders; no spaces.
- **CISO content:** In body copy only; no separate CISO callouts.
- **Callouts:** At most one of each type (Note, Tip, Warning, etc.) per section; tips for supplemental content only.
- **Troubleshooting:** Symptom-first openings; structure by symptom → cause → resolution → verification.

For the full agent guide and writing standards, see [AGENTS.md](/AGENTS.md) in the repository root.
