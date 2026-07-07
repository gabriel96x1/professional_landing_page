import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { page, userEvent } from "vitest/browser";
import { ThemeToggle } from "@/app/_components/theme-toggle";
import { interact } from "./helpers/browser-interact";
import { cleanup, render } from "./helpers/browser-render";
import { resetTestState } from "./helpers/test-state";

beforeEach(() => {
  document.body.replaceChildren();
  document.documentElement.dataset.theme = "";
  document.documentElement.style.colorScheme = "";
  window.localStorage.clear();
  window.location.hash = "";
  resetTestState();
});

afterEach(async () => {
  await cleanup();
});

describe("ThemeToggle", () => {
  it("applies the default dark theme and toggles to light", async () => {
    await render(<ThemeToggle />);

    const button = page.getByRole("button", {
      name: "Switch to light theme",
    });

    await expect.element(button).toHaveAttribute("aria-pressed", "true");
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(document.documentElement.style.colorScheme).toBe("dark");

    await interact(() => userEvent.click(button));

    await expect
      .element(
        page.getByRole("button", {
          name: "Switch to dark theme",
        }),
      )
      .toHaveAttribute("aria-pressed", "false");
    expect(window.localStorage.getItem("site-theme")).toBe("light");
    expect(document.documentElement.dataset.theme).toBe("light");
  });

  it("honors a stored light preference before toggling", async () => {
    window.localStorage.setItem("site-theme", "light");

    await render(<ThemeToggle />);

    await expect
      .element(page.getByRole("button", { name: "Switch to dark theme" }))
      .toHaveAttribute("aria-pressed", "false");
  });
});
