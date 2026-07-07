import { homeSectionIds } from "@/app/_lib/home-sections";
import { PageSection, PlaceholderCard } from "../_components/page-sections";
import { useTranslations } from "next-intl";

export function PortfolioSection() {
  const t = useTranslations("Home.Portfolio");
  const projects = t.raw("projects") as Array<{
    title: string;
    problem: string;
    solution: string;
    technologies: string;
    result: string;
  }>;
  const caseStudyParts = t.raw("caseStudyParts") as string[];

  return (
    <PageSection
      id={homeSectionIds.portfolio}
      title={t("title")}
      description={t("description")}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <PlaceholderCard key={project.title} title={project.title}>
            <div
              aria-hidden="true"
              className="mb-4 aspect-video rounded-2xl border border-dashed border-(--theme-border-strong) bg-(--theme-surface-muted)"
            />
            <p>{project.problem}</p>
            <p className="mt-3">{project.solution}</p>
            <p className="mt-3">{project.technologies}</p>
            <p className="mt-3">{project.result}</p>
          </PlaceholderCard>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-5">
        {caseStudyParts.map((item) => (
          <PlaceholderCard key={item} title={item}>
            {t("caseStudyBody")}
          </PlaceholderCard>
        ))}
      </div>
    </PageSection>
  );
}
