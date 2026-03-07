"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Craft() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".craft-text", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-charcoal text-paper overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section: Broth */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm group">
            <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700" />
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/Broth.jpg`}
              alt="The Awakening Broth"
              fill
              className="object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
            />
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-gold/30 z-0" />
          </div>

          {/* Text Section: The Awakening */}
          <div className="craft-text flex flex-col justify-center">
            <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold mb-6 block">The Process</span>

            <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">
              The <span className="text-gold italic">Awakening</span>
            </h2>

            <div className="w-16 h-px bg-gold/50 mb-10"></div>

            <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
              Born from a relentless eighteen-hour double-boil process, our signature
              <span className="text-gold"> &apos;Awakening&apos; </span>
              broth is the soul of Modu Ramen.
            </p>

            <p className="text-paper/80 text-lg md:text-xl font-light leading-relaxed italic">
              We meticulously extract every layer of depth from premium ingredients,
              resulting in a rich, velvety texture that honors
              <span className="text-gold font-medium"> twenty-six years of culinary mastery </span>
              and Japanese tradition.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}