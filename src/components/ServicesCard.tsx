import { gradientColors } from "@/lib/server";
import { Service } from "@/lib/types";
import Image from "next/image";

export default function ServicesCard({ service }: { service: Service }) {
  const gradient =
    gradientColors[Math.floor(Math.random() * gradientColors.length)];
  return (
    <div className="relative aspect-video h-full w-full overflow-hidden rounded-xl">
      <Image
        src={service.img}
        alt={service.title}
        height={400}
        width={600}
        className="h-full w-full object-cover"
      />
      <div
        className={`absolute bottom-0 h-full w-full`}
        style={{ background: gradient }}
      ></div>
      <div className="absolute bottom-5 left-1/2 w-10/12 -translate-x-1/2 text-nowrap text-xl font-semibold">
        <h3 className="text-xl">{service.title}</h3>
        <p className="text-xs">{service.subtitle}</p>
      </div>
    </div>
  );
}
