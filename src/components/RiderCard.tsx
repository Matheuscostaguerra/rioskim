type Props = {
  image: string;
  name: string;
  spot: string;
  handle?: string;
};

export function RiderCard({ image, name, spot, handle }: Props) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-card mb-3">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-display text-xl md:text-2xl">{name}</h3>
        <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{spot}</span>
      </div>
      {handle && (
        <div className="text-xs text-[var(--color-coral)] mt-1">{handle}</div>
      )}
    </article>
  );
}
