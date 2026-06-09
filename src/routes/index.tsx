import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { IMAGES, SPOTS, EVENTS } from "@/lib/data";
import { SponsorsSection } from "@/components/SponsorsSection";
import { ForecastBar } from "@/components/ForecastBar";
import { SpotCard } from "@/components/SpotCard";
import { useForecast } from "@/hooks/useForecast";
import { getFeaturedNotionPosts, type NotionPost } from "@/lib/notion.functions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import sergioImg from "@/assets/rider-sergio.jpg";
import sapoImg from "@/assets/rider-sapo.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RioSkim — A casa do skimboard no Rio" },
      { name: "description", content: "A comunidade de skimboard do Rio de Janeiro. Reports, spots, riders, eventos e forecast direto da areia." },
      { property: "og:title", content: "RioSkim — A casa do skimboard no Rio" },
      { property: "og:description", content: "Spots, riders, eventos e forecast." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  loader: () => getFeaturedNotionPosts(),
  component: Index,
});

function Index() {
  const { bestSpot, loading: forecastLoading } = useForecast();
  const featured = Route.useLoaderData();

  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
        <video
          src="/hero.mp4"
          poster={IMAGES.hero}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Skimboarder na praia do Rio"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        <div className="relative container-rio h-full flex flex-col justify-end pb-16 md:pb-24">
          {forecastLoading ? (
            <div className="mb-6 self-start h-7 w-72 rounded-md bg-foreground/10 animate-pulse" />
          ) : bestSpot ? (
            <div className="tag-pill mb-6 self-start text-[var(--color-coral)] border-[var(--color-coral)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-coral)] animate-pulse" />
              Ao vivo · {bestSpot.name} quebrando agora
            </div>
          ) : null}
          <h1 className="text-display text-[clamp(3.5rem,12vw,11rem)] max-w-5xl">
            O skim é<br />
            <span className="text-[var(--color-coral)]">do Rio.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
            Reports da areia, a galera que skia, calendário de campeonato 
            e o forecast que importa. Sem firula.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/spots"
              className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[var(--color-coral)] hover:text-[var(--color-coral-foreground)] transition-colors"
            >
              Ver os spots <ArrowRight size={14} />
            </Link>
            <a
              href="https://skimforecast.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border text-xs font-semibold uppercase tracking-[0.2em] hover:border-foreground transition-colors"
            >
              Forecast ↗
            </a>
          </div>
        </div>
      </section>

      <ForecastBar />

      {/* NEWS */}
      <section className="container-rio py-20 md:py-28">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <div className="tag-pill mb-3">Reports</div>
            <h2 className="text-display text-4xl md:text-6xl">O que rolou</h2>
          </div>
          <Link to="/blog" className="hidden md:inline-flex text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
            Ver tudo →
          </Link>
        </div>
        {featured.length === 0 ? (
          <p className="text-muted-foreground">Nenhum destaque publicado ainda.</p>
        ) : (
          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-6">
              {featured.map((post: NotionPost) => (
                <CarouselItem key={post.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                  <Link to="/blog/$slug" params={{ slug: post.slug }} className="block">
                    <article className="group cursor-pointer">
                      <div className="relative overflow-hidden bg-card mb-4 aspect-[4/3]">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 tag-pill bg-background/80 backdrop-blur">
                          {post.tag}
                        </span>
                      </div>
                      <h3 className="text-display text-2xl leading-[0.95] group-hover:text-[var(--color-coral)] transition-colors">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="mt-3 text-sm text-muted-foreground max-w-prose line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}
                    </article>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
          </Carousel>
        )}
      </section>

      {/* RIDERS */}
      <section className="border-y border-border bg-card/30 py-20 md:py-28">
        <div className="container-rio">
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <div className="tag-pill mb-3">Quem rasga</div>
              <h2 className="text-display text-4xl md:text-6xl">Riders em destaque</h2>
            </div>
            <Link to="/riders" className="hidden md:inline-flex text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
              Todos os riders →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Link to="/riders" className="group block border border-border overflow-hidden bg-background">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={sergioImg} alt="Sergio Baia" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <div className="tag-pill mb-2 text-[var(--color-coral)] border-[var(--color-coral)]">Master</div>
                <div className="text-display text-2xl">Sergio Baia</div>
                <div className="text-xs text-muted-foreground mt-1">Leblon · Vidigal</div>
              </div>
            </Link>
            <Link to="/riders" className="group block border border-border overflow-hidden bg-background">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={sapoImg} alt="Thiago Sapo" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <div className="tag-pill mb-2 text-[var(--color-coral)] border-[var(--color-coral)]">Master</div>
                <div className="text-display text-2xl">
                  Thiago <span className="text-[var(--color-coral)]">"Sapo"</span> da Cruz Soares
                </div>
                <div className="text-xs text-muted-foreground mt-1">Costa Verde · Jacareí · Sununguinha</div>
              </div>
            </Link>
          </div>
          <p className="mt-8 text-xs text-muted-foreground uppercase tracking-[0.2em] text-center">
            Mais riders em breve. É rider do Rio? Manda seus dados pra gente.
          </p>
        </div>
      </section>

      {/* EVENTS */}
      <section className="container-rio py-20 md:py-28">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          <div>
            <div className="tag-pill mb-3">Calendário</div>
            <h2 className="text-display text-4xl md:text-6xl mb-6">Mundial de Skimboard</h2>
            <p className="text-sm text-muted-foreground max-w-xs">
              Etapas oficiais do tour mundial e encontros da comunidade.
            </p>
            <Link to="/eventos" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-coral)]">
              Calendário completo <ArrowRight size={12} />
            </Link>
          </div>
          {EVENTS.length === 0 ? (
            <div className="border border-border p-10 flex flex-col justify-center">
              <div className="tag-pill mb-4 self-start">Em atualização</div>
              <div className="text-display text-2xl md:text-3xl">
                Calendário do Mundial em atualização.
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-md">
                As datas oficiais das próximas etapas serão divulgadas em breve.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border border-y border-border">
              {EVENTS.map((e) => {
                const done = e.status === "concluido";
                return (
                  <div key={e.title} className={`py-6 flex items-center gap-6 group ${done ? "opacity-50" : ""}`}>
                    <div className={`text-display text-3xl md:text-4xl w-24 ${done ? "text-muted-foreground" : "text-[var(--color-coral)]"}`}>{e.date}</div>
                    <div className="flex-1">
                      <div className="text-display text-xl md:text-2xl group-hover:text-[var(--color-coral)] transition-colors">{e.title}</div>
                      <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                        <MapPin size={12} /> {e.location}
                      </div>
                    </div>
                    <span className={`tag-pill hidden sm:inline-flex ${done ? "" : "text-[var(--color-coral)] border-[var(--color-coral)]"}`}>
                      {done ? "Concluído" : "Em breve"}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>


      {/* SPOTS */}
      <section className="container-rio py-20 md:py-28">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <div className="tag-pill mb-3">Praias</div>
            <h2 className="text-display text-4xl md:text-6xl">Os spots</h2>
          </div>
          <Link to="/spots" className="hidden md:inline-flex text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
            Mapa completo →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SPOTS.map((s) => <SpotCard key={s.slug} {...s} />)}
        </div>
      </section>

      {/* FORECAST CTA */}
      <section className="border-t border-border">
        <div className="container-rio py-20 md:py-32 text-center">
          <div className="tag-pill mb-6 text-[var(--color-coral)] border-[var(--color-coral)]">
            Ferramenta
          </div>
          <h2 className="text-display text-5xl md:text-8xl max-w-4xl mx-auto leading-[0.95]">
            Vai skiar hoje?<br />
            <span className="text-muted-foreground">Check nas condições.</span>
          </h2>
          <a
            href="https://skimforecast.com"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-coral)] text-[var(--color-coral-foreground)] text-sm font-semibold uppercase tracking-[0.2em] hover:opacity-90"
          >
            skimforecast.com <ArrowRight size={16} />
          </a>
          <p className="mt-6 text-xs text-muted-foreground uppercase tracking-[0.2em]">
            Previsão de skim · grátis · feito por quem skia
          </p>
        </div>
      </section>
    </>
  );
}
