import { gyms } from "@/data/gym";

export default function GymPage({ params }: { params: { slug: string } }) {
  const gym = gyms.find((g) => g.slug === params.slug);

  return (
    <TestimonialSlider testimonials={gym.testimonials} />
  );
}


