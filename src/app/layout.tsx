
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Jost } from "next/font/google";
import { SITE } from "@/lib/site";
import { Header, WhatsAppFloat } from "@/components/chrome";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.fullName} · ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Nairobi's premier luxury esthetics spa — lash extensions, organic facials, semi-permanent brows, brow lamination and gentle body waxing. Book online in under two minutes.",
  keywords: [
    "lash extensions Nairobi",
    "esthetics spa",
    "microblading",
    "organic facials",
    "brow lamination",
    "body waxing",
    "Liviah Lash Tech",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.fullName,
    title: `${SITE.fullName} · ${SITE.tagline}`,
    description:
      "Lash extensions, organic facials, brow artistry and gentle waxing in Nairobi CBD. Making every client feel like a queen.",
    images: [
      {
        url: "https://images.pexels.com/photos/8554941/pexels-photo-8554941.jpeg?auto=compress&cs=tinysrgb&w=1200",
        width: 1200,
        height: 630,
        alt: "Lash extension artistry at Liviah Lash Tech Esthetics Spa",
      },
    ],
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#2c1a21",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["HealthAndBeautyBusiness", "DaySpa", "BeautySalon"],
  name: SITE.fullName,
  alternateName: SITE.name,
  slogan: SITE.tagline,
  description:
    "Premium beauty destination specializing in lash extensions, organic facials, brow services and body waxing.",
  url: SITE.url,
  telephone: SITE.phoneMobileRaw,
  email: SITE.email,
  priceRange: "KSh 500 - KSh 18,000",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "16:00",
    },
  ],
  sameAs: [SITE.instagram, SITE.facebook, SITE.pinterest],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "512",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
