"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = ["What's On", "Menu", "Gallery", "Events", "Contact"];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 bg-cream">
      <div className="flex w-full items-center justify-between px-6 py-5 md:px-14">
        <Image
          src="/images/logo.png"
          alt="Soweto Meat Lovers"
          width={1504}
          height={1046}
          priority
          quality={90}
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

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
      <div className="torn-edge w-full" />

      {open && (
        <div className="absolute inset-x-0 top-full flex flex-col gap-1 border-t border-ink/10 bg-cream px-6 py-6 shadow-lg lg:hidden">
          <a
            href="#"
            className="py-2 text-sm font-bold tracking-wide text-brand uppercase"
          >
            Home
          </a>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="py-2 text-sm font-bold tracking-wide text-ink uppercase"
            >
              {link}
            </a>
          ))}
          <a
            href="#book"
            className="mt-3 inline-flex w-fit items-center bg-brand px-6 py-3 text-[13px] font-extrabold tracking-wide text-cream uppercase"
          >
            Book a Table
          </a>
        </div>
      )}
    </header>
  );
}
