import TeamHomeCard from "../ui/TeamHomeCard"
import Button from "../ui/Button"

export default function TeamSection() {
    return(
        <section className="px-[5vw] py-5 flex flex-col gap-6">
            <h2>Treneri</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <TeamHomeCard title="Dejan Mladenović" image="/logo.png" />
                <TeamHomeCard title="Ivan Petrović" image="/logo.png" />
                <TeamHomeCard title="Stefan Marković" image="/logo.png" />
            </div>

            <div>
                <Button text="pogledaj sve trenere" variant="secondary" />
            </div>
        </section>
    )
}