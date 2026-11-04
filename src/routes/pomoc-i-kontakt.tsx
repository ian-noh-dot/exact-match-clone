import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { BotMessageSquare, MapPin, PhoneCall, LockKeyhole } from "lucide-react";

export const Route = createFileRoute("/pomoc-i-kontakt")({
  head: () => ({
    meta: [
      { title: "Pomoc i kontakt | PKO Bank Polski" },
      {
        name: "description",
        content:
          "Skontaktuj się z bankiem — infolinia, czat z konsultantem, oddziały i bankomaty oraz pomoc w logowaniu.",
      },
      { property: "og:title", content: "Pomoc i kontakt | PKO Bank Polski" },
      { property: "og:description", content: "Infolinia, czat, oddziały i pomoc w logowaniu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PomocPage,
});

const channels = [
  {
    icon: PhoneCall,
    title: "Infolinia",
    text: "Całodobowa infolinia banku — połączenie z konsultantem przez całą dobę",
  },
  {
    icon: BotMessageSquare,
    title: "Czat z konsultantem",
    text: "Porozmawiaj z konsultantem w aplikacji mobilnej lub serwisie internetowym",
  },
  {
    icon: MapPin,
    title: "Oddziały i bankomaty",
    text: "Znajdź najbliższą placówkę, bankomat lub wpłatomat na mapce banku",
  },
  {
    icon: LockKeyhole,
    title: "Pomoc w logowaniu",
    text: "Masz problem z logowaniem do konta i bankowości elektronicznej? Pomożemy Ci je rozwiązać",
  },
];

const faq = [
  {
    q: "Jak otworzyć konto online?",
    a: "Wystarczy wypełnić wniosek online, wybrać sposób weryfikacji tożsamości (mObywatel lub selfie) i podpisać umowę w aplikacji mobilnej.",
  },
  {
    q: "Jak zastrzec kartę?",
    a: "Zastrzeż kartę w aplikacji mobilnej, w serwisie internetowym lub na infolinii — działa to natychmiast.",
  },
  {
    q: "Jak zresetować hasło do bankowości elektronicznej?",
    a: "Ustaw nowe hasło w aplikacji mobilnej po weryfikacji tożsamości albo poproś o reset na infolinii.",
  },
  {
    q: "Ile kosztuje prowadzenie konta?",
    a: "PKO Konto za Zero prowadzisz za 0 zł miesięcznie, a kartę obsłużysz za 0 zł przy min. 5 transakcjach bezgotówkowych w okresie rozliczeniowym.",
  },
];

function PomocPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-accent/50 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Pomoc i kontakt</h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Wybierz najwygodniejszy sposób kontaktu z bankiem albo zajrzyj do najczęstszych pytań.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <div key={channel.title} className="rounded-3xl border bg-card p-7">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <channel.icon className="size-6" />
              </span>
              <h2 className="mt-4 text-base font-bold leading-snug">{channel.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{channel.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.6fr]">
          <div className="space-y-3">
            <h2 className="section-heading">Najczęstsze pytania</h2>
            {faq.map((item) => (
              <details key={item.q} className="rounded-2xl border bg-card p-5">
                <summary className="cursor-pointer text-sm font-semibold">{item.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="h-fit rounded-3xl bg-secondary p-7">
            <h2 className="text-lg font-bold">Nie znalazłeś odpowiedzi?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Zajrzyj do pełnej bazy pytań lub skontaktuj się z nami bezpośrednio.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a href="#" className="btn-primary w-full">
                Zadaj pytanie
              </a>
              <Link to="/klient-indywidualny/konta" className="btn-outline w-full">
                Przeglądaj ofertę
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
