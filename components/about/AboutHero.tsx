import Image from "next/image"

export default function AboutHero() {
    return(
        <section className="px-[5vw] pt-[30vh] md:pt-0 flex items-center justify-between min-h-screen">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center gap-5">
                    <h1><span className="bg-linear-to-r from-accent to-accent-dim bg-clip-text text-transparent">Fitness Centar Spartans Gym</span> mesto gde se dešavaju čuda!</h1>
                    <p>Naše teretane nisu samo mesta gde se dižu tegovi - naše teretane su mesta gde možete da se ispričate, zabavite i istrenirate uz najstručniju pomoć koju možete da dobijete.</p>
                </div>

                <div className="flex items-center justify-center">
                    <Image 
                        src="/gym1/s1-gym1.jpg"
                        alt="slika teretane"
                        width={800}
                        height={600}
                        className="w-[85%] rounded-xl"    
                    />
                </div>
            </div>
        </section>
    )
}