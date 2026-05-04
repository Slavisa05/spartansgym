import { trainers } from "@/data/trainers";
import TeamHomeCard from "../ui/TeamHomeCard";


interface GymTeamProps {
    gymSlug: string;
}

export default function GymTeam({ gymSlug }: GymTeamProps) {
    const gymTrainers = trainers.filter((trainer) =>
        trainer.gymSlugs.includes(gymSlug)
    );

    return(
        <section className="px-[5vw] py-10 flex flex-col gap-8">
            <h2>Treneri u ovoj teretani</h2>
            <div className="grid md:grid-cols-3 gap-4">
                {gymTrainers.map((trainer) => (
                    <TeamHomeCard
                        key={trainer.slug}
                        title={trainer.name}
                        image={trainer.img}
                    />
                ))}
            </div>
        </section>
    )
} 