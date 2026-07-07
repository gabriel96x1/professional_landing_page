import { beforeEach, describe, expect, it } from "vitest";
import { homeSectionIds } from "@/app/_lib/home-sections";
import { redirectToHomeSection } from "@/app/_lib/section-redirects";
import { resetTestState } from "./helpers/test-state";

beforeEach(() => {
  resetTestState();
});

describe("section redirects", () => {
  it("redirects valid locales to localized home anchors", async () => {
    await expect(
      redirectToHomeSection(
        Promise.resolve({ locale: "en" }),
        homeSectionIds.contact,
      ),
    ).rejects.toThrow("NEXT_REDIRECT:/en#contact");
  });

  it("returns not found for unsupported locale params", async () => {
    await expect(
      redirectToHomeSection(
        Promise.resolve({ locale: "fr" }),
        homeSectionIds.contact,
      ),
    ).rejects.toThrow("NEXT_NOT_FOUND");
  });
});
