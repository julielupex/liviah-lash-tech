import type { Metadata } from "next";
import { BadgeCheck, Gift, Infinity as InfinityIcon, MailOpen } from "lucide-react";
import { IMG } from "@/lib/content";
import { PageHero, SectionTitle } from "@/components/atoms";
import { Reveal } from "@/components/motion";
import { GiftCardForm } from "@/components/portal-forms";

export const metadata: Metadata = {
  title: "Gift Cards",
  description:
    "Give the gift of royalty — digital gift cards from KSh 500, emailed instantly with your personal message. Bonus KSh 1,500 on cards of KSh 10,000 or more.",
  alternates: { canonical: "/gift-cards" },
};

export default function GiftCardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Gift Cards"
        title={
          <>
            Give the gift of <span className="text-gold-grad italic">royalty</span>
          </>
        }
        sub="Birthdays, brides, thank-yous and just-becauses — a Liviah gift card never misses. Delivered by email, instantly."
        image={IMG.flatGift}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-16 grid gap-4 sm:grid-cols-3">
          {[
            { icon: MailOpen, t: "Emailed Instantly", d: "A beautiful digital card lands in their inbox the moment you check out." },
            { icon: InfinityIcon, t: "Valid 12 Months", d: "Redeemable against every service on the royal menu — lash, brow, skin or wax." },
            { icon: BadgeCheck, t: "Gift of Gold Bonus", d: "Cards of KSh 10,000+ are topped up with an extra KSh 1,500, on the house." },
          ].map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="card-luxe flex h-full items-start gap-4 px-6 py-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold text-plum-deep">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-lg text-plum">{t}</p>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ink/55">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionTitle
          eyebrow="Royal Gifting Suite"
          title={
            <>
              Design your <span className="text-gold-grad italic">gift card</span>
            </>
          }
          sub="Watch the card update live as you write — then send it straight to their heart (via their inbox)."
        />
        <div className="mt-14">
          <GiftCardForm />
        </div>

        <p className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-2 text-center text-xs uppercase tracking-[0.2em] text-ink/40">
          <Gift className="h-4 w-4 text-gold" /> Physical gift boxes available at the studio
        </p>
      </section>
    </>
  );
}
