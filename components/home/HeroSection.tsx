import Button from "../ui/Button"

export default function HeroSection() {
    return(
        <section className="px-[5vw] flex items-center justify-center min-h-screen">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-center"
            >
                <source src="/hero_video.mp4" type="video/mp4" />
            </video>

            {/* Overlay — da tekst bude čitljiv */}
            <div className="absolute inset-0 bg-black/60" />
           
            <div className="relative z-10 flex flex-col md:items-center justify-between gap-4 md:max-w-[50%]">
                <h1>Promenite vaše navike u <span className="bg-linear-to-r from-accent to-accent-dim bg-clip-text text-transparent">Fitness Centar Spartans Gym-u</span></h1>
                <p>Pridružite se zajednici koja inspiriše, trenirajte sa najboljima i transformišite svoje telo i um.</p>

                <div className="flex flex-col md:flex-row md:items-center justify-center gap-3">
                    <Button text="pogledaj više" variant="secondary" />
                    <Button text="kontaktiraj nas" />
                </div>
            </div>            
        </section>
    )
}