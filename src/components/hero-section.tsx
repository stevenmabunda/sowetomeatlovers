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
          <div className="mt-5 text-[15px] font-bold tracking-wide text-cream">
            SOWETO MEAT LOVERS
          </div>
          <div className="mt-1 text-[11px] font-semibold tracking-[0.2em] text-cream-dim">
            FOOD &middot; MUSIC &middot; PEOPLE &middot; GOOD TIMES
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#book"
              className="inline-flex items-center bg-brand px-7 py-4 text-[13px] font-extrabold tracking-wide text-cream uppercase hover:bg-brand-dark"
            >
              Book a Table
            </a>
            <a
              href="#venue"
              className="inline-flex items-center border-[1.5px] border-cream px-7 py-4 text-[13px] font-extrabold tracking-wide text-cream uppercase hover:bg-cream hover:text-ink"
            >
              Book a Venue
            </a>
          </div>
        </div>

        <div className="font-script absolute right-6 bottom-8 text-right text-3xl leading-none text-cream drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] sm:right-10 sm:text-4xl md:right-14">
          More Than
          <br />a Meal
        </div>
      </div>
    </section>
  );
}
