export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-baseline ${className}`}>
      <span className="text-display text-2xl md:text-3xl tracking-wide">
        <span className="text-[var(--color-coral)]">R</span>
        <span>IO</span>
        <span className="text-[var(--color-coral)]">·</span>
        <span>SKIM</span>
      </span>
    </div>
  );
}
