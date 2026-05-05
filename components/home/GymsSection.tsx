import GymCard from "../ui/GymCard"

export default function GymSection() {
    return(
        <section className="px-[5vw] py-5 flex flex-col gap-6">
            <h2>Teretane</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <GymCard 
                    title="gym 1" 
                    text="Naša teretana u Talovima nudi sve - od personalnih i polu-personalnih treninga do grupnog vežbanja. Moderni sprave i iskusni treneri obezbeđuju da svaki trening bude efikasan i motivišući. Pridružite se zajednici koja vas inspiriše da postignete svoje ciljeve." 
                    image="/gym1.jpg"
                    link="/gym-1"
                    />
                <GymCard 
                    title="gym 2" 
                    text="Teretana u Lajkovcu kombinuje sve što vam je potrebno za napredak - personalni, polu-personalni i grupni treninzi. Opremljena je najsavremenijim spravama i prostorom za udobno vežbanje. Treneri vas prate na svakom koraku i pomažu da ostvarite najbolje rezultate." 
                    image="/gym2.jpg"
                    link="/gym-2"
                    />
                <GymCard 
                    title="gym 3" 
                    text="Teretana u Prvomajskoj je idealna za ljubitelje slobodnog vežbanja. Sa prostorom prilagođenim slobodnoj teretani i raznovrsnim spravama, imate potpunu slobodu da kreirate svoj trening. Idealno za one koji žele da sami oblikuju svoj napredak." 
                    image="/gym3.jpg"
                    link="/gym-3"
                />
            </div>
        </section>
    )
}