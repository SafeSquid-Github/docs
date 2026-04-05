#!/usr/bin/env node
/**
 * Generates Mintlify docs.json navigation from the docs/ tree using the same
 * ordering rules as sidebars.ts (Docusaurus).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const BASE_DIR = path.join(REPO_ROOT, 'docs');

function mintPagePath(entryPath) {
  const rel = path.relative(BASE_DIR, entryPath).replace(/\\/g, '/');
  return rel.replace(/\.md$/, '');
}

function humanLabel(dirName) {
  return dirName.replace(/^[0-9]+-/, '').replace(/_/g, ' ');
}

/** @returns {(string | object)[]} */
function generateNav(dirPath) {
  const items = [];
  for (const entry of fs.readdirSync(dirPath)) {
    const entryPath = path.join(dirPath, entry);
    const st = fs.statSync(entryPath);
    if (st.isDirectory()) {
      items.push(...generateNav(entryPath));
    } else if (entry !== 'main.md' && entry.endsWith('.md')) {
      items.push(mintPagePath(entryPath));
    }
  }

  const mainMd = path.join(dirPath, 'main.md');
  if (fs.existsSync(mainMd)) {
    return [
      {
        group: humanLabel(path.basename(dirPath)),
        root: mintPagePath(mainMd),
        pages: items,
      },
    ];
  }
  return items;
}

const groups = generateNav(BASE_DIR).flat();

const docsJson = {
  theme: 'mint',
  name: 'SafeSquid SWG',
  description: 'Deploy Zero-Trust Web Security — SafeSquid Secure Web Gateway documentation.',
  colors: {
    primary: '#0066CC',
    light: '#3B82F6',
    dark: '#0F172A',
  },
  logo: {
    light: '/images/SafeSquidBlue.png',
    dark: '/images/safesquidWhite.png',
    href: 'https://www.safesquid.com/#home',
  },
  favicon: '/images/favicon.ico',
  styling: {
    eyebrows: 'breadcrumbs',
  },
  navbar: {
    links: [
      { label: 'Home', href: 'https://www.safesquid.com/#home' },
      { label: 'Pricing', href: 'https://www.safesquid.com/pricing/' },
      { label: 'Forum', href: 'https://help.safesquid.com/portal/en/community/safesquid-labs' },
    ],
  },
  footer: {
    socials: {
      website: 'https://www.safesquid.com/',
    },
  },
  integrations: {
    ga4: {
      measurementId: 'G-ZVZHSKFGQF',
    },
  },
  navigation: {
    groups,
  },
};

const outPath = path.join(BASE_DIR, 'docs.json');
fs.writeFileSync(outPath, JSON.stringify(docsJson, null, 2) + '\n', 'utf8');
console.log('Wrote', path.relative(REPO_ROOT, outPath));
