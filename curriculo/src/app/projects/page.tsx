import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { GithubIcon } from "@/components/icons";
import { MainLayout } from "@/components/MainLayout";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/profile";

export default function ProjectsPage() {
  return (
    <MainLayout>
      <Container className="py-[var(--space-section-y)]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            description="Uma seleção de projetos organizados por área. Esta seção será atualizada com os repositórios mais relevantes do meu GitHub."
            eyebrow="Projetos"
            title="Projetos que construí"
            titleAs="h1"
          />
          <ButtonLink href={profile.githubUrl} target="_blank" rel="noreferrer" variant="secondary">
            <GithubIcon />
            Ver no GitHub
          </ButtonLink>
        </div>

        <ProjectsSection />
      </Container>
    </MainLayout>
  );
}
