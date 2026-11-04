import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CircleAlert, Info, Lock } from "lucide-react";

export function LoginPage() {
  const [notice, setNotice] = useState(false);
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="min-h-screen bg-secondary/50 py-10">
      <div className="mx-auto max-w-md px-4">
        <div className="mb-4 flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-xs leading-relaxed text-amber-900">
          <Info className="mt-0.5 size-4 shrink-0" />
          <p>
            Wersja demonstracyjna strony banku. To atrapa logowania — nie wpisuj prawdziwego
            identyfikatora, hasła ani innych danych.
          </p>
        </div>

        <div className="rounded-3xl border bg-card p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Lock className="size-5" />
            </span>
            <div>
              <h1 className="text-xl font-extrabold tracking-tight">Zaloguj się do serwisu</h1>
              <p className="text-xs text-muted-foreground">Bankowość internetowa i mobilna</p>
            </div>
          </div>

          <form
            className="mt-7 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setNotice(true);
            }}
          >
            <label className="block text-sm font-semibold">
              Identyfikator klienta lub numer telefonu
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
                autoComplete="off"
              />
            </label>
            <label className="block text-sm font-semibold">
              Hasło
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
                autoComplete="off"
              />
            </label>

            {notice ? (
              <p className="flex items-start gap-2 rounded-xl bg-destructive/10 p-3 text-xs leading-relaxed text-destructive">
                <CircleAlert className="mt-0.5 size-4 shrink-0" />
                To tylko wersja demonstracyjna — logowanie nie jest możliwe.
              </p>
            ) : null}

            <button type="submit" className="btn-primary w-full">
              Zaloguj się
            </button>
          </form>

          <div className="mt-5 space-y-2 text-center text-sm">
            <p>
              <a href="#" className="font-medium text-primary hover:underline">
                Nie pamiętasz identyfikatora lub hasła?
              </a>
            </p>
            <p className="text-muted-foreground">
              Nie masz konta?{" "}
              <Link to="/otworz-konto" className="font-semibold text-primary hover:underline">
                Otwórz je online
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          © 2026 PKO Bank Polski · Kod BIC (Swift): BPKOPLPW
        </p>
      </div>
    </div>
  );
}
