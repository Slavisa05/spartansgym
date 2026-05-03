import Image from "next/image";
import { Phone } from "lucide-react";

interface TeamCardProps {
    title: string;
    role: string;
    img: string;
    desc?: string;
    paragraphs?: string[];
    bulletPoints?: string[];
    instagram?: string;
    phone?: string;
}

export default function TeamCard({
    title,
    role,
    img,
    desc,
    paragraphs,
    bulletPoints,
    instagram,
    phone,
}: TeamCardProps) {
    const hasParagraphs = Array.isArray(paragraphs) && paragraphs.length > 0;
    const hasBulletPoints = Array.isArray(bulletPoints) && bulletPoints.length > 0;

    return(
        <article className="w-full rounded-2xl border border-border bg-bg-tertiary/70 p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6 md:gap-8 items-start">
                <div className="w-full flex items-center justify-center rounded-xl bg-bg-secondary/80 p-3">    
                <Image 
                    src={img}
                    alt={`slika trenera ${title}`}
                    width={600}
                    height={600}
                    className="w-full max-w-75 rounded-xl object-cover"
                />
            </div>

                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl">{title}</h3>
                        <span className="w-fit rounded-full border border-border bg-bg-secondary px-3 py-1 text-sm uppercase tracking-wide text-text-secondary">
                            {role}
                        </span>
                    </div>

                    <div className="space-y-4 text-text-secondary leading-relaxed">
                        {hasParagraphs && paragraphs?.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}

                        {!hasParagraphs && desc && <p>{desc}</p>}

                        {hasBulletPoints && (
                            <div>
                                <p className="mb-2 text-text-primary font-medium">Aktivnosti i projekti</p>
                                <ul className="list-disc pl-5 space-y-1.5">
                                    {bulletPoints?.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {(instagram || phone) && (
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
                            {instagram && (
                                <a
                                    href={`https://instagram.com/${instagram}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-secondary px-3 py-2 text-sm text-text-secondary hover:text-accent hover:border-accent/50 transition-colors"
                                >
                                    @{instagram}
                                </a>
                            )}

                            {phone && (
                                <a
                                    href={`tel:${phone}`}
                                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-secondary px-3 py-2 text-sm text-text-secondary hover:text-accent hover:border-accent/50 transition-colors"
                                >
                                    <Phone size={16} />
                                    {phone}
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </article>
    )
}