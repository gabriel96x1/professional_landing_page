import type { MetadataRoute } from "next";

const SAFE_AI_AGENTS = [
  "PerplexityBot",
  "YouBot",
  "BraveBot",
  "DuckAssistBot",
  "Claude-SearchBot",
  "ChatGPT-User",
  "Googlebot",
];

const AI_TRAINING_AGENTS = [
  "GPTBot",
  "CCBot",
  "Google-Extended",
  "anthropic-ai",
  "ClaudeBot",
  "Amazonbot",
  "meta-externalagent",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: SAFE_AI_AGENTS,
        allow: "/",
      },
      {
        userAgent: AI_TRAINING_AGENTS,
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: "https://gabrielrzamora.com/sitemap.xml",
  };
}
