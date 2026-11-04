import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Lock, Menu, Search, X } from "lucide-react";

type MenuLink = { label: string; to?: string };
type MenuColumn = { heading: string; links: MenuLink[] };

const ofertaMenu: MenuColumn[] = [
  {
    heading: "Konta",
    links: [
      { label: "Wszystkie konta", to: "/klient-indywidualny/konta" },
      { label: "PKO Konto za Zero", to: "/klient-indywidualny/konta/konto-za-zero" },
    ],
  },
  {
    heading: "Karty i płatności",
    links: [
      { label: "Wszystkie karty", to: "/klient-indywidualny/karty-platnosci" },
      { label: "Allegro Klik", to: "/klient-indywidualny/karty-platnosci/allegroklik" },
      {
        label: "Karta kredytowa Mastercard Platinum",
        to: "/klient-indywidualny/karty-platnosci/karta-kredytowa-mastercard-platinum",
      },
    ],
  },
  {
    heading: "Kredyty i pożyczki",
    links: [{ label: "Wszystkie kredyty", to: "/klient-indywidualny/kredyty-pozyczki" }],
  },
  {
    heading: "Oszczędzanie i inwestycje",
    links: [
      { label: "Wszystkie produkty", to: "/klient-indywidualny/oszczedzanie-inwestycje" },
      {
        label: "Obligacje skarbowe",
        to: "/klient-indywidualny/oszczedzanie-inwestycje/obligacje-skarbowe",
      },
    ],
  },
];

const bankMenu: MenuColumn[] = [
  {
    heading: "Bankowość elektroniczna",
    links: [
      {
        label: "Aplikacja mobilna i serwis internetowy",
        to: "/klient-indywidualny/bankowosc-elektroniczna",
      },
    ],
  },
  {
    heading: "Popularne usługi",
    links: [
      { label: "Płatności mobilne", to: "/klient-indywidualny/karty-platnosci" },
      { label: "Pomoc w logowaniu", to: "/pomoc-i-kontakt" },
    ],
  },
];

const klientMenu: MenuLink[] = [
  { label: "Klient indywidualny" },
  { label: "Bankowość Osobista" },
  { label: "Bankowość Prywatna" },
  { label: "Firmy" },
  { label: "Korporacje" },
  { label: "International banking" },
];

function PkoEmblem({ small = false }: { small?: boolean }) {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2" aria-label="Bank Polski — strona główna">
      <svg width={small ? 26 : 40} height={small ? 28 : 44} viewBox="0 0 40 44" aria-hidden="true">
        <circle cx="20" cy="5" r="3.5" fill="var(--color-primary)" />
        <circle cx="20" cy="26" r="18" fill="var(--color-primary)" />
        <g fill="white">
          <path d="M20 15 L31 21.5 L9 21.5 Z" />
          <rect x="9" y="23" width="22" height="2.8" rx="1.4" />
          <rect x="12" y="27.5" width="3.2" height="9" rx="1" />
          <rect x="18.4" y="27.5" width="3.2" height="9" rx="1" />
          <rect x="24.8" y="27.5" width="3.2" height="9" rx="1" />
          <rect x="9" y="37.5" width="22" height="2.4" rx="1.2" />
        </g>
      </svg>
      {small ? (
        <span className="text-sm font-bold leading-tight tracking-tight">Bank Polski</span>
      ) : (
        <span className="text-sm font-bold leading-tight tracking-tight">
          Bank
          <br />
          Polski
        </span>
      )}
    </Link>
  );
}

function MenuLinkItem({ link, onClick }: { link: MenuLink; onClick: () => void }) {
  const cls = "block rounded-lg px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-primary";
  return link.to ? (
    <Link to={link.to} onClick={onClick} className={cls}>
      {link.label}
    </Link>
  ) : (
    <a href="#" onClick={onClick} className={cls}>
      {link.label}
    </a>
  );
}

function DropdownPanel({
  columns,
  links,
  onNavigate,
}: {
  columns?: MenuColumn[];
  links?: MenuLink[];
  onNavigate: () => void;
}) {
  return (
    <div className="absolute inset-x-0 top-full z-50 border-b bg-background/98 shadow-xl backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        {columns ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="px-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {col.heading}
                </p>
                <div className="mt-2">
                  {col.links.map((link) => (
                    <MenuLinkItem key={link.label} link={link} onClick={onNavigate} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {links?.map((link) => (
              <MenuLinkItem key={link.label} link={link} onClick={onNavigate} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SearchField({ className = "" }: { className?: string }) {
  return (
    <label className={`relative w-full max-w-xs ${className}`}>
      <input
        type="search"
        placeholder="Wyszukaj"
        className="w-full rounded-full border bg-background py-2.5 pl-5 pr-11 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
      />
      <Search className="absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
    </label>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const close = () => setOpen(null);
  const toggle = (key: string) => setOpen((o) => (o === key ? null : key));

  const navTrigger = (key: string, label: string, withChevron = false) => (
    <button
      type="button"
      onClick={() => toggle(key)}
      className={
        open === key
          ? "inline-flex items-center gap-1.5 font-semibold text-primary"
          : "inline-flex items-center gap-1.5 transition-colors hover:text-primary"
      }
    >
      {label}
      {withChevron ? <ChevronDown className="size-4 text-muted-foreground" /> : null}
    </button>
  );

  const actions = (
    <div className="flex items-center gap-3 sm:gap-5">
      <a href="#" className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">
        <Lock className="size-4" />
        <span className="hidden sm:inline">Zaloguj się</span>
      </a>
      <Link to="/otworz-konto" className="btn-outline px-4 py-2 sm:px-6 sm:py-2.5">
        Otwórz konto
      </Link>
      <button
        type="button"
        className="inline-flex md:hidden"
        aria-label={mobileOpen ? "Zamknij menu" : "Menu"}
        onClick={() => setMobileOpen((m) => !m)}
      >
        {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>
    </div>
  );

  return (
    <div ref={rootRef} className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      {!scrolled ? (
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 lg:px-8">
          <div className="flex items-center gap-10">
            <PkoEmblem />
            <button
              type="button"
              onClick={() => toggle("klient")}
              className={
                open === "klient"
                  ? "hidden items-center gap-1.5 text-sm font-semibold text-primary md:inline-flex"
                  : "hidden items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary md:inline-flex"
              }
            >
              Klient indywidualny
              <ChevronDown className="size-4 text-muted-foreground" />
            </button>
          </div>
          {actions}
        </div>
      ) : null}

      <div
        className={
          scrolled
            ? "mx-auto flex max-w-7xl items-center gap-6 px-4 py-2.5 lg:px-8"
            : "mx-auto hidden max-w-7xl items-center gap-7 px-4 pb-3 md:flex lg:px-8"
        }
      >
        {scrolled ? <PkoEmblem small /> : null}
        <nav className={`flex items-center gap-7 text-sm font-medium ${scrolled ? "flex-1" : ""}`}>
          {navTrigger("oferta", "Oferta", true)}
          {navTrigger("bank", "Bankowość elektroniczna", true)}
          <Link to="/pomoc-i-kontakt" className="transition-colors hover:text-primary">
            Pomoc i kontakt
          </Link>
          <Link
            to="/promocje"
            className="font-semibold text-promo-green transition-colors hover:text-promo-green/80"
          >
            Promocje
          </Link>
        </nav>
        {scrolled ? actions : <SearchField className="ml-auto" />}
      </div>

      {open === "oferta" ? <DropdownPanel columns={ofertaMenu} onNavigate={close} /> : null}
      {open === "bank" ? <DropdownPanel columns={bankMenu} onNavigate={close} /> : null}
      {open === "klient" ? <DropdownPanel links={klientMenu} onNavigate={close} /> : null}

      {mobileOpen ? (
        <div className="border-t bg-background px-4 py-6 md:hidden">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Oferta</p>
              <div className="mt-1">
                {ofertaMenu.flatMap((c) => c.links).map((link) => (
                  <MenuLinkItem key={link.label} link={link} onClick={() => setMobileOpen(false)} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Bankowość elektroniczna
              </p>
              <div className="mt-1">
                {bankMenu.flatMap((c) => c.links).map((link) => (
                  <MenuLinkItem key={link.label} link={link} onClick={() => setMobileOpen(false)} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Inne</p>
              <div className="mt-1">
                <MenuLinkItem link={{ label: "Promocje", to: "/promocje" }} onClick={() => setMobileOpen(false)} />
                <MenuLinkItem link={{ label: "Aktualności", to: "/aktualnosci" }} onClick={() => setMobileOpen(false)} />
                <MenuLinkItem link={{ label: "Pomoc i kontakt", to: "/pomoc-i-kontakt" }} onClick={() => setMobileOpen(false)} />
                <MenuLinkItem link={{ label: "Zaloguj się", to: "/zaloguj" }} onClick={() => setMobileOpen(false)} />
              </div>
            </div>
          </div>
          <SearchField className="mt-6 max-w-none" />
        </div>
      ) : null}
    </div>
  );
}
