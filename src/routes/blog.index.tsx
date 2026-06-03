import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { NewsCard } from "@/components/NewsCard";
import { getAllNotionPosts } from "@/lib/notion.functions";

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
  loader: () => getAllNotionPosts(),
  component: BlogPage,
  errorComponent: ({ error }) => (
    <section className="container-rio py-24">
      <div className="tag-pill mb-4">Erro</div>
      <h1 className="text-display text-3xl md:text-5xl">Não foi possível carregar.</h1>
      <p className="mt-4 text-sm text-muted-foreground">{error.message}</p>
    </section>
  ),
});

function BlogPage() {
  const posts = Route.useLoaderData();
  return (
    <>
      <PageHeader
        eyebrow="Notícias"
        title="Reports da areia."
        subtitle="Campeonato, comunidade, cultura e condição. Sem encheção."
      />
      <section className="container-rio py-16 md:py-24">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">Nenhum post publicado ainda.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {posts.map((p) => (
              <NewsCard
                key={p.id}
                image={p.image || "/placeholder.svg"}
                title={p.title}
                tag={p.tag}
                excerpt={p.excerpt || ""}
                slug={p.slug}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
