import { PlaceholderCard } from "../_components/page-sections";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("Home.Contact");

  return (
    <section id="contact" className="border-t border-(--theme-border) bg-(--theme-background)">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase text-(--theme-label)">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-(--theme-text-primary)">
            {t("title")}
          </h2>
          <p className="mt-3 text-base leading-7 text-(--theme-text-secondary)">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <PlaceholderCard title={t("cards.email.title")}>
            {t("cards.email.line1")}
            <br />
            {t("cards.email.line2")}
          </PlaceholderCard>
          <PlaceholderCard title={t("cards.linkedin.title")}>
            {t("cards.linkedin.line1")}
            <br />
            {t("cards.linkedin.line2")}
          </PlaceholderCard>
          <PlaceholderCard title={t("cards.calendar.title")}>
            {t("cards.calendar.line1")}
            <br />
            {t("cards.calendar.line2")}
          </PlaceholderCard>
        </div>

        <form className="theme-card-shadow mt-8 grid max-w-3xl gap-4 rounded-lg border border-(--theme-border) bg-(--theme-surface-muted) p-6">
          <label className="grid gap-2 text-sm font-medium text-(--theme-text-primary)">
            {t("form.name")}
            <input
              className="min-h-11 rounded-md border border-(--theme-border) bg-(--theme-background) px-3 text-base font-normal text-(--theme-text-primary) placeholder:text-(--theme-text-secondary)"
              placeholder={t("form.namePlaceholder")}
              type="text"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-(--theme-text-primary)">
            {t("form.email")}
            <input
              className="min-h-11 rounded-md border border-(--theme-border) bg-(--theme-background) px-3 text-base font-normal text-(--theme-text-primary) placeholder:text-(--theme-text-secondary)"
              placeholder={t("form.emailPlaceholder")}
              type="email"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-(--theme-text-primary)">
            {t("form.message")}
            <textarea
              className="min-h-36 rounded-md border border-(--theme-border) bg-(--theme-background) px-3 py-3 text-base font-normal text-(--theme-text-primary) placeholder:text-(--theme-text-secondary)"
              placeholder={t("form.messagePlaceholder")}
            />
          </label>
          <button className="button-primary w-fit" type="button">
            {t("form.submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
