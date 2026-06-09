import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Mail } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Logo } from "./Logo";
import { getSponsors } from "@/lib/sponsors.functions";

function SponsorsBanner() {
  const { data } = useQuery({
    queryKey: ["sponsors"],
    queryFn: () => getSponsors(),
  });

  const sponsors = data?.sponsors ?? [];
  if (sponsors.length === 0) return null;

  return (
    <div style={{ backgroundColor: "#111111" }} className="py-8">
      <div className="container-rio">
        <p
          className="text-center text-xs uppercase tracking-[0.2em] mb-6"
          style={{ color: "#666666" }}
        >
          APOIADORES
        </p>
        <div className="hidden md:flex items-center justify-center flex-wrap gap-8">
          {sponsors.map((s) => (
            <a
              key={s.nome}
              href={s.site_url}
              target="_blank"
              rel="noreferrer"
              className="inline-block grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={s.logo_url}
                alt={s.nome}
                className="h-[40px] w-auto object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 md:hidden place-items-center">
          {sponsors.map((s) => (
            <a
              key={s.nome}
              href={s.site_url}
              target="_blank"
              rel="noreferrer"
              className="inline-block grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={s.logo_url}
                alt={s.nome}
                className="h-[40px] w-auto object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-rio py-16 grid gap-12 md:grid-cols-3">
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-xs">
            A casa da cultura do skimboard no Rio de Janeiro.
            Feito por quem anda, pra quem anda.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Comunidade</div>
            <Link to="/spots" className="block text-sm hover:text-[var(--color-coral)]">Spots</Link>
            <Link to="/riders" className="block text-sm hover:text-[var(--color-coral)]">Riders</Link>
            <Link to="/eventos" className="block text-sm hover:text-[var(--color-coral)]">Eventos</Link>
            <Link to="/galeria" className="block text-sm hover:text-[var(--color-coral)]">Galeria</Link>
          </div>
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Ferramenta</div>
            <a href="https://skimforecast.com" target="_blank" rel="noreferrer" className="block text-sm text-[var(--color-coral)]">skimforecast.com ↗</a>
            <Link to="/blog" className="block text-sm hover:text-[var(--color-coral)]">Notícias</Link>
            <Link to="/loja" className="block text-sm hover:text-[var(--color-coral)]">Loja</Link>
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Encontre a gente</div>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/rioskimboard" target="_blank" rel="noreferrer" className="p-2 border border-border hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] transition-colors"><Instagram size={18} /></a>
            <a href="https://www.youtube.com/@rioskimskimboard2411" target="_blank" rel="noreferrer" className="p-2 border border-border hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] transition-colors"><Youtube size={18} /></a>
            <a href="mailto:contato.rioskim@gmail.com" className="p-2 border border-border hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </div>
      <SponsorsBanner />
      <div className="border-t border-border">
        <div className="container-rio py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} RioSkim. Skim é do Rio.</div>
          <div className="uppercase tracking-[0.2em]">Não é loja. É cultura.</div>
        </div>
      </div>
    </footer>
  );
}
