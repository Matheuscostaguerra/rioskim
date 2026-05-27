import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { RiderCard } from "@/components/RiderCard";
import { RIDERS } from "@/lib/data";

export const Route = createFileRoute("/riders")({
  head: () => ({
    meta: [
      { title: "Riders — RioSkim" },
      { name: "description", content: "Os riders da comunidade de skimboard do Rio." },
      { property: "og:title", content: "Riders — RioSkim" },
      { property: "og:description", content: "Quem mora no shorebreak do Rio." },
    ],
    links: [{ rel: "canonical", href: "/riders" }],
  }),
  component: RidersPage,
});

function RidersPage() {
  // duplicate roster to feel populated
  const all = [...RIDERS, ...RIDERS.map((r) => ({ ...r, name: r.name + " Jr." }))];
  return (
    <>
      <PageHeader
        eyebrow="Comunidade"
        title="A gente."
        subtitle="Profissionais, locais, veteranos e a galera que tá começando. O skim do Rio é feito por essas pessoas."
      />
      <section className="container-rio py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {all.map((r, i) => <RiderCard key={i} {...r} />)}
        </div>
      </section>
    </>
  );
}
