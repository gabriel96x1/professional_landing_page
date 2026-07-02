<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Agent Notes

This project is a Next.js 16 App Router site. Before changing app code, read the relevant local Next.js docs under `node_modules/next/dist/docs/`, especially:

- `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/04-linking-and-navigating.md`

Then read the project docs in this order:

1. `docs/README.md`
2. `docs/architecture.md`
3. `docs/routes.md`
4. `docs/agent-playbook.md`

Current architecture summary:

- `/` is the main one-page site. Header links scroll to anchor sections on this page.
- `/blog` and `/blog/[slug]` are the only standalone content pages.
- `/portfolio`, `/services`, `/about`, and `/contact` are compatibility redirects to anchors on `/`.
- Shared UI primitives live in `app/_components/page-sections.tsx`.
- Global navigation, fonts, metadata, header, and footer live in `app/layout.tsx`.
- Global Tailwind styles and button utility classes live in `app/globals.css`.

Operational notes:

- The user runs this project with Bun, and `bun.lock` is expected.
- `package-lock.json` may still exist from earlier npm usage. Do not churn lockfiles unless the user asks.
- `next.config.ts` pins `turbopack.root` to the config file directory. Keep this unless you are intentionally changing workspace layout.
- If Turbopack shows client manifest or task cache panics, stop the dev server and clear `.next`.
- Root `types/` contains generated Next artifacts from a previous run and is intentionally excluded from TypeScript and ESLint.

Validation:

- Run `npm run lint` or the Bun equivalent.
- Run `npm run build` or the Bun equivalent.
- For route checks, verify `/`, `/blog`, `/blog/example-slug`, and redirects from `/portfolio`, `/services`, `/about`, `/contact`.
