# Agent Playbook

## First Steps

1. Read `AGENTS.md`.
2. Read relevant local Next.js docs under `node_modules/next/dist/docs/`.
3. Read `docs/architecture.md` and `docs/routes.md`.
4. Read `docs/i18n.md`.
5. Read `docs/accessibility-rules.md` before UI, content, or interaction changes.
6. Inspect current files before editing.

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
- Keep `app/[locale]/page.tsx` as the section composition layer.
- Put user-facing copy in `messages/es.json` and `messages/en.json`.
- Add or update section ids only if you also update `app/[locale]/layout.tsx`, redirects, `docs/routes.md`, and `docs/i18n.md`.
- Keep portfolio, services, about, and contact as home-page sections unless the user asks for standalone pages again.

Change navigation:

- Edit the localized `navigation` array in `app/[locale]/layout.tsx`.
- Keep one-page links locale-aware through `i18n/navigation.ts`.
- Keep Blog as `/{locale}/blog`.

Change shared layout primitives:

- Edit `app/_components/page-sections.tsx`.
- Remember this component file is used by home and blog pages.

Change blog behavior:

- Edit `app/[locale]/blog/page.tsx` for the index.
- Edit `app/[locale]/blog/[slug]/page.tsx` for article pages.
- Edit `app/_lib/blog-posts.ts` and `content/blog/` for localized slugs and MDX post metadata.
- Keep stable post ids and separate Spanish/English slugs.
- If replacing placeholders with real content, prefer a structured data source or MDX/CMS integration over hard-coded strings once content grows.

## Validation

Run:

```bash
npm run lint
npm run build
```

For UI, content, navigation, layout, form, media, or theme changes, also perform
the manual accessibility checks in `docs/accessibility-rules.md`. WCAG 2.2 Level
AA regressions are blocking defects.

If a dev server is needed:

```bash
npm run dev
```

Then check:

```bash
curl -I http://localhost:3000/
curl -I http://localhost:3000/es
curl -I http://localhost:3000/en
curl -I http://localhost:3000/es/blog
curl -I http://localhost:3000/en/blog
curl -I http://localhost:3000/es/blog/probando-blog-con-mdx
curl -I http://localhost:3000/en/blog/testing-the-mdx-blog
curl -I http://localhost:3000/es/blog/testing-the-mdx-blog
curl -I http://localhost:3000/en/blog/probando-blog-con-mdx
curl -I http://localhost:3000/portfolio
curl -I http://localhost:3000/es/portfolio
curl -I http://localhost:3000/en/contact
```

Wrong-locale blog slugs should return `404`. Section URLs should redirect to
localized home anchors like `/es#portfolio` and `/en#contact`.

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
