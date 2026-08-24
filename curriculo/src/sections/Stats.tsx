import { Card } from "@/components/Card";

const stats = [
  {
    value: "2",
    label: "Áreas de experiência",
  },
  {
    value: "10",
    label: "Projetos de mitigação gerenciados",
  },
  {
    value: "3",
    label: "Formações acadêmicas",
  },
  {
    value: "Intermediário",
    label: "Inglês",
  },
];

export function Stats() {
  return (
    <section aria-label="Destaques profissionais" className="pb-[var(--space-section-y)]">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="flex min-h-32 flex-col items-center justify-center text-center"
          >
            <strong className="text-3xl font-bold text-[var(--app-accent-text)] sm:text-4xl">
              {stat.value}
            </strong>
            <span className="mt-4 text-sm text-[var(--app-muted)]">{stat.label}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}
