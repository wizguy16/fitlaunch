import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <Section className="py-24">
      <Container>

        <div className="relative rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-default)] bg-[var(--color-surface-3)] p-10 md:p-16 text-center">

          {/* Glow */}
          <div className="absolute inset-0 bg-[var(--color-primary)] opacity-10 blur-3xl" />

          {/* Content */}
          <div className="relative">

            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
              Ready to Transform Your Body?
            </h2>

            <p className="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto">
              Join thousands who have already taken control of their training and results.
            </p>

            <div className="mt-8 flex justify-center">
              <Button className="px-8 py-4 text-lg">
                Start Your Program
              </Button>
            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}