import { describe, expect, it } from "vitest";
import { getLocalizedBlogPath, blogPostSlugs } from "@/app/_lib/blog-slugs";
import { homeSectionIds, isHomeSectionId } from "@/app/_lib/home-sections";
import { isAppLocale, routing } from "@/i18n/routing";

describe("localized blog slugs", () => {
  it("maps known posts to the equivalent slug in another locale", () => {
    expect(
      getLocalizedBlogPath("es", blogPostSlugs["mdx-blog-demo"].es, "en"),
    ).toBe("/en/blog/testing-the-mdx-blog");

    expect(
      getLocalizedBlogPath("en", blogPostSlugs["mdx-blog-demo"].en, "es"),
    ).toBe("/es/blog/probando-blog-con-mdx");
  });

  it("returns undefined when a slug does not belong to the current locale", () => {
    expect(
      getLocalizedBlogPath("es", "testing-the-mdx-blog", "en"),
    ).toBeUndefined();
  });
});

describe("home section ids", () => {
  it("recognizes every configured home section id", () => {
    expect(Object.values(homeSectionIds).every(isHomeSectionId)).toBe(true);
  });

  it("rejects unknown section ids", () => {
    expect(isHomeSectionId("pricing")).toBe(false);
  });
});

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
