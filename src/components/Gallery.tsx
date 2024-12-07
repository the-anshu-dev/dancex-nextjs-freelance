import { ImageCardProps } from "@/lib/types";
import ImageCard from "./ImageCard";
import Container from "./Container";

export default function Gallery({ items }: { items: ImageCardProps[] }) {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 px-2">
        {items.map((item, index) => (
          <ImageCard key={index} card={item} />
        ))}
      </div>
    </Container>
  );
}
