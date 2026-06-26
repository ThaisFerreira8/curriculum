export type Project = {
  title: string;
  category: "Frontend" | "Backend" | "Arquitetura" | "Seguranca" | "Automacao";
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
};

export const projectCategories: Project["category"][] = [
  "Frontend",
  "Backend",
  "Arquitetura",
  "Seguranca",
  "Automacao",
];

export const projects: Project[] = [
  {
    title: "Nebula UI",
    category: "Frontend",
    description:
      "Biblioteca de componentes React acessivel e altamente customizavel, com mais de 60 componentes e suporte a temas.",
    tags: ["React", "TypeScript", "Tailwind", "Radix"],
    githubUrl: "https://github.com/alexrivera/nebula-ui",
    demoUrl: "https://example.com/projects/nebula-ui",
    featured: true,
  },
  {
    title: "Atlas API Gateway",
    category: "Backend",
    description:
      "Gateway de APIs de alta performance escrito em Go, com rate limiting, cache distribuido e roteamento dinamico.",
    tags: ["Go", "Redis", "gRPC", "Docker"],
    githubUrl: "https://github.com/alexrivera/atlas-api-gateway",
    featured: true,
  },
  {
    title: "Mesh Platform",
    category: "Arquitetura",
    description:
      "Plataforma de microservicos orientada a eventos com observabilidade completa e deploy automatizado.",
    tags: ["Kubernetes", "Kafka", "Terraform", "Prometheus"],
    githubUrl: "https://github.com/alexrivera/mesh-platform",
    demoUrl: "https://example.com/projects/mesh-platform",
  },
  {
    title: "Sentinel",
    category: "Seguranca",
    description:
      "Ferramenta de varredura de seguranca que detecta vulnerabilidades em dependencias e configuracoes de infraestrutura.",
    tags: ["Python", "OWASP", "Docker", "CLI"],
    githubUrl: "https://github.com/alexrivera/sentinel",
  },
  {
    title: "FlowPipe",
    category: "Automacao",
    description:
      "Orquestrador de pipelines de CI/CD com configuracao declarativa e integracao nativa com multiplos provedores de nuvem.",
    tags: ["Node.js", "GitHub Actions", "AWS", "YAML"],
    githubUrl: "https://github.com/alexrivera/flowpipe",
    demoUrl: "https://example.com/projects/flowpipe",
  },
  {
    title: "Pulse Dashboard",
    category: "Frontend",
    description:
      "Dashboard de metricas em tempo real com graficos interativos e atualizacoes via WebSocket.",
    tags: ["Next.js", "WebSocket", "Recharts", "SWR"],
    githubUrl: "https://github.com/alexrivera/pulse-dashboard",
    demoUrl: "https://example.com/projects/pulse-dashboard",
  },
  {
    title: "Vault Auth",
    category: "Seguranca",
    description:
      "Servico de autenticacao e autorizacao com OAuth 2.0, MFA e gestao de sessoes seguras.",
    tags: ["Go", "OAuth 2.0", "JWT", "PostgreSQL"],
    githubUrl: "https://github.com/alexrivera/vault-auth",
  },
  {
    title: "Forge CLI",
    category: "Automacao",
    description:
      "Ferramenta de linha de comando para scaffolding de projetos e automacao de tarefas repetitivas de desenvolvimento.",
    tags: ["TypeScript", "Node.js", "CLI"],
    githubUrl: "https://github.com/alexrivera/forge-cli",
  },
];
