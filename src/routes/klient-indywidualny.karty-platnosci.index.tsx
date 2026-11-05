import { createFileRoute } from "@tanstack/react-router";

import { ProductListing } from "@/components/pko/product-listing";
import { kartyTabs } from "@/components/pko/content";

export const Route = createFileRoute("/klient-indywidualny/karty-platnosci/")({
  head: () => ({
    meta: [
      { title: "Karty i płatności | PKO Bank Polski" },
      {
        name: "description",
        content:
          "Karty kredytowe, karty do konta i wygodne płatności mobilne — wybierz kartę i sposób płacenia dopasowany do siebie.",
      },
      { property: "og:title", content: "Karty i płatności | PKO Bank Polski" },
      { property: "og:description", content: "Karty kredytowe, karty do konta i płatności mobilne." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KartyPage,
});

function KartyPage() {
  return (
    <ProductListing
      eyebrow="Klient indywidualny"
      title="Karty i płatności"
      subtitle="Karty kredytowe, karty do konta oraz wygodne płatności telefonem, zegarkiem i w internecie."
      tabs={kartyTabs}
    />
  );
}
