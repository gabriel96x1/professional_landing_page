import {
  PageSection,
  PlaceholderCard,
  PlaceholderList,
} from "../_components/page-sections";

export function AboutSection() {
  return (
    <PageSection
      id="about"
      title="Sobre mi"
      description="Una seccion para contar experiencia, criterio, forma de trabajar y que tipo de colaboraciones buscas."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="theme-card-shadow rounded-lg border border-(--theme-border) bg-(--theme-surface) p-6 text-base leading-8 text-(--theme-text-secondary)">
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
        <h3 className="text-lg font-semibold text-(--theme-text-primary)">
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
  );
}
