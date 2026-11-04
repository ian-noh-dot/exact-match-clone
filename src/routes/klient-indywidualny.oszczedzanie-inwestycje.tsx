import { createFileRoute } from "@tanstack/react-router";

import { ProductListing } from "@/components/pko/product-listing";
import { oszczedzanieTabs } from "@/components/pko/content";

export const Route = createFileRoute("/klient-indywidualny/oszczedzanie-inwestycje")({
  head: () => ({
    meta: [
      { title: "Oszczędzanie i inwestycje | PKO Bank Polski" },
      {
        name: "description",
        content:
          "Konta oszczędnościowe, lokaty, obligacje skarbowe i inwestycje — pomnóż swoje oszczędności.",
      },
      { property: "og:title", content: "Oszczędzanie i inwestycje | PKO Bank Polski" },
      { property: "og:description", content: "Konta oszczędnościowe, lokaty, obligacje i inwestycje." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OszczedzaniePage,
});

function OszczedzaniePage() {
  return (
    <ProductListing
      eyebrow="Klient indywidualny"
      title="Oszczędzanie i inwestycje"
      subtitle="Konta oszczędnościowe, lokaty, obligacje skarbowe i inwestycje online — pomnóż swoje oszczędności."
      tabs={oszczedzanieTabs}
    />
  );
}
