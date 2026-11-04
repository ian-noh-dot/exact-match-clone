import { createFileRoute } from "@tanstack/react-router";

import { OpenAccountWizard } from "@/components/pko/open-account-wizard";

export const Route = createFileRoute("/otworz-konto")({
  head: () => ({
    meta: [
      { title: "Otwórz konto online | PKO Bank Polski" },
      {
        name: "description",
        content:
          "Otwórz PKO Konto za Zero online z kartą Visa — wniosek zajmie Ci kilka minut w aplikacji mobilnej.",
      },
      { property: "og:title", content: "Otwórz konto online | PKO Bank Polski" },
      {
        property: "og:description",
        content: "Otwórz PKO Konto za Zero online z kartą Visa w kilku krokach.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OpenAccountWizard,
});
