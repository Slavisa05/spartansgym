import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import GymSection from "@/components/home/GymsSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CtaSection from "@/components/shared/CtaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <GymSection />
      <TeamSection />
      <TestimonialSection />
      <CtaSection title="Želite da se upišešete u neku od naših teretana?" />
    </main>
  );
}
