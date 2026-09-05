import Image from "next/image";

const PHOTOS = [
  {
    src: "/images/people_01.jpg",
    alt: "A group of friends toasting with drinks in the pool at Soweto Meat Lovers.",
  },
  {
    src: "/images/people_02.jpg",
    alt: "Two women laughing and toasting with cocktails at Soweto Meat Lovers.",
  },
  {
    src: "/images/people_03.jpg",
    alt: "Three friends toasting with drinks over a plate of grilled meat.",
  },
];

export function PeopleSection() {
  return (
    <section className="flex w-full flex-col md:flex-row">
      <div className="flex w-full flex-col justify-start px-6 pt-8 pb-10 md:w-[42%] md:px-14 md:pt-10">
        <h2 className="font-display text-[84px] leading-[0.85] uppercase sm:text-[118px] md:text-[144px] lg:text-[168px]">
          People
        </h2>
        <div className="font-display mt-4 text-lg tracking-wide uppercase">
          The Heart of Soweto Meat Lovers.
        </div>
        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
          It&apos;s the people that make it special. Good food tastes better
          when it&apos;s shared.
        </p>
        <a
          href="#gallery"
          className="mt-7 inline-flex w-fit items-center border-[1.5px] border-ink px-6.5 py-3.5 text-[13px] font-extrabold tracking-wide uppercase hover:bg-ink hover:text-cream"
        >
          View Gallery &rarr;
        </a>
      </div>

      <div className="grid w-full grid-cols-3 gap-1 md:w-[58%]">
        {PHOTOS.map((photo) => (
          <div
            key={photo.src}
            className="relative min-h-[220px] overflow-hidden md:min-h-0"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 768px) 19vw, 33vw"
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
