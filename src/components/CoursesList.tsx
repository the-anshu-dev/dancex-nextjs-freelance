import { Course } from "@/lib/types";
import CourseCard from "./CourseCard";
import Container from "./Container";
import { useState, useEffect } from "react";

export default function CoursesList({ courses }: { courses: Course[] }) {

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const visibleCourses =
    !isMobile || showAll ? courses : courses.slice(0, 4);

  return (
    <Container>
      <div className="grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {visibleCourses.map((course) => (
          <CourseCard course={course} key={course.title} />
        ))}
      </div>
      {isMobile && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mx-auto my-8 block w-min text-nowrap rounded-full bg-background-gradient px-10 py-2 text-lg font-semibold"
        >
          View all
        </button>
      )}

    </Container>
  );
}
