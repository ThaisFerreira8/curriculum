"use client";

import { useState } from "react";
import { projectCategories, projects, type Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type FilterValue = "Todos" | Project["category"];

function getProjectCount(filter: FilterValue) {
  if (filter === "Todos") {
    return projects.length;
  }

  return projects.filter((project) => project.category === filter).length;
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("Todos");
  const filters: FilterValue[] = ["Todos", ...projectCategories];

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <div className="mt-12 flex flex-wrap gap-2" aria-label="Filtros de projetos">
        {filters.map((filter) => {
          const isActive = filter === activeFilter;

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                isActive
                  ? "border-blue-400 bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "border-[color:var(--app-border)] bg-[var(--subtle-bg)] text-[var(--app-muted)] hover:border-blue-400/40 hover:text-[var(--app-text)]"
              }`}
            >
              {filter} <span className="ml-1 opacity-70">{getProjectCount(filter)}</span>
            </button>
          );
        })}
      </div>

      <section
        id="projects"
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Lista de projetos"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </>
  );
}
