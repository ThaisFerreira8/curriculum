import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  className?: string;
  titleAs?: "h1" | "h2";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  className = "",
  titleAs = "h2",
}: SectionTitleProps) {
  const TitleTag = titleAs;

  return (
    <div className={className}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium text-[var(--app-accent-text)]">{eyebrow}</p>
      ) : null}
      <TitleTag className="max-w-2xl text-4xl font-bold tracking-normal text-[var(--app-text)] sm:text-5xl">
        {title}
      </TitleTag>
      {description ? (
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--app-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
