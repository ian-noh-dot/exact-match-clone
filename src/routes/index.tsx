import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/pko/site-header";
import { Hero } from "@/components/pko/hero";
import { PromoIntro } from "@/components/pko/promo-intro";
import { Benefits } from "@/components/pko/benefits";
import { Promotions } from "@/components/pko/promotions";
import { PromoTabs } from "@/components/pko/promo-tabs";
import { NeedsCarousel } from "@/components/pko/needs-carousel";
import { Steps } from "@/components/pko/steps";
import { DocumentsAndLegal } from "@/components/pko/documents-legal";
import { SiteFooter } from "@/components/pko/site-footer";

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
      <SiteHeader />
      <main>
        <Hero />
        <PromoIntro />
        <Benefits />
        <Promotions />
        <PromoTabs />
        <NeedsCarousel />
        <Steps />
        <DocumentsAndLegal />
      </main>
      <SiteFooter />
    </div>
  );
}
