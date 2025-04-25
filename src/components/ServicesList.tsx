// 'use client'
// import { Service } from "@/lib/types";
// import ServicesCard from "./ServicesCard";
// import Container from "./Container";

// export default function ServicesList({ services }: { services: Service[] }) {
//   return (
//     <Container className="px-0">
//       <div className="overflow-hidden">
//         <div className="grid -translate-x-[66%] grid-cols-[1fr,10fr,1fr] gap-4 md:-translate-x-1/4 md:grid-cols-[1fr,2fr,1fr]">
//           {services.map((service, index) => (
//             <ServicesCard key={index} service={service} />
//           ))}
//         </div>
//       </div>
//     </Container>
//   );
// }


'use client'

import { Service } from "@/lib/types";
import ServicesCard from "./ServicesCard";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ServicesList({ services }: { services: Service[] }) {
  return (
    <Container className="px-0">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        spaceBetween={30}
        className="mySwiper"
      >
        {services.map((service, index) => (
          <SwiperSlide
            key={index}
            className="!w-[90%] md:!w-[60%] xl:!w-[50%] transition-all duration-300"
          >
            <ServicesCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
