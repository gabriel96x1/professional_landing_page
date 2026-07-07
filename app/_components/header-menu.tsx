"use client";

import { HomeSectionLink } from "@/app/_components/home-section-link";
import { Link } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import type { ComponentProps } from "react";
import { useEffect, useId, useState } from "react";

type HeaderMenuItem = Readonly<{
  href: ComponentProps<typeof Link>["href"];
  key: string;
  label: string;
}>;

type HeaderMenuProps = Readonly<{
  closeLabel: string;
  items: HeaderMenuItem[];
  openLabel: string;
}>;

export function HeaderMenu({ closeLabel, items, openLabel }: HeaderMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const label = isOpen ? closeLabel : openLabel;
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <div className="contents">
      <button
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={label}
        className="theme-toggle lg:hidden"
        onClick={() => setIsOpen((current) => !current)}
        title={label}
        type="button"
      >
        <span aria-hidden="true" className="theme-toggle__track">
          {isOpen ? (
            <X className="theme-toggle__icon" size={16} strokeWidth={2.4} />
          ) : (
            <Menu className="theme-toggle__icon" size={16} strokeWidth={2.4} />
          )}
        </span>
      </button>

      <div className="w-full lg:hidden" hidden={!isOpen} id={menuId}>
        <div className="grid gap-2 border-t border-(--theme-border) pt-4 text-sm font-bold text-(--theme-text-secondary)">
          {items.map((item) => (
            <HomeSectionLink
              className="text-center rounded-2xl border border-(--theme-border) bg-(--theme-surface-muted) px-4 py-3 transition hover:border-(--theme-border-strong) hover:text-(--theme-text-primary)"
              href={item.href}
              key={item.key}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </HomeSectionLink>
          ))}
        </div>
      </div>
    </div>
  );
}
