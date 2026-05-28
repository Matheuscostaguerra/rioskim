import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { FeaturedRiderCard } from "@/components/FeaturedRiderCard";
import sergioImg from "@/assets/rider-sergio.jpg";
import sapoImg from "@/assets/rider-sapo.jpg";

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

function RidersPage() {
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
        <div className="space-y-10 md:space-y-14">
          <FeaturedRiderCard
            image={sergioImg}
            name="Sergio Baia"
            category="Master"
            instagram="https://www.instagram.com/sergiobaiapersonal/"
            info={[
              { label: "Idade", value: "49 anos" },
              { label: "Base", value: "Regular" },
              { label: "Praias", value: "Leblon · Vidigal" },
              { label: "Hobbies", value: "Moto · Frescobol" },
            ]}
            about="Skimboarder há mais de 20 anos, formado em Educação Física pela UFRJ, personal trainer e colaborador do RioSkim desde a fundação."
          />
          <FeaturedRiderCard
            image={sapoImg}
            name="Thiago da Cruz Soares"
            nickname="Sapo"
            category="Master"
            instagram="https://www.instagram.com/thiagosaposkim/"
            info={[
              { label: "Base", value: "Regular" },
              { label: "Região", value: "Costa Verde" },
              { label: "Picos na região", value: "Jacareí · Sununguinha" },
              { label: "Picos no Brasil", value: "Sununga · São Conrado · Raladinho" },
            ]}
          />
        </div>

        <div className="mt-16 md:mt-20 border border-border py-10 px-6 text-center">
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Mais riders em breve. É rider do Rio? Manda seus dados pra gente.
          </p>
        </div>
      </section>
    </>
  );
}

