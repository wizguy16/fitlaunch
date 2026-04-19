"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <Section spacing="xl">
      <Container>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT: TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >

            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight">
              Build Strength. Burn Fat. Perform at Your Peak.
            </h1>

            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-xl">
              Elite-level training programs designed to transform your physique and performance.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Button>Start Training</Button>
              <Button variant="ghost">View Programs</Button>
            </div>

          </motion.div>

          {/* RIGHT: VISUAL */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >

            {/* Glow */}
            <div className="absolute -inset-10 bg-[var(--color-primary)] opacity-20 blur-3xl rounded-full" />

            {/* Image container */}
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-default)] shadow-strong">

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

              {/* Image */}
              <img
                src="/images/hero.jpg"
                alt="Fitness training"
                className="w-full h-[450px] object-cover transition-transform duration-500 hover:scale-105"
              />

            </div>

          </motion.div>

        </div>

      </Container>
    </Section>
  );
}