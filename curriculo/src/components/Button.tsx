import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLinkProps = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const baseClasses =
  "inline-flex w-fit items-center justify-center gap-2 font-semibold transition focus:outline-none focus:ring-2 focus:ring-[var(--app-accent)] focus:ring-offset-2 focus:ring-offset-[var(--app-bg)] disabled:pointer-events-none disabled:opacity-50";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "rounded-[var(--radius-sm)] px-3 py-2 text-sm",
  md: "rounded-[var(--radius-md)] px-4 py-2.5 text-sm",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--app-accent)] text-white shadow-lg shadow-blue-500/20 hover:bg-[var(--app-accent-hover)]",
  secondary:
    "border border-[color:var(--app-border)] bg-[var(--subtle-bg)] text-[var(--app-text)] hover:border-[var(--app-accent-border)] hover:bg-[var(--subtle-bg-hover)]",
  ghost: "text-[var(--app-muted)] hover:text-[var(--app-text)]",
};

function getButtonClasses({
  className = "",
  size = "md",
  variant = "primary",
}: Pick<ButtonBaseProps, "className" | "size" | "variant">) {
  return [baseClasses, sizeClasses[size], variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  children,
  className,
  size = "md",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClasses({ className, size, variant })}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  size = "md",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a className={getButtonClasses({ className, size, variant })} {...props}>
      {children}
    </a>
  );
}
