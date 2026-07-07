import { vi } from "vitest";

type TestNavigation = {
  pathname: string;
  push: ReturnType<typeof vi.fn>;
};

type TestIntl = {
  locale: "es" | "en";
  serverLocale: "es" | "en";
};

type TestNextNavigation = {
  notFound: ReturnType<typeof vi.fn>;
  redirect: ReturnType<typeof vi.fn>;
};

type TestMiddleware = {
  createMiddleware: ReturnType<typeof vi.fn>;
};

export function testState() {
  return {
    intl: (globalThis as typeof globalThis & { __testIntl: TestIntl })
      .__testIntl,
    middleware: (
      globalThis as typeof globalThis & { __testMiddleware: TestMiddleware }
    ).__testMiddleware,
    navigation: (
      globalThis as typeof globalThis & { __testNavigation: TestNavigation }
    ).__testNavigation,
    nextNavigation: (
      globalThis as typeof globalThis & {
        __testNextNavigation: TestNextNavigation;
      }
    ).__testNextNavigation,
  };
}

export function resetTestState() {
  const { intl, middleware, navigation, nextNavigation } = testState();

  intl.locale = "es";
  intl.serverLocale = "es";
  middleware.createMiddleware.mockClear();
  navigation.pathname = "/";
  navigation.push.mockClear();
  nextNavigation.notFound.mockClear();
  nextNavigation.redirect.mockClear();
}
