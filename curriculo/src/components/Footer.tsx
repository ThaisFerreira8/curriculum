import { Container } from "./Container";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./icons";
import { Brand } from "./Navbar";
import { profile } from "@/data/profile";

const socialLinks = [
  {
    href: profile.githubUrl,
    label: "GitHub",
    icon: <GithubIcon />,
  },
  {
    href: profile.linkedinUrl,
    label: "LinkedIn",
    icon: <LinkedinIcon />,
  },
  {
    href: `mailto:${profile.email}`,
    label: "Email",
    icon: <MailIcon />,
  },
  {
    href: profile.phoneHref,
    label: "Telefone",
    icon: <PhoneIcon />,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--app-border)] py-9">
      <Container className="flex flex-col gap-6 text-sm text-[var(--app-muted)] md:flex-row md:items-center md:justify-between">
        <Brand />
        <div className="text-center md:text-left">
          <p>&copy; 2026 {profile.name}.</p>
          <a className="mt-1 inline-block hover:text-[var(--app-text)]" href={profile.phoneHref}>
            {profile.phoneDisplay}
          </a>
        </div>
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--app-border)] text-[var(--app-muted)] transition hover:border-[var(--app-accent-border)] hover:text-[var(--app-text)] focus:outline-none focus:ring-2 focus:ring-[var(--app-accent)] focus:ring-offset-2 focus:ring-offset-[var(--app-bg)]"
              href={link.href}
              aria-label={link.label}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
