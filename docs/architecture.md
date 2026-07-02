# Architecture

## Stack

- Next.js `16.2.10`
- React `19.2.4`
- Tailwind CSS v4 via `@import "tailwindcss"`
- TypeScript with App Router
- Bun is the user's preferred package manager

## App Shape

The product is a professional personal site with:

- A single long home page at `/`
- A separate blog index at `/blog`
- Dynamic blog article pages at `/blog/[slug]`
- Home-page sections for portfolio, services, about, and contact

The intent is that the home page tells the full story quickly, while the blog keeps its own content structure.

## Important Files

`app/layout.tsx`

- Root layout required by App Router.
- Owns global metadata, fonts, header navigation, and footer.
- Navigation should point to anchors on `/` except for Blog.

`app/page.tsx`

- Composes the main landing page from self-contained section components.
- Renders sections with ids used by the header nav:
  - `inicio`
  - `services`
  - `portfolio`
  - `blog-preview`
  - `about`
  - `contact`

`app/_sections/`

- Private, non-routable folder for home-page section components.
- Each main-page section should own its markup, local lists, and section-specific imports here.
- Shared section primitives should remain in `app/_components/page-sections.tsx`.

`app/_components/page-sections.tsx`

- Shared presentational primitives:
  - `PageHero`
  - `PageSection`
  - `PlaceholderCard`
  - `PlaceholderList`
  - `CtaBand`
- This folder starts with `_`, so it is private and not routable.

`app/blog/page.tsx`

- Blog index placeholder.
- Currently owns local placeholder post metadata.
- Links to `/blog/[slug]` routes.

`app/blog/[slug]/page.tsx`

- Dynamic article placeholder.
- Uses async `params`, which matches current Next.js App Router conventions.

There are no standalone routes for portfolio, services, about, or contact.
Keep these as home-page sections unless the product direction changes.

`app/globals.css`

- Imports Tailwind.
- Sets global font, smooth anchor scrolling, sticky-header offset, and button utility classes.

`next.config.ts`

- Sets `turbopack.root` using the physical config location.
- This avoids root detection problems when Bun/npm or external lockfiles confuse Turbopack.

`tsconfig.json` and `eslint.config.mjs`

- Exclude root `types/` generated artifacts.
- Next's active route types are generated under `.next/types` and `.next/dev/types`.

## Design Direction

Keep the interface restrained and work-focused:

- Dense enough to scan.
- No marketing-only landing page shell.
- Cards are for repeated content and framed tools.
- Sections should stay full-width/unframed, with content constrained by `max-w-6xl`.
- Avoid huge decorative gradients, orbs, and purely atmospheric visuals.

Most content is still placeholder text. Preserve the structure while replacing placeholders with real copy, screenshots, case data, and contact details.
