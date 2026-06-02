import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { IMAGES } from "@/lib/data";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — RioSkim" },
      { name: "description", content: "Fotos da comunidade de skimboard do Rio de Janeiro." },
      { property: "og:title", content: "Galeria — RioSkim" },
      { property: "og:description", content: "Fotos da comunidade." },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
const pool = [
  IMAGES.hero,
  IMAGES.news[0],
  IMAGES.spots.macumba,
  IMAGES.riders[0],       // Sapo
  IMAGES.news[1],
  IMAGES.spots.vidigal,
  IMAGES.riders[1],       // Sergio
  IMAGES.news[2],
  IMAGES.spots.itacoatiara,
  IMAGES.hero,
];

  return (
    <>
      <PageHeader eyebrow="Imagens" title="Areia, água, gente." subtitle="Cliques da comunidade. Mande os seus." />
      <section className="container-rio py-12 md:py-20">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
          {pool.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-auto block hover:opacity-80 transition-opacity cursor-pointer"
            />
          ))}
        </div>
      </section>
    </>
  );
}
