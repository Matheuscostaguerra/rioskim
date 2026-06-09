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
    <section className="border-y border-white/10 py-20">
      <div className="container-rio">
        <p
          className="text-center text-xs uppercase tracking-[0.2em] mb-14"
          style={{ color: "var(--color-coral)" }}
        >
          APOIADORES
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {sponsors.map((s) => (
            <a
              key={s.nome}
              href={s.site_url}
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div
                className="flex items-center justify-center rounded-xl p-6 transition-all duration-300 border border-white/[0.08] group-hover:border-white/20 group-hover:scale-[1.03] w-[120px] h-[120px] md:w-[160px] md:h-[160px]"
                style={{ backgroundColor: "#1a1a2e" }}
              >
                <img
                  src={s.logo_url}
                  alt={s.nome}
                  className="h-full w-full object-contain brightness-0 invert"
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
