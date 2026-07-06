"use client";

import { Link } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type HeaderMenuItem = Readonly<{
  href: string;
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
  const menuId = "header-menu";

  return (
    <div className="contents">
      <div className="hidden items-center text-sm font-bold text-(--theme-text-secondary) lg:flex">
        {items.map((item) => (
          <Link
            className="rounded-full border border-transparent px-3.5 py-2.5 transition hover:border-(--theme-border-strong) hover:bg-(--theme-surface-muted) hover:text-(--theme-text-primary)"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>

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

      {isOpen ? (
        <div className="w-full lg:hidden" id={menuId}>
          <div className="grid gap-2 border-t border-(--theme-border) pt-4 text-sm font-bold text-(--theme-text-secondary)">
            {items.map((item) => (
              <Link
                className="rounded-2xl border border-(--theme-border) bg-(--theme-surface-muted) px-4 py-3 transition hover:border-(--theme-border-strong) hover:text-(--theme-text-primary)"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
