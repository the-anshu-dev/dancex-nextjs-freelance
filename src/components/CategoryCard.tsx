"use client";

import { ImageCardProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ item }: { item: ImageCardProps }) {
  return (
    <Link href={item.link || "/"}>
      <div className="relative  aspect-video w-full cursor-pointer overflow-hidden rounded-xl">
        <Image
          src={item.img}
          alt={item.title}
          width={300}
          className="h-full w-full object-cover object-center opacity-50"
          height={200}
        />
        <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl">
          {item.title}
        </h3>
      </div>
    </Link>
  );
}
