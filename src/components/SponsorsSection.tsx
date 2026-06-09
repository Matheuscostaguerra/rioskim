import { useQuery } from "@tanstack/react-query";
import { getSponsors } from "@/lib/sponsors.functions";

export function SponsorsSection() {
  const { data } = useQuery({
    queryKey: ["sponsors"],
    queryFn: () => getSponsors(),
  });

  const sponsors = data?.sponsors ?? [];
  if (sponsors.length === 0) return null;

  return (
    <section
      className="border-y border-white/10 py-20"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="container-rio">
        <p
          className="text-center text-xs uppercase tracking-[0.2em] mb-14"
          style={{ color: "var(--color-coral)" }}
        >
          APOIADORES
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {sponsors.map((s) => (
            <a
              key={s.nome}
              href={s.site_url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={s.logo_url}
                alt={s.nome}
                className="h-32 md:h-40 w-auto object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
