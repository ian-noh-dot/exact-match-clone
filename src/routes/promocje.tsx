import { createFileRoute } from "@tanstack/react-router";

import { ProductListing } from "@/components/pko/product-listing";
import { promocjeTabs } from "@/components/pko/content";

export const Route = createFileRoute("/promocje")({
  head: () => ({
    meta: [
      { title: "Promocje, rabaty i oferty specjalne | PKO Bank Polski" },
      {
        name: "description",
        content:
          "Aktualne promocje, rabaty i oferty specjalne dla klientów PKO Banku Polskiego — konta, karty, lokaty i cashback.",
      },
      { property: "og:title", content: "Promocje, rabaty i oferty specjalne | PKO Bank Polski" },
      {
        property: "og:description",
        content: "Aktualne promocje i oferty specjalne dla klientów PKO Banku Polskiego.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PromocjePage,
});

function PromocjePage() {
  return (
    <ProductListing
      eyebrow="Dla Ciebie"
      title="Promocje, rabaty i oferty specjalne"
      subtitle="Sprawdź aktualne promocje dla nowych i obecnych klientów — zwroty, cashbacki i oferty partnerskie."
      tabs={promocjeTabs}
    />
  );
}
