"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Crown,
  Mail,
  Sparkles,
} from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import { cn } from "@/lib/format";
import { Stars } from "./atoms";

/* -------------------------- testimonial carousel ------------------------- */

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number, d: number) => {
    setDir(d);
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    timer.current = setInterval(() => go(index + 1, 1), 6500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [index, go]);

  const t = TESTIMONIALS[index];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="flex items-center justify-center gap-2 text-gold">
        <Crown className="h-5 w-5" />
      </div>

      <div className="relative mt-6 min-h-[300px] md:min-h-[260px]">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.figure
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: 60 * dir }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 * dir }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col items-center text-center"
          >
            <Stars n={t.rating} />
            <blockquote className="mt-6 font-display text-[1.35rem] italic leading-relaxed text-plum md:text-[1.65rem]">
              &ldquo;{t.text}&rdquo;
            </blockquote>
            <figcaption className="mt-7">
              <span className="font-semibold tracking-wide text-plum">
                {t.name}
              </span>
              <span className="mt-1 block text-[11px] uppercase tracking-[0.25em] text-gold-deep">
                {t.service}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-5">
        <button
          onClick={() => go(index - 1, -1)}
          aria-label="Previous review"
          className="rounded-full border border-gold/40 p-2.5 text-rose-deep transition-all hover:bg-gold hover:text-plum-deep"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i, i > index ? 1 : -1)}
              aria-label={`Go to review ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index
                  ? "w-7 bg-gold"
                  : "w-1.5 bg-rose/35 hover:bg-rose/60",
              )}
            />
          ))}
        </div>

        <button
          onClick={() => go(index + 1, 1)}
          aria-label="Next review"
          className="rounded-full border border-gold/40 p-2.5 text-rose-deep transition-all hover:bg-gold hover:text-plum-deep"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------ newsletter ------------------------------- */

export function NewsletterForm({
  source = "website",
  light = false,
}: {
  source?: string;
  light?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return setState("error");

    setState("loading");

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source }),
    });

    setState(res.ok ? "done" : "error");
  }

  if (state === "done") {
    return (
      <div
        className={cn(
          "flex items-center justify-center gap-3 rounded-2xl border px-6 py-5",
          light ? "border-gold/40 bg-white/5" : "border-gold/40 bg-blush/60",
        )}
      >
        <BadgeCheck className="h-6 w-6 shrink-0 text-gold" />
        <p className={cn("text-sm", light ? "text-blush" : "text-plum")}>
          <span className="font-display text-base italic">
            Welcome to the Royal Circle.
          </span>{" "}
          Your first treat is on its way to your inbox.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row"
    >
      <div className="relative flex-1">
        <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-deep" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Email address"
          className={cn(
            "input-luxe !rounded-full !py-3.5 !pl-11",
            light &&
              "!border-white/25 !bg-white/10 !text-white placeholder:!text-white/50",
          )}
        />
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="btn-gold whitespace-nowrap"
      >
        {state === "loading" ? "Joining…" : "Join The Circle"}
      </button>

      {state === "error" && (
        <p className={cn("text-xs", light ? "text-rose-200" : "text-rose-600")}>
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}

/* ------------------------------- accordion ------------------------------- */

export function FAQAccordion({
  items,
}: {
  items: { category: string; items: { q: string; a: string }[] }[];
}) {
  const [open, setOpen] = useState<string | null>(`${items[0]?.category}-0`);

  return (
    <div className="mx-auto max-w-3xl space-y-12">
      {items.map((group) => (
        <div key={group.category}>
          <div className="flex items-center gap-4">
            <Sparkles className="h-4 w-4 text-gold" />
            <h3 className="font-display text-2xl text-plum md:text-3xl">
              {group.category}
            </h3>
            <span className="h-px flex-1 bg-gold/25" />
          </div>

          <div className="mt-5 space-y-3">
            {group.items.map((item, i) => {
              const id = `${group.category}-${i}`;
              const isOpen = open === id;

              return (
                <div
                  key={id}
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-all duration-300",
                    isOpen
                      ? "border-gold/40 bg-ivory shadow-[0_18px_40px_-25px_rgba(64,40,48,0.4)]"
                      : "border-rose/15 bg-ivory/70 hover:border-gold/30",
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="py-1 font-display text-lg text-plum">
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "shrink-0 rounded-full border p-1.5 transition-all duration-300",
                        isOpen
                          ? "rotate-180 border-gold bg-gold text-plum-deep"
                          : "border-rose/30 text-rose-deep",
                      )}
                    >
                      <ChevronDown className="h-3.5 w-3.5" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-[14px] leading-relaxed text-ink/65">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}