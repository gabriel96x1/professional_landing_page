import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "always",
  alternateLinks: false,
});

export type AppLocale = (typeof routing.locales)[number];

export function isAppLocale(locale: string): locale is AppLocale {
  return routing.locales.includes(locale as AppLocale);
}
