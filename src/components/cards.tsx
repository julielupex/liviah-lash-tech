import Image from "next/image";
import { Check, Clock, Crown } from "lucide-react";
import type { Tier } from "@/lib/content";
import { cn, durationLabel, kes } from "@/lib/format";
import { Reveal } from "./motion";

const WHATSAPP_NUMBER = "254769899548";

function getServiceBookingWhatsAppUrl(serviceName: string) {
  const message = [
    "Hello Liviah Lash Tech! 👋 I'd like to book this service.",
    "",
    `Service: ${serviceName}`,
    "",
    "Preferred date:",
    "Preferred time:",
    "Name:",
    "",
    "Please let me know if my preferred appointment time is available. Thank you!",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ------------------------------ service card ----------------------------- */

/**
 * Frontend-only service type.
 * This type does not depend on the database schema.
 */
export type StaticService = {
  id: string;
  slug: string;
  category: string;
  name: string;
  description: string;
  durationMin: number;
  priceCents: number;
  depositCents: number;
  imageUrl: string | null;
  featured: boolean;
  sortOrder: number;
};

export function ServiceCard({
  service,
  delay = 0,
}: {
  service: StaticService;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="card-luxe group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(64,40,48,0.45)]">
        <div className="relative overflow-hidden">
          <Image
            src={service.imageUrl ?? "/images/blush-silk.jpg"}
            alt={service.name}
            width={640}
            height={460}
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="aspect-[16/11] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-108 motion-reduce:transition-none"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-plum-deep/45 via-transparent to-transparent opacity-70" />
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-ivory/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-plum backdrop-blur sm:px-3.5 sm:text-[11px] sm:tracking-[0.14em]">
            <Clock className="h-3 w-3 shrink-0 text-gold-deep" />
            {durationLabel(service.durationMin)}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
          <div className="flex items-start justify-between gap-2 sm:gap-3">
            <h3 className="min-w-0 flex-1 font-display text-xl leading-snug text-plum [overflow-wrap:anywhere] sm:text-2xl">
              {service.name}
            </h3>
            <p className="shrink-0 pt-0.5 font-display text-lg leading-tight text-gold-deep sm:text-xl">
              {kes(service.priceCents)}
            </p>
          </div>

          <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink/60 sm:text-[13.5px]">
            {service.description}
          </p>

          <div className="mt-5 flex flex-col items-stretch gap-3 border-t border-gold/20 pt-4 min-[360px]:flex-row min-[360px]:items-center min-[360px]:justify-between sm:mt-6 sm:pt-5">
            <span className="text-[10px] uppercase leading-relaxed tracking-[0.12em] text-ink/50 sm:text-[11px] sm:tracking-[0.16em]">
              {kes(service.depositCents)} deposit
            </span>

            <a
              href={getServiceBookingWhatsAppUrl(service.name)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Book ${service.name} on WhatsApp`}
              className="btn-gold inline-flex min-h-12 w-full items-center justify-center !px-5 !py-3 !text-[11px] min-[360px]:w-auto sm:!px-6 sm:!py-2.5 sm:!text-[10.5px]"
            >
              Book This Service
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ----------------------------- membership card --------------------------- */

export function TierCard({
  tier,
  delay = 0,
  onSelect,
}: {
  tier: Tier;
  delay?: number;
  onSelect?: (slug: string) => void;
}) {
  const featured = tier.featured;

  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border p-5 transition-all duration-500 sm:p-8",
          featured
            ? "border-gold bg-plum-deep text-blush shadow-[0_40px_80px_-30px_rgba(44,26,33,0.8)] lg:-translate-y-4"
            : "card-luxe",
        )}
      >
        {featured && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-plum-deep sm:right-6 sm:top-6 sm:gap-1.5 sm:px-4 sm:text-[9.5px] sm:tracking-[0.22em]">
            <Crown className="h-3 w-3" /> Most Loved
          </span>
        )}

        <p className="eyebrow pr-20 sm:pr-0">{tier.tagline}</p>

        <h3
          className={cn(
            "mt-3 font-display text-2xl leading-tight sm:text-3xl",
            featured ? "text-white" : "text-plum",
          )}
        >
          {tier.name}
        </h3>

        <div className="mt-5 flex flex-wrap items-end gap-2">
          <span
            className={cn(
              "font-display text-3xl sm:text-4xl",
              featured ? "text-gold-light" : "text-gold-deep",
            )}
          >
            {kes(tier.priceCents)}
          </span>

          <span
            className={cn(
              "pb-1.5 text-[10px] uppercase tracking-[0.15em] sm:text-xs sm:tracking-[0.2em]",
              featured ? "text-blush/60" : "text-ink/45",
            )}
          >
            / month
          </span>
        </div>

        <p
          className={cn(
            "mt-1 text-xs leading-relaxed",
            featured ? "text-blush/55" : "text-ink/45",
          )}
        >
          or {kes(tier.annualCents)} billed annually — save 10%
        </p>

        <ul className="mt-6 flex-1 space-y-3 sm:mt-7">
          {tier.perks.map((perk) => (
            <li
              key={perk}
              className="flex items-start gap-3 text-[13px] leading-snug sm:text-[13.5px]"
            >
              <span
                className={cn(
                  "mt-0.5 shrink-0 rounded-full p-1",
                  featured
                    ? "bg-gold/20 text-gold-light"
                    : "bg-blush text-rose-deep",
                )}
              >
                <Check className="h-3 w-3" />
              </span>

              <span className={featured ? "text-blush/85" : "text-ink/70"}>
                {perk}
              </span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => onSelect?.(tier.slug)}
          className={cn(
            "mt-7 min-h-12 w-full sm:mt-8",
            featured ? "btn-gold" : "btn-outline-rose hover:!border-gold",
          )}
        >
          Become a Member
        </button>
      </article>
    </Reveal>
  );
}