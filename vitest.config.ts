import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  optimizeDeps: {
    include: [
      "next-intl/middleware",
      "next-intl/navigation",
      "next-intl/server",
      "next/font/google",
      "next/navigation",
    ],
  },
  resolve: {
    alias: {
      "@": new URL(".", import.meta.url).pathname,
    },
  },
  test: {
    projects: [
      {
        extends: true,
        test: {
          environment: "node",
          exclude: ["tests/**/*.browser.test.{ts,tsx}"],
          include: ["tests/**/*.test.{ts,tsx}"],
          name: "node",
          setupFiles: ["./tests/setup/test-mocks.tsx"],
        },
      },
      {
        extends: true,
        test: {
          browser: {
            enabled: true,
            headless: true,
            instances: [{ browser: "chromium" }],
            provider: playwright(),
            screenshotFailures: false,
          },
          include: ["tests/**/*.browser.test.{ts,tsx}"],
          name: "browser",
          setupFiles: ["./tests/setup/test-mocks.tsx"],
        },
      },
    ],
    coverage: {
      include: ["app/**/*.{ts,tsx}", "i18n/**/*.ts", "proxy.ts"],
      exclude: [
        "**/*.test.{ts,tsx}",
        "**/*.spec.{ts,tsx}",
        "**/node_modules/**",
        "app/**/*.css",
        "content/**/*.mdx",
        "next.config.ts",
      ],
      provider: "v8",
      reporter: ["text", "lcov"],
      thresholds: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90,
      },
    },
  },
});
