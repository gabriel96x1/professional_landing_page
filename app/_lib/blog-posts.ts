import type { AppLocale } from "@/i18n/routing";
import type { BlogPostId } from "./blog-slugs";
import { blogPostSlugs } from "./blog-slugs";
import type { MDXContent } from "mdx/types";

export type BlogPostMetadata = {
  id: BlogPostId;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
};

export type LocalizedBlogPost = BlogPostMetadata;

export type LocalizedBlogPostWithContent = LocalizedBlogPost & {
  Content: MDXContent;
};

type BlogPostModule = {
  default: MDXContent;
  metadata: BlogPostMetadata;
};

type BlogPostRegistryEntry = {
  id: BlogPostId;
  locales: Record<AppLocale, () => Promise<BlogPostModule>>;
};

const blogPostRegistry = [
  {
    id: "mdx-blog-demo",
    locales: {
      es: () =>
        import("@/content/blog/mdx-blog-demo/es.mdx") as Promise<BlogPostModule>,
      en: () =>
        import("@/content/blog/mdx-blog-demo/en.mdx") as Promise<BlogPostModule>,
    },
  },
] satisfies BlogPostRegistryEntry[];

async function loadPost(locale: AppLocale, entry: BlogPostRegistryEntry) {
  const postModule = await entry.locales[locale]();

  return {
    ...postModule.metadata,
    Content: postModule.default,
  } satisfies LocalizedBlogPostWithContent;
}

export async function getBlogPosts(locale: AppLocale) {
  const posts = await Promise.all(
    blogPostRegistry.map((entry) => loadPost(locale, entry)),
  );

  return posts
    .map((post) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      category: post.category,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      readingTime: post.readingTime,
    }))
    .sort(
      (firstPost, secondPost) =>
        Date.parse(secondPost.publishedAt) - Date.parse(firstPost.publishedAt),
    );
}

export async function getPostByLocaleSlug(locale: AppLocale, slug: string) {
  const entry = blogPostRegistry.find(
    ({ id }) => blogPostSlugs[id][locale] === slug,
  );

  if (!entry) {
    return undefined;
  }

  const post = await loadPost(locale, entry);

  return post.slug === slug ? post : undefined;
}

export function getAllBlogStaticParams() {
  return blogPostRegistry.flatMap(({ id }) =>
    Object.entries(blogPostSlugs[id]).map(([locale, slug]) => ({
      locale,
      slug,
    })),
  );
}

export async function getLocalizedPost(locale: AppLocale, id: BlogPostId) {
  const entry = blogPostRegistry.find((post) => post.id === id);

  return entry ? loadPost(locale, entry) : undefined;
}
