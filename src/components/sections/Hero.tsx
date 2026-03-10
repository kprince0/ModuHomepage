"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 텍스트 등장 애니메이션
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.2 }
      );

      // 배경 이미지 패럴랙스 효과
      gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* 배경 섹션 */}
      <div className="hero-bg absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-charcoal/40 z-10" />
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/menu/Pork Bulgogi.png`}
          alt="Authentic Japanese Ramen crafted by Chef Kim"
          fill
          priority
          className="object-cover object-center scale-110 contrast-[1.05]"
        />
      </div>

      {/* 메인 텍스트 섹션 */}
      <div ref={textRef} className="z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-6">
          Jacksonville&apos;s Premier Gastronomic Destination.
        </h2>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-paper leading-[1.1] mb-10">
          The Art of Authentic <br className="hidden md:block" /> Japanese Ramen.
        </h1>

        {/* 셰프 경력과 식당 설립년도 구분 */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-12">
          <p className="text-gold text-lg md:text-xl font-medium tracking-wide">
            Chef Kim&apos;s 26-Year Mastery (Since 2000)
          </p>
          <div className="hidden md:block w-px h-6 bg-gold/30" />
          <p className="text-paper/90 text-lg md:text-xl font-light tracking-wide">
            Established 2019 in Jacksonville
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full max-w-sm mx-auto sm:max-w-none">
          <a 
            href="https://getseat.net?channel=merchant_web#/public/online/reservation/8G2AGD47" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-gold text-charcoal hover:bg-paper transition-colors duration-300 uppercase tracking-widest text-sm font-bold shadow-lg shadow-gold/20 text-center"
          >
            Reserve a Table
          </a>
          <a 
            href="https://moduramennzti.web.ordersave.com/menu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-colors duration-300 uppercase tracking-widest text-sm font-bold text-center bg-charcoal/30 backdrop-blur-sm"
          >
            Order Now
          </a>
        </div>


      </div>

      {/* 하단 스크롤 가이드 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] text-paper">Scroll to Discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}