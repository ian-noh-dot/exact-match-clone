import { FileText } from "lucide-react";

const documents = [
  "Regulamin promocji „Bankuj z Samsung”",
  "Regulamin promocji „400 zł z Samsung”",
];

export function DocumentsAndLegal() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 lg:px-8">
      <h2 className="section-heading">Dokumenty</h2>
      <div className="mt-6 space-y-3">
        {documents.map((doc) => (
          <a
            key={doc}
            href="#"
            className="flex items-center gap-4 rounded-2xl border p-4 transition-colors hover:border-primary/40 hover:bg-accent/40"
          >
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <FileText className="size-5" />
            </span>
            <span className="text-sm font-medium">{doc}</span>
            <span className="chip ml-auto">PDF</span>
          </a>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button type="button" className="btn-outline">
          Pokaż wszystkie
        </button>
      </div>
      <div className="mt-10 space-y-4 text-xs leading-relaxed text-muted-foreground">
        <p>
          1000 zł jest maksymalną łączną kwotą, jaką uczestnik może otrzymać po spełnieniu warunków
          obu promocji organizowanych przez PKO Bank Polski S.A.: „Bankuj z Samsung” oraz „400 zł z
          Samsung”.
        </p>
        <p>
          Promocja „Bankuj z Samsung” trwa od 12.10 do 31.12.2026 r. lub do wyczerpania puli 10 000
          kont. 600 zł zwrotu na konto uczestnik może otrzymać po otwarciu PKO Konta za Zero z
          kartą Visa z kodem SAMSUNG lub kodem promocji przekazanym przez sklep lub centrum
          serwisowe objęte promocją i spełnieniu pozostałych warunków promocji opisanych w jej
          regulaminie.
        </p>
        <p>
          Promocja „400 zł z Samsung” trwa od 12.10 do 31.12.2026 r. Partnerem promocji jest Samsung
          Electronics Polska Sp. z o.o. 400 zł zwrotu na konto otrzyma uczestnik, który otworzy PKO
          Konto za Zero z kodem SAMSUNG lub kodem promocji przekazanym przez sklep lub centrum
          serwisowe objęte promocją i dokona zakupu wybranego modelu telefonu Samsung Galaxy serii S
          lub Z w okresie promocji oraz spełni pozostałe warunki określone w jej regulaminie.
        </p>
        <p>
          PKO Konto za Zero jest rachunkiem płatniczym prowadzonym dla osób od 18 roku życia.
          Informacje o koncie, Taryfę prowizji i opłat bankowych oraz regulaminy promocji znajdziesz
          na pkobp.pl i w placówkach banku. Sprawdź szczegóły i ograniczenia obu promocji w
          regulaminach na pkobp.pl/k/k/konto-z-samsung
        </p>
        <p>
          <a href="#" className="font-medium text-foreground underline underline-offset-2">
            Wyjaśniamy oznaczenia
          </a>
        </p>
        <p>
          ¹ Okres rozliczeniowy karty trwa miesiąc i zaczyna się od następnego dnia, w którym
          wydaliśmy kartę. Przelewy z karty i na numer telefonu nie są uznawane za transakcje
          bezgotówkowe. Zwrot towaru lub anulowanie operacji zmniejsza liczbę bezgotówkowych
          transakcji płatniczych w okresie rozliczeniowym
        </p>
      </div>
    </section>
  );
}
