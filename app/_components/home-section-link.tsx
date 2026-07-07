"use client";

import { isHomeSectionId } from "@/app/_lib/home-sections";
import { Link, usePathname } from "@/i18n/navigation";
import type { ComponentProps, MouseEvent } from "react";

type HomeSectionLinkProps = ComponentProps<typeof Link>;

function getHomeSectionHash(href: HomeSectionLinkProps["href"]) {
  if (
    typeof href === "object" &&
    href !== null &&
    href.pathname === "/" &&
    typeof href.hash === "string" &&
    isHomeSectionId(href.hash)
  ) {
    return href.hash;
  }

  return undefined;
}

function shouldIgnoreClick(event: MouseEvent<HTMLAnchorElement>) {
  return (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  );
}

export function HomeSectionLink({
  href,
  onClick,
  ...props
}: HomeSectionLinkProps) {
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (shouldIgnoreClick(event)) {
      return;
    }

    const sectionId = getHomeSectionHash(href);

    if (
      !sectionId ||
      pathname !== "/" ||
      window.location.hash !== `#${sectionId}`
    ) {
      return;
    }

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    event.preventDefault();
    window.requestAnimationFrame(() => {
      section.scrollIntoView({ block: "start" });
    });
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
