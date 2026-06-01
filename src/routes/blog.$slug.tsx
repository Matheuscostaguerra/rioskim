import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { NEWS } from "@/lib/data";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = NEWS.find((n) => n.slug === params.slug);
    const title = post ? `${post.title} — RioSkim` : "Post — RioSkim";
    const desc = post?.excerpt ?? "Reports e cultura do skimboard carioca.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(post?.image ? [{ property: "og:image", content: post.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const post = NEWS.find((n) => n.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: BlogPostPage,
  notFoundComponent: () => {
    const { slug } = Route.useParams();
    return (
      <section className="container-rio py-24">
        <div className="tag-pill mb-4">404</div>
        <h1 className="text-display text-4xl md:text-6xl">Post "{slug}" não encontrado.</h1>
        <Link to="/blog" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-coral)]">
          <ArrowLeft size={12} /> Voltar para notícias
        </Link>
      </section>
    );
  },
  errorComponent: ({ error }) => (
    <section className="container-rio py-24">
      <div className="tag-pill mb-4">Erro</div>
      <h1 className="text-display text-3xl md:text-5xl">Algo deu errado.</h1>
      <p className="mt-4 text-sm text-muted-foreground">{error.message}</p>
    </section>
  ),
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  return (
    <article className="container-rio py-16 md:py-24">
      <Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft size={12} /> Notícias
      </Link>
      <div className="tag-pill mb-6">{post.tag}</div>
      <h1 className="text-display text-4xl md:text-7xl leading-[0.95] max-w-4xl">
        {post.title}
      </h1>
      <div className="relative aspect-[16/9] overflow-hidden bg-card my-10 md:my-14">
        <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
      </div>
      {post.excerpt && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          {post.excerpt}
        </p>
      )}
      {post.content && (
        <div className="prose prose-invert max-w-3xl mt-10 md:mt-14">
          {post.content.split('\n\n').map((paragraph: string, i: number) => (
            <p key={i} className="text-base leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </article>
  );
}
