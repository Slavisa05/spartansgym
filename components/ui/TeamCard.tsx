import Image from "next/image";

interface TeamCardProps {
    title: string;
    image: string;
}

export default function TeamCard({ title, image}: TeamCardProps) {
    return(
        <div className="p-5 flex flex-col justify-between gap-10 rounded-xl">
            <Image
                src={image}
                alt="Slika trenera"
                width={100}
                height={100}
                className="w-[80%] self-center"
            />

            <h3>{title}</h3>
        </div>
    )
}