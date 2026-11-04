import { createFileRoute } from "@tanstack/react-router";

import { ProductListing } from "@/components/pko/product-listing";
import { LoanCalculator } from "@/components/pko/loan-calculator";
import { kredytyTabs } from "@/components/pko/content";

export const Route = createFileRoute("/klient-indywidualny/kredyty-pozyczki")({
  head: () => ({
    meta: [
      { title: "Pożyczki i kredyty | PKO Bank Polski" },
      {
        name: "description",
        content:
          "Pożyczka gotówkowa online, kredyty hipoteczne i limity na koncie — oblicz ratę i sprawdź ofertę.",
      },
      { property: "og:title", content: "Pożyczki i kredyty | PKO Bank Polski" },
      { property: "og:description", content: "Pożyczki gotówkowe, kredyty hipoteczne i limity na koncie." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KredytyPage,
});

function KredytyPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProductListing
        eyebrow="Klient indywidualny"
        title="Pożyczki i kredyty"
        subtitle="Gotówka online, kredyt hipoteczny na wymarzone mieszkanie albo dodatkowe środki na koncie."
        tabs={kredytyTabs}
      />
      <LoanCalculator />
    </div>
  );
}
