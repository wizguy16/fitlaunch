import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PricingCard } from "./PricingCard";

export function PricingSection() {
  return (
    <Section>
      <Container>

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            Pricing
          </h2>

          <p className="mt-4 text-[var(--text-secondary)]">
            Choose the plan that fits your goals and start transforming today.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          <PricingCard
            title="Starter"
            price="$49"
            description="Basic training access"
            features={[
              "Workout plans",
              "Basic tracking",
              "Community access",
            ]}
          />

          <PricingCard
            title="Pro"
            price="$99"
            description="Advanced performance system"
            highlighted
            features={[
              "Everything in Starter",
              "Advanced analytics",
              "Priority support",
            ]}
          />

          <PricingCard
            title="Elite"
            price="$149"
            description="Full transformation package"
            features={[
              "Everything in Pro",
              "1-on-1 coaching",
              "Custom plans",
            ]}
          />

        </div>

      </Container>
    </Section>
  );
}