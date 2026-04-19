
export type Program = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
};

export const programs: Program[] = [
  {
    id: "titan-strength",
    title: "Titan Strength",
    description: "Build raw strength and muscle mass.",
    price: "$149",
    image: "/images/hero.jpg",
  },
  {
    id: "shred-protocol",
    title: "Shred Protocol",
    description: "Burn fat and get lean fast.",
    price: "$99",
    image: "/images/hero.jpg",
  },
  {
    id: "elite-performance",
    title: "Elite Performance",
    description: "Maximize athletic performance.",
    price: "$199",
    image: "/images/hero.jpg",
  },
];