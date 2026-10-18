import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, Fingerprint, Flower2, Gem, GraduationCap } from "lucide-react";
import { IMG, VALUES } from "@/lib/content";
import { SITE } from "@/lib/site";
import { PageHero, RoyalCta, SectionTitle } from "@/components/atoms";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story and values of Liviah Lash Tech Esthetics Spa.",
  alternates: { canonical: "/about" },
};

const VALUE_ICONS = { Gem, Fingerprint, Flower2, GraduationCap } as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story · Our People"
        title={
          <>
            Built on <span className="text-gold-grad italic">soft power</span>
          </>
        }
        sub="How a single lash bed and a big belief became Nairobi's most-loved little palace."
        image={IMG.spaTable}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionTitle
              align="left"
              eyebrow="The Liviah Story"
              title={
                <>
                  Every woman deserves a place that treats her like{" "}
                  <span className="text-gold-grad italic">royalty</span>
                </>
              }
            />
            <Reveal delay={0.1}>
              <div className="mt-7 space-y-5 leading-relaxed text-ink/65">
                <p>
                  {SITE.name} opened its doors in {SITE.established} with one lash
                  bed, a suitcase of premium lashes and a stubborn belief: beauty
                  in this city deserved better — better products, better training,
                  and infinitely better treatment of the women who walked through
                  the door.
                </p>
                <p>
                  Our mission has never changed. We create beautiful, comfortable
                  lashes tailored to each client&apos;s eyes and personal style — and
                  we pair them with organic facials, brow artistry and gentle
                  waxing, delivered in a space designed to lower your shoulders
                  the moment you arrive.
                </p>
                <p>
                  We welcome every client with care, attention to detail, and a
                  commitment to making each visit feel special.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-5">
                <BadgeCheck className="h-8 w-8 text-gold-deep" />
                <p className="font-display text-xl italic text-rose-deep">
                  Focused on quality · Care · Detail
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="relative">
            <div className="gold-frame overflow-hidden rounded-[2rem]">
              <Image
                src={IMG.portraitElegant}
                alt="Liviah Wanjiru, founder and master lash artist"
                width={640}
                height={780}
                className="h-[520px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-6 rounded-2xl bg-plum-deep px-7 py-5 shadow-2xl">
              <p className="font-display text-2xl italic text-gold-light">
                Liviah Wanjiru
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-blush/70">
                Founder &amp; Master Lash Artist
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <Image
          src={IMG.silk}
          alt=""
          fill
          className="object-cover opacity-60"
          aria-hidden
        />
        <div className="absolute inset-0 bg-cream/70" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="What We Stand For"
            title={
              <>
                The four <span className="text-gold-grad italic">royal values</span>
              </>
            }
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Icon = VALUE_ICONS[v.icon as keyof typeof VALUE_ICONS] ?? Gem;

              return (
                <Reveal key={v.title} delay={i * 0.09}>
                  <div className="card-luxe h-full px-7 py-9 text-center">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blush to-blush-deep text-rose-deep">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl text-plum">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-ink/60">
                      {v.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <RoyalCta
        title={
          <>
            Discover your <span className="text-gold-grad italic">royal glow</span>
          </>
        }
        sub="Book your first appointment or contact us to ask about our treatments and current offers."
      />
    </>
  );
}
