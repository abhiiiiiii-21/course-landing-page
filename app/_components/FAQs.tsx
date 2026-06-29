'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import faqsData from '@/data/faqs.json';
import Image from 'next/image';
import { SplitTextReveal } from './SplitTextReveal';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-transparent relative">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 relative">
        
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image 
              src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" 
              alt="Left Dots" 
              width={7}
              height={12}
              className="w-[7px] h-[12px] opacity-40"
            />
            <span className="text-[12px] font-bold tracking-[0.2em] text-gray-500 uppercase">
              {faqsData.badge}
            </span>
            <Image 
              src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" 
              alt="Right Dots" 
              width={7}
              height={12}
              className="w-[7px] h-[12px] opacity-40 scale-x-[-1]"
            />
          </div>
          
          <div className="relative inline-block">
            <SplitTextReveal 
              as="h2"
              className="text-[2.5rem] sm:text-[3.5rem] leading-[1.1] font-medium text-gray-900 tracking-tight"
            >
              {faqsData.title}
            </SplitTextReveal>
            
            {/* Handwritten text & arrow */}
            <div className="absolute top-10 -right-8 sm:-right-85 hidden xl:flex flex-col items-center pointer-events-none rotate-12">
              <span 
                style={{ fontFamily: 'var(--font-caveat)' }} 
                className="text-[#F7931E] text-[22px] tracking-wide font-medium whitespace-nowrap mb-1"
              >
                {faqsData.arrowText}
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="31" 
                fill="none" 
                className="opacity-90 rotate-[165deg] ml-6 mt-1"
              >
                <path fill="#F7931E" d="M27.933 3.426c.218.018.43.18.42.42-.01.21-.186.44-.42.42a24.734 24.734 0 0 0-8.242.68 26.07 26.07 0 0 0-3.922 1.337 25.717 25.717 0 0 0-3.667 1.97 23.484 23.484 0 0 0-3.274 2.537 24.172 24.172 0 0 0-2.754 3.014 25.55 25.55 0 0 0-2.252 3.506 24.685 24.685 0 0 0-1.633 3.765 25.822 25.822 0 0 0-1.099 4.543l-.03.218-.005.033-.004.03-.023.175A25.017 25.017 0 0 0 .84 29.2c.001.339.01.677.025 1.015.01.22-.2.43-.42.42a.429.429 0 0 1-.42-.42 25.585 25.585 0 0 1 1.06-8.437 26.292 26.292 0 0 1 3.69-7.615 25.21 25.21 0 0 1 6.023-6.04 26.186 26.186 0 0 1 7.645-3.704 25.76 25.76 0 0 1 8.473-1.06c.34.015.679.037 1.018.067Z"/>
                <path fill="#F7931E" d="M25.647.12c.168.163.343.317.525.463l.097.076a9.09 9.09 0 0 0 .38.275c.377.26.77.495 1.168.722.798.455 1.617.876 2.381 1.387.446.297.874.625 1.262.994.241.23.102.603-.186.702a56.01 56.01 0 0 0-3.338 1.274l-.074.03-.017.008a56.949 56.949 0 0 0-2.95 1.351c-.197.097-.464.06-.575-.15-.1-.19-.06-.471.15-.575a56.92 56.92 0 0 1 5.876-2.499l-.009-.006-.052-.042a8.97 8.97 0 0 0-.427-.307 17.025 17.025 0 0 0-1.171-.718c-.799-.454-1.617-.876-2.38-1.39A9.16 9.16 0 0 1 25.053.714c-.158-.153-.165-.442 0-.594a.428.428 0 0 1 .594 0Z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* FAQs Container */}
        <div className="bg-[#e6e6e6] rounded-[24px] p-3 flex flex-col gap-2">
          {faqsData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[16px] overflow-hidden shadow-sm"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
                >
                  <span className="text-[16px] sm:text-[17px] font-medium text-gray-900 pr-4">
                    {idx + 1}. {faq.question}
                  </span>
                  
                  <div className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-[#1C1C1C] rounded-full flex items-center justify-center text-white transition-transform duration-300">
                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? (
                        <Minus className="w-[18px] h-[18px]" strokeWidth={2.5} />
                      ) : (
                        <Plus className="w-[18px] h-[18px]" strokeWidth={2.5} />
                      )}
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-gray-600 text-[15px] sm:text-[16px] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQs;
