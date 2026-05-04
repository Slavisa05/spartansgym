import { Testimonial } from "@/types/testimonial";
import TestimonialSlider from "../shared/TestimonialSlider";

interface GymTestimonialsProps {
    testimonials: Testimonial[];
}

export default function GymTestimonials({ testimonials }: GymTestimonialsProps) {
    return(
        <section className="px-[5vw] py-5 flex flex-col items-center gap-10">
            <h2 className="self-start">Šta kažu naši vežbači o teretani</h2>
            <TestimonialSlider testimonials={testimonials} />
        </section>
    )
}