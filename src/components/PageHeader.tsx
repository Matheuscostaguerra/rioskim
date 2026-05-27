type Props = { eyebrow: string; title: string; subtitle?: string };

export function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="container-rio pt-16 md:pt-24 pb-12 md:pb-16 border-b border-border">
      <div className="tag-pill mb-4 text-[var(--color-coral)] border-[var(--color-coral)]">{eyebrow}</div>
      <h1 className="text-display text-5xl md:text-8xl leading-[0.95] max-w-4xl">{title}</h1>
      {subtitle && (
        <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">{subtitle}</p>
      )}
    </section>
  );
}
