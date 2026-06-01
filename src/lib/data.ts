import heroSkim from "@/assets/hero-skim.jpg";
import spotBarra from "@/assets/spot-barra.jpg";
import spotRecreio from "@/assets/spot-recreio.jpg";
import spotGrumari from "@/assets/spot-grumari.jpg";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import projetoTradicaoCover from "@/assets/projeto-tradicao-cover.jpeg";
import elReyCover from "@/assets/el-rey-de-lovers-cover.jpg";
import skimForecastCover from "@/assets/skim-forecast-cover.jpeg";
import rider1 from "@/assets/rider-1.jpg";
import rider2 from "@/assets/rider-2.jpg";
import rider3 from "@/assets/rider-3.jpg";
import rider4 from "@/assets/rider-4.jpg";

// 👇 Importe as fotos do Leo e da Julia
import leoFreitas from "@/assets/leo-freitas-el-rey-2026.png";
import juliaDias from "@/assets/julia-dias-el-rey-2026.jpg";

export const IMAGES = {
  hero: heroSkim,
  spots: { barra: spotBarra, recreio: spotRecreio, grumari: spotGrumari },
  news: [news1, news2, news3, projetoTradicaoCover, elReyCover, skimForecastCover],
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
    slug: "skim-forecast",
    image: skimForecastCover,
    title: "Skim Forecast: a primeira ferramenta de previsão feita para o skimboard",
    tag: "Forecast" as const,
    excerpt:
      "Clique em qualquer ponto da costa mundial e veja a previsão exata para shore break. Algoritmos colaborativos, reports da comunidade e dados de bóias oceânicas — tudo num só lugar.",
    content: `Durante anos, skimmers ao redor do mundo dependeram de sites de previsão criados para o surf — ferramentas que funcionam bem para quem busca um pico específico, mas que nunca foram pensadas para as particularidades do skimboard. Isso muda agora.

O Skim Forecast é a primeira plataforma de previsão meteorológica e oceânica desenvolvida especificamente para o skim. Diferente dos sites tradicionais, que prendem o usuário a uma lista fixa de picos cadastrados, o Skim Forecast funciona com um mapa-múndi em mundo aberto: basta clicar em qualquer ponto da costa global para visualizar a previsão exata daquele local — swell, vento, maré, direção —, sem limitações geográficas.

A inteligência está na comunidade

O grande diferencial da plataforma está no seu algoritmo de predição probabilística, alimentado diretamente pelos usuários. Qualquer pessoa pode criar um Spot — cadastrando um local ainda não mapeado — e enviar Reports: avaliações em tempo real das condições do mar naquele ponto, com a possibilidade de anexar fotos e vídeos da sessão.

A lógica é simples e poderosa: cada Report registra um "momento" do mar — altura de onda, período, vento, maré, direção de swell. O algoritmo aprende com esses registros e passa a avisar automaticamente quando aquelas condições se repetirem, entregando ao usuário a janela perfeita antes mesmo de ele abrir o olho.

O foco é o mar clássico do skimboard: ondas de shore break, arrebentação rápida e próxima à beira, que exigem leitura precisa e janelas curtas. Exatamente o tipo de condição que os sites de surf nunca souberam prever com precisão para o skim.

Sem Reports? Funciona assim mesmo

Para novos spots ainda sem histórico de Reports, o Skim Forecast opera como uma plataforma de previsão convencional, utilizando os mesmos dados meteorológicos e oceanográficos disponíveis publicamente — modelos como GFS, ECMWF e dados de bóias oceânicas. Ou seja: mesmo sem a inteligência comunitária ativa, a ferramenta já entrega valor real.

Com o crescimento da base de usuários e o acúmulo de Reports, o algoritmo se torna progressivamente mais preciso — criando um ciclo virtuoso onde a comunidade skimmer é, ela mesma, o maior ativo da plataforma.`,
  },
  {
    id: "2",
    slug: "projeto-tradicao",
    image: projetoTradicaoCover,
    title: "Projeto Tradição Skimboard: transformando vidas em Mangaratiba",
    tag: "Comunidade" as const,
    excerpt:
      "Ailton Fernandes, precursor do skim em Ibicuí, lidera iniciativa que atende jovens de 8 a 18 anos e sonha em transformar Mangaratiba numa meca do skimboard.",
    content: `Em Ibicuí, pequena praia da Costa Verde fluminense, o skimboard não é apenas um esporte — é uma tradição viva. E quem mais contribuiu para manter essa chama acesa se chama Ailton Fernandes.

Precursor do skim na região, Ailton viveu o esporte desde os primórdios: fabricou pranchas de madeira, as primeiras de fibra de vidro, e acompanhou de perto cada geração que chegava à beira d'água. Enquanto o skim ganhava câmeras e mídia no Leblon, em Ibicuí ele crescia de forma raiz — com pranchas improvisadas, as famosas "Sonrisal", redondas e adaptadas, e muita garra.

Hoje, Ailton transforma essa história em propósito com o Projeto Tradição Skimboard — uma iniciativa de inclusão social, educação e desenvolvimento esportivo que atende crianças e jovens de 8 a 18 anos, prioritariamente da rede pública e em situação de vulnerabilidade social de Ibicuí e região.

O projeto funciona 2 a 3 vezes por semana na Praia de Ibicuí, com capacidade para 50 alunos — atualmente com 30 inscritos. Além de ensinar a andar de skim, o projeto incentiva o desempenho escolar, desenvolve disciplina e responsabilidade, promove educação ambiental e forma futuros atletas.

"A ideia é transformar Mangaratiba numa meca do skimboard" — resume o espírito do projeto e de um homem que não apenas viveu a história do esporte na região, mas ajudou a construí-la.`,
  },
  {
    id: "3",
    slug: "el-rey-de-lovers-2026",
    image: elReyCover,
    title: "El Rey de Lovers 2026: os melhores momentos do México",
    tag: "Campeonato" as const,
    excerpt:
      "Cabo San Lucas recebeu os melhores do mundo. Veja como foi o evento que abriu a temporada internacional.",
    // 👇 Imagens inline referenciadas pelos marcadores no content
    images: {
      leo: leoFreitas,
      julia: juliaDias,
    },
    content: `[IMAGE:leo]

Leo Freitas é o melhor brasileiro no El Rey de Lovers

Nas ondas pesadas de Cabo San Lucas, no México, Leo Freitas entregou uma das melhores atuações brasileiras da temporada. O carioca terminou em 4º lugar na etapa El Rey de Lovers — abertura do UST 2026 — superando um field de 31 atletas e ficando à frente dos compatriotas João Lucas, Daniel Azevedo e Pedro Lima.

O pódio ficou com Gerado Valencia (🥇 México), Chad Wadsworth (🥈 EUA) e Yahir Valencia (🥉 México). Mas o resultado de Leo tem um peso especial: sem um título UST na carreira, ele inicia 2026 ocupando o 4º lugar no ranking mundial — o brasileiro mais pontuado da temporada. A corrida pelo título começou. Bora, Leo! 🇧🇷🌊

Data: 17–19 de abril de 2026 · Local: Cabo San Lucas, México

[IMAGE:julia]

Julia Dias vence a abertura do UST 2026 — Campeã em Cabo San Lucas!

Orgulho brasileiro! Julia Dias, de Ubatuba (SP), conquistou o título da categoria feminina na etapa El Rey de Lovers — abertura do UST 2026 — nas pesadas esteiras de Cabo San Lucas, México.

Com drop afiado, leitura de onda milimétrica e wraps precisos, Julia superou Isabel Blanco (🥈 México), Amber Torrealba (🥉 EUA) e Sydney Pizza (4ª, EUA) para garantir o primeiro lugar do pódio.

A vitória não é só um resultado — é uma declaração. Julia Dias começa 2026 no topo do ranking e já está na corrida pelo título profissional feminino. Parabéns, Julia! 🇧🇷🌊🔥

Data: 17–19 de abril de 2026 · Local: Cabo San Lucas, México`,
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
