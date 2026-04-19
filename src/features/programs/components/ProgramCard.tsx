import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ProgramCardProps = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  className?: string;
};

export function ProgramCard({
  id,
  title,
  description,
  price,
  image,
  className,
}: ProgramCardProps) {
  return (
    <Link href={`/programs/${id}`} className="block">
      <div
        className={cn(
          "bg-[var(--color-surface)] border border-[var(--border-default)] rounded-[var(--radius-lg)] overflow-hidden shadow-soft hover:scale-[1.02] transition-transform cursor-pointer",
          className
        )}
      >
        {/* Image */}
        <div className="relative h-[200px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            {title}
          </h3>

          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            {description}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-[var(--color-primary)] font-bold">
              {price}
            </span>

            <Button variant="ghost">View</Button>
          </div>
        </div>
      </div>
    </Link>
  );
}