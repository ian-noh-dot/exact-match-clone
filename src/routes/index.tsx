import { createFileRoute } from "@tanstack/react-router";

import { HeroCarousel } from "@/components/pko/hero-carousel";
import { NeedsCarousel } from "@/components/pko/needs-carousel";
import { LoanCalculator } from "@/components/pko/loan-calculator";
import { AppPromo } from "@/components/pko/app-promo";
import { NewsTeaser } from "@/components/pko/aktualnosci";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PKO Bank Polski – Nawet do 1000 zł z PKO Kontem za Zero" },
      {
        name: "description",
        content:
          "Otwórz PKO Konto za Zero z kartą Visa i zyskaj do 600 zł w promocji „Bankuj z Samsung” oraz 400 zł w promocji „400 zł z Samsung”.",
      },
      { property: "og:title", content: "PKO Bank Polski – Nawet do 1000 zł z PKO Kontem za Zero" },
      {
        property: "og:description",
        content:
          "Otwórz konto i zyskaj do 1000 zł z kartą Visa w promocjach „Bankuj z Samsung” oraz „400 zł z Samsung”.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroCarousel />
        <NeedsCarousel />
        <LoanCalculator />
        <AppPromo />
        <NewsTeaser />
      </main>
    </div>
  );
}
