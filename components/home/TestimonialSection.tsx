import {
  allTestimonials,
  MIN_TESTIMONIALS_TO_SHOW,
  publishableTestimonials,
} from "@/data/testimonials";
import TestimonialSlider from "../shared/TestimonialSlider";

export default function TestimonialSection() {
  const testimonials = publishableTestimonials(allTestimonials);

  if (testimonials.length < MIN_TESTIMONIALS_TO_SHOW) {
    return null;
  }

  return (
    <section className="px-[5vw] py-5 flex flex-col items-center gap-10">
      <h2 className="self-start">Šta kažu naši vežbači</h2>
      <TestimonialSlider testimonials={testimonials} />
    </section>
  );
}
