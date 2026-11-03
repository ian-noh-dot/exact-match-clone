import { CircleCheck } from "lucide-react";

export function PromoIntro() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
      <h2 className="section-heading text-center">Otwórz konto i zyskaj do 1000 zł</h2>
      <ul className="mx-auto mt-9 max-w-3xl space-y-5">
        <li className="flex gap-3.5">
          <CircleCheck className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed">
            <strong className="font-bold">do 600 zł</strong> – otwórz online PKO Konto za Zero z
            kartą Visa, wpisz kod SAMSUNG i spełnij pozostałe warunki promocji „Bankuj z Samsung”
          </p>
        </li>
        <li className="flex gap-3.5">
          <CircleCheck className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed">
            <strong className="font-bold">400 zł</strong> – kup w promocji „400 zł z Samsung”
            wybrany telefon Samsung z serii S lub Z w sklepach i centrach serwisowych objętych
            promocją i płać wygodnie kartą Visa z Samsung Wallet
          </p>
        </li>
      </ul>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <a href="#" className="btn-primary">
          Otwórz konto
        </a>
        <a href="#" className="btn-outline">
          Sprawdź szczegóły
        </a>
      </div>
      <p className="mt-7 text-center text-sm text-muted-foreground">
        Otwórz konto wygodnie z weryfikacją przez mObywatela
      </p>
    </section>
  );
}
