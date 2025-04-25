import React from "react";
import Image from "next/image";
import { review } from "@/lib/server";

const ReviewContainer = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-12 mt-10">

  <div className="flex flex-row w-full justify-center gap-20 ">
  <div className="flex flex-col items-center p-4">
    <h2 className="text-8xl font-extrabold">4.5</h2>
    <div className="flex text-yellow-400 text-2xl ">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
    <p className="text-gray-400 text-lg">2,256,896</p>
  </div>

  <div className="w-full max-w-xl space-y-4">
    {[5, 4, 3, 2, 1].map((star, idx) => {
      const percentage = [80, 40, 20, 10, 5][idx];
      return (
        <div key={star} className="flex items-center gap-3">
          <span className="w-4 text-2xl">{star}</span>
          <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      );
    })}
  </div>
  </div>
  
    <div className="flex 1 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
      {review.map((item) => (
        <div
          key={item.id}
          className="border border-orange-400 bg-[#10153A] rounded-xl p-6  text-center"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={100}
            height={100}
            className="mx-auto rounded-full mb-4"
          />
          <h4 className="text-lg font-semibold">
            <span className="text-[#F14E4E]">{item.name.split(" ")[0]}</span>{" "}
            <span className="text-[#F79E1B]">{item.name.split(" ")[1]}</span>
          </h4>
          <div className="text-lg my-2">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={
                  i < item.rating ? "text-orange-400" : "text-gray-500"
                }
              >
                ★
              </span>
            ))}
          </div>
          <p className="text-gray-300 text-sm">{item.review}</p>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default ReviewContainer;
