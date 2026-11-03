import promoPhone from "@/assets/promo-phone.jpg";

const partnerOffers = [
  {
    partner: "Media Expert",
    text: "Skorzystaj z promocji i kup wybrane smartfony Samsung Galaxy na stronie internetowej i w blisko 620 sklepach stacjonarnych w całej Polsce.",
    link: "Sprawdź ofertę na mediaexpert.pl",
  },
  {
    partner: "Plus",
    text: "Skorzystaj z promocji i kup telefon Samsung Galaxy na stronie internetowej lub w jednym z salonów sieci Plus.",
    link: "Sprawdź ofertę na plus.pl",
  },
  {
    partner: "Samsung Brand Stores",
    text: "Skorzystaj z promocji, szerokiego asortymentu, doradztwa i szkoleń w zakresie produktów Samsung w jednym z salonów Samsung Brand Store.",
    link: "Sprawdź ofertę w najbliższym sklepie",
  },
];

export function Promotions() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <h2 className="section-heading">Co zyskujesz w ramach promocji?</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="promo-card-gradient overflow-hidden rounded-3xl text-primary-foreground">
          <div className="grid h-full sm:grid-cols-2">
            <div className="p-8">
              <span className="chip bg-white/15 text-primary-foreground">Promocja</span>
              <h3 className="mt-4 text-xl font-bold leading-snug">
                💸 Do 600 zł z PKO Kontem za Zero
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
                Korzystaj aktywnie z konta, płać za codzienne zakupy kartą Visa i odbierz nawet
                600 zł
              </p>
            </div>
            <img
              src={promoPhone}
              alt="Telefon z aplikacją bankowości mobilnej"
              loading="lazy"
              className="h-full w-full object-cover"
              width={1024}
              height={1024}
            />
          </div>
        </div>
        <div className="rounded-3xl border bg-card p-8">
          <span className="chip">Samsung</span>
          <h3 className="mt-4 text-xl font-bold leading-snug">💰 400 zł z Samsung</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Masz już konto? Świetnie! Kup wybrany telefon Samsung z serii S lub Z w sklepie lub
            centrum serwisowym biorącym udział w promocji, zapłać za zakupy kartą Visa podpiętą do
            portfela Samsung Wallet i odbierz 400 zł
          </p>
        </div>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {partnerOffers.map(({ partner, text, link }) => (
          <div key={partner} className="flex flex-col rounded-3xl border bg-card p-7">
            <h3 className="text-lg font-bold">{partner}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            <a
              href="#"
              className="mt-5 inline-flex w-fit items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              {link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
