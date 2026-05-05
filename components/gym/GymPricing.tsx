import { PricingOption } from "@/data/gym";

interface GymPricingProps {
  pricing: PricingOption[];
}

export default function GymPricing({ pricing }: GymPricingProps) {
  return (
    <section className="px-[5vw] py-20">
      <h2 className="text-center mb-12">Cenovnik</h2>
      <div className="grid md:grid-cols-3 gap-6 mx-auto">
        {pricing.map((option) => (
          <div
            key={option.name}
            className="flex flex-col items-center justify-center gap-4 border border-accent rounded-xl p-8 min-w-55 flex-1"
          >
            <span className="text-lg font-semibold text-center">{option.name}</span>
            <span className="text-4xl font-bold text-accent">{option.price} RSD</span>

            <div className="flex flex-col md:flex-row items-center gap-5">
                <span>Trajanje: <span className="text-accent">{option.trajanje}</span></span>
                <span>Broj prolazaka: <span className="text-accent">{option.brojProlazaka}</span></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
