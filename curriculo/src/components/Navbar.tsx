"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "./Button";
import { Container } from "./Container";
import { MenuIcon, TerminalIcon, XIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

const navigationItems = [
  { href: "/", label: "Inicio", match: "/" },
  { href: "/experience", label: "Experiencia", match: "/experience" },
  { href: "/#projects", label: "Projetos", match: "/projects" },
];

export function Brand() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-3 font-semibold text-[var(--app-text)]">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[var(--radius-md)] bg-[var(--app-accent)] text-white shadow-lg shadow-blue-500/25">
        <TerminalIcon />
      </span>
      <span className="truncate">Alex Rivera</span>
    </Link>
  );
}

function isActivePath(pathname: string, match: string) {
  if (match === "/projects") {
    return false;
  }

  return pathname === match;
}

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-[color:var(--app-border)] bg-[var(--header-bg)] backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Brand />

        <nav className="hidden items-center gap-8 text-sm text-[var(--app-muted)] md:flex">
          {navigationItems.map((item) => {
            const isActive = isActivePath(pathname, item.match);

            return (
              <Link
                key={item.href}
                className={`border-b pb-3 pt-3 transition hover:text-[var(--app-text)] ${
                  isActive
                    ? "border-[var(--app-accent)] text-[var(--app-text)]"
                    : "border-transparent"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink className="hidden sm:inline-flex" href="/#projects" size="sm">
            Ver trabalho
          </ButtonLink>
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu mobile" : "Abrir menu mobile"}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-[var(--radius-md)] border border-[color:var(--app-border)] bg-[var(--subtle-bg)] text-[var(--app-muted)] transition hover:border-[var(--app-accent-border)] hover:text-[var(--app-text)] focus:outline-none focus:ring-2 focus:ring-[var(--app-accent)] focus:ring-offset-2 focus:ring-offset-[var(--app-bg)] md:hidden"
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
          <ThemeToggle />
        </div>
      </Container>

      {isMenuOpen ? (
        <div className="border-t border-[color:var(--app-border)] bg-[var(--app-bg)] md:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-2 text-sm">
              {navigationItems.map((item) => {
                const isActive = isActivePath(pathname, item.match);

                return (
                  <Link
                    key={item.href}
                    className={`rounded-[var(--radius-md)] px-3 py-3 transition ${
                      isActive
                        ? "bg-[var(--app-accent-soft)] text-[var(--app-accent-text)]"
                        : "text-[var(--app-muted)] hover:bg-[var(--subtle-bg)] hover:text-[var(--app-text)]"
                    }`}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
