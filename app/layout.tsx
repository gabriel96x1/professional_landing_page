import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { ThemeToggle } from "./_components/theme-toggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional Landing Page",
  description:
    "One-page professional portfolio with freelance services, project highlights, about, contact, and a separate blog.",
};

const navigation = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#portfolio", label: "Portafolio" },
  { href: "/#services", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/#about", label: "Sobre mi" },
  { href: "/#contact", label: "Contacto" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-(--theme-background) text-(--theme-text-primary)">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-20 border-b border-(--theme-border) bg-(--theme-background)/95 backdrop-blur">
            <nav
              className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8"
              aria-label="Navegacion principal"
            >
              <Link
                href="/#inicio"
                className="text-sm font-semibold uppercase text-(--theme-text-primary)"
              >
                Tu Nombre
              </Link>
              <div className="flex flex-wrap items-center gap-2 text-sm text-(--theme-text-secondary)">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-3 py-2 transition hover:bg-(--theme-surface-muted) hover:text-(--theme-text-primary)"
                  >
                    {item.label}
                  </Link>
                ))}
                <ThemeToggle />
              </div>
            </nav>
          </header>
          {children}
          <footer className="border-t border-(--theme-border) bg-(--theme-background)">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-(--theme-text-secondary) sm:flex-row sm:items-center sm:justify-between lg:px-8">
              <p>Tu Nombre - Portafolio profesional</p>
              <Link
                href="/#contact"
                className="font-medium text-(--theme-text-primary) underline-offset-4 hover:underline"
              >
                Hablemos de tu proyecto
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
