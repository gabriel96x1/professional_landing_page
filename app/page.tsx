import { CtaBand } from "./_components/page-sections";
import { AboutSection } from "./_sections/about-section";
import { BlogPreviewSection } from "./_sections/blog-preview-section";
import { ContactSection } from "./_sections/contact-section";
import { HeroSection } from "./_sections/hero-section";
import { PortfolioSection } from "./_sections/portfolio-section";
import { ServicesSection } from "./_sections/services-section";
import { WhatIDoSection } from "./_sections/what-i-do-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhatIDoSection />
      <ServicesSection />
      <PortfolioSection />
      <BlogPreviewSection />
      <AboutSection />
      <ContactSection />
      <CtaBand />
    </main>
  );
}
