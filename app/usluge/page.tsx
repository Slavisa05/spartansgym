import ServiceCard from "@/components/ui/ServiceCard"
import CTASection from "@/components/shared/CtaSection"
import { services } from "@/data/services"

export default function Services() {
    return(
        <main>
            <section className="px-[5vw] pt-[30vh] pb-10 min-h-screen w-full">
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.slug}
                            title={service.title}
                            desc={service.desc}
                            img={service.img}
                            paragraphs={service.paragraphs}
                            time={service.time}
                            price={service.price}
                            perTraining={service.perTraining}
                        />
                    ))}
                </div>
            </section>

            <CTASection title="Želite da krenete na neki program?" />
        </main>
    )
}
