import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ListingTab } from "./content";

type Tile = ListingTab["sections"][number]["tiles"][number];

function TileCard({ tile }: { tile: Tile }) {
  const Icon = tile.icon;
  const inner = (
    <>
      {tile.badge ? <span className="chip">{tile.badge}</span> : null}
      <span
        className={
          tile.highlight
            ? "inline-flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground"
            : "inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"
        }
      >
        <Icon className="size-6" />
      </span>
      <h3 className="text-base font-bold leading-snug">{tile.title}</h3>
      {tile.text ? (
        <p className="text-sm leading-relaxed text-muted-foreground">{tile.text}</p>
      ) : null}
      <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Sprawdź
        <ChevronRight className="size-4" />
      </span>
    </>
  );

  const cls = tile.highlight
    ? "flex flex-col gap-3 rounded-3xl border-2 border-primary/50 bg-accent/40 p-7 transition-shadow hover:shadow-lg"
    : "flex flex-col gap-3 rounded-3xl border bg-card p-7 transition-shadow hover:shadow-lg";

  return tile.href ? (
    <Link to={tile.href} className={cls}>
      {inner}
    </Link>
  ) : (
    <a href="#" className={cls}>
      {inner}
    </a>
  );
}

export function ProductListing({
  eyebrow,
  title,
  subtitle,
  tabs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tabs: ListingTab[];
}) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-accent/50 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
          ) : null}
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
          {subtitle ? <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{subtitle}</p> : null}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="flex flex-wrap gap-2 rounded-2xl bg-secondary p-2">
          {tabs.map((t, i) => (
            <button
              key={t.label}
              type="button"
              onClick={() => setActive(i)}
              className={
                i === active
                  ? "rounded-full bg-background px-5 py-2.5 text-sm font-semibold shadow-sm"
                  : "rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab.sections.map((section, si) => (
          <div key={si} className="mt-10">
            {section.title ? (
              <h2 className="mb-5 text-lg font-bold text-muted-foreground">{section.title}</h2>
            ) : null}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.tiles.map((tile) => (
                <TileCard key={tile.title} tile={tile} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
