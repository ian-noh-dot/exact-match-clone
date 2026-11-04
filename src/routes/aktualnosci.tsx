import { createFileRoute } from "@tanstack/react-router";

import { NewsPage } from "@/components/pko/aktualnosci";

export const Route = createFileRoute("/aktualnosci")({
  head: () => ({
    meta: [
      { title: "Aktualności | PKO Bank Polski" },
      {
        name: "description",
        content: "Ważne informacje o produktach, usługach i bezpieczeństwie w PKO Banku Polskim.",
      },
      { property: "og:title", content: "Aktualności | PKO Bank Polski" },
      {
        property: "og:description",
        content: "Ważne informacje o produktach, usługach i bezpieczeństwie.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsPage,
});
