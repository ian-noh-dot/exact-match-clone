import { ChevronDown, Lock, Menu, Search } from "lucide-react";

function PkoEmblem() {
  return (
    <a href="/" className="flex flex-col items-center gap-1" aria-label="Bank Polski — strona główna">
      <svg width="40" height="44" viewBox="0 0 40 44" aria-hidden="true">
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
      <span className="text-sm font-bold leading-tight tracking-tight">
        Bank
        <br />
        Polski
      </span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 lg:px-8">
        <div className="flex items-center gap-10">
          <PkoEmblem />
          <button
            type="button"
            className="hidden items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary md:inline-flex"
          >
            Klient indywidualny
            <ChevronDown className="size-4 text-muted-foreground" />
          </button>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            <Lock className="size-4" />
            <span className="hidden sm:inline">Zaloguj się</span>
          </a>
          <a href="#" className="btn-outline px-5 py-2.5 sm:px-7">
            Otwórz konto
          </a>
          <button type="button" className="inline-flex md:hidden" aria-label="Menu">
            <Menu className="size-6" />
          </button>
        </div>
      </div>
      <div className="mx-auto hidden max-w-7xl items-center gap-7 px-4 pb-3 md:flex lg:px-8">
        <nav className="flex items-center gap-7 text-sm font-medium">
          <button type="button" className="inline-flex items-center gap-1.5 transition-colors hover:text-primary">
            Oferta
            <ChevronDown className="size-4 text-muted-foreground" />
          </button>
          <button type="button" className="inline-flex items-center gap-1.5 transition-colors hover:text-primary">
            Bankowość elektroniczna
            <ChevronDown className="size-4 text-muted-foreground" />
          </button>
          <a href="#" className="transition-colors hover:text-primary">
            Pomoc i kontakt
          </a>
          <a href="#" className="font-semibold text-promo-green transition-colors hover:text-promo-green/80">
            Promocje
          </a>
        </nav>
        <label className="relative ml-auto w-full max-w-xs">
          <input
            type="search"
            placeholder="Wyszukaj"
            className="w-full rounded-full border bg-background py-2.5 pl-5 pr-11 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
          <Search className="absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        </label>
      </div>
    </header>
  );
}
