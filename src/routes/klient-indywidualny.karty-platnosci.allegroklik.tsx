import { createFileRoute } from "@tanstack/react-router";

import { DetailPage } from "@/components/pko/detail-page";
import allegroCard from "@/assets/card-shopping.jpg";

export const Route = createFileRoute("/klient-indywidualny/karty-platnosci/allegroklik")({
  head: () => ({
    meta: [
      { title: "Allegro Klik | PKO Bank Polski" },
      {
        name: "description",
        content:
          "Aktywuj Allegro Klik i zgarnij nawet 1200 zł zwrotu za zakupy na Allegro — cashback do 3% i limit do 100 zł miesięcznie.",
      },
      { property: "og:title", content: "Allegro Klik | PKO Bank Polski" },
      {
        property: "og:description",
        content: "Nawet 1200 zł zwrotu za zakupy na Allegro z Allegro Klik.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AllegroKlikPage,
});

function AllegroKlikPage() {
  return (
    <DetailPage
      eyebrow="Promocja"
      title="Allegro Klik"
      subtitle="Aktywuj teraz i zgarnij nawet 1200 zł zwrotu za zakupy na Allegro."
      image={allegroCard}
      imageAlt="Karta płatnicza i telefon z aplikacją zakupową"
      ctas={[{ label: "Otwórz konto i aktywuj", to: "/otworz-konto" }]}
      bullets={[
        "Cashback do 3% za zakupy na Allegro",
        "Obowiązuje limit cashbacku — do 100 zł miesięcznie",
        "Dostawy i zwroty Allegro Smart! na 6 miesięcy za 1 zł po aktywacji",
      ]}
      steps={[
        {
          title: "Otwórz konto osobiste",
          text: "Otwórz u nas konto osobiste online — np. PKO Konto za Zero z kartą Visa",
        },
        {
          title: "Aktywuj Allegro Klik",
          text: "Aktywuj usługę w aplikacji mobilnej lub serwisie internetowym w ciągu kilku minut",
        },
        {
          title: "Płać i odbieraj zwrot",
          text: "Płać kartą za zakupy na Allegro i zgarniaj cashback prosto na konto",
        },
      ]}
      note="Promocja i warunki cashbacku opisane w regulaminie usługi. Limit cashbacku do 100 zł miesięcznie."
    />
  );
}
