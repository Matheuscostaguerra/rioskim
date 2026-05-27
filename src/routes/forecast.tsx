import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/forecast")({
  head: () => ({
    meta: [
      { title: "Forecast — RioSkim" },
      { name: "description", content: "Previsão de skimboard para o Rio. Via skimforecast.com." },
      { property: "og:title", content: "Forecast — RioSkim" },
      { property: "og:description", content: "Previsão de skim para o Rio." },
    ],
    links: [{ rel: "canonical", href: "/forecast" }],
  }),
  component: ForecastPage,
});

function ForecastPage() {
  return (
    <>
      <PageHeader
        eyebrow="Previsão"
        title="A condição manda."
        subtitle="Usamos o skimforecast.com — feito por skimer, pra skimer. É a ferramenta oficial da comunidade."
      />
      <section className="container-rio py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-display text-4xl md:text-6xl">skimforecast<span className="text-[var(--color-coral)]">.com</span></h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Previsão de ondas, vento e maré pensada especificamente para o shorebreak.
              Diferente dos forecasts de surf — porque skim não é surf.
            </p>
            <a
              href="https://skimforecast.com"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-[var(--color-coral)] text-[var(--color-coral-foreground)] text-xs font-semibold uppercase tracking-[0.2em] hover:opacity-90"
            >
              Abrir forecast <ArrowRight size={14} />
            </a>
          </div>
          <div className="aspect-square border border-border bg-card flex items-center justify-center">
            <div className="text-center">
              <div className="text-display text-[12rem] leading-none text-[var(--color-coral)]">→</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-4">
                skimforecast.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
