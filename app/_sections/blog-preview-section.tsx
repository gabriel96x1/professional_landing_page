import { getBlogPosts } from "@/app/_lib/blog-posts";
import type { AppLocale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { PageSection, PlaceholderCard } from "../_components/page-sections";

export function BlogPreviewSection() {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("Home.BlogPreview");
  const recentPosts = getBlogPosts(locale);

  return (
    <PageSection
      id="blog-preview"
      title={t("title")}
      description={t("description")}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {recentPosts.map((post) => (
          <PlaceholderCard key={post.id} title={post.title}>
            {post.excerpt}
          </PlaceholderCard>
        ))}
      </div>
      <Link className="button-secondary mt-6 inline-flex" href="/blog">
        {t("link")}
      </Link>
    </PageSection>
  );
}
