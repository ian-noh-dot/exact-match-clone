import { createFileRoute } from "@tanstack/react-router";
import { Banknote, CreditCard, Gift, PiggyBank, Smartphone, Wallet } from "lucide-react";

import { ProductListing } from "@/components/pko/product-listing";
import type { ListingTab } from "@/components/pko/content";

export const Route = createFileRoute("/klient-indywidualny/oferta")({
  head: () => ({
    meta: [
      { title: "Oferta | PKO Bank Polski" },
      {
        name: "description",
        content: "Konta, pożyczki i kredyty, karty, oszczędzanie i inwestycje oraz bankowość elektroniczna w PKO Banku Polskim.",
      },
      { property: "og:title", content: "Oferta | PKO Bank Polski" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OfertaPage,
});

const ofertaTabs: ListingTab[] = [
  {
    label: "Wszystkie",
    sections: [
      {
        tiles: [
          { title: "Konta", text: "Konta osobiste, oszczędnościowe, walutowe i dla dzieci", icon: Wallet, href: "/klient-indywidualny/konta" },
          { title: "Pożyczki i kredyty", text: "Pożyczka gotówkowa online, kredyty hipoteczne i limity na koncie", icon: Banknote, href: "/klient-indywidualny/kredyty-pozyczki" },
          { title: "Karty i płatności", text: "Karty debetowe i kredytowe, Allegro Klik i płatności telefonem", icon: CreditCard, href: "/klient-indywidualny/karty-platnosci" },
          { title: "Oszczędzanie i inwestycje", text: "Lokaty, Konto Oszczędnościowe, obligacje i fundusze", icon: PiggyBank, href: "/klient-indywidualny/oszczedzanie-inwestycje" },
          { title: "Bankowość elektroniczna", text: "Aplikacja mobilna i serwis internetowy PKO", icon: Smartphone, href: "/klient-indywidualny/bankowosc-elektroniczna" },
          { title: "Promocje", text: "Aktualne promocje i oferty specjalne dla klientów", icon: Gift, href: "/promocje" },
        ],
      },
    ],
  },
];

function OfertaPage() {
  return (
    <ProductListing
      eyebrow="Klient indywidualny"
      title="Oferta"
      subtitle="Konta, karty, kredyty, oszczędności i bankowość elektroniczna — wszystko w jednym miejscu."
      tabs={ofertaTabs}
    />
  );
}
