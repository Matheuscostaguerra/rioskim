import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/loja")({
  head: () => ({
    meta: [
      { title: "Loja — RioSkim" },
      { name: "description", content: "Em breve. A loja oficial da comunidade RioSkim." },
      { property: "og:title", content: "Loja — RioSkim" },
      { property: "og:description", content: "Em breve." },
    ],
    links: [{ rel: "canonical", href: "/loja" }],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <>
      <PageHeader eyebrow="Loja" title="Em breve." subtitle="Camiseta, deck, parafina e o que mais a comunidade pedir. Tá vindo." />
      <section className="container-rio py-32 text-center">
        <div className="text-display text-[12rem] md:text-[20rem] leading-none text-[var(--color-coral)]/20">
          SOON
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-6">
          Quer ser avisado? @rioskim no Instagram
        </p>
      </section>
    </>
  );
}
