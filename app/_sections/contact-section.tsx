import { homeSectionIds } from "@/app/_lib/home-sections";
import { PlaceholderCard } from "../_components/page-sections";
import { Mail, Phone } from "lucide-react";
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
                </div>
                <div className="flex items-center gap-3">
                  <a
                    aria-label={`${t("cards.linkedin.ariaLabel")} ${externalNewTabText}`}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-(--theme-border-strong) text-(--theme-text-primary) transition hover:border-(--theme-label) hover:text-(--theme-label) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--theme-label)"
                    href={t("cards.linkedin.href")}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    aria-label={`${t("cards.github.ariaLabel")} ${externalNewTabText}`}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-(--theme-border-strong) text-(--theme-text-primary) transition hover:border-(--theme-label) hover:text-(--theme-label) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--theme-label)"
                    href={t("cards.github.href")}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <GitHubIcon />
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

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="currentColor"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.42a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.03H3.54V8.99H7.1v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="currentColor"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.14c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18A10.96 10.96 0 0 1 12 6.01c.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.79.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}
