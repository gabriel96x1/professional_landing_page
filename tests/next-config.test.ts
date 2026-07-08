import { describe, expect, it } from "vitest";

describe("Next.js security headers", () => {
  it("does not enforce Trusted Types in production CSP", async () => {
    const config = (await import("@/next.config")).default;
    const headers = await config.headers?.();
    const csp = headers
      ?.flatMap((entry) => entry.headers)
      .find((header) => header.key === "Content-Security-Policy")?.value;

    expect(csp).toBeDefined();
    expect(csp).not.toContain("require-trusted-types-for");
    expect(csp).not.toContain("trusted-types");
  });
});
