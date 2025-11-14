# Documentation Agent Guide

**RULE: No files or folders should have space in their name. Always use underscores (_). Example: getting_started, not Getting Started or getting started.**

This guide provides comprehensive instructions for AI agents working with the SafeSquid SWG documentation project. It covers research, writing, editing, and publishing procedures to maintain high-quality technical documentation.

## Agent Scope and Limitations

**CRITICAL**: This agent is designed exclusively for content creation and documentation writing. The agent should:

✅ **DO:**
- Create and edit documents in the `docs/` folder
- Create and edit blog posts in the `blog/` folder
- Research and write technical content
- Follow documentation guidelines and standards
- Update existing documentation files

❌ **DO NOT:**
- Build or modify the Docusaurus project infrastructure
- Change configuration files (docusaurus.config.ts, package.json, etc.)
- Modify build scripts or deployment processes
- Alter the project structure outside of content folders
- Install dependencies or run build commands

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

### Project Structure
```
docs/
├── docs/                    # Main documentation content
│   ├── 01-Getting Started/ # Basic setup and installation
│   ├── 02-SafeSquid SWG/   # Core application features
│   ├── 03-SSL Inspection/  # Security configurations
│   ├── ...                 # Additional feature sections
│   └── 15-FAQs/           # Frequently asked questions
├── blog/                   # Security-related blog posts
├── src/                    # Custom components and styling
├── static/                 # Images and assets
└── docusaurus.config.ts    # Docusaurus configuration
```

### Technical Infrastructure
- **Node.js**: Version ≥18.0 required
- **Package Manager**: npm
- **Build System**: Docusaurus build pipeline
- **Hosting**: Apache/Nginx web servers
- **Search**: Algolia integration
- **Analytics**: Google Analytics integration

## Writing Guidelines

### Mandatory Document Structure

All how-to documents must include the following sections in this exact order:

#### 1. Problem Statement
- **Security Challenge**: Briefly describe the security or operational challenge this feature addresses
- **Real-World Scenarios**: Illustrate why and when a client would need this feature
- **Business Context**: Connect technical problems to business impact

#### 2. Key Benefits
- **Desired Outcome**: Highlight the primary advantages and security outcomes of enabling this feature
- **Value Proposition**: Quantify benefits where possible (performance improvements, security enhancements)
- **Competitive Advantage**: Position against competitor solutions

#### 3. Prerequisites
- **Client-Side Preparations**: Tasks that the client must complete independently (e.g., setting up a firewall, generating certificates)
- **SafeSquid-Side Setup**: Required configurations within SafeSquid prior to enabling the feature
- **System Requirements**: Hardware, software, and network prerequisites

#### 4. Call to Action
- **Step-by-Step Actions**: Detailed implementation procedures
- **Verification & Validation**: Confirm successful implementation and correct functioning for every step
- **Congruence Check**: Ensure solution addresses the problem statement

#### 5. Solution Verification
- **Interface Checks**: Verify configuration in SafeSquid interface
- **Log Analysis**: Review logs for proper functioning
- **Performance Validation**: Confirm solution performs correctly or identify needed tweaks

#### 6. Troubleshooting Guide
- **Common Issues & Scenarios**: List of potential errors or misconfigurations
- **Resolution Steps**: Clear solutions mapped to each issue
- **Escalation Procedures**: When to contact support

### Content Standards

#### Voice and Tone
- **Professional**: Maintain enterprise-grade technical documentation standards
- **Clear and Direct**: Use precise, unambiguous language
- **Consistent**: Follow established terminology and naming conventions
- **Accessible**: Write for users with varying technical expertise levels

#### Documentation Style Guide

**PBAC Methodology**: Follow Problem → Benefit → Advantage → Call-To-Action structure
- Focus heavily on the problem statement
- Use narrative style to tell the story of the problem & solution in natural deducing flow
- Cover all cases to avoid ambiguity

**Writing Style Requirements:**
- [ ] Use minimum words → remove anything not adding value
- [ ] No pronouns → always use proper nouns
- [ ] Active voice only
- [ ] Keep sentences short (≤ 20 words)
- [ ] Use narrative style
- [ ] Cover all cases → avoid ambiguity
- [ ] Always be technically precise with correct terminology
- [ ] No unnecessary jargon
- [ ] Keep simple enough for layman but never dumb it down
- [ ] Use memorable phrases
- [ ] Headings = bottomline (state the key point directly)
- [ ] Neutral tone → no glorifying words, no adverbs
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
description: "Brief description of the document's purpose"
keywords:
  - keyword1
  - keyword2
  - keyword3
---

# Main Title

## Section Header

### Subsection Header

**Bold text** for emphasis
*Italic text* for subtle emphasis

`Code snippets` for inline code

```bash
Code blocks with syntax highlighting
```
```

**Language Guidelines:**
- Use present tense for procedures ("Click the Button" not "You should click")
- Use active voice ("Create a new policy" not "A new policy should be created")
- Avoid jargon unless defined; explain technical terms on first use
- Use consistent terminology (e.g., always "SafeSquid SWG" not "SWG")

#### Code Examples
- Include complete, working examples
- Use appropriate syntax highlighting
- Provide context for code snippets
- Include expected outputs when relevant
- Test all code examples before publication

#### Images and Diagrams
- Store images in `/static/img/` directory
- Use descriptive filenames following the pattern: `feature-description.webp`
- Include alt text for accessibility
- Optimize images for web (WebP format preferred)
- Use relative paths: `/img/category/image-name.webp`
- **Mandatory**: Add screenshots & logs tied to each feature
- Use diagrams wherever possible to illustrate complex concepts
- Include interface screenshots for verification steps

### Content Categories

#### Installation and Setup Guides
- Hardware requirements and provisioning
- Step-by-step installation procedures
- Initial configuration steps
- Verification and testing procedures
- **Must include**: Problem statement, benefits, prerequisites, call-to-action, verification, troubleshooting

#### Configuration Documentation
- Feature-specific setup procedures
- Policy configuration examples
- Integration guides for third-party systems
- Best practice recommendations
- **Must include**: Problem statement, benefits, prerequisites, call-to-action, verification, troubleshooting

#### Troubleshooting Guides
- Common issues and solutions
- Diagnostic procedures
- Performance troubleshooting
- Security-related problems
- **Must include**: Problem statement, benefits, prerequisites, call-to-action, verification, troubleshooting

#### Use Case Documentation
- Real-world implementation scenarios
- Industry-specific configurations
- Integration patterns
- Case studies and examples
- **Must include**: Problem statement, benefits, prerequisites, call-to-action, verification, troubleshooting

### Competitive Positioning
- Reference competitor solutions where relevant (Palo Alto Networks, Cato Networks, Netskope, Zscaler, Cisco, Forcepoint, Broadcom, Trend Micro, Sophos, Barracuda, Checkpoint, Versa, Cloudflare, Fortinet, HPE)
- Highlight SafeSquid SWG advantages over competitors
- Position features in context of market alternatives

## Content Creation Workflow

### Document Creation Process
1. **Research Phase**: Gather information about the feature or topic (External Resources, SafeSquid Resources, Industry Standards, Competitor Solutions, Related Sections - for research only, not to be included in documents)
2. **Structure Planning**: Plan the 6-section document structure
3. **Content Writing**: Create the document following PBAC methodology
4. **Review and Edit**: Ensure compliance with all guidelines
5. **File Placement**: Save in appropriate `docs/` or `blog/` subfolder

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

**CRITICAL**: Main files must NOT contain:
- Prerequisites or requirements
- How-to instructions or step-by-step procedures
- Detailed implementation guides
- Troubleshooting information
- External Resources, SafeSquid Resources, Industry Standards, Competitor Solutions, or Related Sections

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
- [ ] All frontmatter is complete and accurate
- [ ] Document follows mandatory structure (Problem Statement, Benefits, Prerequisites, Call-to-Action, Verification, Troubleshooting)
- [ ] All headings are properly formatted and state key points directly
- [ ] Code examples are tested and functional
- [ ] Links are valid and point to correct resources
- [ ] Images load properly and have alt text
- [ ] Screenshots & logs are tied to each feature
- [ ] Spelling and grammar are correct
- [ ] PBAC methodology is followed (Problem → Benefit → Advantage → Call-To-Action)
- [ ] Writing style requirements are met (no pronouns, active voice, ≤20 words per sentence)
- [ ] Technical precision is maintained throughout
- [ ] Competitive positioning is included where relevant
- [ ] Main file (`main.md`) exists in folder and contains section overview with complete document index
- [ ] All documents in folder are cross-referenced in the main file
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

## Additional Resources

### Documentation Templates
- Installation guide template
- Configuration reference template
- Troubleshooting guide template
- Use case scenario template

### Writing Tools and Resources
- Markdown editors for authoring
- Screenshot capture tools for visual documentation
- Diagram creation tools for technical illustrations
- Code syntax highlighting reference

### Support and Contact Information
- SafeSquid technical support: help.safesquid.com
- Community forum for discussions
- Emergency documentation contacts
- Escalation procedures for critical issues

---

*This documentation agent guide should be reviewed and updated regularly to reflect changes in technology, processes, and organizational requirements.*
