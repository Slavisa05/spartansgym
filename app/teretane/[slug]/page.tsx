import { gyms, getGymTestimonials } from "@/data/gym";
import { notFound } from "next/navigation";
import type { Metadata } from 'next'
import JsonLd from "@/components/seo/JsonLd";
import { gymSchema, breadcrumbSchema } from "@/components/seo/schema";
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

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return gyms.map((gym) => ({ slug: gym.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const gym = gyms.find((g) => g.slug === slug);

  if (!gym) {
    return {
      title: "Teretana nije pronađena",
      description: "Traženi objekat nije pronađen.",
    };
  }

  const description =
    gym.about?.[0] ??
    gym.tagline ??
    "Savremeni trening, proverena oprema i stručan tim trenera u Spartans Gym-u.";

  return {
    title: gym.name,
    description,
    alternates: { canonical: `/teretane/${gym.slug}` },
    openGraph: {
      title: `${gym.name} | Spartans Gym`,
      description,
      url: `/teretane/${gym.slug}`,
      images: [{ url: gym.img }],
    },
  };
}

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

  const breadcrumb = breadcrumbSchema([
    { name: "Početna", path: "/" },
    { name: gym.shortName, path: `/teretane/${gym.slug}` },
  ]);

  if (gym.type === "coming-soon") {
    return (
      <main>
        <JsonLd data={breadcrumb} />
        <GymComingSoon name={gym.name} img={gym.img} />
      </main>
    );
  }

  return (
    <main>
      <JsonLd data={gymSchema(gym)} />
      <JsonLd data={breadcrumb} />
      <GymHero name={gym.name} img={gym.img} />
      <GymInfo
        map={gym.map!}
        address={gym.address!}
        openTime={gym.openTime!}
        closeTime={gym.closeTime!}
        workingHours={gym.workingHours}
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


