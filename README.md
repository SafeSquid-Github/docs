# SafeSquid SWG documentation

Technical documentation for SafeSquid Secure Web Gateway, built with [Mintlify](https://mintlify.com/docs).

## Prerequisites

- Node.js **20.17+** (LTS recommended)
- npm

## Local preview

From the repository root:

```sh
npm install
npm run dev
```

Mintlify serves the site (default [http://localhost:3000](http://localhost:3000)). Source lives under `docs/` (`docs/docs.json` is the project config).

## Validation (CI)

```sh
npm run validate
```

Optional link check:

```sh
npm run broken-links
```

## PM2 (optional)

```sh
pm2 start ecosystem.config.cjs
```

## Publishing

Production deploy is handled through the Mintlify dashboard (Git integration). The GitHub Action in `.github/workflows/build_and_publish.yml` runs `mintlify validate` on push and pull requests.

## Content layout

- Section pages: `docs/<section>-<name>/`
- Blog: `docs/blog/`
- Images: `docs/images/` (reference in Markdown as `/images/...`)

See `AGENTS.md` for authoring standards.

## AI assistants: Mintlify skill and MCP

Use this when wiring Cursor, Claude Code, or similar tools to author against this repo.

**draft (verify against current Mintlify docs before you run commands):**

1. **Documentation skill** — Mintlify publishes a skill package for structure, components, and writing conventions. Install using the flow described in [Mintlify documentation](https://mintlify.com/docs) (search for *skills* or *AI* on that site). A typical pattern is `npx skills add` with the URL Mintlify documents for their skill.
2. **Model Context Protocol** — For doc search and generation helpers, follow [Mintlify MCP](https://www.mintlify.com/docs/ai/model-context-protocol.md) to register their MCP server in your editor.

**confirmed:** The documentation corpus and `docs/docs.json` for this product live in this repository; `npm run validate` must pass before merge.

**missing (org / board, not this repo):** Connecting the GitHub repo to the Mintlify dashboard (production subdomain, analytics, deploy). Coordinate with **CMO** on customer-facing strings in `docs/docs.json` (site **name**, **description**, **navbar** labels, **footer**).
