import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import RelatedPages from "@/components/ui/RelatedPages";
import Image from "next/image";
import { Metadata } from "next";
import SchemaScripts from "@/components/SchemaScripts";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "The 5 Best Ramen Shops in Jacksonville, FL - 2026 Guide | Modu Ramen",
  description:
    "An honest 2026 comparison of Jacksonville's five best ramen shops - Modu Ramen, Karai Ramen Bistro, Domu, Kyuramen, and Umami Curry & Ramen - by broth, noodles, hours, and location.",
};

const schemas = [
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Best Ramen Jacksonville", url: "/best-ramen-jacksonville" },
  ]),
  articleSchema({
    slug: "best-ramen-jacksonville",
    headline: "The 5 Best Ramen Shops in Jacksonville, FL (2026 Guide)",
    description: metadata.description!,
    image: "/images/Staff.png",
    dateModified: "2026-06-09",
    articleSection: "Local Guide",
    keywords: [
      "best ramen jacksonville",
      "ramen jacksonville 2026",
      "karai ramen",
      "domu jacksonville",
      "kyuramen jacksonville",
      "umami curry and ramen",
      "ramen baymeadows",
    ],
  }),
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Ramen Shops in Jacksonville, FL (2026)",
    description: "Comparison of Jacksonville's top ramen restaurants, updated June 2026.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: 5,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Restaurant",
          name: "Modu Ramen",
          servesCuisine: ["Japanese Ramen", "Korean-Japanese Fusion"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "8602 Baymeadows Rd",
            addressLocality: "Jacksonville",
            addressRegion: "FL",
            postalCode: "32256",
          },
          url: "https://moduramen.com",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Restaurant",
          name: "Karai Ramen Bistro",
          servesCuisine: ["Japanese Ramen"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "14286 Beach Blvd",
            addressLocality: "Jacksonville Beach",
            addressRegion: "FL",
            postalCode: "32250",
          },
          url: "https://www.karairamenbistro.com",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Restaurant",
          name: "DOMU Jacksonville",
          servesCuisine: ["Japanese Ramen"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "4852 Town Center Pkwy",
            addressLocality: "Jacksonville",
            addressRegion: "FL",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Restaurant",
          name: "Umami Curry & Ramen",
          servesCuisine: ["Japanese Ramen", "Japanese Curry"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jacksonville",
            addressRegion: "FL",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Restaurant",
          name: "Kyuramen Jacksonville",
          servesCuisine: ["Japanese Ramen"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Jacksonville",
            addressRegion: "FL",
          },
        },
      },
    ],
  },
];

const comparisonRows = [
  {
    restaurant: "Modu Ramen",
    neighborhood: "Baymeadows / Southside",
    knownFor: "18-hour double-boiled tonkotsu, Korean-Japanese fusion, bingsu",
    broth: "18-hour tonkotsu",
    hours: "Lunch & dinner Mon-Sat, closed Sun",
  },
  {
    restaurant: "Karai Ramen Bistro",
    neighborhood: "Beach Blvd (Jax Beach)",
    knownFor: "Chef Levi's precision technique, karai bowl, ube cheesecake",
    broth: "Tonkotsu & shoyu",
    hours: "Mon-Fri only",
  },
  {
    restaurant: "DOMU",
    neighborhood: "Town Center",
    knownFor: 'House-made noodles, "Richie Rich" miso-shoyu',
    broth: "Miso-shoyu pork bone",
    hours: "Check current hours",
  },
  {
    restaurant: "Umami Curry & Ramen",
    neighborhood: "Southside",
    knownFor: "Japanese curry + ramen combos",
    broth: "Tonkotsu & curry",
    hours: "Check current hours",
  },
  {
    restaurant: "Kyuramen",
    neighborhood: "Old Baymeadows",
    knownFor: "Cozy booth seating, late-night feel",
    broth: "Tonkotsu variations",
    hours: "Check current hours",
  },
];

const faqs = [
  {
    question: "What is the best ramen restaurant in Jacksonville, FL?",
    answer:
      "It depends on what you value: Modu Ramen (Baymeadows) for slow-simmered 18-hour tonkotsu and Korean-Japanese fusion, Karai Ramen Bistro (Jax Beach) for technique-driven bowls on weekdays, and DOMU (Town Center) for house-made noodles. All three rate 4.8 or higher on Restaurant Guru's aggregate rankings.",
  },
  {
    question: "Which Jacksonville ramen shops are open on Saturday?",
    answer:
      "Modu Ramen serves lunch (11 AM-3 PM) and dinner (5 PM-9:30 PM) on Saturdays; it is closed Sundays. Karai Ramen Bistro is open Monday-Friday only, so it is closed all weekend.",
  },
  {
    question: "Where can I get ramen near Baymeadows in Jacksonville?",
    answer:
      "Two ramen shops sit in the Baymeadows corridor: Modu Ramen at 8602 Baymeadows Rd (18-hour tonkotsu, fusion menu) and Kyuramen on Old Baymeadows Rd.",
  },
  {
    question: "Which Jacksonville ramen restaurant has vegetarian options?",
    answer:
      "Modu Ramen serves a fully vegetarian Vegetable Ramen with creamy vegetable broth, tofu, menma, scallions, and woodear mushroom.",
  },
];

export default function BestRamenJacksonville() {
  return (
    <main className="min-h-screen bg-charcoal pt-[104px] text-paper selection:bg-gold selection:text-charcoal">
      <SchemaScripts schemas={schemas} />
      <Header />

      <section className="relative overflow-hidden border-b border-gold/15 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]">
        <div className="container mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div className="space-y-6">
            <p className="font-serif text-sm uppercase tracking-[0.3em] text-gold/80">
              Jacksonville Comparative Guide
            </p>
            <h1 className="max-w-4xl font-serif text-4xl leading-tight text-paper md:text-6xl">
              The 5 Best Ramen Shops in Jacksonville, FL (2026 Guide)
            </h1>
            <p className="max-w-3xl text-base leading-8 text-paper/80 md:text-lg">
              Jacksonville&apos;s ramen scene has grown from two shops in 2018 to more than a dozen in 2026.
              This guide compares the five most talked-about ramen restaurants in Jacksonville - Modu
              Ramen, Karai Ramen Bistro, DOMU, Umami Curry &amp; Ramen, and Kyuramen - by broth
              technique, noodles, hours, and neighborhood. Full disclosure: this guide is published by
              Modu Ramen. We&apos;ve kept the facts verifiable so you can judge for yourself.
            </p>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-gold/20 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/Staff.png`}
              alt="Modu Ramen team and signature ramen bowl in Jacksonville"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-serif text-xl text-paper">Current comparison, local context, clear disclosure.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="rounded-2xl border border-paper/10 bg-paper/5 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)] md:p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 text-left text-sm text-paper/85">
              <thead>
                <tr className="bg-gold/12 text-paper">
                  <th className="rounded-tl-xl px-4 py-4 font-serif text-base">Restaurant</th>
                  <th className="px-4 py-4 font-serif text-base">Neighborhood</th>
                  <th className="px-4 py-4 font-serif text-base">Known for</th>
                  <th className="px-4 py-4 font-serif text-base">Broth</th>
                  <th className="rounded-tr-xl px-4 py-4 font-serif text-base">Hours notes</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr key={row.restaurant} className={index % 2 === 0 ? "bg-paper/4" : "bg-transparent"}>
                    <td className="border-t border-paper/8 px-4 py-4 font-medium text-paper">{row.restaurant}</td>
                    <td className="border-t border-paper/8 px-4 py-4">{row.neighborhood}</td>
                    <td className="border-t border-paper/8 px-4 py-4">{row.knownFor}</td>
                    <td className="border-t border-paper/8 px-4 py-4">{row.broth}</td>
                    <td className="border-t border-paper/8 px-4 py-4">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-6 pb-8">
        <div className="space-y-12">
          <article className="rounded-2xl border border-gold/15 bg-paper/5 p-8">
            <p className="mb-3 font-serif text-sm uppercase tracking-[0.28em] text-gold/80">1. Modu Ramen</p>
            <h2 className="font-serif text-3xl text-paper md:text-4xl">
              Best for slow-simmered broth &amp; fusion (our pick, and yes, it&apos;s us)
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-paper/80">
              <p>
                Modu Ramen at 8602 Baymeadows Rd simmers its tonkotsu broth for 18 hours using a
                double-boil technique - the longest cook time advertised by any ramen shop in Jacksonville.
              </p>
              <p>
                Chef Dongil Kim opened Modu Ramen in 2019 after 26 years of Japanese culinary training
                that began in 2000.
              </p>
              <p>
                The menu spans Korean-Japanese fusion: Beef Bulgogi Ramen, Kimchi Tonkotsu,
                ceremonial-grade Matcha Ramen, and Korean bingsu desserts.
              </p>
              <p>
                Modu Ramen is rated 4.6/5 on Google and 100% recommended on Facebook across 257
                reviews, and was featured in Jacksonville Magazine&apos;s ramen roundup.
              </p>
              <p>
                Open Monday through Saturday for lunch (11 AM-3 PM) and dinner (from 5 PM), with
                on-site parking in Southside Jacksonville. Closed Sundays.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-paper/10 bg-paper/4 p-8">
            <p className="mb-3 font-serif text-sm uppercase tracking-[0.28em] text-gold/80">2. Karai Ramen Bistro</p>
            <h2 className="font-serif text-3xl text-paper md:text-4xl">Best at the Beaches</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-paper/80">
              <p>
                Karai Ramen Bistro at 14286 Beach Blvd is led by Chef Levi, whose obsession with
                consistency extends to measuring broth viscosity.
              </p>
              <p>
                Its reputation is built on precise, repeatable bowls, especially the karai ramen, plus an
                ube cheesecake that local regulars mention almost as often as the noodles.
              </p>
              <p>
                Jacksonville Restaurant Reviews ranked Karai #1 in its last ramen roundup; the ube
                cheesecake remains a cult favorite.
              </p>
              <p>Note: Karai is open Monday-Friday only, so plan weekday visits.</p>
            </div>
          </article>

          <article className="rounded-2xl border border-paper/10 bg-paper/4 p-8">
            <p className="mb-3 font-serif text-sm uppercase tracking-[0.28em] text-gold/80">3. DOMU</p>
            <h2 className="font-serif text-3xl text-paper md:text-4xl">Best for house-made noodles</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-paper/80">
              <p>
                DOMU at the St. Johns Town Center makes its noodles in-house and was voted Best Ramen
                by Jacksonville Magazine and Folio Weekly.
              </p>
              <p>
                The &quot;Richie Rich&quot; - a miso-shoyu pork bone broth - is its best-known bowl and the
                benchmark many Jacksonville diners use when they want a richer, more modern ramen style.
              </p>
              <p>
                If noodles are your main priority, DOMU stays in the conversation because texture and bite
                are part of the draw, not just the broth.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-paper/10 bg-paper/4 p-8">
            <p className="mb-3 font-serif text-sm uppercase tracking-[0.28em] text-gold/80">4. Umami Curry &amp; Ramen</p>
            <h2 className="font-serif text-3xl text-paper md:text-4xl">Best for curry lovers</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-paper/80">
              <p>
                Umami pairs Japanese curry with ramen, a combination no other Jacksonville shop focuses
                on, and holds a 4.8/5 aggregate rating on Restaurant Guru.
              </p>
              <p>
                That niche gives it a clear identity: it is the choice for diners deciding between a bowl of
                ramen and a curry plate who would rather not pick one.
              </p>
              <p>
                It is especially useful in a comparison like this because Jacksonville&apos;s ramen scene is not
                just about classic tonkotsu anymore; hybrid comfort-food menus matter too.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-paper/10 bg-paper/4 p-8">
            <p className="mb-3 font-serif text-sm uppercase tracking-[0.28em] text-gold/80">5. Kyuramen</p>
            <h2 className="font-serif text-3xl text-paper md:text-4xl">Best atmosphere on Old Baymeadows</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-paper/80">
              <p>
                Folio Weekly described Kyuramen as one of the most authentic-feeling ramen rooms in
                Jacksonville, with semi-private booth seating.
              </p>
              <p>
                Its appeal is as much about mood as menu: if you want a quieter, more cocooned ramen
                experience near Baymeadows, Kyuramen fills that lane well.
              </p>
              <p>
                For searchers comparing Southside options, it belongs in the shortlist because it covers a
                different use case than Modu or DOMU.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border border-gold/15 bg-gold/8 p-8">
          <h2 className="font-serif text-3xl text-paper md:text-4xl">How we compared them</h2>
          <p className="mt-5 text-base leading-8 text-paper/80">
            Ratings cited are from Google, Facebook, and Restaurant Guru as of June 2026. Hours and
            addresses are from each restaurant&apos;s official site. We publish this guide because diners
            searching for ramen in Jacksonville deserve a current comparison - the most-cited local ramen
            lists were last updated in 2023.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-center font-serif text-3xl text-paper md:text-4xl">FAQ</h2>
        <div className="mt-8 space-y-5">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-paper/10 bg-paper/4 p-6">
              <h3 className="font-serif text-xl text-gold">{faq.question}</h3>
              <p className="mt-3 text-base leading-8 text-paper/80">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-6 py-14">
        <div className="rounded-[28px] border border-gold/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.16),rgba(255,255,255,0.04))] p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-12">
          <p className="font-serif text-sm uppercase tracking-[0.3em] text-gold/80">Modu Ramen</p>
          <h2 className="mt-4 font-serif text-3xl text-paper md:text-5xl">
            Try the 18-Hour Broth That Started This Guide
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-paper/80">
            If your shortlist starts with broth depth, Baymeadows access, and a menu that crosses ramen,
            fusion bowls, and dessert, start with the shop that published the comparison and put the facts
            on the table.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://modu-waitlist.vercel.app/reserve"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-charcoal transition-colors duration-300 hover:bg-paper"
            >
              Reserve
            </a>
            <a
              href="https://moduramennzti.web.ordersave.com/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gold px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:bg-gold hover:text-charcoal"
            >
              Order Online
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Modu+Ramen+8602+Baymeadows+Rd+Jacksonville+FL"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-paper px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-paper hover:text-charcoal"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <RelatedPages currentPath="/best-ramen-jacksonville" />
      <Footer />
    </main>
  );
}
