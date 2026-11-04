import { createFileRoute } from "@tanstack/react-router";

import { DetailPage } from "@/components/pko/detail-page";
import heroWoman from "@/assets/hero-woman-phone.jpg";

export const Route = createFileRoute("/klient-indywidualny/konta/konto-za-zero")({
  head: () => ({
    meta: [
      { title: "PKO Konto za Zero | PKO Bank Polski" },
      {
        name: "description",
        content:
          "Konto za 0 zł miesięcznie, wypłaty BLIK za 0 zł i darmowa karta — otwórz PKO Konto za Zero online z kartą Visa.",
      },
      { property: "og:title", content: "PKO Konto za Zero | PKO Bank Polski" },
      {
        property: "og:description",
        content: "Konto za 0 zł miesięcznie, wypłaty BLIK za 0 zł i darmowa karta do konta.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KontoZaZeroPage,
});

function KontoZaZeroPage() {
  return (
    <DetailPage
      eyebrow="PKO Konto za Zero"
      title="Najlepsze konto osobiste"
      subtitle="Otwórz konto online z kartą Visa i korzystaj z darmowego prowadzenia konta, wypłat BLIKIEM oraz darmowej obsługi karty."
      image={heroWoman}
      imageAlt="Kobieta trzymająca telefon z aplikacją banku i kartą Visa"
      ctas={[
        { label: "Otwórz konto online", to: "/otworz-konto" },
        { label: "Sprawdź promocje", to: "/konto-z-samsung", variant: "outline" },
      ]}
      bullets={[
        "0 zł za prowadzenie konta",
        "0 zł za wypłaty w złotych BLIKIEM ze wszystkich bankomatów w Polsce",
        "0 zł za obsługę karty do konta, gdy zapłacisz min. 5 razy BLIKIEM lub kartą w jej okresie rozliczeniowym; inaczej – 10 zł/mies.",
        "Za codzienne zakupy zyskaj do 600 zł",
        "Odbierz 400 zł zwrotu za zakup telefonu Samsung",
      ]}
      features={[
        {
          title: "Darmowe prowadzenie konta",
          text: "Konto prowadzisz za 0 zł miesięcznie — dodatkowo zyskujesz dostęp do serwisu internetowego i aplikacji mobilnej",
        },
        {
          title: "Darmowa obsługa karty debetowej",
          text: "Karta do konta za 0 zł/mies., jeśli zrobisz min. 5 transakcji bezgotówkowych kartą lub BLIKIEM w jej okresie rozliczeniowym",
        },
        {
          title: "Debet na koncie",
          text: "Otrzymujesz do 1 000 zł dodatkowej gotówki bez odsetek przez 30 dni. Za skorzystanie z debetu zapłacisz 5 zł",
        },
        {
          title: "Płatności zbliżeniowe",
          text: "Zbliż telefon lub kartę do terminala płatniczego i zapłać za zakupy w kilka sekund",
        },
        {
          title: "Czasowa blokada kart",
          text: "Możesz czasowo zablokować i odblokować kartę do konta w aplikacji mobilnej",
        },
        {
          title: "Allegro Klik",
          text: "Nawet 1200 zł zwrotu za zakupy na Allegro — aktywuj Allegro Klik i zgarniaj cashback do 3% (maks. 100 zł miesięcznie)",
        },
      ]}
      fees={[
        { label: "Prowadzenie konta", value: "0 zł" },
        {
          label: "Obsługa karty, gdy w okresie rozliczeniowym zrobisz min. 5 transakcji bezgotówkowych",
          value: "0 / 10 zł",
        },
        { label: "Przelew BLIK na numer telefonu", value: "0 zł" },
        {
          label: "Przelew wewnętrzny, standardowy lub zagraniczny SEPA Standard w serwisie i aplikacji",
          value: "0 zł",
        },
        {
          label: "Wypłaty i wpłaty w bankomatach i wpłatomatach PKO Banku Polskiego",
          value: "0 zł",
        },
        { label: "Wypłaty BLIKIEM ze wszystkich bankomatów w Polsce", value: "0 zł" },
        { label: "Wypłaty kartą z bankomatów innych niż PKO Banku Polskiego w Polsce", value: "10 zł" },
        { label: "Wypłaty i wpłaty w placówce banku", value: "0 / 10 zł" },
      ]}
      steps={[
        {
          title: "Pobierz aplikację mobilną",
          text: "Sprawdź informację o koncie i wybierz kartę, jeśli chcesz ją zamówić. Uzupełnij dane kontaktowe i udziel odpowiednie zgody",
        },
        {
          title: "Zweryfikuj tożsamość",
          text: "Wybierz weryfikację przez mObywatel albo zdjęcie twarzy i dowodu osobistego w aplikacji, uzupełnij pozostałe dane i złóż wniosek",
        },
        {
          title: "Sukces — konto otwarte",
          text: "Po założeniu konta możesz od razu logować się do aplikacji mobilnej i korzystać z konta",
        },
      ]}
      documents={[
        "Konto za zero — podstawowe opłaty",
        "Konto za zero — dodatkowe opłaty",
        "Oprocentowanie",
      ]}
      note="Konto za Zero jest rachunkiem płatniczym prowadzonym dla osób od 18 roku życia. Szczegóły i ograniczenia znajdziesz w regulaminach na pkobp.pl. Niektóre funkcje konta przy weryfikacji na selfie wymagają dodatkowego potwierdzenia tożsamości w oddziale banku."
    />
  );
}
