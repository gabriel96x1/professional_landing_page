import { LanguageSwitcher } from "@/app/_components/language-switcher";
import { ThemeToggle } from "@/app/_components/theme-toggle";
import "@/app/globals.css";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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

  const t = await getTranslations({ locale, namespace: "Layout" });
  const navigation = [
    { href: "/#inicio", label: t("nav.home") },
    { href: "/#portfolio", label: t("nav.portfolio") },
    { href: "/#services", label: t("nav.services") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/#about", label: t("nav.about") },
    { href: "/#contact", label: t("nav.contact") },
  ];

  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      data-theme="light"
      lang={locale}
    >
      <body className="min-h-full bg-(--theme-background) text-(--theme-text-primary)">
        <NextIntlClientProvider>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-20 border-b border-(--theme-border) bg-(--theme-background)/95 backdrop-blur">
              <nav
                aria-label={t("ariaLabel")}
                className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8"
              >
                <Link
                  className="text-sm font-semibold uppercase text-(--theme-text-primary)"
                  href="/#inicio"
                >
                  {t("brand")}
                </Link>
                <div className="flex flex-wrap items-center gap-2 text-sm text-(--theme-text-secondary)">
                  {navigation.map((item) => (
                    <Link
                      className="rounded-full px-3 py-2 transition hover:bg-(--theme-surface-muted) hover:text-(--theme-text-primary)"
                      href={item.href}
                      key={item.href}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
              </nav>
            </header>
            {children}
            <footer className="border-t border-(--theme-border) bg-(--theme-background)">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-(--theme-text-secondary) sm:flex-row sm:items-center sm:justify-between lg:px-8">
                <p>{t("footerText")}</p>
                <Link
                  className="font-medium text-(--theme-text-primary) underline-offset-4 hover:underline"
                  href="/#contact"
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
