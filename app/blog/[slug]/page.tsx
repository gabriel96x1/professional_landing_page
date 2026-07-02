import Link from "next/link";
import { PageHero, PageSection } from "../../_components/page-sections";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main>
      <PageHero
        eyebrow="Articulo"
        title="Titulo placeholder del articulo individual."
        description={`Slug actual: ${slug}. Esta ruta queda lista para conectar contenido real desde MDX, CMS o archivos locales.`}
      />

      <PageSection title="Contenido">
        <article className="max-w-3xl rounded-lg border border-neutral-200 bg-white p-6 text-base leading-8 text-neutral-600 shadow-sm">
          <p>
            Introduccion placeholder para plantear el problema, contexto o
            aprendizaje principal del articulo.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-neutral-950">
            Seccion principal
          </h2>
          <p className="mt-3">
            Desarrollo placeholder con ideas, ejemplos, enlaces o notas
            tecnicas. Esta pagina puede convertirse en un template para todos
            los posts.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-neutral-950">
            Cierre
          </h2>
          <p className="mt-3">
            Conclusion placeholder con siguiente paso, resumen o reflexion.
          </p>
          <Link
            className="mt-8 inline-flex font-medium text-neutral-950 underline-offset-4 hover:underline"
            href="/blog"
          >
            Volver al blog
          </Link>
        </article>
      </PageSection>
    </main>
  );
}
