import { services } from "@/data/services";
import ServiceHomeCard from "../ui/ServiceHomeCard";

interface GymServicesProps {
    gymSlug: string;
}

export default function GymServices({ gymSlug }: GymServicesProps) {
    const gymServices = services.filter((service) =>
        service.gymSlugs.includes(gymSlug)
    );

    return(
        <section className="px-[5vw] py-10 flex flex-col gap-8">
            <h2>Usluge u ovoj teretani</h2>
            <div className="grid md:grid-cols-3 gap-4">
                {gymServices.map((service, index) => (
                    <ServiceHomeCard
                        key={service.slug}
                        index={index + 1}
                        title={service.title}
                        text={service.desc}
                    />
                ))}
            </div>
        </section>
    )
} 