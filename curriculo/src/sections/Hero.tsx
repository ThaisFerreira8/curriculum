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
          Disponivel para novas oportunidades
        </Badge>

        <h1 className="max-w-4xl text-5xl font-bold tracking-normal text-[var(--app-text)] sm:text-6xl lg:text-7xl">
          Engenheiro de Software construindo produtos{" "}
          <span className="text-[var(--app-accent-text)]">rapidos, seguros e elegantes</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--app-muted)] sm:text-lg">
          Sou Alex Rivera. Trabalho do frontend ao backend, com forte atencao a
          arquitetura, seguranca e automacao para transformar problemas complexos
          em solucoes simples e confiaveis.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <ButtonLink href="/#projects">Ver projetos</ButtonLink>
          <ButtonLink
            href="https://github.com/alexrivera"
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            <GithubIcon />
            GitHub
          </ButtonLink>
        </div>

        <p className="mt-6 text-sm text-[var(--app-muted)]">
          Sao Paulo, Brasil · Remoto global
        </p>
      </div>
    </section>
  );
}
