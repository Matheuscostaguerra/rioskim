import { Instagram } from "lucide-react";

type InfoItem = { label: string; value: string };

type Props = {
  image: string;
  name: string;
  nickname?: string;
  category: string;
  instagram?: string;
  info: InfoItem[];
  about?: string;
};

export function FeaturedRiderCard({ image, name, nickname, category, instagram, info, about }: Props) {
  return (
    <article className="group grid md:grid-cols-[1.1fr_1.4fr] gap-0 border border-border bg-card/40 overflow-hidden max-w-5xl mx-auto">
      <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden bg-card">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-coral)] text-[var(--color-coral-foreground)] text-xs font-bold tracking-[0.25em] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {category}
        </span>
      </div>

      <div className="p-8 md:p-10 flex flex-col">
        <div className="text-xs uppercase tracking-[0.25em] text-[var(--color-coral)] mb-3">
          Atleta 
        </div>
        <h2 className="text-display text-5xl md:text-7xl leading-[0.9]">{name}</h2>
        {nickname && (
          <div className="mt-2 text-display text-2xl md:text-3xl text-[var(--color-coral)]">
            "{nickname}"
          </div>
        )}
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[var(--color-coral)] transition-colors"
          >
            <Instagram size={16} />
            <span>@{instagram.replace(/^https?:\/\/(www\.)?instagram\.com\//, "").replace(/\/$/, "")}</span>
          </a>
        )}

        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6">
          {info.map((item) => (
            <Info key={item.label} label={item.label} value={item.value} />
          ))}
        </dl>

        {about && (
          <div className="mt-8 border-t border-border pt-6">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Sobre</div>
            <p className="text-sm md:text-base leading-relaxed text-foreground/90">{about}</p>
          </div>
        )}
      </div>
    </article>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground mb-1">{label}</dt>
      <dd className="text-sm md:text-base font-medium">{value}</dd>
    </div>
  );
}
