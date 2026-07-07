import { Link } from "@/i18n/navigation";
import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";

const components = {
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="mt-10 text-3xl font-black uppercase leading-tight text-(--theme-text-primary)"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      className="mt-8 text-2xl font-black uppercase leading-tight text-(--theme-text-primary)"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p
      className="mt-4 text-base leading-8 text-(--theme-text-secondary)"
      {...props}
    />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul
      className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-(--theme-text-secondary)"
      {...props}
    />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol
      className="mt-4 list-decimal space-y-2 pl-6 text-base leading-7 text-(--theme-text-secondary)"
      {...props}
    />
  ),
  li: (props: ComponentProps<"li">) => <li className="pl-1" {...props} />,
  a: ({ href = "", ...props }: ComponentProps<"a">) => (
    <Link
      className="font-extrabold text-(--theme-text-primary) underline underline-offset-4"
      href={href}
      {...props}
    />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      className="rounded-md border border-(--theme-border) bg-(--theme-background) px-1.5 py-0.5 font-mono text-sm text-(--theme-text-primary)"
      {...props}
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre
      className="mt-6 overflow-x-auto rounded-2xl border border-(--theme-border) bg-(--theme-background) p-4 text-sm leading-6 text-(--theme-text-primary)"
      {...props}
    />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
