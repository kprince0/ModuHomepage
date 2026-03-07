import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-charcoal/70 border-b border-paper/10">
      <Link href="/" className="font-serif text-2xl tracking-widest text-paper flex items-center gap-2">
        <span className="text-gold">MODU</span> RAMEN
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 uppercase text-xs tracking-[0.2em] font-medium">
        <Link href="#heritage" className="text-paper hover:text-gold transition-colors">Our Story</Link>
        <Link href="#craft" className="text-paper hover:text-gold transition-colors">The Craft</Link>
        <Link href="#menu" className="text-paper hover:text-gold transition-colors">Menu</Link>
        <Link href="#location" className="text-paper hover:text-gold transition-colors">Location</Link>
      </nav>

      <a 
        href="https://moduramennzti.web.ordersave.com/menu" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden md:block px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors duration-300 uppercase tracking-widest text-xs font-semibold"
      >
        Order Now
      </a>

      {/* Mobile Menu Icon Placeholder */}
      <button className="md:hidden text-paper">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </header>
  );
}
