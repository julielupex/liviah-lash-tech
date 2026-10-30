
import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { FAQS, IMG } from "@/lib/content";
import { SITE } from "@/lib/site";
import { PageHero, RoyalCta } from "@/components/atoms";
import { FAQAccordion } from "@/components/interactive";

export const metadata: Metadata = {
  title: "FAQ & Aftercare",
  description:
    "Answers about lash extensions, booking and cancellation policies, and aftercare instructions to help you maintain your results.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.flatMap((g) =>
    g.items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        eyebrow="Questions · Policies · Aftercare"
        title={
          <>
            Everything a queen{" "}
            <span className="text-gold-grad italic">should know</span>
          </>
        }
        sub="Straight answers on lash services, booking policies, and the aftercare rituals that help keep your results flawless."
        image={IMG.lashClient}
      />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <FAQAccordion items={FAQS} />

        <div className="mt-16 rounded-3xl border border-gold/25 bg-blush/50 p-8 text-center md:p-10">
          <p className="font-display text-2xl text-plum md:text-3xl">
            Still wondering something?
          </p>

          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/60">
            Message us any time — a real human (usually Liviah herself) replies
            on WhatsApp{" "}
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-rose-deep underline decoration-gold/50 underline-offset-4"
            >
              {SITE.phoneMobile}
            </a>{" "}
            or {SITE.phoneLine}.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn-gold !px-7 !py-3 !text-[11px]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <RoyalCta
        title={
          <>
            Answers received —{" "}
            <span className="text-gold-grad italic">now relax</span>
          </>
        }
        sub="Book your appointment online in under two minutes with live availability."
      />
    </>
  );
}
