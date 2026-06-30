import { Container } from "@/components/Container";
import { MainLayout } from "@/components/MainLayout";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SectionTitle } from "@/components/SectionTitle";
import { Hero } from "@/sections/Hero";

export default function Home() {
  return (
    <MainLayout>
      <Container>
        <Hero />

        <section className="flex flex-col gap-8 pb-12 md:flex-row md:items-end md:justify-between">
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
        </section>

        <ProjectsSection />
      </Container>
    </MainLayout>
  );
}
