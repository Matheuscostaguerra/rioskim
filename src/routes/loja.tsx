import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/loja")({
  head: () => ({
    meta: [
      { title: "Loja — RioSkim" },
      { name: "description", content: "Loja oficial da comunidade RioSkim." },
      { property: "og:title", content: "Loja — RioSkim" },
      { property: "og:description", content: "Loja oficial da comunidade RioSkim." },
    ],
    links: [{ rel: "canonical", href: "https://loja.rioskim.com" }],
  }),
  component: ShopRedirect,
});

function ShopRedirect() {
  useEffect(() => {
    window.location.replace("https://loja.rioskim.com");
  }, []);

  return null;
}
