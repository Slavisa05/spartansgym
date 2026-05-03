import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";

interface Props {
  title: string;
}

export default function CTASection({ title }: Props) {
  return (
    <section className="px-[5vw] py-16">
      <div className="relative rounded-2xl border border-white/5 bg-bg-secondary overflow-hidden px-8 py-14 md:px-16 md:py-20 flex flex-col md:flex-row md:items-center justify-between gap-8">
        
        {/* Pozadinski glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        {/* Tekst */}
        <div className="relative flex flex-col gap-3 max-w-xl">
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-accent">
            Kontakt
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold italic uppercase leading-tight text-text-primary">
            {title}
          </h2>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Popunite formu i kontaktiraćemo vas u roku od 24h.
          </p>
        </div>

        {/* CTA dugme */}
        <div className="relative shrink-0">
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-dim
              text-white uppercase font-semibold text-sm tracking-widest
              px-8 py-4 rounded-xl transition-all duration-200"
          >
            Popuni formu
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}