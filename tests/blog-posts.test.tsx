import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import {
  getAllBlogStaticParams,
  getBlogPosts,
  getLocalizedPost,
  getPostByLocaleSlug,
} from "@/app/_lib/blog-posts";

describe("blog post helpers", () => {
  it("loads localized metadata sorted newest-first without exposing content", async () => {
    const posts = await getBlogPosts("en");

    expect(posts).toEqual([
      {
        category: "Notes",
        excerpt: "English excerpt",
        id: "mdx-blog-demo",
        publishedAt: "2026-07-06",
        readingTime: "3 min",
        slug: "testing-the-mdx-blog",
        title: "Testing the MDX blog",
      },
    ]);
    expect("Content" in posts[0]).toBe(false);
  });

  it("resolves content only for a matching locale and slug", async () => {
    const post = await getPostByLocaleSlug("es", "probando-blog-con-mdx");

    expect(post?.title).toBe("Probando el blog con MDX");
    if (!post) {
      throw new Error("Expected Spanish post to load");
    }

    const Content = post.Content;

    expect(renderToStaticMarkup(<Content />)).toContain("Spanish MDX content");
    await expect(
      getPostByLocaleSlug("es", "testing-the-mdx-blog"),
    ).resolves.toBeUndefined();
  });

  it("generates static params and localized post lookups from stable ids", async () => {
    expect(getAllBlogStaticParams()).toEqual([
      { locale: "es", slug: "probando-blog-con-mdx" },
      { locale: "en", slug: "testing-the-mdx-blog" },
    ]);

    await expect(
      getLocalizedPost("en", "mdx-blog-demo"),
    ).resolves.toMatchObject({
      slug: "testing-the-mdx-blog",
      title: "Testing the MDX blog",
    });
    await expect(
      getLocalizedPost("en", "missing-post" as never),
    ).resolves.toBeUndefined();
  });
});
