import Link from "next/link";
import { PageSection, PlaceholderCard } from "../_components/page-sections";

const recentPosts = [
  "Articulo reciente 1",
  "Articulo reciente 2",
  "Articulo reciente 3",
];

export function BlogPreviewSection() {
  return (
    <PageSection
      id="blog-preview"
      title="Ultimos articulos"
      description="El blog se mantiene como pagina separada para que tenga su propio indice, categorias y articulos individuales."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {recentPosts.map((post) => (
          <PlaceholderCard key={post} title={post}>
            Extracto breve, categoria, fecha y enlace al articulo completo.
          </PlaceholderCard>
        ))}
      </div>
      <Link className="button-secondary mt-6 inline-flex" href="/blog">
        Ver blog
      </Link>
    </PageSection>
  );
}
