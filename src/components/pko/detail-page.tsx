import { CircleCheck, FileText } from "lucide-react";
import type { ReactNode } from "react";

export type DetailProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  ctas?: { label: string; to?: string; variant?: "primary" | "outline" }[];
  bullets?: string[];
  features?: { title: string; text: string }[];
  fees?: { label: string; value: string }[];
  steps?: { title: string; text: string }[];
  documents?: string[];
  note?: string;
  children?: ReactNode;
};

export function DetailPage(p: DetailProps) {
  return (
    <div className="min-h-screen bg-background">
      <section className={p.image ? "hero-gradient" : "bg-accent/50"}>
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 lg:grid-cols-2 lg:px-8">
          <div>
            {p.eyebrow ? (
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{p.eyebrow}</p>
            ) : null}
            <h1 className="mt-2 max-w-xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              {p.title}
            </h1>
            {p.subtitle ? (
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                {p.subtitle}
              </p>
            ) : null}
            {p.ctas?.length ? (
              <div className="mt-7 flex flex-wrap gap-3">
                {p.ctas.map((cta) =>
                  cta.to ? (
                    <Link
                      key={cta.label}
                      to={cta.to}
                      className={cta.variant === "outline" ? "btn-outline" : "btn-primary"}
                    >
                      {cta.label}
                    </Link>
                  ) : (
                    <a
                      key={cta.label}
                      href="#"
                      className={cta.variant === "outline" ? "btn-outline" : "btn-primary"}
                    >
                      {cta.label}
                    </a>
                  ),
                )}
              </div>
            ) : null}
            {p.bullets?.length ? (
              <ul className="mt-7 space-y-3">
                {p.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed">
                    <CircleCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {p.image ? (
            <img
              src={p.image}
              alt={p.imageAlt ?? ""}
              className="w-full max-w-md justify-self-center rounded-t-[2.5rem] object-cover object-top"
              width={1024}
              height={896}
            />
          ) : null}
        </div>
      </section>

      {p.features?.length ? (
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border bg-card p-7">
                <h3 className="text-base font-bold leading-snug">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {p.fees?.length ? (
        <section className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
          <h2 className="section-heading">Opłaty</h2>
          <dl className="mt-6 divide-y rounded-3xl border bg-card">
            {p.fees.map((fee) => (
              <div key={fee.label} className="flex items-center justify-between gap-6 px-6 py-4">
                <dt className="text-sm text-muted-foreground">{fee.label}</dt>
                <dd className="text-sm font-bold">{fee.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {p.steps?.length ? (
        <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {p.steps.map((step, i) => (
              <div key={step.title} className="flex flex-col items-start">
                <span className="text-5xl font-extrabold text-primary">{i + 1}</span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {p.documents?.length ? (
        <section className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
          <h2 className="section-heading">Dokumenty</h2>
          <div className="mt-6 space-y-3">
            {p.documents.map((doc) => (
              <a
                key={doc}
                href="#"
                className="flex items-center gap-4 rounded-2xl border p-4 transition-colors hover:border-primary/40 hover:bg-accent/40"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="size-5" />
                </span>
                <span className="text-sm font-medium">{doc}</span>
                <span className="chip ml-auto">PDF</span>
              </a>
            ))}
          </div>
        </section>
      ) : null}

      {p.note ? (
        <section className="mx-auto max-w-4xl px-4 pb-12 lg:px-8">
          <p className="text-xs leading-relaxed text-muted-foreground">{p.note}</p>
        </section>
      ) : null}

      {p.children}
    </div>
  );
}
