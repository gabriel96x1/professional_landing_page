# Professional Landing Page

Next.js 16 App Router site for a localized professional landing page and blog.

Public routes are always locale-prefixed:

- `/es`
- `/en`
- `/es/blog`
- `/en/blog`
- `/es/blog/[slug]`
- `/en/blog/[slug]`

## Getting Started

Use Bun for local development:

```bash
bun run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Useful checks:

```bash
bun run lint
bun run build
```

## Create A New Blog Post

Blog posts are local MDX files under `content/blog/`. Each post has one stable internal id and one MDX file per locale.

1. Create a folder for the post:

```text
content/blog/my-post-id/
  es.mdx
  en.mdx
```

2. Add metadata and content to both MDX files:

```mdx
export const metadata = {
  id: "my-post-id",
  slug: "mi-slug-en-espanol",
  title: "Titulo del articulo",
  category: "Notas",
  excerpt: "Resumen corto para el home y el indice del blog.",
  publishedAt: "2026-07-06",
  readingTime: "3 min",
};

Contenido del articulo en MDX.

## Una seccion

- Punto importante
- Otro punto importante
```

Use a different localized slug in `en.mdx`, for example:

```mdx
export const metadata = {
  id: "my-post-id",
  slug: "my-english-slug",
  title: "Article title",
  category: "Notes",
  excerpt: "Short summary for the home page and blog index.",
  publishedAt: "2026-07-06",
  readingTime: "3 min",
};
```

3. Register the post id and slugs in `app/_lib/blog-slugs.ts`:

```ts
export type BlogPostId = "mdx-blog-demo" | "my-post-id";

export const blogPostSlugs = {
  "mdx-blog-demo": {
    es: "probando-blog-con-mdx",
    en: "testing-the-mdx-blog",
  },
  "my-post-id": {
    es: "mi-slug-en-espanol",
    en: "my-english-slug",
  },
};
```

4. Register the MDX imports in `app/_lib/blog-posts.ts`:

```ts
{
  id: "my-post-id",
  locales: {
    es: () => import("@/content/blog/my-post-id/es.mdx") as Promise<BlogPostModule>,
    en: () => import("@/content/blog/my-post-id/en.mdx") as Promise<BlogPostModule>,
  },
},
```

5. Validate the routes:

```bash
bun run lint
bun run build
curl -I http://localhost:3000/es/blog/mi-slug-en-espanol
curl -I http://localhost:3000/en/blog/my-english-slug
curl -I http://localhost:3000/es/blog/my-english-slug
curl -I http://localhost:3000/en/blog/mi-slug-en-espanol
```

The localized routes should return `200`. Wrong-locale slugs should return `404`.
