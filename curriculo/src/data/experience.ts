export type Experience = {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    role: "Engenheira de Software Residente",
    organization: "FDTE - Fundação para o Desenvolvimento Tecnológico da Engenharia",
    period: "Abril de 2025 - Março de 2026",
    description:
      "Desenvolvimento de aplicações web, APIs REST e funções serverless em um ambiente colaborativo de engenharia de software.",
    highlights: [
      "APIs REST com Python, Flask, SQLAlchemy e arquitetura em camadas.",
      "Interfaces web com React, TypeScript e Tailwind CSS.",
      "Funções serverless em Python com AWS Lambda.",
      "Autenticação JWT, validação de dados, Pytest, Git e lint.",
    ],
    technologies: ["Python", "Flask", "React", "TypeScript", "PostgreSQL", "AWS Lambda"],
  },
  {
    role: "Estagiária de Segurança da Informação",
    organization: "Cosan",
    period: "Setembro de 2022 - Outubro de 2024",
    description:
      "Atuação em análise de riscos cibernéticos, avaliação de controles e documentação de Segurança da Informação.",
    highlights: [
      "Identificação, classificação e avaliação de ativos e riscos cibernéticos.",
      "Relatórios executivos, recomendações de mitigação e preparação para auditorias.",
      "Métricas e planos de ação baseados em NIST, CIS Controls e ISO 27001.",
      "Gestão de 10 projetos de mitigação, vulnerabilidades e riscos cibernéticos.",
    ],
    technologies: ["NIST", "CIS Controls", "ISO 27001", "Gestão de riscos", "Compliance"],
  },
  {
    role: "Voluntária e líder do grupo",
    organization: "Projeto Integrador Inclusão de Talentos",
    period: "Agosto de 2022 - Novembro de 2022",
    description:
      "Liderança de um projeto comunitário para conectar moradores a profissionais qualificados para serviços esporádicos.",
    highlights: [
      "Planejamento das atividades e coordenação dos prazos do grupo.",
      "Comunicação com a associação comunitária e realização de entrevistas.",
      "Desenvolvimento de site responsivo e aplicativo Android nativo.",
    ],
    technologies: ["Android", "Desenvolvimento Web", "Liderança", "Comunicação"],
  },
];

export const education = [
  {
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "IFSP",
    period: "Julho de 2026 - Previsão de conclusão em 2028",
    status: "Cursando",
  },
  {
    course: "Engenharia da Computação",
    institution: "Univesp",
    period: "Fevereiro de 2020 - Dezembro de 2024",
    status: "Concluído",
  },
  {
    course: "Bacharelado em Tecnologia da Informação",
    institution: "Univesp",
    period: "Fevereiro de 2020 - Maio de 2024",
    status: "Concluído",
  },
] as const;

export const courses = [
  "Fundamentos da Segurança Cibernética - Introdução ao CIS Controls",
  "Fundamentos de Segurança da Informação na Transformação Digital",
  "Arquitetura de Soluções para Transformação Digital",
  "Developing Front-End Apps with React",
  "JavaScript Programming Essentials",
  "Introduction to Software Engineering",
  "Getting Started with Git and GitHub",
] as const;
