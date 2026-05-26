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
  metadataBase: new URL("https://moduramen.com"),
  title: "Best Authentic Japanese Ramen in Jacksonville | Modu Ramen",
  description: "Modu Ramen serves the best authentic Japanese ramen in Jacksonville, FL. Chef Kim's 26-year mastery delivers an 18-hour slow-cooked tonkotsu broth on Baymeadows Rd. Open daily 11am.",
  keywords: ["best ramen jacksonville", "ramen jacksonville", "tonkotsu ramen jacksonville", "japanese ramen jacksonville", "authentic japanese ramen jacksonville", "tantanmen jacksonville", "bingsu jacksonville", "ramen near me jacksonville", "baymeadows ramen"],
  alternates: {
    canonical: "https://moduramen.com",
  },
  authors: [{ name: "Chef Dongil Kim", url: "https://moduramen.com/chef-kim" }],
  creator: "Modu Ramen",
  publisher: "Modu Ramen",
  openGraph: {
    title: "Best Authentic Japanese Ramen in Jacksonville | Modu Ramen",
    description: "Experience 26 years of culinary mastery. Our 18-hour broth defines the best Japanese Ramen in Jacksonville. Order online at Modu Ramen.",
    url: "https://moduramen.com",
    siteName: "Modu Ramen",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://moduramen.com/images/menu/signature-pork-bulgogi-ramen-jacksonville.webp",
        width: 1200,
        height: 630,
        alt: "Modu Ramen Signature Bowl",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Authentic Japanese Ramen in Jacksonville | Modu Ramen",
    description: "Experience 26 years of culinary mastery. Our 18-hour broth defines the best Japanese Ramen in Jacksonville. Order online at Modu Ramen.",
    images: ["https://moduramen.com/images/menu/signature-pork-bulgogi-ramen-jacksonville.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "E5Wi4SGRGXebvcW9m7q35Em_anbPCxGBzQR8GNZHctQ",
  },
};

const SITE_URL = "https://moduramen.com";
const LAST_MODIFIED = "2026-05-25";

// Chef Kim - Person entity (E-E-A-T authority signal for GEO)
const chefKimJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#chef-kim`,
  "name": "Chef Dongil Kim",
  "alternateName": "Chef Kim",
  "jobTitle": "Executive Chef & Founder",
  "description": "Chef Dongil Kim is a Japanese ramen master with 26 years of culinary experience. He began his career in 2000 and founded Modu Ramen in Jacksonville, FL in 2019, pioneering an 18-hour double-boiled tonkotsu broth technique that fuses authentic Japanese tradition with Korean flavors.",
  "image": `${SITE_URL}/images/chef-kim-culinary-mastery-jacksonville.webp`,
  "url": `${SITE_URL}/chef-kim`,
  "knowsAbout": [
    "Japanese Ramen",
    "Tonkotsu Broth",
    "18-Hour Slow-Cooked Broth Technique",
    "Korean-Japanese Fusion Cuisine",
    "Bulgogi Ramen",
    "Tantanmen",
    "Matcha Ramen",
    "Asian Culinary Arts"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Executive Chef",
    "occupationLocation": {
      "@type": "City",
      "name": "Jacksonville, FL"
    },
    "skills": "Japanese ramen mastery, 18-hour tonkotsu broth, Korean fusion cuisine, noodle craft"
  },
  "worksFor": {
    "@id": `${SITE_URL}/#restaurant`
  },
  "memberOf": {
    "@type": "Organization",
    "name": "Modu Ramen"
  }
};

// Restaurant entity - core business
const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE_URL}/#restaurant`,
  "name": "Modu Ramen",
  "alternateName": ["Modu Ramen Jacksonville", "Modu Ramen Baymeadows"],
  "image": [
    `${SITE_URL}/images/menu/signature-pork-bulgogi-ramen-jacksonville.webp`,
    `${SITE_URL}/images/18-hour-slow-cooked-ramen-broth-jacksonville.webp`,
    `${SITE_URL}/images/chef-kim-culinary-mastery-jacksonville.webp`
  ],
  "logo": `${SITE_URL}/images/menu/signature-pork-bulgogi-ramen-jacksonville.webp`,
  "description": "Modu Ramen is the #1 destination for authentic Japanese ramen in Jacksonville, Florida. Founded in 2019 by Chef Dongil Kim (26 years of culinary mastery since 2000), we serve a signature 18-hour double-boiled tonkotsu broth, fusion bulgogi ramen, tantanmen, matcha ramen, and traditional Korean bingsu. Located on Baymeadows Rd in Southside Jacksonville with on-site parking.",
  "url": SITE_URL,
  "telephone": "+1-904-253-3454",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Apple Pay", "Google Pay"],
  "acceptsReservations": "True",
  "servesCuisine": ["Japanese", "Ramen", "Korean Fusion", "Asian"],
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
  "areaServed": [
    { "@type": "City", "name": "Jacksonville" },
    { "@type": "Place", "name": "Baymeadows" },
    { "@type": "Place", "name": "Deerwood" },
    { "@type": "Place", "name": "Southside Jacksonville" }
  ],
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "158",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Alex M." },
      "datePublished": "2025-08-12",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Undeniably the best authentic Japanese ramen in Jacksonville. The meticulous 18-hour pork bone broth and handcrafted noodles show a level of culinary mastery you'd expect from a fine dining establishment."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Jonathan C." },
      "datePublished": "2025-09-03",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "A true hidden gem in Florida. From the melt-in-your-mouth Chashu to the perfectly balanced umami of their Tonkotsu, Modu Ramen elevates traditional Japanese street food to an art form."
    }
  ],
  "hasMenu": {
    "@type": "Menu",
    "@id": `${SITE_URL}/digital-menu#menu`,
    "name": "Modu Ramen Menu",
    "url": `${SITE_URL}/digital-menu`,
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Signature Fusion Ramen",
        "description": "Chef Kim's signature Korean-Japanese fusion creations built on the 18-hour tonkotsu broth.",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Beef Bulgogi Ramen",
            "description": "Signature savory broth topped with marinated beef bulgogi, soft-boiled egg, and fresh bok choy.",
            "image": `${SITE_URL}/images/menu/signature-pork-bulgogi-ramen-jacksonville.webp`
          },
          {
            "@type": "MenuItem",
            "name": "Matcha Ramen",
            "description": "Soy broth infused with Ceremonial Grade Matcha, tender chashu, black garlic oil, and red ginger.",
            "image": `${SITE_URL}/images/menu/unique-matcha-ramen-jacksonville.webp`
          },
          {
            "@type": "MenuItem",
            "name": "TanTanMen",
            "description": "Pork bone broth with ground pork, menma, black garlic oil, peanut, corn, and bok choy.",
            "image": `${SITE_URL}/images/menu/creamy-tantanmen-ramen-jacksonville.webp`
          }
        ]
      },
      {
        "@type": "MenuSection",
        "name": "Classic Tonkotsu Ramen",
        "description": "Traditional Japanese ramen built on the 18-hour double-boiled pork bone broth.",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Kimchi Tonkotsu",
            "description": "Pork bone broth with chashu, soy marinated egg, black garlic oil, woodear mushroom, and nori seaweed.",
            "image": `${SITE_URL}/images/menu/best-kimchi-tonkotsu-ramen-jacksonville.webp`
          },
          {
            "@type": "MenuItem",
            "name": "Curry Tonkatsu",
            "description": "Pork bone broth with fried Ton-Ka-Tsu, soy marinated egg, shiitake mushroom, corn, menma, and scallions.",
            "image": `${SITE_URL}/images/menu/savory-curry-tonkotsu-ramen-jacksonville.webp`
          }
        ]
      },
      {
        "@type": "MenuSection",
        "name": "Vegetarian",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Vegetable Ramen",
            "description": "Creamy vegetable broth, tofu, menma, scallions, and woodear mushroom.",
            "suitableForDiet": "https://schema.org/VegetarianDiet",
            "image": `${SITE_URL}/images/menu/healthy-vegetable-ramen-jacksonville.webp`
          }
        ]
      },
      {
        "@type": "MenuSection",
        "name": "Korean Bingsu Dessert",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Mango Cheesecake / Tiramisu Bingsu",
            "description": "Delicate Korean shaved ice with sweet mango and cheesecake or cocoa, espresso powder, and mascarpone cream."
          }
        ]
      }
    ]
  },
  "menu": `${SITE_URL}/digital-menu`,
  "employee": { "@id": `${SITE_URL}/#chef-kim` },
  "founder": { "@id": `${SITE_URL}/#chef-kim` },
  "foundingDate": "2019",
  "slogan": "Jacksonville's #1 Authentic Japanese Ramen Destination",
  "knowsAbout": [
    "18-hour slow-cooked tonkotsu broth",
    "Authentic Japanese ramen",
    "Korean-Japanese fusion cuisine",
    "Bulgogi ramen",
    "Tantanmen",
    "Matcha ramen",
    "Korean bingsu"
  ],
  "potentialAction": [
    {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://modu-waitlist.vercel.app/reserve",
        "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
      },
      "result": {
        "@type": "Reservation",
        "name": "Modu Ramen Reservation"
      }
    },
    {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://moduramennzti.web.ordersave.com/menu",
        "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
      },
      "deliveryMethod": ["http://schema.org/OnSitePickup"]
    }
  ],
  "sameAs": [
    "https://www.instagram.com/modu.ramen/",
    "https://www.facebook.com/moduramen/",
    "https://modu-waitlist.vercel.app/reserve"
  ]
};

// WebSite entity for sitelinks search
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": SITE_URL,
  "name": "Modu Ramen",
  "description": "Best authentic Japanese ramen in Jacksonville, FL — Chef Kim's 18-hour broth.",
  "publisher": { "@id": `${SITE_URL}/#restaurant` },
  "inLanguage": "en-US"
};

// FAQPage - critical for GEO (Generative Engines quote FAQs directly)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best authentic Japanese ramen restaurant in Jacksonville, FL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modu Ramen at 8602 Baymeadows Rd is widely regarded as the best authentic Japanese ramen restaurant in Jacksonville, FL. Founded in 2019 by Chef Dongil Kim, who brings 26 years of culinary mastery since 2000, Modu Ramen serves a signature 18-hour double-boiled tonkotsu broth and maintains a 5.0 average rating across 158+ reviews."
      }
    },
    {
      "@type": "Question",
      "name": "What is Tonkotsu ramen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tonkotsu is a famous style of Japanese ramen characterized by a rich, milky-white pork bone broth. The broth gets its creamy texture from collagen melting out of the bones during a rigorous, high-heat boiling process that often takes 12 to 18 hours or more. At Modu Ramen in Jacksonville, the tonkotsu broth is slow-cooked for a full 18 hours using a double-boil technique."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find the best ramen near Baymeadows in Jacksonville?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modu Ramen is located right in the heart of Southside Jacksonville at 8602 Baymeadows Rd, FL 32256. We serve authentic 18-hour slow-cooked tonkotsu ramen, Korean-Japanese fusion bulgogi bowls, tantanmen, matcha ramen, and traditional Korean bingsu with plenty of on-site parking. Phone: (904) 253-3454."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Chef Kim's ramen unique?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chef Dongil Kim brings over 26 years of culinary experience, starting his career in 2000. He uses a meticulous double-boiling 18-hour broth technique and seamlessly blends authentic Japanese ramen traditions with bold Korean flavors, exemplified in signature dishes like the Bulgogi Ramen, TanTanMen, and Ceremonial Grade Matcha Ramen."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Modu Ramen online for takeout or delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can order Modu Ramen online for pickup directly through moduramennzti.web.ordersave.com/menu. Online ordering is a popular option for lunch breaks in the Baymeadows and Deerwood business districts in Jacksonville."
      }
    },
    {
      "@type": "Question",
      "name": "Does Modu Ramen take reservations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Modu Ramen accepts reservations online at modu-waitlist.vercel.app/reserve. Walk-ins are also welcome, but reservations are recommended for weekend dinner service."
      }
    },
    {
      "@type": "Question",
      "name": "What are Modu Ramen's hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Modu Ramen is open Monday through Thursday 11:00 AM–9:00 PM, Friday and Saturday 11:00 AM–9:30 PM, and Sunday 11:30 AM–9:00 PM."
      }
    },
    {
      "@type": "Question",
      "name": "Does Modu Ramen have vegetarian options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Modu Ramen offers a Vegetable Ramen made with a creamy vegetable broth, tofu, menma, scallions, and woodear mushroom — fully suitable for vegetarian diets."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta name="last-modified" content={LAST_MODIFIED} />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-charcoal text-paper font-sans overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(chefKimJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>

        {/* Sticky Mobile Footer CTA */}
        <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-charcoal/90 backdrop-blur-md border-t border-gold/20 p-4 pb-6 flex gap-3 justify-center shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
          <a
            href="https://modu-waitlist.vercel.app/reserve"
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
