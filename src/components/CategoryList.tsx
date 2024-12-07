import { Category } from "@/lib/types";
import CategoryItem from "./CategoryItem";

export default function CategoryList({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <ul className="flex p-4 gap-4 w-full overflow-auto">
      {categories.map((category) => (
        <li key={category.name} className="group">
          <CategoryItem category={category} />
        </li>
      ))}
    </ul>
  );
}
