import { CustomerStory } from "@/lib/types";
import Image from "next/image";

export default function StoryCard({ story }: { story: CustomerStory }) {
  return (
     <div className="flex flex-col gap-4 bg-white rounded-md p-5 shadow-md h-full">
      <div className="flex items-start justify-between">
    {/* <div className="flex flex-col gap-2 bg-white p-2">
      <div className="flex items-start justify-between"> */}
        <div className="aspect-square w-10">
          <Image
            src={story.img}
            alt=""
            className="h-full w-full object-cover"
            width={100}
            height={100}
          />
        </div>
        <div className="text-sm">
          <p>{"⭐".repeat(story.rating)}</p>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-black">{story.name}</h3>
      <p className="text-sm text-black">{story.review}</p>

    </div>
  );
}
