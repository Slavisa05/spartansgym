import AboutHero from "@/components/about/AboutHero"
import AboutSection from "@/components/about/AboutSection"
import AboutTeam from "@/components/about/AboutTeam"
import CTASection from "@/components/shared/CtaSection"

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