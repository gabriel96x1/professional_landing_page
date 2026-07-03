import {
  PageSection,
  PlaceholderCard,
  PlaceholderList,
} from "../_components/page-sections";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("Home.About");
  const values = t.raw("values") as string[];

  return (
    <PageSection
      id="about"
      title={t("title")}
      description={t("description")}
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="theme-card-shadow rounded-3xl border border-(--theme-border) bg-(--theme-surface) p-6 text-base leading-8 text-(--theme-text-secondary)">
          <p>{t("bio")}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <PlaceholderCard title={t("cards.experience.title")}>
            {t("cards.experience.body")}
          </PlaceholderCard>
          <PlaceholderCard title={t("cards.judgment.title")}>
            {t("cards.judgment.body")}
          </PlaceholderCard>
          <PlaceholderCard title={t("cards.collaboration.title")}>
            {t("cards.collaboration.body")}
          </PlaceholderCard>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-black uppercase text-(--theme-text-primary)">
          {t("valuesTitle")}
        </h3>
        <div className="mt-4">
          <PlaceholderList items={values} />
        </div>
      </div>
    </PageSection>
  );
}
