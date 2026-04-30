import ServiceCard from "../ui/ServiceCard"

export default function ServicesSection() {
    return(
        <section className="py-5 px-[5vw] flex flex-col gap-6">
            <h2>Usluge</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <ServiceCard 
                    index={1}
                    title="Personalni trening"
                    text="Naši personalni treninzi su prilagođeni vašim ciljevima, nivou kondicije i tempu napretka. Trenirajte sa iskusnim trenerom koji prati svaki vaš korak i motiviše vas da postignete maksimum." 
                />

                <ServiceCard 
                    index={2}
                    title="Kondiciona priprema sportista"
                    text="Naša kondiciona priprema sportista osmišljena je da odgovori na specifične zahteve vašeg sporta i nivoa forme. Radite sa stručnjacima koji prate svaki detalj vašeg razvoja i vode vas ka vrhunskoj formi onda kada je najpotrebnije." 
                />

                <ServiceCard
                    index={3} 
                    title="Vođeni trening"
                    text="Pridružite se dinamičnim vođenim treninzima i uživajte u motivaciji zajednice. Od kardio treninga do funkcionalnog vežbanja, svaki čas je prilika za zabavu i napredak." 
                />
            </div>
        </section>
    )
}