import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Copy, Check, ExternalLink } from "lucide-react";
import grupoAsset from "@/assets/apoie/grupo.asset.json";
import batalhaAsset from "@/assets/apoie/batalha.asset.json";
import teamAsset from "@/assets/apoie/team.asset.json";

export const Route = createFileRoute("/apoie")({
  head: () => ({
    meta: [
      { title: "Apoie o Rio Skim | Skimboard Carioca" },
      { name: "description", content: "Ajude a manter o skimboard carioca no mapa. Apoie pelo Apoia-se ou Pix." },
      { property: "og:title", content: "Apoie o Rio Skim | Skimboard Carioca" },
      { property: "og:description", content: "Ajude a manter o skimboard carioca no mapa. Apoie pelo Apoia-se ou Pix." },
      { property: "og:url", content: "https://rioskim.com/apoie" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://rioskim.com/apoie" }],
  }),
  component: ApoiePage,
});

const PIX_KEY = "contato.rioskim@gmail.com";

const gallery = [
  { src: grupoAsset.url, alt: "Comunidade RioSkim reunida na praia após sessão de skimboard" },
  { src: batalhaAsset.url, alt: "Batalha RioSkim — evento de skimboard no Rio de Janeiro" },
  { src: teamAsset.url, alt: "Team RioSkim na praia ao pôr do sol" },
];

function ApoiePage() {
  const [copied, setCopied] = useState(false);

  const copiarPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="py-16 md:py-24">
      <section className="container-rio text-center max-w-3xl mx-auto">
        <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-coral)] mb-4">
          Apoie a cultura
        </div>
        <h1 className="text-display text-5xl md:text-7xl leading-none">
          Apoie o Rio Skim
        </h1>
        <p className="mt-5 text-lg md:text-xl text-foreground/90">
          Ajude a manter o skimboard carioca no mapa
        </p>
        <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed">
          O Rio Skim é movido por paixão, sal e muito suor. Cada apoio ajuda a
          organizar eventos, manter o site no ar e manter a cultura do skimboard
          viva no Rio de Janeiro. Qualquer valor faz diferença. 🤙
        </p>
      </section>

      {/* Gallery */}
      <section className="container-rio mt-14 md:mt-20">
        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((img) => (
            <div
              key={img.src}
              className="group relative overflow-hidden rounded-xl bg-black/40 shadow-lg shadow-black/40 aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* Support blocks */}
      <section className="container-rio mt-16 md:mt-24 grid gap-6 md:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {/* Apoia-se */}
        <div className="group flex flex-col rounded-2xl border border-border bg-[#141414] p-8 transition-all hover:-translate-y-1 hover:border-[var(--color-coral)]/50 hover:shadow-2xl hover:shadow-[var(--color-coral)]/10">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-coral)]/15 text-[var(--color-coral)]">
            <Heart size={22} fill="currentColor" />
          </div>
          <h2 className="text-display text-3xl mt-5">Apoie pelo Apoia-se</h2>
          <p className="mt-2 text-sm text-muted-foreground flex-1">
            Contribuição recorrente ou pontual pela plataforma Apoia-se.
          </p>
          <a
            href="https://apoia.se/rioskim"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-coral)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-black transition-opacity hover:opacity-90"
          >
            <Heart size={16} fill="currentColor" />
            Apoiar no Apoia-se
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Pix */}
        <div className="group flex flex-col rounded-2xl border border-border bg-[#141414] p-8 transition-all hover:-translate-y-1 hover:border-[#32BCAD]/50 hover:shadow-2xl hover:shadow-[#32BCAD]/10">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#32BCAD]/15 text-[#32BCAD] font-bold text-lg">
            Pix
          </div>
          <h2 className="text-display text-3xl mt-5">Pix direto</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Transferência instantânea, sem taxas.
          </p>

          <div className="mt-5 rounded-md border border-border bg-black/40 p-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Chave Pix (e-mail)
            </div>
            <div className="mt-1 font-mono text-sm md:text-base break-all text-foreground">
              {PIX_KEY}
            </div>
          </div>

          <div className="mt-3 text-xs text-muted-foreground">
            Beneficiário: <span className="text-foreground">Matheus Costa Guerra</span>
          </div>

          <button
            onClick={copiarPix}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-[#32BCAD] bg-[#32BCAD]/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#32BCAD] transition-colors hover:bg-[#32BCAD] hover:text-black"
          >
            {copied ? (
              <>
                <Check size={16} /> Copiado!
              </>
            ) : (
              <>
                <Copy size={16} /> Copiar chave Pix
              </>
            )}
          </button>
        </div>
      </section>

      <section className="container-rio mt-16 md:mt-20 text-center">
        <p className="text-display text-2xl md:text-3xl">
          Todo apoio é celebrado com muito stoke! 🌊
        </p>
      </section>
    </div>
  );
}
