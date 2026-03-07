"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Heritage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".heritage-content > *", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="story" className="py-24 md:py-32 bg-charcoal text-paper relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* 이미지 섹션: 셰프의 장인 정신 시각화 */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm group">
            <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700" />
            <Image
              src="/images/Chef Kim.jpg"
              alt="Chef Kim's culinary mastery"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
            {/* 장식 요소 */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-gold/30 z-0" />
          </div>

          {/* 콘텐츠 섹션: 스토리텔링 */}
          <div className="heritage-content flex flex-col justify-center">
            <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold mb-4 block">The Chef&apos;s Journey</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              A Quarter-Century of <br /> <span className="text-gold italic">Culinary Mastery</span>
            </h2>

            <p className="text-paper/80 mb-6 text-lg font-light leading-relaxed">
              Chef Kim began his profound culinary journey in 2000, dedicating over two decades to mastering the delicate and rigorous art of Japanese ramen. His career is a testament to the belief that the perfect bowl is not just cooked, but crafted through years of disciplined precision.
            </p>

            <p className="text-paper/80 mb-10 text-lg font-light leading-relaxed">
              In 2019, Chef Kim brought this lifetime of expertise to Jacksonville, establishing Modu Ramen with a single mission: to provide an uncompromisingly authentic experience. Every broth, every noodle, and every topping reflects a legacy of flavor that spans over 26 years.
            </p>

            {/* 통계/지표 섹션: 경력과 설립연도 구분 */}
            <div className="flex grid grid-cols-2 gap-8 border-t border-gold/20 pt-10">
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-serif text-gold">26+</span>
                <span className="text-[10px] uppercase tracking-widest text-paper/50 font-bold">Years of <br />Chef Mastery</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-serif text-gold">2019</span>
                <span className="text-[10px] uppercase tracking-widest text-paper/50 font-bold">Established in <br />Jacksonville</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}