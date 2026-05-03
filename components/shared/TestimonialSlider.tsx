"use client";

import { Testimonial } from "@/types/testimonial";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useMemo, useState } from "react";

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const clampedIndex = useMemo(() => {
    if (testimonials.length === 0) {
      return 0;
    }

    return ((currentIndex % testimonials.length) + testimonials.length) % testimonials.length;
  }, [currentIndex, testimonials.length]);

  const active = testimonials[clampedIndex];

  const goTo = (nextIndex: number) => {
    if (testimonials.length === 0) {
      return;
    }

    const normalized = ((nextIndex % testimonials.length) + testimonials.length) % testimonials.length;
    setDirection(normalized > clampedIndex ? 1 : -1);
    setCurrentIndex(normalized);
  };

  const goNext = () => goTo(clampedIndex + 1);
  const goPrev = () => goTo(clampedIndex - 1);

  if (!active) {
    return null;
  }

  return (
    <div className="w-full rounded-2xl border border-border bg-linear-to-b from-bg-tertiary to-bg-secondary p-4 sm:p-6">
      <div className="relative overflow-hidden rounded-xl bg-bg-primary/40 p-4 sm:p-6">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.article
            key={active.id}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 36 : -36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -36 : 36 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x > 90) {
                goPrev();
              }

              if (info.offset.x < -90) {
                goNext();
              }
            }}
            className="select-none"
          >
            <div className="mb-4 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={`${active.id}-star-${i}`}
                  className={`h-4 w-4 ${i < active.rating ? "fill-accent text-accent" : "text-text-secondary/40"}`}
                />
              ))}
            </div>

            <p className="text-base leading-relaxed text-text-primary sm:text-lg">&ldquo;{active.text}&rdquo;</p>

            <div className="mt-5 border-t border-border pt-4">
              <p className="font-display text-lg font-semibold text-text-primary">{active.name}</p>
              <p className="text-sm text-text-secondary">{active.gym}</p>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Prethodni testimonial"
            onClick={goPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-primary text-text-primary transition hover:border-accent hover:text-accent"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Sledeci testimonial"
            onClick={goNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-primary text-text-primary transition hover:border-accent hover:text-accent"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              aria-label={`Prikazi testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${i === clampedIndex ? "w-7 bg-accent" : "w-2.5 bg-text-secondary/40 hover:bg-text-secondary/70"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}