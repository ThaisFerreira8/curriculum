import { Badge } from "@/components/Badge";
import { ButtonLink } from "@/components/Button";
import { GithubIcon } from "@/components/icons";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-[var(--space-section-y)] text-center sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-80 max-w-3xl rounded-full bg-[var(--app-accent-soft)] blur-3xl" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center">
        <Badge className="mb-6" variant="accent">
          Disponível para oportunidades em Desenvolvimento de Software
        </Badge>

        <h1 className="max-w-4xl text-5xl font-bold tracking-normal text-[var(--app-text)] sm:text-6xl lg:text-7xl">
          Engenheira de Software construindo produtos{" "}
          <span className="text-[var(--app-accent-text)]">rápidos, seguros e elegantes</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--app-muted)] sm:text-lg">
          Sou Thais Ferreira Gomes. Trabalho do frontend ao backend, desenvolvendo
          aplicações web, APIs REST e soluções serverless com atenção à qualidade,
          segurança e manutenção do código.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <ButtonLink href="/#projects">Ver projetos</ButtonLink>
          <ButtonLink
            href="https://github.com/ThaisFerreira8"
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            <GithubIcon />
            GitHub
          </ButtonLink>
        </div>

        <p className="mt-6 text-sm text-[var(--app-muted)]">
          São Paulo, SP · Disponível para trabalho híbrido ou remoto
        </p>
      </div>
    </section>
  );
}
