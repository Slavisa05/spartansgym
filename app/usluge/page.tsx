import type { Metadata } from 'next'
import { services } from "@/data/services"
import ServiceCard from "@/components/ui/ServiceCard"
import CTASection from "@/components/shared/CtaSection"

export const metadata: Metadata = {
  title: 'Usluge — Personalni Treninzi, Školice i Rehabilitacija',
  description: 'Personalni treninzi, kondiciona priprema, školica sporta, plivanje, joga, pilates i individualna ishrana. Programi za sve uzraste i ciljeve u Spartans Gym-u.',
  alternates: { canonical: '/usluge' },
}

export default function Services() {
    return(
        <main>
            <section className="px-page pt-page pb-10 min-h-screen w-full">
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
                            priceOptions={service.priceOptions}
                        />
                    ))}
                </div>
            </section>

            <CTASection title="Želite da krenete na neki program?" />
        </main>
    )
}
