import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { PageHero, PageSection } from "@/app/_components/page-sections";
import { cleanup, render } from "./helpers/browser-render";
import { resetTestState } from "./helpers/test-state";

beforeEach(() => {
  document.body.replaceChildren();
  window.location.hash = "";
  resetTestState();
});

afterEach(async () => {
  await cleanup();
});

describe("shared page primitives", () => {
  it("renders hero and section content with accessible headings and links", async () => {
    await render(
      <>
        <PageHero
          description="Description"
          eyebrow="Eyebrow"
          primaryHref="/blog"
          primaryLabel="Read blog"
          title="Title"
        />
        <PageSection
          description="Section description"
          id="browser-section"
          title="Section title"
        >
          <p>Section body</p>
        </PageSection>
      </>,
    );

    await expect
      .element(page.getByRole("heading", { name: /^Title$/ }))
      .toBeVisible();
    await expect
      .element(page.getByRole("link", { name: "Read blog" }))
      .toHaveAttribute("href", "/blog");
    await expect
      .element(page.getByRole("heading", { name: "Section title" }))
      .toBeVisible();
  });
});
