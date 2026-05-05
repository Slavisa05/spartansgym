import Image from "next/image";

interface GymComingSoonProps {
  name: string;
  img: string;
}

export default function GymComingSoon({ name, img }: GymComingSoonProps) {
  return (
    <section className="relative flex items-center justify-center min-h-screen">
      <Image
        src={img}
        alt={name}
        width={1200}
        height={600}
        className="w-full h-full absolute z-10 object-cover"
      />
      <div className="absolute z-15 w-full h-full bg-black/60" />
      <div className="relative z-20 flex flex-col items-center justify-center gap-6 text-center px-[5vw]">
        <h1 className="bg-linear-to-r from-accent to-accent-dim bg-clip-text text-transparent">
          {name}
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-white tracking-widest uppercase">
          Coming Soon
        </p>
      </div>
    </section>
  );
}
