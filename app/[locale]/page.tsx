import { AboutSection } from "../_sections/about-section";
import { BlogPreviewSection } from "../_sections/blog-preview-section";
import { ContactSection } from "../_sections/contact-section";
import { HeroSection } from "../_sections/hero-section";
import { PortfolioSection } from "../_sections/portfolio-section";
import { ServicesSection } from "../_sections/services-section";
import { WhatIDoSection } from "../_sections/what-i-do-section";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type HomeProps = Readonly<{
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <main id="main-content">
      <HeroSection />
      <WhatIDoSection />
      <ServicesSection />
      <PortfolioSection />
      <BlogPreviewSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
