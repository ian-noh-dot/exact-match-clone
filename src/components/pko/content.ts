import {
  ArrowLeftRight,
  Baby,
  BadgeEuro,
  Banknote,
  Car,
  Coins,
  CreditCard,
  Gift,
  Globe,
  GraduationCap,
  Heart,
  Home,
  Landmark,
  Laptop,
  LineChart,
  PiggyBank,
  Plane,
  Percent,
  Shield,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type Tile = {
  title: string;
  text?: string;
  badge?: string;
  icon: LucideIcon;
  href?: string;
  highlight?: boolean;
};

export type Section = { title?: string; tiles: Tile[] };

export type ListingTab = { label: string; sections: Section[] };

/* ---------------- Konta ---------------- */

export const kontaTabs: ListingTab[] = [
  {
    label: "Promocja",
    sections: [
      {
        tiles: [
          {
            badge: "Polecane",
            highlight: true,
            title: "Nawet do 1000 zł z PKO Kontem za Zero z kartą Visa",
            text: "Otwórz konto online z kartą Visa, wpisz kod: SAMSUNG i spełnij warunki promocji „Bankuj z Samsung” i „400 zł z Samsung”",
            icon: Sparkles,
            href: "/konto-z-samsung",
          },
          {
            title: "Do 600 zł z PKO Kontem za Zero",
            text: "Otwórz online konto z kartą Visa, wpisz kod: PROSTO i spełnij pozostałe warunki promocji „Prosty zwrot”",
            icon: Banknote,
            href: "/klient-indywidualny/konta/konto-za-zero",
          },
          {
            badge: "Dla dzieci 0–12 lat",
            title: "Do 300 zł z PKO Kontem Dziecka",
            text: "Otwórz online PKO Konto Dziecka, wpisz kod: PROSTO i spełnijcie pozostałe warunki promocji „Prosty zwrot”",
            icon: Baby,
          },
          {
            badge: "Dla nastolatków 13–17 lat",
            title: "Do 300 zł z PKO Kontem dla Młodych",
            text: "Otwórz online PKO Konto dla Młodych (13–17 lat), wpisz kod: PROSTO i spełnijcie pozostałe warunki promocji „Prosty zwrot”",
            icon: GraduationCap,
          },
          {
            badge: "Dla młodych 18–26 lat",
            title: "Do 600 zł z PKO Kontem dla Młodych",
            text: "Otwórz online PKO Konto dla Młodych (18–26 lat), wpisz kod: PROSTO i spełnijcie pozostałe warunki promocji „Prosty zwrot”",
            icon: Star,
          },
        ],
      },
    ],
  },
  {
    label: "Oszczędnościowe",
    sections: [
      {
        tiles: [
          { badge: "Nowość", title: "Konto Oszczędnościowe Plus", text: "4% w skali roku do 250 tys. zł na nowe środki przez 90 dni (dotyczy umów zawartych od 27.06.2025 r.)", icon: PiggyBank },
          { title: "Skarbonka", text: "Otwórz swoją pierwszą Skarbonkę i zyskaj oprocentowanie stałe w promocji: 3% w skali roku do 10 tys. przez 6 miesięcy", icon: Coins },
          { title: "Pierwsze Konto Oszczędnościowe", text: "Oprocentowanie promocyjne: nawet do 6% w skali roku do 10 tys. zł przy systematycznym oszczędzaniu. Dla osób do 17 lat", icon: PiggyBank },
          { title: "Konto mieszkaniowe", text: "Załóż Konto Mieszkaniowe i oszczędzaj systematycznie", icon: Home },
        ],
      },
    ],
  },
  {
    label: "Premium",
    sections: [
      {
        tiles: [
          { title: "Konto Aurum", text: "Konto premium z dużymi możliwościami i indywidualną obsługą dedykowanego doradcy", icon: Gem() },
          { title: "Konto Platinium II", text: "Prestiżowe konto dla osób ceniących dyskretne i indywidualne podejście banku", icon: Sparkles },
        ],
      },
    ],
  },
  {
    label: "Walutowe",
    sections: [
      {
        tiles: [
          { title: "Konto walutowe", text: "13 walut: EUR, GBP, USD, CHF, DKK, NOK, SEK, CZK, HUF, TRY, CAD, RON, JPY. Możliwość podpięcia karty wielowalutowej", icon: BadgeEuro },
          { title: "Pakiet walutowy", text: "Odkryj zalety pakietu walutowego 3w1. Korzystaj z konta walutowego, karty wielowalutowej i kantoru internetowego", icon: Globe },
        ],
      },
    ],
  },
  {
    label: "Dla dzieci i młodzieży",
    sections: [
      {
        tiles: [
          { badge: "Dla dzieci 0–12 lat", title: "Do 300 zł z PKO Kontem Dziecka", text: "Otwórz online PKO Konto Dziecka, wpisz kod: PROSTO i spełnijcie pozostałe warunki promocji „Prosty zwrot”", icon: Baby },
          { badge: "Od 13. roku życia", title: "PKO Konto dla Młodych", text: "Darmowe konto z kartą dla nastolatków 13–17 lat, kod PROSTO i promocja „Prosty zwrot”", icon: GraduationCap },
          { title: "Pierwsze Konto Oszczędnościowe", text: "Oprocentowanie promocyjne: nawet do 6% w skali roku do 10 tys. zł przy systematycznym oszczędzaniu (0–17 lat)", icon: PiggyBank },
          { title: "Karta PKO Junior", text: "Pierwszy krok w stronę finansowej samodzielności. Karta debetowa dla dziecka w wieku od 6 do 12 lat", icon: CreditCard },
          { title: "Szkolne Kasy Oszczędności (SKO)", text: "Konta dla uczniów, szkół i rad rodziców", icon: Landmark },
          { title: "Jak uczyć dziecko? Mamy na to sposoby", text: "Skorzystaj z materiałów, które przygotowujemy ze specjalistami", icon: Heart },
        ],
      },
    ],
  },
  {
    label: "Wszystkie produkty",
    sections: [
      {
        title: "Najczęściej wybierane",
        tiles: [
          { badge: "Polecane", highlight: true, title: "Do 600 zł z PKO Kontem za Zero", text: "Otwórz online konto z kartą Visa, wpisz kod: PROSTO i spełnij pozostałe warunki promocji „Prosty zwrot”", icon: Banknote, href: "/klient-indywidualny/konta/konto-za-zero" },
          { title: "PKO Konto bez Granic", text: "Bezpłatne bankomaty na świecie i wiele innych benefitów (od 18 lat)", icon: Plane },
          { title: "Konto Aurum", text: "Konto premium z dużymi możliwościami i indywidualną obsługą dedykowanego doradcy", icon: Gem() },
          { title: "Konto Platinium II", text: "Prestiżowe konto dla osób ceniących dyskretne i indywidualne podejście banku", icon: Sparkles },
          { badge: "Nowość", title: "Skarbonka", text: "Zyskaj oprocentowanie stałe w promocji: 3% do 10 tys. (przez 6 miesięcy) na pierwszej otwartej przez Ciebie Skarbonce", icon: Coins },
          { title: "Konto walutowe", text: "EUR, GBP, USD, CHF, DKK, NOK, SEK, CZK, HUF, TRY. Możliwość podpięcia karty debetowej pod konto", icon: BadgeEuro },
          { title: "Konto Oszczędnościowe Plus", text: "4% w skali roku do 250 tys. zł na nowe środki przez 90 dni. Dla osób od 18 roku życia", icon: PiggyBank },
          { title: "Konto Oszczędnościowe dla dzieci", text: "Oprocentowanie promocyjne: nawet do 6% w skali roku do 10 tys. zł (0–18 lat)", icon: PiggyBank },
          { title: "Debet na koncie", text: "Wybierz debet na koncie z minimum formalności lub limit odnawialny z umową na rok czasu", icon: ArrowLeftRight },
          { title: "Konto za Zero", text: "Darmowe dla klientów, którzy korzystają ze świadczenia Rodzina 800+ (dotychczas Rodzina 500+)", icon: Wallet },
        ],
      },
    ],
  },
];

/* ---------------- Karty i płatności ---------------- */

export const kartyTabs: ListingTab[] = [
  {
    label: "Wszystkie",
    sections: [
      {
        tiles: [
          { badge: "Polecamy", highlight: true, title: "PKO Płacę później", text: "Aktywuj bezpłatnie i zyskaj dodatkowe pieniądze na zakupy", icon: ShoppingBag },
          { badge: "Promocja", title: "Karta kredytowa PKO Mastercard Platinum", text: "RRSO 16,96%. Z ubezpieczeniem podróżnym w kraju i za granicą dla Ciebie i Twoich bliskich", icon: CreditCard, href: "/klient-indywidualny/karty-platnosci/karta-kredytowa-mastercard-platinum" },
          { title: "Allegro Klik", text: "Aktywuj teraz i zgarnij nawet 1200 zł zwrotu za zakupy na Allegro", icon: ShoppingBag, href: "/klient-indywidualny/karty-platnosci/allegroklik" },
          { badge: "Promocja", title: "Przejrzysta karta kredytowa", text: "RRSO 19,50%. Dołącz do programu Visa Benefit i korzystaj z atrakcyjnych rabatów", icon: CreditCard },
          { title: "Karta kredytowa PKO Visa Infinite", text: "RRSO 19,31%. Z dostępem do wybranych saloników VIP na lotniskach całego świata", icon: CreditCard },
          { title: "Karta wielowalutowa", text: "Karta wielowalutowa umożliwia płatności bez przewalutowania", icon: Globe },
          { title: "Karta debetowa PKO Junior", text: "Pierwszy krok w stronę finansowej samodzielności. Karta debetowa dla dziecka w wieku od 6 do 12 lat", icon: Baby },
          { title: "Warszawska Karta Płatnicza", text: "Dwie karty w jednej", icon: CreditCard },
          { title: "Karta dla wybranej osoby", text: "Wybrana osoba – nawet od 13. roku życia – może mieć swoją kartę do Twojego konta, jeśli ją zamówisz", icon: Heart },
          { badge: "Promocja", title: "Samsung Pay", text: "Płać zbliżeniowo telefonem lub smartwatchem Samsung Galaxy", icon: Smartphone },
          { title: "Visa Mobile", text: "Wpisujesz numer swojego telefonu i potwierdzasz płatność w aplikacji Visa Mobile", icon: Smartphone },
          { title: "Płatności zbliżeniowe BLIK", text: "Wystarczy, że zbliżysz telefon do terminala płatniczego", icon: Smartphone },
          { title: "Google Pay", text: "Korzystaj z Google Pay na telefonie z systemem Android lub smartwatchu", icon: Smartphone },
          { title: "Apple Pay", text: "Z Apple Pay i kartą wydaną przez PKO Bank Polski zapłacisz iPhone’m, Apple Watchem, iPadem lub na swoim Mac’u", icon: Smartphone },
          { title: "Płatności SwatchPAY!", text: "Potwierdź płatność zegarkiem Swatch", icon: Smartphone },
          { title: "Płatności zbliżeniowe Xiaomi Pay", text: "Płać opaską lub smartwatchem z funkcją Xiaomi Pay", icon: Smartphone },
          { title: "Garmin Pay", text: "Garmin Pay umożliwia płacenie zbliżeniowo zegarkiem Garmin", icon: Smartphone },
          { title: "Płacę z PKO", text: "Płać wygodnie za zakupy i usługi w internecie", icon: Laptop },
        ],
      },
    ],
  },
  {
    label: "Karty kredytowe",
    sections: [
      {
        tiles: [
          { badge: "Promocja", highlight: true, title: "Karta kredytowa PKO Mastercard Platinum", text: "RRSO 16,96%. Z ubezpieczeniem podróżnym w kraju i za granicą dla Ciebie i Twoich bliskich", icon: CreditCard, href: "/klient-indywidualny/karty-platnosci/karta-kredytowa-mastercard-platinum" },
          { title: "Przejrzysta karta kredytowa", text: "RRSO 19,50%. Dołącz do programu Visa Benefit i korzystaj z atrakcyjnych rabatów", icon: CreditCard },
          { title: "Karta kredytowa PKO Visa Infinite", text: "RRSO 19,31%. Z dostępem do wybranych saloników VIP na lotniskach całego świata", icon: CreditCard },
        ],
      },
    ],
  },
  {
    label: "Karty do konta",
    sections: [
      {
        tiles: [
          { title: "Karta wielowalutowa", text: "Karta wielowalutowa umożliwia płatności bez przewalutowania", icon: Globe },
          { title: "Karta do PKO Konta Dziecka", text: "Pierwszy krok w stronę finansowej samodzielności. Karta debetowa dla dziecka w wieku od 6 do 12 lat", icon: Baby },
          { title: "Karta z herbami klubów Ekstraklasy", text: "Wybierz kartę swojego klubu razem z PKO Bankiem Polskim!", icon: Star },
          { title: "Warszawska Karta Płatnicza", text: "Dwie karty w jednej", icon: CreditCard },
          { title: "Karta dla wybranej osoby", text: "Wybrana osoba – nawet od 13. roku życia – może mieć swoją kartę do Twojego konta, jeśli ją zamówisz", icon: Heart },
        ],
      },
    ],
  },
  {
    label: "Płatności",
    sections: [
      {
        tiles: [
          { badge: "Polecamy", highlight: true, title: "Allegro Klik", text: "Aktywuj teraz i zgarnij nawet 1200 zł zwrotu za zakupy na Allegro", icon: ShoppingBag, href: "/klient-indywidualny/karty-platnosci/allegroklik" },
          { title: "PKO Płacę później", text: "Aktywuj bezpłatnie i zyskaj dodatkowe pieniądze na zakupy", icon: ShoppingBag },
          { badge: "Promocja", title: "Samsung Pay", text: "Płać zbliżeniowo telefonem lub smartwatchem Samsung Galaxy", icon: Smartphone },
          { title: "Visa Mobile", text: "Wpisujesz numer swojego telefonu i potwierdzasz płatność w aplikacji Visa Mobile", icon: Smartphone },
          { title: "Płatności zbliżeniowe BLIK", text: "Wystarczy, że zbliżysz telefon do terminala płatniczego", icon: Smartphone },
          { title: "Google Pay", text: "Korzystaj z Google Pay na telefonie z systemem Android lub smartwatchu", icon: Smartphone },
          { title: "Apple Pay", text: "Z Apple Pay i kartą wydaną przez PKO Bank Polski zapłacisz iPhone’m, Apple Watchem, iPadem lub na swoim Mac’u", icon: Smartphone },
          { title: "Płatności SwatchPAY!", text: "Potwierdź płatność zegarkiem Swatch", icon: Smartphone },
          { title: "Płatności zbliżeniowe Xiaomi Pay", text: "Płać opaską lub smartwatchem z funkcją Xiaomi Pay", icon: Smartphone },
          { title: "Garmin Pay", text: "Garmin Pay umożliwia płacenie zbliżeniowo zegarkiem Garmin", icon: Smartphone },
        ],
      },
    ],
  },
];

/* ---------------- Kredyty i pożyczki ---------------- */

export const kredytyTabs: ListingTab[] = [
  {
    label: "Pożyczki",
    sections: [
      {
        tiles: [
          { badge: "Najczęściej wybierana", highlight: true, title: "Pożyczka gotówkowa", text: "RRSO 9,94%. Pożyczka bez wychodzenia z domu", icon: Banknote },
          { title: "Pożyczka konsolidacyjna", text: "RRSO 12,14%. Połącz swoje raty online i płać jedną miesięcznie zamiast kilku", icon: ArrowLeftRight },
        ],
      },
    ],
  },
  {
    label: "Kredyty hipoteczne",
    sections: [
      {
        tiles: [
          { badge: "Polecane", highlight: true, title: "Cyfrowy Kredyt Hipoteczny", text: "RRSO 7,44%. Złóż wniosek i podpisz umowę w 100% online", icon: Home },
          { title: "Kredyt hipoteczny Własny Kąt", text: "RRSO: 7,93% PKO BP; 6,39% PKO BH. Oprocentowanie stałe przez 5 lat lub zmienne", icon: Home },
          { title: "Kredyt mieszkaniowy ze spłatą rodzinną", text: "RRSO 7,93%. Kredyt gwarantowany przez BGK", icon: Home },
          { title: "Kredyt hipoteczny Mix", text: "RRSO 7,98%. Sprawdź, jak sfinansować remont, dowolne cele lub spłacić inne zobowiązania", icon: Home },
          { title: "Pożyczka hipoteczna", text: "RRSO 9,59%. Możesz wziąć pożyczkę do 60% wartości nieruchomości", icon: Home },
          { title: "Przenieś kredyt mieszkaniowy", text: "RRSO: 7,93% PKO BP; 6,39% PKO BH. Teraz łatwiej przeniesiesz do nas kredyt mieszkaniowy", icon: ArrowLeftRight },
        ],
      },
    ],
  },
  {
    label: "Limity na koncie",
    sections: [
      {
        tiles: [
          { title: "Limit odnawialny", text: "RRSO 21,24%. Nawet do 150 000 zł dodatkowych środków w ramach kredytu w rachunku płatniczym", icon: Wallet },
          { title: "Debet na koncie", text: "Nawet 5000 zł dodatkowych środków na Twoim koncie na niespodziewane zakupy i nieplanowane wydatki", icon: Wallet },
        ],
      },
    ],
  },
  {
    label: "Karty kredytowe",
    sections: [
      {
        tiles: [
          { title: "Przejrzysta karta kredytowa", text: "RRSO 19,50%. Dołącz do programu Visa Benefit i korzystaj z atrakcyjnych rabatów", icon: CreditCard },
          { title: "Karta kredytowa PKO Mastercard Platinum", text: "RRSO 16,96%. Korzystaj z ubezpieczenia podróżnego w kraju i za granicą, dla Ciebie i Twoich bliskich", icon: CreditCard, href: "/klient-indywidualny/karty-platnosci/karta-kredytowa-mastercard-platinum" },
          { title: "Karta kredytowa PKO Visa Infinite", text: "RRSO 19,31%. Korzystaj z wybranych saloników VIP na lotniskach całego świata", icon: CreditCard },
        ],
      },
    ],
  },
  {
    label: "Wszystkie produkty",
    sections: [
      {
        tiles: [
          { badge: "Polecane", highlight: true, title: "Cyfrowy Kredyt Hipoteczny", text: "RRSO 7,44%. Złóż wniosek i podpisz umowę w 100% online", icon: Home },
          { badge: "Najczęściej wybierana", title: "Pożyczka gotówkowa", text: "RRSO 9,94%. Pożyczka bez wychodzenia z domu", icon: Banknote },
          { title: "Pożyczka konsolidacyjna", text: "RRSO 12,14%. Połącz swoje raty online i płać jedną miesięcznie zamiast kilku", icon: ArrowLeftRight },
          { title: "Kredyt hipoteczny Własny Kąt", text: "RRSO: 7,93% PKO BP; 6,39% PKO BH. Oprocentowanie stałe przez 5 lat lub zmienne", icon: Home },
          { title: "Ekopożyczka PKO", text: "RRSO 15,52%. Pożyczka na zakup paneli fotowoltaicznych (słonecznych) oraz innych urządzeń i pojazdów ekologicznych", icon: Car },
          { title: "Kredyt mieszkaniowy ze spłatą rodzinną", text: "RRSO 7,93%. Kredyt gwarantowany przez BGK", icon: Home },
          { title: "Pożyczka hipoteczna", text: "RRSO 9,59%. Możesz wziąć pożyczkę do 60% wartości nieruchomości", icon: Home },
          { title: "Kredyt hipoteczny Mix", text: "RRSO 7,98%. Sprawdź, jak sfinansować remont, dowolne cele lub spłacić inne zobowiązania", icon: Home },
          { title: "Limit odnawialny", text: "RRSO 21,24%. Nawet do 150 000 zł dodatkowych środków w ramach kredytu w rachunku płatniczym", icon: Wallet },
          { title: "Przejrzysta karta kredytowa", text: "RRSO 19,50%. Dołącz do programu Visa Benefit i korzystaj z atrakcyjnych rabatów", icon: CreditCard },
        ],
      },
    ],
  },
];

/* ---------------- Oszczędzanie i inwestycje ---------------- */

export const oszczedzanieTabs: ListingTab[] = [
  {
    label: "Wszystkie",
    sections: [
      {
        tiles: [
          { badge: "Polecane", highlight: true, title: "Konto Oszczędnościowe Plus", text: "4% w skali roku do 250 tys. zł na nowe środki przez 90 dni. Dla osób od 18 roku życia (dotyczy umów zawartych od 27.06.2025 r.)", icon: PiggyBank },
          { title: "PKO Inwestomat", text: "Prosty sposób na inwestowanie online", icon: TrendingUp },
          { title: "Lokata na nowe środki", text: "Wpłać nowe środki i zyskaj 3,4% w skali roku na lokacie", icon: Coins },
          { badge: "Nowość", title: "Skarbonka", text: "Zyskaj oprocentowanie stałe w promocji: 3% w skali roku do 10 tys. (przez 6 miesięcy) na pierwszej otwartej przez Ciebie Skarbonce", icon: Coins },
          { title: "Obligacje skarbowe", text: "Oszczędzasz z konkurencyjnym oprocentowaniem i masz w ofercie obligacje, które uwzględniają inflację", icon: Landmark, href: "/klient-indywidualny/oszczedzanie-inwestycje/obligacje-skarbowe" },
          { title: "Mój Kapitał", text: "Z premią za regularne oszczędzanie", icon: PiggyBank },
          { title: "Autolokacja IV", text: "Lokata czy fundusz? Nie musisz wybierać! Do 5% w skali roku na lokacie", icon: Car },
          { title: "Lokata mobilna", text: "Oszczędzaj w Aplikacji mobilnej PKO i zyskaj 3% w skali roku na 3-miesięcznej lokacie", icon: Smartphone },
          { title: "Pakiet Emerytalny", text: "Zadbaj o swoją przyszłość już dziś – buduj kapitał na emeryturę", icon: Shield },
          { title: "Rachunek inwestycyjny", text: "Do zakupu i obsługi akcji, kontraktów terminowych, obligacji, funduszy", icon: LineChart },
          { title: "Lokata dla klientów Bankowości Osobistej", text: "Komfort oszczędzania. Zyskaj do 2,5% w skali roku na 3-miesięcznej lokacie", icon: Coins },
          { title: "Fundusze inwestycyjne", text: "Kilkadziesiąt funduszy z możliwością zakupu online", icon: LineChart },
          { title: "Lokata terminowa", text: "Cenisz wygodę? Oszczędzaj na lokacie ze stałym oprocentowaniem", icon: Coins },
          { title: "Program inwestycyjny Akcjomat V", text: "Kiedy chcesz inwestować stopniowo w subfundusze akcji, ale nie wiesz, jak zacząć", icon: TrendingUp },
          { badge: "Nowa subskrypcja", title: "Produkty strukturyzowane", text: "Raporty z inwestycji w produkty strukturyzowane i Bankowe Papiery Wartościowe oraz lista produktów w obsłudze", icon: Percent },
          { title: "IKZE-Obligacje", text: "Możliwość inwestowania w oszczędnościowe Obligacje Skarbu Państwa", icon: Landmark },
          { title: "IKE-Obligacje", text: "Możliwość inwestowania w oszczędnościowe Obligacje Skarbu Państwa", icon: Landmark },
          { title: "PKO Mój Plan", text: "Inwestuj na swoich zasadach", icon: TrendingUp },
          { title: "Złoto inwestycyjne", text: "Zakup złota w fizycznej postaci jest wygodnym sposobem na ulokowanie oszczędności w tym kruszcu", icon: Coins },
        ],
      },
    ],
  },
  {
    label: "Oszczędzanie",
    sections: [
      {
        tiles: [
          { badge: "Polecane", highlight: true, title: "Konto Oszczędnościowe Plus", text: "4% w skali roku do 250 tys. zł na nowe środki przez 90 dni. Dla osób od 18 roku życia", icon: PiggyBank },
          { badge: "Nowość", title: "Skarbonka", text: "Zyskaj oprocentowanie stałe w promocji: 3% w skali roku do 10 tys. (przez 6 miesięcy)", icon: Coins },
          { title: "Mój Kapitał", text: "Z premią za regularne oszczędzanie", icon: PiggyBank },
          { title: "Lokata na nowe środki", text: "Wpłać nowe środki i zyskaj 3,4% w skali roku na lokacie", icon: Coins },
          { title: "Lokata mobilna", text: "Oszczędzaj w Aplikacji mobilnej PKO i zyskaj 3% w skali roku na 3-miesięcznej lokacie", icon: Smartphone },
          { title: "Lokata terminowa", text: "Cenisz wygodę? Oszczędzaj na lokacie ze stałym oprocentowaniem", icon: Coins },
        ],
      },
    ],
  },
  {
    label: "Inwestycje",
    sections: [
      {
        tiles: [
          { badge: "Polecane", highlight: true, title: "PKO Inwestomat", text: "Prosty sposób na inwestowanie online", icon: TrendingUp },
          { title: "Obligacje skarbowe", text: "Oszczędzasz z konkurencyjnym oprocentowaniem i masz w ofercie obligacje, które uwzględniają inflację", icon: Landmark, href: "/klient-indywidualny/oszczedzanie-inwestycje/obligacje-skarbowe" },
          { title: "Rachunek inwestycyjny", text: "Do zakupu i obsługi akcji, kontraktów terminowych, obligacji, funduszy", icon: LineChart },
          { title: "Fundusze inwestycyjne", text: "Kilkadziesiąt funduszy z możliwością zakupu online", icon: LineChart },
          { title: "Program inwestycyjny Akcjomat V", text: "Kiedy chcesz inwestować stopniowo w subfundusze akcji, ale nie wiesz, jak zacząć", icon: TrendingUp },
          { title: "Złoto inwestycyjne", text: "Zakup złota w fizycznej postaci jest wygodnym sposobem na ulokowanie oszczędności w tym kruszcu", icon: Coins },
        ],
      },
    ],
  },
];

/* ---------------- Promocje ---------------- */

export const promocjeTabs: ListingTab[] = [
  {
    label: "Start",
    sections: [
      {
        tiles: [
          { highlight: true, title: "Do 1000 zł z PKO Kontem za Zero z kartą Visa", text: "Otwórz konto online z kartą Visa, wpisz kod: SAMSUNG i spełnij warunki promocji „Bankuj z Samsung” i „400 zł z Samsung”", icon: Sparkles, href: "/konto-z-samsung" },
          { title: "Do 600 zł z PKO Kontem za Zero", text: "Otwórz online konto z kartą Visa, wpisz kod: PROSTO i spełnij pozostałe warunki promocji „Prosty zwrot”", icon: Banknote },
          { title: "Pożyczka gotówkowa online", text: "RRSO 12,69%. Im wyższa kwota pożyczki, tym niższe oprocentowanie zmienne", icon: Banknote },
          { badge: "Black Weeks", title: "Przytul nawet 10% cashbacku z Allegro Klik na Black Weeks", text: "Promocja od 2.11 do 19.11 br. Limit cashbacku do 100 zł/m-c", icon: ShoppingBag },
          { title: "Płać telefonem i zyskaj 200 zł", text: "Zacznij korzystać z Samsung Wallet i odbierz nawet 200 zł na zakup urządzeń mobilnych Samsung", icon: Smartphone },
          { title: "Nawet 400 zł do Biedronki", text: "RRSO 19,50%. Sprawdź promocję Przejrzystej karty kredytowej Visa", icon: Gift },
          { title: "Zamień codzienne zakupy w podróż do świata Disneyland® Paris", text: "Weź udział w konkursie dla klientów PKO Banku Polskiego", icon: Plane },
          { title: "Odbierz 7% zwrotu na kolejny pobyt", text: "Płać kartą kredytową Mastercard Platinum na booking.com i zyskaj nawet do 200 € w postaci środków na podróże", icon: Plane },
          { badge: "Dla młodych 18–26 lat", title: "Do 600 zł z PKO Kontem dla Młodych", text: "Otwórz online PKO Konto dla Młodych (18–26 lat), wpisz kod: PROSTO i spełnijcie pozostałe warunki promocji „Prosty zwrot”", icon: Star },
          { title: "Tylko w aplikacji mobilnej", text: "Zyskaj oprocentowanie stałe w promocji: 3% w skali roku do 10 tys. (przez 6 miesięcy) na pierwszej otwartej przez Ciebie Skarbonce", icon: Smartphone },
          { title: "Przejdź na PKO Dom i zyskaj 25% zniżki", text: "Masz u nas kredyt hipoteczny? Zmień ubezpieczenie do kredytu hipotecznego na PKO Dom", icon: Home },
          { badge: "Bankowość Osobista", title: "500 zł do sklepu Samsung dla nowych klientów Bankowości Osobistej", text: "Otwórz Konto Aurum lub Konto Platinium II i spełnij warunki promocji „Mogę więcej z Samsung”", icon: Gift },
          { title: "Nowość: subskrypcja XYZ.pl!", text: "Kup subskrypcję XYZ.pl i zyskaj 3 miesiące bez opłat", icon: Gift },
          { title: "Do 3% zwrotu za zakupy na Allegro", text: "Aktywuj Allegro Klik i zgarniaj cashback do 3% (maks. 100 zł miesięcznie) za zakupy", icon: ShoppingBag },
          { title: "Dostawy i zwroty Allegro Smart! na 6 miesięcy za 1 zł", text: "Aktywuj Allegro Klik i skorzystaj z promocji w ciągu 30 dni od aktywacji", icon: ShoppingBag },
          { title: "Zniżki chodzą trójkami", text: "Masz ubezpieczenie PKO Życie? Zobacz, jakie zniżki na Ciebie czekają", icon: Percent },
          { title: "Nowy Dom Budujesz? Kupujesz?", text: "PKO BH RRSO: 7,93% PKO BP; 6,39% PKO BH. Sprawdź co dla Ciebie przygotowaliśmy", icon: Home },
          { title: "Lubisz swoje konto? Poleć je znajomym – możecie zgarnąć kasę", text: "Zarejestruj się w programie PKO Polecam", icon: Heart },
          { title: "Odmień swój dom z Samsung", text: "Multirabaty na sprzęt AGD i RTV", icon: Gift },
          { title: "Twoja pierwsza pożyczka u nas", text: "RRSO 9,94%. Weź ją z obniżonym oprocentowaniem", icon: Banknote },
          { title: "Zyskaj z kartą Visa", text: "Płać kartą i korzystaj z atrakcyjnych rabatów w programie Visa Benefit", icon: CreditCard },
          { title: "Pożyczka konsolidacyjna. RRSO 12,14%", text: "Im wyższa kwota pożyczki, tym niższe oprocentowanie zmienne", icon: ArrowLeftRight },
        ],
      },
    ],
  },
  {
    label: "<18 lat",
    sections: [
      {
        tiles: [
          { highlight: true, title: "6% w skali roku do 10 000 zł", text: "Pierwsze Konto Oszczędnościowe przy systematycznym oszczędzaniu", icon: PiggyBank },
          { badge: "Dla dzieci 0–12 lat", title: "Do 300 zł z PKO Kontem Dziecka", text: "Otwórz online PKO Konto Dziecka, wpisz kod: PROSTO i spełnijcie pozostałe warunki promocji „Prosty zwrot”", icon: Baby },
          { badge: "Dla nastolatków 13–17 lat", title: "Do 300 zł z PKO Kontem dla Młodych", text: "Otwórz online PKO Konto dla Młodych (13–17 lat), wpisz kod: PROSTO i spełnijcie pozostałe warunki promocji „Prosty zwrot”", icon: GraduationCap },
          { title: "Skarbonka", text: "Zyskaj oprocentowanie stałe w promocji: 3% do 10 tys. (przez 6 miesięcy) na pierwszej otwartej przez Ciebie Skarbonce", icon: Coins },
        ],
      },
    ],
  },
  {
    label: "Doładowania telefonów",
    sections: [
      {
        tiles: [
          { highlight: true, title: "Doładowania telefonów", text: "Doładuj telefon wygodnie w aplikacji mobilnej PKO i serwisie internetowym", icon: Smartphone },
        ],
      },
    ],
  },
];

/* ---------------- Aktualności ---------------- */

export const aktualnosci = [
  {
    date: "01.11.2026",
    tag: "UWAGA",
    title: "Oszuści podszywają się pod bank",
    text: "Uważaj na fałszywe e-maile o aktywacji klucza bezpieczeństwa",
  },
  {
    date: "01.11.2026",
    title: "Lokata dla nowych klientów Bankowości Prywatnej PKO Banku Polskiego",
    text: "2 listopada 2026 r. wprowadzamy lokatę dla nowych klientów Bankowości Prywatnej",
  },
  {
    date: "25.10.2026",
    title: "Większa kontrola nad bezpieczeństwem karty",
    text: "Udostępniliśmy nową funkcję dla kart w aplikacji mobilnej PKO. Teraz możesz samodzielnie potwierdzać transakcje kartowe wymagające dodatkowej weryfikacji",
  },
];

/* small helper so Gem resolves without hoisting issues */
function Gem() {
  return Sparkles;
}
