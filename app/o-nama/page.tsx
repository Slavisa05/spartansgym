import type { Metadata } from 'next'
import AboutHero from "@/components/about/AboutHero"
import AboutSection from "@/components/about/AboutSection"
import AboutTeam from "@/components/about/AboutTeam"
import CTASection from "@/components/shared/CtaSection"

export const metadata: Metadata = {
  title: 'O nama — Fitness Centar sa iskustvom od 2016.',
  description: 'Upoznajte tim Spartans Gym-a — stručni treneri, nutricionista i zajednica koja inspiriše od 2016. godine. Teretane u Ubu i Lajkovcu.',
  alternates: { canonical: '/o-nama' },
}

export default function About() {
    return(
        <main>
            <AboutHero />
            <AboutSection />
            <AboutTeam />
            <CTASection title="Želite da se upišete u neku od naših teretana?" />
        </main>
    )
}