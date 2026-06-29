'use client';
import React from 'react';
import { motion } from 'framer-motion';
import footerData from '@/data/footer.json';
import linksData from '@/data/links.json';
import Image from 'next/image';
import Link from 'next/link';
import { SplitTextReveal } from './SplitTextReveal';

const CTA = () => {
  const { cta } = footerData;
  const ctaLink = cta.button.link || '#pricing';

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#') && href !== '#') {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="pt-16 md:pt-24 bg-transparent pb-0">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className="bg-[#e6e6e6] rounded-[21px] p-1.5 sm:p-2.5 pb-0 sm:pb-0 rounded-b-none">
          <div className="relative bg-white rounded-[16px] overflow-hidden py-12 sm:py-16 px-4 sm:px-10 text-center flex flex-col items-center">
            <Image 
              src="/cta/main.avif"
              alt="CTA Background"
              width={1000}
              height={400}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative z-10 flex flex-col items-center w-full">
              
              <div className="flex items-center gap-2 mb-6">
              <Image 
                src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" 
                alt="Left Dots" 
                width={6}
                height={10}
                className="w-[6px] h-[10px] opacity-60 brightness-0"
              />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#1c1c1c]/70 uppercase pt-[1px]">
                {cta.badge}
              </span>
              <Image 
                src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" 
                alt="Right Dots" 
                width={6}
                height={10}
                className="w-[6px] h-[10px] opacity-60 brightness-0 scale-x-[-1]"
              />
            </div>

            <h2 className="text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] font-medium leading-[1.2] text-[#1c1c1c] tracking-tight mb-4 max-w-2xl px-2">
              <SplitTextReveal as="span" className="block">
                {cta.titleLine1}
              </SplitTextReveal>
              <SplitTextReveal as="span" className="block">
                {cta.titleLine2}
              </SplitTextReveal>
            </h2>
            
            <SplitTextReveal 
              as="p"
              className="text-[#1c1c1c]/80 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-6 sm:mb-8 max-w-xl px-4"
            >
              {cta.subtitle}
            </SplitTextReveal>

            <div className="relative inline-block">
              <Link 
                onClick={handleScroll}
                href={ctaLink} 
                className="group inline-flex items-center justify-center bg-white text-[#1c1c1c] text-[15px] font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                <div className="relative overflow-hidden leading-tight">
                  <span
                    className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full"
                    data-text={cta.button.text}
                  >
                    {cta.button.text}
                  </span>
                </div>
              </Link>
              
              <motion.div 
                className="absolute -bottom-5 sm:-bottom-6 -right-8 sm:-right-14 opacity-90 pointer-events-none select-none z-20"
              animate={{
                x: [8, -8, 8],
                y: [-8, 8, -8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image 
                src="https://framerusercontent.com/images/2PB9oitZSlqqMV0SLwcGIcMsE3I.svg?width=88&height=40"
                alt="Decorative Element"
                width={88}
                height={40}
                className="w-[70px] h-[32px] sm:w-[88px] sm:h-[40px] object-contain"
              />
            </motion.div>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
