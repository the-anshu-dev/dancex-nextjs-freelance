"use client";

import { ImageCardProps } from "@/lib/types";
import Image from "next/image";

export default function ImageCard({ card }: { card: ImageCardProps }) {
  return (
    <div className="relative aspect-[1/1.3] w-full cursor-pointer overflow-hidden rounded-lg  px-4 sm:px-2 ">
      <Image
        src={card.img}
        className="h-full w-full rounded-lg object-cover object-center"
        alt={card.title}
        width={400}
        height={600}
      />
      <div className="absolute bottom-0 h-[90%] w-full bg-image-gradient"></div>
      <h3 className="absolute bottom-5 left-1/2 -translate-x-1/2 text-nowrap text-xl font-semibold">
        {card.title}
      </h3>
    </div>
  );
}
