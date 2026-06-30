"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isLight = theme === "light";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <button
      type="button"
      aria-label={isLight ? "Ativar tema escuro" : "Ativar tema claro"}
      aria-pressed={isLight}
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[color:var(--app-border)] bg-[var(--subtle-bg)] text-[var(--app-muted)] transition hover:border-[var(--app-accent-border)] hover:text-[var(--app-text)] focus:outline-none focus:ring-2 focus:ring-[var(--app-accent)] focus:ring-offset-2 focus:ring-offset-[var(--app-bg)]"
    >
      {isLight ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
