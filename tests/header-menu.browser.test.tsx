import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { page, userEvent } from "vitest/browser";
import { HeaderMenu } from "@/app/_components/header-menu";
import { homeSectionIds } from "@/app/_lib/home-sections";
import { interact } from "./helpers/browser-interact";
import { cleanup, render } from "./helpers/browser-render";
import { resetTestState } from "./helpers/test-state";

const items = [
  {
    href: { pathname: "/", hash: homeSectionIds.home },
    key: homeSectionIds.home,
    label: "Home",
  },
  { href: "/blog", key: "blog", label: "Blog" },
];

beforeEach(() => {
  document.body.replaceChildren();
  window.location.hash = "";
  resetTestState();
});

afterEach(async () => {
  await cleanup();
});

describe("HeaderMenu", () => {
  it("opens, closes with Escape, and updates accessible state", async () => {
    await render(
      <HeaderMenu
        closeLabel="Close menu"
        items={items}
        openLabel="Open menu"
      />,
    );

    const openButton = page.getByRole("button", { name: "Open menu" });
    await expect.element(openButton).toHaveAttribute("aria-expanded", "false");

    await interact(() => userEvent.click(openButton));

    await expect
      .element(page.getByRole("button", { name: "Close menu" }))
      .toHaveAttribute("aria-expanded", "true");
    await expect
      .element(page.getByRole("link", { name: "Blog" }))
      .toBeVisible();

    await interact(() => userEvent.keyboard("{Escape}"));

    await expect
      .element(page.getByRole("button", { name: "Open menu" }))
      .toHaveAttribute("aria-expanded", "false");
  });

  it("closes after a menu link is activated", async () => {
    await render(
      <HeaderMenu
        closeLabel="Close menu"
        items={items}
        openLabel="Open menu"
      />,
    );

    await interact(() =>
      userEvent.click(page.getByRole("button", { name: "Open menu" })),
    );
    await interact(() =>
      userEvent.click(page.getByRole("link", { name: "Home" })),
    );

    await expect
      .element(page.getByRole("button", { name: "Open menu" }))
      .toHaveAttribute("aria-expanded", "false");
  });
});
