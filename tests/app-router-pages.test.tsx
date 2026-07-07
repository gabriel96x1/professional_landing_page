import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, it } from "vitest";
import AboutRedirect from "@/app/[locale]/about/page";
import BlogPage from "@/app/[locale]/blog/page";
import BlogPostPage, {
  dynamicParams as blogDynamicParams,
  generateStaticParams as generateBlogStaticParams,
} from "@/app/[locale]/blog/[slug]/page";
import ContactRedirect from "@/app/[locale]/contact/page";
import LocaleLayout, {
  dynamicParams as layoutDynamicParams,
  generateMetadata,
  generateStaticParams as generateLayoutStaticParams,
} from "@/app/[locale]/layout";
import Home, {
  dynamicParams as homeDynamicParams,
  generateStaticParams as generateHomeStaticParams,
} from "@/app/[locale]/page";
import PortfolioRedirect from "@/app/[locale]/portfolio/page";
import ServicesRedirect from "@/app/[locale]/services/page";
import { resetTestState } from "./helpers/test-state";

beforeEach(() => {
  resetTestState();
});

describe("app router static params", () => {
  it("keeps locale static params closed and dynamic params disabled", () => {
    expect(generateHomeStaticParams()).toEqual([
      { locale: "es" },
      { locale: "en" },
    ]);
    expect(generateLayoutStaticParams()).toEqual([
      { locale: "es" },
      { locale: "en" },
    ]);
    expect(generateBlogStaticParams()).toEqual([
      { locale: "es", slug: "probando-blog-con-mdx" },
      { locale: "en", slug: "testing-the-mdx-blog" },
    ]);
    expect(homeDynamicParams).toBe(false);
    expect(layoutDynamicParams).toBe(false);
    expect(blogDynamicParams).toBe(false);
  });
});

describe("locale layout", () => {
  it("renders localized metadata and shell", async () => {
    await expect(
      generateMetadata({ params: Promise.resolve({ locale: "fr" }) }),
    ).resolves.toEqual({
      description: "Metadata.description",
      title: "Metadata.title",
    });

    const html = renderToStaticMarkup(
      await LocaleLayout({
        children: <main id="main-content">Child page</main>,
        params: Promise.resolve({ locale: "en" }),
      }),
    );

    expect(html).toContain('lang="en"');
    expect(html).toContain("Layout.skipToContent");
    expect(html).toContain("Layout.nav.blog");
    expect(html).toContain("Child page");
  });

  it("rejects unsupported locale params", async () => {
    await expect(
      LocaleLayout({
        children: <main />,
        params: Promise.resolve({ locale: "fr" }),
      }),
    ).rejects.toThrow("NEXT_NOT_FOUND");
  });
});

describe("localized pages", () => {
  it("rejects unsupported locales before rendering page content", async () => {
    await expect(
      Home({ params: Promise.resolve({ locale: "fr" }) }),
    ).rejects.toThrow("NEXT_NOT_FOUND");
    await expect(
      BlogPage({ params: Promise.resolve({ locale: "fr" }) }),
    ).rejects.toThrow("NEXT_NOT_FOUND");
  });

  it("renders the home, blog index, and valid blog article units", async () => {
    const home = await Home({ params: Promise.resolve({ locale: "es" }) });
    expect(home.props.id).toBe("main-content");

    const blogIndexHtml = renderToStaticMarkup(
      await BlogPage({ params: Promise.resolve({ locale: "en" }) }),
    );
    expect(blogIndexHtml).toContain("Testing the MDX blog");
    expect(blogIndexHtml).toContain("/blog/testing-the-mdx-blog");
    expect(blogIndexHtml).toContain("Blog.Index.readArticleLabel");

    const articleHtml = renderToStaticMarkup(
      await BlogPostPage({
        params: Promise.resolve({
          locale: "en",
          slug: "testing-the-mdx-blog",
        }),
      }),
    );
    expect(articleHtml).toContain("English MDX content");
    expect(articleHtml).toContain("Blog.Post.back");
  });

  it("rejects invalid blog article locales and wrong-locale slugs", async () => {
    await expect(
      BlogPostPage({
        params: Promise.resolve({ locale: "fr", slug: "testing-the-mdx-blog" }),
      }),
    ).rejects.toThrow("NEXT_NOT_FOUND");
    await expect(
      BlogPostPage({
        params: Promise.resolve({ locale: "es", slug: "testing-the-mdx-blog" }),
      }),
    ).rejects.toThrow("NEXT_NOT_FOUND");
  });
});

describe("compatibility redirect pages", () => {
  it("maps section pages to their shared redirects", async () => {
    await expect(
      PortfolioRedirect({ params: Promise.resolve({ locale: "es" }) }),
    ).rejects.toThrow("NEXT_REDIRECT:/es#portfolio");
    await expect(
      ServicesRedirect({ params: Promise.resolve({ locale: "en" }) }),
    ).rejects.toThrow("NEXT_REDIRECT:/en#services");
    await expect(
      AboutRedirect({ params: Promise.resolve({ locale: "es" }) }),
    ).rejects.toThrow("NEXT_REDIRECT:/es#about");
    await expect(
      ContactRedirect({ params: Promise.resolve({ locale: "en" }) }),
    ).rejects.toThrow("NEXT_REDIRECT:/en#contact");
  });
});
