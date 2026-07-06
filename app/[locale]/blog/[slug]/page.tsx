import {
  getAllBlogStaticParams,
  getPostByLocaleSlug,
} from "@/app/_lib/blog-posts";
import { PageHero, PageSection } from "@/app/_components/page-sections";
import { Link } from "@/i18n/navigation";
import { isAppLocale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogStaticParams();
}

export const dynamicParams = false;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const post = await getPostByLocaleSlug(locale, slug);

  if (!post) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Blog.Post" });
  const { Content } = post;

  return (
    <main>
      <PageHero
        eyebrow={t("eyebrow")}
        title={post.title}
        description={post.excerpt}
        aside={
          <div className="grid gap-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-(--theme-label)">
            <span>{post.category}</span>
            <span>{post.publishedAt}</span>
            <span>{post.readingTime}</span>
          </div>
        }
      />

      <PageSection title={t("contentTitle")}>
        <article className="theme-card-shadow max-w-3xl rounded-3xl border border-(--theme-border) bg-(--theme-surface) p-6 text-base leading-8 text-(--theme-text-secondary)">
          <div className="mb-8 flex flex-wrap gap-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-(--theme-label)">
            <span>{post.category}</span>
            <span>{post.publishedAt}</span>
            <span>{post.readingTime}</span>
          </div>
          <Content />
          <Link
            className="mt-8 inline-flex font-extrabold text-(--theme-text-primary) underline-offset-4 hover:underline"
            href="/blog"
          >
            {t("back")}
          </Link>
        </article>
      </PageSection>
    </main>
  );
}
