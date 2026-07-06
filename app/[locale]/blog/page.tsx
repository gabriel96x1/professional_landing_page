import { getBlogPosts } from "@/app/_lib/blog-posts";
import { Link } from "@/i18n/navigation";
import { isAppLocale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  PageHero,
  PageSection,
  PlaceholderCard,
} from "../../_components/page-sections";

type BlogPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Blog.Index" });
  const posts = await getBlogPosts(locale);
  const categories = t.raw("categories") as string[];

  return (
    <main id="main-content">
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        aside={
          <div>
            <p className="font-mono text-xs font-bold uppercase text-(--theme-label)">
              {t("heroAsideEyebrow")}
            </p>
            <p className="mt-4 text-4xl font-black uppercase leading-none text-(--theme-text-primary)">
              {posts.length}
            </p>
            <p className="mt-3 text-sm leading-6 text-(--theme-text-secondary)">
              {t("heroAsideBody")}
            </p>
          </div>
        }
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
              <p className="font-mono text-xs font-bold uppercase text-(--theme-label)">
                {post.category}
              </p>
              <p className="mt-2 font-mono text-xs text-(--theme-text-secondary)">
                <time dateTime={post.publishedAt}>{post.publishedAt}</time> / {post.readingTime}
              </p>
              <p className="mt-3">{post.excerpt}</p>
              <Link
                className="mt-4 inline-flex font-extrabold text-(--theme-text-primary) underline-offset-4 hover:underline"
                href={`/blog/${post.slug}`}
                aria-label={t("readArticleLabel", { title: post.title })}
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
