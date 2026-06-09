import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center container-rio">
      <div className="max-w-md text-center">
        <h1 className="text-display text-8xl text-[var(--color-coral)]">404</h1>
        <h2 className="mt-4 text-display text-3xl">Saiu da onda</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Essa página não existe — ou ainda não foi escrita.
        </p>
        <Link to="/" className="mt-6 inline-block tag-pill hover:border-[var(--color-coral)]">
          Voltar pra casa
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[70vh] items-center justify-center container-rio">
      <div className="max-w-md text-center">
        <h1 className="text-display text-3xl">Quebrou na praia</h1>
        <p className="mt-2 text-sm text-muted-foreground">Algo deu errado. Tenta de novo.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 tag-pill hover:border-[var(--color-coral)]"
        >
          Tentar de novo
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RioSkim — A casa do skimboard no Rio" },
      { name: "description", content: "A comunidade de skimboard do Rio de Janeiro. Spots, riders, eventos e forecast." },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:site_name", content: "RioSkim" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "RioSkim — A casa do skimboard no Rio" },
      { property: "og:description", content: "A comunidade de skimboard do Rio de Janeiro. Spots, riders, eventos e forecast." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "RioSkim — A casa do skimboard no Rio" },
      { name: "twitter:description", content: "A comunidade de skimboard do Rio de Janeiro. Spots, riders, eventos e forecast." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/r77ZKBfDw5M6Telxhxf56lTLo023/social-images/social-1779975803463-RIOSKIM_OFICIAL_P.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/r77ZKBfDw5M6Telxhxf56lTLo023/social-images/social-1779975803463-RIOSKIM_OFICIAL_P.webp" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Bebas+Neue&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "RioSkim",
          alternateName: "RioSkimboard",
          url: "https://rioskim.com",
          description: "A maior comunidade de skimboard do Rio de Janeiro.",
          creator: {
            "@type": "Person",
            name: "Matheus Guerra",
            jobTitle: "Fundador e Administrador",
            url: "https://rioskim.com/sobre",
            sameAs: ["https://www.instagram.com/rioskimboard"],
          },
          publisher: {
            "@type": "Person",
            name: "Matheus Guerra",
            url: "https://rioskim.com/sobre",
            sameAs: ["https://www.instagram.com/rioskimboard"],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
