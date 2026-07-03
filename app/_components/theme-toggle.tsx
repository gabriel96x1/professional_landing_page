"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useSyncExternalStore } from "react";

type ThemeName = "light" | "dark";

const storageKey = "site-theme";
const themeChangeEvent = "site-theme-change";

function getPreferredTheme(): ThemeName {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(storageKey);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return "dark";
}

function applyTheme(theme: ThemeName) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function subscribeToThemeChanges(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(themeChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(themeChangeEvent, onStoreChange);
  };
}

export function ThemeToggle() {
  const t = useTranslations("Theme");
  const theme = useSyncExternalStore<ThemeName>(
    subscribeToThemeChanges,
    getPreferredTheme,
    () => "light",
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    window.dispatchEvent(new Event(themeChangeEvent));
  }

  const isDark = theme === "dark";
  const label = isDark ? t("switchToLight") : t("switchToDark");

  return (
    <button
      aria-label={label}
      aria-pressed={isDark}
      className="theme-toggle"
      onClick={toggleTheme}
      title={label}
      type="button"
    >
      <span aria-hidden="true" className="theme-toggle__track">
        {isDark ? (
          <Moon className="theme-toggle__icon" size={16} strokeWidth={2} />
        ) : (
          <Sun className="theme-toggle__icon" size={16} strokeWidth={2} />
        )}
      </span>
    </button>
  );
}
