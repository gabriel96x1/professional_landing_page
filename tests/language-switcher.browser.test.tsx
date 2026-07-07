import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { page, userEvent } from "vitest/browser";
import { LanguageSwitcher } from "@/app/_components/language-switcher";
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

describe("LanguageSwitcher", () => {
  it("switches a localized blog slug and preserves the last valid hash", async () => {
    const { intl, navigation } = testState();

    intl.locale = "es";
    navigation.pathname = "/blog/probando-blog-con-mdx";
    window.location.hash = `#unknown#${homeSectionIds.contact}`;

    await render(<LanguageSwitcher />);

    await expect
      .element(page.getByRole("button", { name: "Switch to Spanish" }))
      .toHaveAttribute("aria-pressed", "true");

    await interact(() =>
      userEvent.click(page.getByRole("button", { name: "Switch to English" })),
    );

    expect(navigation.push).toHaveBeenCalledWith(
      `/blog/testing-the-mdx-blog#${homeSectionIds.contact}`,
      { locale: "en" },
    );
  });

  it("drops invalid hashes and does nothing for the active locale", async () => {
    const { intl, navigation } = testState();

    intl.locale = "es";
    navigation.pathname = "/";
    window.location.hash = "#unknown";

    await render(<LanguageSwitcher />);

    await interact(() =>
      userEvent.click(page.getByRole("button", { name: "Switch to Spanish" })),
    );
    expect(navigation.push).not.toHaveBeenCalled();

    await interact(() =>
      userEvent.click(page.getByRole("button", { name: "Switch to English" })),
    );
    expect(navigation.push).toHaveBeenCalledWith("/", { locale: "en" });
  });
});
