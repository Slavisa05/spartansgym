import type { Metadata } from 'next'
import { services } from "@/data/services"
import ServiceCard from "@/components/ui/ServiceCard"
import CTASection from "@/components/shared/CtaSection"

export const metadata: Metadata = {
  title: 'Usluge | Spartans Gym — Personalni Treninzi, Školice i Rehabilitacija',
  description: 'Personalni treninzi, kondiciona priprema, školica sporta, plivanje, joga, pilates i individualna ishrana. Programi za sve uzraste i ciljeve u Spartans Gymu.',
}

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
