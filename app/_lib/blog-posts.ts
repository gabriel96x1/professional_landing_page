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
      title: "Migrar pantallas Android a Jetpack Compose",
      category: "Android",
      excerpt:
        "Notas para convertir UI legacy en Compose sin perder estabilidad, pruebas ni velocidad de entrega.",
    },
    {
      id: "placeholder-2",
      slug: "articulo-placeholder-2",
      title: "CI/CD movil que cuida calidad y velocidad",
      category: "Automatizacion",
      excerpt:
        "Ideas para checks de PR, merge queues, SAST, Lint y Detekt en equipos Android.",
    },
    {
      id: "placeholder-3",
      slug: "articulo-placeholder-3",
      title: "MCP y agentes para workflows de ingenieria",
      category: "Agentic AI",
      excerpt:
        "Como usar contexto local, herramientas y servidores personalizados para automatizar trabajo tecnico.",
    },
  ],
  en: [
    {
      id: "placeholder-1",
      slug: "article-placeholder-1",
      title: "Migrating Android screens to Jetpack Compose",
      category: "Android",
      excerpt:
        "Notes on moving legacy UI to Compose without losing stability, testing, or delivery speed.",
    },
    {
      id: "placeholder-2",
      slug: "article-placeholder-2",
      title: "Mobile CI/CD that protects quality and speed",
      category: "Automation",
      excerpt:
        "Ideas for PR checks, merge queues, SAST, Lint, and Detekt in Android teams.",
    },
    {
      id: "placeholder-3",
      slug: "article-placeholder-3",
      title: "MCP and agents for engineering workflows",
      category: "Agentic AI",
      excerpt:
        "How to use local context, tools, and custom servers to automate technical work.",
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
