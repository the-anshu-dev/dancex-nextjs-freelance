import { Course } from "@/lib/types";
import Image from "next/image";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="p-4 sm:p-2 w-full">
      <div className="w-full aspect-square">
        <Image
          src={course.img}
          className="w-full h-full object-cover object-center rounded-xl"
          alt={course.title}
          width={400}
          height={600}
        />
      </div>
      <div className="mt-4 py-2">
        <div>
          <h3 className="text-xl text-ellipsis font-semibold bg-text-gradient bg-clip-text text-transparent overflow-hidden sm:text-nowrap text-wrap max-sm:line-clamp-2">
            {course.title}
          </h3>
          <p className="sm:text-nowrap font-medium text-ellipsis overflow-hidden w-10/12 text-textSecondary max-sm:line-clamp-2">
            {course.description}
          </p>
        </div>
        <div className="flex justify-between items-center mt-4 flex-wrap">
          <p className="font-semibold text-nowrap">Rs {course.price}</p>
          <p>{course?.rating && "⭐".repeat(course.rating)}</p>
        </div>
      </div>
    </div>
  );
}
