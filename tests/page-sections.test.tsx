import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import {
  PageHero,
  PageSection,
  PlaceholderList,
} from "@/app/_components/page-sections";

describe("shared page section primitives", () => {
  it("renders optional hero, section, and list branches", () => {
    const html = renderToStaticMarkup(
      <>
        <PageHero
          aside={<p>Aside content</p>}
          description="Hero description"
          eyebrow="Eyebrow"
          primaryHref="/blog"
          primaryLabel="Read"
          title="Hero title"
        />
        <PageHero
          description="Secondary description"
          eyebrow="Secondary eyebrow"
          title="Secondary title"
        />
        <PageSection
          description="Section description"
          id="section-id"
          title="Section title"
        >
          Body
        </PageSection>
        <PageSection title="No id section">Body</PageSection>
        <PlaceholderList items={["One", "Two"]} />
      </>,
    );

    expect(html).toContain("Aside content");
    expect(html).toContain('href="/blog"');
    expect(html).toContain('aria-labelledby="section-id-title"');
  });
});
