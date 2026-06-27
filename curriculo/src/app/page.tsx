import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { GithubIcon } from "@/components/icons";
import { MainLayout } from "@/components/MainLayout";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SectionTitle } from "@/components/SectionTitle";

export default function Home() {
  return (
    <MainLayout>
      <Container className="py-[var(--space-section-y)] sm:py-[var(--space-section-y-lg)]">
        <section className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            description={
              <>
                Uma selecao de projetos open source e profissionais. Filtre por area
                para explorar trabalhos especificos.
              </>
            }
            eyebrow="Projetos"
            title="Coisas que construi"
            titleAs="h1"
          />
          <span id="experience" className="sr-only">
            Experiencia
          </span>

          <ButtonLink
            href="https://github.com/alexrivera"
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            <GithubIcon />
            Ver no GitHub
          </ButtonLink>
        </section>

        <ProjectsSection />
      </Container>
    </MainLayout>
  );
}
