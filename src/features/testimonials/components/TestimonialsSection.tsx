import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  return (
    <Section>
      <Container>

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            Real Results
          </h2>

          <p className="mt-4 text-[var(--text-secondary)]">
            Thousands have transformed their bodies and performance using our system.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

          <TestimonialCard
            name="Jordan M."
            result="Lost 25 lbs in 12 weeks"
            quote="This completely changed how I train. The structure is insane."
          />

          <TestimonialCard
  name="Alex R."
  className="bg-[var(--color-surface-2)] border-[var(--color-primary)] shadow-strong scale-[1.02]"
            result="Gained 10 lbs muscle"
            quote="Best program I’ve ever followed. Everything just works."
          />

          <TestimonialCard
            name="Chris D."
            result="Shredded in 8 weeks"
            quote="I’ve tried everything. This is the only one that stuck."
          />

        </div>

      </Container>
    </Section>
  );
}