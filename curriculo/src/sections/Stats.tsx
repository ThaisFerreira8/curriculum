import { Card } from "@/components/Card";

const stats = [
  {
    value: "8+",
    label: "Anos de experiencia",
  },
  {
    value: "40+",
    label: "Projetos entregues",
  },
  {
    value: "12",
    label: "Times liderados",
  },
  {
    value: "99.9%",
    label: "Uptime em producao",
  },
];

export function Stats() {
  return (
    <section aria-label="Metricas profissionais" className="pb-[var(--space-section-y)]">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="flex min-h-32 flex-col items-center justify-center text-center"
          >
            <strong className="text-4xl font-bold text-[var(--app-accent-text)]">
              {stat.value}
            </strong>
            <span className="mt-4 text-sm text-[var(--app-muted)]">{stat.label}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}
