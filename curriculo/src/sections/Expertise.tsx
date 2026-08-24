import type { ReactNode } from "react";
import { Card } from "@/components/Card";
import {
  CodeIcon,
  NetworkIcon,
  ServerIcon,
  ShieldIcon,
  WorkflowIcon,
} from "@/components/icons";
import { SectionTitle } from "@/components/SectionTitle";

type ExpertiseItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Desenvolvimento Frontend",
    description:
      "Interfaces acessiveis e performaticas com React, Next.js e TypeScript, com foco em detalhes e experiencia do usuario.",
    icon: <CodeIcon />,
  },
  {
    title: "Desenvolvimento Backend",
    description:
      "APIs robustas e escalaveis com Node.js, Go e PostgreSQL, priorizando confiabilidade e observabilidade.",
    icon: <ServerIcon />,
  },
  {
    title: "Arquitetura de Software",
    description:
      "Sistemas distribuidos, microsservicos e design orientado a dominio para produtos que escalam com o time.",
    icon: <NetworkIcon />,
  },
  {
    title: "Seguranca da Informacao",
    description:
      "Modelagem de ameacas, autenticacao segura e praticas de hardening aplicadas em todo o ciclo de desenvolvimento.",
    icon: <ShieldIcon />,
  },
  {
    title: "Automacao",
    description:
      "Pipelines de CI/CD, infraestrutura como codigo e automacoes que reduzem trabalho manual e erros.",
    icon: <WorkflowIcon />,
  },
];

export function Expertise() {
  return (
    <section className="pb-[var(--space-section-y)]" aria-label="Expertise de ponta a ponta">
      <SectionTitle
        className="mb-10"
        description="Do pixel ao pipeline. Atuo em todas as camadas do ciclo de vida do software para entregar produtos completos e sustentaveis."
        eyebrow="Areas de atuacao"
        title="Expertise de ponta a ponta"
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {expertiseItems.map((item) => (
          <Card key={item.title} className="min-h-56" interactive>
            <div className="mb-6 grid h-10 w-10 place-items-center rounded-[var(--radius-md)] bg-[var(--app-accent-soft)] text-[var(--app-accent-text)]">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-[var(--app-text)]">{item.title}</h3>
            <p className="mt-4 leading-7 text-[var(--app-muted)]">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
