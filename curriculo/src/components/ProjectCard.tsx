import type { Project } from "@/data/projects";
import { ExternalIcon, GithubIcon } from "./icons";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex min-h-[290px] flex-col rounded-2xl border border-[color:var(--app-border)] bg-[var(--app-surface)] p-6 shadow-2xl shadow-black/10 transition hover:-translate-y-1 hover:border-blue-400/30">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-[color:var(--app-border)] px-3 py-1 text-xs text-[var(--app-muted)]">
            {project.category}
          </span>
          {project.featured ? (
            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
              Destaque
            </span>
          ) : null}
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
          <span
            key={tag}
            className="rounded-lg bg-[var(--tag-bg)] px-2.5 py-1 font-mono text-xs text-[var(--tag-text)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
