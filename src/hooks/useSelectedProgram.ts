"use client";

import { useEffect, useState } from "react";
import { Program } from "@/data/programs";

export function useSelectedProgram() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("selectedProgram");
    if (stored) {
      setSelectedProgram(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage
  const selectProgram = (program: Program) => {
    localStorage.setItem("selectedProgram", JSON.stringify(program));
    setSelectedProgram(program);
  };

  return {
    selectedProgram,
    selectProgram,
  };
}