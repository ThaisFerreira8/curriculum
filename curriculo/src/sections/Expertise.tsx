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
      "Interfaces web responsivas com React, TypeScript, HTML, CSS e Tailwind CSS, organizadas em componentes reutilizáveis.",
    icon: <CodeIcon />,
  },
  {
    title: "Desenvolvimento Backend",
    description:
      "APIs REST com Python, Flask, SQLAlchemy e PostgreSQL, utilizando arquitetura em camadas, validação de dados e JWT.",
    icon: <ServerIcon />,
  },
  {
    title: "Cloud e Integração",
    description:
      "Funções serverless com Python e AWS Lambda, integradas a serviços de backend e fluxos de processamento de dados.",
    icon: <NetworkIcon />,
  },
  {
    title: "Segurança da Informação",
    description:
      "Análise de riscos, revisão de controles e políticas com base em NIST, CIS Controls e ISO 27001.",
    icon: <ShieldIcon />,
  },
  {
    title: "Qualidade de Software",
    description:
      "Versionamento com Git, testes automatizados com Pytest, lint e práticas que favorecem código confiável e sustentável.",
    icon: <WorkflowIcon />,
  },
];

export function Expertise() {
  return (
    <section className="pb-[var(--space-section-y)]" aria-label="Áreas de atuação">
      <SectionTitle
        className="mb-10"
        description="Experiência prática em desenvolvimento full stack, integrações cloud, qualidade de software e segurança da informação."
        eyebrow="Áreas de atuação"
        title="Conhecimentos que conectam desenvolvimento e segurança"
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
