#!/usr/bin/env node
/**
 * Rewrites Docusaurus-style /docs/... links and /img/... paths for Mintlify.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');

function docusaurusIdFromRel(relPosix) {
  let s = relPosix;
  if (!s.endsWith('.md')) s = `${s}.md`;
  s = s.replace(/^[0-9]+-/, '').replace(/\/[0-9]+-/g, '/');
  return s.replace(/\.md$/, '');
}

/** @returns {Map<string, string>} */
function stripNumericSegments(relPosix) {
  return relPosix
    .split('/')
    .map((seg) => seg.replace(/^[0-9]+-/, ''))
    .join('/');
}

function buildIdToMintPath() {
  const map = new Map();
  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      const st = fs.statSync(full);
      if (st.isDirectory()) {
        walk(full);
      } else if (name.endsWith('.md')) {
        const rel = path.relative(DOCS_DIR, full).replace(/\\/g, '/');
        const id = docusaurusIdFromRel(rel);
        const mint = rel.replace(/\.md$/, '');
        map.set(id, mint);
        map.set(`${id}/`, mint);

        if (name === 'main.md') {
          const dirRel = rel.slice(0, -'/main.md'.length);
          const hubKey = stripNumericSegments(dirRel);
          map.set(hubKey, mint);
          map.set(`${hubKey}/`, mint);
        }
      }
    }
  }
  walk(DOCS_DIR);
  return map;
}

function rewriteBody(body, idToMint) {
  let out = body;
  out = out.replace(/\]\(\/img\//g, '](/images/');
  out = out.replace(/\]\(\.\.\/img\//g, '](/images/');

  const linkRe = /\]\(\/docs\/([^)#\s]+)(\s*#[^)]*)?\)/g;
  out = out.replace(linkRe, (match, docPath, hash) => {
    const key = docPath.endsWith('/') ? docPath : `${docPath}/`;
    const key2 = docPath.endsWith('/') ? docPath.slice(0, -1) : docPath;
    const mint = idToMint.get(key2) || idToMint.get(key) || idToMint.get(`${key2}/`);
    if (!mint) {
      return match;
    }
    const h = hash || '';
    return `](/${mint}${h})`;
  });

  return out;
}

function main() {
  const idToMint = buildIdToMintPath();
  let changedFiles = 0;

  function walk(dir) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      if (name === 'images' || name === 'docs.json') continue;
      const st = fs.statSync(full);
      if (st.isDirectory()) walk(full);
      else if (name.endsWith('.md')) {
        const raw = fs.readFileSync(full, 'utf8');
        const next = rewriteBody(raw, idToMint);
        if (next !== raw) {
          fs.writeFileSync(full, next, 'utf8');
          changedFiles += 1;
        }
      }
    }
  }

  walk(DOCS_DIR);
  console.log(`Updated ${changedFiles} markdown files under docs/`);
}

main();
