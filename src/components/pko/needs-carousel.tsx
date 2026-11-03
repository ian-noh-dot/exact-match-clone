import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cardShopping from "@/assets/card-shopping.jpg";
import cardTravel from "@/assets/card-travel.jpg";
import cardBasketball from "@/assets/card-basketball.jpg";
import cardKids from "@/assets/card-phone-apps.jpg";

const cards = [
  { title: "Allegro Klik", image: cardShopping },
  { title: "Karta kredytowa z ubezpieczeniem podróżnym", image: cardTravel },
  { title: "Obligacje skarbowe online", image: cardBasketball },
  { title: "Konta dla dzieci #promocja", image: cardKids },
];

export function NeedsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) =>
    trackRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
      <h2 className="section-heading text-center">Czego potrzebujesz?</h2>
      <div className="relative mt-10">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Poprzednie"
          className="absolute -left-2 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border bg-background shadow-md transition-colors hover:bg-accent sm:inline-flex"
        >
          <ChevronLeft className="size-5" />
        </button>
        <div
          ref={trackRef}
          className="flex snap-x gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((card) => (
            <a
              key={card.title}
              href="#"
              className="flex w-60 shrink-0 snap-start flex-col rounded-3xl border p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-center text-base font-semibold leading-snug">{card.title}</h3>
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                className="mt-5 aspect-square w-full rounded-2xl object-cover"
              />
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Następne"
          className="absolute -right-2 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border bg-background shadow-md transition-colors hover:bg-accent sm:inline-flex"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </section>
  );
}
