import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/ui/SmoothScrolling";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modu Ramen | Authentic Japanese Ramen in Jacksonville",
  description: "Jacksonville's best authentic Japanese ramen. Crafting Umami Since 2000. Experience Chef Kim's legacy of flavor.",
  keywords: ["Ramen in Jacksonville", "Jacksonville ramen", "best ramen in florida", "authentic tonkotsu", "Modu Ramen", "Japanese restaurant Jacksonville"],
  openGraph: {
    title: "Modu Ramen | Authentic Japanese Ramen in Jacksonville",
    description: "Experience the art of authentic Japanese ramen in Jacksonville, FL. Featuring 24-hour broth and handcrafted noodles.",
    url: "https://kprince0.github.io/ModuHomepage",
    siteName: "Modu Ramen",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://kprince0.github.io/ModuHomepage/images/menu/Pork%20Bulgogi.png",
        width: 1200,
        height: 630,
        alt: "Modu Ramen Signature Bowl",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modu Ramen | Authentic Japanese Ramen",
    description: "Jacksonville's premier destination for authentic Japanese ramen and craft cocktails.",
    images: ["https://kprince0.github.io/ModuHomepage/images/menu/Pork%20Bulgogi.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Modu Ramen",
  "image": "https://kprince0.github.io/ModuHomepage/images/menu/Pork%20Bulgogi.png",
  "description": "Jacksonville's premier authentic Japanese ramen restaurant, featuring 24-hour tonkotsu broth by Chef Dongil Kim.",
  "@id": "https://kprince0.github.io/ModuHomepage",
  "url": "https://kprince0.github.io/ModuHomepage",
  "telephone": "+1-904-800-3498",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8602 Baymeadows Rd",
    "addressLocality": "Jacksonville",
    "addressRegion": "FL",
    "postalCode": "32256",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.21855,
    "longitude": -81.55465
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
      "opens": "11:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday", "Saturday"],
      "opens": "11:00",
      "closes": "21:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "11:30",
      "closes": "21:00"
    }
  ],
  "menu": "https://kprince0.github.io/ModuHomepage/#menu",
  "servesCuisine": "Japanese, Ramen",
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-charcoal text-paper font-sans overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
