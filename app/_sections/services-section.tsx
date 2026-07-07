import { HomeSectionLink } from "@/app/_components/home-section-link";
import { homeSectionIds } from "@/app/_lib/home-sections";
import {
  Bot,
  ClipboardCheck,
  CloudCog,
  Globe,
  Smartphone,
  Workflow,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { PageSection } from "../_components/page-sections";

type Service = {
  key: "audit" | "automation" | "mobile" | "web" | "cloud" | "pipelines";
  eyebrow: string;
  title: string;
  body: string;
  includes: string[];
  outcome: string;
  price: string;
  cta: string;
};

const serviceIcons = {
  audit: ClipboardCheck,
  automation: Bot,
  mobile: Smartphone,
  web: Globe,
  cloud: CloudCog,
  pipelines: Workflow,
} as const;

export function ServicesSection() {
  const t = useTranslations("Home.Services");
  const services = t.raw("items") as Service[];

  return (
    <PageSection
      id={homeSectionIds.services}
      title={t("title")}
      description={t("description")}
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = serviceIcons[service.key];

          return (
            <article
              key={service.key}
              className="theme-card-shadow flex min-h-full flex-col justify-between overflow-hidden rounded-3xl border border-(--theme-border) bg-(--theme-surface) p-5 sm:p-6"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_2.75rem] items-start gap-4">
                <div className="min-w-0">
                  <p className="font-mono text-xs font-bold uppercase text-(--theme-label)">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-black uppercase leading-[0.95] text-(--theme-text-primary) wrap-anywhere">
                    {service.title}
                  </h3>
                </div>
                <div className="grid size-11 place-items-center rounded-2xl border border-(--theme-border-strong) bg-(--theme-surface-muted) text-(--theme-text-primary)">
                  <Icon aria-hidden="true" size={22} strokeWidth={2.2} />
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-(--theme-text-secondary)">
                {service.body}
              </p>

              <ul className="mt-5 grid gap-2 text-sm leading-5 text-(--theme-text-secondary)">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-(--theme-label)"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-(--theme-border) pt-5">
                <p className="text-sm font-bold text-(--theme-text-primary)">
                  {service.outcome}
                </p>
                <p className="mt-3 font-mono text-sm font-bold uppercase text-(--theme-label)">
                  {service.price}
                </p>
              </div>

              <HomeSectionLink
                className="button-secondary mt-6 w-full"
                href={{ pathname: "/", hash: homeSectionIds.contact }}
              >
                {service.cta}
              </HomeSectionLink>
            </article>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 border-t border-(--theme-border) pt-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h3 className="text-2xl font-black uppercase leading-tight text-(--theme-text-primary)">
            {t("ctaTitle")}
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-(--theme-text-secondary)">
            {t("ctaBody")}
          </p>
        </div>
        <HomeSectionLink
          className="button-primary w-full lg:w-auto"
          href={{ pathname: "/", hash: homeSectionIds.contact }}
        >
          {t("ctaLabel")}
        </HomeSectionLink>
      </div>
    </PageSection>
  );
}
