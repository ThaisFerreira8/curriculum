import { ButtonLink } from "@/components/Button";
import { Card } from "@/components/Card";
import { MailIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section className="pb-[var(--space-section-y)]" aria-labelledby="contact-title">
      <Card className="flex flex-col items-center px-6 py-14 text-center sm:px-12">
        <h2 id="contact-title" className="text-3xl font-bold text-[var(--app-text)] sm:text-4xl">
          Vamos construir algo excepcional
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-[var(--app-muted)]">
          Estou disponível para oportunidades em desenvolvimento de software nos modelos híbrido
          ou remoto.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`mailto:${profile.email}`}>
            <MailIcon />
            Entrar em contato
          </ButtonLink>
          <ButtonLink href="/experience" variant="secondary">
            Ver experiência
          </ButtonLink>
        </div>
      </Card>
    </section>
  );
}
