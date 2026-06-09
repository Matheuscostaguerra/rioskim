import { useQuery } from "@tanstack/react-query";
import { getSponsors } from "@/lib/sponsors.functions";

export function SponsorsSection() {
  const { data } = useQuery({
    queryKey: ["sponsors"],
    queryFn: () => getSponsors(),
  });

  const sponsors = data?.sponsors ?? [];
  if (sponsors.length === 0) return null;

  const topSponsors = sponsors.slice(0, 3);

  return (
    <section
      style={{ backgroundColor: "#1a1a2e" }}
      className="py-16 md:py-20 border-y border-white/10"
    >
      <div className="container-rio">
        <p
          className="text-center text-xs uppercase tracking-[0.2em] mb-10 md:mb-14"
          style={{ color: "var(--color-coral)" }}
        >
          APOIADORES
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {topSponsors.map((s) => (
            <a
              key={s.nome}
              href={s.site_url}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="transition-all duration-300 group-hover:scale-105 group-hover:ring-1 group-hover:ring-white/30 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] rounded-lg p-3">
                <img
                  src={s.logo_url}
                  alt={s.nome}
                  className="h-[120px] md:h-[160px] w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
