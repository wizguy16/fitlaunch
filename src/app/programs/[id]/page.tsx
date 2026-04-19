"use client";

import { programs, Program } from "@/data/programs";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { useSelectedProgram } from "@/hooks/useSelectedProgram";
import { StartProgramButton } from "@/features/programs/components/StartProgramButton";
type Props = {
  params: { id: string };
};

export default function ProgramPage({ params }: Props) {
    const { selectProgram } = useSelectedProgram(); // ✅ HERE

  const program: Program | undefined = programs.find(
  (p) => p.id === params.id
);

  if (!program) return notFound();

  return (
    <main className="bg-background min-h-screen">

      <Section>
        <Container>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-default)]">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Content */}
            <div>

              <h1 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
                {program.title}
              </h1>

              <p className="mt-4 text-[var(--text-secondary)]">
                {program.description}
              </p>

              <div className="mt-6 text-2xl font-bold text-[var(--color-primary)]">
                {program.price}
              </div>

              <div className="mt-8">
                <StartProgramButton program={program} />

              </div>

            </div>

          </div>

        </Container>
      </Section>

    </main>
  );
}