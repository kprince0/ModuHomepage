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
  title: "Modu Ramen | Best Authentic Japanese Ramen in Jacksonville",
  description: "Jacksonville's premier destination for the best authentic Japanese ramen. Featuring our signature 18-hour slow-cooked pork bone broth, handcrafted flavor balance, and Chef Kim's 26-year culinary mastery.",
  keywords: ["best ramen jacksonville", "ramen jacksonville", "tonkotsu ramen jacksonville", "japanese ramen jacksonville", "authentic japanese ramen jacksonville", "tantanmen jacksonville", "bingsu jacksonville", "ramen near me jacksonville", "baymeadows ramen"],
  openGraph: {
    title: "Modu Ramen | Best Authentic Japanese Ramen in Jacksonville",
    description: "Experience the art of authentic Japanese ramen in Jacksonville, FL. Featuring our signature 18-hour broth and chef-driven technique.",
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
  "description": "Jacksonville's premier destination for authentic Japanese ramen and Korean fusion. Famous for our 18-hour pork bone broth, tonkotsu, tantanmen, and dessert bingsu.",
  "@id": "https://kprince0.github.io/ModuHomepage",
  "url": "https://kprince0.github.io/ModuHomepage",
  "telephone": "+1-904-253-3454",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8602 Baymeadows Rd",
    "addressLocality": "Jacksonville",
    "addressRegion": "FL",
    "postalCode": "32256",
    "addressCountry": "US"
  },
  "servesCuisine": ["Japanese", "Ramen", "Korean Fusion", "Asian"],
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
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
  "sameAs": [
    "https://www.instagram.com/modu.ramen/",
    "https://www.facebook.com/moduramen/",
    "https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AGD47"
  ]
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
        
        {/* Sticky Mobile Footer CTA */}
        <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-charcoal/90 backdrop-blur-md border-t border-gold/20 p-4 pb-6 flex gap-3 justify-center shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
          <a
            href="https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AGD47"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-4 bg-gold text-charcoal text-center uppercase tracking-widest text-sm font-bold active:scale-95 transition-transform"
          >
            Reserve
          </a>
          <a
            href="https://moduramennzti.web.ordersave.com/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-4 border border-gold text-gold text-center uppercase tracking-widest text-sm font-bold active:scale-95 transition-transform"
          >
            Order
          </a>
        </div>
      </body>
    </html>
  );
}
