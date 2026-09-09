import { Testimonial } from "@/types/testimonial";
import {
  MIN_TESTIMONIALS_TO_SHOW,
  publishableTestimonials,
} from "@/data/testimonials";
import TestimonialSlider from "../shared/TestimonialSlider";

interface GymTestimonialsProps {
  testimonials: Testimonial[];
}

export default function GymTestimonials({ testimonials }: GymTestimonialsProps) {
  const visible = publishableTestimonials(testimonials);

  if (visible.length < MIN_TESTIMONIALS_TO_SHOW) {
    return null;
  }

  return (
    <section className="px-[5vw] py-5 flex flex-col items-center gap-10">
      <h2 className="self-start">Šta kažu naši vežbači o teretani</h2>
      <TestimonialSlider testimonials={visible} />
    </section>
  );
}
