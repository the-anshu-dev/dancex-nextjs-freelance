import { Category } from "@/lib/types";
import CategoryItem from "./CategoryItem";

export default function CategoryList({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <ul
      className="flex w-full gap-4 overflow-x-auto overflow-y-hidden py-8 px-3  "
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {categories.map((category) => (
        <li key={category.name} className="group">
          <CategoryItem category={category} />
        </li>
      ))}
    </ul>
  );
}
