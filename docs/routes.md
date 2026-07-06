# Routes And Navigation

## Locale Prefixes

This project uses `next-intl` with always-prefixed routes:

- `/es` for Spanish
- `/en` for English

The unprefixed `/` route redirects to a locale-prefixed route. Do not add an
unprefixed `app/page.tsx`.

## Main Page Anchors

The localized home routes `/es` and `/en` are the main pages. Header tabs use
hash links to scroll to sections on the localized home page.

| Label | Link | Owner |
| --- | --- | --- |
| Inicio / Home | `/{locale}#inicio` | `app/[locale]/page.tsx` |
| Portafolio / Portfolio | `/{locale}#portfolio` | `app/[locale]/page.tsx` |
| Servicios / Services | `/{locale}#services` | `app/[locale]/page.tsx` |
| Blog | `/{locale}/blog` | `app/[locale]/blog/page.tsx` |
| Sobre mi / About | `/{locale}#about` | `app/[locale]/page.tsx` |
| Contacto / Contact | `/{locale}#contact` | `app/[locale]/page.tsx` |

CSS in `app/globals.css` sets:

- `scroll-behavior: smooth`
- `scroll-padding-top: 6rem`

`app/[locale]/layout.tsx` also sets `data-scroll-behavior="smooth"` on `<html>`, which Next.js expects when smooth scrolling is enabled globally.

This keeps hash navigation smooth and prevents the sticky header from covering section headings.

## Standalone Blog Routes

| Route | File | Purpose |
| --- | --- | --- |
| `/es/blog` | `app/[locale]/blog/page.tsx` | Spanish blog index, categories, article cards |
| `/en/blog` | `app/[locale]/blog/page.tsx` | English blog index, categories, article cards |
| `/es/blog/[slug]` | `app/[locale]/blog/[slug]/page.tsx` | Spanish MDX article |
| `/en/blog/[slug]` | `app/[locale]/blog/[slug]/page.tsx` | English MDX article |

The blog should remain separate unless the user explicitly asks to merge it into the one-page home.
Blog slugs are locale-specific. Spanish slugs should not be valid on English
routes, and English slugs should not be valid on Spanish routes.

## Removed Section Routes

These routes used to be standalone pages. They now exist only as compatibility
redirects to localized home anchors.

| Old URL | Current Target |
| --- | --- |
| `/portfolio` | `/{locale}#portfolio` |
| `/services` | `/{locale}#services` |
| `/about` | `/{locale}#about` |
| `/contact` | `/{locale}#contact` |
| `/es/portfolio` | `/es#portfolio` |
| `/en/portfolio` | `/en#portfolio` |
| `/es/services` | `/es#services` |
| `/en/services` | `/en#services` |
| `/es/about` | `/es#about` |
| `/en/about` | `/en#about` |
| `/es/contact` | `/es#contact` |
| `/en/contact` | `/en#contact` |

For non-blog content, edit `app/[locale]/page.tsx`, `app/_sections/`, and the
message catalogs.

## Route Check Expectations

Expected local responses:

- `/` returns `307` to a locale-prefixed route
- `/es` returns `200`
- `/en` returns `200`
- `/es/blog` returns `200`
- `/en/blog` returns `200`
- `/es/blog/probando-blog-con-mdx` returns `200`
- `/en/blog/testing-the-mdx-blog` returns `200`
- `/es/blog/testing-the-mdx-blog` returns `404`
- `/en/blog/probando-blog-con-mdx` returns `404`
- `/portfolio`, `/services`, `/about`, and `/contact` redirect through localized compatibility routes to home anchors
