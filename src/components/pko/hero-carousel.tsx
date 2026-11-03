import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroWoman from "@/assets/hero-woman-phone.jpg";
import savings from "@/assets/savings.jpg";
import allegroCard from "@/assets/card-shopping.jpg";

const slides = [
  {
    title: "Nawet do 1000 zł z PKO Kontem za Zero z kartą Visa",
    lines: [
      { bold: "600 zł", rest: " za codzienne zakupy w promocji „Bankuj z Samsung”" },
      { bold: "400 zł", rest: " w ramach promocji „400 zł z Samsung” z wybranym telefonem Samsung" },
    ],
    cta: "Sprawdź",
    href: "/konto-z-samsung",
    image: heroWoman,
    alt: "Kobieta trzymająca telefon z aplikacją banku",
  },
  {
    title: "Zyskaj 4% na Koncie Oszczędnościowym Plus",
    lines: [
      { bold: "4%", rest: " w skali roku na nowe środki na Koncie Oszczędnościowym Plus w ramach promocji „Konto na 4%”" },
      { bold: "do 900 zł", rest: " za założenie kont i spełnienie pozostałych warunków promocji „Prosty zwrot”" },
    ],
    cta: "Sprawdź",
    href: "/klient-indywidualny/oszczedzanie-inwestycje",
    image: savings,
    alt: "Stosy monet i skarbonka",
  },
  {
    title: "Otwórz konto online i aktywuj Allegro Klik",
    lines: [
      { bold: "nawet 1200 zł zwrotu", rest: " za zakupy na Allegro" },
      { bold: "", rest: "Obowiązuje limit cashbacku – do 100 zł miesięcznie" },
    ],
    cta: "Sprawdź",
    href: "/klient-indywidualny/karty-platnosci/allegroklik",
    image: allegroCard,
    alt: "Karta płatnicza i telefon z aplikacją zakupową",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const move = (d: number) => setIndex((i) => (i + d + slides.length) % slides.length);

  return (
    <section className="hero-gradient">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="min-h-[22rem] py-6">
          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            {slide.title}
          </h1>
          <p className="mt-7 max-w-md space-y-1 text-base leading-relaxed">
            {slide.lines.map((line, i) => (
              <span key={i} className="block">
                {line.bold ? <strong className="font-bold">{line.bold}</strong> : null}
                {line.rest}
              </span>
            ))}
          </p>
          <div className="mt-9 flex items-center gap-6">
            <Link to={slide.href} className="btn-primary px-12">
              {slide.cta}
            </Link>
            <div className="flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  aria-label={`Slajd ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={
                    i === index
                      ? "h-2.5 w-8 rounded-full bg-primary transition-all"
                      : "h-2.5 w-2.5 rounded-full bg-foreground/20 transition-all hover:bg-foreground/40"
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative flex items-end justify-center">
          <img
            key={slide.title}
            src={slide.image}
            alt={slide.alt}
            className="w-full max-w-md rounded-t-[2.5rem] object-cover object-top"
            width={1024}
            height={896}
          />
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Poprzedni slajd"
            className="absolute left-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border bg-background/90 shadow-md transition-colors hover:bg-background"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Następny slajd"
            className="absolute right-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border bg-background/90 shadow-md transition-colors hover:bg-background"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
