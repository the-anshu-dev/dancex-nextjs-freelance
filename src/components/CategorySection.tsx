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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-2">
        {categories.map((category, index) => (
          <CategoryCard key={index} item={category} />
        ))}
      </div>
      <div>
        <button className="bg-background-gradient px-8 py-2 rounded-full md:rounded-xl font-semibold text-lg my-16 mx-auto block">
          View all
        </button>
      </div>
    </Container>
  );
}
