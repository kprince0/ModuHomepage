import Link from "next/link";
import Image from "next/image";

interface RelatedPage {
  title: string;
  href: string;
  imagePath: string;
  alt: string;
}

const PAGES: RelatedPage[] = [
  {
    title: "Best Ramen in Jacksonville",
    href: "/best-ramen-jacksonville",
    imagePath: "/images/Staff.png",
    alt: "Best Ramen Jacksonville"
  },
  {
    title: "Tonkotsu Ramen",
    href: "/tonkotsu-ramen-jacksonville",
    imagePath: "/images/menu/Kimchi Tonkatsu.png",
    alt: "Authentic Tonkotsu Ramen"
  },
  {
    title: "Tantanmen Ramen",
    href: "/tantanmen-jacksonville",
    imagePath: "/images/menu/TanTan.png",
    alt: "Spicy Tantanmen Ramen"
  },
  {
    title: "Matcha Ramen",
    href: "/matcha-ramen-jacksonville",
    imagePath: "/images/menu/matcha-ramen.jpg",
    alt: "Matcha Ramen Jacksonville"
  },
  {
    title: "Korean Bingsu",
    href: "/bingsu-jacksonville",
    imagePath: "/images/menu/Bingsu/mango cheesecake.png",
    alt: "Authentic Korean Bingsu"
  }
];

export default function RelatedPages({ currentPath }: { currentPath: string }) {
  // Filter out the current page so we don't link to ourselves
  const related = PAGES.filter(page => page.href !== currentPath).slice(0, 4);

  return (
    <section className="py-20 bg-charcoal border-t border-paper/10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-12">
          <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold mb-4 block">Keep Exploring</span>
          <h2 className="text-3xl md:text-5xl font-serif text-paper">
            More From <span className="text-gold italic">Modu Ramen</span>
          </h2>
          <div className="w-16 h-px bg-gold/50 mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {related.map((page, idx) => (
            <Link key={idx} href={page.href} className="group block border border-paper/10 hover:border-gold/50 transition-colors duration-500 rounded-sm overflow-hidden bg-charcoal/50">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={page.imagePath} 
                  alt={page.alt} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-paper text-xl font-serif group-hover:text-gold transition-colors">{page.title}</h3>
                <p className="text-paper/60 text-sm mt-3 flex items-center gap-2 uppercase tracking-widest font-semibold">
                  Discover <span className="text-gold group-hover:translate-x-2 transition-transform">&rarr;</span>
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
