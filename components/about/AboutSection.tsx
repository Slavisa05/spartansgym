import { History, Target, Eye, Heart, Shield, Users, Star } from "lucide-react"

// ─── Istorija ────────────────────────────────────────────────────────────────

function HistorySection() {
    const milestones = [
        { year: "2016", text: "Otvaranje teretane na 35m² – vođeni i personalni treninzi isključivo za žene." },
        { year: "2017", text: "Na insistiranje muškaraca počinjemo i sa radom sa njima – teretana postaje mešovita." },
        { year: "2020", text: "Otvaranje teretane u Lajkovcu" },
        { year: "2023", text: "Otvaranje 3. teretane teretane slobodnog tipa" },
        { year: "Danas", text: "Rastuća zajednica rekreativaca i sportista koji svakodnevno napreduju zajedno." },
    ]

    return (
        <div className="py-16">
            <div className="flex items-center gap-3 mb-4">
                <History className="text-accent" size={28} />
                <span className="text-accent uppercase text-sm font-semibold tracking-widest">Naša priča</span>
            </div>
            <h2 className="mb-10">Istorija teretane</h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <p className="text-text-secondary leading-relaxed text-lg">
                    Noviteti u treningu koji su stigli na Ub davne 2016. godine su mnogi vežbači prepoznali.
                    Teretana se tada prostirala na celih 35 metara kvadratnih u kojoj su se radili vođeni i
                    personalni treninzi isključivo za žene. Kasnije, na insistiranje određenog broja muškaraca,
                    počelo se i sa radom sa njima. Ciljna grupa tada su bili rekreativci koji nikada pre toga
                    nisu imali iskustva u radu sa trenerom u teretani — što se pokazalo kao pun pogodak.
                </p>

                <div className="flex flex-col gap-0">
                    {milestones.map((m, i) => (
                        <div key={i} className="flex gap-5">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-accent mt-1.5 shrink-0" />
                                {i < milestones.length - 1 && (
                                    <div className="w-px flex-1 bg-border mt-1" />
                                )}
                            </div>
                            <div className="pb-8">
                                <span className="text-accent font-bold font-display text-xl">{m.year}</span>
                                <p className="text-text-secondary mt-1 leading-relaxed">{m.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// ─── Misija + Vizija ─────────────────────────────────────────────────────────

function MissionVisionSection() {
    const cards = [
        {
            icon: <Target size={32} className="text-accent" />,
            label: "Misija teretane",
            text: "Naša misija je da svima omogućimo zdrav i aktivan život kroz kvalitetne i personalizovane treninge. Posvećeni smo motivaciji članova i pružanju stručnog vođenja na svakom koraku. Cilj nam je da svaka poseta teretani bude korak ka boljoj fizičkoj i mentalnoj formi.",
        },
        {
            icon: <Eye size={32} className="text-accent" />,
            label: "Vizija teretane",
            text: "Težimo da postanemo prepoznatljiva mreža teretana u kojoj svako može da pronađe svoj put do zdravlja i snage. Vizija nam je kreirati zajednicu koja inspiriše, podržava i povezuje ljude kroz sport. Želimo biti mesto gde se kvalitet, inovacija i motivacija spajaju.",
        },
    ]

    return (
        <div className="py-16 border-t border-border">
            <div className="grid md:grid-cols-2 gap-6">
                {cards.map((card, i) => (
                    <div
                        key={i}
                        className="bg-bg-secondary border border-border rounded-2xl p-8 flex flex-col gap-5"
                    >
                        <div className="w-14 h-14 rounded-xl bg-bg-tertiary flex items-center justify-center">
                            {card.icon}
                        </div>
                        <h3>{card.label}</h3>
                        <p className="text-text-secondary leading-relaxed">{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

// ─── Vrednosti ────────────────────────────────────────────────────────────────

function ValuesSection() {
    const values = [
        {
            icon: <Heart size={28} className="text-accent" />,
            title: "Posvećenost",
            text: "Svaki trening je prilika da se pokažete sebi da možete više. Posvećenost je osnova svakog napretka.",
        },
        {
            icon: <Shield size={28} className="text-accent" />,
            title: "Disciplina",
            text: "Rezultati dolaze od konzistentnosti. Disciplina nije kazna — to je put do slobode.",
        },
        {
            icon: <Users size={28} className="text-accent" />,
            title: "Zajedništvo",
            text: "Naša teretana je zajednica. Ovde se motivišemo, podržavamo i slavimo zajedno.",
        },
        {
            icon: <Star size={28} className="text-accent" />,
            title: "Kvalitet",
            text: "Sigurnost, profesionalnost i stručnost su stubovi našeg rada. Ne pravimo kompromise.",
        },
    ]

    return (
        <div className="py-16 border-t border-border">
            <div className="flex items-center gap-3 mb-4">
                <span className="text-accent uppercase text-sm font-semibold tracking-widest">Šta nas pokreće</span>
            </div>
            <h2 className="mb-10">Vrednosti teretane</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {values.map((v, i) => (
                    <div
                        key={i}
                        className="bg-bg-secondary border border-border rounded-2xl p-6 flex flex-col gap-4"
                    >
                        <div className="w-12 h-12 rounded-xl bg-bg-tertiary flex items-center justify-center">
                            {v.icon}
                        </div>
                        <h3 className="text-lg">{v.title}</h3>
                        <p className="text-text-secondary leading-relaxed text-sm">{v.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default function AboutSection() {
    return (
        <section className="px-[5vw]">
            <HistorySection />
            <MissionVisionSection />
            <ValuesSection />
        </section>
    )
}
