import { Service } from "@/lib/types";
import ServicesCard from "./ServicesCard";
import Container from "./Container";

export default function ServicesList({ services }: { services: Service[] }) {
  return (
    <Container>
      <div className="swiper">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-2">
          {services.map((service, index) => (
            <ServicesCard key={index} service={service} />
          ))}
        </div>
      </div>
    </Container>
  );
}
