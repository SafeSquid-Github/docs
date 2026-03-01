# SafeSquid Documentation - SectionXML Implementation Plan

## Overview
Transform SafeSquid documentation using the section XML as the single source of truth for all configuration sections (except common pages like Getting Started, Installation, etc.).

## Inspiration from Apache & OpenSSL Documentation

### Apache HTTP Server Documentation Pattern
- **Module-based organization**: Each module has its own page
- **Directive reference**: Alphabetical listing with Syntax, Default, Context, Description
- **Consistent structure**: Name → Synopsis → Description → Options → Examples → See Also
- **Cross-references**: Heavy linking between related directives/modules
- **Context tags**: Clear indication of where directive can be used

### OpenSSL Documentation Pattern
- **Command reference**: One page per command/config section
- **Structured format**: NAME, SYNOPSIS, DESCRIPTION, OPTIONS, EXAMPLES
- **Configuration file docs**: Section-based with field-by-field explanation
- **Clear hierarchy**: Main sections → subsections → individual options

### Pattern for SafeSquid
Combine both approaches:
- **Section-based** (like Apache modules)
- **Field reference tables** (like OpenSSL config docs)
- **Hierarchical navigation** by parent groups
- **Rich examples and use cases**

---

## XML Structure Analysis

### Main Elements in Section XML

```xml
<section_name>
  <enabled>true|false</enabled>
  <comment>Display Name</comment>
  <parentgroup>Group (infrastructure|configure|policymgr|etc)</parentgroup>
  <logo>Font Awesome icon</logo>
  <desc><![CDATA[HTML description]]></desc>
  <type>section|group|app</type>
  <wizard>true|false</wizard>
  <flags>0|1</flags>
  
  <!-- Global settings -->
  <global>
    <field_name n="0">
      <comment>Field Label</comment>
      <value>default_value</value>
      <type>BOOL|STRING|INT|etc</type>
      <desc><![CDATA[Field description]]></desc>
    </field_name>
  </global>
  
  <!-- Entry templates (form field definitions) -->
  <template>
    <entry>
      <field_name n="0">
        <comment>Field Label</comment>
        <value>default</value>
        <type>BOOL|STRING|INT|STRING_LIST|etc</type>
        <desc><![CDATA[HTML description]]></desc>
        <neg>0|1</neg>
        <optional>true|false</optional>
      </field_name>
    </entry>
  </template>
  
  <!-- Select options (dropdown values) -->
  <select>
    <option_group>
      <OPTION_NAME>
        <comment>Display Name</comment>
        <value>actual_value</value>
        <desc><![CDATA[Option description]]></desc>
      </OPTION_NAME>
    </option_group>
  </select>
  
  <!-- Subsections -->
  <subsection>
    <subsection_name>
      <enabled>true</enabled>
      <comment>Display Name</comment>
      <template>entry_template_name</template>
      <parentgroup>inherit</parentgroup>
      <desc><![CDATA[Description]]></desc>
      <wizard_action>true|false</wizard_action>
    </subsection_name>
  </subsection>
</section_name>
```

### Identified Parent Groups
- `infrastructure` - Core proxy setup
- `configure` - Configuration sections
- `policymgr` - Policy management
- `profilesdef` - Profile definitions
- `antivirus` - Security features
- `accelerator` - Performance features
- `filter` - Filtering/privacy

### Field Types
- `BOOL` - Boolean (TRUE/FALSE)
- `STRING` - Text input
- `MULTILINE_STRING` - Textarea
- `INT` - Integer number
- `UINT` - Unsigned integer
- `FILE_SIZE` - Size with K/M/G units
- `LONG_FILE_SIZE` - Large file size
- `IP_RANGE_LIST` - IP address ranges
- `PORT_RANGE_LIST` - Port ranges
- `STRING_LIST` - Comma-separated list
- `STRING_SELECT_ONE` - Dropdown (single)
- `STRING_SELECT_MANY` - Multi-select
- `STRING_RANGE` - Range selector
- `INT_RANGE` - Integer range

---

## Documentation Structure

### Directory Organization

```
docs/
├── configuration/               # Root for all config sections
│   ├── index.mdx               # Overview of all sections
│   │
│   ├── infrastructure/          # Parent group
│   │   ├── index.mdx           # Group overview
│   │   ├── access.mdx          # Section page
│   │   ├── accelerators.mdx
│   │   ├── forward.mdx
│   │   └── ...
│   │
│   ├── security/                # Renamed from 'antivirus' for clarity
│   │   ├── index.mdx
│   │   ├── real-time-content-security.mdx
│   │   ├── clamav.mdx
│   │   ├── dnsbl.mdx
│   │   └── ...
│   │
│   ├── policy-management/
│   │   ├── index.mdx
│   │   ├── cookies-filtering.mdx
│   │   └── ...
│   │
│   ├── profiles/
│   │   ├── index.mdx
│   │   ├── application-signatures.mdx
│   │   ├── content-signatures.mdx
│   │   └── ...
│   │
│   ├── performance/             # Renamed from 'accelerator'
│   │   ├── index.mdx
│   │   ├── cache.mdx
│   │   └── ...
│   │
│   └── privacy/                 # Renamed from 'filter'
│       ├── index.mdx
│       └── ...
│
├── reference/
│   ├── field-types.mdx          # Documentation of all field types
│   ├── common-patterns.mdx      # Regex patterns, examples
│   └── glossary.mdx             # Terms and concepts
│
└── [existing directories like getting-started, etc.]
```

### Page Template Structure (MDX)

```mdx
---
title: {Section Display Name}
description: {Brief description from XML}
sidebar_label: {Short name}
sidebar_position: {Order number}
tags: [{parentgroup}, configuration]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# {Section Display Name}

{Extract clean description from XML <desc> element}

## Overview

{Expanded description explaining what this section does}

## Global Settings

{If <global> element exists, create table:}

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| {field comment} | {type} | {value} | {cleaned desc} |

## Configuration Fields

{For each field in <template><entry>:}

### {Field Comment}

**Type:** `{type}`  
**Default:** `{value}`  
{if optional}**Optional:** Yes{/if}  
{if neg}**Supports Negation:** Yes (use `!` prefix){/if}

{Cleaned description from CDATA}

{If STRING_SELECT_ONE or STRING_SELECT_MANY, create options table:}

**Available Options:**

| Option | Value | Description |
|--------|-------|-------------|
| {option comment} | {option value} | {option desc} |

## Subsections

{For each subsection:}

### {Subsection comment}

{Subsection description}

{Link to subsection details if complex}

## Examples

{Create practical examples based on:}
1. Common use cases mentioned in descriptions
2. Field combinations that make sense together
3. Real-world scenarios

### Example 1: {Scenario}

```xml
{Example configuration}
```

**Explanation:** {What this does}

## Related Sections

{Extract cross-references from:}
- Fields that reference other profiles/sections
- Parent group siblings
- Logical workflow connections

## Troubleshooting

{If applicable, add common issues based on field descriptions}

---

## Field Reference

{Detailed alphabetical reference of all fields with anchors}

```

---

## Implementation Approach

### Phase 1: XML Parser & Generator Script

**Tool:** Node.js script (integrate with existing Next.js build)

**Script: `scripts/generate-section-docs.js`**

```javascript
// Responsibilities:
1. Parse section XML file
2. Extract section metadata, global settings, templates, selects, subsections
3. Clean HTML from CDATA (convert to markdown where possible)
4. Generate MDX files based on templates
5. Create navigation structure (sidebars.js)
6. Generate index pages for parent groups
```

**Key Functions:**
- `parseXML(xmlPath)` - Parse XML to JSON structure
- `extractSection(sectionNode)` - Extract section data
- `cleanDescription(cdataHtml)` - Convert HTML to clean markdown
- `generateMDX(sectionData, template)` - Generate MDX from data + template
- `createNavigation(sections)` - Build sidebar structure
- `generateIndex(parentGroup, sections)` - Create group index pages

### Phase 2: MDX Templates

**Template: `templates/section-page.mdx.hbs`** (Handlebars)

```handlebars
---
title: {{title}}
description: {{description}}
sidebar_label: {{sidebarLabel}}
sidebar_position: {{position}}
tags: [{{tags}}]
---

# {{title}}

{{overview}}

{{#if globalSettings}}
## Global Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
{{#each globalSettings}}
| {{comment}} | `{{type}}` | `{{value}}` | {{description}} |
{{/each}}
{{/if}}

{{#if fields}}
## Configuration Fields

{{#each fields}}
### {{comment}}

**Type:** `{{type}}`  
{{#if value}}**Default:** `{{value}}`{{/if}}  
{{#if optional}}**Optional:** Yes{{/if}}  
{{#if neg}}**Supports Negation:** Yes{{/if}}

{{description}}

{{#if options}}
**Available Options:**

| Option | Value | Description |
|--------|-------|-------------|
{{#each options}}
| {{comment}} | `{{value}}` | {{description}} |
{{/each}}
{{/if}}

{{/each}}
{{/if}}

{{#if subsections}}
## Subsections

{{#each subsections}}
### {{comment}}

{{description}}

{{/each}}
{{/if}}

{{#if examples}}
## Examples

{{#each examples}}
### {{title}}

```{{lang}}
{{code}}
```

{{explanation}}

{{/each}}
{{/if}}

{{#if relatedSections}}
## Related Sections

{{#each relatedSections}}
- [{{title}}]({{link}})
{{/each}}
{{/if}}
```

### Phase 3: Navigation Generation

**File: `sidebars.js`** (auto-generated section)

```javascript
// Auto-generated from section XML - DO NOT EDIT MANUALLY
const configurationSidebar = {
  type: 'category',
  label: 'Configuration Reference',
  items: [
    {
      type: 'doc',
      id: 'configuration/index',
      label: 'Overview'
    },
    {
      type: 'category',
      label: 'Infrastructure',
      items: [
        'configuration/infrastructure/access',
        'configuration/infrastructure/accelerators',
        'configuration/infrastructure/forward',
        // ... auto-generated
      ]
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'configuration/security/real-time-content-security',
        'configuration/security/clamav',
        'configuration/security/dnsbl',
        // ... auto-generated
      ]
    },
    // ... other parent groups
  ]
};
```

### Phase 4: Styling & Components

**Custom Components:**

1. **FieldReference** - Styled field documentation
```jsx
<FieldReference
  name="Field Name"
  type="STRING_LIST"
  default="value"
  optional={true}
  negation={true}
>
  Field description content
</FieldReference>
```

2. **OptionTable** - Display select options
```jsx
<OptionTable options={[
  { name: 'ALLOW', value: 'TRUE', desc: 'Allow by default' },
  { name: 'DENY', value: 'FALSE', desc: 'Deny by default' }
]} />
```

3. **ConfigExample** - Configuration examples with syntax highlighting
```jsx
<ConfigExample
  title="Block Social Media"
  language="xml"
  explanation="This configuration blocks access to social media sites"
>
  {/* code */}
</ConfigExample>
```

### Phase 5: Search Optimization

**Algolia DocSearch Indexing:**
- Each field gets indexed with its type, description, section
- Options get indexed separately
- Examples get indexed with context
- Cross-references get indexed

**Metadata for SEO:**
```yaml
---
title: Access Restrictions - SafeSquid Configuration
description: Configure user access control, authentication, and restrictions in SafeSquid SWG
keywords: [access control, authentication, PAM, NTLM, user groups, proxy access]
---
```

---

## Migration Strategy

### What Stays Manual
- Getting Started
- Installation guides
- Tutorials
- Conceptual overviews
- Architecture diagrams
- Best practices
- Troubleshooting guides (general)

### What Gets Generated
- All configuration section pages (from XML)
- Field reference documentation
- Option/value tables
- Default configurations
- Section navigation

### Hybrid Approach
Some pages combine manual content (intro, examples, best practices) with generated content (field reference tables):

```mdx
---
title: Access Restrictions
---

{/* MANUAL CONTENT */}
# Access Restrictions

Access control in SafeSquid allows you to...

## Common Use Cases

1. **Corporate Network** - Authenticate users via Active Directory
2. **Public WiFi** - Allow limited access without authentication
3. **School Network** - Block access by time and user group

{/* GENERATED CONTENT */}
import GeneratedFields from './_generated/access-fields.mdx';

## Configuration Reference

<GeneratedFields />

{/* MANUAL CONTENT */}
## Best Practices

1. Always set a default deny policy for production
2. Use user groups for scalable access management
3. ...
```

---

## File Naming Conventions

### URL-Friendly Section Names
Convert XML section names to URL-friendly slugs:

| XML Section Name | File Name | URL |
|-----------------|-----------|-----|
| `access` | `access.mdx` | `/configuration/infrastructure/access` |
| `applicationSignatures` | `application-signatures.mdx` | `/configuration/profiles/application-signatures` |
| `cookies-filtering` | `cookies-filtering.mdx` | `/configuration/privacy/cookies-filtering` |
| `dnsbl` | `dns-blacklist.mdx` | `/configuration/security/dns-blacklist` |

**Rules:**
- camelCase → kebab-case
- Preserve hyphens in original name
- Use full words (no abbreviations in URLs unless already in XML)

---

## Data Flow

```
section.xml 
    ↓
[XML Parser]
    ↓
Structured JSON
    ↓
[Template Engine - Handlebars]
    ↓
MDX Files
    ↓
[Docusaurus Build]
    ↓
Static HTML Pages
```

---

## Validation & Quality Control

### Automated Checks
1. **XML Schema Validation** - Ensure XML structure is valid
2. **Required Fields** - Check all sections have title, description, type
3. **Broken References** - Verify profile references exist
4. **Markdown Lint** - Check generated MDX quality
5. **Link Checker** - Verify internal links work

### Manual Review Checklist
- [ ] Section descriptions are clear and user-friendly
- [ ] Examples are practical and complete
- [ ] Cross-references are accurate
- [ ] Field descriptions explain *why* not just *what*
- [ ] Navigation is logical and intuitive

---

## Build Integration

### Package.json Scripts

```json
{
  "scripts": {
    "generate:docs": "node scripts/generate-section-docs.js",
    "build": "npm run generate:docs && docusaurus build",
    "prebuild": "npm run generate:docs",
    "dev": "npm run generate:docs && docusaurus start"
  }
}
```

### CI/CD Pipeline

```yaml
# .github/workflows/docs-build.yml
name: Build Documentation

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run generate:docs
      - run: npm run build
      - run: npm run test:links
```

---

## Advantages of This Approach

### For Developers
✅ Single source of truth (XML)  
✅ Automated documentation generation  
✅ Consistent structure across all sections  
✅ Easy to maintain (edit XML, regenerate docs)  
✅ Type safety for field definitions  

### For Users
✅ Comprehensive field reference  
✅ Consistent page structure (easy to scan)  
✅ Rich examples and use cases  
✅ Better search (all fields indexed)  
✅ Up-to-date with actual application config  

### For Technical Writers
✅ Focus on examples and best practices (manual content)  
✅ Less tedious field documentation (auto-generated)  
✅ Can enhance generated content with manual sections  
✅ Clear separation of concerns  

---

## Next Steps

1. **Analyze complete XML structure** - Count sections, identify patterns
2. **Build XML parser** - Extract and structure data
3. **Create MDX templates** - Design page layouts
4. **Generate sample pages** - Test with 2-3 sections
5. **Review and iterate** - Refine templates based on output
6. **Generate all pages** - Run full generation
7. **Add manual enhancements** - Examples, best practices
8. **Integrate with build** - Automate in CI/CD
9. **Launch and gather feedback** - Iterate based on user input

---

## Questions to Address

1. **How to handle app-type sections** (like category_editor)?
   - These use custom HTML templates - may need special handling or manual pages

2. **How to version documentation with XML changes?**
   - Git track section.xml
   - Generate versioned docs for each SafeSquid version

3. **How to handle field interdependencies?**
   - Some fields reference others - show these relationships
   - Create "Required If" / "Related To" sections

4. **Example generation strategy?**
   - Manual curation for quality
   - Use XML descriptions as hints
   - Community-contributed examples

5. **Localization?**
   - XML descriptions are in English
   - Template structure supports i18n
   - Could parse translated XML versions

---

## Timeline Estimate

| Phase | Duration | Tasks |
|-------|----------|-------|
| **Planning & Analysis** | 1 day | Complete XML analysis, finalize structure |
| **Parser Development** | 2-3 days | Build and test XML parser, data extraction |
| **Template Creation** | 2 days | Design and implement MDX templates |
| **Sample Generation** | 1 day | Generate 5-10 sample pages, review |
| **Full Generation** | 1 day | Generate all pages, fix issues |
| **Manual Enhancements** | 3-5 days | Add examples, best practices, polish |
| **Integration & Testing** | 2 days | CI/CD, link checking, validation |
| **Review & Launch** | 1-2 days | Final review, deploy |

**Total:** ~2 weeks for full implementation

---

## Success Metrics

- [ ] 100% of configuration sections documented
- [ ] Consistent structure across all section pages
- [ ] Generated docs match XML structure exactly
- [ ] Build time < 2 minutes (including generation)
- [ ] Zero broken internal links
- [ ] All fields searchable via Algolia
- [ ] Positive user feedback on clarity and completeness

---

*Document Version: 1.0*  
*Date: 2026-03-01*  
*Author: Squid 🦑*
