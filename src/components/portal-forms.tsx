"use client";

import { useMemo, useState } from "react";
import { BadgeCheck, Crown, Gift } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn, kes } from "@/lib/format";

const GIFT_AMOUNTS = [2000, 3500, 5000, 7500, 10000];

export function GiftCardForm() {
  const [amount, setAmount] = useState(5000);
  const [custom, setCustom] = useState("");
  const [form, setForm] = useState({
    purchaserName: "",
    purchaserEmail: "",
    recipientName: "",
    recipientEmail: "",
    message: "",
  });

  const finalAmount = useMemo(
    () => (custom ? Math.max(500, parseInt(custom, 10) || 0) : amount),
    [custom, amount],
  );

  const set =
    (key: keyof typeof form) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
      >,
    ) => {
      setForm((current) => ({
        ...current,
        [key]: event.target.value,
      }));
    };

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Hello Liviah Lash Tech, I would like to purchase a gift card.",
      "",
      `Gift card amount: ${kes(finalAmount * 100)}`,
      `Purchaser name: ${form.purchaserName}`,
      `Purchaser email: ${form.purchaserEmail}`,
      `Recipient name: ${form.recipientName}`,
      `Recipient email: ${form.recipientEmail}`,
      form.message ? `Personal message: ${form.message}` : "",
      "",
      "Please confirm payment instructions and gift card delivery.",
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappNumber = SITE.whatsapp.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
      <div className="lg:sticky lg:top-28">
        <div className="relative overflow-hidden rounded-[1.8rem] bg-plum-deep p-8 text-blush shadow-[0_40px_80px_-30px_rgba(44,26,33,0.7)]">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gold/15 blur-2xl" />

          <Crown className="h-8 w-8 text-gold" />

          <p className="mt-6 text-[10px] uppercase tracking-[0.4em] text-gold-light/70">
            {SITE.fullName}
          </p>

          <p className="mt-2 font-display text-4xl text-white">
            {kes(finalAmount * 100)}
          </p>

          <p className="mt-6 text-sm text-blush/70">
            To:{" "}
            <span className="text-white">
              {form.recipientName || "My Favourite Queen"}
            </span>
          </p>

          <p className="mt-1 text-sm text-blush/70">
            From:{" "}
            <span className="text-white">
              {form.purchaserName || "Someone who adores you"}
            </span>
          </p>

          {form.message && (
            <p className="mt-4 border-t border-white/10 pt-4 font-display text-base italic text-gold-light">
              &ldquo;{form.message}&rdquo;
            </p>
          )}
        </div>

        <p className="mt-4 text-center text-[11px] uppercase tracking-[0.2em] text-ink/40">
          Live preview · Confirm your purchase through WhatsApp
        </p>
      </div>

      <form onSubmit={submit} className="card-luxe space-y-5 px-7 py-8">
        <div>
          <label className="label-luxe" htmlFor="gc-amount">
            Choose an amount
          </label>

          <div className="flex flex-wrap gap-2.5">
            {GIFT_AMOUNTS.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => {
                  setAmount(value);
                  setCustom("");
                }}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all",
                  !custom && amount === value
                    ? "border-gold bg-plum-deep text-gold-light"
                    : "border-rose/25 text-ink/60 hover:border-gold/50",
                )}
              >
                {(value / 1000).toFixed(value % 1000 ? 1 : 0)}k
              </button>
            ))}

            <input
              id="gc-amount"
              inputMode="numeric"
              type="number"
              min="500"
              step="1"
              aria-label="Custom gift card amount in Kenyan shillings"
              placeholder="Custom KSh"
              value={custom}
              onChange={(event) =>
                setCustom(event.target.value.replace(/[^0-9]/g, ""))
              }
              className="input-luxe w-32 !rounded-full !py-2.5 text-center"
            />
          </div>

          {finalAmount >= 10000 && (
            <p className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-gold-deep">
              <Gift className="h-3.5 w-3.5" />
              Ask about the Gift of Gold bonus when confirming your purchase.
            </p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label-luxe" htmlFor="gc-pn">
              Your Name
            </label>
            <input
              id="gc-pn"
              required
              autoComplete="name"
              className="input-luxe"
              value={form.purchaserName}
              onChange={set("purchaserName")}
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="label-luxe" htmlFor="gc-pe">
              Your Email
            </label>
            <input
              id="gc-pe"
              type="email"
              required
              autoComplete="email"
              className="input-luxe"
              value={form.purchaserEmail}
              onChange={set("purchaserEmail")}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="label-luxe" htmlFor="gc-rn">
              Recipient Name
            </label>
            <input
              id="gc-rn"
              required
              className="input-luxe"
              value={form.recipientName}
              onChange={set("recipientName")}
              placeholder="Their full name"
            />
          </div>

          <div>
            <label className="label-luxe" htmlFor="gc-re">
              Recipient Email
            </label>
            <input
              id="gc-re"
              type="email"
              required
              className="input-luxe"
              value={form.recipientEmail}
              onChange={set("recipientEmail")}
              placeholder="them@example.com"
            />
          </div>
        </div>

        <div>
          <label className="label-luxe" htmlFor="gc-msg">
            Personal message{" "}
            <span className="normal-case tracking-normal text-ink/40">
              (optional)
            </span>
          </label>

          <textarea
            id="gc-msg"
            rows={3}
            className="input-luxe resize-none"
            value={form.message}
            onChange={set("message")}
            placeholder="Something sweet, royal and heartfelt…"
          />
        </div>

        <button type="submit" className="btn-gold w-full !py-4">
          <Gift className="h-4 w-4" />
          Enquire About Gift Card · {kes(finalAmount * 100)}
        </button>

        <p className="text-center text-[11px] leading-relaxed text-ink/45">
          Your request opens WhatsApp. Payment, availability, and gift card
          delivery will be confirmed directly with Liviah.
        </p>
      </form>
    </div>
  );
}
