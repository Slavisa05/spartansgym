interface GymAboutProps {
    text: string[];
}

export default function GymAbout({ text }: GymAboutProps) {
    const [intro, ...rest] = text;

    return(
        <section className="px-[5vw] py-10">
            <div className="mx-auto  rounded-2xl border border-border bg-bg-secondary p-5 md:p-8">
                <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-accent">O teretani</p>
                    <h2 className="mt-2">Kratak opis Spartans Gym-a</h2>
                </div>

                {intro && (
                    <p className="rounded-xl border border-border bg-bg-tertiary p-4 text-text-primary leading-relaxed md:text-lg">
                        {intro}
                    </p>
                )}

                {rest.length > 0 && (
                    <div className="mt-5 space-y-4 text-text-secondary leading-relaxed">
                        {rest.map((paragraph, index) => (
                            <p className="text-justify" key={index}>{paragraph}</p>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}