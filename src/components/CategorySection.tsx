import { ImageCardProps } from "@/lib/types";
import CategoryCard from "./CategoryCard";
import Container from "./Container";

export default function CategorySection({
  categories,
}: {
  categories: ImageCardProps[];
}) {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 px-2 md:grid-cols-4">
        {categories.map((category, index) => (
          <CategoryCard key={index} item={category} />
        ))}
      </div>
      <div>
        <button className="mx-auto my-16 block rounded-full bg-background-gradient px-8 py-2 text-lg font-semibold md:rounded-xl">
          View all
        </button>
      </div>
    </Container>
  );
}
