import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { MainLayout } from "@/components/MainLayout";
import { SectionTitle } from "@/components/SectionTitle";
import { courses, education, experiences } from "@/data/experience";
import { skillGroups } from "@/data/skills";

export default function ExperiencePage() {
  return (
    <MainLayout>
      <Container className="py-[var(--space-section-y)]">
        <SectionTitle
          className="mb-16"
          description="Da formação acadêmica às experiências em desenvolvimento e segurança, conheça a trajetória que construiu meu perfil profissional."
          eyebrow="Experiência"
          title="Uma carreira construída em tecnologia"
          titleAs="h1"
        />

        <section aria-labelledby="career-title">
          <h2 id="career-title" className="text-3xl font-bold text-[var(--app-text)]">
            Trajetória profissional
          </h2>
          <p className="mt-3 text-[var(--app-muted)]">
            Experiências em desenvolvimento de software, segurança da informação e liderança.
          </p>

          <div className="relative mt-10 space-y-6 border-l border-[color:var(--app-border)] pl-7">
            {experiences.map((experience) => (
              <Card key={`${experience.organization}-${experience.role}`} className="relative">
                <span className="absolute -left-[2.15rem] top-7 h-3 w-3 rounded-full border-2 border-[var(--app-bg)] bg-[var(--app-accent)]" />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--app-text)]">{experience.role}</h3>
                    <p className="mt-1 text-sm text-[var(--app-accent-text)]">{experience.organization}</p>
                  </div>
                  <span className="shrink-0 text-sm text-[var(--app-muted)]">{experience.period}</span>
                </div>
                <p className="mt-5 leading-7 text-[var(--app-muted)]">{experience.description}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--app-muted)]">
                  {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <Badge key={technology} variant="tag">{technology}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="pt-[var(--space-section-y)]" aria-labelledby="skills-title">
          <h2 id="skills-title" className="text-3xl font-bold text-[var(--app-text)]">Painel de habilidades</h2>
          <p className="mt-3 text-[var(--app-muted)]">Competências técnicas utilizadas na minha trajetória.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <Card key={group.title}>
                <h3 className="font-semibold text-[var(--app-text)]">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => <Badge key={skill} variant="tag">{skill}</Badge>)}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid gap-10 py-[var(--space-section-y)] lg:grid-cols-2">
          <section aria-labelledby="education-title">
            <h2 id="education-title" className="text-2xl font-bold text-[var(--app-text)]">Formação</h2>
            <div className="mt-6 space-y-4">
              {education.map((item) => (
                <Card key={item.course}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-[var(--app-text)]">{item.course}</h3>
                      <p className="mt-2 text-sm text-[var(--app-accent-text)]">{item.institution}</p>
                    </div>
                    <Badge variant="accent">{item.status}</Badge>
                  </div>
                  <p className="mt-5 text-sm text-[var(--app-muted)]">{item.period}</p>
                </Card>
              ))}
            </div>
          </section>

          <section aria-labelledby="courses-title">
            <h2 id="courses-title" className="text-2xl font-bold text-[var(--app-text)]">Cursos e capacitações</h2>
            <div className="mt-6 space-y-4">
              {courses.map((course) => (
                <Card key={course} className="py-5">
                  <p className="font-medium leading-6 text-[var(--app-text)]">{course}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </MainLayout>
  );
}
