import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/features/marketing/hero/Hero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ProgramGrid } from "@/features/programs/components/ProgramGrid";
import { PricingSection } from "@/features/pricing/components/PricingSection";
import { TestimonialsSection } from "@/features/testimonials/components/TestimonialsSection";
import { CTASection } from "@/features/cta/components/CTASection";



export default function Page() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />

      <Section>
  <Container>

    {/* SECTION HEADER */}
    <div className="max-w-2xl mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
        Training Programs
      </h2>

      <p className="mt-4 text-[var(--text-secondary)]">
        Choose from elite-level programs designed to build strength, burn fat, and maximize performance.
      </p>
    </div>

    {/* GRID */}
    <ProgramGrid />

  </Container>
</Section>

 <PricingSection />

 <TestimonialsSection />

 <CTASection />
    </main>
  );
}