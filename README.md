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
