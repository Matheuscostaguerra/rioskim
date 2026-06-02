import { Waves, Wind, ExternalLink } from "lucide-react";
import { useForecast } from "@/hooks/useForecast";
import { SPOTS } from "@/services/forecastService";

export function ForecastBar() {
  const { spots, loading, error } = useForecast();

  const rows = SPOTS.map((s) => {
    const f = spots.find((x) => x.name === s.name);
    return {
      name: s.name,
      waveHeight: f?.waveHeight ?? null,
      windSpeed: f?.windSpeed ?? null,
      condition: f?.condition ?? "FLAT",
    };
  });

  return (
    <section className="border-y border-border bg-card/50">
      <div className="container-rio py-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <Waves size={14} className="text-[var(--color-coral)]" />
          Hoje no Rio
        </div>
        <div className="flex-1 grid grid-cols-3 gap-4">
          {rows.map((s) => {
            const showLoading = loading;
            const showOffline = !loading && error;
            const wave = showLoading || s.waveHeight === null ? "--" : s.waveHeight.toFixed(1);
            const wind = showLoading || s.windSpeed === null ? "--" : Math.round(s.windSpeed);

            let badgeClass = "tag-pill ml-auto";
            let badgeLabel: string | null = s.condition;
            let badgeTitle: string | undefined;
            if (s.condition === "BOM") badgeClass += " bg-background text-foreground border-foreground";
            else if (s.condition === "OK") {
              badgeClass += " text-muted-foreground/70 border-transparent";
              badgeTitle = "Condições instáveis — confira antes de ir";
            } else badgeLabel = null; // FLAT → no badge

            return (
              <div key={s.name} className="flex items-baseline gap-2 md:gap-3">
                <span className="text-display text-xl md:text-2xl">{s.name}</span>
                <span className="text-xs text-muted-foreground hidden sm:inline">
                  {showOffline ? (
                    <span className="opacity-60">offline</span>
                  ) : (
                    <>
                      {wave}m · <Wind size={10} className="inline" /> {wind}kt
                    </>
                  )}
                </span>
                {!showLoading && !showOffline && badgeLabel && (
                  <span className={badgeClass}>{badgeLabel}</span>
                )}
              </div>
            );
          })}
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
