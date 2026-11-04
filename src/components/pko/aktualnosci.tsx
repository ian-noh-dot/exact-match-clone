import { Link } from "@tanstack/react-router";
import { ArrowRight, TriangleAlert } from "lucide-react";
import { aktualnosci } from "./content";

export function NewsTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <h2 className="section-heading">Aktualności</h2>
        <Link
          to="/aktualnosci"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          Zobacz wszystkie
          <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {aktualnosci.map((news) => (
          <Link
            key={news.title}
            to="/aktualnosci"
            className="flex flex-col rounded-3xl border bg-card p-7 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{news.date}</span>
              {news.tag ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-2.5 py-1 font-bold text-destructive">
                  <TriangleAlert className="size-3" />
                  {news.tag}
                </span>
              ) : null}
            </div>
            <h3 className="mt-4 text-lg font-bold leading-snug">{news.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{news.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-accent/50 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Aktualności</h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Ważne informacje o produktach, usługach i bezpieczeństwie.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-4xl space-y-5 px-4 py-10 lg:px-8">
        {aktualnosci.map((news) => (
          <article key={news.title} className="rounded-3xl border bg-card p-7">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{news.date}</span>
              {news.tag ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-2.5 py-1 font-bold text-destructive">
                  <TriangleAlert className="size-3" />
                  {news.tag}
                </span>
              ) : null}
            </div>
            <h2 className="mt-4 text-xl font-bold leading-snug">{news.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{news.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
