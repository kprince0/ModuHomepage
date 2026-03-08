"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import Head from "next/head";

export default function Location() {
  // Schema for Local Business (SEO)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Modu Ramen",
    "image": "https://moduramen.com/hero-bg.jpg",
    "url": "https://moduramen.com",
    "telephone": "+19042533454",
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "11:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "11:00",
        "closes": "21:30"
      }
    ],
    "servesCuisine": "Japanese Ramen",
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <section id="location" className="py-24 bg-charcoal text-paper border-t border-paper/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Info */}
            <div>
              <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold mb-4 block">Plan Your Visit</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-12">A Gastronomic Destination</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold tracking-widest uppercase text-sm mb-2">Location</h3>
                    <p className="text-paper/70 font-light">8602 Baymeadows Rd<br/>Jacksonville, FL 32256</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold tracking-widest uppercase text-sm mb-2">Hours</h3>
                    <p className="text-paper/70 font-light">
                      Mon - Thu: 11:00 AM - 3:00 PM, 5:00 PM - 9:00 PM<br/>
                      Fri - Sat: 11:00 AM - 3:00 PM, 5:00 PM - 9:30 PM<br/>
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-gold shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold tracking-widest uppercase text-sm mb-2">Contact</h3>
                    <p className="text-paper/70 font-light">(904) 253-3454</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a href="https://maps.google.com/?q=8602+Baymeadows+Rd,+Jacksonville,+FL+32256" target="_blank" rel="noopener noreferrer">
                  <button className="bg-gold text-charcoal px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors">
                    Get Directions
                  </button>
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="relative aspect-square md:aspect-[4/3] w-full border border-paper/10 overflow-hidden group flex items-center justify-center">
              <iframe 
                src="https://maps.google.com/maps?q=Modu+Ramen+8602+Baymeadows+Rd,+Jacksonville,+FL&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0"
              ></iframe>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
