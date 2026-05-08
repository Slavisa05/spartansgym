import type { Metadata } from 'next'
import AboutHero from "@/components/about/AboutHero"
import AboutSection from "@/components/about/AboutSection"
import AboutTeam from "@/components/about/AboutTeam"
import CTASection from "@/components/shared/CtaSection"

export const metadata: Metadata = {
  title: 'O nama | Spartans Gym — Fitness Centar sa 10+ godina iskustva',
  description: 'Upoznajte tim Spartans Gym-a — stručni treneri, nutricionista i zajednica koja inspiriše od 2016. godine. 4 teretane u Ubu, Lajkovcu i okolini.',
}

export default function About() {
    return(
        <main>
            <AboutHero />
            <AboutSection />
            <AboutTeam />
            <CTASection title="Želite da se upišešete u neku od naših teretana?" />
        </main>
    )
}