// import { cn } from "../lib/utils";
import React from "react";
// import Image from 'next/image';
import { BentoGrid, BentoGridItem } from "../component/ui/bendo-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function BentoGridDemo() {
  return (
    <BentoGrid className=" w-full">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          cover={item.cover}
          icon={item.icon}
          className={i === 4 || i === 5 ? "md:col-span-2 p-10 " : "folio-item"}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    cover: "https://d1yei2z3i6k35z.cloudfront.net/1970629/67b1aa692e566_Dowloadapp.jpg",
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    cover: "https://d1yei2z3i6k35z.cloudfront.net/1970629/67b1aa7079abe_8eurreurslvationslatralesB.jpg",
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    cover: "https://d1yei2z3i6k35z.cloudfront.net/1970629/67b1aaddbbc09_WarrenBuffett.jpg",
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    cover: "https://d1yei2z3i6k35z.cloudfront.net/1970629/67b1aa7bf1570_RealiseruneminiaturestylepodcastPRO.jpg",
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    cover: "https://d1yei2z3i6k35z.cloudfront.net/1970629/67b310c867ae6_Styleyomidenzel.jpg",
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    cover: "https://d1yei2z3i6k35z.cloudfront.net/1970629/67b310c867ae6_Styleyomidenzel.jpg",
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    cover: "https://d1yei2z3i6k35z.cloudfront.net/1970629/67b310c867ae6_Styleyomidenzel.jpg",
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];