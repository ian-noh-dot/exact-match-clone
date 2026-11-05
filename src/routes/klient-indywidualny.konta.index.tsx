import { createFileRoute } from "@tanstack/react-router";

import { ProductListing } from "@/components/pko/product-listing";
import { kontaTabs } from "@/components/pko/content";

export const Route = createFileRoute("/klient-indywidualny/konta/")({
  head: () => ({
    meta: [
      { title: "Konta | PKO Bank Polski" },
      {
        name: "description",
        content:
          "Konta osobiste, oszczędnościowe, walutowe i dla dzieci — znajdź konto dopasowane do siebie i korzystaj z promocji.",
      },
      { property: "og:title", content: "Konta | PKO Bank Polski" },
      {
        property: "og:description",
        content: "Konta osobiste, oszczędnościowe, walutowe i dla dzieci w PKO Banku Polskim.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KontaPage,
});

function KontaPage() {
  return (
    <ProductListing
      eyebrow="Klient indywidualny"
      title="Konta"
      subtitle="Wybierz konto dla siebie — osobiste, oszczędnościowe, walutowe albo dla dziecka — i skorzystaj z aktualnych promocji."
      tabs={kontaTabs}
    />
  );
}
