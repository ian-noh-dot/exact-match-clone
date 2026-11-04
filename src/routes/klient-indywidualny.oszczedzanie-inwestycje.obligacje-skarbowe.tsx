import { createFileRoute } from "@tanstack/react-router";

import { DetailPage } from "@/components/pko/detail-page";
import savings from "@/assets/savings.jpg";

export const Route = createFileRoute("/klient-indywidualny/oszczedzanie-inwestycje/obligacje-skarbowe")({
  head: () => ({
    meta: [
      { title: "Obligacje skarbowe | PKO Bank Polski" },
      {
        name: "description",
        content:
          "Oszczędzaj w obligacjach skarbowych z konkurencyjnym oprocentowaniem — także w obligacjach indeksowanych inflacją.",
      },
      { property: "og:title", content: "Obligacje skarbowe | PKO Bank Polski" },
      {
        property: "og:description",
        content: "Obligacje skarbowe z konkurencyjnym oprocentowaniem, dostępne online.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ObligacjePage,
});

function ObligacjePage() {
  return (
    <DetailPage
      eyebrow="Oszczędzanie i inwestycje"
      title="Obligacje skarbowe online"
      subtitle="Oszczędzasz z konkurencyjnym oprocentowaniem i masz w ofercie obligacje, które uwzględniają inflację."
      image={savings}
      imageAlt="Skarbonka i stosy monet"
      ctas={[{ label: "Kup obligacje online" }, { label: "Sprawdź wszystkie produkty", to: "/klient-indywidualny/oszczedzanie-inwestycje", variant: "outline" }]}
      features={[
        {
          title: "Trzymiesięczne i roczne",
          text: "Krótkie obligacje ze stałym lub zmiennym oprocentowaniem — na start i do odłożenia wolnych środków",
        },
        {
          title: "Indeksowane inflacją",
          text: "Obligacje cztero- i dziesięcioletnie, których oprocentowanie uwzględnia inflację",
        },
        {
          title: "Wcześniejszy wykup",
          text: "Możliwość wcześniejszego wykupu obligacji po upływie minimalnego okresu posiadania",
        },
        {
          title: "Zakup online",
          text: "Kupuj obligacje wygodnie w aplikacji mobilnej i serwisie internetowym",
        },
        {
          title: "Bez prowizji",
          text: "Zakup i wykup obligacji detalicznych bez prowizji — środkami ze swojego konta",
        },
        {
          title: "IKZE i IKE-Obligacje",
          text: "Możliwość inwestowania w oszczędnościowe Obligacje Skarbu Państwa w ramach kont IKZE i IKE",
        },
      ]}
      note="Aktualne oprocentowanie poszczególnych emisji znajdziesz na stronie obligacjeskarbowe.pl. Wersja demonstracyjna strony."
    />
  );
}
