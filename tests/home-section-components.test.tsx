import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { homeSectionIds } from "@/app/_lib/home-sections";
import { AboutSection } from "@/app/_sections/about-section";
import { BlogPreviewSection } from "@/app/_sections/blog-preview-section";
import { ContactSection } from "@/app/_sections/contact-section";
import { HeroSection } from "@/app/_sections/hero-section";
import { PortfolioSection } from "@/app/_sections/portfolio-section";
import { ServicesSection } from "@/app/_sections/services-section";
import { WhatIDoSection } from "@/app/_sections/what-i-do-section";

describe("home section components", () => {
  it("renders localized home sections, contact labels, and service cards", async () => {
    const html = renderToStaticMarkup(
      <>
        <HeroSection />
        <WhatIDoSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        {await BlogPreviewSection()}
        <ContactSection />
      </>,
    );

    expect(html).toContain(`id="${homeSectionIds.home}"`);
    expect(html).toContain(`id="${homeSectionIds.services}"`);
    expect(html).toContain("audit title");
    expect(html).toContain("Probando el blog con MDX");
    expect(html).toContain("Home.Contact.form.name");
    expect(html).toContain("Home.Contact.cards.github.ariaLabel");
  });
});
