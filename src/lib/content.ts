/**
 * Static marketing + editorial content for Liviah Lash Tech Esthetics Spa.
 * All imagery is served from stock CDNs or locally generated textures.
 */

const px = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMG = {
  // Lashes
  lashHero: px(8554941, 2200),
  lashApply1: px(8554941, 900),
  lashApply2: px(36930354, 900),
  lashTweezers: px(7755650, 900),
  lashClient: px(6135662, 900),
  lashSalon: px(5128233, 900),
  lashHands: px(7755523, 900),
  lashesPortrait: px(7755524, 900),
  lashBed: px(5128230, 900),
  lashTools: px(8558534, 900),
  lashClose: px(9743993, 900),
  // Spa / interior
  spaHammam: px(33852650, 1400),
  spaCandles: px(1926811, 1400),
  spaMassage: px(6187252, 1200),
  spaTable: px(6628587, 900),
  spaSculpt: px(3997996, 900),
  spaFace: px(3997983, 900),
  spaMassage2: px(6187841, 900),
  spaOils: px(6628528, 900),
  // Facials
  facialMask: px(12115040, 900),
  facialCleanse: px(3985361, 900),
  facialSpa: px(5659018, 900),
  facialWhite: px(3985338, 900),
  facialRitual: px(39589557, 900),
  facialGlow: px(3985323, 900),
  facialMoist: px(3985342, 900),
  facialSooth: px(3985321, 900),
  // Brows
  browBlading: px(8826403, 900),
  browPmu: px(5178001, 900),
  browPluck: px(6135623, 900),
  browClose: px(3373743, 900),
  browSalon: px(5128265, 900),
  browTweeze: px(6135624, 900),
  // Waxing
  waxStrip: px(6763116, 900),
  waxSalon: px(35103884, 900),
  waxHand: px(6763570, 900),
  waxLegs: px(5240783, 900),
  waxLaser: px(16032305, 900),
  waxBrush: px(6811179, 900),
  // Portraits (team / hero accents)
  portraitGlow: px(16658734, 800),
  portraitElegant: px(39641509, 800),
  portraitGold: px(22619770, 800),
  portraitLipstick: px(33930152, 800),
  portraitBold: px(6835450, 800),
  portraitSmile: px(14471496, 800),
  portraitNatural: px(27898856, 800),
  // Flatlay / product
  flatMarble: px(6963132, 900),
  flatPerfume: px(4938265, 900),
  flatProducts: px(11632933, 900),
  flatDesk: px(30173373, 900),
  flatRoses: px(6724351, 900),
  flatGift: px(30399676, 900),
  flatPetals: px(4041385, 900),
  flatRoller: px(8904066, 900),
  // Generated textures
  silk: "/images/blush-silk.jpg",
  plum: "/images/royal-plum.jpg",
};

/* ------------------------------ categories ------------------------------ */

export const CATEGORIES: {
  slug: string;
  title: string;
  blurb: string;
  image: string;
}[] = [
  {
    slug: "lash-extensions",
    title: "Lash Extensions",
    blurb:
      "Beautiful, comfortable lashes tailored to each client's eyes and personal style — classic, volume, cat-eye, hybrid, wispy and natural-looking artistry.",
    image: IMG.lashApply2,
  },
  {
    slug: "lash-refills",
    title: "Lash Refills",
    blurb:
      "Keep your set full and flawless. Quick 30-minute and 1-hour refill appointments to refresh your lashes between full sets.",
    image: IMG.lashTweezers,
  },
  {
    slug: "lash-care",
    title: "Lash Lift & Lash Care",
    blurb:
      "Lifts, clusters, strips, removals and deep lash cleaning — everything your natural and extended lashes need to stay healthy.",
    image: IMG.lashClose,
  },
  {
    slug: "semi-permanent-brows",
    title: "Semi-Permanent Brows",
    blurb:
      "Microblading, microshading and combo brows by certified PMU artists. Wake up with perfect brows every single day.",
    image: IMG.browBlading,
  },
  {
    slug: "deluxe-brows",
    title: "Deluxe Brows & Lamination",
    blurb:
      "Precision shaping, tinting and brow lamination for feathery, fuller-looking arches that frame your features beautifully.",
    image: IMG.browClose,
  },
  {
    slug: "organic-facials",
    title: "Organic Facials",
    blurb:
      "Clean, organic skincare rituals that leave you glowing — deep cleanse, hydration and our signature 24k gold radiance treatment.",
    image: IMG.facialSpa,
  },
  {
    slug: "waxing-threading",
    title: "Waxing & Threading",
    blurb:
      "Gentle, precise hair removal with premium waxes and traditional threading for silky-smooth, lasting results.",
    image: IMG.waxSalon,
  },
];

/* ------------------------------ memberships ------------------------------ */

export type Tier = {
  slug: string;
  name: string;
  priceCents: number;
  annualCents: number;
  tagline: string;
  featured?: boolean;
  perks: string[];
};

export const TIERS: Tier[] = [
  {
    slug: "duchess",
    name: "The Duchess",
    priceCents: 699900,
    annualCents: 7559000,
    tagline: "Your monthly moment of me-time",
    perks: [
      "One classic lash refill every month",
      "One deluxe brow sculpt & shape monthly",
      "5% OFF all additional services",
      "Birthday month treat",
      "Priority booking & member rates",
    ],
  },
  {
    slug: "vi-queen",
    name: "V.I.Queen",
    priceCents: 1299900,
    annualCents: 14039000,
    tagline: "Our signature royal experience",
    featured: true,
    perks: [
      "FREE full lash set on joining",
      "Two lash refills every month",
      "One signature organic facial monthly",
      "One deluxe brow sculpt monthly",
      "10% OFF all additional services",
      "Birthday discounts & surprises",
      "Complimentary product samples",
      "VIP priority booking, always",
    ],
  },
  {
    slug: "royal-empress",
    name: "Royal Empress",
    priceCents: 1999900,
    annualCents: 21599000,
    tagline: "Total indulgence, all year round",
    perks: [
      "FREE full set + two refills monthly",
      "One Royal Gold radiance facial monthly",
      "Unlimited brow threading",
      "15% OFF all additional services",
      "Free monthly lash bath & deep clean",
      "Birthday month luxury gift box",
      "Quarterly guest pass for a friend",
      "Complimentary product samples",
    ],
  },
];

export const MEMBERSHIP_TERMS = [
  {
    title: "6-Month Commitment",
    text: "All Royalty Memberships begin with a six-month minimum term so you can enjoy uninterrupted royal treatment and lock in member pricing.",
  },
  {
    title: "No Deposit to Reschedule",
    text: "Members reschedule with zero deposit when giving at least 24 hours notice — your royal schedule stays flexible.",
  },
  {
    title: "Pause Anytime",
    text: "Travelling or taking a break? Pause your membership for a small KSh 500/month pause fee, up to two months per year.",
  },
  {
    title: "Annual Option",
    text: "Prefer to pay once? Prepay for 12 months and save 10% — the annual royal plan for our most devoted queens.",
  },
];

/* -------------------------------- offers -------------------------------- */

export const OFFERS: {
  badge: string;
  title: string;
  text: string;
  code: string;
  note: string;
  image: string;
}[] = [
  {
    badge: "New Clients",
    title: "KSh 1,000 OFF Your First Visit",
    text: "A royal welcome: enjoy KSh 1,000 off any full lash set, facial or brow service on your very first visit.",
    code: "ROYAL1000",
    note: "New clients · One per person",
    image: IMG.lashClient,
  },
  {
    badge: "Referral Royalty",
    title: "Refer a Queen, Earn KSh 1,500",
    text: "Share the love — when a friend books with your name, you both receive KSh 1,500 credit toward your next visit.",
    code: "QUEENREF",
    note: "Unlimited referrals",
    image: IMG.flatGift,
  },
  {
    badge: "Birthday Queen",
    title: "15% OFF Your Birthday Month",
    text: "Celebrate you. Enjoy 15% off any single service throughout your birthday month — crown optional but encouraged.",
    code: "BDAYQUEEN",
    note: "Valid ID required · One use",
    image: IMG.flatRoses,
  },
  {
    badge: "Midweek Indulgence",
    title: "Free Lash Bath with Any Refill",
    text: "Tuesdays & Wednesdays only — every refill appointment includes a complimentary lash bath and deep clean.",
    code: "MIDWEEK",
    note: "Tue & Wed · Refills only",
    image: IMG.lashTools,
  },
  {
    badge: "Gift of Gold",
    title: "KSh 1,500 Bonus on Gift Cards",
    text: "Purchase a gift card of KSh 10,000 or more and we'll top it up with an extra KSh 1,500 — on the house.",
    code: "GOLDGIFT",
    note: "Gift cards of KSh 10,000+",
    image: IMG.flatMarble,
  },
];

/* ----------------------------- testimonials ----------------------------- */

export const TESTIMONIALS: {
  name: string;
  service: string;
  rating: number;
  text: string;
}[] = [
  {
    name: "Wanjiku M.",
    service: "Queen Bee Mega Volume Set",
    rating: 5,
    text: "Liviah understood exactly what I wanted before I even finished explaining. My lashes are full, comfortable and three weeks later they still look freshly done. I will never go anywhere else.",
  },
  {
    name: "Achieng O.",
    service: "V.I.Queen Member",
    rating: 5,
    text: "The membership is worth every shilling. My refills, facials and brows are all taken care of, and the studio feels like a little palace — warm blankets, soft music, pure peace.",
  },
  {
    name: "Natasha K.",
    service: "Microblading",
    rating: 5,
    text: "I was nervous about microblading but Zuri mapped my brows so carefully and talked me through everything. They healed beautifully and look completely natural. Ten out of ten.",
  },
  {
    name: "Cynthia W.",
    service: "Royal Gold Radiance Facial",
    rating: 5,
    text: "The gold facial is an experience, not just a treatment. My skin was glowing for my wedding and the aromatherapy nearly put me to sleep. Absolute luxury.",
  },
  {
    name: "Mercy N.",
    service: "Princess Hybrid Set",
    rating: 5,
    text: "Booking online was so easy and I loved getting the SMS reminders. Nia is gentle, fast and funny — 90 minutes flew by and I walked out feeling like royalty.",
  },
  {
    name: "Brenda A.",
    service: "Brow Lamination & Waxing",
    rating: 5,
    text: "Clean studio, kind people, flawless results. The lamination gave me the fluffy brows I've always wanted and the wax was genuinely the least painful I've ever had.",
  },
];

/* ---------------------------------- faqs --------------------------------- */

export const FAQS: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: "Lash Services",
    items: [
      {
        q: "How long do eyelash extensions last?",
        a: "With proper aftercare, your extensions last 2–3 weeks before needing a refill. Natural lash shedding means most clients book a 30-minute or 1-hour refill every 2–3 weeks to keep their set full.",
      },
      {
        q: "Which lash style should I choose?",
        a: "Classic gives a natural mascara look, hybrid is wispy and textured, volume is fuller and fluffier, and cat-eye elongates the outer corners. During your appointment we assess your eye shape, natural lashes and personal style, then tailor the perfect map for you.",
      },
      {
        q: "How long does a lash appointment take?",
        a: "Full sets take roughly 2 to 2.5 hours depending on the style. Quick services like refills, removals, clusters and lash baths take approximately 30 minutes — perfect for a lunch-break visit.",
      },
      {
        q: "Do lash extensions damage my natural lashes?",
        a: "Not when applied correctly. We use lightweight, premium lashes and isolate each natural lash. We also offer lash baths and gentle removals to keep your natural lashes healthy between sets.",
      },
      {
        q: "Can I wear makeup or mascara with extensions?",
        a: "You won't need mascara — but if you must, use only extension-safe, water-based formulas and avoid waterproof products and oil-based removers.",
      },
    ],
  },
  {
    category: "Brow Services",
    items: [
      {
        q: "What is the difference between microblading and microshading?",
        a: "Microblading creates hair-like strokes for a natural look, ideal for normal to dry skin. Microshading is a soft, powdered ombré effect, better for oily or sensitive skin. Combo brows blend both techniques for the best of each.",
      },
      {
        q: "How long do semi-permanent brows last?",
        a: "Results typically last 12–24 months depending on skin type and lifestyle. A perfecting touch-up 6–8 weeks after your first session is recommended and can be booked as a follow-up.",
      },
      {
        q: "Does microblading hurt?",
        a: "We apply a topical numbing cream before and during the procedure, so most clients feel only light pressure. Comfort is a royal priority.",
      },
      {
        q: "How should I prepare for brow lamination?",
        a: "Arrive with clean, product-free brows and avoid tweezing or waxing for at least 48 hours before your appointment. Results last 4–6 weeks with proper aftercare.",
      },
    ],
  },
  {
    category: "Facials",
    items: [
      {
        q: "Are your facials suitable for sensitive skin?",
        a: "Yes. Our facials use certified organic, fragrance-conscious products, and every treatment begins with a skin analysis so we can tailor each step to your skin's needs.",
      },
      {
        q: "How often should I get a facial?",
        a: "For lasting glow we recommend a professional facial every 4–6 weeks, which aligns with your skin's natural renewal cycle. Members enjoy a monthly facial as part of their plan.",
      },
      {
        q: "What should I avoid after a facial?",
        a: "Skip heavy makeup, direct sun, saunas and active exfoliants (retinol, AHAs) for 24–48 hours, and keep skin hydrated with a gentle moisturiser and SPF.",
      },
    ],
  },
  {
    category: "Booking & Cancellation Policy",
    items: [
      {
        q: "How do I book an appointment?",
        a: "Book instantly on our website, send us a WhatsApp message on 0769 899 548, or call 0769 899 548 / 0141 560 955. Online booking shows real-time availability for each technician.",
      },
      {
        q: "Is a deposit required?",
        a: "Yes — a small deposit secures your appointment and is fully deducted from your service total on the day. Members with a 6-month commitment reschedule deposit-free with 24 hours notice.",
      },
      {
        q: "What if I need to cancel or reschedule?",
        a: "Life happens. Reschedule or cancel free of charge up to 24 hours before your appointment via your client portal, WhatsApp or phone. Late cancellations may forfeit the deposit.",
      },
      {
        q: "Will I get a confirmation and reminder?",
        a: "Immediately after booking you'll receive an email and SMS confirmation with your booking reference, followed by an automated reminder 24 hours before your appointment.",
      },
    ],
  },
  {
    category: "Aftercare Instructions",
    items: [
      {
        q: "How do I care for my lash extensions?",
        a: "Keep lashes dry for the first 24 hours, avoid oil-based products near the eyes, brush daily with the spoolie we provide, sleep on your back if possible, and cleanse 2–3 times a week with a lash-safe foam.",
      },
      {
        q: "How do I care for my brows after PMU or lamination?",
        a: "For PMU, keep brows dry for 7–10 days, no picking or scrubbing, and apply the healing balm as directed. After lamination, avoid water, steam and brow products for 24 hours, then condition nightly with castor oil or brow serum.",
      },
      {
        q: "Any tips after waxing?",
        a: "Avoid heat, friction, gym sessions and sun exposure for 24 hours. Exfoliate gently after 48 hours and moisturise daily to prevent ingrown hairs and keep skin silky.",
      },
    ],
  },
];

/* ------------------------------- core values ------------------------------ */

export const VALUES = [
  {
    icon: "Gem",
    title: "Quality",
    text: "Premium products, certified techniques and obsessive attention to detail in every single appointment.",
  },
  {
    icon: "Fingerprint",
    title: "Individuality",
    text: "No two faces are the same. Every lash map, brow shape and facial is tailored to your unique features and style.",
  },
  {
    icon: "Flower2",
    title: "Relaxation",
    text: "Aromatherapy, warm blankets and uplifting music — our studio is your sanctuary from the city.",
  },
  {
    icon: "GraduationCap",
    title: "Education",
    text: "We teach you how to care for your lashes, brows and skin so your results last long after you leave.",
  },
] as const;

export const INSTAGRAM_IMAGES = [
  { src: IMG.lashApply2, alt: "Wispy hybrid lash extensions close-up" },
  { src: IMG.lashesPortrait, alt: "Fresh volume lash set" },
  { src: IMG.portraitLipstick, alt: "Client glow-up after a royal facial" },
  { src: IMG.facialRitual, alt: "Organic facial ritual in progress" },
  { src: IMG.flatGift, alt: "Roses and gift wrap at Liviah Lash Tech" },
  { src: IMG.browClose, alt: "Perfectly laminated brows" },
];
