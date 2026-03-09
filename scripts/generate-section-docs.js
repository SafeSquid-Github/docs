#!/usr/bin/env node

/**
 * SafeSquid Documentation Generator
 * Generates MDX documentation files from section.xml
 */

const fs = require('fs');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');
const Handlebars = require('handlebars');
const TurndownService = require('turndown');

// Configuration
const CONFIG = {
  xmlPath: path.join(__dirname, '../data/section.xml'),
  templatesDir: path.join(__dirname, '../templates/mdx'),
  outputDir: path.join(__dirname, '../docs/configuration'),
  backupDir: path.join(__dirname, '../docs/_generated_backup'),
};

// Initialize services
const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  emDelimiter: '*',
});

// Helper functions
const helpers = {
  /**
   * Convert HTML CDATA description to clean markdown
   */
  cleanDescription(cdataHtml) {
    if (!cdataHtml) return '';
    
    // Handle various input formats
    let html = '';
    
    if (typeof cdataHtml === 'string') {
      html = cdataHtml;
    } else if (typeof cdataHtml === 'object') {
      // Check for #cdata property (from XML parser)
      if (cdataHtml['#cdata']) {
        html = cdataHtml['#cdata'];
      } else if (cdataHtml['#text']) {
        html = cdataHtml['#text'];
      } else {
        // Try to stringify
        html = JSON.stringify(cdataHtml);
      }
    }
    
    html = html.toString().trim();
    
    // Remove CDATA tags if present
    html = html.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '');
    
    // Convert to markdown
    let markdown = turndownService.turndown(html);
    
    // Clean up extra whitespace
    markdown = markdown.replace(/\n{3,}/g, '\n\n').trim();
    
    return markdown;
  },

  /**
   * Get first paragraph/sentence from markdown for frontmatter
   */
  getFirstParagraph(markdown) {
    if (!markdown) return '';
    
    // Split by double newlines (paragraphs)
    const paragraphs = markdown.split(/\n\n+/);
    
    // Return first non-empty paragraph
    const firstPara = paragraphs.find(p => p.trim().length > 0) || '';
    
    // Replace single newlines with spaces for YAML compatibility
    return firstPara.replace(/\n/g, ' ').trim();
  },

  /**
   * Convert camelCase or PascalCase to kebab-case
   */
  toKebabCase(str) {
    return str
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase();
  },

  /**
   * Convert section name to title case
   */
  toTitleCase(str) {
    return str
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (char) => char.toUpperCase())
      .trim();
  },

  /**
   * Map parent group to human-readable category
   */
  mapParentGroup(parentGroup) {
    const mapping = {
      infrastructure: 'Infrastructure',
      configure: 'Configuration',
      policymgr: 'Policy Management',
      profilesdef: 'Profiles',
      antivirus: 'Security',
      accelerator: 'Performance',
      filter: 'Privacy Control',
      'quick-icon': 'Quick Access',
    };
    return mapping[parentGroup] || parentGroup;
  },

  /**
   * Get output directory based on parent group
   */
  getOutputPath(parentGroup) {
    const dirMapping = {
      infrastructure: 'infrastructure',
      configure: 'configuration',
      policymgr: 'policy-management',
      profilesdef: 'profiles',
      antivirus: 'security',
      accelerator: 'performance',
      filter: 'privacy',
    };
    return dirMapping[parentGroup] || 'other';
  },

  /**
   * Extract field metadata from template entry
   */
  extractFieldMetadata(field, fieldName) {
    return {
      name: fieldName,
      comment: field.comment || fieldName,
      type: field.type || 'STRING',
      value: field.value || '',
      description: this.cleanDescription(field.desc),
      optional: field.optional === 'true' || field.optional === true,
      negation: field.neg === '1' || field.neg === 1,
      order: parseInt(field['@_n'] || field.n || 0),
    };
  },
};

// Register Handlebars helpers
Handlebars.registerHelper('eq', (a, b) => a === b);
Handlebars.registerHelper('cleanDesc', (desc) => helpers.cleanDescription(desc));
Handlebars.registerHelper('kebab', (str) => helpers.toKebabCase(str));
Handlebars.registerHelper('json', (obj) => JSON.stringify(obj, null, 2));
Handlebars.registerHelper('escapeYaml', (str) => {
  if (!str) return '';
  // Escape double quotes and backslashes for YAML string values
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
});

/**
 * Parse section XML file
 */
function parseXML(xmlPath) {
  console.log(`📖 Reading XML from: ${xmlPath}`);
  
  const xmlContent = fs.readFileSync(xmlPath, 'utf-8');
  
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    textNodeName: '#text',
    cdataPropName: false, // CDATA content merged into text
    parseTagValue: false,
    parseAttributeValue: false,
    trimValues: true,
    allowBooleanAttributes: true,
    processEntities: true,
    htmlEntities: true,
  });
  
  const result = parser.parse(xmlContent);
  console.log('✅ XML parsed successfully');
  
  return result;
}

/**
 * Extract sections from parsed XML
 */
function extractSections(parsedXML) {
  console.log('🔍 Extracting sections...');
  
  const sections = [];
  const mainSections = parsedXML.allSections?.main?.section || {};
  
  for (const [sectionName, sectionData] of Object.entries(mainSections)) {
    // Skip non-section entries
    if (typeof sectionData !== 'object' || !sectionData.comment) {
      continue;
    }
    
    const fullDescription = helpers.cleanDescription(sectionData.desc);
    const shortDescription = helpers.getFirstParagraph(fullDescription);
    
    const section = {
      id: sectionName,
      slug: helpers.toKebabCase(sectionName),
      title: sectionData.comment || helpers.toTitleCase(sectionName),
      description: fullDescription || 'Configuration section for SafeSquid.',
      descriptionShort: shortDescription || 'Configuration section for SafeSquid.',
      enabled: sectionData.enabled === 'true' || sectionData.enabled === true,
      parentGroup: sectionData.parentgroup || 'other',
      parentGroupLabel: helpers.mapParentGroup(sectionData.parentgroup),
      outputDir: helpers.getOutputPath(sectionData.parentgroup),
      logo: sectionData.logo || '',
      type: sectionData.type || 'section',
      wizard: sectionData.wizard === 'true' || sectionData.wizard === true,
      flags: sectionData.flags || 0,
      
      // Global settings
      globalSettings: [],
      
      // Template fields
      templates: {},
      
      // Select options
      selects: {},
      
      // Subsections
      subsections: [],
    };
    
    // Extract global settings
    if (sectionData.global) {
      for (const [fieldName, fieldData] of Object.entries(sectionData.global)) {
        if (typeof fieldData === 'object' && fieldData.comment) {
          section.globalSettings.push(helpers.extractFieldMetadata(fieldData, fieldName));
        }
      }
      // Sort by order
      section.globalSettings.sort((a, b) => a.order - b.order);
    }
    
    // Extract templates
    if (sectionData.template) {
      for (const [templateName, templateData] of Object.entries(sectionData.template)) {
        if (typeof templateData === 'object') {
          const fields = [];
          
          for (const [fieldName, fieldData] of Object.entries(templateData)) {
            if (typeof fieldData === 'object' && fieldData.comment) {
              fields.push(helpers.extractFieldMetadata(fieldData, fieldName));
            }
          }
          
          fields.sort((a, b) => a.order - b.order);
          section.templates[templateName] = { name: templateName, fields };
        }
      }
    }
    
    // Extract select options
    if (sectionData.select) {
      for (const [selectGroup, selectOptions] of Object.entries(sectionData.select)) {
        if (typeof selectOptions === 'object') {
          const options = [];
          
          for (const [optionName, optionData] of Object.entries(selectOptions)) {
            if (typeof optionData === 'object' && optionData.comment) {
              options.push({
                name: optionName,
                comment: optionData.comment,
                value: optionData.value || '',
                description: helpers.cleanDescription(optionData.desc),
              });
            }
          }
          
          section.selects[selectGroup] = options;
        }
      }
    }
    
    // Extract subsections
    if (sectionData.subsection) {
      for (const [subsectionName, subsectionData] of Object.entries(sectionData.subsection)) {
        if (typeof subsectionData === 'object' && subsectionData.comment) {
          section.subsections.push({
            id: subsectionName,
            slug: helpers.toKebabCase(subsectionName),
            title: subsectionData.comment,
            description: helpers.cleanDescription(subsectionData.desc),
            template: subsectionData.template || '',
            enabled: subsectionData.enabled === 'true' || subsectionData.enabled === true,
            wizardAction: subsectionData.wizard_action === 'true' || subsectionData.wizard_action === true,
          });
        }
      }
    }
    
    sections.push(section);
  }
  
  console.log(`✅ Extracted ${sections.length} sections`);
  return sections;
}

/**
 * Generate MDX file for a section
 */
function generateSectionMDX(section, template) {
  const mdx = template(section);
  return mdx;
}

/**
 * Main execution
 */
async function main() {
  console.log('\n🚀 SafeSquid Documentation Generator\n');
  
  try {
    // Parse XML
    const parsedXML = parseXML(CONFIG.xmlPath);
    
    // Extract sections
    const sections = extractSections(parsedXML);
    
    // Load MDX template
    const templatePath = path.join(CONFIG.templatesDir, 'section.mdx.hbs');
    console.log(`📄 Loading template: ${templatePath}`);
    
    if (!fs.existsSync(templatePath)) {
      console.error('❌ Template not found. Creating default template...');
      // We'll create the template in the next step
      return;
    }
    
    const templateContent = fs.readFileSync(templatePath, 'utf-8');
    const template = Handlebars.compile(templateContent);
    
    // Generate MDX files
    console.log('\n📝 Generating MDX files...\n');
    
    let generated = 0;
    const stats = { byParentGroup: {} };
    
    for (const section of sections) {
      if (!section.enabled) {
        console.log(`⏭️  Skipping disabled section: ${section.id}`);
        continue;
      }
      
      const outputPath = path.join(
        CONFIG.outputDir,
        section.outputDir,
        `${section.slug}.mdx`
      );
      
      // Create directory if it doesn't exist
      const outputDirPath = path.dirname(outputPath);
      if (!fs.existsSync(outputDirPath)) {
        fs.mkdirSync(outputDirPath, { recursive: true });
      }
      
      // Generate MDX content
      const mdxContent = generateSectionMDX(section, template);
      
      // Write file
      fs.writeFileSync(outputPath, mdxContent, 'utf-8');
      
      console.log(`✅ Generated: ${section.outputDir}/${section.slug}.mdx`);
      generated++;
      
      // Track stats
      if (!stats.byParentGroup[section.parentGroupLabel]) {
        stats.byParentGroup[section.parentGroupLabel] = 0;
      }
      stats.byParentGroup[section.parentGroupLabel]++;
    }
    
    // Summary
    console.log('\n' + '='.repeat(50));
    console.log(`✨ Generation Complete!\n`);
    console.log(`📊 Stats:`);
    console.log(`   Total sections processed: ${sections.length}`);
    console.log(`   Files generated: ${generated}`);
    console.log(`\n   By category:`);
    
    for (const [group, count] of Object.entries(stats.byParentGroup)) {
      console.log(`   - ${group}: ${count}`);
    }
    
    console.log('\n' + '='.repeat(50) + '\n');
    
    // Generate index file
    generateIndexFile(sections);
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

/**
 * Generate configuration index file
 */
function generateIndexFile(sections) {
  console.log('📑 Generating configuration index...');
  
  // Group sections by parent group
  const grouped = {};
  
  for (const section of sections) {
    if (!section.enabled) continue;
    
    if (!grouped[section.parentGroupLabel]) {
      grouped[section.parentGroupLabel] = [];
    }
    
    grouped[section.parentGroupLabel].push({
      title: section.title,
      slug: `${section.outputDir}/${section.slug}`,
      description: section.description.split('\n')[0], // First line only
    });
  }
  
  // Create index content
  const indexContent = `---
title: Configuration Reference
description: Complete reference for all SafeSquid configuration sections
sidebar_position: 1
---

# Configuration Reference

This section provides comprehensive documentation for all SafeSquid configuration sections.

${Object.entries(grouped).map(([group, sections]) => `
## ${group}

${sections.map(s => `- **[${s.title}](${s.slug})** - ${s.description}`).join('\n')}
`).join('\n')}

`;
  
  const indexPath = path.join(CONFIG.outputDir, 'index.mdx');
  fs.writeFileSync(indexPath, indexContent, 'utf-8');
  
  console.log('✅ Generated: configuration/index.mdx');
}

// Run
if (require.main === module) {
  main();
}

module.exports = { parseXML, extractSections, helpers };
