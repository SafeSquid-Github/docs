const fs = require('fs');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');

const xmlPath = path.join(__dirname, '../data/section.xml');
const xmlContent = fs.readFileSync(xmlPath, 'utf-8');

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
  cdataPropName: false, // Don't separate CDATA
  parseTagValue: false,
  parseAttributeValue: false,
  trimValues: true,
  allowBooleanAttributes: true,
});

const result = parser.parse(xmlContent);

// Check access section desc
const access = result.allSections.main.section.access;

console.log('=== ACCESS SECTION ===');
console.log('desc type:', typeof access.desc);
console.log('desc value:', access.desc);
console.log('\n=== FIRST FIELD DESC ===');

// Check first template field desc
const firstField = access.template.entry.enabled;
console.log('enabled desc type:', typeof firstField.desc);
console.log('enabled desc value:', firstField.desc);
