import Image from "next/image";

export function WeekendSection() {
  return (
    <section className="w-full bg-brand px-6 py-14 md:px-14 md:py-16">
      <div className="flex w-full flex-col items-stretch gap-10 lg:flex-row">
        <div className="flex flex-col justify-start lg:flex-1">
          <h2 className="font-display text-[64px] leading-[0.95] text-cream uppercase sm:text-[92px] md:text-[116px] lg:text-[132px]">
            This
            <br />
            Weekend
          </h2>
          <div className="mt-3.5 text-xs font-bold tracking-wide text-[#f3d9c8]">
            LIVE MUSIC &middot; GREAT FOOD &middot; GOOD COMPANY
          </div>
          <a
            href="#events"
            className="mt-6.5 inline-flex w-fit items-center border-[1.5px] border-cream px-6.5 py-3.5 text-[13px] font-extrabold tracking-wide text-cream uppercase hover:bg-cream hover:text-brand"
          >
            View All Events &rarr;
          </a>
        </div>

        <a
          href="#tickets"
          aria-label="Get tickets for the All White Experience with Vusi Nova and Mduduzi Ncube"
          className="relative block w-full overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.35)] lg:flex-[1.5]"
        >
          <div className="relative aspect-[1983/793] w-full">
            <Image
              src="/images/real_poster_hero2.jpeg"
              alt="Soweto Meat Lovers presents the All White Experience with Vusi Nova and Mduduzi Ncube, hosted by Bujy, featuring DJ Grant. 06 September. Early bird R50, second phase R150, first phase R100, at the gate R200. Tickets at Computicket and Webtickets Pick n Pay. 23031 Kei Street, Protea Glen Ext 26. Food and drinks sold at the venue. 18+."
              fill
              quality={95}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
