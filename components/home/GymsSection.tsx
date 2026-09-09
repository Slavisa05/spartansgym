import { openGyms } from "@/data/gym";
import GymCard from "../ui/GymCard";

export default function GymSection() {
  // Prikazujemo samo otvorene teretane; "coming-soon" lokacije se ne pojavljuju ovde.
  const list = openGyms();

  return (
    <section id="teretane" className="px-[5vw] py-5 flex flex-col gap-6">
      <h2>Teretane</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {list.map((gym) => (
          <GymCard
            key={gym.slug}
            title={gym.shortName}
            text={gym.tagline}
            image={gym.img}
            link={`/teretane/${gym.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
