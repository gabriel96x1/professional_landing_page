import type { AppLocale } from "@/i18n/routing";

export type BlogPostId = "placeholder-1" | "placeholder-2" | "placeholder-3";

export type LocalizedBlogPost = {
  id: BlogPostId;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
};

export const blogPostsByLocale = {
  es: [
    {
      id: "placeholder-1",
      slug: "articulo-placeholder-1",
      title: "Articulo placeholder 1",
      category: "Desarrollo",
      excerpt:
        "Extracto placeholder para resumir la idea del articulo y el valor para quien lo lee.",
    },
    {
      id: "placeholder-2",
      slug: "articulo-placeholder-2",
      title: "Articulo placeholder 2",
      category: "Freelance",
      excerpt:
        "Extracto placeholder para resumir la idea del articulo y el valor para quien lo lee.",
    },
    {
      id: "placeholder-3",
      slug: "articulo-placeholder-3",
      title: "Articulo placeholder 3",
      category: "Producto",
      excerpt:
        "Extracto placeholder para resumir la idea del articulo y el valor para quien lo lee.",
    },
  ],
  en: [
    {
      id: "placeholder-1",
      slug: "article-placeholder-1",
      title: "Placeholder article 1",
      category: "Development",
      excerpt:
        "Placeholder excerpt to summarize the article idea and the value for the reader.",
    },
    {
      id: "placeholder-2",
      slug: "article-placeholder-2",
      title: "Placeholder article 2",
      category: "Freelance",
      excerpt:
        "Placeholder excerpt to summarize the article idea and the value for the reader.",
    },
    {
      id: "placeholder-3",
      slug: "article-placeholder-3",
      title: "Placeholder article 3",
      category: "Product",
      excerpt:
        "Placeholder excerpt to summarize the article idea and the value for the reader.",
    },
  ],
} satisfies Record<AppLocale, LocalizedBlogPost[]>;

export function getBlogPosts(locale: AppLocale) {
  return blogPostsByLocale[locale];
}

export function getPostByLocaleSlug(locale: AppLocale, slug: string) {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}

export function getLocalizedPost(locale: AppLocale, id: BlogPostId) {
  return getBlogPosts(locale).find((post) => post.id === id);
}

export function getAllBlogStaticParams() {
  return Object.entries(blogPostsByLocale).flatMap(([locale, posts]) =>
    posts.map((post) => ({
      locale,
      slug: post.slug,
    })),
  );
}
