import { PageSection, PlaceholderCard } from "../_components/page-sections";

const projects = [
  "Caso de estudio 1",
  "Caso de estudio 2",
  "Caso de estudio 3",
  "Caso de estudio 4",
];

const caseStudyParts = [
  "Problema",
  "Solucion",
  "Tecnologias",
  "Resultado",
  "Screenshots",
];

export function PortfolioSection() {
  return (
    <PageSection
      id="portfolio"
      title="Portafolio"
      description="Proyectos y casos de estudio con espacio para problema, solucion, tecnologias, screenshots, resultados y aprendizajes."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <PlaceholderCard key={project} title={project}>
            <div className="mb-4 aspect-video rounded-md border border-dashed border-(--theme-border-strong) bg-(--theme-surface-muted)" />
            <p>
              Problema: placeholder para explicar el contexto y la necesidad del
              cliente o producto.
            </p>
            <p className="mt-3">
              Solucion: placeholder para describir decisiones, arquitectura, UX
              o implementacion.
            </p>
            <p className="mt-3">
              Tecnologias: [Next.js], [React], [CMS], [API], [otra].
            </p>
            <p className="mt-3">Resultado: metricas, impacto o aprendizaje.</p>
          </PlaceholderCard>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-5">
        {caseStudyParts.map((item) => (
          <PlaceholderCard key={item} title={item}>
            Placeholder para completar esta parte del caso de estudio.
          </PlaceholderCard>
        ))}
      </div>
    </PageSection>
  );
}
