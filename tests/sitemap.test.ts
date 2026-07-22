import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";

describe("sitemap", () => {
  const result = sitemap();

  it("returns an array of URLs", () => {
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it("includes localized home pages", () => {
    const urls = result.map((entry) => entry.url);

    expect(urls).toContain("https://gabrielrzamora.com/es");
    expect(urls).toContain("https://gabrielrzamora.com/en");
  });

  it("includes localized blog index pages", () => {
    const urls = result.map((entry) => entry.url);

    expect(urls).toContain("https://gabrielrzamora.com/es/blog");
    expect(urls).toContain("https://gabrielrzamora.com/en/blog");
  });

  it("includes localized blog post pages", () => {
    const urls = result.map((entry) => entry.url);

    expect(urls).toContain(
      "https://gabrielrzamora.com/es/blog/probando-blog-con-mdx",
    );
    expect(urls).toContain(
      "https://gabrielrzamora.com/en/blog/testing-the-mdx-blog",
    );
  });

  it("does not include redirect routes", () => {
    const urls = result.map((entry) => entry.url);

    expect(urls).not.toContain("https://gabrielrzamora.com/es/about");
    expect(urls).not.toContain("https://gabrielrzamora.com/en/about");
    expect(urls).not.toContain("https://gabrielrzamora.com/es/contact");
    expect(urls).not.toContain("https://gabrielrzamora.com/en/contact");
  });

  it("sets lastModified on every entry", () => {
    for (const entry of result) {
      expect(entry.lastModified).toBeDefined();
    }
  });
});
