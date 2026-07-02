import Link from "next/link";

export function HeroSection() {
  return (
    <section id="inicio" className="bg-(--theme-background)">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase text-(--theme-label)">
            Portafolio + freelance + blog
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-(--theme-text-primary) sm:text-6xl">
            Placeholder para una propuesta profesional clara.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-(--theme-text-secondary)">
            Resumen breve de que haces, para quien trabajas y que resultado
            ayudas a conseguir. Esta home debe convencer en 30 a 60 segundos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary" href="/#contact">
              Contactar
            </Link>
            <Link className="button-secondary" href="/#portfolio">
              Ver proyectos
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-(--theme-border) bg-(--theme-surface-muted) p-5">
          <div className="aspect-[4/3] rounded-md border border-dashed border-(--theme-border-strong) bg-(--theme-background)" />
          <div className="mt-5 grid gap-3 text-sm text-(--theme-text-secondary)">
            <p>Placeholder para screenshot, retrato o visual principal.</p>
            <p>Especialidad principal: [tu stack / tu enfoque].</p>
          </div>
        </div>
      </div>
    </section>
  );
}
