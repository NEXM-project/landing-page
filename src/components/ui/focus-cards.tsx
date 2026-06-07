"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type CardType = {
  name: string;
  image: string;
  imagePosition?: string;
  description?: string;
  designation?: string;
  address?: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-100 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
      )}
    >
      <Image
        src={card.image}
        alt={card.name}
        fill
        className={cn(
          "absolute inset-0 w-full h-full object-cover",
          card.imagePosition ?? "object-cover md:object-top",
        )}
      />
      <div className="absolute inset-0 bg-black/50 flex items-end py-8 px-4 pointer-events-none">
        <div
          className={cn(
            "transition-opacity duration-300",
            hovered === index ? "opacity-0" : "opacity-100",
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-200">
            {card.name}
          </div>
          {card.designation && (
            <div className="text-sm md:text-base text-neutral-300 mt-1">
              {card.designation}
            </div>
          )}
          {card.address && (
            <div className="text-xs md:text-sm text-neutral-300 mt-1">
              {card.address}
            </div>
          )}
        </div>
      </div>
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0",
        )}
      >
        <div className=" text-sm md:text-base font-medium bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-200">
          {card.description || card.name}
        </div>
      </div>
    </div>
  ),
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.name}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
