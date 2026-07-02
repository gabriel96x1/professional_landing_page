import {
  PageSection,
  PlaceholderCard,
  PlaceholderList,
} from "../_components/page-sections";

const workflowSteps = ["Diagnostico", "Propuesta", "Ejecucion", "Entrega"];

export function ServicesSection() {
  return (
    <PageSection
      id="services"
      title="Servicios freelance"
      description="Una seccion comercial para explicar que ofreces, para quien es, como trabajas, que entregas y como iniciar una cotizacion."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <PlaceholderCard title="Sitios profesionales">
          Landing pages, sitios personales, paginas de servicio y presencia web
          orientada a conversion.
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
          <h3 className="text-lg font-semibold text-(--theme-text-primary)">
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
          <h3 className="text-lg font-semibold text-(--theme-text-primary)">
            Como trabajo
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {workflowSteps.map((step) => (
              <PlaceholderCard key={step} title={step}>
                Placeholder para explicar esta etapa, tiempos y expectativas.
              </PlaceholderCard>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-(--theme-text-primary)">Entregables</h3>
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
  );
}
