import { beforeEach, describe, expect, it } from "vitest";
import requestConfig from "@/i18n/request";
import { routing } from "@/i18n/routing";
import { resetTestState, testState } from "./helpers/test-state";

beforeEach(() => {
  resetTestState();
});

describe("request locale config", () => {
  it("falls back to the default locale for unsupported locales", async () => {
    await expect(
      requestConfig({ requestLocale: Promise.resolve("en") } as never),
    ).resolves.toMatchObject({ locale: "en" });

    await expect(
      requestConfig({ requestLocale: Promise.resolve("fr") } as never),
    ).resolves.toMatchObject({ locale: routing.defaultLocale });
  });
});

describe("next-intl proxy adapter", () => {
  it("creates the proxy with the configured matcher", async () => {
    const { middleware } = testState();
    const proxyModule = await import("@/proxy");

    expect(middleware.createMiddleware).toHaveBeenCalledWith(routing);
    expect(proxyModule.config).toEqual({
      matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
    });
    expect(typeof proxyModule.default).toBe("function");
  });
});
