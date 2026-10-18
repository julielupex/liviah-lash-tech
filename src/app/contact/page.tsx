import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { IMG } from "@/lib/content";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/atoms";
import { Reveal } from "@/components/motion";
import { HoursCard } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact & Visit",
  description:
    "Find Liviah Lash Tech Esthetics Spa on Kimathi Street, Nairobi CBD. Call or WhatsApp 0769 899 548 or 0141 560 955, email us, or contact us directly.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact · Directions · Hours"
        title={
          <>
            Come and <span className="text-gold-grad italic">be pampered</span>
          </>
        }
        sub="Third floor on Kimathi Street — look for the blush door with the little gold crown."
        image={IMG.spaCandles}
      />

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="space-y-8">
          <Reveal>
            <div className="card-luxe px-7 py-8">
              <p className="eyebrow">Find Us</p>
              <p className="mt-1 font-display text-2xl text-plum">
                The royal address
              </p>

              <ul className="mt-6 space-y-5 text-[14.5px] text-ink/70">
                <li className="flex gap-3.5">
                  <span className="mt-0.5 rounded-full bg-blush p-2 text-rose-deep">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>
                    {SITE.address}
                    <span className="block text-xs text-ink/45">
                      Lift access · 5 min from Kencom stage
                    </span>
                  </span>
                </li>

                <li className="flex gap-3.5">
                  <span className="mt-0.5 rounded-full bg-blush p-2 text-rose-deep">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <a
                      href={`tel:${SITE.phoneMobileRaw}`}
                      className="font-semibold text-plum hover:text-rose-deep"
                    >
                      {SITE.phoneMobile}
                    </a>
                    {" · "}
                    <a
                      href={`tel:${SITE.phoneLineRaw}`}
                      className="font-semibold text-plum hover:text-rose-deep"
                    >
                      {SITE.phoneLine}
                    </a>
                    <span className="block text-xs text-ink/45">
                      Both numbers are also on WhatsApp
                    </span>
                  </span>
                </li>

                <li className="flex gap-3.5">
                  <span className="mt-0.5 rounded-full bg-blush p-2 text-rose-deep">
                    <Mail className="h-4 w-4" />
                  </span>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-semibold text-plum hover:text-rose-deep"
                  >
                    {SITE.email}
                  </a>
                </li>

                <li className="flex gap-3.5">
                  <span className="mt-0.5 rounded-full bg-blush p-2 text-rose-deep">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <span>
                    <a
                      href={`https://wa.me/${SITE.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-plum hover:text-rose-deep"
                    >
                      Chat on WhatsApp
                    </a>
                    <span className="block text-xs text-ink/45">
                      Fastest replies — usually within minutes
                    </span>
                  </span>
                </li>

                <li className="flex gap-3.5">
                  <span className="mt-0.5 rounded-full bg-blush p-2 text-rose-deep">
                    <Clock className="h-4 w-4" />
                  </span>
                  <span>
                    Tue–Fri 9–7 · Sat 9–5 · Sun 11–4
                    <br />
                    <span className="text-xs text-ink/45">
                      Closed Mondays for rest & training
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <HoursCard />
          </Reveal>
        </div>
      </section>
    </>
  );
}