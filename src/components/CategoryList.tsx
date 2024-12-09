import { Category } from "@/lib/types";
import CategoryItem from "./CategoryItem";

export default function CategoryList({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <ul className="flex w-full gap-4 overflow-auto p-4">
      {categories.map((category) => (
        <li key={category.name} className="group">
          <CategoryItem category={category} />
        </li>
      ))}
    </ul>
  );
}
