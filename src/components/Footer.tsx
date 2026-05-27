import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Mail } from "lucide-react";
import { Logo } from "./Logo";

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
            <a href="#" className="p-2 border border-border hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] transition-colors"><Instagram size={18} /></a>
            <a href="#" className="p-2 border border-border hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] transition-colors"><Youtube size={18} /></a>
            <a href="#" className="p-2 border border-border hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] transition-colors"><Mail size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-rio py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} RioSkim. Skim é do Rio.</div>
          <div className="uppercase tracking-[0.2em]">Não é loja. É cultura.</div>
        </div>
      </div>
    </footer>
  );
}
