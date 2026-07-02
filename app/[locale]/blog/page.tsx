import { getBlogPosts } from "@/app/_lib/blog-posts";
import {
  PageHero,
  PageSection,
  PlaceholderCard,
} from "../../_components/page-sections";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export default function BlogPage() {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("Blog.Index");
  const posts = getBlogPosts(locale);
  const categories = t.raw("categories") as string[];

  return (
    <main>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      />

      <PageSection title={t("categoriesTitle")}>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-(--theme-tag-outline) bg-transparent px-4 py-2 text-sm text-(--theme-tag-outline)"
            >
              {category}
            </span>
          ))}
        </div>
      </PageSection>

      <PageSection title={t("articlesTitle")}>
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <PlaceholderCard key={post.slug} title={post.title}>
              <p className="text-xs font-semibold uppercase text-(--theme-label)">
                {post.category}
              </p>
              <p className="mt-3">{post.excerpt}</p>
              <Link
                className="mt-4 inline-flex font-medium text-(--theme-text-primary) underline-offset-4 hover:underline"
                href={`/blog/${post.slug}`}
              >
                {t("readArticle")}
              </Link>
            </PlaceholderCard>
          ))}
        </div>
      </PageSection>
    </main>
  );
}
