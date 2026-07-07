"use client";

import { getLocalizedBlogPath } from "@/app/_lib/blog-slugs";
import { isHomeSectionId } from "@/app/_lib/home-sections";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

function stripHash(path: string) {
  return path.split("#")[0] || "/";
}

function getNormalizedHash() {
  const hashTargets = window.location.hash
    .split("#")
    .map((target) => target.trim())
    .filter(Boolean);
  const validTarget = hashTargets.findLast(isHomeSectionId);

  return validTarget ? `#${validTarget}` : "";
}

export function LanguageSwitcher() {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("LanguageSwitcher");

  function getTargetPath(targetLocale: AppLocale) {
    const currentPath = stripHash(pathname);
    const currentSegments = currentPath.split("/");
    const blogSlug = currentSegments[1] === "blog" ? currentSegments[2] : undefined;

    if (blogSlug) {
      const targetBlogPath = getLocalizedBlogPath(locale, blogSlug, targetLocale);

      if (targetBlogPath) {
        return stripHash(targetBlogPath.replace(`/${targetLocale}`, ""));
      }
    }

    return currentPath;
  }

  function switchLocale(targetLocale: AppLocale) {
    if (targetLocale === locale) {
      return;
    }

    router.push(`${getTargetPath(targetLocale)}${getNormalizedHash()}`, {
      locale: targetLocale,
    });
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
