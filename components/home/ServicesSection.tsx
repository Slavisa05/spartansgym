import ServiceHomeCard from "../ui/ServiceHomeCard"

export default function ServicesSection() {
    return(
        <section className="py-5 px-[5vw] flex flex-col gap-6">
            <h2>Usluge</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <ServiceHomeCard
                    title="Personalni trening"
                    text="Trening 1 na 1 prilagođen vašem cilju, tempu i nivou forme."
                    index={1}
                    link="/usluge"
                />

                <ServiceHomeCard
                    title="Kondiciona priprema sportista"
                    text="Specifična priprema koja podiže performanse i smanjuje rizik od povrede."
                    index={2}       
                    link="/usluge"           
                />

                <ServiceHomeCard
                    title="Vođeni trening"
                    text="Grupni trening u motivišućoj atmosferi uz stručno vođenje."
                    index={3}
                    link="/usluge"
                />
            </div>
        </section>
    )
}