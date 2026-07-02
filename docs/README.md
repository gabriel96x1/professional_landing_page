# Project Docs

This folder is for agents working on this project. Read these docs before changing structure, routes, or navigation.

Recommended order:

1. `architecture.md` - how the app is organized.
2. `routes.md` - public URLs and anchors.
3. `agent-playbook.md` - common workflows, validation, and known gotchas.
4. `design-rules.md` - theme tokens, palette, and visual rules.

High-level model:

- The site is primarily a one-page professional landing page at `/`.
- The header tabs scroll to specific sections in that page.
- Blog remains separate at `/blog` and `/blog/[slug]`.
- Portfolio, services, about, and contact live only as sections on the home page.

Next.js rule:

This repo uses Next.js 16. Read the local docs in `node_modules/next/dist/docs/` before editing App Router code because conventions may differ from older Next.js versions.
