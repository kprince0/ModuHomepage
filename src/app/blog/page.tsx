import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modu Ramen Journal | Jacksonville Ramen Guide",
  description: "Explore the Modu Ramen Journal. Discover the secrets of our 18-hour broth, the history of Tonkotsu ramen, and guides to the best ramen in Jacksonville.",
};

// Interface for blog posts
interface BlogPost {
  title: string;
  excerpt: string;
  href: string;
  imagePath: string;
  category: string;
  date: string;
}

const POSTS: BlogPost[] = [
  {
    title: "Best Ramen in Jacksonville",
    excerpt: "Looking for the best ramen in Jacksonville? Discover why Modu Ramen's 18-hour double-boiled pork bone broth and Chef Kim's 26-year mastery make us the premier destination for authentic Japanese ramen.",
    href: "/best-ramen-jacksonville",
    imagePath: "/images/Staff.png",
    category: "Local Guide",
    date: "March 2024"
  },
  {
    title: "What is Tonkotsu Ramen?",
    excerpt: "Discover the secret behind the milky-white broth that makes Tonkotsu the most famous ramen in the world. Learn about the rigorous high-heat boiling process and essential ingredients.",
    href: "/what-is-tonkotsu-ramen",
    imagePath: "/images/menu/Kimchi Tonkatsu.png",
    category: "Ramen Culture",
    date: "March 2024"
  },
  {
    title: "Why 18-Hour Broth Tastes Better",
    excerpt: "At Modu Ramen, we believe that the only path to producing authentic, unforgettable flavor is through time, extreme heat, and patience. Go behind the scenes of our signature broth process.",
    href: "/why-18-hour-pork-bone-broth-tastes-better",
    imagePath: "/images/Broth.jpg",
    category: "The Craft",
    date: "March 2024"
  },
  {
    title: "The Best Spicy Ramen in Jacksonville",
    excerpt: "From the nutty, complex heat of our signature Tantanmen to the fiery bite of Spicy Tonkotsu, learn how we balance intense heat with deep, creamy savory flavors.",
    href: "/spicy-ramen-jacksonville",
    imagePath: "/images/menu/TanTan.png",
    category: "Menu Spotlight",
    date: "March 2024"
  },
  {
    title: "Authentic Bulgogi Ramen Fusion",
    excerpt: "Experience the ultimate fusion of Korean and Japanese flavors. Learn how we combine tender, sweet-and-savory Korean marinated beef with the deep comfort of authentic ramen broth.",
    href: "/bulgogi-ramen-jacksonville",
    imagePath: "/images/extracted_smart/beef-bulgogi-jacksonville.jpg",
    category: "Menu Spotlight",
    date: "March 2024"
  }
];

export default function BlogHub() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Separate the first post as the featured post
  const featuredPost = POSTS[0];
  const regularPosts = POSTS.slice(1);

  return (
    <main className="min-h-screen selection:bg-gold selection:text-charcoal pt-[104px] bg-charcoal">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <p className="text-gold tracking-widest uppercase text-sm mb-4">The Modu Journal</p>
          <h1 className="text-4xl md:text-6xl font-serif text-paper mb-6">
            Ramen Guides & Culture
          </h1>
          <p className="text-lg md:text-xl text-paper/70 font-light max-w-2xl mx-auto leading-relaxed">
            Dive deep into the art of noodle making, the science of our 18-hour broth, and your guide to the best ramen in Jacksonville.
          </p>
        </div>

        {/* Featured Post */}
        <Link href={featuredPost.href} className="group block mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#111] rounded-lg overflow-hidden border border-paper/10 hover:border-gold/30 transition-all duration-500">
            <div className="relative h-[400px] lg:h-auto w-full overflow-hidden">
              <Image 
                src={`${basePath}${featuredPost.imagePath}`}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-charcoal/90 backdrop-blur-sm px-4 py-2 text-gold text-xs uppercase tracking-widest font-bold">
                Featured
              </div>
            </div>
            
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gold text-xs uppercase tracking-widest font-semibold">{featuredPost.category}</span>
                <span className="text-paper/40 text-xs">{featuredPost.date}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-paper mb-6 group-hover:text-gold transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-paper/70 font-light text-lg leading-relaxed mb-8">
                {featuredPost.excerpt}
              </p>
              <div className="text-paper uppercase tracking-widest text-sm font-bold flex items-center gap-3">
                Read Full Article
                <span className="text-gold group-hover:translate-x-2 transition-transform">&rarr;</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {regularPosts.map((post, idx) => (
            <Link 
              key={idx} 
              href={post.href}
              className="group flex flex-col bg-[#111] rounded-lg overflow-hidden border border-paper/10 hover:border-gold/30 transition-all duration-500"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={`${basePath}${post.imagePath}`}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-gold text-xs uppercase tracking-widest font-semibold">{post.category}</span>
                  <span className="text-paper/40 text-xs">{post.date}</span>
                </div>
                <h3 className="text-2xl font-serif text-paper mb-4 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-paper/70 font-light text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <div className="text-paper uppercase tracking-widest text-xs font-bold flex items-center gap-2 mt-auto">
                  Read Article
                  <span className="text-gold group-hover:translate-x-2 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Newsletter / CTA */}
      <section className="py-20 bg-gold/10 border-t border-gold/20 mt-10">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-serif text-paper mb-6">Craving a Bowl?</h2>
          <p className="text-paper/70 font-light mb-10 text-lg">
            Stop reading and start eating. Join us at our Baymeadows location to experience these flavors firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AGD47" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gold text-charcoal px-8 py-4 rounded hover:bg-paper transition-colors font-bold tracking-widest uppercase text-sm"
            >
              Reserve a Table
            </a>
            <Link 
              href="/digital-menu" 
              className="px-8 py-4 rounded border border-gold text-gold hover:bg-gold/10 transition-colors tracking-widest uppercase text-sm font-bold bg-[#111]"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
