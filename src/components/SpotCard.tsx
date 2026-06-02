type Props = {
  image: string;
  name: string;
  difficulty: "Iniciante" | "Intermediário" | "Avançado" | "Todos os níveis";
  bottom: string;
  zone: string;
};

export function SpotCard({ image, name, difficulty, bottom, zone }: Props) {
  const diffColor =
    difficulty === "Avançado"
      ? "text-[var(--color-coral)] border-[var(--color-coral)]"
      : "";
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden bg-card mb-4">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{zone}</div>
            <h3 className="text-display text-3xl md:text-4xl">{name}</h3>
          </div>
          <span className={`tag-pill ${diffColor}`}>{difficulty}</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">Fundo: {bottom}</p>
    </article>
  );
}
