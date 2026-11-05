import { createFileRoute } from "@tanstack/react-router";

import { DetailPage } from "@/components/pko/detail-page";

export const Route = createFileRoute("/klient-indywidualny/bankowosc-elektroniczna/dyspozycje")({
  head: () => ({
    meta: [
      { title: "Dyspozycje i dokumenty online | PKO Bank Polski" },
      {
        name: "description",
        content: "Składaj dyspozycje, wnioski i pobieraj dokumenty online w serwisie internetowym i aplikacji PKO.",
      },
      { property: "og:title", content: "Dyspozycje i dokumenty online | PKO Bank Polski" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DyspozycjePage,
});

function DyspozycjePage() {
  return (
    <DetailPage
      eyebrow="Bankowość elektroniczna"
      title="Dyspozycje i dokumenty online"
      subtitle="Składaj dyspozycje i wnioski oraz pobieraj dokumenty w serwisie internetowym PKO i w aplikacji mobilnej."
      ctas={[
        { label: "Zaloguj się", to: "/zaloguj" },
        { label: "Bankowość elektroniczna", to: "/klient-indywidualny/bankowosc-elektroniczna", variant: "outline" },
      ]}
      features={[
        {
          title: "Wnioski bez wizyty w oddziale",
          text: "Złożysz dyspozycje i wnioski z dowolnego miejsca, o każdej porze",
        },
        {
          title: "Dokumenty zawsze pod ręką",
          text: "Pobierzesz i zapiszesz dokumenty o koncie i produktach w swoim profilu",
        },
        {
          title: "Dyspozycje na koncie",
          text: "Zarządzaj przelewami, zleceniami stałymi i ustawieniami konta",
        },
      ]}
    />
  );
}
