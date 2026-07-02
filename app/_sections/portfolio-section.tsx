import { PageSection, PlaceholderCard } from "../_components/page-sections";
import { useTranslations } from "next-intl";

export function PortfolioSection() {
  const t = useTranslations("Home.Portfolio");
  const projects = t.raw("projects") as string[];
  const caseStudyParts = t.raw("caseStudyParts") as string[];

  return (
    <PageSection
      id="portfolio"
      title={t("title")}
      description={t("description")}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <PlaceholderCard key={project} title={project}>
            <div className="mb-4 aspect-video rounded-md border border-dashed border-(--theme-border-strong) bg-(--theme-surface-muted)" />
            <p>{t("projectDetails.problem")}</p>
            <p className="mt-3">{t("projectDetails.solution")}</p>
            <p className="mt-3">{t("projectDetails.technologies")}</p>
            <p className="mt-3">{t("projectDetails.result")}</p>
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
