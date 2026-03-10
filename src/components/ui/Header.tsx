"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-charcoal/70 border-b border-paper/10">
      <Link href="/" className="font-serif text-2xl tracking-widest text-paper flex items-center gap-2">
        <span className="text-gold">MODU</span> RAMEN
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 uppercase text-xs tracking-[0.2em] font-medium">
        <Link href="/#heritage" className="text-paper hover:text-gold transition-colors">Our Story</Link>
        <Link href="/#craft" className="text-paper hover:text-gold transition-colors">The Craft</Link>
        <Link href="/#menu" className="text-paper hover:text-gold transition-colors">Menu</Link>
        <Link href="/#location" className="text-paper hover:text-gold transition-colors">Location</Link>
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <a 
          href="https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AGD47" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gold text-charcoal hover:bg-paper transition-colors duration-300 uppercase tracking-widest text-xs font-semibold"
        >
          Reserve a Table
        </a>
        <a 
          href="https://moduramennzti.web.ordersave.com/menu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors duration-300 uppercase tracking-widest text-xs font-semibold"
        >
          Order Now
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <button 
        className="md:hidden text-paper z-50 p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-charcoal/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center gap-10 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 uppercase text-lg tracking-[0.2em] font-medium">
          <Link href="/#heritage" onClick={() => setIsMobileMenuOpen(false)} className="text-paper hover:text-gold transition-colors">Our Story</Link>
          <Link href="/#craft" onClick={() => setIsMobileMenuOpen(false)} className="text-paper hover:text-gold transition-colors">The Craft</Link>
          <Link href="/#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-paper hover:text-gold transition-colors">Menu</Link>
          <Link href="/#location" onClick={() => setIsMobileMenuOpen(false)} className="text-paper hover:text-gold transition-colors">Location</Link>
        </nav>

        <div className="flex flex-col gap-4 mt-4 w-full px-10">
          <a 
            href="https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AGD47" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-4 bg-gold text-charcoal hover:bg-paper transition-colors duration-300 uppercase tracking-widest text-sm font-semibold text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reserve a Table
          </a>
          <a 
            href="https://moduramennzti.web.ordersave.com/menu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-4 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors duration-300 uppercase tracking-widest text-sm font-semibold text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Order Now
          </a>
        </div>
      </div>
    </header>
  );
}
