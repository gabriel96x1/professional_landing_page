import {
  PageSection,
  PlaceholderCard,
  PlaceholderList,
} from "../_components/page-sections";
import { useTranslations } from "next-intl";

export function ServicesSection() {
  const t = useTranslations("Home.Services");
  const audienceItems = t.raw("audienceItems") as string[];
  const workflowSteps = t.raw("workflowSteps") as Array<{
    title: string;
    body: string;
  }>;
  const deliverableItems = t.raw("deliverableItems") as string[];

  return (
    <PageSection
      id="services"
      title={t("title")}
      description={t("description")}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <PlaceholderCard title={t("cards.sites.title")}>
          {t("cards.sites.body")}
        </PlaceholderCard>
        <PlaceholderCard title={t("cards.frontend.title")}>
          {t("cards.frontend.body")}
        </PlaceholderCard>
        <PlaceholderCard title={t("cards.consulting.title")}>
          {t("cards.consulting.body")}
        </PlaceholderCard>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h3 className="text-lg font-black uppercase text-(--theme-text-primary)">
            {t("audienceTitle")}
          </h3>
          <div className="mt-4">
            <PlaceholderList items={audienceItems} />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-black uppercase text-(--theme-text-primary)">
            {t("workflowTitle")}
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {workflowSteps.map((step) => (
              <PlaceholderCard key={step.title} title={step.title}>
                {step.body}
              </PlaceholderCard>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-black uppercase text-(--theme-text-primary)">
          {t("deliverablesTitle")}
        </h3>
        <div className="mt-4">
          <PlaceholderList items={deliverableItems} />
        </div>
      </div>
    </PageSection>
  );
}
