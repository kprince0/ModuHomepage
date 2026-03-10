import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-paper/70 py-16 border-t border-paper/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & NAP */}
          <div className="flex flex-col gap-6">
            <div className="font-serif tracking-widest text-2xl text-paper">
              <span className="text-gold">MODU</span> RAMEN
            </div>
            <p className="text-sm font-light leading-relaxed">
              Jacksonville's premier destination for authentic Japanese ramen, 18-hour slow-cooked pork bone broth, and handcrafted flavors.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm font-medium text-paper">8602 Baymeadows Rd</p>
              <p className="text-sm font-medium text-paper">Jacksonville, FL 32256</p>
              <a href="tel:+19042533454" className="text-gold hover:text-paper transition-colors font-medium mt-2">
                (904) 253-3454
              </a>
            </div>
            <div className="flex gap-4 uppercase text-xs tracking-widest mt-4">
              <a href="https://www.instagram.com/modu.ramen/" target="_blank" rel="noopener noreferrer" className="text-paper hover:text-gold transition-colors">Instagram</a>
              <a href="https://www.yelp.com/biz/modu-ramen-jacksonville-2?uid=wVAVf_WzSa-HVUG-IdpUwg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank" rel="noopener noreferrer" className="text-paper hover:text-gold transition-colors">Yelp</a>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-xl text-paper tracking-wide">Hours</h3>
            <ul className="text-sm flex flex-col gap-3 font-light">
              <li className="flex justify-between border-b border-paper/10 pb-2">
                <span>Mon - Thu</span>
                <span>11:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-paper/10 pb-2">
                <span>Fri - Sat</span>
                <span>11:00 AM - 9:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-paper/10 pb-2">
                <span>Sunday</span>
                <span>11:30 AM - 9:00 PM</span>
              </li>
              <li className="text-xs text-gold mt-2 italic">
                * Ample parking available on-site
              </li>
            </ul>
            <div className="flex flex-col gap-3 mt-4">
              <a 
                href="https://moduramennzti.web.ordersave.com/menu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 bg-gold text-charcoal text-center uppercase tracking-widest text-xs font-bold hover:bg-paper transition-colors"
                aria-label="Order Online"
              >
                Order Online
              </a>
              <a 
                href="https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AGD47" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 border border-gold text-gold text-center uppercase tracking-widest text-xs font-bold hover:bg-gold hover:text-charcoal transition-colors"
                aria-label="Reserve a Table"
              >
                Reserve a Table
              </a>
            </div>
          </div>

          {/* Column 3: Quick Map */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <h3 className="font-serif text-xl text-paper tracking-wide">Find Us in Southside Jacksonville</h3>
            <div className="w-full h-48 md:h-[260px] relative overflow-hidden bg-charcoal/50 border border-paper/10 group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.854087190184!2d-81.55683458487779!3d30.218559181819343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5cb159d33b5c3%3A0xe67b43c683ee38fb!2s8602%20Baymeadows%20Rd%2C%20Jacksonville%2C%20FL%2032256!5e0!3m2!1sen!2sus!4v1707901234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-0 transition-opacity duration-500 group-hover:opacity-90"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-charcoal to-transparent z-10 flex justify-center">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Modu+Ramen+8602+Baymeadows+Rd+Jacksonville+FL" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-paper text-charcoal text-xs uppercase tracking-widest font-bold hover:bg-gold transition-colors shadow-lg"
                  aria-label="Get Directions"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Internal Links Block */}
        <div className="border-t border-paper/10 pt-8 mt-8">
          <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-paper/60 mb-4">Discover Modu Ramen</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-gold/80">
            <Link href="/best-ramen-jacksonville" className="hover:text-paper transition-colors">Best Ramen in Jacksonville</Link>
            <span className="text-paper/20">|</span>
            <Link href="/bigboss-bulgogi-set" className="hover:text-paper transition-colors">BigBoss Bulgogi Set</Link>
            <span className="text-paper/20">|</span>
            <Link href="/tantanmen-jacksonville" className="hover:text-paper transition-colors">Tantanmen</Link>
            <span className="text-paper/20">|</span>
            <Link href="/bingsu-jacksonville" className="hover:text-paper transition-colors">Bingsu</Link>
            <span className="text-paper/20">|</span>
            <Link href="/our-broth" className="hover:text-paper transition-colors">Our 18-Hour Broth</Link>
            <span className="text-paper/20">|</span>
            <Link href="/why-18-hour-pork-bone-broth-tastes-better" className="hover:text-paper transition-colors">Why 18-Hour Broth?</Link>
            <span className="text-paper/20">|</span>
            <Link href="/what-is-tonkotsu-ramen" className="hover:text-paper transition-colors">What is Tonkotsu?</Link>
            <span className="text-paper/20">|</span>
            <Link href="/ramen-baymeadows-jacksonville" className="hover:text-paper transition-colors">Baymeadows Location</Link>
            <span className="text-paper/20">|</span>
            <Link href="/chef-kim" className="hover:text-paper transition-colors">Chef Kim</Link>
            <span className="text-paper/20">|</span>
            <Link href="/#menu" className="hover:text-paper transition-colors">Menu</Link>
            <span className="text-paper/20">|</span>
            <Link href="/digital-menu" className="hover:text-paper transition-colors">Digital Menu</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-paper/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-light text-paper/40">
          <p>&copy; {new Date().getFullYear()} Modu Ramen. All rights reserved. Crafting Umami Since 2000.</p>
          <p className="mt-2 md:mt-0">Located in the Heart of Jacksonville, FL</p>
        </div>
      </div>
    </footer>
  );
}
