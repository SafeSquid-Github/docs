# SafeSquid Documentation Generator

Automatically generates comprehensive MDX documentation from `section.xml`.

## Overview

This generator parses SafeSquid's configuration XML file and creates structured documentation pages with:

- **Section overviews** from XML descriptions
- **Global settings tables** with types, defaults, and descriptions
- **Field reference documentation** for all configuration fields
- **Option tables** for dropdown/select fields
- **Subsection documentation** for complex sections
- **Auto-generated navigation** and index pages

## Usage

### Generate Documentation

```bash
# Generate all documentation
npm run generate:docs

# Or run directly
node scripts/generate-section-docs.js
```

### Build with Generation

```bash
# Development (auto-generates then starts dev server)
npm start

# Production build (auto-generates then builds)
npm run build

# Skip generation (use existing files)
npm run build:skip-gen
```

## File Structure

```
scripts/
├── generate-section-docs.js    # Main generator script
└── debug-xml.js                # XML structure debugging tool

templates/mdx/
└── section.mdx.hbs             # Handlebars template for section pages

data/
└── section.xml                 # Source XML file (single source of truth)

docs/configuration/             # Generated output
├── index.mdx                   # Auto-generated index
├── infrastructure/
│   ├── access.mdx
│   ├── accelerator.mdx
│   └── ...
├── security/
│   ├── clamav.mdx
│   ├── dnsbl.mdx
│   └── ...
└── [other categories]/
```

## How It Works

1. **Parse XML** - Extracts sections, fields, options, and descriptions
2. **Clean Descriptions** - Converts HTML CDATA to clean markdown
3. **Generate MDX** - Applies Handlebars templates with extracted data
4. **Write Files** - Outputs structured MDX files to `docs/configuration/`
5. **Create Index** - Generates navigation index with all sections

## XML Structure

The generator expects this XML structure:

```xml
<allSections>
  <main>
    <section>
      <section_name>
        <enabled>true</enabled>
        <comment>Display Name</comment>
        <parentgroup>infrastructure|security|etc</parentgroup>
        <desc><![CDATA[HTML description]]></desc>
        <type>section|group|app</type>
        
        <global>
          <field_name n="0">
            <comment>Field Label</comment>
            <value>default_value</value>
            <type>BOOL|STRING|INT|etc</type>
            <desc><![CDATA[Description]]></desc>
          </field_name>
        </global>
        
        <template>
          <entry>
            <field_name n="0">
              <!-- field definition -->
            </field_name>
          </entry>
        </template>
        
        <select>
          <option_group>
            <OPTION_NAME>
              <comment>Display</comment>
              <value>actual_value</value>
              <desc><![CDATA[Description]]></desc>
            </OPTION_NAME>
          </option_group>
        </select>
        
        <subsection>
          <subsection_name>
            <!-- subsection definition -->
          </subsection_name>
        </subsection>
      </section_name>
    </section>
  </main>
</allSections>
```

## Parent Group Mapping

| XML parentgroup | Output Directory | Category Label |
|-----------------|------------------|----------------|
| `infrastructure` | `infrastructure/` | Infrastructure |
| `configure` | `configuration/` | Configuration |
| `policymgr` | `policy-management/` | Policy Management |
| `profilesdef` | `profiles/` | Profiles |
| `antivirus` | `security/` | Security |
| `accelerator` | `performance/` | Performance |
| `filter` | `privacy/` | Privacy Control |

## Field Types

Supported field types:

- `BOOL` - Boolean (TRUE/FALSE)
- `STRING` - Text input
- `MULTILINE_STRING` - Textarea
- `INT` / `UINT` - Integer numbers
- `FILE_SIZE` / `LONG_FILE_SIZE` - Sizes with K/M/G units
- `IP_RANGE_LIST` - IP address ranges
- `PORT_RANGE_LIST` - Port ranges
- `STRING_LIST` - Comma-separated list
- `STRING_SELECT_ONE` - Dropdown (single choice)
- `STRING_SELECT_MANY` - Multi-select checkboxes
- `STRING_RANGE` / `INT_RANGE` - Range selectors

## Customization

### Modify MDX Template

Edit `templates/mdx/section.mdx.hbs` to change the page structure:

```handlebars
---
title: {{title}}
description: {{description}}
---

# {{title}}

{{{description}}}

{{#if globalSettings}}
<!-- Global settings table -->
{{/if}}

<!-- Add your custom sections here -->
```

### Add Handlebars Helpers

Register helpers in `generate-section-docs.js`:

```javascript
Handlebars.registerHelper('myHelper', (value) => {
  return value.toUpperCase();
});
```

### Modify Output Structure

Change `helpers.getOutputPath()` to customize directory structure:

```javascript
getOutputPath(parentGroup) {
  const dirMapping = {
    infrastructure: 'infrastructure',
    // Add your custom mappings
  };
  return dirMapping[parentGroup] || 'other';
}
```

## Debugging

### View XML Structure

```bash
node scripts/debug-xml.js
```

This shows the raw parsed XML structure for specific sections.

### Check Generation Stats

The generator outputs detailed stats:

```
✨ Generation Complete!

📊 Stats:
   Total sections processed: 38
   Files generated: 38

   By category:
   - Infrastructure: 8
   - Security: 5
   - Profiles: 8
   ...
```

## Manual Enhancements

Generated files can be enhanced with:

1. **Examples** - Add practical configuration examples
2. **Best practices** - Include security/performance tips
3. **Troubleshooting** - Common issues and solutions
4. **Diagrams** - Mermaid diagrams for complex workflows
5. **Related links** - Cross-references to other sections

To preserve manual changes:

- Add content **outside** the auto-generated sections
- Or use a hybrid approach with separate files:
  - `access.mdx` (auto-generated)
  - `access-examples.mdx` (manual)

## Dependencies

- `fast-xml-parser` - XML parsing
- `handlebars` - Template engine
- `turndown` - HTML to Markdown conversion
- `js-yaml` - YAML frontmatter

## Troubleshooting

### "Template not found" error

Create the template file:

```bash
mkdir -p templates/mdx
touch templates/mdx/section.mdx.hbs
```

### Descriptions showing `[object Object]`

Check XML parser `cdataPropName` setting. Should be `false` to merge CDATA into text.

### Fields missing from output

Check field order (`n="0"` attribute) and ensure field has a `comment` property.

## Future Enhancements

- [ ] Generate sidebar navigation automatically
- [ ] Create custom React components for field reference
- [ ] Add search metadata for better Algolia indexing
- [ ] Support versioned documentation (multiple XML files)
- [ ] Generate comparison tables between sections
- [ ] Auto-generate field type reference documentation
- [ ] Add validation for required fields
- [ ] Support multiple languages (i18n)

## License

Part of SafeSquid Documentation - Internal Use Only
