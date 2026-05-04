"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GymGalleryProps {
    images: string[];
}

export default function GymGallery({ images }: GymGalleryProps) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const slides = images.map((image) => ({ src: image }));

    if (images.length === 0) {
        return null;
    }

    return(
        <section className="px-[5vw] py-10">
            <div className="mb-6 max-w-2xl">
                <h2 className="mb-3">Galerija teretane</h2>
                <p className="text-text-secondary">
                    Pogledaj prostor, opremu i atmosferu kroz nekoliko fotografija iz teretane.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((image, imageIndex) => (
                    <button
                        key={`${image}-${imageIndex}`}
                        type="button"
                        onClick={() => {
                            setIndex(imageIndex);
                            setOpen(true);
                        }}
                        className="group relative cursor-pointer aspect-4/3 overflow-hidden rounded-2xl border border-border bg-bg-secondary text-left"
                        aria-label={`Otvori sliku ${imageIndex + 1} u galeriji`}
                    >
                        <Image
                            src={image}
                            alt={`Fotografija teretane ${imageIndex + 1}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                    </button>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={slides}
            />
        </section>
    )
}