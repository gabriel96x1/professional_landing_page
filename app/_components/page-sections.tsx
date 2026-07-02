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
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase text-teal-700">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            {description}
          </p>
          {primaryHref && primaryLabel ? (
            <Link className="button-primary mt-8 inline-flex" href={primaryHref}>
              {primaryLabel}
            </Link>
          ) : null}
        </div>
        <div className="grid content-end gap-3 rounded-lg border border-neutral-200 bg-stone-50 p-5">
          <p className="text-sm font-medium text-neutral-500">
            Placeholder editorial
          </p>
          <div className="aspect-[4/3] rounded-md border border-dashed border-neutral-300 bg-white" />
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
        <h2 className="text-2xl font-semibold text-neutral-950">{title}</h2>
        {description ? (
          <p className="mt-3 text-base leading-7 text-neutral-600">
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
    <article className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-neutral-950">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-neutral-600">{children}</div>
    </article>
  );
}

export function PlaceholderList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 text-sm leading-6 text-neutral-600">
      {items.map((item) => (
        <li key={item} className="rounded-md border border-neutral-200 bg-white p-4">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CtaBand() {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-teal-300">
            Siguiente paso
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            Placeholder para llamada de contacto
          </h2>
        </div>
        <Link
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-neutral-950 transition hover:bg-teal-100"
          href="/#contact"
        >
          Ir a contacto
        </Link>
      </div>
    </section>
  );
}
