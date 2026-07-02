import Link from "next/link";
import {
  PageHero,
  PageSection,
  PlaceholderCard,
} from "../_components/page-sections";

const posts = [
  {
    slug: "articulo-placeholder-1",
    title: "Articulo placeholder 1",
    category: "Desarrollo",
  },
  {
    slug: "articulo-placeholder-2",
    title: "Articulo placeholder 2",
    category: "Freelance",
  },
  {
    slug: "articulo-placeholder-3",
    title: "Articulo placeholder 3",
    category: "Producto",
  },
];

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Articulos para compartir criterio, proceso y aprendizaje."
        description="Indice de contenido con espacio para categorias, filtros, buscador y entradas individuales."
      />

      <PageSection title="Categorias">
        <div className="flex flex-wrap gap-2">
          {["Todos", "Desarrollo", "Freelance", "Producto", "Notas"].map(
            (category) => (
              <span
                key={category}
                className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-600"
              >
                {category}
              </span>
            ),
          )}
        </div>
      </PageSection>

      <PageSection title="Articulos">
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <PlaceholderCard key={post.slug} title={post.title}>
              <p className="text-xs font-semibold uppercase text-teal-700">
                {post.category}
              </p>
              <p className="mt-3">
                Extracto placeholder para resumir la idea del articulo y el
                valor para quien lo lee.
              </p>
              <Link
                className="mt-4 inline-flex font-medium text-neutral-950 underline-offset-4 hover:underline"
                href={`/blog/${post.slug}`}
              >
                Leer articulo
              </Link>
            </PlaceholderCard>
          ))}
        </div>
      </PageSection>
    </main>
  );
}
