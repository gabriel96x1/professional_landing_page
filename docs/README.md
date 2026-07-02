# Project Docs

This folder is for agents working on this project. Read these docs before changing structure, routes, or navigation.

Recommended order:

1. `architecture.md` - how the app is organized.
2. `routes.md` - public URLs, anchors, and redirects.
3. `agent-playbook.md` - common workflows, validation, and known gotchas.

High-level model:

- The site is primarily a one-page professional landing page at `/`.
- The header tabs scroll to specific sections in that page.
- Blog remains separate at `/blog` and `/blog/[slug]`.
- Old standalone pages for portfolio, services, about, and contact redirect to home anchors.

Next.js rule:

This repo uses Next.js 16. Read the local docs in `node_modules/next/dist/docs/` before editing App Router code because conventions may differ from older Next.js versions.
