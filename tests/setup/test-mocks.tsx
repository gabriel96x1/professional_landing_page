import type { ComponentProps, ReactNode } from "react";
import "@vitest/browser/matchers";
import { vi } from "vitest";

type Locale = "es" | "en";

type LinkHref = string | { pathname: string; hash?: string };

const serviceKeys = [
  "audit",
  "automation",
  "mobile",
  "web",
  "cloud",
  "pipelines",
] as const;

const rawMessages: Record<string, unknown> = {
  "Blog.Index.categories": ["Notes", "Guides"],
  "Home.About.values": ["Clarity", "Maintainability", "Accessibility"],
  "Home.Portfolio.caseStudyParts": ["Problem", "Approach", "Result"],
  "Home.Portfolio.projects": [
    {
      problem: "Project problem",
      result: "Project result",
      solution: "Project solution",
      technologies: "TypeScript, Next.js",
      title: "Project Alpha",
    },
  ],
  "Home.Services.items": serviceKeys.map((key) => ({
    body: `${key} body`,
    cta: `${key} cta`,
    eyebrow: `${key} eyebrow`,
    includes: [`${key} include one`, `${key} include two`],
    key,
    outcome: `${key} outcome`,
    price: `${key} price`,
    title: `${key} title`,
  })),
};

const navigationState = {
  pathname: "/",
  push: vi.fn(),
};

const intlState = {
  locale: "es" as Locale,
  serverLocale: "es" as Locale,
};

const nextNavigationState = {
  notFound: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
  redirect: vi.fn((href: string) => {
    throw new Error(`NEXT_REDIRECT:${href}`);
  }),
};

const middlewareState = {
  createMiddleware: vi.fn(() => vi.fn(() => new Response(null))),
};

Object.assign(globalThis, {
  IS_REACT_ACT_ENVIRONMENT: true,
  __testIntl: intlState,
  __testMiddleware: middlewareState,
  __testNavigation: navigationState,
  __testNextNavigation: nextNavigationState,
});

function interpolate(template: string, values?: Record<string, unknown>) {
  return Object.entries(values ?? {}).reduce(
    (message, [key, value]) => message.replace(`{${key}}`, String(value)),
    template,
  );
}

function resolveTranslation(
  namespace: string | undefined,
  key: string,
  values?: Record<string, unknown>,
) {
  const fullKey = namespace ? `${namespace}.${key}` : key;

  const messages: Record<string, string> = {
    "Home.Contact.cards.contact.ariaLabel": "Open WhatsApp contact",
    "Home.Contact.cards.contact.line2": "(+52) 335 116 9359",
    "Home.Contact.cards.contact.whatsappHref": "https://wa.me/523351169359",
    "Home.Contact.externalNewTab": "(opens in a new tab)",
    "LanguageSwitcher.en": "EN",
    "LanguageSwitcher.enLabel": "Switch to English",
    "LanguageSwitcher.es": "ES",
    "LanguageSwitcher.esLabel": "Switch to Spanish",
    "LanguageSwitcher.label": "Language",
    "Theme.switchToDark": "Switch to dark theme",
    "Theme.switchToLight": "Switch to light theme",
  };

  return interpolate(messages[fullKey] ?? fullKey, values);
}

function createTranslator(namespace?: string) {
  const translate = (key: string, values?: Record<string, unknown>) =>
    resolveTranslation(namespace, key, values);

  translate.raw = (key: string) => rawMessages[`${namespace}.${key}`] ?? [];

  return translate;
}

function resolveHref(href: LinkHref) {
  if (typeof href === "string") {
    return href;
  }

  return `${href.pathname}${href.hash ? `#${href.hash}` : ""}`;
}

function Link({
  children,
  href,
  onClick,
  ...props
}: Omit<ComponentProps<"a">, "href"> & {
  children?: ReactNode;
  href: LinkHref;
}) {
  return (
    <a
      href={resolveHref(href)}
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          event.preventDefault();
        }
      }}
      {...props}
    >
      {children}
    </a>
  );
}

vi.mock("next/font/google", () => ({
  Archivo: () => ({ variable: "font-archivo" }),
}));

vi.mock("next/navigation", () => nextNavigationState);

vi.mock("next-intl", () => ({
  NextIntlClientProvider: ({ children }: { children: ReactNode }) => (
    <>{children}</>
  ),
  hasLocale: (locales: readonly string[], locale: unknown) =>
    typeof locale === "string" && locales.includes(locale),
  useLocale: () => intlState.locale,
  useTranslations: (namespace?: string) => createTranslator(namespace),
}));

vi.mock("next-intl/server", () => ({
  getLocale: vi.fn(async () => intlState.serverLocale),
  getRequestConfig: vi.fn((callback) => callback),
  getTranslations: vi.fn(async (options?: string | { namespace?: string }) =>
    createTranslator(
      typeof options === "string" ? options : options?.namespace,
    ),
  ),
  setRequestLocale: vi.fn(),
}));

vi.mock("next-intl/navigation", () => ({
  createNavigation: vi.fn(() => ({
    Link,
    getPathname: vi.fn(),
    redirect: vi.fn(),
    usePathname: () => navigationState.pathname,
    useRouter: () => ({
      push: navigationState.push,
    }),
  })),
}));

vi.mock("next-intl/middleware", () => ({
  default: middlewareState.createMiddleware,
}));

vi.mock("@/content/blog/mdx-blog-demo/en.mdx", () => ({
  default: function EnglishPostContent() {
    return <p>English MDX content</p>;
  },
  metadata: {
    category: "Notes",
    excerpt: "English excerpt",
    id: "mdx-blog-demo",
    publishedAt: "2026-07-06",
    readingTime: "3 min",
    slug: "testing-the-mdx-blog",
    title: "Testing the MDX blog",
  },
}));

vi.mock("@/content/blog/mdx-blog-demo/es.mdx", () => ({
  default: function SpanishPostContent() {
    return <p>Spanish MDX content</p>;
  },
  metadata: {
    category: "Notas",
    excerpt: "Spanish excerpt",
    id: "mdx-blog-demo",
    publishedAt: "2026-07-06",
    readingTime: "3 min",
    slug: "probando-blog-con-mdx",
    title: "Probando el blog con MDX",
  },
}));
