# Documentation Agent Guide

**RULE: No files or folders should have space in their name. Always use underscores (_). Example: getting_started, not Getting Started or getting started.**

This guide defines how AI agents create and maintain CISO-grade, enterprise documentation for SafeSquid SWG.

## Operating Principles

**Content-first. Infrastructure-never.**

**CRITICAL**: This agent exists only for documentation and content creation.

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

### About SafeSquid SWG Documentation
The SafeSquid SWG documentation is a comprehensive knowledge base for SafeSquid Secure Web Gateway, the world's most advanced HTTP Proxy Server for Application Layer Security. The documentation is built using Docusaurus 3.7.0 and serves enterprise customers implementing zero-trust web security.

**Technical Precision Requirement**: All documentation must be technically precise and accurate, targeting enterprise stakeholders including IT decision-makers, security professionals, network administrators, and enterprise architects responsible for securing remote access within their organizations.

**Comprehensive Coverage**: Documentation must be expansive and comprehensive, covering all aspects of SafeSquid SWG implementation, configuration, and operation.

### Key Project Characteristics
- **Technology Stack**: Docusaurus 3.7.0 with React 19, TypeScript
- **Purpose**: Enterprise-grade Secure Web Gateway documentation
- **Target Audience**: IT decision-makers, security professionals, network administrators, enterprise architects, DevOps teams
- **Documentation Type**: Technical guides, installation instructions, configuration tutorials, troubleshooting guides
- **Content Scope**: 15+ major sections covering everything from installation to advanced security features
- **Competitive Landscape**: Positioned against Palo Alto Networks, Cato Networks, Netskope, Zscaler, Cisco, Forcepoint, Broadcom, Trend Micro, Sophos, Barracuda, Checkpoint, Versa, Cloudflare, Fortinet, HPE

### Audience and CISO-Grade Content Bar

**Primary audience**: CISOs and security leadership first; then security architects, compliance and risk teams, and operations. Write as if the CISO is the reader in the room.

**Top 1% bar**: Content must be usable by CISOs to:
- Justify control choices and investment (risk reduction, compliance, resilience)
- Support audits and evidence requests (what to configure, what to log, how to prove it)
- Brief the board or executives (clear problem → impact → control → outcome)
- Compare solutions (capabilities, trade-offs, and where SafeSquid fits)

**Concrete criteria every document must meet**:
- **Risk-and-control framing**: Tie every major feature to a risk (e.g. data loss, compliance gap, blind spot) and a control (what SafeSquid does and how it reduces that risk)
- **Regulatory and standards mapping**: Where relevant, cite or align to NIST, ISO 27001, PCI-DSS, HIPAA, GDPR, SOC 2, or industry frameworks so CISOs can map docs to compliance and audit
- **Evidence and audit trail**: State what is logged, reportable, and auditable (e.g. Reporting Module, Security Logs, DLP events) and how to demonstrate control effectiveness
- **Business impact**: Problem statements and benefits must include business impact (reputation, legal, operational, cost), not only technical outcome
- **No fluff**: No marketing superlatives; state facts, trade-offs, and limitations clearly so CISOs can trust and reuse the content

**Non-negotiables:**
- No marketing superlatives.
- State facts, assumptions, limitations, and trade-offs.
- Every security claim must be verifiable.

### Project Structure
```
docs/
├── docs/                    # Main documentation content
│   ├── 01-Getting_Started/  # Basic setup and installation
│   ├── ...                  # Additional feature sections
│   └── 25-FAQs/             # Frequently asked questions
├── blog/                    # Security-related blog posts
├── src/                     # Custom components and styling
├── static/                  # Images and assets
└── docusaurus.config.ts     # Docusaurus configuration
```

### Technical Infrastructure
- **Node.js**: Version ≥18.0 required
- **Package Manager**: npm
- **Build System**: Docusaurus build pipeline
- **Hosting**: Apache/Nginx web servers
- **Search**: Algolia integration
- **Analytics**: Google Analytics integration

## Information Architecture

Maintain explicit document types and keep each page single-purpose.

### Content Types

- **get_started** (onboarding): Fastest path to first working deployment.
- **how_to** (task): One task end-to-end with verification.
- **admin_guide** (operational): Day-2 operations, lifecycle, troubleshooting.
- **concepts** (explain): Definitions, models, evaluation order, data flows.
- **reference** (exhaustive): Fields, parameters, defaults, limits, CLI/API.
- **troubleshooting** (symptom-first): Diagnosis → root cause → fix → verify.

### Navigation Hubs (main.md)

Each `docs/<section>/` folder must contain `main.md` as a navigation hub:
- One-paragraph scope
- Complete index of docs in that folder
- PBAC 4-sentence summaries per doc

Main files may contain Prerequisites, procedures, troubleshooting, or external resource lists when they support the section overview and navigation.

## Writing Guidelines

### Mandatory Document Design

#### Document Header Contract

Every document starts with frontmatter: `title`, `description`, `keywords`. Add optional `sidebar_position` when required by section conventions.

#### Page Scaffolding

All how-to and admin documents must include the following six content blocks in this order. Do not use these block names as verbatim headings; headings must state the bottom line.

#### 1. Problem Statement
- **Security Challenge**: Briefly describe the security or operational challenge this feature addresses
- **Risk and Business Impact**: State the risk (e.g. data loss, compliance gap, blind spot) and business impact (regulatory, legal, operational, reputational, cost), not only the technical challenge
- **Real-World Scenarios**: Illustrate why and when a client would need this feature
- **Business Context**: Connect technical problems to business impact

#### 2. Key Benefits
- **Desired Outcome**: Highlight the primary advantages and security outcomes of enabling this feature
- **Control Objectives and Compliance**: Link benefits to control objectives and, where relevant, compliance or audit (e.g. supports PCI-DSS 10.x logging, evidence for SOC 2). Name the framework or requirement and what the organization can show (logs, reports, config)
- **Value Proposition**: Quantify benefits where possible (performance improvements, security enhancements)
- **Competitive Advantage**: Position against competitor solutions using factual comparison, not marketing

#### 3. Prerequisites
- **Client-Side Preparations**: Tasks that the client must complete independently (e.g., setting up a firewall, generating certificates)
- **SafeSquid-Side Setup**: Required configurations within SafeSquid prior to enabling the feature
- **System Requirements**: Hardware, software, and network prerequisites. Call out security-sensitive prerequisites (e.g. certificates, IAM) explicitly

#### 4. Implementation Actions
- **Step-by-Step Actions**: One action per step; use exact UI path labels and field names
- **Safe Defaults and Decision Points**: Include safe defaults and document decision points where the reader must choose
- **Verification & Validation**: Confirm successful implementation and correct functioning for every step
- **Congruence Check**: Ensure solution addresses the problem statement

#### 5. Verification and Evidence
- **Interface Checks**: Verify configuration in SafeSquid interface
- **Log Analysis**: Review logs for proper functioning
- **Performance Validation**: Confirm solution performs correctly or identify needed tweaks
- **Auditor-Ready Evidence**: Include report names, export paths, and screenshot or log snippets so the control can be demonstrated (where to see logs, which report to run, what evidence to export)

#### 6. Troubleshooting
- **Symptom → Cause → Resolution → Verification**: Structure each issue as symptom, likely cause, resolution, and how to verify the fix
- **Escalation Criteria**: When to contact support; for CISO-owned incidents, when to escalate to vendor

**Optional—CISO takeaway**: For longer or compliance-heavy docs (e.g. SSL inspection, DLP, authentication, audit and forensics), consider a short "CISO takeaway" (2–3 sentences) at or near the top: risk in one line, control in one line, and what the CISO can show (evidence). This is recommended, not a seventh mandatory section.

**Next steps / Related topics:** Every how-to and get_started guide must end with a short "Next steps" (or equivalent heading) linking to the next logical task (e.g. "Configure access policies" or "Verify in Reporting") and optionally 1–3 related docs. This can be the final sub-part of Implementation Actions or Verification and Evidence, or a separate section so it is never omitted.

### Onboarding Quality Standard

A **get_started** guide must take a first-time admin from zero to a working deployment.

**Required sections:**
- Goal statement (one paragraph)
- Prerequisites (explicit)
- Steps (minimal Day-1)
- Verification (proof of success)
- Next steps (links to use-case guides)

**Behavior:**
- Prefer the most general deployment path
- Defer advanced variants to separate guides
- Provide a decision gate only when mandatory (e.g. management strategy)

### Content Standards

#### Voice and Tone
- **Professional**: Maintain enterprise-grade technical documentation standards
- **Clear and Direct**: Use precise, unambiguous language
- **Consistent**: Follow established terminology and naming conventions
- **Accessible**: Write for users with varying technical expertise levels

#### Documentation Style Guide

**PBAC Methodology**:
- Focus 90% on the problem, and 10% on the rest
- Use narrative style to tell the story of the problem & solution in natural deducing flow
- Cover all cases to avoid ambiguity

**User focus:** Center content on user goals (what the user will achieve) rather than product features alone.

**PBAC flow:**
- Problem-first
- Benefit and risk language mandatory
- Advantage is factual and comparative
- Call-to-action is procedural and testable

**Headings rules:**
- Headings must be 3–7 words and state the conclusion, not the topic
- Avoid templated headings like "Overview" or "Introduction"

**Clarity rules:**
- Spell out acronyms on first use (e.g. "Zero Trust Network Access (ZTNA)"); optionally link to glossary or concept doc
- Avoid ambiguous verbs: "configure", "set", "update" must name exact target (e.g. "set the TLS inspection policy rule")
- Use concrete nouns: "policy rule", "TLS handshake", "HTTP CONNECT", "DLP event"
- Use meaningful link text (no "click here")

**Writing Style Requirements:**
- [ ] Use minimum words → remove anything not adding value
- [ ] No pronouns → always use proper nouns
- [ ] Active voice only
- [ ] Keep sentences short: prefer 8–12 words when possible; maximum ≤ 20 words
- [ ] Use narrative style
- [ ] Cover all cases → avoid ambiguity
- [ ] Always be technically precise with correct terminology
- [ ] No unnecessary jargon
- [ ] Keep simple enough for layman but never dumb it down
- [ ] Use memorable phrases
- [ ] Headings = bottomline (state the key point directly)
- [ ] Neutral tone → no glorifying words, no adverbs
- [ ] **Risk-and-control language**: Name the risk, then the control and outcome
- [ ] **Compliance framing**: Where a feature supports compliance, name the framework or requirement (e.g. HIPAA, GDPR, PCI-DSS) and what the organization can show (logs, reports, config)
- [ ] **Limitations and trade-offs**: State limitations and trade-offs clearly (e.g. bypass rules, performance impact, browser trust). Avoid unqualified marketing language; keep tone factual and audit-friendly
- [ ] Use diagrams wherever possible
- [ ] Add interlinking to related docs
- [ ] Insert external links for 3rd-party tools
- [ ] Include SEO metatags & keywords
- [ ] Add screenshots & logs tied to each feature

**Structure Requirements:**
- Start each document with proper frontmatter (title, description, keywords)
- Use clear, hierarchical headings (H1 for title, H2 for main sections, H3 for subsections)
- Include step-by-step instructions where applicable
- Provide code examples with proper syntax highlighting
- Add troubleshooting sections for complex procedures

**Formatting Standards:**
```markdown
---
title: "Document Title"
description: "Brief purpose statement"
keywords:
  - keyword1
  - keyword2
  - keyword3
# optional: sidebar_position (when required by section conventions)
---

# Bottom-line title

## Bottom-line section heading

### Specific subheading

`inline code`

    # command (code blocks with syntax highlighting)
```

**Language Guidelines:**
- Use present tense for procedures ("Click the Button" not "You should click")
- Use active voice ("Create a new policy" not "A new policy should be created")
- Avoid jargon unless defined; explain technical terms on first use
- Use consistent terminology (e.g., always "SafeSquid SWG" not "SWG")
- **UI elements:** Use **bold** or `code` for UI labels, buttons, and menu paths (e.g. **Configuration → NGFW**); be consistent so readers can scan for exact strings

#### Admonitions (callouts)

Use callout boxes to surface important information without cluttering the main flow.

- **Note:** Additional useful information that does not fit in the main flow (e.g. "This applies only when Feature Y is enabled"; feature availability or plan scope). A single Note at page top may state scope/availability (e.g. "This feature is available on Enterprise plan only") without a header inside step-by-step.
- **Tip / Best practice:** Optimal configuration or recommended approach; tone suggestive ("We recommend…"), not mandatory.
- **Warning / Caution:** Behavior that could impact security or break functionality; state the risk clearly (e.g. "Disabling TLS verification may expose to man-in-the-middle attacks"). Place immediately before the relevant step.

**Rules:** At most one of each type per section to avoid clutter. Keep callout content short (ideally a few lines or bullets)—if longer, move to a dedicated section. Place each callout at the point of relevance.

#### Code Examples
- Include complete, working examples
- Use appropriate syntax highlighting
- Provide context for code snippets
- Include expected outputs when relevant
- Test all code examples before publication

#### Visual Evidence Standard

**Images:**
- Store in `/static/img/` (reference as `/img/category/image-name.webp`)
- Prefer WebP; filenames: `feature-short_description.webp`
- Always include meaningful alt text
- **Mandatory**: Add screenshots and logs tied to each feature; include interface screenshots for verification steps

**Diagrams:**
- Use diagrams for: traffic flows, trust boundaries, control points, policy evaluation order
- Prefer **Mermaid** for process flows and sequence diagrams when possible (text-based, searchable, easy to update); use SVG for complex or custom diagrams
- Always provide a short caption or alt text describing what the diagram shows
- Use diagrams wherever possible to illustrate complex concepts

**Logs:**
- For each major step include: what to check, where to check, an example log line pattern, and expected "success" indicators

## Research Methodology

Complete the research process and checklist below before drafting any document. Research output is for agent use only; the final document contains only the 6 mandatory content blocks, not a visible "Research" section.

### Required source categories (minimum before writing)

- **SafeSquid resources**: Official product docs, admin guides, release notes, and (if available) architecture or security docs for the feature
- **Industry standards and frameworks**: NIST (e.g. NIST SP 800-63, 800-53), ISO/IEC 27001, CIS Controls, or domain-specific (PCI-DSS, HIPAA, GDPR) as relevant to the feature
- **Threat and risk context**: How the threat landscape or common failures motivate this control (e.g. encrypted traffic blind spots, DLP, phishing). Use vendor-agnostic or vendor sources with clear attribution
- **Competitor and market context**: How SWG or similar solutions (e.g. Zscaler, Netskope, Palo Alto, Cisco, Cloudflare) address the same problem—capabilities and trade-offs—for comparison only; keep tone factual and non-derogatory
- **Related sections**: Other SafeSquid docs that this feature depends on or integrates with (auth, reporting, DLP, etc.) so the narrative is consistent and cross-linked

### Research verification steps

- Confirm technical steps and UI paths against current product behavior (or note version or limitation)
- Verify regulatory or framework references (correct control IDs or clause references where cited)
- Ensure competitor claims are accurate and sourceable (no unsupported superlatives)

### Research output (not published verbatim)

Produce a short research note or outline: problem, risk, relevant standards, how SafeSquid addresses it, and key differentiators or trade-offs. Use this to inform the document; do not publish it as a section in the final doc.

### Research complete checklist

- [ ] SafeSquid sources reviewed for the feature
- [ ] At least one relevant standard or framework identified and mapped (where applicable)
- [ ] Threat or risk context for the control stated
- [ ] Related docs and integration points noted
- [ ] Technical and regulatory claims verified or scoped (e.g. version, limitation)

## Content Creation Workflow

### Document Creation Process
1. **Research**: Follow the Research Methodology section; complete the research checklist before drafting
2. **Select content type and decide page goal**: Choose get_started, how_to, admin_guide, concepts, reference, or troubleshooting and state the single purpose of the page
3. **Plan headings**: Use bottom-line statements (3–7 words, conclusion not topic)
4. **Draft**: Create the document using the six-block scaffolding and PBAC methodology
5. **Add evidence**: Add diagrams, screenshots, and log evidence (what to check, where, pattern, success indicators)
6. **Add cross-links and next steps**: Link to related docs and point to logical next steps
7. **Run pre-publication checklist**: Complete the Pre-Publication Checklist before considering the doc done

Save the document in the appropriate `docs/` or `blog/` subfolder (see File Organization).

### File Organization
- **Documentation**: Place in `docs/[section-number]-[section-name]/`
- **Blog Posts**: Place in `blog/` with date prefix (YYYY-MM-DD-Title.md)
- **Images**: Reference images in `/static/img/` directory
- **Cross-references**: Link to other documents using relative paths

### Main File Requirements

**CRITICAL**: Every folder within `docs/` must contain a `main.md` file that serves as the section overview:

#### Main File Structure
The `main.md` file in each folder must include:

1. **Section Overview**: Brief description of what the section covers
2. **Document Index**: List and brief description of every document in the folder

Main files may contain Prerequisites, procedures, troubleshooting, or external resource lists (e.g. SafeSquid Resources, Industry Standards, Competitor Solutions, Related Sections) when they support the section overview and navigation.

Main files serve as navigation hubs that link to detailed documents.

**Heading Requirements**: All headings must be specific 3-7 word phrases that convey the bottom line directly. Avoid generic headings like "What This Section Covers" or "Overview". Use actionable, specific titles that state the key point immediately.

**CRITICAL**: Do not use templated headings. Each heading must be unique and specific to the section's actual content and purpose.

#### Main File Structure Requirements
```markdown
---
title: "Section Name Overview"
description: "Brief description of this section's purpose"
keywords:
  - keyword1
  - keyword2
  - keyword3
---

# Section Name Overview

## [Specific Section Capability]
Brief introduction explaining the section's scope and purpose.

## [Specific Implementation Type]

### Document 1: [Title](document-link.md)
[Specific description]: Problem → Benefit → Advantage → Call-to-Action in 4 sentences (one sentence per component).

### Document 2: [Title](document-link.md)  
[Specific description]: Problem → Benefit → Advantage → Call-to-Action in 4 sentences (one sentence per component).
```

**Document Description Requirements**: Each document description must include a PBAC structure (Problem → Benefit → Advantage → Call-to-Action) in exactly 4 sentences - one sentence for each component that explains what the document addresses and why it's valuable. Use specific, unique descriptions rather than templated phrases.

**Note**: Replace bracketed placeholders with actual, specific headings that describe the section's unique content. Each section should have headings tailored to its specific purpose and capabilities.

#### Benefits of Main Files
- **Improved Navigation**: Users can quickly scan all available content
- **Logical Grouping**: Related documents are clearly grouped and connected
- **Reduced Redundancy**: Main files eliminate need for repetitive introductions
- **Search Optimization**: Better SEO with comprehensive section overviews
- **Structured Descriptions**: Each document link includes Problem-Benefit-Advantage-Call-to-Action summary
- **Navigation Hub**: Serves as central point linking to detailed implementation documents

## Testing Instructions

### Pre-Publication Checklist

#### Content Validation
- [ ] Frontmatter complete (title, description, keywords; optional sidebar_position)
- [ ] Correct content type and page goal
- [ ] Six content blocks present and ordered
- [ ] Headings are bottom-line, 3–7 words
- [ ] Steps are atomic; UI paths precise
- [ ] Verification includes UI + logs + evidence export
- [ ] Troubleshooting is symptom-first (symptom → cause → resolution → verification)
- [ ] Compliance mapping included when relevant
- [ ] Trade-offs and limitations stated
- [ ] All code tested or scoped with version
- [ ] Screenshots match current UI
- [ ] Images load properly and have alt text
- [ ] Internal links are relative and valid
- [ ] Main file (`main.md`) exists in folder and contains section overview with complete document index; **main.md index updated** for any new or changed docs
- [ ] Next steps / related topics present at end of guide (how-to and get_started)
- [ ] Admonitions used correctly (Note vs Tip vs Warning/Caution) and sparingly (at most one of each type per section)
- [ ] Acronyms expanded on first use; UI labels and menu paths in **bold** or `code`
- [ ] Diagrams have caption or alt text; Mermaid preferred for process flows
- [ ] PBAC methodology and flow followed (Problem → Benefit → Advantage → Call-To-Action)
- [ ] Writing style requirements met (no pronouns, active voice, ≤20 words per sentence)
- [ ] **CISO-grade**: Risk and business impact stated in problem or benefits
- [ ] **CISO-grade**: At least one standard, framework, or compliance use case referenced where relevant
- [ ] **CISO-grade**: Evidence or audit trail (logging, reporting, proof of control) described
- [ ] **CISO-grade**: Limitations and trade-offs stated where applicable
- [ ] Main file follows prescribed structure and format

#### Content Quality Testing

**Document Validation:**
- [ ] Document follows markdown syntax correctly
- [ ] All internal links use relative paths
- [ ] Images reference correct paths in `/static/img/`
- [ ] Frontmatter syntax is valid YAML
- [ ] Code blocks have proper syntax highlighting

#### Content Quality Assurance

**Accuracy Checks:**
- [ ] Technical information is current and correct
- [ ] Screenshots match current interface
- [ ] Version numbers and compatibility information are accurate
- [ ] Procedures produce expected results

**Consistency Checks:**
- [ ] Terminology matches style guide
- [ ] Formatting follows established patterns
- [ ] Cross-references link to correct documents
- [ ] Examples align with product capabilities

### Content Review Process

**Peer Review Checklist:**
- [ ] Technical accuracy verified by subject matter expert
- [ ] Writing style compliance confirmed
- [ ] All mandatory sections included
- [ ] Screenshots and logs properly integrated
- [ ] Competitive positioning appropriate

**Final Validation:**
- [ ] Document ready for publication
- [ ] All guidelines followed
- [ ] Content adds value to documentation
- [ ] Proper file placement in project structure

## Security Considerations

### Access Control and Permissions

#### Repository Access
- **Read Access**: Public for documentation consumers
- **Write Access**: Restricted to authorized technical writers and developers
- **Admin Access**: Limited to documentation maintainers and DevOps team

#### Content Security Policies

**Sensitive Information Handling:**
- Never include actual credentials, API keys, or passwords in examples
- Use placeholder values (e.g., `your-secret-key`, `your-domain.com`)
- Mark sensitive configuration points clearly in documentation
- Provide secure alternatives for credential management

**Security Headers and Configuration:**
- All documentation should promote secure configuration practices
- Include warnings about insecure configurations
- Provide examples of security-hardened setups
- Document security-related features and their proper configuration

**Safe configuration emphasis:**
- Promote hardened defaults
- Add warnings for risky settings
- Provide rollback guidance for changes affecting connectivity

### Data Protection

#### User Data Privacy
- Documentation should not expose or reference real user data
- Use anonymized examples and test data
- Respect privacy when documenting customer support scenarios
- Follow GDPR/privacy guidelines for any international compliance

#### Content Validation
- Review all external links for security risks
- Validate that referenced resources are legitimate and secure
- Ensure downloadable examples don't contain malware
- Verify third-party integrations are from trusted sources

### Deployment Security

#### Infrastructure Security
- Production deployment requires secure server configuration
- Use HTTPS for documentation site
- Implement proper access controls for deployment processes
- Regularly update dependencies to address security vulnerabilities

**Dependency Security:**
```bash
# Regular security audits
npm audit

# Fix security vulnerabilities
npm audit fix
```

#### Backup and Recovery
- Maintain regular backups of documentation content
- Test restore procedures periodically
- Document disaster recovery processes
- Keep copies of critical documentation offline

### Operational Security

#### Documentation Maintenance
- Regularly review and update security-related documentation
- Remove outdated security information promptly
- Monitor for compromised or invalid external links
- Maintain awareness of product security updates

#### Monitoring and Logging
- Monitor documentation site for unusual access patterns
- Log administrative changes to documentation
- Track user feedback for security-related concerns
- Maintain audit trails for documentation changes

## Content Delivery Workflow

### Pre-Publication Steps
1. **Content Creation**: Write or update documentation following guidelines
2. **Content Review**: Ensure content meets all standards
3. **Technical Validation**: Verify all procedures work correctly
4. **Final Approval**: Confirm content is ready for publication

### Content Delivery Process
1. **File Creation**: Create document in appropriate `docs/` or `blog/` folder
2. **Content Validation**: Ensure all guidelines are followed
3. **Ready for Build**: Content is ready for the build process (handled by others)
4. **Stakeholder Notification**: Inform relevant parties of new content

### Post-Creation Maintenance
- Monitor feedback on created content
- Address reported issues promptly
- Schedule regular content reviews and updates
- Maintain documentation freshness and accuracy
- Where the publishing pipeline supports it, ensure each page can show last-reviewed or last-updated date so readers can assess freshness

---

*This documentation agent guide should be reviewed and updated regularly to reflect changes in technology, processes, and organizational requirements.*