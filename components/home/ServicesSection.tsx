import ServiceCard from "../ui/ServiceCard"

export default function ServicesSection() {
    return(
        <section className="py-5 px-[5vw] flex flex-col gap-6">
            <h2>Usluge</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <ServiceCard
                    title="Personalni trening"
                    desc="Trening 1 na 1 prilagođen vašem cilju, tempu i nivou forme."
                    img="/gym1.jpg"
                    paragraphs={[
                        "Personalni trening je osmišljen tako da svaki minut bude usmeren na vaš konkretan cilj: mršavljenje, povećanje snage, oblikovanje tela ili bolju kondiciju.",
                        "Trener prati tehniku izvođenja, koriguje pokrete i prilagođava opterećenje u realnom vremenu kako bi napredak bio bezbedan i konstantan.",
                        "Program se periodično menja u skladu sa rezultatima kako biste izbegli stagnaciju i ostali motivisani.",
                    ]}
                    time="60 min"
                    price="2.500 RSD po treningu"
                />

                <ServiceCard
                    title="Kondiciona priprema sportista"
                    desc="Specifična priprema koja podiže performanse i smanjuje rizik od povrede."
                    img="/markec.jpg"
                    paragraphs={[
                        "Kondiciona priprema je prilagođena sportu kojim se bavite i fazi sezone, uz fokus na eksplozivnost, izdržljivost, agilnost i stabilnost.",
                        "Trening plan prati vaša testiranja i učinak, tako da svaki ciklus daje merljiv napredak kada je najvažnije.",
                        "Poseban akcenat stavljamo na prevenciju povreda i kvalitet oporavka između intenzivnih treninga i utakmica.",
                    ]}
                    time="75 min"
                    price="3.000 RSD po treningu"
                />

                <ServiceCard
                    title="Vođeni trening"
                    desc="Grupni trening u motivišućoj atmosferi uz stručno vođenje."
                    img="/somi.jpg"
                    paragraphs={[
                        "Vođeni treninzi kombinuju kardio, snagu i funkcionalne vežbe u dinamičnom tempu koji održava fokus i energiju cele grupe.",
                        "Trener vodi svaku vežbu korak po korak, nudi alternative za različite nivoe kondicije i brine o pravilnoj tehnici.",
                        "Idealno rešenje za sve koji žele podršku zajednice i strukturu koja olakšava kontinuitet treninga.",
                    ]}
                    time="50 min"
                    price="800 RSD po treningu"
                />
            </div>
        </section>
    )
}