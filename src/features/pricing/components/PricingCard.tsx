"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";


type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export function PricingCard({
    

    
  title,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
    const router = useRouter();
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border p-6 flex flex-col justify-between",
        highlighted
          ? "border-[var(--color-primary)] bg-[var(--color-surface-2)] shadow-strong"
          : "border-[var(--border-default)] bg-[var(--color-surface)] shadow-soft"
      )}
    >
      {/* Top */}
      <div>
        {highlighted && (
  <div className="mb-4 inline-block text-xs font-semibold text-black bg-[var(--color-primary)] px-3 py-1 rounded-full">
    Most Popular
  </div>
)}
        <h3 className="text-xl font-semibold text-[var(--text-primary)]">
          {title}
        </h3>

        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          {description}
        </p>

        <div className="mt-6 text-3xl font-bold text-[var(--text-primary)]">
          {price}
        </div>

        {/* Features */}
        <ul className="mt-6 space-y-2 text-sm text-[var(--text-secondary)]">
          {features.map((feature, i) => (
            <li key={i}>• {feature}</li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <Button
  className="w-full"
  onClick={() => {
    console.log("PRICING CLICK");
    router.push("/programs");
  }}
>
  {highlighted ? "Start Pro Plan" : "Get Started"}
</Button>
      </div>
    </div>
  );
}