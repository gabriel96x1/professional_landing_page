import { HeaderMenu } from "@/app/_components/header-menu";
import { LanguageSwitcher } from "@/app/_components/language-switcher";
import { ThemeToggle } from "@/app/_components/theme-toggle";
import { homeSectionIds } from "@/app/_lib/home-sections";
import "@/app/globals.css";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;
  const t = await getTranslations({ locale: safeLocale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Layout" });
  const brand = t("brand");
  const brandMark = brand
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  const navigation = [
    {
      href: { pathname: "/", hash: homeSectionIds.home },
      key: homeSectionIds.home,
      label: t("nav.home"),
    },
    {
      href: { pathname: "/", hash: homeSectionIds.portfolio },
      key: homeSectionIds.portfolio,
      label: t("nav.portfolio"),
    },
    {
      href: { pathname: "/", hash: homeSectionIds.services },
      key: homeSectionIds.services,
      label: t("nav.services"),
    },
    { href: "/blog", key: "blog", label: t("nav.blog") },
    {
      href: { pathname: "/", hash: homeSectionIds.about },
      key: homeSectionIds.about,
      label: t("nav.about"),
    },
    {
      href: { pathname: "/", hash: homeSectionIds.contact },
      key: homeSectionIds.contact,
      label: t("nav.contact"),
    },
  ];

  return (
    <html
      className={`${archivo.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      data-theme="dark"
      lang={locale}
    >
      <body className="min-h-full bg-(--theme-background) text-(--theme-text-primary)">
        <NextIntlClientProvider>
          <a className="button-primary skip-link" href="#main-content">
            {t("skipToContent")}
          </a>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-20 border-b border-(--theme-border) bg-(--theme-background)/80 backdrop-blur-xl">
              <nav
                aria-label={t("ariaLabel")}
                className="mx-auto flex min-h-20 w-full max-w-6xl flex-wrap items-center gap-2 px-4 py-4 lg:px-8"
              >
                <Link
                  aria-label={brand}
                  className="mr-auto inline-flex min-w-0 items-center gap-3 text-sm font-black uppercase text-(--theme-text-primary)"
                  href={{ pathname: "/", hash: homeSectionIds.home }}
                >
                  <span
                    aria-hidden="true"
                    className="grid size-12 place-items-center rounded-2xl bg-(--theme-accent) text-base font-black text-(--theme-accent-ink) shadow-[0_7px_0_var(--theme-shadow)]"
                  >
                    {brandMark}
                  </span>
                  <span className="sr-only">{brand}</span>
                  <span aria-hidden="true" className="hidden md:block">
                    {brand}
                  </span>
                </Link>
                <div className="hidden items-center text-sm font-bold text-(--theme-text-secondary) lg:flex">
                  {navigation.map((item) => (
                    <Link
                      className="rounded-full border border-transparent px-3.5 py-2.5 transition hover:border-(--theme-border-strong) hover:bg-(--theme-surface-muted) hover:text-(--theme-text-primary)"
                      href={item.href}
                      key={item.key}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
                <HeaderMenu
                  closeLabel={t("menu.close")}
                  items={navigation}
                  openLabel={t("menu.open")}
                />
              </nav>
            </header>
            {children}
            <footer className="border-t border-(--theme-border) bg-(--theme-background)">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-9 text-sm text-(--theme-text-secondary) sm:flex-row sm:items-center sm:justify-between lg:px-8">
                <p>{t("footerText")}</p>
                <Link
                  className="font-extrabold text-(--theme-text-primary) underline-offset-4 hover:underline"
                  href={{ pathname: "/", hash: homeSectionIds.contact }}
                >
                  {t("footerCta")}
                </Link>
              </div>
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
