"use client";

import { Button } from "@/components/ui/Button";
import { useSelectedProgram } from "@/hooks/useSelectedProgram";
import { Program } from "@/data/programs";

export function StartProgramButton({ program }: { program: Program }) {
  const { selectProgram } = useSelectedProgram();

  return (
    <Button
      onClick={() => {
        console.log("CLICK WORKS");
        selectProgram(program);
      }}
    >
      Start Program
    </Button>
  );
}