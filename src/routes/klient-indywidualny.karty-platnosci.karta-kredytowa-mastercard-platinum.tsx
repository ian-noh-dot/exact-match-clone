import { createFileRoute } from "@tanstack/react-router";

import { DetailPage } from "@/components/pko/detail-page";
import bankCards from "@/assets/bank-cards.jpg";

export const Route = createFileRoute(
  "/klient-indywidualny/karty-platnosci/karta-kredytowa-mastercard-platinum",
)({
  head: () => ({
    meta: [
      { title: "Karta kredytowa PKO Mastercard Platinum | PKO Bank Polski" },
      {
        name: "description",
        content:
          "Karta kredytowa PKO Mastercard Platinum — RRSO 16,96% i ubezpieczenie podróżne w kraju i za granicą dla Ciebie i Twoich bliskich.",
      },
      { property: "og:title", content: "Karta kredytowa PKO Mastercard Platinum" },
      {
        property: "og:description",
        content: "RRSO 16,96% i ubezpieczenie podróżne w kraju i za granicą.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MastercardPage,
});

function MastercardPage() {
  return (
    <DetailPage
      eyebrow="Karta kredytowa"
      title="Karta kredytowa PKO Mastercard Platinum"
      subtitle="RRSO 16,96%. Z ubezpieczeniem podróżnym w kraju i za granicą dla Ciebie i Twoich bliskich."
      image={bankCards}
      imageAlt="Karty płatnicze"
      ctas={[
        { label: "Złóż wniosek" },
        { label: "Sprawdź promocje", to: "/promocje", variant: "outline" },
      ]}
      bullets={[
        "RRSO 16,96%",
        "Ubezpieczenie podróżne w kraju i za granicą dla Ciebie i Twoich bliskich",
        "Płać kartą na booking.com i odbierz do 7% zwrotu na kolejny pobyt — nawet do 200 €",
        "Płatności zbliżeniowe, telefonem i zegarkiem",
      ]}
      note="Reprezentatywny przykład oraz warunki karty opisane w regulaminie — szczegóły znajdziesz na pkobp.pl. Wersja demonstracyjna strony."
    />
  );
}
