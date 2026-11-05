import { createFileRoute } from "@tanstack/react-router";

import { DetailPage } from "@/components/pko/detail-page";

export const Route = createFileRoute("/klient-indywidualny/kredyty-pozyczki/pozyczka-konsolidacyjna")({
  head: () => ({
    meta: [
      { title: "Pożyczka konsolidacyjna | PKO Bank Polski" },
      {
        name: "description",
        content: "Masz pożyczki w innych bankach? Połącz je w jedną, niższą ratę online.",
      },
      { property: "og:title", content: "Pożyczka konsolidacyjna | PKO Bank Polski" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PozyczkaKonsolidacyjnaPage,
});

function PozyczkaKonsolidacyjnaPage() {
  return (
    <DetailPage
      eyebrow="Pożyczki i kredyty"
      title="Pożyczka konsolidacyjna"
      subtitle="Masz pożyczki w innych bankach? Przenieś je do nas i połącz w jedną, niską ratę."
      ctas={[
        { label: "Oblicz ratę", to: "/klient-indywidualny/kredyty-pozyczki" },
        { label: "Wszystkie kredyty", to: "/klient-indywidualny/kredyty-pozyczki", variant: "outline" },
      ]}
      fees={[{ label: "RRSO", value: "12,14%" }]}
      features={[
        {
          title: "Jedna rata zamiast kilku",
          text: "Połącz swoje raty online i płać jedną, miesięcznie zamiast kilku",
        },
        {
          title: "Wniosek online",
          text: "Złóż wniosek w serwisie internetowym lub w aplikacji mobilnej PKO",
        },
        {
          title: "Przeniesienie zobowiązań",
          text: "Pomożemy przenieść dotychczasowe pożyczki i uporządkować domowy budżet",
        },
      ]}
      note="Wyliczenia mają charakter orientacyjny. Udzielenie pożyczki oraz jej wysokość zależą od oceny zdolności kredytowej."
    />
  );
}
