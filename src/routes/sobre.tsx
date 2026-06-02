import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o RioSkim" },
      { name: "description", content: "Conheça a história do RioSkim, a maior comunidade de skimboard do Rio de Janeiro, criada por Matheus Guerra." },
      { property: "og:title", content: "Sobre o RioSkim" },
      { property: "og:description", content: "Conheça a história do RioSkim, a maior comunidade de skimboard do Rio de Janeiro, criada por Matheus Guerra." },
      { property: "og:url", content: "https://rioskim.com/sobre" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://rioskim.com/sobre" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Matheus Guerra",
          jobTitle: "Fundador e Administrador do RioSkim",
          url: "https://rioskim.com/sobre",
          worksFor: {
            "@type": "WebSite",
            name: "RioSkim",
            url: "https://rioskim.com",
          },
          sameAs: ["https://www.instagram.com/rioskimboard"],
        }),
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <section className="py-16 md:py-24 container-rio">
      <div className="max-w-3xl mx-auto">
        <span className="tag-pill text-[var(--color-coral)] border-[var(--color-coral)]/30">
          Sobre
        </span>
        <h1 className="text-display text-4xl md:text-6xl mt-4">Sobre o RioSkim</h1>

        <div className="mt-8 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            O RioSkim foi criado e é administrado por Matheus Guerra, carioca
            apaixonado por skimboard e pela cultura praiana do Rio de Janeiro.
          </p>
          <p>
            Fundado com o objetivo de reunir a comunidade de skimboard do RJ, o
            RioSkim cobre atletas, eventos, resultados e novidades do esporte no
            Brasil e no mundo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Fundador</p>
            <p className="mt-1 text-display text-xl text-foreground">Matheus Guerra</p>
          </div>
          <div className="border border-border rounded-lg p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Cidade</p>
            <p className="mt-1 text-display text-xl text-foreground">Rio de Janeiro, RJ</p>
          </div>
          <div className="border border-border rounded-lg p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Instagram</p>
            <a
              href="https://www.instagram.com/rioskimboard"
              target="_blank"
              rel="noreferrer"
              className="mt-1 text-display text-xl text-[var(--color-coral)] hover:opacity-80 transition-opacity inline-block"
            >
              @rioskimboard
            </a>
          </div>
        </div>

        <div className="mt-12">
          <Link
            to="/"
            className="tag-pill hover:border-[var(--color-coral)] transition-colors"
          >
            ← Voltar pra Home
          </Link>
        </div>
      </div>
    </section>
  );
}
