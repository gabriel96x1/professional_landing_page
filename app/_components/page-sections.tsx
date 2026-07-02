import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
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
  return (
    <section className="border-b border-(--theme-border) bg-(--theme-background)">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase text-(--theme-label)">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-(--theme-text-primary) sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-(--theme-text-secondary)">
            {description}
          </p>
          {primaryHref && primaryLabel ? (
            <Link className="button-primary mt-8 inline-flex" href={primaryHref}>
              {primaryLabel}
            </Link>
          ) : null}
        </div>
        <div className="grid content-end gap-3 rounded-lg border border-(--theme-border) bg-(--theme-surface-muted) p-5">
          <p className="text-sm font-medium text-(--theme-text-secondary)">
            Placeholder editorial
          </p>
          <div className="aspect-[4/3] rounded-md border border-dashed border-(--theme-border-strong) bg-(--theme-background)" />
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
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-14 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <h2 className="text-2xl font-semibold text-(--theme-text-primary)">{title}</h2>
        {description ? (
          <p className="mt-3 text-base leading-7 text-(--theme-text-secondary)">
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
    <article className="theme-card-shadow rounded-lg border border-(--theme-border) bg-(--theme-surface) p-5">
      <h3 className="text-lg font-semibold text-(--theme-text-primary)">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-(--theme-text-secondary)">{children}</div>
    </article>
  );
}

export function PlaceholderList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 text-sm leading-6 text-(--theme-text-secondary)">
      {items.map((item) => (
        <li key={item} className="rounded-md border border-(--theme-border) bg-(--theme-surface) p-4">
          {item}
        </li>
      ))}
    </ul>
  );
}
