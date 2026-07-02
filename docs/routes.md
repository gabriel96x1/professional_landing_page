# Routes And Navigation

## Main Page Anchors

The root route `/` is the main page. Header tabs use hash links to scroll to sections.

| Label | Link | Owner |
| --- | --- | --- |
| Inicio | `/#inicio` | `app/page.tsx` |
| Portafolio | `/#portfolio` | `app/page.tsx` |
| Servicios | `/#services` | `app/page.tsx` |
| Blog | `/blog` | `app/blog/page.tsx` |
| Sobre mi | `/#about` | `app/page.tsx` |
| Contacto | `/#contact` | `app/page.tsx` |

CSS in `app/globals.css` sets:

- `scroll-behavior: smooth`
- `scroll-padding-top: 6rem`

`app/layout.tsx` also sets `data-scroll-behavior="smooth"` on `<html>`, which Next.js expects when smooth scrolling is enabled globally.

This keeps hash navigation smooth and prevents the sticky header from covering section headings.

## Standalone Blog Routes

| Route | File | Purpose |
| --- | --- | --- |
| `/blog` | `app/blog/page.tsx` | Blog index, categories, article cards |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Dynamic article placeholder |

The blog should remain separate unless the user explicitly asks to merge it into the one-page home.

## Compatibility Redirects

These routes used to be standalone pages. They now redirect to home anchors.

| Old URL | Redirect Target | File |
| --- | --- | --- |
| `/portfolio` | `/#portfolio` | `app/portfolio/page.tsx` |
| `/services` | `/#services` | `app/services/page.tsx` |
| `/about` | `/#about` | `app/about/page.tsx` |
| `/contact` | `/#contact` | `app/contact/page.tsx` |

Use these routes only as compatibility redirects. For non-blog content, edit `app/page.tsx`.

## Route Check Expectations

Expected local responses:

- `/` returns `200`
- `/blog` returns `200`
- `/blog/articulo-placeholder-1` returns `200`
- `/portfolio` returns `307` with `location: /#portfolio`
- `/services` returns `307` with `location: /#services`
- `/about` returns `307` with `location: /#about`
- `/contact` returns `307` with `location: /#contact`
