import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  title: string;
  excerpt: string;
  href: string;
  imagePath: string;
  category: string;
}

const POSTS: BlogPost[] = [
  {
    title: "What is Tonkotsu Ramen?",
    excerpt: "Discover the secret behind the milky-white broth that makes Tonkotsu the most famous ramen in the world. It's all about the emulsion.",
    href: "/what-is-tonkotsu-ramen",
    imagePath: "/images/menu/Kimchi Tonkatsu.png",
    category: "Ramen Guide"
  },
  {
    title: "Why 18-Hour Broth Tastes Better",
    excerpt: "At Modu Ramen, we believe that the only path to producing authentic, unforgettable flavor is through time, extreme heat, and patience.",
    href: "/why-18-hour-pork-bone-broth-tastes-better",
    imagePath: "/images/Broth.jpg",
    category: "The Craft"
  },
  {
    title: "Jacksonville's Best Spicy Ramen",
    excerpt: "From the nutty, complex heat of our signature Tantanmen to the fiery bite of Spicy Tonkotsu, learn how we balance spice with deep savory flavors.",
    href: "/spicy-ramen-jacksonville",
    imagePath: "/images/menu/TanTan.png",
    category: "Local Guide"
  }
];

export default function BlogSnippets() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section className="py-24 bg-charcoal border-t border-paper/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold mb-4 block">Ramen Culture</span>
            <h2 className="text-4xl md:text-5xl font-serif text-paper mb-6">
              From Our <span className="text-gold italic">Journal</span>
            </h2>
            <p className="text-paper/70 font-light text-lg">
              Explore the history, techniques, and secrets behind authentic Japanese and Korean fusion ramen right here in Jacksonville.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, idx) => (
            <Link 
              key={idx} 
              href={post.href}
              className="group flex flex-col bg-[#111] rounded-sm overflow-hidden border border-paper/10 hover:border-gold/30 transition-all duration-500"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={`${basePath}${post.imagePath}`}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-charcoal/90 backdrop-blur-sm px-3 py-1 text-gold text-xs uppercase tracking-wider font-semibold">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-paper mb-4 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-paper/70 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="text-gold uppercase tracking-widest text-xs font-bold flex items-center gap-2 mt-auto">
                  Read Article
                  <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
