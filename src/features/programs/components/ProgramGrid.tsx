import { ProgramCard } from "./ProgramCard";

const programs = [
  {
    title: "Titan Strength",
    description: "Build raw strength and muscle mass.",
    price: "$149",
    image: "/images/hero.jpg",
  },
  {
    title: "Shred Protocol",
    description: "Burn fat and get lean fast.",
    price: "$99",
    image: "/images/hero.jpg",
  },
  {
    title: "Elite Performance",
    description: "Maximize athletic performance.",
    price: "$199",
    image: "/images/hero.jpg",
  },
];

export function ProgramGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {programs.map((program, index) => (
        <ProgramCard key={index} {...program} />
      ))}
    </div>
  );
}