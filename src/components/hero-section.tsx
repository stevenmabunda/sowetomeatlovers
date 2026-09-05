import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative aspect-[3/2] w-full sm:aspect-[16/9] md:aspect-[1672/669]">
        <Image
          src="/images/01_hero_soweto_meat_lovers.jpg"
          alt="Friends laughing over drinks and a grilled meat platter on the patio at Soweto Meat Lovers, with the venue's wooden signage and a live band behind them."
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute inset-y-0 left-0 flex max-w-2xl flex-col justify-center px-6 py-10 sm:px-10 md:px-14">
          <h1 className="font-display text-[clamp(24px,7vw,108px)] leading-[0.9] text-cream uppercase">
            Where
            <br />
            Meat Lovers
            <br />
            Meet
          </h1>
          <div className="mt-6 flex gap-2 sm:gap-3">
            <a
              href="#book"
              className="inline-flex items-center bg-brand px-4 py-3 text-[11px] font-extrabold tracking-wide text-cream uppercase sm:px-7 sm:py-4 sm:text-[13px]"
            >
              Book a Table
            </a>
            <a
              href="#venue"
              className="inline-flex items-center border-[1.5px] border-cream px-4 py-3 text-[11px] font-extrabold tracking-wide text-cream uppercase sm:px-7 sm:py-4 sm:text-[13px]"
            >
              Book a Venue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
