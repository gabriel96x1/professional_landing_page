# Agent Playbook

## First Steps

1. Read `AGENTS.md`.
2. Read relevant local Next.js docs under `node_modules/next/dist/docs/`.
3. Read `docs/architecture.md` and `docs/routes.md`.
4. Inspect current files before editing.

Useful commands:

```bash
rg --files
npm run lint
npm run build
```

The user prefers Bun, so these equivalents may also be appropriate when Bun is available:

```bash
bun install
bun run dev
bun run build
```

## Common Changes

Add or revise non-blog sections:

- Edit the relevant component in `app/_sections/`.
- Keep `app/page.tsx` as the section composition layer.
- Add or update section ids only if you also update `app/layout.tsx` and `docs/routes.md`.
- Keep portfolio, services, about, and contact as home-page sections unless the user asks for standalone pages again.

Change navigation:

- Edit the `navigation` array in `app/layout.tsx`.
- Keep one-page links as `/#section-id`.
- Keep Blog as `/blog`.

Change shared layout primitives:

- Edit `app/_components/page-sections.tsx`.
- Remember this component file is used by home and blog pages.

Change blog behavior:

- Edit `app/blog/page.tsx` for the index.
- Edit `app/blog/[slug]/page.tsx` for article pages.
- If replacing placeholders with real content, prefer a structured data source or MDX/CMS integration over hard-coded strings once content grows.

## Validation

Run:

```bash
npm run lint
npm run build
```

If a dev server is needed:

```bash
npm run dev
```

Then check:

```bash
curl -I http://localhost:3000/
curl -I http://localhost:3000/blog
curl -I http://localhost:3000/blog/articulo-placeholder-1
curl -I http://localhost:3000/portfolio
curl -I http://localhost:3000/services
curl -I http://localhost:3000/about
curl -I http://localhost:3000/contact
```

The section URLs should return `404`; the matching navigation links should stay
as home anchors like `/#portfolio`.

## Turbopack And Bun Notes

`next.config.ts` pins `turbopack.root` to the directory containing the config file. Keep this in place. It prevents workspace-root confusion when different package managers or lockfiles are present.

If you see errors like:

- Turbopack task cache panic
- React Client Manifest missing `global-error.js`
- A dead dev server process blocking `next dev`

Use this recovery flow:

```bash
# stop any old dev server first if one is running
rm -rf .next
bun run dev
```

If using npm in the current environment, use `npm run dev` instead.

## Generated Types

Root `types/` contains generated Next artifacts from a previous run. It is intentionally excluded in:

- `tsconfig.json`
- `eslint.config.mjs`

Do not hand-edit those generated files unless the user specifically asks. Current Next route types are generated under `.next/types` and `.next/dev/types`.
