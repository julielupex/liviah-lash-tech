import type { Metadata } from "next";
import { IMG } from "@/lib/content";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.fullName} collects, uses and protects your personal information across bookings, memberships, gift cards and marketing.`,
  alternates: { canonical: "/privacy" },
};

const SECTIONS: { title: string; body: string[] }[] = [
  {
    title: "1. What We Collect",
    body: [
      "Booking details: your name, email, phone number, chosen services, appointment times and any notes you share with your artist (including relevant health information you volunteer during consultations).",
      "Account & membership details: contact information, plan tier, billing preference and membership status.",
      "Payment data: deposits are processed by our payment partners (such as Stripe). We never store full card numbers on our servers.",
      "Marketing preferences: newsletter subscriptions, offer codes used and cookie preferences.",
    ],
  },
  {
    title: "2. How We Use It",
    body: [
      "To confirm, remind and manage your appointments — including automated email and SMS confirmations and 24-hour reminders.",
      "To operate memberships, gift cards, loyalty benefits and the client portal.",
      "With your consent, to send offers and news to the Royal Circle. Every marketing message includes an unsubscribe link and we honour it promptly.",
      "To keep the studio safe, sanitary and legal — including records required by health and professional licensing obligations.",
    ],
  },
  {
    title: "3. What We Never Do",
    body: [
      "We do not sell your personal information. Ever.",
      "We do not share your details with third parties except the processors required to run our services (payment processing, email/SMS delivery, map embeds) under their own strict privacy terms.",
      "We do not send marketing messages without your consent.",
    ],
  },
  {
    title: "4. Cookies",
    body: [
      "We use a small number of cookies to remember your preferences (including your cookie consent choice) and to keep the booking flow smooth. Declining cookies will not break the site, but some conveniences may reset between visits.",
    ],
  },
  {
    title: "5. Your Rights",
    body: [
      "You may request a copy, correction or deletion of your personal data at any time by emailing " + SITE.email + " or messaging us on WhatsApp. We respond within 30 days, usually far sooner.",
      "Appointment history relevant to health and safety may be retained for the period required by professional standards before deletion.",
    ],
  },
  {
    title: "6. Security & Retention",
    body: [
      "Data is stored with reputable, access-controlled providers and transmitted over encrypted connections. Only the artists and concierge who need your information to serve you can see it.",
      "We keep personal data only as long as it serves a purpose described above or is legally required.",
    ],
  },
  {
    title: "7. Contact",
    body: [
      `Privacy questions belong to the top of our inbox: ${SITE.email} · ${SITE.phoneMobile} (call or WhatsApp) · ${SITE.address}.`,
      `Last updated: ${new Date().toLocaleDateString("en-KE", { month: "long", year: "numeric" })}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Your Data, Guarded" title={<>Privacy <span className="text-gold-grad italic">Policy</span></>} sub="What we collect, why we collect it, and the promises we keep about it." image={IMG.plum} />
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
