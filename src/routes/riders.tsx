import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { FeaturedRiderCard } from "@/components/FeaturedRiderCard";

export const Route = createFileRoute("/riders")({
  head: () => ({
    meta: [
      { title: "Riders — RioSkim" },
      { name: "description", content: "Os riders da comunidade de skimboard do Rio." },
      { property: "og:title", content: "Riders — RioSkim" },
      { property: "og:description", content: "Quem mora no shorebreak do Rio." },
    ],
    links: [{ rel: "canonical", href: "/riders" }],
  }),
  component: RidersPage,
});

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRvG6LsUsl8GHit8ESzXQysDXIHbDrbMdvwyYcUdmN0vgaSfM32uICwVb34VV2euhj9_A3FAkwYg9-D/pub?output=csv";

type RiderRow = Record<string, string>;

function toDirectImageUrl(url: string): string {
  if (!url) return "";
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return url;
}

function parseCSV(text: string): RiderRow[] {
  const rows: string[][] = [];
  let cur: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else {
      if (c === '"') {
        inQuotes = true;
      } else if (c === ",") {
        cur.push(field);
        field = "";
      } else if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        cur.push(field);
        rows.push(cur);
        cur = [];
        field = "";
      } else {
        field += c;
      }
    }
  }
  if (field.length > 0 || cur.length > 0) {
    cur.push(field);
    rows.push(cur);
  }

  if (rows.length === 0) return [];
  const headers = rows[0].map((h) => h.trim());
  return rows
    .slice(1)
    .filter((r) => r.some((v) => v.trim() !== ""))
    .map((r) => {
      const obj: RiderRow = {};
      headers.forEach((h, idx) => {
        obj[h] = (r[idx] ?? "").trim();
      });
      return obj;
    });
}

function RidersPage() {
  const [riders, setRiders] = useState<RiderRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(CSV_URL)
      .then((res) => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.text();
      })
      .then((text) => {
        if (cancelled) return;
        setRiders(parseCSV(text));
        setLoading(false);
      })
      .catch((e) => {
        if (cancelled) return;
        setError(e.message || "Erro ao carregar");
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Comunidade"
        title="A gente."
        subtitle="Profissionais, locais, veteranos e a galera que tá começando. O skim do Rio é feito por essas pessoas."
      />

      <section className="container-rio py-16 md:py-24">
        <div className="mb-10 md:mb-14">
          <div className="tag-pill mb-3 text-[var(--color-coral)] border-[var(--color-coral)]">Destaque</div>
          <h2 className="text-display text-3xl md:text-5xl">Atletas em foco</h2>
        </div>

        {loading && (
          <div className="py-16 text-center text-sm text-muted-foreground">
            Carregando riders…
          </div>
        )}

        {error && !loading && (
          <div className="py-16 text-center text-sm text-muted-foreground">
            Não foi possível carregar os riders agora. Tenta de novo daqui a pouco.
          </div>
        )}

        {!loading && !error && (
          <div className="space-y-10 md:space-y-14">
            {riders.map((r, i) => {
              const info = [1, 2, 3, 4]
                .map((n) => ({
                  label: r[`label${n}`] ?? "",
                  value: r[`value${n}`] ?? "",
                }))
                .filter((item) => item.label !== "" && item.value !== "");

              return (
                <FeaturedRiderCard
                  key={`${r.name}-${i}`}
                  image={r.imageUrl}
                  name={r.name}
                  nickname={r.nickname ? r.nickname : undefined}
                  category={r.category}
                  instagram={r.instagram ? r.instagram : undefined}
                  about={r.about ? r.about : undefined}
                  info={info}
                />
              );
            })}
          </div>
        )}

        <div className="mt-16 md:mt-20 border border-border py-10 px-6 text-center">
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Mais riders em breve. É rider do Rio? Manda seus dados pra gente.
          </p>
        </div>
      </section>
    </>
  );
}
