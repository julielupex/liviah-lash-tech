
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { SITE } from "@/lib/site";
import { IMG } from "@/lib/content";

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 21v-7h2.8l.5-3.5h-3.3V8.1c0-1 .3-1.7 1.8-1.7h1.7V3.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v3.1H7.5V14h2.8v7h3.2Z" />
    </svg>
  );
}

function PinterestIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.9 1.5 1.9 1.9 0 3.3-2 3.3-4.8 0-2.5-1.8-4.3-4.4-4.3-3 0-4.7 2.2-4.7 4.5 0 .9.3 1.9.8 2.4.1.1.1.2.1.3l-.3 1.1c0 .2-.2.2-.4.1-1.2-.6-2-2.4-2-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.3 2.5 6.3 5.9 0 3.5-2.2 6.3-5.3 6.3-1 0-2-.5-2.3-1.2l-.6 2.4c-.2.9-.8 2-1.2 2.6.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2Z" />
    </svg>
  );
}

/* --------------------------------- brand -------------------------------- */

export function CrownMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="crownGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ecdcba" />
          <stop offset="55%" stopColor="#cfa96b" />
          <stop offset="100%" stopColor="#a98644" />
        </linearGradient>
      </defs>
      <path
        d="M3 16.2 5.1 7.6l4.7 4.5L12 5l2.2 7.1 4.7-4.5L21 16.2H3Z"
        fill="url(#crownGold)"
      />
      <rect
        x="4"
        y="17.6"
        width="16"
        height="1.9"
        rx="0.95"
        fill="url(#crownGold)"
      />
      <circle cx="5.1" cy="6" r="1.35" fill="url(#crownGold)" />
      <circle cx="12" cy="3.6" r="1.35" fill="url(#crownGold)" />
      <circle cx="18.9" cy="6" r="1.35" fill="url(#crownGold)" />
    </svg>
  );
}

function Wordmark({
  light,
  compact = false,
}: {
  light: boolean;
  compact?: boolean;
}) {
  return (
    <span className="flex min-w-0 flex-col items-center leading-none">
      <CrownMark
        className={
          compact ? "mb-0.5 h-5 w-5 sm:h-6 sm:w-6" : "mb-1 h-6 w-6"
        }
      />
      <span
        className={`font-display font-semibold tracking-[0.24em] transition-colors sm:tracking-[0.28em] ${
          compact ? "text-lg sm:text-[22px]" : "text-[22px]"
        } ${light ? "text-white" : "text-plum"}`}
      >
        LIVIAH
      </span>
      <span
        className={`mt-1 text-[7px] font-medium uppercase tracking-[0.22em] sm:text-[8px] sm:tracking-[0.42em] ${
          light ? "text-gold-light/80" : "text-rose-deep/80"
        }`}
      >
        Lash Tech · Esthetics Spa
      </span>
    </span>
  );
}

/* --------------------------------- header ------------------------------- */

const LEFT_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
];

const RIGHT_LINKS = [
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const ALL_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setScrolled(window.scrollY > 32);
    });

    const onScroll = () => setScrolled(window.scrollY > 32);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const light = !scrolled && !open;
  const animationDuration = prefersReducedMotion ? 0 : 0.18;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-b border-gold/20 bg-cream/95 shadow-[0_18px_40px_-30px_rgba(44,26,33,0.5)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[40px_minmax(0,1fr)] items-center gap-1.5 px-2.5 py-2 sm:grid-cols-[44px_minmax(0,1fr)] sm:gap-2 sm:px-5 sm:py-3 lg:grid-cols-[1fr_auto_1fr] lg:gap-0 lg:px-8">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:hidden ${
              light ? "text-white" : "text-plum"
            }`}
          >
            <Menu className="h-6 w-6" />
          </button>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center justify-end gap-7 pr-10 lg:flex"
          >
            {LEFT_LINKS.map((link) => (
              <NavLink
                key={link.href}
                {...link}
                light={light}
                active={pathname === link.href}
              />
            ))}
          </nav>

          <Link
            href="/"
            prefetch={true}
            aria-label={SITE.fullName}
            className="min-w-0 justify-self-center py-1"
          >
            <Wordmark light={light} compact />
          </Link>

          <nav
            aria-label="Secondary navigation"
            className="hidden items-center justify-start gap-7 pl-10 lg:flex"
          >
            {RIGHT_LINKS.map((link) => (
              <NavLink
                key={link.href}
                {...link}
                light={light}
                active={pathname === link.href}
              />
            ))}
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: animationDuration }}
            className="fixed inset-0 z-[60] flex flex-col overflow-x-hidden overflow-y-auto overscroll-contain bg-plum-deep pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
          >
            <Image
              src={IMG.plum}
              alt=""
              fill
              sizes="100vw"
              className="pointer-events-none object-cover opacity-35"
              priority
            />

            <div className="relative flex items-center justify-between px-4 py-3 sm:px-5 sm:py-5">
              <Wordmark light compact />

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav
              aria-label="Mobile navigation links"
              className="relative mx-auto flex w-full max-w-lg flex-col items-center gap-0 px-5 pb-6 pt-1 sm:pt-6"
            >
              {ALL_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={
                    prefersReducedMotion ? false : { opacity: 0, y: 12 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: prefersReducedMotion
                      ? 0
                      : Math.min(index * 0.025, 0.15),
                    duration: animationDuration,
                  }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    prefetch={true}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`flex min-h-12 w-full items-center justify-center px-3 py-2 text-center font-display text-[27px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold sm:min-h-14 sm:text-4xl ${
                      pathname === link.href
                        ? "italic text-gold-light"
                        : "text-blush hover:text-gold-light"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-4 flex w-full flex-col items-center gap-2 border-t border-white/10 pb-5 pt-4 text-sm text-blush/75 sm:mt-6 sm:gap-3 sm:pb-8 sm:pt-6">
                <a
                  href={`tel:${SITE.phoneMobileRaw}`}
                  className="flex min-h-11 items-center justify-center px-3 hover:text-gold-light"
                >
                  {SITE.phoneMobile}
                </a>
                <a
                  href={`tel:${SITE.phoneLineRaw}`}
                  className="flex min-h-11 items-center justify-center px-3 hover:text-gold-light"
                >
                  {SITE.phoneLine}
                </a>
                <span className="max-w-xs px-2 text-center leading-relaxed">
                  {SITE.address}
                </span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  href,
  label,
  light,
  active,
}: {
  href: string;
  label: string;
  light: boolean;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      prefetch={true}
      aria-current={active ? "page" : undefined}
      className={`group relative whitespace-nowrap text-[11.5px] font-semibold uppercase tracking-[0.22em] transition-colors focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
        active
          ? "text-gold"
          : light
            ? "text-white/85 hover:text-gold-light"
            : "text-plum/80 hover:text-rose-deep"
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-1.5 left-1/2 h-px -translate-x-1/2 bg-gold transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

/* --------------------------------- footer ------------------------------- */

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-plum-deep text-blush/80">
      <Image
        src={IMG.plum}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-20"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
          <div>
            <Wordmark light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-blush/65">
              {SITE.tagline}. Premium lash extensions, organic facials, brow
              artistry and gentle waxing in the heart of {SITE.city}.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { href: SITE.instagram, Icon: InstagramIcon, label: "Instagram" },
                { href: SITE.facebook, Icon: FacebookIcon, label: "Facebook" },
                { href: SITE.pinterest, Icon: PinterestIcon, label: "Pinterest" },
                {
                  href: `https://wa.me/${SITE.whatsapp}`,
                  Icon: MessageCircle,
                  label: "WhatsApp",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold-light transition-colors hover:bg-gold hover:text-plum-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="eyebrow">Explore</h4>
            <ul className="mt-5 space-y-1.5 text-sm">
              {[
                ...ALL_LINKS,
                { href: "/gift-cards", label: "Gift Cards" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="inline-flex min-h-10 items-center py-1 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow">Services</h4>
            <ul className="mt-5 space-y-1.5 text-sm">
              {[
                "Lash Extensions",
                "Lash Refills & Care",
                "Semi-Permanent Brows",
                "Brow Lamination",
                "Organic Facials",
                "Waxing & Threading",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    prefetch={true}
                    className="inline-flex min-h-10 items-center py-1 transition-colors hover:text-gold-light"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-9 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-blush/45 sm:mt-14 sm:pt-7 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6">
            <Link
              href="/terms"
              prefetch={true}
              className="inline-flex min-h-10 items-center hover:text-gold-light"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              prefetch={true}
              className="inline-flex min-h-10 items-center hover:text-gold-light"
            >
              Privacy Policy
            </Link>
            <Link
              href="/faq"
              prefetch={true}
              className="inline-flex min-h-10 items-center hover:text-gold-light"
            >
              Policies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- floating extras --------------------------- */

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
        "Hello Liviah Lash Tech, I would like to book an appointment.",
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-40 flex h-12 w-12 items-center justify-center rounded-full text-plum-deep shadow-[0_16px_40px_-10px_rgba(169,134,68,0.7)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      style={{
        background: "linear-gradient(135deg,#ecdcba,#cfa96b 60%,#a98644)",
      }}
    >
      <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-gold/40 [animation-duration:2.8s] motion-reduce:animate-none" />
      <MessageCircle className="relative h-5 w-5 sm:h-6 sm:w-6" />
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full bg-plum-deep px-4 py-2 text-xs font-medium tracking-wide text-blush opacity-0 shadow-xl transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-0 sm:block sm:group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("lvs-consent")) {
      const timeout = window.setTimeout(() => setShow(true), 1800);
      return () => window.clearTimeout(timeout);
    }
  }, []);

  if (!show) return null;

  const choose = (value: string) => {
    localStorage.setItem("lvs-consent", value);
    setShow(false);
  };

  return (
    <motion.div
      role="dialog"
      aria-label="Cookie preferences"
      aria-describedby="cookie-consent-description"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 40, opacity: 0 }}
      className="fixed inset-x-3 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-[55] max-h-[calc(100dvh-7rem-env(safe-area-inset-bottom))] overflow-y-auto rounded-2xl border border-gold/25 bg-plum-deep/95 p-4 text-blush shadow-2xl backdrop-blur sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-h-[calc(100dvh-2.5rem)] sm:max-w-sm sm:p-5"
    >
      <p className="font-display text-lg italic text-gold-light">A sweet note</p>
      <p
        id="cookie-consent-description"
        className="mt-1.5 text-[13px] leading-relaxed text-blush/75"
      >
        We use cookies to remember your preferences and keep your booking flow
        smooth. See our{" "}
        <Link
          href="/privacy"
          prefetch={true}
          className="text-gold-light underline underline-offset-2"
        >
          Privacy Policy
        </Link>
        .
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="btn-gold min-h-11 !px-5 !py-2 !text-[10px]"
        >
          Accept
        </button>

        <button
          type="button"
          onClick={() => choose("declined")}
          className="min-h-11 rounded-full border border-white/25 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-blush/80 transition-colors hover:border-gold-light hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Decline
        </button>
      </div>
    </motion.div>
  );
}
