import { PageSection, PlaceholderCard } from "../_components/page-sections";
import { useTranslations } from "next-intl";

export function WhatIDoSection() {
  const t = useTranslations("Home.WhatIDo");

  return (
    <PageSection
      id="what-i-do"
      title={t("title")}
      description={t("description")}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <PlaceholderCard title={t("cards.web.title")}>
          {t("cards.web.body")}
        </PlaceholderCard>
        <PlaceholderCard title={t("cards.product.title")}>
          {t("cards.product.body")}
        </PlaceholderCard>
        <PlaceholderCard title={t("cards.content.title")}>
          {t("cards.content.body")}
        </PlaceholderCard>
      </div>
    </PageSection>
  );
}
