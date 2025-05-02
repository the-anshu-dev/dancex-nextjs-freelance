"use client";

import { Category } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryItem({ category }: { category: Category }) {
  const pathname = usePathname();
  return (
    <Link
      href={category.link}
      className="flex items-center justify-center gap-2 "
    >
      <div
        className={`w-8 md:w-10 rounded-md p-1 ${
          pathname === category.link
            ? "border-[1px] border-primary"
            : "group-first:border-[1px] group-first:border-primary"
        }`}
      >
        <Image
          src={category.icon}
          alt={category.name}
          width={40}
          className="h-full w-full object-cover object-center"
          height={40}
        />
      </div>
      <span
        className={`font-poppins font-semibold text-base ${
          pathname === category.link
            ? "text-primary"
            : "group-first:text-primary"
        }`}
      >
        {category.name}
      </span>
    </Link>
  );
}
