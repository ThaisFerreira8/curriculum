import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { skillGroups } from "@/data/skills";

export function TechStack() {
  return (
    <section className="pb-[var(--space-section-y)]" aria-label="Stack tecnológico">
      <SectionTitle
        className="mb-10"
        description="Tecnologias utilizadas em experiências profissionais, estudos e projetos de desenvolvimento."
        eyebrow="Stack tecnológico"
        title="Ferramentas com as quais trabalho"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <Card key={group.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--app-muted)]">
              {group.title}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill} variant="tag">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
