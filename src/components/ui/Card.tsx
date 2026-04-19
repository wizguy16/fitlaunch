import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-[var(--color-surface)] border border-[var(--border-default)] rounded-[var(--radius-lg)] p-6 shadow-soft",
        className
      )}
    >
      {children}
    </div>
  );
  
}
export function CardHeader({ children, className }: CardProps) {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: CardProps) {
  return (
    <h3
      className={cn(
        "text-[var(--text-primary)] text-lg font-semibold",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function CardContent({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "text-[var(--text-secondary)] text-sm",
        className
      )}
    >
      {children}
    </div>
  );
}