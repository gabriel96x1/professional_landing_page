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
4. `docs/i18n.md`
5. `docs/accessibility-rules.md`
6. `docs/agent-playbook.md`

Current architecture summary:

- The site uses `next-intl` with always-prefixed locales. Public page routes are under `/es` and `/en`.
- `/` redirects to a locale-prefixed route. Do not reintroduce an unprefixed home page.
- `/es` and `/en` are the localized one-page sites. Header links scroll to anchors on the localized home page.
- `/es/blog`, `/en/blog`, `/es/blog/[slug]`, and `/en/blog/[slug]` are the standalone content pages.
- Blog slugs are locale-specific. Keep a stable internal post id and map each locale to its own slug.
- `/portfolio`, `/services`, `/about`, and `/contact` are compatibility redirects through the localized routes to anchors on the localized home page.
- Shared UI primitives live in `app/_components/page-sections.tsx`.
- Localized navigation, fonts, metadata, header, and footer live in `app/[locale]/layout.tsx`.
- Global Tailwind styles and button utility classes live in `app/globals.css`.
- User-facing copy belongs in `messages/es.json` and `messages/en.json`, not hard-coded in components.
- Locale routing/request/navigation helpers live under `i18n/`. Use these helpers instead of ad hoc locale parsing unless there is a clear reason.

Accessibility enforcement:

- All user-facing UI, content, and interaction changes must conform to WCAG 2.2 Level AA.
- Treat accessibility regressions as blocking defects, including missing accessible names, broken keyboard access, invalid semantics, insufficient contrast, obscured focus, layout that fails reflow/zoom, and non-localized accessibility copy.
- Read and follow `docs/accessibility-rules.md` before changing UI, navigation, layout, forms, media, theme colors, or localized visible/accessibility copy.
- Automated checks do not replace manual keyboard, focus, contrast, reflow, and localized label review for changed flows.

Operational notes:

- The user runs this project with Bun, and `bun.lock` is expected.
- `package-lock.json` may still exist from earlier npm usage. Do not churn lockfiles unless the user asks.
- `next.config.ts` pins `turbopack.root` to the config file directory. Keep this unless you are intentionally changing workspace layout.
- `next.config.ts` is wrapped with `next-intl/plugin`. Preserve that wrapper when changing Next config.
- Next.js 16 uses the `proxy.ts` convention instead of deprecated `middleware.ts`. Keep locale proxy logic in `proxy.ts`.
- If Turbopack shows client manifest or task cache panics, stop the dev server and clear `.next`.
- Root `types/` contains generated Next artifacts from a previous run and is intentionally excluded from TypeScript and ESLint.

Validation:

- Run `npm run lint` or the Bun equivalent.
- Run `npm run build` or the Bun equivalent.
- For route checks, verify `/`, `/es`, `/en`, `/es/blog`, `/en/blog`, `/es/blog/articulo-placeholder-1`, `/en/blog/article-placeholder-1`, wrong-locale slug 404s, and redirects from `/portfolio`, `/services`, `/about`, `/contact`.
