import { Course } from "@/lib/types";
import CourseCard from "./CourseCard";
import Container from "./Container";

export default function FeaturedServices({ services }: { services: Course[] }) {
  return (
    <Container>
      <div className="grid grid-cols-1 p-2 md:grid-cols-4">
        {services.map((service, index) => (
          <CourseCard key={index} course={service} />
        ))}
      </div>
    </Container>
  );
}
