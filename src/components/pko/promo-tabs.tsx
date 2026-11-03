import { useState } from "react";

const tabs = ["Bankuj z Samsung", "Konto na 4%", "PKO Konto za Zero"];

export function PromoTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
      <div className="flex flex-wrap gap-1.5 rounded-2xl bg-secondary p-2">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(i)}
            className={
              i === active
                ? "rounded-full bg-background px-5 py-2.5 text-sm font-semibold shadow-sm"
                : "rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
