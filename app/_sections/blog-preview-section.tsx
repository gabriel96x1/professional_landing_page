import { getBlogPosts } from "@/app/_lib/blog-posts";
import { Link } from "@/i18n/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { PageSection, PlaceholderCard } from "../_components/page-sections";
import type { AppLocale } from "@/i18n/routing";

export async function BlogPreviewSection() {
  const locale = (await getLocale()) as AppLocale;
  const t = await getTranslations("Home.BlogPreview");
  const recentPosts = (await getBlogPosts(locale)).slice(0, 3);

  return (
    <PageSection
      id="blog-preview"
      title={t("title")}
      description={t("description")}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {recentPosts.map((post) => (
          <PlaceholderCard key={post.id} title={post.title}>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-(--theme-label)">
              {post.category}
            </p>
            <p className="mt-3">{post.excerpt}</p>
            <Link
              className="mt-4 inline-flex font-extrabold text-(--theme-text-primary) underline-offset-4 hover:underline"
              href={`/blog/${post.slug}`}
            >
              {t("readArticle")}
            </Link>
          </PlaceholderCard>
        ))}
      </div>
      <Link className="button-secondary mt-6 inline-flex" href="/blog">
        {t("link")}
      </Link>
    </PageSection>
  );
}
