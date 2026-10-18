
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Star } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/format";
import { CrownMark } from "./chrome";

export function Ornament({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden>
      <span className={cn("h-px w-14", light ? "bg-gold/60" : "bg-gold/50")} />
      <CrownMark className="h-4 w-4" />
      <span className={cn("h-px w-14", light ? "bg-gold/60" : "bg-gold/50")} />
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  sub,
  tone = "dark",
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  tone?: "dark" | "light";
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={cn(
          "mt-4 font-display text-4xl leading-[1.08] md:text-[3.4rem]",
          tone === "dark" ? "text-plum" : "text-white",
        )}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "mt-5 text-[15px] leading-relaxed md:text-base",
            tone === "dark" ? "text-ink/65" : "text-blush/75",
          )}
        >
          {sub}
        </p>
      )}
      <div className={cn("mt-6 flex", align === "center" ? "justify-center" : "")}>
        <Ornament light={tone === "light"} />
      </div>
    </div>
  );
}

export function Stars({ n = 5, className }: { n?: number; className?: string }) {
  return (
    <div className={cn("flex gap-1", className)} aria-label={`${n} star rating`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
      ))}
    </div>
  );
}

/** Shared dark hero for interior pages (keeps the fixed header legible). */
export function PageHero({
  eyebrow,
  title,
  sub,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-plum-deep">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-plum-deep/85 via-plum/55 to-plum-deep/80" />
      <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-44 text-center md:pb-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] text-white md:text-7xl">
          {title}
        </h1>
        {sub && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blush/80 md:text-lg">
            {sub}
          </p>
        )}
        <div className="mt-8 flex justify-center">
          <Ornament light />
        </div>
        {children && (
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function RoyalCta({
  title,
  sub,
}: {
  title: ReactNode;
  sub?: string;
}) {
  const whatsappNumber = SITE.whatsapp.replace(/\D/g, "");
  const bookingMessage =
    "Hello Liviah Lash Tech, I would like to book an appointment.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(bookingMessage)}`;

  return (
    <section className="relative overflow-hidden">
      <Image src="/images/blush-silk.jpg" alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-ivory/55" />
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
        <Ornament />
        <h2 className="mt-6 font-display text-4xl leading-tight text-plum md:text-5xl">
          {title}
        </h2>
        {sub && <p className="mx-auto mt-4 max-w-xl text-ink/65">{sub}</p>}
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Book Your Appointment
          </a>
          <Link href="/services" className="btn-outline-rose">
            Browse Services
          </Link>
        </div>
      </div>
    </section>
  );
}
