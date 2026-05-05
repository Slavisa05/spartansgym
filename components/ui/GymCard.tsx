import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface GymCardProps {
    title: string;
    text: string;
    image: string;
    link: string;
}

export default function GymCard({ title, text, image, link }: GymCardProps) {
    return(
        <div className="group p-5 flex flex-col justify-between gap-5 rounded-xl border border-accent/40
            shadow-[0_0_30px_-5px_rgba(255,85,0,0.25)] 
            hover:shadow-[0_0_50px_-5px_rgba(255,85,0,0.45)]
            hover:border-accent
            transition-all duration-300">
            <Image 
                src={image}
                alt="slika teretane"
                width={200}
                height={200}
                className="w-full mb-5 rounded-xl"
            />

            <h3 className="uppercase">{title}</h3>
            <p className="text-justify">{text}</p>

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
    )
}