import { Service } from "@/lib/types";
import ServicesCard from "./ServicesCard";
import Container from "./Container";

export default function ServicesList({ services }: { services: Service[] }) {
  return (
    <Container>
      <div className="overflow-hidden">
        <div className="grid -translate-x-[66%] grid-cols-[1fr,10fr,1fr] gap-4 md:-translate-x-1/4 md:grid-cols-[1fr,2fr,1fr]">
          {services.map((service, index) => (
            <ServicesCard key={index} service={service} />
          ))}
        </div>
      </div>
    </Container>
  );
}
