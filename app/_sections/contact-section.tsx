import { PlaceholderCard } from "../_components/page-sections";
import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("Home.Contact");
  const externalNewTabText = t("externalNewTab");

  return (
    <section
      aria-labelledby="contact-title"
      id="contact"
      className="border-t border-(--theme-border) bg-(--theme-background)"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[0.8fr_1fr] lg:px-8 lg:py-24">
        <div className="mb-8 max-w-3xl">
          <p className="font-mono text-sm font-bold uppercase text-(--theme-label)">
            {t("eyebrow")}
          </p>
          <h2
            className="mt-3 text-4xl font-black uppercase leading-tight text-(--theme-text-primary) sm:text-6xl"
            id="contact-title"
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-7 text-(--theme-text-secondary) sm:text-lg">
            {t("description")}
          </p>
        </div>

        <div>
          <div className="grid gap-4 md:grid-cols-3">
            <PlaceholderCard title={t("cards.contact.title")}>
              <a
                className="flex max-w-full items-center gap-2 font-semibold text-(--theme-text-primary) underline-offset-4 hover:underline"
                href={t("cards.contact.emailHref")}
              >
                <Mail
                  aria-hidden="true"
                  className="size-4 shrink-0 text-(--theme-label)"
                  strokeWidth={2.4}
                />
                <span className="min-w-0 truncate">{t("cards.contact.line1")}</span>
              </a>
              <br />
              <a
                className="flex items-center gap-2 font-semibold text-(--theme-text-primary) underline-offset-4 hover:underline"
                href={t("cards.contact.whatsappHref")}
                rel="noreferrer"
                target="_blank"
              >
                <Phone
                  aria-hidden="true"
                  className="size-4 shrink-0 text-(--theme-label)"
                  strokeWidth={2.4}
                />
                <span>{t("cards.contact.line2")}</span>
                <span className="sr-only"> {externalNewTabText}</span>
              </a>
            </PlaceholderCard>
            <PlaceholderCard title={t("cards.linkedin.title")}>
              <a
                className="font-semibold text-(--theme-text-primary) underline-offset-4 hover:underline"
                href={t("cards.linkedin.href")}
                rel="noreferrer"
                target="_blank"
              >
                {t("cards.linkedin.line1")}
                <span className="sr-only"> {externalNewTabText}</span>
              </a>
              <br />
              {t("cards.linkedin.line2")}
            </PlaceholderCard>
            <PlaceholderCard title={t("cards.github.title")}>
              <a
                className="font-semibold text-(--theme-text-primary) underline-offset-4 hover:underline"
                href={t("cards.github.href")}
                rel="noreferrer"
                target="_blank"
              >
                {t("cards.github.line1")}
                <span className="sr-only"> {externalNewTabText}</span>
              </a>
              <br />
              {t("cards.github.line2")}
            </PlaceholderCard>
          </div>

          <form
            action={t("cards.contact.emailHref")}
            aria-label={t("form.label")}
            className="theme-card-shadow mt-8 grid gap-4 rounded-4xl border border-(--theme-border) bg-(--theme-surface) p-6"
            encType="text/plain"
            method="post"
          >
            <label
              className="grid gap-2 text-sm font-extrabold text-(--theme-text-primary)"
              htmlFor="contact-name"
            >
              {t("form.name")}
              <input
                autoComplete="name"
                className="min-h-12 rounded-2xl border border-(--theme-border-strong) bg-(--theme-background) px-4 text-base font-normal text-(--theme-text-primary) placeholder:text-(--theme-text-secondary)"
                id="contact-name"
                name="name"
                placeholder={t("form.nameHint")}
                type="text"
              />
            </label>
            <label
              className="grid gap-2 text-sm font-extrabold text-(--theme-text-primary)"
              htmlFor="contact-email"
            >
              {t("form.email")}
              <input
                autoComplete="email"
                className="min-h-12 rounded-2xl border border-(--theme-border-strong) bg-(--theme-background) px-4 text-base font-normal text-(--theme-text-primary) placeholder:text-(--theme-text-secondary)"
                id="contact-email"
                name="email"
                placeholder={t("form.emailHint")}
                type="email"
              />
            </label>
            <label
              className="grid gap-2 text-sm font-extrabold text-(--theme-text-primary)"
              htmlFor="contact-message"
            >
              {t("form.message")}
              <textarea
                className="min-h-36 rounded-2xl border border-(--theme-border-strong) bg-(--theme-background) px-4 py-3 text-base font-normal text-(--theme-text-primary) placeholder:text-(--theme-text-secondary)"
                id="contact-message"
                name="message"
                placeholder={t("form.messageHint")}
              />
            </label>
            <button className="button-primary w-fit" type="submit">
              {t("form.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
