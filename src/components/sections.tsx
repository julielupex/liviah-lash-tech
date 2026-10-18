
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { BUSINESS_HOURS, SITE } from "@/lib/site";
import { INSTAGRAM_IMAGES, IMG } from "@/lib/content";
import { minToLabel, nowNairobi } from "@/lib/format";
import { CrownMark } from "./chrome";
import { SectionTitle } from "./atoms";
import { Reveal } from "./motion";

const WHATSAPP_NUMBER = SITE.whatsapp.replace(/\D/g, "");

function getWhatsAppBookingUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* -------------------------------- marquee ------------------------------- */

const MARQUEE_ITEMS = [
  "Lash Extensions",
  "Organic Facials",
  "Semi-Permanent Brows",
  "Brow Lamination",
  "Body Waxing",
  "Nairobi CBD",
];

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-gold/25 bg-plum-deep py-4">
      <div className="animate-marquee flex w-max items-center gap-8">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="whitespace-nowrap font-display text-sm uppercase tracking-[0.32em] text-gold-light/85">
              {item}
            </span>
            <CrownMark className="h-3.5 w-3.5 opacity-70" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ promo banner ----------------------------- */

export function PromoBanner() {
  const promoUrl = getWhatsAppBookingUrl(
    "Hello Liviah Lash Tech, I am a new client and would like to book an appointment. I would like to ask about the KSh 1,000 welcome offer using code ROYAL1000.",
  );

  return (
    <section className="relative overflow-hidden">
      <Image src={IMG.plum} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-plum-deep/55" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="eyebrow">New Client Royal Welcome</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] text-white md:text-[3.4rem]">
            KSh 1,000 <span className="text-gold-grad italic">OFF</span> your
            very first visit
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-blush/80">
            First time at the palace? Enjoy KSh 1,000 off any full lash set,
            facial or brow service. Mention the code below when booking — your
            throne awaits.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="rounded-full border border-dashed border-gold-light/60 bg-white/5 px-6 py-3 font-display text-lg tracking-[0.3em] text-gold-light">
              ROYAL1000
            </span>
            <a
              href={promoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Claim &amp; Book
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative mx-auto max-w-md">
            <div className="gold-frame overflow-hidden rounded-[1.6rem]">
              <Image
                src={IMG.lashClient}
                alt="Client receiving a beautiful lash extension set"
                width={640}
                height={760}
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="animate-float-soft absolute -bottom-6 -left-6 rounded-2xl border border-gold/30 bg-plum-deep/95 px-6 py-4 text-center shadow-2xl backdrop-blur">
              <p className="font-display text-3xl text-gold-light">4.9</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-blush/70">
                500+ Google reviews
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- hours card ----------------------------- */

export function HoursCard({ tone = "light" }: { tone?: "light" | "dark" }) {
  const today = nowNairobi().getDay();
  const dark = tone === "dark";
  const bookingUrl = getWhatsAppBookingUrl(
    "Hello Liviah Lash Tech, I would like to check availability and book an appointment.",
  );

  return (
    <div
      className={`card-luxe overflow-hidden ${dark ? "!bg-plum text-blush" : ""}`}
    >
      <div
        className={`border-b px-7 py-5 ${
          dark ? "border-white/10 bg-white/5" : "border-gold/15 bg-blush/50"
        }`}
      >
        <p className="eyebrow">Opening Hours</p>
        <p
          className={`mt-1 font-display text-2xl ${dark ? "text-white" : "text-plum"}`}
        >
          The palace doors
        </p>
      </div>
      <ul className="divide-y divide-gold/10 px-7 py-3">
        {BUSINESS_HOURS.map((h) => (
          <li
            key={h.day}
            className={`flex items-center justify-between py-3 text-sm ${
              h.dow === today ? "font-semibold" : ""
            } ${dark ? "text-blush/80" : "text-ink/75"}`}
          >
            <span className="flex items-center gap-2">
              {h.dow === today && (
                <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-gold-deep">
                  Today
                </span>
              )}
              {h.day}
            </span>
            <span className={h.open === null ? "italic opacity-60" : ""}>
              {h.open === null
                ? "Closed — rest day"
                : `${minToLabel(h.open)} – ${minToLabel(h.close as number)}`}
            </span>
          </li>
        ))}
      </ul>
      <div
        className={`px-7 py-4 text-xs ${
          dark ? "bg-white/5 text-blush/60" : "bg-blush/40 text-ink/55"
        }`}
      >
        Walk-ins are welcome when availability allows — but queens who{" "}
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-rose-deep underline underline-offset-2"
        >
          book on WhatsApp
        </a>{" "}
        can check availability before visiting.
      </div>
    </div>
  );
}

/* ------------------------------ quick contact ---------------------------- */

export function QuickContact() {
  const bookingUrl = getWhatsAppBookingUrl(
    "Hello Liviah Lash Tech, I would like to book an appointment.",
  );

  return (
    <div className="card-luxe flex h-full flex-col px-7 py-7">
      <p className="eyebrow">Talk To Us</p>
      <p className="mt-1 font-display text-2xl text-plum">
        We answer like royalty
      </p>
      <ul className="mt-6 flex-1 space-y-5 text-sm text-ink/75">
        <li>
          <span className="label-luxe !mb-1">Call or WhatsApp</span>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 font-semibold text-rose-deep transition-colors hover:bg-blush"
            >
              <MessageCircle className="h-4 w-4 text-gold-deep" />{" "}
              {SITE.phoneMobile}
            </a>
            <a
              href={`tel:${SITE.phoneLineRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 font-semibold text-rose-deep transition-colors hover:bg-blush"
            >
              {SITE.phoneLine}
            </a>
          </div>
        </li>
        <li>
          <span className="label-luxe !mb-1">Email</span>
          <a
            href={`mailto:${SITE.email}`}
            className="font-semibold text-plum underline decoration-gold/50 underline-offset-4 hover:text-rose-deep"
          >
            {SITE.email}
          </a>
        </li>
        <li>
          <span className="label-luxe !mb-1">Studio</span>
          <p>{SITE.address}</p>
        </li>
      </ul>
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold mt-8 w-full"
      >
        Book An Appointment
      </a>
    </div>
  );
}

/* ----------------------------- instagram grid ---------------------------- */

export function InstagramSection() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="@liviahlashtech"
          title={
            <>
              Life at the palace,{" "}
              <span className="text-gold-grad italic">unfiltered</span>
            </>
          }
          sub="Fresh sets, brows and glows from the studio floor. Follow along for daily inspiration and last-minute openings."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {INSTAGRAM_IMAGES.map((img, i) => (
            <Reveal key={img.src + i} delay={i * 0.06}>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-2xl"
                aria-label={`${img.alt} — view on Instagram`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={400}
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-plum-deep/0 transition-all duration-500 group-hover:bg-plum-deep/55">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ecdcba"
                    strokeWidth="1.8"
                    className="h-7 w-7 scale-50 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.2"
                      cy="6.8"
                      r="1"
                      fill="#ecdcba"
                      stroke="none"
                    />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
