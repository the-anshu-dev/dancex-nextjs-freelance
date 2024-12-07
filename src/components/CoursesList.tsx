import { Course } from "@/lib/types";
import CourseCard from "./CourseCard";
import Container from "./Container";

export default function CoursesList({ courses }: { courses: Course[] }) {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 mt-4 p-4">
        {courses.map((course) => (
          <CourseCard course={course} key={course.title} />
        ))}
      </div>
    </Container>
  );
}
