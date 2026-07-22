import { describe, expect, it } from "vitest";
import robots from "@/app/robots";

describe("robots", () => {
  const result = robots();

  it("returns an array of rules", () => {
    expect(Array.isArray(result.rules)).toBe(true);
  });

  it("allows safe AI search agents on all paths", () => {
    const safeRule = result.rules.find(
      (rule) =>
        Array.isArray(rule.userAgent) &&
        rule.userAgent.includes("PerplexityBot"),
    );

    expect(safeRule).toBeDefined();
    expect(safeRule!.allow).toBe("/");
  });

  it("includes a sitemap URL", () => {
    expect(result.sitemap).toBe("https://gabrielrzamora.com/sitemap.xml");
  });

  it("blocks AI training crawlers from all paths", () => {
    const aiRule = result.rules.find(
      (rule) =>
        Array.isArray(rule.userAgent) && rule.userAgent.includes("GPTBot"),
    );

    expect(aiRule).toBeDefined();
    expect(aiRule!.disallow).toBe("/");
  });

  it("allows general crawlers on all paths", () => {
    const generalRule = result.rules.find((rule) => rule.userAgent === "*");

    expect(generalRule).toBeDefined();
    expect(generalRule!.allow).toBe("/");
  });

  it("disallows /api/ for general crawlers", () => {
    const generalRule = result.rules.find((rule) => rule.userAgent === "*");

    expect(generalRule!.disallow).toBe("/api/");
  });
});
