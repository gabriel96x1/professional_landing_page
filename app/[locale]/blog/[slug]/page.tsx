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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  const post = getPostByLocaleSlug(locale, slug);

  if (!post) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Blog.Post" });

  return (
    <main>
      <PageHero
        eyebrow={t("eyebrow")}
        title={post.title || t("title")}
        description={t("description", { slug })}
      />

      <PageSection title={t("contentTitle")}>
        <article className="theme-card-shadow max-w-3xl rounded-3xl border border-(--theme-border) bg-(--theme-surface) p-6 text-base leading-8 text-(--theme-text-secondary)">
          <p>{t("intro")}</p>
          <h2 className="mt-8 text-3xl font-black uppercase leading-tight text-(--theme-text-primary)">
            {t("mainHeading")}
          </h2>
          <p className="mt-3">{t("mainBody")}</p>
          <h2 className="mt-8 text-3xl font-black uppercase leading-tight text-(--theme-text-primary)">
            {t("closingHeading")}
          </h2>
          <p className="mt-3">{t("closingBody")}</p>
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
