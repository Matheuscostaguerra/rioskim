import heroSkim from "@/assets/hero-skim.jpg";
import projetoTradicaoCover from "@/assets/projeto-tradicao-cover.jpeg";
import elReyCover from "@/assets/el-rey-de-lovers-cover.jpg";
import skimForecastCover from "@/assets/skim-forecast-cover.jpeg";
import riderSapo from "@/assets/rider-sapo.jpg";
import riderSergio from "@/assets/rider-sergio.jpg";
import spotMacumba from "@/assets/macumba.jpg";
import spotVidigal from "@/assets/vidigal.jpeg";
import spotItacoatiara from "@/assets/itacoatiara.jpg";



// 👇 Importe as fotos do Leo e da Julia
import leoFreitas from "@/assets/leo-freitas-el-rey-2026.png";
import juliaDias from "@/assets/julia-dias-el-rey-2026.jpg";

export const IMAGES = {
  hero: heroSkim,
  spots: {
    macumba: spotMacumba,
    vidigal: spotVidigal,
    itacoatiara: spotItacoatiara,
  },
  news: [projetoTradicaoCover, elReyCover, skimForecastCover],
  riders: [riderSapo, riderSergio],
};

export const SPOTS = [
  {
    slug: "macumba",
    name: "Macumba",
    zone: "Zona Sudoeste",
    image: spotMacumba,
    difficulty: "Intermediário" as const,
    bottom: "Areia, fundo de praia",
    description:
      "O spot mais consistente do Rio para o skim. Shorebreak com ondas que quebram direto na beira — o meio da praia é o pico. Já recebeu o King of Skim e atrai skimmers de todo o país.",
  },
  {
    slug: "vidigal",
    name: "Praia do Vidigal",
    zone: "Zona Sul",
    image: spotVidigal,
    difficulty: "Todos os níveis" as const,
    bottom: "Areia com muita pedra — exige atenção",
    description:
      "Pico constante com opções para todos os níveis. No canto esquerdo, quando a areia aparece e a ondulação está certa, rola a lateral — onda que bate na pedra e volta conectando em outra, uma das melhores do Rio. O pedrão no meio é para os avançados, e perto da escada o mar é mais tranquilo para quem está aprendendo. O fundo misto de areia e pedra eleva o risco e exige respeito.",
  },
  {
    slug: "itacoatiara",
    name: "Itacoatiara",
    zone: "Niterói",
    image: spotItacoatiara,
    difficulty: "Avançado" as const,
    bottom: "Areia, fundo de praia",
    description:
      "Clássico quando rola para o skimboard. Ondas pesadas na beira, praia linda e pico feito para o surf de verdade. Com swell forte fica gigante — espetáculo para quem gosta de assistir surfistas de onda grande no tow-in. Quando as condições alinham, é experiência de outro nível.",
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


export const RIDERS: { name: string; spot: string; handle: string; image: string }[] = [{
    name: "Sapo",
    spot: "Recreio",      // ajuste se necessário
    handle: "@sapo",      // ajuste o @ correto
    image: riderSapo,
  },
  {
    name: "Sergio",
    spot: "Barra",        // ajuste se necessário
    handle: "@sergio",    // ajuste o @ correto
    image: riderSergio,
  },
];

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
    status: "concluido",
  },
  {
    date: "07-09 Ago",
    title: "Zap World Championships of Skimboarding",
    location: "Dewey Beach, DE",
    status: "concluido",
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
