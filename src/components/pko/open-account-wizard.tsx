import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CircleCheck } from "lucide-react";

const steps = ["Dane", "Weryfikacja", "Podsumowanie"];

export function OpenAccountWizard() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ imie: "", nazwisko: "", email: "", telefon: "", zgody: false });
  const [weryfikacja, setWeryfikacja] = useState<"mobywatel" | "selfie">("mobywatel");

  const set = (key: keyof typeof form, value: string | boolean) =>
    setForm((f) => ({ ...f, [key]: value }));

  const step1Valid =
    form.imie.trim() && form.nazwisko.trim() && form.email.includes("@") && form.zgody;

  if (done) {
    return (
      <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-4 py-16 text-center">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CircleCheck className="size-9" />
        </span>
        <h1 className="mt-6 text-2xl font-extrabold tracking-tight">Gratulacje — konto otwarte!</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          To wersja demonstracyjna, więc konto istnieje tylko na potrzeby prezentacji. W prawdziwym
          banku na tym etapie logujesz się od razu do aplikacji mobilnej.
        </p>
        <div className="mt-8 flex gap-3">
          <Link to="/" className="btn-outline">
            Strona główna
          </Link>
          <Link to="/zaloguj" className="btn-primary">
            Zaloguj się
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/40 py-10">
      <div className="mx-auto max-w-xl px-4">
        <h1 className="text-2xl font-extrabold tracking-tight">Otwórz konto online</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          PKO Konto za Zero z kartą Visa — prowadzenie konta za 0 zł miesięcznie
        </p>

        <div className="mt-8 flex items-center gap-2">
          {steps.map((label, i) => (
            <div key={label} className="flex flex-1 items-center gap-2">
              <div className="flex flex-1 flex-col gap-1.5">
                <span
                  className={
                    i + 1 <= step
                      ? "h-1.5 rounded-full bg-primary"
                      : "h-1.5 rounded-full bg-border"
                  }
                />
                <span
                  className={
                    i + 1 <= step
                      ? "text-xs font-semibold text-primary"
                      : "text-xs font-medium text-muted-foreground"
                  }
                >
                  {i + 1}. {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border bg-card p-8">
          {step === 1 ? (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-semibold">
                  Imię
                  <input
                    value={form.imie}
                    onChange={(e) => set("imie", e.target.value)}
                    className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </label>
                <label className="block text-sm font-semibold">
                  Nazwisko
                  <input
                    value={form.nazwisko}
                    onChange={(e) => set("nazwisko", e.target.value)}
                    className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </label>
              </div>
              <label className="block text-sm font-semibold">
                Adres e-mail
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                />
              </label>
              <label className="block text-sm font-semibold">
                Numer telefonu
                <input
                  type="tel"
                  value={form.telefon}
                  onChange={(e) => set("telefon", e.target.value)}
                  placeholder="+48"
                  className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                />
              </label>
              <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
                <input
                  type="checkbox"
                  checked={form.zgody}
                  onChange={(e) => set("zgody", e.target.checked)}
                  className="mt-0.5 size-4 accent-[var(--primary)]"
                />
                <span>
                  Wyrażam zgody marketingowe i akceptuję regulamin (wersja demonstracyjna — żadne
                  dane nie są nigdzie zapisywane ani wysyłane).
                </span>
              </label>
              <button
                type="button"
                disabled={!step1Valid}
                onClick={() => setStep(2)}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-40"
              >
                Dalej
              </button>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="space-y-4">
              <p className="text-sm font-semibold">Wybierz sposób weryfikacji tożsamości</p>
              {(
                [
                  {
                    key: "mobywatel",
                    title: "Z weryfikacją przez mObywatela",
                    text: "Zaloguj się do aplikacji mObywatel i potwierdź przekazanie danych",
                  },
                  {
                    key: "selfie",
                    title: "Na selfie",
                    text: "Zrób zdjęcie twarzy i dowodu osobistego w aplikacji mobilnej. Niektóre funkcje konta będą wymagały dodatkowego potwierdzenia tożsamości w oddziale",
                  },
                ] as const
              ).map((opt) => (
                <label
                  key={opt.key}
                  className={
                    weryfikacja === opt.key
                      ? "flex cursor-pointer gap-3 rounded-2xl border-2 border-primary/60 bg-accent/40 p-4"
                      : "flex cursor-pointer gap-3 rounded-2xl border p-4"
                  }
                >
                  <input
                    type="radio"
                    name="weryfikacja"
                    checked={weryfikacja === opt.key}
                    onChange={() => setWeryfikacja(opt.key)}
                    className="mt-1 size-4 accent-[var(--primary)]"
                  />
                  <span>
                    <span className="block text-sm font-semibold">{opt.title}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                      {opt.text}
                    </span>
                  </span>
                </label>
              ))}
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="btn-outline flex-1">
                  Wstecz
                </button>
                <button type="button" onClick={() => setStep(3)} className="btn-primary flex-1">
                  Dalej
                </button>
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="space-y-5">
              <p className="text-sm font-semibold">Sprawdź swoje dane</p>
              <dl className="space-y-2 rounded-2xl bg-secondary p-5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Imię i nazwisko</dt>
                  <dd className="font-semibold">
                    {form.imie} {form.nazwisko}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">E-mail</dt>
                  <dd className="font-semibold">{form.email}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Telefon</dt>
                  <dd className="font-semibold">{form.telefon || "—"}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Weryfikacja</dt>
                  <dd className="font-semibold">
                    {weryfikacja === "mobywatel" ? "mObywatel" : "Selfie"}
                  </dd>
                </div>
              </dl>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(2)} className="btn-outline flex-1">
                  Wstecz
                </button>
                <button type="button" onClick={() => setDone(true)} className="btn-primary flex-1">
                  Otwórz konto
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
