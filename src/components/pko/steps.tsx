const steps = [
  {
    title: "Otwórz konto",
    text: "Otwórz PKO Konto za Zero z kartą VISA, wpisz kod SAMSUNG lub kod otrzymany w sklepie lub centrum serwisowym w ramach promocji, spełnij pozostałe warunki promocji i odbierz do 600 zł",
    cta: "Otwórz konto",
  },
  {
    title: "Telefon Samsung",
    text: "Kup telefon Samsung z serii S lub Z w sieci Media Expert, Plus, w sklepie samsung.com lub centrach serwisowych objętych promocją",
  },
  {
    title: "Płać kartą Visa i odbierz kod",
    text: "Zapłać za dowolne zakupy kartą Visa podpiętą do Samsung Wallet i odbierz kod uprawniający do odbioru zwrotu 400 zł",
  },
];

export function Steps() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
      <h2 className="section-heading text-center">Jak zgarnąć do 1000 zł w ramach promocji?</h2>
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.title} className="flex flex-col items-start">
            <span className="text-5xl font-extrabold text-primary">{i + 1}</span>
            <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            {step.cta ? (
              <a href="#" className="btn-primary mt-6">
                {step.cta}
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
