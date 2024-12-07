import { gradientColors } from "@/lib/server";
import { Service } from "@/lib/types";
import Image from "next/image";

export default function ServicesCard({ service }: { service: Service }) {
  const gradient =
    gradientColors[Math.floor(Math.random() * gradientColors.length)];
  return (
    <div className="w-full aspect-video relative h-full rounded-xl overflow-hidden">
      <Image
        src={service.img}
        alt={service.title}
        height={400}
        width={600}
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute w-full bottom-0 h-full`}
        style={{ background: gradient }}
      ></div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-nowrap w-10/12 font-semibold text-xl">
        <h3 className="text-xl">{service.title}</h3>
        <p className="text-xs">{service.subtitle}</p>
      </div>
    </div>
  );
}
