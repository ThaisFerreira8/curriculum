import { Container } from "./Container";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import { Brand } from "./Navbar";

const socialLinks = [
  {
    href: "https://github.com/alexrivera",
    label: "GitHub",
    icon: <GithubIcon />,
  },
  {
    href: "https://www.linkedin.com/in/alexrivera",
    label: "LinkedIn",
    icon: <LinkedinIcon />,
  },
  {
    href: "mailto:alex@example.com",
    label: "Email",
    icon: <MailIcon />,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--app-border)] py-9">
      <Container className="flex flex-col gap-6 text-sm text-[var(--app-muted)] md:flex-row md:items-center md:justify-between">
        <Brand />
        <p className="text-center md:text-left">
          &copy; 2026 Alex Rivera. Construido com Next.js e Tailwind CSS.
        </p>
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--app-border)] text-[var(--app-muted)] transition hover:border-[var(--app-accent-border)] hover:text-[var(--app-text)] focus:outline-none focus:ring-2 focus:ring-[var(--app-accent)] focus:ring-offset-2 focus:ring-offset-[var(--app-bg)]"
              href={link.href}
              aria-label={link.label}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
