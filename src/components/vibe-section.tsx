import Image from "next/image";

export function VibeSection() {
  return (
    <section className="flex w-full flex-col bg-ink md:flex-row">
      <div className="flex w-full flex-col justify-start px-6 pt-8 pb-10 md:w-[42%] md:px-14 md:pt-10">
        <h2 className="font-display text-[84px] leading-[0.85] text-cream uppercase sm:text-[118px] md:text-[144px] lg:text-[168px]">
          Vibe
        </h2>
        <div className="font-display mt-4 text-lg tracking-wide text-cream uppercase">
          Good Music. Better People.
        </div>
        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted-dark">
          Live performances, DJ sets, celebrations and unforgettable moments.
          Come for the food, stay for the vibe.
        </p>
        <a
          href="#whats-on"
          className="mt-7 inline-flex w-fit items-center border-[1.5px] border-cream px-6.5 py-3.5 text-[13px] font-extrabold tracking-wide text-cream uppercase hover:bg-cream hover:text-ink"
        >
          See What&apos;s On &rarr;
        </a>
      </div>

      <div className="relative min-h-[340px] w-full overflow-hidden md:min-h-0 md:w-[58%]">
        <Image
          src="/images/vibe_01.jpg"
          alt="A woman cheering with her fist raised among a crowd on the patio, the Soweto Meat Lovers signage lit up behind."
          fill
          quality={90}
          sizes="(min-width: 768px) 58vw, 100vw"
          className="object-cover object-[62%_35%]"
        />
      </div>
    </section>
  );
}
