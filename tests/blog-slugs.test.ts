import { describe, expect, it } from "vitest";
import { getLocalizedBlogPath, blogPostSlugs } from "@/app/_lib/blog-slugs";

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
