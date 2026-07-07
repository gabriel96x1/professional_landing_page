import { describe, expect, it } from "vitest";
import { isAppLocale, routing } from "@/i18n/routing";

describe("locale routing", () => {
  it("uses always-prefixed Spanish and English routes", () => {
    expect(routing.defaultLocale).toBe("es");
    expect(routing.locales).toEqual(["es", "en"]);
    expect(routing.localePrefix).toBe("always");
  });

  it("narrows supported app locales", () => {
    expect(isAppLocale("es")).toBe(true);
    expect(isAppLocale("en")).toBe(true);
    expect(isAppLocale("fr")).toBe(false);
  });
});
