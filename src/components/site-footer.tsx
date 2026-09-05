import Image from "next/image";

const SOCIAL_ICONS = [
  {
    label: "Instagram",
    path: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="#e9dcc8" />
      </>
    ),
  },
  {
    label: "Facebook",
    path: (
      <path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v7h3v-7h2.2l.3-3H14v-1.6c0-.6.3-1 1-1H16z" />
    ),
  },
  {
    label: "TikTok",
    path: (
      <path d="M14 4v9.6a3.6 3.6 0 1 1-2.4-3.4 M14 4c.3 2.3 2 4 4.4 4.2" />
    ),
  },
  {
    label: "YouTube",
    path: (
      <>
        <path d="M4 8l8-5 8 5-8 5-8-5Z" />
        <path d="M8 11v6l4 2.5L16 17v-6" />
      </>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="w-full bg-ink px-6 py-11 md:px-14">
      <div className="flex w-full flex-wrap items-center justify-between gap-6">
        <Image
          src="/images/logo.png"
          alt="Soweto Meat Lovers"
          width={1504}
          height={1046}
          className="h-16 w-auto"
        />

        <div className="flex items-center gap-7">
          <div className="flex items-center gap-2 text-[13px] font-semibold tracking-wide text-cream-dim">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e9dcc8"
              strokeWidth="1.8"
            >
              <path d="M12 22s7-7.2 7-12.6A7 7 0 0 0 5 9.4C5 14.8 12 22 12 22Z" />
              <circle cx="12" cy="9.4" r="2.6" />
            </svg>
            Soweto, Johannesburg
          </div>
          <div className="flex gap-4">
            {SOCIAL_ICONS.map((icon) => (
              <svg
                key={icon.label}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e9dcc8"
                strokeWidth="1.6"
                aria-label={icon.label}
              >
                {icon.path}
              </svg>
            ))}
          </div>
        </div>

        <div className="text-xs font-bold tracking-[0.15em] text-cream-dim uppercase">
          Good Food. Good People. Always.
        </div>
      </div>
    </footer>
  );
}
