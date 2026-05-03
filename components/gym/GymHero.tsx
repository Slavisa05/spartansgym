import Image from "next/image";

interface GymHeroProps {
    name: string;
    img: string;
}

export default function GymHero({ name, img }: GymHeroProps) {
    return(
        <section className="relative px-[5vw] flex items-center justify-center min-h-screen">
            <Image
                src={img}
                alt="Slika teretane"
                width={1200}
                height={600}
                className="w-full h-full absolute z-10"
            />

            <div className="absolute z-15 w-full h-full bg-black/50">

            </div>
            
            <div className="relative z-20 flex flex-row items-center justify-center gap-8 md:max-w-[60%]">
                <h1 className="bg-linear-to-r from-accent to-accent-dim bg-clip-text text-transparent">{name}</h1>
            </div>
        </section>
    )
}