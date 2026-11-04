import { createFileRoute } from "@tanstack/react-router";

import { DetailPage } from "@/components/pko/detail-page";
import { AppPromo } from "@/components/pko/app-promo";
import mobileApp from "@/assets/mobile-app.jpg";

export const Route = createFileRoute("/klient-indywidualny/bankowosc-elektroniczna")({
  head: () => ({
    meta: [
      { title: "Bankowość elektroniczna | PKO Bank Polski" },
      {
        name: "description",
        content:
          "Aplikacja mobilna i serwis internetowy — załatwiaj codzienne sprawy wygodnie i bezpiecznie, gdzie i kiedy chcesz.",
      },
      { property: "og:title", content: "Bankowość elektroniczna | PKO Bank Polski" },
      {
        property: "og:description",
        content: "Aplikacja mobilna i serwis internetowy PKO Banku Polskiego.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BankowoscPage,
});

function BankowoscPage() {
  return (
    <DetailPage
      eyebrow="Bankowość elektroniczna"
      title="Otwórz konto w aplikacji mobilnej i korzystaj z nagradzanych rozwiązań"
      subtitle="Możesz załatwiać codzienne sprawy wygodnie i bezpiecznie na telefonie lub komputerze – tak jak lubisz."
      image={mobileApp}
      imageAlt="Telefony z aplikacją mobilną banku"
      ctas={[
        { label: "Otwórz konto online", to: "/otworz-konto" },
        { label: "Zaloguj się", to: "/zaloguj", variant: "outline" },
      ]}
      features={[
        {
          title: "Uznanie w Polsce i na świecie",
          text: "Stale rozwijamy funkcje naszej aplikacji. Doceniają to klienci oraz eksperci — m.in. tytuł Najlepszej aplikacji mobilnej w rankingu Instytucja Roku 2026",
        },
        {
          title: "Rozwiązania skrojone pod Ciebie",
          text: "Nasza aplikacja została nagrodzona w kategorii bankowość mobilna za rozwój usług, których poszukują klienci",
        },
        {
          title: "Najwyższa jakość obsługi",
          text: "W rankingu Złoty Bankier 2025 otrzymaliśmy nagrodę za najwyższą jakość obsługi w bankowości internetowej i w aplikacji",
        },
        {
          title: "Setki możliwości",
          text: "Korzystaj z ponad 100 funkcji, które ciągle rozwijamy m.in. na podstawie opinii klientów",
        },
        {
          title: "Wyjątkowe usługi",
          text: "Masz dostęp do unikalnych usług, które ułatwiają życie. Wiele z nich wprowadzamy jako pierwsi na rynku",
        },
        {
          title: "Zaufanie",
          text: "Miliony klientów w różnym wieku codziennie załatwiają tysiące spraw w naszej aplikacji i serwisie",
        },
      ]}
      note="Nie musisz mieć u nas konta, żeby korzystać z naszych usług — wystarczy złożyć wniosek o dostęp do serwisu internetowego i aplikacji mobilnej."
    >
      <AppPromo />
    </DetailPage>
  );
}
