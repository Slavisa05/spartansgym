import Link from "next/link"
import TeamHomeCard from "../ui/TeamHomeCard"
import Button from "../ui/Button"

export default function TeamSection() {
    return(
        <section className="px-[5vw] py-5 flex flex-col gap-6">
            <h2>Treneri</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <TeamHomeCard title="Dejan Mladenović" image="/dejan.jpg" />
                <TeamHomeCard title="Ivan Petrović" image="/mali.jpg" />
                <TeamHomeCard title="Stefan Marković" image="/markec.jpg" />
            </div>

            <Link href="/o-nama/#treneri">
                <Button text="pogledaj sve trenere" variant="secondary" />
            </Link>
        </section>
    )
}