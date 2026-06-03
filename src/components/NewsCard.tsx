import { Link } from "@tanstack/react-router";

type Props = {
  image: string;
  title: string;
  tag: string;
  excerpt?: string;
  size?: "lg" | "md";
  slug?: string;
};

export function NewsCard({ image, title, tag, excerpt, size = "md", slug }: Props) {
  const content = (
    <article className="group cursor-pointer">
      <div className={`relative overflow-hidden bg-card mb-4 ${size === "lg" ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 tag-pill bg-background/80 backdrop-blur">
          {tag}
        </span>
      </div>
      <h3 className={`text-display ${size === "lg" ? "text-3xl md:text-5xl" : "text-2xl"} leading-[0.95] group-hover:text-[var(--color-coral)] transition-colors`}>
        {title}
      </h3>
      {excerpt && (
        <p className="mt-3 text-sm text-muted-foreground max-w-prose">{excerpt}</p>
      )}
    </article>
  );

  if (slug) {
    return (
      <Link to="/blog/$slug" params={{ slug }} className="block">
        {content}
      </Link>
    );
  }
  return content;
}
