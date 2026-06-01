import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { NewsCard } from "@/components/NewsCard";
import { NEWS } from "@/lib/data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Notícias — RioSkim" },
      { name: "description", content: "Reports e cultura do skimboard carioca." },
      { property: "og:title", content: "Notícias — RioSkim" },
      { property: "og:description", content: "Reports e cultura do skim." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Notícias"
        title="Reports da areia."
        subtitle="Campeonato, comunidade, cultura e condição. Sem encheção."
      />
      <section className="container-rio py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {NEWS.map((n) => (
            <NewsCard key={n.id} {...n} />
          ))}
        </div>
      </section>
    </>
  );
}
