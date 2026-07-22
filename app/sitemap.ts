import { blogPostSlugs } from "@/app/_lib/blog-slugs";
import { routing } from "@/i18n/routing";
import type { MetadataRoute } from "next";

const BASE_URL = "https://gabrielrzamora.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/blog"];
  const staticEntries = staticPages.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
  );

  const blogPostEntries = Object.values(blogPostSlugs).flatMap((slugs) =>
    routing.locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/blog/${slugs[locale]}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  );

  return [...staticEntries, ...blogPostEntries];
}
