import { homeSectionIds } from "@/app/_lib/home-sections";
import { PlaceholderCard } from "../_components/page-sections";
import { GitHubIcon } from "../_components/icons/github-icon";
import { LinkedInIcon } from "../_components/icons/linkedin-icon";
import { WhatsAppIcon } from "../_components/icons/whatsapp-icon";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("Home.Contact");
  const externalNewTabText = t("externalNewTab");

  return (
    <section
      aria-labelledby="contact-title"
      id={homeSectionIds.contact}
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
          <div className="grid gap-4">
            <PlaceholderCard title={t("cards.contact.title")}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="grid min-w-0 gap-3">
                  <a
                    className="flex max-w-full items-center gap-2 font-semibold text-(--theme-text-primary) underline-offset-4 hover:underline"
                    href={t("cards.contact.emailHref")}
                  >
                    <Mail
                      aria-hidden="true"
                      className="size-4 shrink-0 text-(--theme-label)"
                      strokeWidth={2.4}
                    />
                    <span className="min-w-0 truncate">
                      {t("cards.contact.line1")}
                    </span>
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    aria-label={`${t("cards.contact.ariaLabel")} ${externalNewTabText}`}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-(--theme-border-strong) text-(--theme-text-primary) transition hover:border-(--theme-label) hover:text-(--theme-label) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--theme-label)"
                    href={t("cards.contact.whatsappHref")}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <WhatsAppIcon className="size-5" />
                  </a>
                  <a
                    aria-label={`${t("cards.linkedin.ariaLabel")} ${externalNewTabText}`}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-(--theme-border-strong) text-(--theme-text-primary) transition hover:border-(--theme-label) hover:text-(--theme-label) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--theme-label)"
                    href={t("cards.linkedin.href")}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <LinkedInIcon className="size-5" />
                  </a>
                  <a
                    aria-label={`${t("cards.github.ariaLabel")} ${externalNewTabText}`}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-(--theme-border-strong) text-(--theme-text-primary) transition hover:border-(--theme-label) hover:text-(--theme-label) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--theme-label)"
                    href={t("cards.github.href")}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <GitHubIcon className="size-5" />
                  </a>
                </div>
              </div>
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
