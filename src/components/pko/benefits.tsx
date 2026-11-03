import { Banknote, CreditCard, Wallet } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Darmowe prowadzenie konta",
    text: "Prowadzenie konta za 0 zł miesięcznie",
  },
  {
    icon: CreditCard,
    title: "Darmowa obsługa karty debetowej VISA",
    text: "Karta do konta za 0 zł/mies., jeśli zrobisz min. 5 transakcji bezgotówkowych kartą lub BLIKIEM w jej okresie rozliczeniowym¹",
  },
  {
    icon: Banknote,
    title: "Wypłaty BLIK za 0 zł",
    text: "Wypłaty BLIKIEM ze wszystkich bankomatów w Polsce",
  },
];

export function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
      <h2 className="section-heading text-center">Co zyskujesz z PKO Kontem za Zero</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {benefits.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-3xl bg-secondary p-8">
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon className="size-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold leading-snug">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
