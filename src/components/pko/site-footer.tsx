import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const columns: { heading: string; links: { label: string; to?: string }[] }[] = [
  {
    heading: "Oferta",
    links: [
      { label: "Konta", to: "/klient-indywidualny/konta" },
      { label: "Karty i płatności", to: "/klient-indywidualny/karty-platnosci" },
      { label: "Kredyty i pożyczki", to: "/klient-indywidualny/kredyty-pozyczki" },
      { label: "Oszczędzanie i inwestycje", to: "/klient-indywidualny/oszczedzanie-inwestycje" },
    ],
  },
  {
    heading: "Bankowość elektroniczna",
    links: [
      { label: "Aplikacja mobilna i serwis internetowy", to: "/klient-indywidualny/bankowosc-elektroniczna" },
      { label: "Zaloguj się", to: "/zaloguj" },
      { label: "Otwórz konto", to: "/otworz-konto" },
    ],
  },
  {
    heading: "Dla Ciebie",
    links: [
      { label: "Promocje", to: "/promocje" },
      { label: "Aktualności", to: "/aktualnosci" },
      { label: "Pomoc i kontakt", to: "/pomoc-i-kontakt" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-base font-extrabold tracking-tight">PKO Bank Polski</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Największy bank uniwersalny w Polsce. Codziennie załatw tysiące spraw wygodnie i
            bezpiecznie w aplikacji mobilnej oraz serwisie internetowym.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Youtube, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Media społecznościowe"
                className="inline-flex size-9 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.heading}>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {col.heading}
            </p>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <p>© 2026 PKO Bank Polski</p>
          <p>Kod BIC (Swift): BPKOPLPW</p>
        </div>
      </div>
    </footer>
  );
}
