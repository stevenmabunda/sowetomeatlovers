"use client";

import { useState } from "react";
import { Modal } from "./modal";

const EVENT = {
  name: "Braai Sessions: Live Set",
  date: "Saturday, 12 September",
  price: 150,
};

export function BuyTicketsButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const [done, setDone] = useState(false);

  function close() {
    setOpen(false);
    setTimeout(() => {
      setQty(1);
      setDone(false);
    }, 300);
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        Buy Tickets &rarr;
      </button>

      <Modal open={open} onClose={close}>
        {!done ? (
          <div>
            <div className="text-[11px] font-bold tracking-wide text-brand uppercase">
              This Weekend
            </div>
            <div className="font-display mt-1 text-2xl uppercase">{EVENT.name}</div>
            <div className="mt-1 text-sm text-muted">{EVENT.date}</div>

            <div className="mt-6 flex items-center justify-between border-[1.5px] border-ink px-5 py-4">
              <div>
                <div className="text-xs font-bold tracking-wide text-ember uppercase">
                  Ticket price
                </div>
                <div className="font-display text-2xl">R{EVENT.price}</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-9 w-9 items-center justify-center border-[1.5px] border-ink text-lg"
                >
                  &minus;
                </button>
                <span className="w-6 text-center font-display text-xl">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  className="flex h-9 w-9 items-center justify-center border-[1.5px] border-ink text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between text-[15px]">
              <span className="font-bold uppercase tracking-wide">Total</span>
              <span className="font-display text-2xl">R{EVENT.price * qty}</span>
            </div>

            <button
              type="button"
              onClick={() => setDone(true)}
              className="mt-7 inline-flex w-full items-center justify-center bg-brand px-6 py-3.5 text-[13px] font-extrabold tracking-wide text-cream uppercase"
            >
              Buy {qty} Ticket{qty > 1 ? "s" : ""} &mdash; R{EVENT.price * qty}
            </button>
          </div>
        ) : (
          <div className="py-4 text-center">
            <div className="font-display text-3xl uppercase text-brand">You&apos;re In!</div>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {qty} ticket{qty > 1 ? "s" : ""} for <strong>{EVENT.name}</strong> on{" "}
              <strong>{EVENT.date}</strong> &mdash; total <strong>R{EVENT.price * qty}</strong>.
              Confirmation sent to your phone.
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
