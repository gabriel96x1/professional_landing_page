import Link from "next/link";
import {
  CtaBand,
  PageSection,
  PlaceholderCard,
  PlaceholderList,
} from "./_components/page-sections";

const projects = [
  "Caso de estudio 1",
  "Caso de estudio 2",
  "Caso de estudio 3",
  "Caso de estudio 4",
];

export default function Home() {
  return (
    <main>
      <section id="inicio" className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase text-teal-700">
              Portafolio + freelance + blog
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-neutral-950 sm:text-6xl">
              Placeholder para una propuesta profesional clara.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
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
          <div className="rounded-lg border border-neutral-200 bg-stone-50 p-5">
            <div className="aspect-[4/3] rounded-md border border-dashed border-neutral-300 bg-white" />
            <div className="mt-5 grid gap-3 text-sm text-neutral-600">
              <p>Placeholder para screenshot, retrato o visual principal.</p>
              <p>Especialidad principal: [tu stack / tu enfoque].</p>
            </div>
          </div>
        </div>
      </section>

      <PageSection
        id="what-i-do"
        title="Que haces"
        description="Una explicacion corta de tu enfoque profesional, tus fortalezas y el tipo de problemas que resuelves."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <PlaceholderCard title="Desarrollo web">
            Placeholder para describir stack, alcance y tipos de producto.
          </PlaceholderCard>
          <PlaceholderCard title="Producto y UX">
            Placeholder para hablar de criterio, estructura y experiencia.
          </PlaceholderCard>
          <PlaceholderCard title="Contenido tecnico">
            Placeholder para conectar el blog con tu autoridad profesional.
          </PlaceholderCard>
        </div>
      </PageSection>

      <PageSection
        id="services"
        title="Servicios freelance"
        description="Una seccion comercial para explicar que ofreces, para quien es, como trabajas, que entregas y como iniciar una cotizacion."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <PlaceholderCard title="Sitios profesionales">
            Landing pages, sitios personales, paginas de servicio y presencia
            web orientada a conversion.
          </PlaceholderCard>
          <PlaceholderCard title="Desarrollo frontend">
            Componentes, vistas, integraciones, performance y mejoras sobre
            productos existentes.
          </PlaceholderCard>
          <PlaceholderCard title="Consultoria tecnica">
            Auditorias, planes de mejora, arquitectura ligera y soporte para
            decisiones de producto.
          </PlaceholderCard>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h3 className="text-lg font-semibold text-neutral-950">
              Para quien es
            </h3>
            <div className="mt-4">
              <PlaceholderList
                items={[
                  "Necesitas lanzar una pagina clara sin convertirla en un proyecto interminable.",
                  "Tienes un producto existente y quieres mejorar una parte especifica.",
                  "Quieres comunicar mejor tu oferta profesional o tecnica.",
                ]}
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-neutral-950">
              Como trabajo
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {["Diagnostico", "Propuesta", "Ejecucion", "Entrega"].map(
                (step) => (
                  <PlaceholderCard key={step} title={step}>
                    Placeholder para explicar esta etapa, tiempos y
                    expectativas.
                  </PlaceholderCard>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-neutral-950">
            Entregables
          </h3>
          <div className="mt-4">
            <PlaceholderList
              items={[
                "Repositorio o entrega tecnica organizada.",
                "Pagina o feature implementada y lista para revisar.",
                "Documentacion corta para uso, mantenimiento o siguientes pasos.",
                "Revision final y ajustes acordados dentro del alcance.",
              ]}
            />
          </div>
        </div>
      </PageSection>

      <PageSection
        id="portfolio"
        title="Portafolio"
        description="Proyectos y casos de estudio con espacio para problema, solucion, tecnologias, screenshots, resultados y aprendizajes."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <PlaceholderCard key={project} title={project}>
              <div className="mb-4 aspect-video rounded-md border border-dashed border-neutral-300 bg-stone-50" />
              <p>
                Problema: placeholder para explicar el contexto y la necesidad
                del cliente o producto.
              </p>
              <p className="mt-3">
                Solucion: placeholder para describir decisiones, arquitectura,
                UX o implementacion.
              </p>
              <p className="mt-3">
                Tecnologias: [Next.js], [React], [CMS], [API], [otra].
              </p>
              <p className="mt-3">Resultado: metricas, impacto o aprendizaje.</p>
            </PlaceholderCard>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {["Problema", "Solucion", "Tecnologias", "Resultado", "Screenshots"].map(
            (item) => (
              <PlaceholderCard key={item} title={item}>
                Placeholder para completar esta parte del caso de estudio.
              </PlaceholderCard>
            ),
          )}
        </div>
      </PageSection>

      <PageSection
        id="blog-preview"
        title="Ultimos articulos"
        description="El blog se mantiene como pagina separada para que tenga su propio indice, categorias y articulos individuales."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {["Articulo reciente 1", "Articulo reciente 2", "Articulo reciente 3"].map(
            (post) => (
              <PlaceholderCard key={post} title={post}>
                Extracto breve, categoria, fecha y enlace al articulo completo.
              </PlaceholderCard>
            ),
          )}
        </div>
        <Link className="button-secondary mt-6 inline-flex" href="/blog">
          Ver blog
        </Link>
      </PageSection>

      <PageSection
        id="about"
        title="Sobre mi"
        description="Una seccion para contar experiencia, criterio, forma de trabajar y que tipo de colaboraciones buscas."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-neutral-200 bg-white p-6 text-base leading-8 text-neutral-600 shadow-sm">
            <p>
              Placeholder para una biografia breve. Incluye experiencia,
              intereses, enfoque de trabajo y una nota humana que ayude a
              conectar.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <PlaceholderCard title="Experiencia">
              Placeholder para trayectoria, industrias, roles o proyectos
              relevantes.
            </PlaceholderCard>
            <PlaceholderCard title="Criterio">
              Placeholder para explicar como tomas decisiones tecnicas y de
              producto.
            </PlaceholderCard>
            <PlaceholderCard title="Colaboracion">
              Placeholder para tu manera de comunicar, estimar y entregar.
            </PlaceholderCard>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-neutral-950">
            Valores de trabajo
          </h3>
          <div className="mt-4">
            <PlaceholderList
              items={[
                "Claridad antes de complejidad.",
                "Diseño y codigo al servicio del objetivo.",
                "Comunicacion directa durante todo el proceso.",
                "Entrega mantenible y facil de evolucionar.",
              ]}
            />
          </div>
        </div>
      </PageSection>

      <section id="contact" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-14 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase text-teal-700">
              Contacto
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-neutral-950">
              Un lugar claro para iniciar una conversacion.
            </h2>
            <p className="mt-3 text-base leading-7 text-neutral-600">
              Canales, expectativas, disponibilidad y un formulario placeholder
              para convertir esta seccion en contacto real.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <PlaceholderCard title="Email">
              tuemail@example.com
              <br />
              Placeholder para correo principal.
            </PlaceholderCard>
            <PlaceholderCard title="LinkedIn">
              /in/tu-perfil
              <br />
              Placeholder para perfil profesional.
            </PlaceholderCard>
            <PlaceholderCard title="Agenda">
              Link de calendario
              <br />
              Placeholder para llamadas de descubrimiento.
            </PlaceholderCard>
          </div>

          <form className="mt-8 grid max-w-3xl gap-4 rounded-lg border border-neutral-200 bg-stone-50 p-6 shadow-sm">
            <label className="grid gap-2 text-sm font-medium text-neutral-800">
              Nombre
              <input
                className="min-h-11 rounded-md border border-neutral-300 bg-white px-3 text-base font-normal"
                placeholder="Tu nombre"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-neutral-800">
              Email
              <input
                className="min-h-11 rounded-md border border-neutral-300 bg-white px-3 text-base font-normal"
                placeholder="tu@email.com"
                type="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-neutral-800">
              Mensaje
              <textarea
                className="min-h-36 rounded-md border border-neutral-300 bg-white px-3 py-3 text-base font-normal"
                placeholder="Cuentame que necesitas construir o mejorar."
              />
            </label>
            <button className="button-primary w-fit" type="button">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
