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

  it("links the icon-only WhatsApp contact without exposing the phone number", async () => {
    await render(<ContactSection />);

    const whatsappLink = page.getByRole("link", {
      name: "Open WhatsApp contact (opens in a new tab)",
    });

    await expect
      .element(whatsappLink)
      .toHaveAttribute("href", "https://wa.me/523351169359");
    await expect.element(whatsappLink).toHaveAttribute("target", "_blank");
    await expect
      .element(page.getByText(/\(\+52\) 335 116 9359/))
      .not.toBeInTheDocument();
  });

  it("places WhatsApp beside the LinkedIn and GitHub icon links", async () => {
    await render(<ContactSection />);

    const whatsappLink = document.querySelector(
      'a[href="https://wa.me/523351169359"]',
    );
    const linkedinLink = document.querySelector(
      'a[href="Home.Contact.cards.linkedin.href"]',
    );
    const githubLink = document.querySelector(
      'a[href="Home.Contact.cards.github.href"]',
    );

    expect(whatsappLink?.parentElement).toBe(linkedinLink?.parentElement);
    expect(whatsappLink?.parentElement).toBe(githubLink?.parentElement);
  });
});
