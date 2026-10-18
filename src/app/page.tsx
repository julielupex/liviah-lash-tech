import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Clock3,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

import { IMG } from "@/lib/content";
import { Reveal } from "@/components/motion";
import { SectionTitle } from "@/components/atoms";

const WHATSAPP_NUMBER = "254769899548";
const PHONE_NUMBER = "+254769899548";
const SECOND_PHONE_NUMBER = "0141560955";

const services = [
  {
    name: "Classic Lashes",
    description:
      "A timeless, defined look that enhances your natural beauty without feeling overdone.",
    image: IMG.lashApply1,
  },
  {
    name: "Volume Lashes",
    description:
      "Fuller, more dramatic lashes for a soft, glamorous finish.",
    image: IMG.lashApply2,
  },
  {
    name: "Cat-Eye Lashes",
    description:
      "An elongated outer-corner effect for a lifted, elegant appearance.",
    image: IMG.lashTweezers,
  },
  {
    name: "Hybrid Lashes",
    description:
      "A balanced combination of classic definition and fluffy volume.",
    image: IMG.lashClient,
  },
  {
    name: "Wispy Lashes",
    description:
      "Textured lashes with delicate lengths for a soft, fluttery finish.",
    image: IMG.lashesPortrait,
  },
  {
    name: "Natural-Looking Lashes",
    description:
      "Subtle enhancement designed for an effortless, everyday look.",
    image: IMG.lashClose,
  },
  {
    name: "Lash Removal",
    description:
      "Have existing extensions removed carefully. Ask about availability when booking.",
    image: IMG.lashTools,
  },
];

const gallery = [
  { image: IMG.lashApply1, alt: "Eyelash extension application" },
  { image: IMG.lashClose, alt: "Close-up lash styling" },
  { image: IMG.lashesPortrait, alt: "Wispy lash look" },
  { image: IMG.lashClient, alt: "Lash extension beauty detail" },
];

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function HomePage() {
  return (
    <main className="overflow-x-clip bg-cream text-ink">
      {/* Hero */}
      <section className="relative flex min-h-[min(700px,88svh)] items-center overflow-hidden bg-plum-deep max-sm:min-h-[680px]">
        <Image
          src={IMG.lashHero}
          alt="Eyelash beauty and extension styling"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-plum-deep/95 via-plum-deep/75 to-plum-deep/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/80 via-transparent to-plum-deep/35" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36 md:px-10 lg:py-36">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-gold-light">LIVIAH LASH TECH</p>

            <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.45rem,9.5vw,3.5rem)] leading-[1.04] text-white sm:mt-6 sm:text-6xl md:text-7xl lg:text-[5.6rem]">
              Lashes that feel like{" "}
              <span className="text-gold-grad italic">you.</span>
            </h1>

            <p className="mt-4 max-w-xl text-[15px] leading-7 text-blush/90 sm:mt-7 sm:text-base md:text-lg md:leading-relaxed">
              Beautiful, comfortable lashes tailored to your eyes and
              personal style. Discover your look with Liviah Lash Tech.
            </p>

            <div className="mt-6 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={whatsappLink(
                  "Hi Liviah! I would like to book a lash appointment. Please share your available services and appointment times.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex min-h-14 w-full items-center justify-center gap-2 !px-4 !py-4 text-center text-sm sm:w-auto sm:!px-7 sm:text-base"
              >
                <MessageCircle className="h-5 w-5 shrink-0" />
                Book on WhatsApp
              </a>

              <a
                href="#services"
                className="btn-outline-light inline-flex min-h-14 w-full items-center justify-center gap-2 !px-4 text-center text-sm sm:w-auto sm:!px-6 sm:text-base"
              >
                Explore Services
                <ArrowDown className="h-4 w-4 shrink-0" />
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-3 text-sm text-blush/90 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <span className="flex items-center gap-2">
                <Heart className="h-4 w-4 shrink-0 text-gold" />
                Styles tailored to you
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                Mobile appointments
              </span>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/70 sm:bottom-7">
          <a
            href="#welcome"
            aria-label="Scroll to learn about Liviah Lash Tech"
            className="flex min-h-10 flex-col items-center justify-center gap-1 text-[9px] uppercase tracking-[0.2em] sm:gap-2 sm:tracking-[0.25em]"
          >
            Discover your look
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section
        id="welcome"
        className="scroll-mt-24 py-14 sm:py-20 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-12 sm:px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mb-4 sm:mb-6 lg:mb-0">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem]">
              <Image
                src={IMG.lashBed}
                alt="Beauty treatment setting"
                width={800}
                height={950}
                sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 48px), 50vw"
                className="h-[min(82vw,340px)] min-h-[280px] w-full object-cover sm:h-[460px] lg:h-[560px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/35 to-transparent" />
            </div>

            <div className="absolute -bottom-4 right-2 max-w-[190px] rounded-xl border border-gold/25 bg-white p-3.5 shadow-xl sm:-bottom-5 sm:right-4 sm:max-w-[230px] sm:rounded-2xl sm:p-5 lg:-right-5">
              <Sparkles className="h-5 w-5 text-gold-deep" />
              <p className="mt-2 font-display text-lg leading-snug text-plum sm:text-xl">
                Your eyes. Your style.
              </p>
              <p className="mt-1 text-xs leading-relaxed text-ink/60">
                A lash look chosen around your preferences.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="eyebrow">A little about us</p>

            <h2 className="mt-3 font-display text-[clamp(1.9rem,7vw,2.5rem)] leading-tight text-plum sm:mt-4 sm:text-4xl md:text-5xl">
              Beauty should feel{" "}
              <span className="text-gold-grad italic">personal.</span>
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-ink/70 sm:mt-6">
              At Liviah Lash Tech, the goal is simple: help every client
              find a lash style that complements their eyes, personality,
              and everyday life.
            </p>

            <p className="mt-4 text-[15px] leading-7 text-ink/70">
              From understated natural lashes to fuller, more expressive
              styles, you can discuss the look you want before arranging
              your appointment.
            </p>

            <ul className="mt-6 space-y-4 sm:mt-7">
              {[
                "Lash styles to suit different preferences",
                "Appointments arranged directly with Liviah",
                "Mobile service with location confirmed before booking",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-ink/75"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blush text-rose-deep">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(
                "Hi Liviah! I would like to learn more about your lash services.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-rose mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 !px-5 sm:mt-8 sm:w-auto"
            >
              Talk to Liviah
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="scroll-mt-20 bg-white/55 py-14 sm:py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <SectionTitle
            eyebrow="The lash menu"
            title={
              <>
                Find your{" "}
                <span className="text-gold-grad italic">signature look.</span>
              </>
            }
            sub="Explore the available styles and contact Liviah to discuss the best option for you."
          />

          <div className="mt-8 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                key={service.name}
                delay={(index % 3) * 0.08}
                className="h-full"
              >
                <article className="card-luxe group flex h-full flex-col overflow-hidden transition-all duration-300 motion-safe:hover:-translate-y-1.5">
                  <div className="relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={640}
                      height={460}
                      sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 50vw, 33vw"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105 sm:aspect-[16/11]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/40 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-6">
                    <h3 className="font-display text-xl leading-snug text-plum sm:text-2xl">
                      {service.name}
                    </h3>

                    <p className="mt-2.5 flex-1 text-sm leading-6 text-ink/65 sm:mt-3 sm:leading-relaxed">
                      {service.description}
                    </p>

                    <a
                      href={whatsappLink(
                        `Hi Liviah! I am interested in your ${service.name.toLowerCase()} service. Please share the price and available appointment times.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex min-h-12 items-center gap-2 py-2 text-sm font-semibold leading-snug text-rose-deep transition-colors hover:text-gold-deep sm:mt-5"
                    >
                      Ask about this service
                      <ArrowRight className="h-4 w-4 shrink-0" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="scroll-mt-20 py-14 sm:py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <SectionTitle
            eyebrow="The beauty gallery"
            title={
              <>
                Every detail,{" "}
                <span className="text-gold-grad italic">
                  beautifully styled.
                </span>
              </>
            }
            sub="Explore lash inspiration and find a look to discuss with Liviah."
          />

          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-12 sm:gap-5 md:grid-cols-4">
            {gallery.map((item, index) => (
              <Reveal key={item.alt} delay={index * 0.07}>
                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={500}
                    height={650}
                    sizes="(max-width: 639px) calc((100vw - 42px) / 2), (max-width: 767px) 25vw, 25vw"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/35 to-transparent opacity-70" />
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-ink/55 sm:mt-5">
            These images are for visual inspiration. Replace them with
            Liviah&apos;s own work photos when available so customers can see
            her actual results.
          </p>
        </div>
      </section>

      {/* Booking */}
      <section
        id="booking"
        className="relative scroll-mt-20 overflow-hidden bg-plum-deep py-14 sm:py-20 md:py-28"
      >
        <Image
          src={IMG.plum}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          aria-hidden
        />

        <div className="absolute inset-0 bg-plum-deep/65" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-gold-light">
              Your next lash appointment
            </p>

            <h2 className="mt-4 font-display text-[clamp(1.9rem,7.5vw,3rem)] leading-tight text-white sm:mt-5 sm:text-4xl md:text-6xl">
              Ready for your{" "}
              <span className="text-gold-grad italic">lash moment?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-blush/85 sm:mt-5 sm:text-base">
              Tell Liviah which style you love and where you would like
              your appointment. She will confirm availability, timing,
              pricing, and the service location with you.
            </p>

            <div className="mx-auto mt-6 flex max-w-xl items-start gap-3 rounded-xl border border-white/15 bg-white/5 px-3.5 py-4 text-left sm:mt-8 sm:gap-4 sm:rounded-2xl sm:px-5">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" />
              <p className="text-sm leading-relaxed text-blush/85">
                Ask Liviah to confirm the expected duration for your chosen
                service when booking.
              </p>
            </div>

            <a
              href={whatsappLink(
                "Hi Liviah! I would like to book a lash appointment.\n\nPreferred lash style: \nPreferred date and time: \nMy location: \n\nPlease let me know your availability and price.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 !px-4 !py-4 text-center sm:mt-9 sm:w-auto sm:!px-8"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              Book Your Appointment
            </a>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="bg-cream py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <div className="grid gap-6 border-b border-gold/20 pb-7 sm:gap-10 sm:pb-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-display text-2xl text-plum sm:text-3xl">
                Liviah{" "}
                <span className="text-gold-grad italic">Lash Tech</span>
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/60">
                Beautiful, comfortable lashes tailored to your eyes and
                personal style.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3 md:items-end">
              <a
                href={whatsappLink(
                  "Hi Liviah! I would like to enquire about your lash services.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-3 text-sm font-medium text-plum hover:text-rose-deep"
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-gold-deep" />
                WhatsApp: 0769 899 548
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex min-h-12 items-center gap-3 text-sm font-medium text-plum hover:text-rose-deep"
              >
                <Phone className="h-5 w-5 shrink-0 text-gold-deep" />
                Call: 0769 899 548
              </a>

              <a
                href={`tel:${SECOND_PHONE_NUMBER}`}
                className="inline-flex min-h-12 items-center gap-3 text-sm font-medium text-plum hover:text-rose-deep"
              >
                <Phone className="h-5 w-5 shrink-0 text-gold-deep" />
                Alternative: 0141 560 955
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-5 text-xs text-ink/45 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
            <p>© {new Date().getFullYear()} Liviah Lash Tech.</p>
            <Link
              href="#welcome"
              className="inline-flex min-h-10 items-center transition-colors hover:text-rose-deep"
            >
              Back to top ↑
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}