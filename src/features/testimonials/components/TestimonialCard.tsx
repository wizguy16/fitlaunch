import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  name: string;
  result: string;
  quote: string;
  className?: string;
};

export function TestimonialCard({
  name,
  result,
  quote,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-[var(--color-surface)] border border-[var(--border-default)] rounded-[var(--radius-lg)] p-6 shadow-soft",
        className
      )}
    >
      {/* Quote */}
      <p className="text-[var(--text-secondary)] text-base leading-relaxed">
        “{quote}”
      </p>

      {/* User */}
      <div className="mt-6">
        <div className="text-[var(--text-primary)] font-semibold">
          {name}
        </div>

        <div className="text-sm text-[var(--color-primary)]">
          {result}
        </div>
      </div>
    </div>
  );
}