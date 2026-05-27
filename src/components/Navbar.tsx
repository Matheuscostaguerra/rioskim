import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/spots", label: "Spots" },
  { to: "/riders", label: "Riders" },
  { to: "/eventos", label: "Eventos" },
  { to: "/galeria", label: "Galeria" },
  { to: "/forecast", label: "Forecast" },
  { to: "/blog", label: "Blog" },
  { to: "/loja", label: "Loja" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="container-rio flex h-16 items-center justify-between">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://skimforecast.com"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-coral)] hover:opacity-80"
        >
          Forecast ↗
        </a>
        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-rio flex flex-col py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-display text-2xl text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://skimforecast.com"
              target="_blank"
              rel="noreferrer"
              className="py-3 text-display text-2xl text-[var(--color-coral)]"
            >
              skimforecast.com ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
