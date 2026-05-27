import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { EVENTS } from "@/lib/data";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos — RioSkim" },
      { name: "description", content: "Campeonatos, encontros e workshops de skimboard no Rio." },
      { property: "og:title", content: "Eventos — RioSkim" },
      { property: "og:description", content: "Calendário de skim no Rio." },
    ],
    links: [{ rel: "canonical", href: "/eventos" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  const all = [...EVENTS, ...EVENTS, ...EVENTS];
  return (
    <>
      <PageHeader
        eyebrow="Calendário"
        title="O que vem aí."
        subtitle="Etapas oficiais, encontros comunitários e workshops abertos."
      />
      <section className="container-rio py-12 md:py-20">
        <div className="divide-y divide-border border-y border-border">
          {all.map((e, i) => (
            <div key={i} className="py-8 grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center group cursor-pointer">
              <div className="text-display text-4xl md:text-6xl w-24 md:w-40 text-[var(--color-coral)]">{e.date}</div>
              <div>
                <div className="text-display text-2xl md:text-4xl group-hover:text-[var(--color-coral)] transition-colors">{e.title}</div>
                <div className="text-xs text-muted-foreground mt-2 flex items-center gap-1.5">
                  <MapPin size={12} /> {e.location}
                </div>
              </div>
              <span className="tag-pill hidden md:inline-flex">{e.tag}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
