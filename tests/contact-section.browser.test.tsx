import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { ContactSection } from "@/app/_sections/contact-section";
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

describe("ContactSection", () => {
  it("renders contact controls with accessible labels", async () => {
    await render(<ContactSection />);

    await expect
      .element(page.getByRole("textbox", { name: "Home.Contact.form.name" }))
      .toBeVisible();
    await expect
      .element(page.getByRole("textbox", { name: "Home.Contact.form.email" }))
      .toHaveAttribute("type", "email");
    await expect
      .element(
        page.getByRole("link", {
          name: /Home.Contact.cards.github.ariaLabel/,
        }),
      )
      .toHaveAttribute("target", "_blank");
  });
});
