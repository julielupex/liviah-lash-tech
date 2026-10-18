import type { Metadata } from "next";
import { IMG } from "@/lib/content";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${SITE.fullName} — booking, deposits, cancellations, memberships, gift cards and website terms.`,
  alternates: { canonical: "/terms" },
};

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "1. Welcome",
    body: [
      `These Terms of Use govern your use of the ${SITE.fullName} website, online booking platform, client portal and related services (collectively, the "Services"). By using our Services you agree to these terms. If you do not agree, please enjoy our Instagram instead and book by phone.`,
      `${SITE.fullName} ("we", "us", "the studio") operates from ${SITE.address}.`,
    ],
  },
  {
    title: "2. Appointments & Deposits",
    body: [
      "Appointments are confirmed once the required deposit is paid. Deposits are deducted in full from your service total on the day of your appointment.",
      "Availability shown online is updated in real time but may change at the moment of confirmation; if your selected time becomes unavailable during checkout we will notify you immediately and offer alternatives.",
      "Please arrive 5–10 minutes early. Arrivals more than 15 minutes late may require rescheduling to protect the next client's experience.",
    ],
  },
  {
    title: "3. Cancellations & Rescheduling",
    body: [
      "You may cancel or reschedule free of charge up to 24 hours before your appointment via the client portal, WhatsApp or phone. Deposits for later cancellations may be forfeited at the studio's discretion.",
      "Active members with a 6-month commitment reschedule without a new deposit when at least 24 hours notice is given.",
      "No-shows are charged the full deposit and may be asked to prepay in full for future bookings.",
    ],
  },
  {
    title: "4. Royalty Memberships",
    body: [
      "Memberships begin with a six (6) month minimum commitment, after which they continue month-to-month until cancelled with 30 days notice.",
      "Monthly benefits do not roll over unless expressly stated. Membership discounts apply to services only and cannot be combined with other offers.",
      "Memberships may be paused for a KSh 500/month pause fee, up to two months per calendar year. Annual memberships are prepaid and non-refundable except as required by law.",
    ],
  },
  {
    title: "5. Gift Cards",
    body: [
      "Digital gift cards are valid for 12 months from purchase and are redeemable against any service. They are not redeemable for cash and cannot be replaced if the unique code is shared by the recipient.",
      "Promotional bonuses attached to gift cards cannot themselves be gifted or exchanged.",
    ],
  },
  {
    title: "6. Health & Suitability",
    body: [
      "Some services are unsuitable for certain conditions (pregnancy for some treatments, eye infections, recent procedures, allergies and similar). You agree to disclose relevant health information during consultation so our licensed artists can keep you safe.",
      "We reserve the right to decline or adapt a service where proceeding would be unsafe, always with a full explanation and an alternative offered.",
    ],
  },
  {
    title: "7. Website Use",
    body: [
      "All content on this site — text, imagery, branding, the crown logo and the Liviah look — belongs to the studio and may not be reused without written permission.",
      "The Services are provided \"as is\". While we work hard to keep bookings, pricing and information accurate, errors may occur and we will honour or correct them in the way most generous to you, within reason.",
    ],
  },
  {
    title: "8. Contact",
    body: [
      `Questions about these Terms? Email ${SITE.email}, WhatsApp ${SITE.phoneMobile} or write to us at ${SITE.address}.`,
      `Last updated: ${new Date().toLocaleDateString("en-KE", { month: "long", year: "numeric" })}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="The Fine Print" title={<>Terms of <span className="text-gold-grad italic">Use</span></>} sub="Clear, fair and written in plain language — exactly as a queen deserves." image={IMG.plum} />
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-2xl text-plum">{s.title}</h2>
              <div className="mt-3 space-y-3 text-[14.5px] leading-relaxed text-ink/65">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
