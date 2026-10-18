import type { Metadata } from "next";
import Image from "next/image";
import { CATEGORIES, IMG } from "@/lib/content";
import { PageHero, RoyalCta } from "@/components/atoms";
import { Reveal } from "@/components/motion";
import { ServiceCard } from "@/components/cards";
import { CrownMark } from "@/components/chrome";

export const metadata: Metadata = {
  title: "Services & Gallery",
  description:
    "Explore lash extension sets and refills, lash lifts, and lash care services at Liviah Lash Tech.",
  alternates: { canonical: "/services" },
};

const HIDDEN_CATEGORY_SLUGS: Set<string> = new Set([
  "waxing-threading",
  "organic-facials",
  "deluxe-brows",
  "semi-permanent-brows",
]);

const VISIBLE_CATEGORIES = CATEGORIES.filter(
  (category) => !HIDDEN_CATEGORY_SLUGS.has(category.slug),
);

const GALLERY = [
  { src: IMG.lashApply2, alt: "Hybrid lash extension application" },
  { src: IMG.facialRitual, alt: "Beauty treatment ritual" },
  { src: IMG.browBlading, alt: "Brow artistry" },
  { src: IMG.spaTable, alt: "Serene spa treatment room" },
  { src: IMG.lashClose, alt: "Lash lift close-up" },
  { src: IMG.waxLegs, alt: "Beauty treatment detail" },
  { src: IMG.portraitGold, alt: "Golden-hour beauty portrait" },
  { src: IMG.flatMarble, alt: "Luxury skincare on marble" },
  { src: IMG.lashesPortrait, alt: "Finished volume lash set" },
  { src: IMG.facialMoist, alt: "Hydrating facial treatment" },
];

type StaticService = {
  id: string;
  slug: string;
  category: string;
  name: string;
  description: string;
  durationMin: number;
  priceCents: number;
  depositCents: number;
  imageUrl: string;
  featured: boolean;
  sortOrder: number;
};

const SERVICES: StaticService[] = [
  {
    id: "classic-signature-set",
    slug: "classic-signature-set",
    category: "lash-extensions",
    name: "The Classic Signature Set",
    description:
      "The original Liviah look. One premium extension applied to every natural lash for a beautiful, comfortable, natural-looking set tailored to your eye shape and personal style.",
    durationMin: 120,
    priceCents: 350000,
    depositCents: 100000,
    imageUrl: IMG.lashClient,
    featured: true,
    sortOrder: 1,
  },
  {
    id: "princess-hybrid-set",
    slug: "princess-hybrid-set",
    category: "lash-extensions",
    name: "The Princess Hybrid Set",
    description:
      "A wispy blend of classic and volume techniques — textured, fluttery and effortlessly glamorous. Our single most-requested set.",
    durationMin: 135,
    priceCents: 450000,
    depositCents: 100000,
    imageUrl: IMG.lashApply2,
    featured: true,
    sortOrder: 2,
  },
  {
    id: "duchess-volume-set",
    slug: "duchess-volume-set",
    category: "lash-extensions",
    name: "The Duchess Volume Set",
    description:
      "Hand-crafted volume fans for full, fluffy density, styled in a soft cat-eye that elongates and lifts the outer corners of the eyes.",
    durationMin: 150,
    priceCents: 550000,
    depositCents: 150000,
    imageUrl: IMG.lashApply1,
    featured: false,
    sortOrder: 3,
  },
  {
    id: "queen-bee-mega-volume-set",
    slug: "queen-bee-mega-volume-set",
    category: "lash-extensions",
    name: "The Queen Bee Mega Volume Set",
    description:
      "Maximum glamour for the queen bee. Dense, dramatic mega-volume fans with a surprisingly lightweight, comfortable feel.",
    durationMin: 165,
    priceCents: 650000,
    depositCents: 150000,
    imageUrl: IMG.lashesPortrait,
    featured: true,
    sortOrder: 4,
  },
  {
    id: "express-refill-30",
    slug: "express-refill-30",
    category: "lash-refills",
    name: "Express Refill · 30 Minutes",
    description:
      "A quick 30-minute touch-up to replace shed lashes and keep your set looking fresh between full appointments.",
    durationMin: 30,
    priceCents: 150000,
    depositCents: 50000,
    imageUrl: IMG.lashHands,
    featured: false,
    sortOrder: 5,
  },
  {
    id: "signature-refill-60",
    slug: "signature-refill-60",
    category: "lash-refills",
    name: "Signature Refill · 1 Hour",
    description:
      "A full hour of meticulous refilling, re-balancing and styling for sets that are two to three weeks grown out.",
    durationMin: 60,
    priceCents: 220000,
    depositCents: 50000,
    imageUrl: IMG.lashTweezers,
    featured: false,
    sortOrder: 6,
  },
  {
    id: "lash-lift-tint",
    slug: "lash-lift-tint",
    category: "lash-care",
    name: "Lash Lift & Tint",
    description:
      "Your natural lashes lifted, curled and tinted from root to tip — a mascara look that lasts six to eight weeks, no extensions needed.",
    durationMin: 60,
    priceCents: 300000,
    depositCents: 75000,
    imageUrl: IMG.lashClose,
    featured: false,
    sortOrder: 7,
  },
  {
    id: "cluster-lashes",
    slug: "cluster-lashes",
    category: "lash-care",
    name: "Cluster Lashes",
    description:
      "Fluffy cluster lashes for instant glamour — perfect for weddings, shoots and special weekends. Lasts up to five days.",
    durationMin: 45,
    priceCents: 180000,
    depositCents: 50000,
    imageUrl: IMG.lashBed,
    featured: false,
    sortOrder: 8,
  },
  {
    id: "strip-lash-application",
    slug: "strip-lash-application",
    category: "lash-care",
    name: "Strip Lash Application",
    description:
      "Professional strip lash fitting and styling for a flawless, camera-ready finish. Strip lashes included.",
    durationMin: 20,
    priceCents: 80000,
    depositCents: 30000,
    imageUrl: IMG.lashTools,
    featured: false,
    sortOrder: 9,
  },
  {
    id: "gentle-lash-removal",
    slug: "gentle-lash-removal",
    category: "lash-care",
    name: "Gentle Lash Removal",
    description:
      "Safe, damage-free removal of extensions using a professional-grade gentle remover. Your natural lashes stay healthy and intact.",
    durationMin: 30,
    priceCents: 70000,
    depositCents: 30000,
    imageUrl: IMG.lashSalon,
    featured: false,
    sortOrder: 10,
  },
  {
    id: "lash-bath-deep-clean",
    slug: "lash-bath-deep-clean",
    category: "lash-care",
    name: "Lash Bath & Deep Clean",
    description:
      "A refreshing lash spa — foaming deep cleanse, brushing and conditioning that extends the life of your extensions.",
    durationMin: 20,
    priceCents: 60000,
    depositCents: 30000,
    imageUrl: IMG.lashApply1,
    featured: false,
    sortOrder: 11,
  },
  {
    id: "microblading",
    slug: "microblading",
    category: "semi-permanent-brows",
    name: "Microblading",
    description:
      "Hair-stroke artistry for natural, fuller-looking brows. Includes consultation, custom brow mapping, numbing ritual and aftercare kit.",
    durationMin: 120,
    priceCents: 1500000,
    depositCents: 300000,
    imageUrl: IMG.browBlading,
    featured: true,
    sortOrder: 12,
  },
  {
    id: "microshading",
    slug: "microshading",
    category: "semi-permanent-brows",
    name: "Microshading · Ombré Powder",
    description:
      "Soft, misty ombré powder brows with a beautifully filled-in finish. Ideal for oily or sensitive skin types.",
    durationMin: 120,
    priceCents: 1400000,
    depositCents: 300000,
    imageUrl: IMG.browPmu,
    featured: false,
    sortOrder: 13,
  },
  {
    id: "combo-brows",
    slug: "combo-brows",
    category: "semi-permanent-brows",
    name: "Combo Brows",
    description:
      "The ultimate brow transformation — microbladed hair strokes at the front blended into a soft powdered body and tail.",
    durationMin: 150,
    priceCents: 1800000,
    depositCents: 400000,
    imageUrl: IMG.browSalon,
    featured: false,
    sortOrder: 14,
  },
  {
    id: "deluxe-brow-sculpt-tint",
    slug: "deluxe-brow-sculpt-tint",
    category: "deluxe-brows",
    name: "Deluxe Brow Sculpt & Tint",
    description:
      "Precision mapping, shaping, tweezing and a custom-blended tint for perfectly polished, face-framing brows.",
    durationMin: 45,
    priceCents: 150000,
    depositCents: 50000,
    imageUrl: IMG.browPluck,
    featured: false,
    sortOrder: 15,
  },
  {
    id: "brow-lamination",
    slug: "brow-lamination",
    category: "deluxe-brows",
    name: "Brow Lamination",
    description:
      "The fluffy, feathered brow of your dreams. Hairs are lifted and set into your ideal shape for four to six weeks.",
    durationMin: 60,
    priceCents: 250000,
    depositCents: 50000,
    imageUrl: IMG.browClose,
    featured: false,
    sortOrder: 16,
  },
  {
    id: "signature-organic-glow-facial",
    slug: "signature-organic-glow-facial",
    category: "organic-facials",
    name: "Signature Organic Glow Facial",
    description:
      "A deep-cleansing, brightening ritual using certified organic botanicals, finished with a lifting and sculpting facial massage.",
    durationMin: 60,
    priceCents: 400000,
    depositCents: 100000,
    imageUrl: IMG.facialSpa,
    featured: true,
    sortOrder: 17,
  },
  {
    id: "deep-cleanse-hydration-facial",
    slug: "deep-cleanse-hydration-facial",
    category: "organic-facials",
    name: "Deep Cleanse & Hydration Facial",
    description:
      "Steam, gentle extractions and a quenching hyaluronic infusion that leaves skin plump, calm and beautifully dewy.",
    durationMin: 75,
    priceCents: 500000,
    depositCents: 100000,
    imageUrl: IMG.facialWhite,
    featured: false,
    sortOrder: 18,
  },
  {
    id: "royal-gold-radiance-facial",
    slug: "royal-gold-radiance-facial",
    category: "organic-facials",
    name: "Royal Gold Radiance Facial",
    description:
      "Our crowning treatment — a 24k gold leaf mask, lymphatic drainage massage and rose-quartz therapy for red-carpet radiance.",
    durationMin: 90,
    priceCents: 750000,
    depositCents: 150000,
    imageUrl: IMG.facialMask,
    featured: true,
    sortOrder: 19,
  },
  {
    id: "precision-brow-threading",
    slug: "precision-brow-threading",
    category: "waxing-threading",
    name: "Precision Brow Threading",
    description:
      "Traditional threading for crisp, clean brow lines with minimal irritation — the gentlest way to perfect arches.",
    durationMin: 15,
    priceCents: 50000,
    depositCents: 20000,
    imageUrl: IMG.browTweeze,
    featured: false,
    sortOrder: 20,
  },
  {
    id: "lip-chin-wax",
    slug: "lip-chin-wax",
    category: "waxing-threading",
    name: "Lip & Chin Wax",
    description:
      "Gentle hard-wax hair removal for the upper lip and chin — quick, smooth and kind to delicate skin.",
    durationMin: 15,
    priceCents: 60000,
    depositCents: 20000,
    imageUrl: IMG.waxSalon,
    featured: false,
    sortOrder: 21,
  },
  {
    id: "underarm-wax",
    slug: "underarm-wax",
    category: "waxing-threading",
    name: "Underarm Wax",
    description:
      "Smooth, long-lasting underarm waxing finished with a soothing botanical post-wax treatment.",
    durationMin: 20,
    priceCents: 100000,
    depositCents: 30000,
    imageUrl: IMG.waxHand,
    featured: false,
    sortOrder: 22,
  },
  {
    id: "full-leg-wax",
    slug: "full-leg-wax",
    category: "waxing-threading",
    name: "Full Leg Wax",
    description:
      "Head-turning silky legs from thigh to ankle, finished with a calming rosehip oil massage.",
    durationMin: 45,
    priceCents: 250000,
    depositCents: 50000,
    imageUrl: IMG.waxStrip,
    featured: false,
    sortOrder: 23,
  },
  {
    id: "royal-full-body-wax",
    slug: "royal-full-body-wax",
    category: "waxing-threading",
    name: "The Royal Full Body Wax",
    description:
      "The complete silk experience — legs, arms, underarms and more in one indulgent, unhurried session.",
    durationMin: 90,
    priceCents: 600000,
    depositCents: 150000,
    imageUrl: IMG.waxLaser,
    featured: false,
    sortOrder: 24,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services · Gallery · Prices"
        title={
          <>
            The Royal{" "}
            <span className="text-gold-grad italic">
              Treatment Menu
            </span>
          </>
        }
        sub="Every appointment opens with a personal consultation. Refills and quick services take about 30 minutes — full sets and PMU rituals are savoured, never rushed."
        image={IMG.lashApply2}
      />

      <nav
        aria-label="Service categories"
        className="sticky top-[64px] z-30 border-b border-gold/15 bg-cream/95 py-2.5 shadow-sm backdrop-blur-xl lg:top-[72px] lg:py-3"
      >
        <div className="mx-auto flex max-w-7xl snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain px-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6 lg:justify-center lg:px-8 [&::-webkit-scrollbar]:hidden">
          {VISIBLE_CATEGORIES.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="min-h-11 shrink-0 snap-start rounded-full border border-rose/25 bg-ivory px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/70 transition-colors hover:border-gold hover:bg-plum-deep hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:scale-[0.98] sm:px-5 sm:text-[11px] sm:tracking-[0.14em] motion-reduce:transform-none"
            >
              {category.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-14 lg:px-8 lg:pt-16">
        {VISIBLE_CATEGORIES.map((category, categoryIndex) => {
          const categoryServices = SERVICES.filter(
            (service) => service.category === category.slug,
          );

          if (categoryServices.length === 0) return null;

          return (
            <section
              key={category.slug}
              id={category.slug}
              className="mb-14 scroll-mt-32 last:mb-6 sm:mb-20 sm:scroll-mt-36 sm:last:mb-8"
            >
              <div className="grid items-center gap-5 sm:gap-8 lg:grid-cols-[1.4fr_1fr]">
                <Reveal>
                  <p className="eyebrow">
                    {String(categoryIndex + 1).padStart(2, "0")} —{" "}
                    {categoryServices.length}{" "}
                    {categoryServices.length === 1
                      ? "treatment"
                      : "treatments"}
                  </p>

                  <h2 className="mt-2 font-display text-3xl leading-tight text-plum sm:mt-3 sm:text-4xl md:text-5xl">
                    {category.title}
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/65 sm:mt-4 sm:text-base">
                    {category.blurb}
                  </p>
                </Reveal>

                <Reveal delay={0.12}>
                  <div className="gold-frame h-36 overflow-hidden rounded-2xl sm:h-44 sm:rounded-3xl">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={640}
                      height={280}
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 40vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Reveal>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
                {categoryServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    delay={(index % 3) * 0.08}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="overflow-hidden border-y border-gold/20 bg-plum-deep py-12 sm:py-16">
        <div className="mb-7 flex items-center justify-center gap-3 px-4 text-center sm:mb-10 sm:px-6">
          <CrownMark className="h-5 w-5 shrink-0" />
          <h2 className="font-display text-2xl leading-tight text-white sm:text-3xl md:text-4xl">
            Moments from the{" "}
            <span className="text-gold-grad italic">palace</span>
          </h2>
        </div>

        <div className="overflow-hidden motion-reduce:overflow-x-auto">
          <div className="animate-marquee flex w-max gap-3 sm:gap-5 motion-reduce:animate-none">
            {[...GALLERY, ...GALLERY].map((item, index) => (
              <div
                key={`${item.alt}-${index}`}
                className="h-56 w-44 shrink-0 overflow-hidden rounded-xl sm:h-64 sm:w-52 sm:rounded-2xl md:h-72 md:w-60"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={340}
                  height={440}
                  sizes="(max-width: 639px) 176px, (max-width: 767px) 208px, 240px"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 motion-reduce:transition-none"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoyalCta
        title={
          <>
            Can&apos;t decide? Let&apos;s{" "}
            <span className="text-gold-grad italic">consult</span>.
          </>
        }
        sub="Book any service and your artist will refine the choice with you on the day — or WhatsApp us for a free mini-consultation first."
      />
    </>
  );
}
