import { useMemo, useState } from "react";

const RATE_MONTHLY = 0.095 / 12;
const CREDITED_MULTIPLIER = 1.93; // mirrors the bank's credited-amount example (15 000 zł → 41 rat → 826 zł)
const RRSO = 9.94;

function format(n: number) {
  return new Intl.NumberFormat("pl-PL", { maximumFractionDigits: 0 }).format(Math.round(n));
}

export function LoanCalculator() {
  const [amount, setAmount] = useState(15000);
  const [months, setMonths] = useState(41);

  const { rata, total } = useMemo(() => {
    const credited = amount * CREDITED_MULTIPLIER;
    const r = RATE_MONTHLY;
    const payment = (credited * r) / (1 - Math.pow(1 + r, -months));
    const t = payment * (months - 1) + payment * 0.99;
    return { rata: payment, total: t };
  }, [amount, months]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
      <h2 className="section-heading text-center">Gotówka online, nawet w jeden dzień</h2>
      <p className="mt-3 text-center text-sm text-muted-foreground">
        Wprowadź dane dotyczące pożyczki
      </p>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border bg-card p-8">
          <label className="block text-sm font-semibold">
            Ile potrzebujesz?
            <span className="mt-2 flex items-center justify-between text-muted-foreground">
              <span className="text-xs font-medium">Wprowadź wartość z zakresu od 15 000 do 50 000.</span>
              <span className="text-base font-bold text-foreground">{format(amount)} zł</span>
            </span>
          </label>
          <input
            type="range"
            min={15000}
            max={50000}
            step={500}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mt-3 w-full accent-[var(--primary)]"
            aria-label="Kwota pożyczki"
          />

          <label className="mt-8 block text-sm font-semibold">
            Na jaki okres?
            <span className="mt-2 flex items-center justify-between text-muted-foreground">
              <span className="text-xs font-medium">Wprowadź wartość z zakresu od 2 do 60.</span>
              <span className="text-base font-bold text-foreground">{months} rat (mies.)</span>
            </span>
          </label>
          <input
            type="range"
            min={2}
            max={60}
            step={1}
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="mt-3 w-full accent-[var(--primary)]"
            aria-label="Okres pożyczki"
          />

          <p className="mt-8 text-xs text-muted-foreground">
            Pierwsza pożyczka w banku — propozycja skierowana jest do osób, które nie miały
            pożyczki/kredytu gotówkowego w PKO Banku Polskim
          </p>
        </div>

        <div className="flex flex-col rounded-3xl bg-secondary p-8">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Wyniki na podstawie wprowadzonych danych
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground">Miesięczna rata</p>
              <p className="text-3xl font-extrabold">{format(rata)} zł</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">RRSO</p>
              <p className="text-3xl font-extrabold">{String(RRSO).replace(".", ",")}%</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Całkowita kwota do zapłaty: {format(total)} zł
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a href="#" className="btn-outline w-full">
              Sprawdź koszt pożyczki
            </a>
            <a href="#" className="btn-primary w-full">
              Zobacz propozycję
            </a>
          </div>
        </div>
      </div>

      <details className="mx-auto mt-8 max-w-5xl rounded-2xl border p-6 text-xs leading-relaxed text-muted-foreground">
        <summary className="cursor-pointer text-sm font-semibold text-foreground">
          Reprezentatywny przykład
        </summary>
        <p className="mt-3">
          Rzeczywista Roczna Stopa Oprocentowania (RRSO) wynosi 9,94%. Całkowita kwota kredytu (bez
          kredytowanych kosztów) 29 400,00 zł. Całkowita kwota do zapłaty: 34 673,71 zł.
          Oprocentowanie stałe: 9,50%. Całkowity koszt kredytu: 5 273,71 zł (w tym: prowizja: 0,00
          zł, odsetki: 5 273,71 zł). 41 miesięcznych rat równych po 825,70 zł i ostatnia rata:
          819,98 zł. Kalkulację przeprowadziliśmy 21.09.2026 r. na reprezentatywnym przykładzie.
        </p>
        <p className="mt-3">
          Wyliczenia dokonane za pomocą powyższego kalkulatora mają charakter orientacyjny i
          przykładowy, zależą od daty wypłaty kredytu oraz daty płatności pierwszej raty. Służą
          wyłącznie celom informacyjnym i nie powinny być traktowane jako oferta, rekomendacja,
          zaproszenie do zawarcia umowy kredytu ani usługa doradztwa.
        </p>
      </details>
    </section>
  );
}
