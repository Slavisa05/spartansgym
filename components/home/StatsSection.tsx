const stats = [
  { value: "4",    suffix: "",  label: "Teretane"      },
  { value: "10",   suffix: "+", label: "God. iskustva" },
  { value: "20",   suffix: "",  label: "Trenera"       },
  { value: "10k",  suffix: "+", label: "Vežbača"       },
];

export default function StatsBar() {
  return (
    <section className="px-[5vw] py-5">
      <div className="grid grid-cols-2 md:grid-cols-4 bg-bg-secondary rounded-2xl overflow-hidden">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center gap-1.5 py-10 px-6
              ${i < stats.length - 1 ? "border-r border-r-accent/20" : ""}
              ${i < 2 ? "border-b border-b-accent/20 md:border-b-0" : ""}
            `}
          >
            <span className="text-xs font-medium tracking-widest uppercase text-text-secondary">
              {stat.label}
            </span>
            <span className="font-display text-6xl font-bold italic leading-none text-accent tabular-nums">
              {stat.value}
              <span className="text-4xl">{stat.suffix}</span>
            </span>
            <span className="w-6 h-0.5 bg-accent rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
}