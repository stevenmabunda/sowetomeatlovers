"use client";

import { useState } from "react";
import { Modal } from "./modal";

const VENUES = [
  { name: "Venue 1", desc: "The Pool Deck — up to 150 guests" },
  { name: "Venue 2", desc: "The Braai Yard — up to 100 guests" },
  { name: "Venue 3", desc: "Indoor Lounge — up to 60 guests" },
  { name: "Venue 4", desc: "Full Venue Buyout — up to 300 guests" },
];

export function BookVenueButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  function reset() {
    setStep(1);
    setDate("");
    setVenue("");
    setName("");
    setContact("");
  }

  function close() {
    setOpen(false);
    setTimeout(reset, 300);
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        Book a Venue
      </button>

      <Modal open={open} onClose={close}>
        {step === 1 && (
          <div>
            <div className="font-display text-2xl uppercase">Book a Venue</div>
            <div className="mt-1 text-sm text-muted">Step 1 of 3 — Choose a date</div>
            <label className="mt-6 block text-xs font-bold tracking-wide text-ember uppercase">
              Event date
            </label>
            <input
              type="date"
              value={date}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
              className="mt-2 w-full border-[1.5px] border-ink bg-cream px-4 py-3 text-[15px] text-ink"
            />
            <button
              type="button"
              disabled={!date}
              onClick={() => setStep(2)}
              className="mt-7 inline-flex w-full items-center justify-center bg-brand px-6 py-3.5 text-[13px] font-extrabold tracking-wide text-cream uppercase disabled:opacity-40"
            >
              Next: Choose Venue &rarr;
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="font-display text-2xl uppercase">Choose a Venue</div>
            <div className="mt-1 text-sm text-muted">
              Step 2 of 3 &middot; {new Date(date + "T00:00:00").toLocaleDateString("en-ZA", { weekday: "long", day: "numeric", month: "long" })}
            </div>
            <div className="mt-6 flex flex-col gap-3">
              {VENUES.map((v) => (
                <button
                  key={v.name}
                  type="button"
                  onClick={() => {
                    setVenue(v.name);
                    setStep(3);
                  }}
                  className="border-[1.5px] border-ink px-5 py-4 text-left hover:bg-ink hover:text-cream"
                >
                  <div className="font-display text-lg uppercase">{v.name}</div>
                  <div className="text-sm opacity-70">{v.desc}</div>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mt-6 text-xs font-bold tracking-wide text-ember uppercase"
            >
              &larr; Back
            </button>
          </div>
        )}

        {step === 3 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(4);
            }}
          >
            <div className="font-display text-2xl uppercase">Your Details</div>
            <div className="mt-1 text-sm text-muted">
              Step 3 of 3 &middot; {venue} &middot;{" "}
              {new Date(date + "T00:00:00").toLocaleDateString("en-ZA", { day: "numeric", month: "long" })}
            </div>
            <label className="mt-6 block text-xs font-bold tracking-wide text-ember uppercase">
              Full name
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full border-[1.5px] border-ink bg-cream px-4 py-3 text-[15px] text-ink"
              placeholder="Your name"
            />
            <label className="mt-4 block text-xs font-bold tracking-wide text-ember uppercase">
              Phone or email
            </label>
            <input
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="mt-2 w-full border-[1.5px] border-ink bg-cream px-4 py-3 text-[15px] text-ink"
              placeholder="083 000 0000"
            />
            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center bg-brand px-6 py-3.5 text-[13px] font-extrabold tracking-wide text-cream uppercase"
            >
              Submit Request
            </button>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="mt-4 block w-full text-center text-xs font-bold tracking-wide text-ember uppercase"
            >
              &larr; Back
            </button>
          </form>
        )}

        {step === 4 && (
          <div className="py-4 text-center">
            <div className="font-display text-3xl uppercase text-brand">Request Sent!</div>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Thanks {name || "there"} — we&apos;ve received your request for{" "}
              <strong>{venue}</strong> on{" "}
              <strong>
                {new Date(date + "T00:00:00").toLocaleDateString("en-ZA", { weekday: "long", day: "numeric", month: "long" })}
              </strong>
              . Our team will contact you shortly to confirm.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-7 inline-flex items-center justify-center border-[1.5px] border-ink px-6 py-3 text-[13px] font-extrabold tracking-wide uppercase"
            >
              Done
            </button>
          </div>
        )}
      </Modal>
    </>
  );
}
