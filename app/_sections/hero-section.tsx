import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("Home.Hero");

  return (
    <section aria-labelledby="inicio-title" id="inicio" className="bg-(--theme-background)">
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.72fr)] lg:gap-14 lg:px-8 lg:py-24">
        <div className="min-w-0">
          <p className="font-mono text-sm font-bold uppercase text-(--theme-label)">
            {t("eyebrow")}
          </p>
          <h1
            className="mt-5 max-w-full text-5xl font-black uppercase leading-none text-(--theme-text-primary) sm:text-6xl lg:text-7xl"
            id="inicio-title"
          >
            {t("title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-(--theme-text-secondary) sm:text-xl">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="button-primary"
              href={{ pathname: "/", hash: "contact" }}
            >
              {t("primaryCta")}
            </Link>
            <Link
              className="button-secondary"
              href={{ pathname: "/", hash: "portfolio" }}
            >
              {t("secondaryCta")}
            </Link>
          </div>
        </div>
        <aside
          aria-labelledby="hero-summary-title"
          className="theme-card-shadow flex min-h-104 flex-col justify-between overflow-hidden rounded-4xl border border-(--theme-border-strong) bg-(--theme-surface) p-6 lg:min-h-160 lg:p-10 self-start"
        >
          <div
            aria-hidden="true"
            className="grid size-36 place-items-center rounded-[2.375rem] border border-(--theme-border) bg-(--theme-surface-muted) shadow-[inset_0_0_0_12px_var(--theme-label-soft)]"
          >

          </div>
          <div className="mt-5 grid gap-3 text-sm text-(--theme-text-secondary)">
            <p
              className="font-mono text-2xl font-bold uppercase text-(--theme-label)"
              id="hero-summary-title"
            >
              {t("visualLabel")}
            </p>
            <p className="text-3xl font-black uppercase leading-8 text-(--theme-text-primary) sm:text-4xl">
              {t("specialty")}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
