"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="w-full border-b border-[var(--border-subtle)] bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <Container>

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="text-lg font-bold text-[var(--text-primary)]">
            FitLaunch
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8 text-[var(--text-secondary)]">
            <a href="#" className="hover:text-[var(--text-primary)] transition">
              Programs
            </a>
            <a href="#" className="hover:text-[var(--text-primary)] transition">
              Pricing
            </a>
            <a href="#" className="hover:text-[var(--text-primary)] transition">
              About
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button variant="ghost">Login</Button>
            <Button>Get Started</Button>
          </div>

        </div>

      </Container>
    </header>
  );
}