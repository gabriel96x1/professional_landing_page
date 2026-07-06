import type { AppLocale } from "@/i18n/routing";

export type BlogPostId = "mdx-blog-demo";

export const blogPostSlugs = {
  "mdx-blog-demo": {
    es: "probando-blog-con-mdx",
    en: "testing-the-mdx-blog",
  },
} satisfies Record<BlogPostId, Record<AppLocale, string>>;

export function getLocalizedBlogPath(
  currentLocale: AppLocale,
  currentSlug: string,
  targetLocale: AppLocale,
) {
  const postEntry = Object.values(blogPostSlugs).find(
    (slugs) => slugs[currentLocale] === currentSlug,
  );

  return postEntry ? `/${targetLocale}/blog/${postEntry[targetLocale]}` : undefined;
}
