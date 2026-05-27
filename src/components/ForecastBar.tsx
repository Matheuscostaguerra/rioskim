import { Waves, Wind, ExternalLink } from "lucide-react";

const SPOTS = [
  { name: "Barra", wave: "0.8m", wind: "10kt", status: "BOM" },
  { name: "Recreio", wave: "1.1m", wind: "12kt", status: "ÉPICO" },
  { name: "Grumari", wave: "0.6m", wind: "8kt", status: "OK" },
];

export function ForecastBar() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="container-rio py-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <Waves size={14} className="text-[var(--color-coral)]" />
          Hoje no Rio
        </div>
        <div className="flex-1 grid grid-cols-3 gap-4">
          {SPOTS.map((s) => (
            <div key={s.name} className="flex items-baseline gap-2 md:gap-3">
              <span className="text-display text-xl md:text-2xl">{s.name}</span>
              <span className="text-xs text-muted-foreground hidden sm:inline">{s.wave} · <Wind size={10} className="inline" /> {s.wind}</span>
              <span className={`tag-pill ml-auto ${s.status === "ÉPICO" ? "text-[var(--color-coral)] border-[var(--color-coral)]" : ""}`}>
                {s.status}
              </span>
            </div>
          ))}
        </div>
        <a
          href="https://skimforecast.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground hover:text-[var(--color-coral)] transition-colors whitespace-nowrap"
        >
          Ver previsão completa <ExternalLink size={12} />
        </a>
      </div>
    </section>
  );
}
