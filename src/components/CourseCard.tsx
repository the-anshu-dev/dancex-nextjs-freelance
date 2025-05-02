import { Course } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={course.link}>

      <div className="w-full md:p-4 mt-4 md:mt-0 sm:p-2 ">
        <div className="aspect-square w-full ">
          <Image
            src={course.img}
            className="h-full w-full rounded-xl object-cover object-center"
            alt={course.title}
            width={400}
            height={600}
          />
        </div>
        <div className="mt-4 py-2">
          <div>

            <h3 className="overflow-hidden text-ellipsis text-wrap bg-text-gradient bg-clip-text text-xl font-semibold text-transparent max-sm:line-clamp-2 sm:text-nowrap">
              {course.title}
            </h3>

            <p className="w-10/12 overflow-hidden text-ellipsis font-medium text-textSecondary max-sm:line-clamp-2 sm:text-nowrap">
              {course.description}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between">
            <p className="text-nowrap font-semibold">Rs {course.price}</p>
            <p>{course?.rating && "⭐".repeat(course.rating)}</p>
          </div>

          <div>

          </div>    
            </div>
      </div>
      
    </Link>
  

  );
}
