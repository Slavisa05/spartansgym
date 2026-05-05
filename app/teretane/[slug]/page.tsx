import { gyms, getGymTestimonials } from "@/data/gym";
import { notFound } from "next/navigation";
import GymHero from "@/components/gym/GymHero";
import GymInfo from "@/components/gym/GymInfo";
import GymAbout from "@/components/gym/GymAbout";
import GymGallery from "@/components/gym/GymGallery";
import GymTestimonials from "@/components/gym/GymTestimonials";
import GymTeam from "@/components/gym/GymTeam";
import GymServices from "@/components/gym/GymServices";
import GymPricing from "@/components/gym/GymPricing";
import GymComingSoon from "@/components/gym/GymComingSoon";
import CTASection from "@/components/shared/CtaSection";

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

  if (gym.type === "coming-soon") {
    return (
      <main>
        <GymComingSoon name={gym.name} img={gym.img} />
      </main>
    );
  }

  return (
    <main>
      <GymHero name={gym.name} img={gym.img} />
      <GymInfo
        map={gym.map!}
        address={gym.address!}
        openTime={gym.openTime!}
        closeTime={gym.closeTime!}
        phone={gym.phone!}
      />
      <GymAbout text={gym.about!} />
      <GymGallery images={gym.images!} />
      <GymTestimonials testimonials={getGymTestimonials(gym)} />
      <GymTeam gymSlug={gym.slug} />
      {gym.type === "free" ? (
        <GymPricing pricing={gym.pricing ?? []} />
      ) : (
        <GymServices gymSlug={gym.slug} />
      )}
      <CTASection title={`Želite da se upišete u ${gym.name}?`} />
    </main>
  );
}


