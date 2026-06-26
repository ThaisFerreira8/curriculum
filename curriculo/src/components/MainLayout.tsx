"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { Container } from "./Container";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
  TerminalIcon,
} from "./icons";

type MainLayoutProps = {
  children: ReactNode;
};

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3 font-semibold text-[var(--app-text)]">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/25">
        <TerminalIcon />
      </span>
      <span>Alex Rivera</span>
    </Link>
  );
}

export function MainLayout({ children }: MainLayoutProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isLight = theme === "light";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--app-bg)]">
      <header className="sticky top-0 z-10 border-b border-[color:var(--app-border)] bg-[var(--header-bg)] backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Brand />

          <nav className="hidden items-center gap-8 text-sm text-[var(--app-muted)] md:flex">
            <Link className="transition hover:text-[var(--app-text)]" href="/">
              Inicio
            </Link>
            <a className="transition hover:text-[var(--app-text)]" href="#experience">
              Experiencia
            </a>
            <a className="border-b border-blue-400 pb-3 text-[var(--app-text)]" href="#projects">
              Projetos
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
            >
              Ver trabalho
            </a>
            <button
              type="button"
              aria-label={isLight ? "Ativar tema escuro" : "Ativar tema claro"}
              aria-pressed={isLight}
              onClick={() => setTheme(isLight ? "dark" : "light")}
              className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--app-border)] bg-[var(--subtle-bg)] text-[var(--app-muted)] transition hover:border-blue-400/40 hover:text-[var(--app-text)]"
            >
              {isLight ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </Container>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-[color:var(--app-border)] py-9">
        <Container className="flex flex-col gap-6 text-sm text-[var(--app-muted)] md:flex-row md:items-center md:justify-between">
          <Brand />
          <p>&copy; 2026 Alex Rivera. Construido com Next.js e Tailwind CSS.</p>
          <div className="flex gap-3">
            <a
              className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--app-border)] text-[var(--app-muted)] transition hover:text-[var(--app-text)]"
              href="https://github.com/alexrivera"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
            <a
              className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--app-border)] text-[var(--app-muted)] transition hover:text-[var(--app-text)]"
              href="https://www.linkedin.com/in/alexrivera"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
            </a>
            <a
              className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--app-border)] text-[var(--app-muted)] transition hover:text-[var(--app-text)]"
              href="mailto:alex@example.com"
              aria-label="Email"
            >
              <MailIcon />
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
