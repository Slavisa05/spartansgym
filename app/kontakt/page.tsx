"use client";

import { useMemo, useState } from "react";

type FormState = {
    fullName: string;
    phone: string;
    email: string;
    service: string;
    goal: string;
    experience: string;
    gym: string;
    startWhen: string;
    note: string;
};

const serviceOptions = [
    "Personalni trening",
    "Grupni treninzi",
    "Ishrana",
    "Kondiciona priprema",
];

const goalOptions = ["Mršavljenje", "Izgradnja mišića", "Kondicija", "Rehabilitacija"];
const experienceOptions = ["Da, redovno", "Da, povremeno", "Ne, početnik/ca sam"];
const gymOptions = ["Gym 1 -Ub", "Gym 2 - Lajkovac", "Gym 3 - Ub"];
const startOptions = ["Odmah", "Za mesec dana", "Samo istražujem"];

function OptionGroup({
    options,
    selected,
    onSelect,
}: {
    options: string[];
    selected: string;
    onSelect: (value: string) => void;
}) {
    return (
        <div className="flex flex-wrap gap-2">
            {options.map((option) => (
                <button
                    key={option}
                    type="button"
                    onClick={() => onSelect(option)}
                    className={`rounded-xl border px-3 py-2 text-sm transition-all duration-200 ${
                        selected === option
                            ? "border-accent bg-accent text-white"
                            : "border-white/10 text-text-secondary hover:border-accent/40 hover:text-text-primary"
                    }`}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

export default function Contact() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState<FormState>({
        fullName: "",
        phone: "",
        email: "",
        service: "",
        goal: "",
        experience: "",
        gym: "",
        startWhen: "",
        note: "",
    });

    const progress = (step / 3) * 100;

    const isStepValid = useMemo(() => {
        if (step === 1) {
            return form.fullName.trim().length > 2 && form.phone.trim().length > 5;
        }

        if (step === 2) {
            return Boolean(form.service && form.goal && form.experience);
        }

        return Boolean(form.gym && form.startWhen);
    }, [form, step]);

    const nextStep = () => {
        if (!isStepValid || step >= 3) return;
        setStep((prev) => prev + 1);
    };

    const prevStep = () => {
        if (step <= 1) return;
        setStep((prev) => prev - 1);
    };

    const updateField = (field: keyof FormState, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!isStepValid || step !== 3) {
            return;
        }

        setStatus("loading");

        const payload = {
            fullName: form.fullName.trim(),
            phone: form.phone.trim(),
            email: form.email.trim(),
            service: form.service,
            goal: form.goal,
            experience: form.experience,
            gym: form.gym,
            startWhen: form.startWhen,
            note: form.note.trim(),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            setStatus(res.ok ? "ok" : "error");
        } catch {
            setStatus("error");
        }
    }
    
    return (
        <main className="px-[5vw] pt-[30vh] pb-10">
            <section className="mx-auto w-full max-w-3xl rounded-2xl border border-border bg-bg-secondary/70 p-4 md:rounded-3xl md:p-8">
                <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-accent">Kontakt forma</p>
                    <h1 className="mt-2 text-3xl md:text-5xl">Pošalji upit u 3 koraka</h1>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                        Popuni formu i naš tim će ti se javiti sa predlogom termina i plana treninga.
                    </p>
                </div>

                <div className="mb-7">
                    <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-wide text-text-secondary">
                        <span>Korak {step} od 3</span>
                        <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-bg-tertiary">
                        <div
                            className="h-full rounded-full bg-linear-to-r from-accent to-accent-dim transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl">Korak 1 - O tebi</h2>

                            <div className="space-y-2">
                                <label htmlFor="fullName" className="text-sm font-medium text-text-primary">
                                    Ime i prezime
                                </label>
                                <input
                                    id="fullName"
                                    value={form.fullName}
                                    onChange={(event) => updateField("fullName", event.target.value)}
                                    placeholder="Unesi ime i prezime"
                                    className="w-full rounded-xl border border-border bg-bg-tertiary px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-text-primary">
                                    Broj telefona
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={(event) => updateField("phone", event.target.value)}
                                    placeholder="06x xxx xxxx"
                                    className="w-full rounded-xl border border-border bg-bg-tertiary px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-text-primary">
                                    Email (opciono)
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={form.email}
                                    onChange={(event) => updateField("email", event.target.value)}
                                    placeholder="ime@gmail.com"
                                    className="w-full rounded-xl border border-border bg-bg-tertiary px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                                />
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-5">
                            <h2 className="text-2xl md:text-3xl">Korak 2 - Tvoji ciljevi</h2>

                            <div className="space-y-2">
                                <p className="text-sm font-medium text-text-primary">Koja usluga te zanima?</p>
                                <OptionGroup
                                    options={serviceOptions}
                                    selected={form.service}
                                    onSelect={(value) => updateField("service", value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm font-medium text-text-primary">Koji je tvoj cilj?</p>
                                <OptionGroup
                                    options={goalOptions}
                                    selected={form.goal}
                                    onSelect={(value) => updateField("goal", value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm font-medium text-text-primary">Da li si trenirao/la pre?</p>
                                <OptionGroup
                                    options={experienceOptions}
                                    selected={form.experience}
                                    onSelect={(value) => updateField("experience", value)}
                                />
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-5">
                            <h2 className="text-2xl md:text-3xl">Korak 3 - Detalji</h2>

                            <div className="space-y-2">
                                <p className="text-sm font-medium text-text-primary">Koja teretana te zanima?</p>
                                <OptionGroup
                                    options={gymOptions}
                                    selected={form.gym}
                                    onSelect={(value) => updateField("gym", value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm font-medium text-text-primary">Kada bi mogao/la da počneš?</p>
                                <OptionGroup
                                    options={startOptions}
                                    selected={form.startWhen}
                                    onSelect={(value) => updateField("startWhen", value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="note" className="text-sm font-medium text-text-primary">
                                    Dodatna napomena (opciono)
                                </label>
                                <textarea
                                    id="note"
                                    value={form.note}
                                    onChange={(event) => updateField("note", event.target.value)}
                                    rows={4}
                                    placeholder="Napiši sve što je važno (termini, iskustvo, povrede...)"
                                    className="w-full resize-none rounded-xl border border-border bg-bg-tertiary px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
                                />
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-between">
                        <button
                            type="button"
                            onClick={prevStep}
                            disabled={step === 1}
                            className="rounded-xl border border-border px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:border-accent/40 hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            Nazad
                        </button>

                        {step < 3 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                disabled={!isStepValid}
                                className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-dim disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                Sledeći korak
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={!isStepValid || status === "loading"}
                                className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-dim disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                {status === "loading" ? "Slanje..." : "Pošalji upit"}
                            </button>
                        )}
                    </div>

                    {step === 3 && status === "ok" && (
                        <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                            Upit je uspešno poslat. Javljamo ti se uskoro.
                        </p>
                    )}

                    {step === 3 && status === "error" && (
                        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                            Došlo je do greške pri slanju. Pokušaj ponovo.
                        </p>
                    )}
                </form>
            </section>
        </main>
    );
}