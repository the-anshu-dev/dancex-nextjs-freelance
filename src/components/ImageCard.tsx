"use client";

import { ImageCardProps } from "@/lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ImageCard({ card }: { card: ImageCardProps }) {
  const router = useRouter();
  return (
    <div
      className="w-full aspect-[1/1.3] relative cursor-pointer overflow-hidden rounded-lg px-4 sm:px-2"
      onClick={() => router.push(card.link || "/")}
    >
      <Image
        src={card.img}
        className="w-full h-full object-cover object-center rounded-lg"
        alt={card.title}
        width={400}
        height={600}
      />
      <div className="absolute w-full bg-image-gradient h-[90%] bottom-0"></div>
      <h3 className="absolute bottom-5 left-1/2 -translate-x-1/2 text-nowrap font-semibold text-xl">{card.title}</h3>
    </div>
  );
}
