"use client";

import { ImageCardProps } from "@/lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CategoryCard({ item }: { item: ImageCardProps }) {
  const router = useRouter();
  return (
    <div
      className="w-full aspect-video relative overflow-hidden rounded-xl cursor-pointer"
      onClick={() => router.push(item.link || "/")}
    >
      <Image
        src={item.img}
        alt={item.title}
        width={300}
        className="w-full h-full object-cover object-center opacity-50"
        height={200}
      />
      <h3 className="text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {item.title}
      </h3>
    </div>
  );
}
