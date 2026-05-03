import { allTestimonials } from "@/data/testimonials";
import TestimonialSlider from "../shared/TestimonialSlider";

export default function TestimonialSection() {
    return(
        <section className="px-[5vw] py-5 flex flex-col items-center gap-10">
            <h2 className="self-start">Šta kažu naši vežbači</h2>
            <TestimonialSlider testimonials={allTestimonials} />
        </section>
    )
}