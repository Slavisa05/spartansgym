import { trainers } from "@/data/trainers";
import TeamHomeCard from "../ui/TeamHomeCard";
import Button from "../ui/Button";

export default function TeamSection() {
  // Prva tri trenera iz data/ kao pregled; ceo tim je na /o-nama.
  const preview = trainers.slice(0, 3);

  return (
    <section className="px-[5vw] py-5 flex flex-col gap-6">
      <h2>Treneri</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {preview.map((trainer) => (
          <TeamHomeCard key={trainer.slug} title={trainer.name} image={trainer.img} />
        ))}
      </div>

      <Button
        href="/o-nama#treneri"
        text="pogledaj sve trenere"
        variant="secondary"
        className="self-start"
      />
    </section>
  );
}
