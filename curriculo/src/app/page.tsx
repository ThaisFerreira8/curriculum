import { Container } from "@/components/Container";
import { GithubIcon } from "@/components/icons";
import { MainLayout } from "@/components/MainLayout";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <MainLayout>
      <Container className="py-20 sm:py-24">
        <section className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-medium text-blue-400">Projetos</p>
            <span id="experience" className="sr-only">
              Experiencia
            </span>
            <h1 className="max-w-2xl text-5xl font-bold tracking-normal text-[var(--app-text)] sm:text-6xl">
              Coisas que construi
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--app-muted)]">
              Uma selecao de projetos open source e profissionais. Filtre por area
              para explorar trabalhos especificos.
            </p>
          </div>

          <a
            href="https://github.com/alexrivera"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-[color:var(--app-border)] bg-[var(--subtle-bg)] px-4 py-2 text-sm font-semibold text-[var(--app-text)] transition hover:border-blue-400/40 hover:bg-[var(--subtle-bg-hover)]"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
            Ver no GitHub
          </a>
        </section>

        <ProjectsSection />
      </Container>
    </MainLayout>
  );
}
