import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  index: number;
  title: string;
  text: string;
  link?: string;
}

export default function ServiceCard({ index, title, text, link }: ServiceCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="group relative flex flex-col justify-between gap-4 h-65 p-7
      bg-bg-tertiary rounded-2xl border border-white/5 overflow-hidden
      transition-all duration-300 hover:-translate-y-1 hover:border-accent/20">

      {/* top accent line — slideaza s leva na hover */}
      <span className="absolute top-0 left-0 right-0 h-0.5 bg-accent rounded-t-sm
        scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

      {/* gornji deo — broj + naslov */}
      <div className="flex flex-col gap-2">
        <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent">
          {num}
        </span>
        <h3 className="font-display text-xl font-bold italic uppercase leading-tight text-text-primary">
          {title}
        </h3>
      </div>

      {/* tekst */}
      <p className="text-sm text-text-secondary leading-relaxed">
        {text}
      </p>

      {/* footer — link + strelica */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold tracking-wideset uppercase text-accent">
          Saznaj više
        </span>
        {link ? (
          <Link
            href={link}
            className="w-7 h-7 rounded-full border border-accent/30 flex items-center justify-center
              transition-colors duration-200 group-hover:bg-accent group-hover:border-accent"
          >
            <ArrowRight size={12} className="text-accent group-hover:text-white transition-colors" />
          </Link>
        ) : (
          <div className="w-7 h-7 rounded-full border border-accent/30 flex items-center justify-center
            transition-colors duration-200 group-hover:bg-accent group-hover:border-accent">
            <ArrowRight size={12} className="text-accent group-hover:text-white transition-colors" />
          </div>
        )}
      </div>
    </div>
  );
}