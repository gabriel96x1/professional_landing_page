import { describe, expect, it } from "vitest";
import { homeSectionIds, isHomeSectionId } from "@/app/_lib/home-sections";

describe("home section ids", () => {
  it("recognizes every configured home section id", () => {
    expect(Object.values(homeSectionIds).every(isHomeSectionId)).toBe(true);
  });

  it("rejects unknown section ids", () => {
    expect(isHomeSectionId("pricing")).toBe(false);
  });
});
