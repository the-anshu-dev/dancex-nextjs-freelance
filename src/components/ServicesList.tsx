import { Service } from "@/lib/types";
import ServicesCard from "./ServicesCard";

export default function ServicesList({ services }: { services: Service[] }) {
  return (
    <div className="overflow-auto">
      <div
        className="flex gap-4"
        style={{
          width: (services.length * 100) / 2 + "%",
          transform: "translateX(-" + 100 / services.length / 2 + "%)",
        }}
      >
        {services.map((service, index) => (
          <ServicesCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}
