import heroImg from "@/assets/hero-woman-phone.jpg";

export function Hero() {
  return (
    <section className="hero-gradient">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="py-14 lg:py-20">
          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            Nawet do 1000 zł z&nbsp;PKO Kontem za Zero z&nbsp;kartą Visa
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed">
            Do <strong className="font-bold">600 zł</strong> za codzienne zakupy w promocji
            „Bankuj z Samsung”
            <br />
            i <strong className="font-bold">400 zł</strong> w ramach promocji „400 zł z Samsung” z
            wybranym telefonem Samsung
          </p>
          <a href="#" className="btn-primary mt-9 px-12">
            Sprawdź
          </a>
        </div>
        <div className="flex items-end justify-center">
          <img
            src={heroImg}
            alt="Kobieta trzymająca telefon z aplikacją PKO Bank Polski i kartą Visa"
            className="w-full max-w-md rounded-t-[2.5rem] object-cover object-top"
            width={896}
            height={1152}
          />
        </div>
      </div>
    </section>
  );
}
