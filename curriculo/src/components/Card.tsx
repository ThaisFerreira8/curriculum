import type { HTMLAttributes, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
} & HTMLAttributes<HTMLElement>;

export function Card({ children, className = "", interactive = false, ...props }: CardProps) {
  const interactiveClasses = interactive
    ? "transition hover:-translate-y-1 hover:border-[var(--app-accent-border)]"
    : "";

  return (
    <article
      className={[
        "rounded-[var(--radius-lg)] border border-[color:var(--app-border)] bg-[var(--app-surface)] p-[var(--space-card)] shadow-2xl shadow-black/10",
        interactiveClasses,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </article>
  );
}
