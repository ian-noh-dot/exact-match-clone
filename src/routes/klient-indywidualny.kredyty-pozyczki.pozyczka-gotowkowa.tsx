import { createFileRoute } from "@tanstack/react-router";

import { DetailPage } from "@/components/pko/detail-page";

export const Route = createFileRoute("/klient-indywidualny/kredyty-pozyczki/pozyczka-gotowkowa")({
  head: () => ({
    meta: [
      { title: "Pożyczka gotówkowa online | PKO Bank Polski" },
      {
        name: "description",
        content: "Pożyczka gotówkowa online — gotówka nawet w jeden dzień, bez wychodzenia z domu.",
      },
      { property: "og:title", content: "Pożyczka gotówkowa online | PKO Bank Polski" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PozyczkaGotowkowaPage,
});

function PozyczkaGotowkowaPage() {
  return (
    <DetailPage
      eyebrow="Pożyczki i kredyty"
      title="Pożyczka gotówkowa online"
      subtitle="Gotówka online, nawet w jeden dzień. Złóż wniosek bez wychodzenia z domu."
      ctas={[
        { label: "Oblicz ratę", to: "/klient-indywidualny/kredyty-pozyczki" },
        { label: "Wszystkie kredyty", to: "/klient-indywidualny/kredyty-pozyczki", variant: "outline" },
      ]}
      fees={[{ label: "RRSO", value: "9,94%" }]}
      features={[
        {
          title: "Bez wychodzenia z domu",
          text: "Złóż wniosek w serwisie internetowym lub w aplikacji mobilnej PKO",
        },
        {
          title: "Gotówka online",
          text: "Decyzję poznasz szybko — wynik zależy od oceny zdolności kredytowej",
        },
        {
          title: "Niższe oprocentowanie przy wyższej kwocie",
          text: "Im wyższa kwota pożyczki, tym niższe oprocentowanie zmienne",
        },
      ]}
      note="Wyliczenia mają charakter orientacyjny. Udzielenie pożyczki oraz jej wysokość zależą od oceny zdolności kredytowej."
    />
  );
}
