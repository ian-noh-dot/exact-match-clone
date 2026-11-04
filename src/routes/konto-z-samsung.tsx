import { createFileRoute } from "@tanstack/react-router";

import { PromoIntro } from "@/components/pko/promo-intro";
import { Benefits } from "@/components/pko/benefits";
import { Promotions } from "@/components/pko/promotions";
import { PromoTabs } from "@/components/pko/promo-tabs";
import { Steps } from "@/components/pko/steps";
import { DocumentsAndLegal } from "@/components/pko/documents-legal";

export const Route = createFileRoute("/konto-z-samsung")({
  head: () => ({
    meta: [
      { title: "Otwórz konto i zyskaj do 1000 zł | PKO Bank Polski" },
      {
        name: "description",
        content:
          "Promocja „Bankuj z Samsung”: do 600 zł z PKO Kontem za Zero i 400 zł z Samsung za wybrany telefon z serii S lub Z.",
      },
      { property: "og:title", content: "Otwórz konto i zyskaj do 1000 zł | PKO Bank Polski" },
      {
        property: "og:description",
        content: "Do 600 zł z PKO Kontem za Zero i 400 zł z Samsung za wybrany telefon z serii S lub Z.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PromoPage,
});

function PromoPage() {
  return (
    <div className="min-h-screen bg-background">
      <PromoIntro />
      <Benefits />
      <Promotions />
      <PromoTabs />
      <Steps />
      <DocumentsAndLegal />
    </div>
  );
}
