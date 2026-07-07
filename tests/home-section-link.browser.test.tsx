import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { page, userEvent } from "vitest/browser";
import { HomeSectionLink } from "@/app/_components/home-section-link";
import { homeSectionIds } from "@/app/_lib/home-sections";
import { interact } from "./helpers/browser-interact";
import { cleanup, render } from "./helpers/browser-render";
import { resetTestState, testState } from "./helpers/test-state";

beforeEach(() => {
  document.body.replaceChildren();
  window.location.hash = "";
  resetTestState();
});

afterEach(async () => {
  await cleanup();
});

describe("HomeSectionLink", () => {
  it("re-scrolls the current same-page anchor instead of navigating", async () => {
    const { navigation } = testState();
    const section = document.createElement("section");
    const scrollIntoView = vi.fn();

    navigation.pathname = "/";
    section.id = homeSectionIds.portfolio;
    section.scrollIntoView = scrollIntoView;
    document.body.append(section);
    window.location.hash = `#${homeSectionIds.portfolio}`;

    await render(
      <HomeSectionLink href={{ pathname: "/", hash: homeSectionIds.portfolio }}>
        Portfolio
      </HomeSectionLink>,
    );

    await interact(() =>
      userEvent.click(page.getByRole("link", { name: "Portfolio" })),
    );

    expect(scrollIntoView).toHaveBeenCalledWith({ block: "start" });
  });

  it("ignores modified and non-primary clicks", async () => {
    const { navigation } = testState();
    const section = document.createElement("section");
    const scrollIntoView = vi.fn();

    navigation.pathname = "/";
    section.id = homeSectionIds.contact;
    section.scrollIntoView = scrollIntoView;
    document.body.append(section);
    window.location.hash = `#${homeSectionIds.contact}`;

    await render(
      <HomeSectionLink href={{ pathname: "/", hash: homeSectionIds.contact }}>
        Contact
      </HomeSectionLink>,
    );

    const link = await page
      .getByRole("link", { name: "Contact" })
      .findElement();

    await interact(() => {
      link.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true,
          button: 1,
        }),
      );
    });

    expect(scrollIntoView).not.toHaveBeenCalled();
  });
});
