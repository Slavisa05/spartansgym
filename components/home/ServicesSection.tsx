import { services } from "@/data/services";
import ServiceHomeCard from "../ui/ServiceHomeCard";

export default function ServicesSection() {
  // Prve tri usluge iz data/ kao pregled; sve su na /usluge.
  const preview = services.slice(0, 3);

  return (
    <section className="py-5 px-[5vw] flex flex-col gap-6">
      <h2>Usluge</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {preview.map((service, i) => (
          <ServiceHomeCard
            key={service.slug}
            index={i + 1}
            title={service.title}
            text={service.desc}
            link="/usluge"
          />
        ))}
      </div>
    </section>
  );
}
