import { createFileRoute } from "@tanstack/react-router";

import { DetailPage } from "@/components/pko/detail-page";

export const Route = createFileRoute("/klient-indywidualny/konta/konto-oszczednosciowe")({
  head: () => ({
    meta: [
      { title: "Konto oszczędnościowe | PKO Bank Polski" },
      {
        name: "description",
        content: "Konto oszczędnościowe PKO z promocyjnym oprocentowaniem — zakładaj i zasilaj konto w aplikacji mobilnej.",
      },
      { property: "og:title", content: "Konto oszczędnościowe | PKO Bank Polski" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KontoOszczednosciowePage,
});

function KontoOszczednosciowePage() {
  return (
    <DetailPage
      eyebrow="Konta oszczędnościowe"
      title="Konto oszczędnościowe, na którym Twoje pieniądze pracują"
      subtitle="Oszczędzaj z promocyjnym oprocentowaniem i zarządzaj pieniędzmi w aplikacji mobilnej PKO lub w serwisie internetowym."
      ctas={[
        { label: "Otwórz konto online", to: "/otworz-konto" },
        { label: "Wszystkie konta", to: "/klient-indywidualny/konta", variant: "outline" },
      ]}
      features={[
        {
          title: "Konto Oszczędnościowe Plus",
          text: "4% w skali roku do 250 tys. zł na nowe środki przez 90 dni. Dotyczy umów zawartych od 27.06.2025 r.",
        },
        {
          title: "Pierwsze Konto Oszczędnościowe",
          text: "Oprocentowanie promocyjne nawet do 6% w skali roku do 10 tys. zł przy systematycznym oszczędzaniu",
        },
        {
          title: "Skarbonka",
          text: "Oprocentowanie stałe w promocji: 3% w skali roku do 10 tys. zł przez 6 miesięcy",
        },
        {
          title: "Zarządzanie w aplikacji",
          text: "Zakładaj i zasilaj konto oszczędnościowe w aplikacji mobilnej PKO i w serwisie internetowym",
        },
      ]}
      note="Oprocentowanie promocyjne obowiązuje przez okres wskazany w regulaminie promocji. Szczegóły znajdziesz na stronie banku."
    />
  );
}
