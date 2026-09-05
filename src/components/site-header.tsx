import Image from "next/image";

const NAV_LINKS = ["What's On", "Menu", "Gallery", "Events", "Contact"];

export function SiteHeader() {
  return (
    <header className="relative z-20 bg-cream">
      <div className="flex w-full items-center justify-between px-6 py-5 md:px-14">
        <Image
          src="/images/logo.png"
          alt="Soweto Meat Lovers"
          width={1504}
          height={1046}
          priority
          className="h-16 w-auto sm:h-20 md:h-24"
        />

        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#"
            className="border-b-2 border-brand pb-1 text-[13px] font-bold tracking-wide text-brand uppercase"
          >
            Home
          </a>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="pb-1 text-[13px] font-bold tracking-wide text-ink uppercase hover:text-brand"
            >
              {link}
            </a>
          ))}
          <a
            href="#book"
            className="bg-brand px-7 py-3.5 text-[13px] font-extrabold tracking-wide text-cream uppercase hover:bg-brand-dark"
          >
            Book a Table
          </a>
        </nav>

        <a
          href="#book"
          className="bg-brand px-5 py-3 text-[12px] font-extrabold tracking-wide text-cream uppercase lg:hidden"
        >
          Book
        </a>
      </div>
      <div className="torn-edge w-full" />
    </header>
  );
}
