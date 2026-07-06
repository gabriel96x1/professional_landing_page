import { Link } from "@/i18n/navigation";
import type { ComponentProps } from "react";
import { useTranslations } from "next-intl";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: ComponentProps<typeof Link>["href"];
  primaryLabel?: string;
};

type PlaceholderCardProps = {
  title: string;
  children: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
}: PageHeroProps) {
  const t = useTranslations("Shared");

  return (
    <section className="border-b border-(--theme-border) bg-(--theme-background)">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <div>
          <p className="font-mono text-[0.82rem] font-bold uppercase tracking-[0.12em] text-(--theme-label)">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.9] text-(--theme-text-primary) sm:text-6xl lg:text-[4.8rem] xl:text-[5.2rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-(--theme-text-secondary) sm:text-xl">
            {description}
          </p>
          {primaryHref && primaryLabel ? (
            <Link className="button-primary mt-8 inline-flex" href={primaryHref}>
              {primaryLabel}
            </Link>
          ) : null}
        </div>
        <div className="theme-card-shadow grid content-end gap-3 rounded-[2rem] border border-(--theme-border-strong) bg-(--theme-surface) p-6">
          <p className="text-sm font-medium text-(--theme-text-secondary)">
            {t("editorialPlaceholder")}
          </p>
          <div className="aspect-[4/3] rounded-3xl border border-dashed border-(--theme-border-strong) bg-(--theme-background)" />
        </div>
      </div>
    </section>
  );
}

export function PageSection({
  id,
  title,
  description,
  children,
}: {
  id?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-14 lg:px-8 lg:py-16">
      <div className="mb-8 max-w-3xl">
        <h2 className="text-4xl font-black uppercase leading-[0.94] text-(--theme-text-primary) sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-7 text-(--theme-text-secondary) sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function PlaceholderCard({ title, children }: PlaceholderCardProps) {
  return (
    <article className="theme-card-shadow rounded-3xl border border-(--theme-border) bg-(--theme-surface) p-6">
      <h3 className="text-lg font-black uppercase leading-tight text-(--theme-text-primary)">
        {title}
      </h3>
      <div className="mt-3 text-sm leading-6 text-(--theme-text-secondary)">{children}</div>
    </article>
  );
}

export function PlaceholderList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 text-sm leading-6 text-(--theme-text-secondary)">
      {items.map((item) => (
        <li key={item} className="rounded-2xl border border-(--theme-border) bg-(--theme-surface) p-4">
          {item}
        </li>
      ))}
    </ul>
  );
}
