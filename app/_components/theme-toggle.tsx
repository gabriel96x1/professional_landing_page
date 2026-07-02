"use client";

import { Moon, Sun } from "lucide-react";
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

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
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

  return (
    <button
      aria-label={`Cambiar a tema ${isDark ? "claro" : "oscuro"}`}
      aria-pressed={isDark}
      className="theme-toggle"
      onClick={toggleTheme}
      title={`Cambiar a tema ${isDark ? "claro" : "oscuro"}`}
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
