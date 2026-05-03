import { Testimonial } from "@/types/testimonial";

export interface Gym {
  slug: string;
  name: string;
  // ...ostala polja...
  testimonials: Testimonial[];
}

export const gyms: Gym[] = [
  {
    slug: "beograd",
    name: "Spartans Gym Beograd",
    testimonials: [
      {
        id: 1,
        name: "Nikola M.",
        gym: "Spartans Gym Beograd",
        text: "Odlični treninzi!",
        rating: 5,
      },
    ],
  },
];