import Image from "next/image";

export function MeatSection() {
  return (
    <section className="flex w-full flex-col md:flex-row">
      <div className="flex w-full flex-col justify-start px-6 pt-8 pb-10 md:w-[42%] md:px-14 md:pt-10">
        <h2 className="font-display text-[84px] leading-[0.85] uppercase sm:text-[118px] md:text-[144px] lg:text-[168px]">
          Meat
        </h2>
        <div className="font-display mt-4 text-lg tracking-wide uppercase">
          Flame Grilled. Locally Loved.
        </div>
        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
          From juicy steaks to boerewors, ribs and more. Soweto Meat Lovers is
          all about great food, bold flavour and that unmistakable braai
          smoke.
        </p>
        <a
          href="#menu"
          className="mt-7 inline-flex w-fit items-center border-[1.5px] border-ink px-6.5 py-3.5 text-[13px] font-extrabold tracking-wide uppercase hover:bg-ink hover:text-cream"
        >
          View Menu &rarr;
        </a>
      </div>

      <div className="relative min-h-[300px] w-full overflow-hidden md:min-h-0 md:w-[58%]">
        <Image
          src="/images/steak_01.jpg"
          alt="Close-up of a peppercorn-crusted grilled steak with fresh rosemary on a wooden board."
          fill
          quality={90}
          sizes="(min-width: 768px) 58vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
