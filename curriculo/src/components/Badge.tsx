import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "neutral" | "accent" | "tag";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
} & HTMLAttributes<HTMLSpanElement>;

const variantClasses: Record<BadgeVariant, string> = {
  neutral:
    "rounded-[var(--radius-pill)] border border-[color:var(--app-border)] text-[var(--app-muted)]",
  accent:
    "rounded-[var(--radius-pill)] border border-[var(--app-accent-border)] bg-[var(--app-accent-soft)] font-medium text-[var(--app-accent-text)]",
  tag: "rounded-[var(--radius-sm)] bg-[var(--tag-bg)] font-mono text-[var(--tag-text)]",
};

export function Badge({
  children,
  className = "",
  variant = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center px-3 py-1 text-xs leading-5",
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
