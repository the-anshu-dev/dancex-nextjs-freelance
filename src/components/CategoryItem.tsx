"use client";

import { Category } from "@/lib/types";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function CategoryItem({ category }: { category: Category }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <button onClick={()=>router.push(category.link)} className="flex justify-center items-center gap-2">
      <div
        className={`w-8 rounded-md p-1 ${
          pathname === category.link
            ? "border-[1px] border-primary"
            : "group-first:border-[1px] group-first:border-primary"
        }`}
      >
        <Image
          src={category.icon}
          alt={category.name}
          width={40}
          className="w-full h-full object-cover object-center"
          height={40}
        />
      </div>
      <span
        className={`text-base font-poppins ${
          pathname === category.link ? "text-primary" : "group-first:text-primary"
        }`}
      >
        {category.name}
      </span>
    </button>
  );
}
