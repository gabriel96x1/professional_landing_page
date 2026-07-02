# Architecture

## Stack

- Next.js `16.2.10`
- React `19.2.4`
- Tailwind CSS v4 via `@import "tailwindcss"`
- TypeScript with App Router
- Bun is the user's preferred package manager
- next-intl `4.13.1` with always-prefixed locale routes

## App Shape

The product is a professional personal site with:

- A single long localized home page at `/es` and `/en`
- A separate localized blog index at `/es/blog` and `/en/blog`
- Dynamic localized blog article pages at `/es/blog/[slug]` and `/en/blog/[slug]`
- Home-page sections for portfolio, services, about, and contact

The intent is that the home page tells the full story quickly, while the blog keeps its own content structure.

## Important Files

`app/[locale]/layout.tsx`

- Localized root layout for public pages.
- Owns metadata, fonts, header navigation, footer, `NextIntlClientProvider`, and `html lang`.
- Navigation should point to anchors on the localized home page except for Blog.

`app/[locale]/page.tsx`

- Composes the localized main landing page from self-contained section components.
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

`app/[locale]/blog/page.tsx`

- Localized blog index placeholder.
- Reads locale-specific placeholder post metadata from `app/_lib/blog-posts.ts`.
- Links to the active locale's `/blog/[slug]` routes.

`app/[locale]/blog/[slug]/page.tsx`

- Dynamic localized article placeholder.
- Uses async `params`, validates `locale + slug`, and returns `notFound()` for wrong-locale slugs.

There are no standalone routes for portfolio, services, about, or contact.
Keep these as home-page sections unless the product direction changes.

`app/globals.css`

- Imports Tailwind.
- Sets global font, smooth anchor scrolling, sticky-header offset, and button utility classes.

`next.config.ts`

- Sets `turbopack.root` using the physical config location.
- This avoids root detection problems when Bun/npm or external lockfiles confuse Turbopack.
- Is wrapped with `createNextIntlPlugin()` for next-intl.

`proxy.ts`

- Runs next-intl locale routing before route rendering.
- Uses the Next.js 16 `proxy` convention, not deprecated `middleware`.

`i18n/`

- Contains routing, request, and navigation helpers.
- `i18n/routing.ts` is the source of truth for supported locales.

`messages/`

- Contains Spanish and English message catalogs.
- User-facing text should live here instead of being hard-coded in components.

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
