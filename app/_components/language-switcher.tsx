"use client";

import { getLocalizedBlogPath } from "@/app/_lib/blog-slugs";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export function LanguageSwitcher() {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("LanguageSwitcher");

  function getTargetPath(targetLocale: AppLocale) {
    const segments = pathname.split("/");
    const currentLocale = segments[1];
    const isLocalizedPath = routing.locales.includes(currentLocale as AppLocale);
    const currentPath = isLocalizedPath ? pathname : `/${locale}${pathname}`;
    const currentSegments = currentPath.split("/");
    const blogSlug = currentSegments[2] === "blog" ? currentSegments[3] : undefined;

    if (blogSlug) {
      const targetBlogPath = getLocalizedBlogPath(locale, blogSlug, targetLocale);

      if (targetBlogPath) {
        return targetBlogPath;
      }
    }

    currentSegments[1] = targetLocale;
    return currentSegments.join("/") || `/${targetLocale}`;
  }

  function switchLocale(targetLocale: AppLocale) {
    if (targetLocale === locale) {
      return;
    }

    const hash = window.location.hash;
    router.push(`${getTargetPath(targetLocale)}${hash}`);
  }

  return (
    <div
      aria-label={t("label")}
      className="flex items-center rounded-2xl border border-(--theme-border) bg-(--theme-surface-muted) p-1"
      role="group"
    >
      {routing.locales.map((targetLocale) => {
        const isActive = targetLocale === locale;

        return (
          <button
            aria-label={t(`${targetLocale}Label`)}
            aria-pressed={isActive}
            className={`rounded-xl px-2.5 py-1 text-xs font-black uppercase transition ${
              isActive
                ? "bg-(--theme-accent) text-(--theme-accent-ink)"
                : "text-(--theme-text-secondary) hover:bg-(--theme-surface-muted) hover:text-(--theme-text-primary)"
            }`}
            key={targetLocale}
            onClick={() => switchLocale(targetLocale)}
            type="button"
          >
            {t(targetLocale)}
          </button>
        );
      })}
    </div>
  );
}
