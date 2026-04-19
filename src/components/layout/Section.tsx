import { cn } from "@/lib/utils";

type SectionSpacing = "sm" | "md" | "lg" | "xl";

type SectionProps = {
  children: React.ReactNode;
  spacing?: SectionSpacing;
  className?: string;
};

export function Section({
  children,
  spacing = "lg",
  className,
}: SectionProps) {
  const spacings = {
    sm: "py-8",
    md: "py-12",
    lg: "py-20",
    xl: "py-32",
  };

  return (
    <section className={cn(spacings[spacing], className)}>
      {children}
    </section>
  );
}