export default function Footer() {
  return (
    <footer className="bg-[#111] text-paper/50 py-12 border-t border-paper/5">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-serif tracking-widest text-lg text-paper">
          <span className="text-gold">MODU</span> RAMEN
        </div>
        
        <p className="text-sm font-light text-center md:text-left">
          &copy; {new Date().getFullYear()} Modu Ramen. All rights reserved. Crafting Umami Since 2000.
        </p>
        
        <div className="flex gap-6 uppercase text-xs tracking-widest">
          <a href="https://www.instagram.com/modu.ramen/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
          <a href="https://www.yelp.com/biz/modu-ramen-jacksonville-2?uid=wVAVf_WzSa-HVUG-IdpUwg&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Yelp</a>
        </div>
      </div>
    </footer>
  );
}
