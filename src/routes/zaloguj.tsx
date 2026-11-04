import { createFileRoute } from "@tanstack/react-router";

import { LoginPage } from "@/components/pko/login-page";

export const Route = createFileRoute("/zaloguj")({
  head: () => ({
    meta: [
      { title: "Zaloguj się | PKO Bank Polski (wersja demonstracyjna)" },
      {
        name: "description",
        content:
          "Ekran logowania do bankowości internetowej — wersja demonstracyjna strony, bez prawdziwego logowania.",
      },
      { property: "og:title", content: "Zaloguj się | PKO Bank Polski (wersja demonstracyjna)" },
      {
        property: "og:description",
        content: "Ekran logowania do bankowości internetowej — wersja demonstracyjna.",
      },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});
