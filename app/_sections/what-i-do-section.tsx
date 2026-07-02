import { PageSection, PlaceholderCard } from "../_components/page-sections";

export function WhatIDoSection() {
  return (
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
  );
}
