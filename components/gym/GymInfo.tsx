import { Clock3, MapPin, Phone } from "lucide-react";

interface GymInfoProps {
    map: string;
    address: string;
    openTime: string;
    closeTime: string;
    phone: string;
}

export default function GymInfo({ map, address, openTime, closeTime, phone }: GymInfoProps) {
    return(
        <section className="px-[5vw] py-10">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-xl overflow-hidden min-h-80 border border-border bg-bg-secondary">
                    <iframe
                        src={map}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <div className="flex flex-col gap-8">
                    <div className="rounded-2xl border border-border bg-bg-secondary p-5">
                        <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-bg-tertiary text-accent">
                            <MapPin size={20} />
                        </div>
                        <h3 className="mb-2">Adresa</h3>
                        <p className="text-text-secondary leading-relaxed">
                            Naša teretana se nalazi na lako dostupnoj lokaciji u centru grada.
                        </p>
                        <p className="mt-2 font-semibold text-text-primary">{address}</p>
                    </div>

                    <div className="rounded-2xl border border-border bg-bg-secondary p-5">
                        <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-bg-tertiary text-accent">
                            <Clock3 size={20} />
                        </div>
                        <h3 className="mb-2">Radno vreme</h3>
                        <p className="text-text-secondary leading-relaxed">
                            Treniraj kada ti najviše odgovara - otvoreni smo svakog dana u širokom terminu.
                        </p>
                        <p className="mt-2 font-semibold text-text-primary">{openTime} - {closeTime}</p>
                    </div>

                    <div className="rounded-2xl border border-border bg-bg-secondary p-5">
                        <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-bg-tertiary text-accent">
                            <Phone size={20} />
                        </div>
                        <h3 className="mb-2">Telefon</h3>
                        <p className="text-text-secondary leading-relaxed">
                            Pozovi nas za informacije o članarinama, terminima i personalnim treninzima.
                        </p>
                        <a href={`tel:${phone}`} className="mt-2 inline-block font-semibold text-accent hover:text-accent-dim transition-colors">
                            {phone}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}