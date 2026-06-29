'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import featuresData from '@/data/features.json';
import { SplitTextReveal } from './SplitTextReveal';

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate rotation and active index based on 5 steps
  const smoothRotate = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const activeIndexRaw = useTransform(scrollYProgress, [0, 1], [0, 4]);
  
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1280);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useMotionValueEvent(activeIndexRaw, "change", (latest) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1280) {
      setCurrent(Math.round(latest));
    }
  });

  const activeFeature = featuresData.features[current] || featuresData.features[0];

  return (
    <section id="features" ref={containerRef} className="relative xl:h-[500vh] w-full z-10">
      <div className="xl:sticky top-0 left-0 w-full xl:h-screen overflow-hidden pt-16 xl:pt-28 pb-32 xl:pb-0 flex flex-col items-center xl:mb-20">
        
        {/* Header */}
        <div className="text-center z-10 px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" alt="Icon" width={6} height={10} className="opacity-60 brightness-0" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#1c1c1c]/70 uppercase pt-[1px]">{featuresData.badge}</span>
            <Image src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" alt="Icon" width={6} height={10} className="opacity-60 brightness-0 scale-x-[-1]" />
          </div>
          <SplitTextReveal as="h2" className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3rem] leading-[1.2] sm:leading-[1.15] font-medium tracking-tight text-[#1c1c1c] max-w-4xl mx-auto mb-4 px-2 sm:px-0">
            {featuresData.heading}
          </SplitTextReveal>
        </div>

        {/* Arch and Content Container */}
        <div className="relative w-full flex-1 min-h-[480px] xl:min-h-0 mt-8 xl:mt-16 pointer-events-none">
          
          {/* Rotating Arch */}
          <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[780px] h-[450px] md:w-[1100px] md:h-[570px] flex justify-center pt-[50px] overflow-hidden pointer-events-none [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
            <motion.div 
              className="relative shrink-0 w-[700px] h-[700px] md:w-[1000px] md:h-[1000px] rounded-full border-[2.5px] border-white bg-[#f4f3ef] shadow-[0_0_20px_rgba(0,0,0,0.02),inset_0_4px_15px_rgba(0,0,0,0.03)]"
              style={!isMobile ? { rotate: smoothRotate } : undefined}
              animate={isMobile ? { rotate: -current * 45 } : undefined}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {featuresData.features.map((f, i) => {
                const angle = i * 45;
                const isActive = current === i;
                const isVisible = Math.abs(current - i) <= 1;
                
                return (
                  <div 
                    key={i}
                    className={`absolute top-0 left-[50%] h-[50%] w-16 origin-bottom pointer-events-none transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ marginLeft: "-32px", transform: `rotate(${angle}deg)` }}
                  >
                    <div className="relative -mt-8 flex flex-col items-center justify-center">
                      <div 
                        className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-[14px] transition-all duration-500 ${
                          isActive 
                            ? 'bg-[#F7931E] text-white scale-110' 
                            : 'bg-white border border-gray-200/60 text-[#1c1c1c]/60'
                        }`}
                      >
                        <span className={`text-lg md:text-xl font-medium ${isActive ? 'text-white' : ''}`}>
                          {f.step}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Active Content Overlay */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full px-4 pt-[110px] sm:pt-[130px] flex flex-col items-center pointer-events-auto">
            <div className="max-w-xl w-full text-center">
              <div className="min-h-[250px] md:min-h-[230px] flex flex-col justify-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SplitTextReveal as="h3" className="text-[1.8rem] md:text-[2.2rem] font-medium text-[#1c1c1c] mb-4">
                      {activeFeature.title}
                    </SplitTextReveal>
                    <SplitTextReveal as="p" className="text-[#1c1c1c]/70 text-[15px] md:text-[16px] leading-relaxed mb-8 max-w-[480px] mx-auto">
                      {activeFeature.description}
                    </SplitTextReveal>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8 py-5 border-y border-dashed border-[#1c1c1c]/10 text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#1c1c1c]/60 uppercase w-full">
                      {activeFeature.highlights.map((h, idx) => (
                        <React.Fragment key={idx}>
                          <span>{h}</span>
                          {idx < activeFeature.highlights.length - 1 && (
                            <span className="w-1 h-1 rounded-full bg-[#1c1c1c]/20" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-2 md:mt-4">
                <Link 
                  href="#pricing" 
                  className="group inline-flex items-center justify-center bg-[#F7931E] text-white px-8 py-3.5 rounded-[10px] font-medium transition-colors cursor-pointer whitespace-nowrap"
                >
                  <div className="relative overflow-hidden leading-tight">
                    <span
                      className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full"
                      data-text={featuresData.features[0].buttonText}
                    >
                      {featuresData.features[0].buttonText}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Pagination Indicators & Mobile Controls */}
        <div className="absolute bottom-6 xl:bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-between w-full max-w-[320px] xl:max-w-none xl:w-auto xl:justify-center z-20 px-4">
          
          <button 
            onClick={() => setCurrent(p => Math.max(0, p - 1))}
            disabled={current === 0}
            className={`xl:hidden w-11 h-11 rounded-full bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center transition-all active:scale-95 ${current === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-50 hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)] text-[#F7931E]'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div className="flex flex-col items-center">
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#1c1c1c]/50 mb-3">
              0{current + 1}/05
            </div>
            <div className="flex items-center gap-2">
              {featuresData.features.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    current === i ? "bg-[#F7931E]" : "bg-[#1c1c1c]/10"
                  }`} 
                />
              ))}
            </div>
          </div>

          <button 
            onClick={() => setCurrent(p => Math.min(featuresData.features.length - 1, p + 1))}
            disabled={current === featuresData.features.length - 1}
            className={`xl:hidden w-11 h-11 rounded-full bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center transition-all active:scale-95 ${current === featuresData.features.length - 1 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-50 hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)] text-[#F7931E]'}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Features;