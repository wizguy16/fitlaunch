import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full";

  const variants = {
  primary:
    "bg-[var(--color-primary)] text-black px-6 py-3 rounded-full shadow-soft",

  secondary:
    "bg-[var(--color-surface)] text-[var(--text-primary)] border border-[var(--border-default)] px-6 py-3",

  ghost:
    "bg-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] px-4 py-2",
};

  return (
    <button
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}