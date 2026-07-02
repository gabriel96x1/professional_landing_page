# Project Docs

This folder is for agents working on this project. Read these docs before changing structure, routes, or navigation.

Recommended order:

1. `architecture.md` - how the app is organized.
2. `routes.md` - public URLs and anchors.
3. `i18n.md` - locale routing, messages, navigation, and localized blog slugs.
4. `agent-playbook.md` - common workflows, validation, and known gotchas.
5. `design-rules.md` - theme tokens, palette, and visual rules.

High-level model:

- The site is primarily a localized one-page professional landing page at `/es` and `/en`.
- The header tabs scroll to specific sections in the localized home page.
- Blog remains separate at `/es/blog`, `/en/blog`, and localized `/[locale]/blog/[slug]` routes.
- Portfolio, services, about, and contact live only as sections on the home page.
- Public routes use always-prefixed `next-intl` locales. `/` redirects to a locale-prefixed route.

Next.js rule:

This repo uses Next.js 16. Read the local docs in `node_modules/next/dist/docs/` before editing App Router code because conventions may differ from older Next.js versions.
