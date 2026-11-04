import { Link } from "@tanstack/react-router";
import mobileApp from "@/assets/mobile-app.jpg";

const perks = [
  {
    title: "Więcej czasu — dzięki wygodnym płatnościom",
    text: "Łatwo zrobisz przelewy, doładujesz telefon lub zapłacisz za zakupy",
  },
  {
    title: "Spokój — dzięki kontroli finansów 24h/7",
    text: "Stan swojego konta masz zawsze na oku. Włączysz powiadomienia o przychodzących przelewach lub sprawdzisz szczegóły transakcji w historii",
  },
  {
    title: "Dodatkowe usługi online",
    text: "Wymienisz walutę, kupisz karty podarunkowe, zadbasz o rozrywkę bez wychodzenia z domu oraz wiele więcej",
  },
  {
    title: "Łatwy dostęp do oferty",
    text: "Gdzie i kiedy chcesz otwierasz konta, lokaty, kupujesz ubezpieczenia i składasz potrzebne wnioski",
  },
];

export function AppPromo() {
  return (
    <section className="bg-accent/40 py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Aplikacja mobilna PKO
          </p>
          <h2 className="section-heading mt-3">Najlepsza w codziennych sprawach</h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Nasza aplikacja mobilna i bankowość online są doceniane przez klientów i ekspertów w
            Polsce i na świecie. Korzystaj z nagradzanych rozwiązań i załatwiaj wiele codziennych
            spraw wygodnie i bezpiecznie.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link to="/klient-indywidualny/bankowosc-elektroniczna" className="btn-primary">
              Poznaj aplikację
            </Link>
            {["Google Play", "App Store", "AppGallery"].map((store) => (
              <span
                key={store}
                className="rounded-full border bg-background px-4 py-2 text-xs font-semibold text-muted-foreground"
              >
                {store}
              </span>
            ))}
          </div>
        </div>
        <img
          src={mobileApp}
          alt="Telefony z aplikacją mobilną banku"
          loading="lazy"
          className="w-full max-w-lg justify-self-center rounded-3xl object-cover shadow-lg"
          width={1024}
          height={896}
        />
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {perks.map((perk) => (
          <div key={perk.title} className="rounded-3xl border bg-card p-7">
            <h3 className="text-base font-bold leading-snug">{perk.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{perk.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
