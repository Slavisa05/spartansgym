"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Clock3, Tag, X } from "lucide-react";

interface ServiceCardProps {
    title: string;
    desc: string;
    img: string;
    paragraphs: string[];
    time?: string;
    price: string;
    perTraining?: boolean;
    priceOptions?: {
        label: string;
        price: string;
        suffix?: string;
    }[];
}

export default function ServiceCard({ title, desc, img, paragraphs, time, price, perTraining, priceOptions }: ServiceCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        const onEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", onEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onEscape);
        };
    }, [isOpen]);

    return (
        <>
            <article className="group flex h-full flex-col justify-between gap-4 rounded-2xl border border-border bg-bg-tertiary p-5 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1">
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl md:text-2xl">{title}</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">{desc}</p>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent transition-colors hover:text-accent-dim"
                >
                    Pogledaj detaljnije
                    <ArrowRight size={16} />
                </button>
            </article>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-end bg-black/70 p-3 md:items-center md:justify-center md:p-8"
                    onClick={() => setIsOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Detalji usluge ${title}`}
                >
                    <div
                        className="max-h-[92vh] w-full overflow-y-auto rounded-2xl border border-border bg-bg-secondary p-4 shadow-2xl md:max-w-3xl md:rounded-3xl md:p-7"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-4 flex items-center justify-end">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-bg-tertiary text-text-secondary transition-colors hover:border-accent/50 hover:text-accent"
                                aria-label="Zatvori modal"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_1.2fr] md:gap-7">
                            <div className="overflow-hidden rounded-xl border border-border bg-bg-tertiary">
                                <Image
                                    src={img}
                                    alt={`slika usluge ${title}`}
                                    width={900}
                                    height={700}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-2xl md:text-3xl">{title}</h3>

                                <div className="space-y-3 text-text-secondary">
                                    {paragraphs.map((paragraph, index) => (
                                        <p key={index} className="leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl border border-border bg-bg-tertiary p-3">
                                        <p className="mb-1 inline-flex items-center gap-2 text-xs uppercase tracking-wide text-text-secondary">
                                            <Clock3 size={14} />
                                            Vreme trajanja
                                        </p>
                                        <p className="font-semibold text-text-primary">{time} min</p>
                                    </div>

                                    <div className="rounded-xl border border-border bg-bg-tertiary p-3">
                                        <p className="mb-1 inline-flex items-center gap-2 text-xs uppercase tracking-wide text-text-secondary">
                                            <Tag size={14} />
                                            Cena
                                        </p>
                                        {priceOptions && priceOptions.length > 0 ? (
                                            <ul className="space-y-1">
                                                {priceOptions.map((option) => (
                                                    <li key={`${option.label}-${option.price}`} className="text-sm text-text-primary">
                                                        <span className="font-semibold">{option.label}:</span> {option.price} rsd {option.suffix ?? ""}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="font-semibold text-text-primary">
                                                {price} rsd {perTraining ? "po treningu" : "mesečno"}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}