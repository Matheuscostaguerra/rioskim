import heroSkim from "@/assets/hero-skim.jpg";
import spotBarra from "@/assets/spot-barra.jpg";
import spotRecreio from "@/assets/spot-recreio.jpg";
import spotGrumari from "@/assets/spot-grumari.jpg";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import rider1 from "@/assets/rider-1.jpg";
import rider2 from "@/assets/rider-2.jpg";
import rider3 from "@/assets/rider-3.jpg";
import rider4 from "@/assets/rider-4.jpg";

export const IMAGES = {
  hero: heroSkim,
  spots: { barra: spotBarra, recreio: spotRecreio, grumari: spotGrumari },
  news: [news1, news2, news3],
  riders: [rider1, rider2, rider3, rider4],
};

export const SPOTS = [
  {
    slug: "barra",
    name: "Barra da Tijuca",
    zone: "Zona Oeste",
    image: spotBarra,
    difficulty: "Intermediário" as const,
    bottom: "Areia fina, banco aberto",
    description:
      "O ponto de encontro. Praia longa, fácil acesso, ondas constantes pra quem tá começando ou treinando manobra.",
  },
  {
    slug: "recreio",
    name: "Recreio",
    zone: "Zona Oeste",
    image: spotRecreio,
    difficulty: "Avançado" as const,
    bottom: "Banco fundo, shorebreak pesado",
    description:
      "O templo. Shorebreak rápido e poderoso. Aqui o nível sobe — e o respeito pela onda também.",
  },
  {
    slug: "grumari",
    name: "Grumari",
    zone: "Zona Oeste",
    image: spotGrumari,
    difficulty: "Avançado" as const,
    bottom: "Pedra e areia, fundo variável",
    description:
      "Selvagem, isolada, sem estrutura. Quando quebra, é pra poucos. Vai cedo, vai sóbrio, vai com respeito.",
  },
];

export const NEWS = [
  {
    id: "1",
    image: news1,
    title: "Recreio amanheceu épico — e ninguém estava lá pra ver",
    tag: "Forecast" as const,
    excerpt:
      "Swell de SE alinhado com vento terral por três horas. A janela perfeita que quase ninguém pegou.",
  },
  {
    id: "2",
    image: news2,
    title: "A nova geração que mora no chão da Barra",
    tag: "Comunidade" as const,
    excerpt:
      "Eles têm entre 14 e 19 anos, andam todo dia depois da escola e estão redesenhando o que é possível no shorebreak.",
  },
  {
    id: "3",
    image: news3,
    title: "Pedro Sales fatura o Rio Skim Pro 2025",
    tag: "Campeonato" as const,
    excerpt:
      "Em uma final disputada nas séries finais do dia, Sales garantiu o título com uma manobra de assinatura.",
  },
];

export const RIDERS: { name: string; spot: string; handle: string; image: string }[] = [];

export type EventStatus = "concluido" | "em-breve";

export const EVENTS: {
  date: string;
  title: string;
  location: string;
  status: EventStatus;
}[] = [
  {
    date: "17-19 Abr",
    title: "El Rey de Lovers",
    location: "Cabo San Lucas, México",
    status: "concluido",
  },
  {
    date: "25-26 Jul",
    title: "Internacional de Skimboard '26 at Santa Cruz Ocean Spirit",
    location: "Santa Cruz, Portugal",
    status: "em-breve",
  },
  {
    date: "07-09 Ago",
    title: "Zap World Championships of Skimboarding",
    location: "Dewey Beach, DE",
    status: "em-breve",
  },
  {
    date: "22-23 Ago",
    title: "The Vic",
    location: "Laguna Beach, CA",
    status: "em-breve",
  },
  {
    date: "19-20 Set",
    title: "Exile Oktoberfest",
    location: "Newport Beach, CA",
    status: "em-breve",
  },
];
