"use client";

import { useMemo, useState, type FormEvent } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  CalendarDays,
  Check,
  Clock,
  Crown,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { durationLabel, kes, cn } from "@/lib/format";
import { BUSINESS_HOURS, SITE, hoursForDay } from "@/lib/site";

type BookingService = {
  slug: string;
  category: string;
  name: string;
  description: string;
  durationMin: number;
  priceCents: number;
};

const SERVICES: BookingService[] = [
  {
    slug: "classic-signature-set",
    category: "lash-extensions",
    name: "The Classic Signature Set",
    description: "A natural-looking, beautifully tailored lash set.",
    durationMin: 120,
    priceCents: 350000,
  },
  {
    slug: "princess-hybrid-set",
    category: "lash-extensions",
    name: "The Princess Hybrid Set",
    description: "Wispy, textured lashes with effortless glamour.",
    durationMin: 135,
    priceCents: 450000,
  },
  {
    slug: "duchess-volume-set",
    category: "lash-extensions",
    name: "The Duchess Volume Set",
    description: "Full, fluffy volume with a soft cat-eye finish.",
    durationMin: 150,
    priceCents: 550000,
  },
  {
    slug: "queen-bee-mega-volume-set",
    category: "lash-extensions",
    name: "The Queen Bee Mega Volume Set",
    description: "A dramatic, dense mega-volume lash look.",
    durationMin: 165,
    priceCents: 650000,
  },
  {
    slug: "express-refill-30",
    category: "lash-refills",
    name: "Express Refill · 30 Minutes",
    description: "A quick refresh between full appointments.",
    durationMin: 30,
    priceCents: 150000,
  },
  {
    slug: "signature-refill-60",
    category: "lash-refills",
    name: "Signature Refill · 1 Hour",
    description: "A meticulous refill and lash-style refresh.",
    durationMin: 60,
    priceCents: 220000,
  },
  {
    slug: "lash-lift-tint",
    category: "lash-care",
    name: "Lash Lift & Tint",
    description: "Lifted, curled and tinted natural lashes.",
    durationMin: 60,
    priceCents: 300000,
  },
  {
    slug: "cluster-lashes",
    category: "lash-care",
    name: "Cluster Lashes",
    description: "Fluffy lashes for occasions and special events.",
    durationMin: 45,
    priceCents: 180000,
  },
  {
    slug: "strip-lash-application",
    category: "lash-care",
    name: "Strip Lash Application",
    description: "Professional strip-lash fitting and styling.",
    durationMin: 20,
    priceCents: 80000,
  },
  {
    slug: "gentle-lash-removal",
    category: "lash-care",
    name: "Gentle Lash Removal",
    description: "Gentle removal designed to protect natural lashes.",
    durationMin: 30,
    priceCents: 70000,
  },
  {
    slug: "lash-bath-deep-clean",
    category: "lash-care",
    name: "Lash Bath & Deep Clean",
    description: "A refreshing cleanse for clean, cared-for lashes.",
    durationMin: 20,
    priceCents: 60000,
  },
];

const CATEGORIES = [
  { value: "all", label: "All lash services" },
  { value: "lash-extensions", label: "Lash extensions" },
  { value: "lash-refills", label: "Lash refills" },
  { value: "lash-care", label: "Lash care" },
];

function localIsoDate() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function getDayOfWeek(date: string) {
  if (!date) return -1;
  return new Date(`${date}T12:00:00`).getDay();
}

function formatTime(minutes: number) {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  const suffix = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${hour12}:${String(minute).padStart(2, "0")} ${suffix}`;
}

function timeOptions(date: string, durationMin: number) {
  if (!date) return [];

  const day = getDayOfWeek(date);
  const hours = hoursForDay(day);

  if (hours.open === null || hours.close === null) return [];

  const now = new Date();
  const isToday = date === localIsoDate();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const firstMinute = Math.ceil(hours.open / 30) * 30;
  const options: { value: string; label: string }[] = [];

  for (let minute = firstMinute; minute + durationMin <= hours.close; minute += 30) {
    if (isToday && minute <= currentMinutes) continue;

    options.push({
      value: `${String(Math.floor(minute / 60)).padStart(2, "0")}:${String(minute % 60).padStart(2, "0")}`,
      label: formatTime(minute),
    });
  }

  return options;
}

function businessHoursLabel(date: string) {
  if (!date) return "Choose a date to see the opening hours.";

  const hours = hoursForDay(getDayOfWeek(date));

  if (hours.open === null || hours.close === null) {
    return `${hours.day} is a rest day. Please choose another date.`;
  }

  return `${hours.day}: ${formatTime(hours.open)} – ${formatTime(hours.close)}`;
}

export function BookingWizard() {
  const params = useSearchParams();
  const preselectedSlug = params.get("service");
  const offerCode = params.get("offer");

  const [category, setCategory] = useState("all");
  const [serviceSlug, setServiceSlug] = useState(() =>
    SERVICES.some((service) => service.slug === preselectedSlug)
      ? preselectedSlug!
      : SERVICES[0].slug,
  );
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [error, setError] = useState("");

  const service = SERVICES.find((item) => item.slug === serviceSlug) ?? SERVICES[0];

  const availableTimes = useMemo(
    () => timeOptions(date, service.durationMin),
    [date, service.durationMin],
  );

  const isClosedDay = date !== "" && hoursForDay(getDayOfWeek(date)).open === null;

  function updateDate(value: string) {
    setDate(value);
    setTime("");
    setError("");
  }

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!service) {
      setError("Please choose a lash service.");
      return;
    }

    if (!form.name.trim() || form.name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (form.phone.trim().replace(/\D/g, "").length < 7) {
      setError("Please enter a valid phone or WhatsApp number.");
      return;
    }

    if (!date || date < localIsoDate()) {
      setError("Please choose today or a future appointment date.");
      return;
    }

    const day = getDayOfWeek(date);
    const hours = hoursForDay(day);

    if (hours.open === null || hours.close === null) {
      setError("The studio is closed on Mondays. Please choose another day.");
      return;
    }

    if (!time || !availableTimes.some((option) => option.value === time)) {
      setError("Please choose an available preferred time.");
      return;
    }

    const [hour, minute] = time.split(":").map(Number);
    const startMinute = hour * 60 + minute;

    if (startMinute + service.durationMin > hours.close) {
      setError("That time does not leave enough time before closing. Please choose another time.");
      return;
    }

    const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString("en-KE", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const message = [
      `Hello ${SITE.name}! 👑`,
      "",
      "I'd like to request a lash appointment.",
      "",
      `*Service:* ${service.name}`,
      `*Price:* ${kes(service.priceCents)}`,
      `*Estimated duration:* ${durationLabel(service.durationMin)}`,
      `*Preferred date:* ${formattedDate}`,
      `*Preferred time:* ${formatTime(startMinute)}`,
      "",
      `*Full name:* ${form.name.trim()}`,
      `*Phone / WhatsApp:* ${form.phone.trim()}`,
      ...(form.email.trim() ? [`*Email:* ${form.email.trim()}`] : []),
      ...(offerCode ? [`*Offer code:* ${offerCode}`] : []),
      ...(form.notes.trim() ? [`*Notes:* ${form.notes.trim()}`] : []),
      "",
      "Please let me know if this time is available and confirm my appointment. I understand my appointment is not confirmed until you reply.",
    ].join("\n");

    const number = SITE.whatsapp.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.location.assign(whatsappUrl);
  }

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8">
      <div className="card-luxe overflow-hidden">
        <div className="border-b border-gold/15 bg-blush/40 px-5 py-6 sm:px-8 sm:py-7">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-plum-deep text-gold-light">
              <Crown className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold-deep">
                Your next lash ritual
              </p>
              <h2 className="mt-1 font-display text-2xl text-plum sm:text-3xl">
                Request an appointment
              </h2>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/60">
            Choose your preferred service, date and time. We’ll prepare a message
            for WhatsApp so Liviah can confirm availability with you directly.
          </p>
        </div>

        <form onSubmit={submitBooking} className="space-y-7 p-5 sm:p-8">
          <section>
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gold-deep" />
              <h3 className="font-display text-xl text-plum">01. Choose your service</h3>
            </div>

            <div className="mb-4 flex gap-2 overflow-x-auto pb-2">
              {CATEGORIES.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setCategory(item.value)}
                  className={cn(
                    "min-h-10 shrink-0 rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] transition-colors",
                    category === item.value
                      ? "border-gold bg-plum-deep text-gold-light"
                      : "border-rose/25 bg-white text-ink/60 hover:border-gold",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {SERVICES.filter(
                (item) => category === "all" || item.category === category,
              ).map((item) => {
                const active = item.slug === serviceSlug;

                return (
                  <button
                    key={item.slug}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setServiceSlug(item.slug);
                      setTime("");
                      setError("");
                    }}
                    className={cn(
                      "flex min-h-[100px] items-start gap-3 rounded-2xl border p-4 text-left transition-colors",
                      active
                        ? "border-gold bg-blush/60 shadow-sm"
                        : "border-rose/15 bg-white hover:border-gold/50",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border",
                        active
                          ? "border-gold bg-gold text-plum-deep"
                          : "border-rose/25 text-transparent",
                      )}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-base leading-snug text-plum">
                        {item.name}
                      </span>
                      <span className="mt-1 block text-xs text-ink/50">
                        {durationLabel(item.durationMin)}
                      </span>
                      <span className="mt-2 block text-sm font-semibold text-rose-deep">
                        {kes(item.priceCents)}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="border-t border-gold/15 pt-6">
            <div className="mb-4 flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gold-deep" />
              <h3 className="font-display text-xl text-plum">02. Pick your preferred time</h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="label-luxe" htmlFor="bw-date">
                  Preferred date
                </label>
                <input
                  id="bw-date"
                  type="date"
                  required
                  min={localIsoDate()}
                  value={date}
                  onChange={(event) => updateDate(event.target.value)}
                  className="input-luxe"
                />
              </div>

              <div>
                <label className="label-luxe" htmlFor="bw-time">
                  Preferred time
                </label>
                <select
                  id="bw-time"
                  required
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  disabled={!date || isClosedDay || availableTimes.length === 0}
                  className="input-luxe"
                >
                  <option value="">
                    {!date
                      ? "Choose a date first"
                      : isClosedDay
                        ? "Closed on this day"
                        : availableTimes.length === 0
                          ? "No times available"
                          : "Select a preferred time"}
                  </option>
                  {availableTimes.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-xl border border-gold/20 bg-ivory p-4">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
              <div className="text-xs leading-relaxed text-ink/60">
                <p className="font-semibold text-plum">
                  {date ? businessHoursLabel(date) : "Studio opening hours"}
                </p>
                <p className="mt-1">
                  Tuesday–Friday: 9 AM–7 PM · Saturday: 9 AM–5 PM · Sunday: 11 AM–4 PM · Monday: Closed.
                </p>
                <p className="mt-2">
                  These are preferred times, not live availability. Liviah will confirm your appointment on WhatsApp.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-gold/15 pt-6">
            <div className="mb-4 flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold-deep" />
              <h3 className="font-display text-xl text-plum">03. Your details</h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="label-luxe" htmlFor="bw-name">
                  Full name
                </label>
                <input
                  id="bw-name"
                  required
                  autoComplete="name"
                  minLength={2}
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="input-luxe"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="label-luxe" htmlFor="bw-phone">
                  Phone / WhatsApp
                </label>
                <input
                  id="bw-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(event) => setForm({ ...form, phone: event.target.value })}
                  className="input-luxe"
                  placeholder="07XX XXX XXX"
                />
              </div>

              <div>
                <label className="label-luxe" htmlFor="bw-email">
                  Email <span className="normal-case tracking-normal text-ink/40">(optional)</span>
                </label>
                <input
                  id="bw-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="input-luxe"
                  placeholder="you@example.com"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="label-luxe" htmlFor="bw-notes">
                  Notes for Liviah{" "}
                  <span className="normal-case tracking-normal text-ink/40">(optional)</span>
                </label>
                <textarea
                  id="bw-notes"
                  rows={3}
                  value={form.notes}
                  onChange={(event) => setForm({ ...form, notes: event.target.value })}
                  className="input-luxe resize-y"
                  placeholder="Your preferred lash style, inspiration, or questions…"
                />
              </div>
            </div>
          </section>

          {offerCode && (
            <p className="rounded-xl border border-gold/25 bg-blush/50 px-4 py-3 text-sm text-rose-deep">
              Offer code <strong>{offerCode}</strong> will be included in your WhatsApp request.
            </p>
          )}

          {error && (
            <p role="alert" className="rounded-xl border border-rose/20 bg-rose-50 px-4 py-3 text-sm text-rose-800">
              {error}
            </p>
          )}

          <div className="rounded-2xl border border-gold/25 bg-blush/35 p-4 sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-deep">
              Your selection
            </p>
            <div className="mt-3 flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-lg leading-snug text-plum">{service.name}</p>
                <p className="mt-1 text-xs text-ink/55">
                  {durationLabel(service.durationMin)}
                  {date && time
                    ? ` · ${new Date(`${date}T12:00:00`).toLocaleDateString("en-KE", {
                        day: "numeric",
                        month: "short",
                      })} at ${formatTime(
                        Number(time.split(":")[0]) * 60 + Number(time.split(":")[1]),
                      )}`
                    : ""}
                </p>
              </div>
              <p className="shrink-0 font-display text-xl text-plum">
                {kes(service.priceCents)}
              </p>
            </div>
          </div>

          <button type="submit" className="btn-gold w-full !py-4">
            <MessageCircle className="h-5 w-5" />
            Request via WhatsApp
          </button>

          <p className="text-center text-xs leading-relaxed text-ink/50">
            WhatsApp will open with your request ready to send. Your appointment is
            only confirmed after Liviah replies. No payment is taken through this form.
          </p>
        </form>
      </div>

      <aside className="space-y-5 lg:sticky lg:top-28">
        <div className="card-luxe overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/images/blush-silk.jpg"
              alt="Soft blush tones at Liviah Lash Tech"
              fill
              sizes="(max-width: 1023px) 100vw, 340px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/80 via-plum-deep/10 to-transparent" />
            <p className="absolute bottom-4 left-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-gold-light">
              <Crown className="h-4 w-4" /> The Liviah experience
            </p>
          </div>
          <div className="space-y-4 p-5">
            <h3 className="font-display text-2xl text-plum">
              Where Every Client Is Queen
            </h3>
            <p className="text-sm leading-relaxed text-ink/60">
              Beautiful, comfortable lashes tailored to your eyes and personal style.
            </p>
            <div className="border-t border-gold/15 pt-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/45">
                Visit the studio
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {SITE.address}
              </p>
              <p className="mt-1 text-sm text-ink/60">{SITE.city}</p>
            </div>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-rose/25 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-rose-deep transition-colors hover:border-gold hover:bg-blush"
            >
              <MessageCircle className="h-4 w-4" />
              Ask us on WhatsApp
            </a>
            <p className="text-center text-xs text-ink/50">{SITE.phoneMobile}</p>
          </div>
        </div>
      </aside>
    </div>
  );
}