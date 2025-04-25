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
    <p className="text-gray-400 text-2xl">2,256,896</p>
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
  
    <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
      {review.map((item) => (
   <div
   key={item.id}
   className="border border-orange-400 bg-[#10153A] rounded-xl p-6 text-center"
 >
   <div className="w-40 h-40 mx-auto overflow-hidden rounded-full">
     <Image
       src={item.image}
       alt={item.name}
       width={160}
       height={160}
       className="object-cover w-full h-full"
     />
   </div>
 
     <p className="text-2xl font-semibold mt-4 bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">{item.name} </p>
 
   <div className="text-lg my-2">
     {Array.from({ length: 5 }, (_, i) => (
       <span
         key={i}
         className={i < item.rating ? "text-orange-400" : "text-gray-500"}
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
