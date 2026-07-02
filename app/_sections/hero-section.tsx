import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("Home.Hero");

  return (
    <section id="inicio" className="bg-(--theme-background)">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase text-(--theme-label)">
            {t("eyebrow")}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-(--theme-text-primary) sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-(--theme-text-secondary)">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary" href="/#contact">
              {t("primaryCta")}
            </Link>
            <Link className="button-secondary" href="/#portfolio">
              {t("secondaryCta")}
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-(--theme-border) bg-(--theme-surface-muted) p-5">
          <div className="aspect-[4/3] rounded-md border border-dashed border-(--theme-border-strong) bg-(--theme-background)" />
          <div className="mt-5 grid gap-3 text-sm text-(--theme-text-secondary)">
            <p>{t("visualPlaceholder")}</p>
            <p>{t("specialty")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
