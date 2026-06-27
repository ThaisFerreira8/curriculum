import type { Project } from "@/data/projects";
import { Badge } from "./Badge";
import { Card } from "./Card";
import { ExternalIcon, GithubIcon } from "./icons";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex min-h-[290px] flex-col" interactive>
      <div className="mb-8 flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <Badge>{project.category}</Badge>
          {project.featured ? <Badge variant="accent">Destaque</Badge> : null}
        </div>

        <div className="flex gap-4 text-[var(--app-muted)]">
          <a
            href={project.githubUrl}
            aria-label={`Ver ${project.title} no GitHub`}
            className="transition hover:text-[var(--app-text)]"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              aria-label={`Abrir ${project.title}`}
              className="transition hover:text-[var(--app-text)]"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalIcon />
            </a>
          ) : null}
        </div>
      </div>

      <h2 className="text-lg font-semibold text-[var(--app-text)]">{project.title}</h2>
      <p className="mt-5 leading-7 text-[var(--app-muted)]">{project.description}</p>

      <div className="mt-auto flex flex-wrap gap-2 pt-10">
        {project.tags.map((tag) => (
          <Badge key={tag} className="px-2.5" variant="tag">
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
