import { createFileRoute } from "@tanstack/react-router";

import { DetailPage } from "@/components/pko/detail-page";

export const Route = createFileRoute("/klient-indywidualny/bankowosc-elektroniczna/wyprobuj")({
  head: () => ({
    meta: [
      { title: "Wypróbuj bez konta | PKO Bank Polski" },
      {
        name: "description",
        content: "Poznaj serwis internetowy i aplikację mobilną PKO bez zakładania konta.",
      },
      { property: "og:title", content: "Wypróbuj bez konta | PKO Bank Polski" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WyprobujPage,
});

function WyprobujPage() {
  return (
    <DetailPage
      eyebrow="Bankowość elektroniczna"
      title="Wypróbuj serwis i aplikację bez konta"
      subtitle="Poznaj możliwości bankowości PKO, zanim zostaniesz naszym klientem."
      ctas={[{ label: "Otwórz konto online", to: "/otworz-konto" }]}
      steps={[
        {
          title: "Pobierz aplikację",
          text: "Pobierz aplikację mobilną PKO ze sklepu i wybierz „Zaczynamy”.",
        },
        {
          title: "Uzupełnij wniosek",
          text: "Wybierz „Zostań naszym klientem” i potwierdź swoje dane.",
        },
        {
          title: "Korzystaj bez konta",
          text: "Wybierz „Korzystaj z aplikacji bez konta” i sprawdź funkcje.",
        },
      ]}
      note="Dostęp bez konta pozwala poznać funkcje aplikacji. Pełne korzystanie z usług wymaga zawarcia umowy."
    />
  );
}
