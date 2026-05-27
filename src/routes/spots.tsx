import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { SPOTS } from "@/lib/data";

export const Route = createFileRoute("/spots")({
  head: () => ({
    meta: [
      { title: "Spots — RioSkim" },
      { name: "description", content: "As praias de skimboard do Rio de Janeiro: Barra, Recreio, Grumari e mais." },
      { property: "og:title", content: "Spots de skim no Rio — RioSkim" },
      { property: "og:description", content: "As praias de skimboard do Rio de Janeiro." },
    ],
    links: [{ rel: "canonical", href: "/spots" }],
  }),
  component: SpotsPage,
});

function SpotsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Praias"
        title="Onde o skim acontece."
        subtitle="A costa do Rio tem ondas pra cada nível. Mapeamos os spots que a comunidade anda — do shorebreak iniciante ao que separa o jogo."
      />
      <section className="container-rio py-16 md:py-24 space-y-24">
        {SPOTS.map((s, i) => (
          <article key={s.slug} className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={s.image} alt={s.name} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="tag-pill mb-3">{s.zone}</div>
              <h2 className="text-display text-5xl md:text-7xl">{s.name}</h2>
              <p className="mt-5 text-muted-foreground max-w-md">{s.description}</p>
              <dl className="mt-8 grid grid-cols-2 gap-6 max-w-md">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Nível</dt>
                  <dd className="text-display text-2xl mt-1">{s.difficulty}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Fundo</dt>
                  <dd className="text-display text-2xl mt-1">{s.bottom.split(",")[0]}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
