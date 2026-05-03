import { gyms } from "@/data/gym";
import { notFound } from "next/navigation";
import GymHero from "@/components/gym/GymHero";
import GymInfo from "@/components/gym/GymInfo";
import GymAbout from "@/components/gym/GymAbout";

export default async function GymPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const gym = gyms.find((g) => g.slug === slug);

  if (!gym) {
    notFound();
  }

  return (
    <main>
      <GymHero name={gym.name} img={gym.img} />
      <GymInfo
        map={gym.map}
        address={gym.address}
        openTime={gym.openTime}
        closeTime={gym.closeTime}
        phone={gym.phone}
      />
      <GymAbout text={gym.about} />
    </main>
  );
}


