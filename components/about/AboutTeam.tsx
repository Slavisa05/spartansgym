import TeamCard from "../ui/TeamCard"
import { trainers } from "@/data/trainers"

export default function AboutTeam() {
    return(
        <section id="treneri" className="px-[5vw] py-10 flex flex-col gap-8">
            <h2>Upoznajte naš tim</h2>
            <div className="flex flex-col items-center gap-10">
                {trainers.map((trainer) => (
                    <TeamCard
                        key={trainer.slug}
                        title={trainer.name}
                        role={trainer.role}
                        img={trainer.img}
                        paragraphs={trainer.desc}
                        bulletPoints={trainer.bulletPoints}
                        instagram={trainer.instagram}
                        phone={trainer.phone}
                    />
                ))}
            </div>
        </section>
    )
}
