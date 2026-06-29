'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import pricingData from '@/data/pricing.json';
import { SplitTextReveal } from './SplitTextReveal';
import refundData from '@/data/refund.json';
import Image from 'next/image';
import Link from 'next/link';

const CheckIcon = ({ highlight }: { highlight?: boolean }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="12" 
    height="12" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={highlight ? "text-white" : "text-gray-900"}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const AnimatedNumber = ({ value }: { value: string }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const prefix = value.replace(/[0-9,]/g, '');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  const count = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      animate(count, numericValue, { 
        duration: 1.2, 
        ease: "easeOut" 
      });
    }
  }, [isInView, numericValue, count]);

  const displayValue = useTransform(count, (current) => {
    return prefix + Math.floor(current).toLocaleString('en-IN');
  });

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" alt="Icon" width={6} height={10} className="opacity-60 brightness-0" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#1c1c1c]/70 uppercase pt-[1px]">Pricing</span>
            <Image src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" alt="Icon" width={6} height={10} className="opacity-60 brightness-0 scale-x-[-1]" />
          </div>
          <SplitTextReveal 
            as="h2"
            className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3rem] leading-[1.2] sm:leading-[1.15] font-medium text-gray-900 tracking-tight mb-4 px-2 sm:px-0"
          >
            Choose Your <span className="text-[#F7931E]">Learning Path</span>
          </SplitTextReveal>
          <SplitTextReveal 
            as="p"
            className="text-gray-500 text-base sm:text-lg max-w-3xl mx-auto px-4 sm:px-0"
          >
            {pricingData.sectionSubtitle}
          </SplitTextReveal>
        </div>

        {/* Pricing Cards Container */}
        <div className="max-w-[1000px] mx-auto bg-[#e6e6e6] rounded-[24px] p-2.5 sm:p-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-3">
            
            {pricingData.plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative rounded-[24px] overflow-hidden flex flex-col ${
                  plan.highlight 
                    ? 'bg-[#F7931E] text-white shadow-md' 
                    : 'bg-white text-gray-900 border border-gray-200 shadow-sm'
                }`}
              >
                {/* Background Watermarks */}
                {!plan.highlight && (
                  <Image 
                    src="https://framerusercontent.com/images/yIJ73LClsZ5nE4tcWMpobKYTlQ.svg" 
                    alt="Rocket" 
                    width={80}
                    height={80}
                    className="absolute bottom-0 right-[20px] w-[80px] h-[80px] opacity-[0.03] pointer-events-none grayscale"
                  />
                )}

                {/* Top Section */}
                <div className="p-2 sm:p-2.5">
                  <div className={`rounded-[16px] p-6 sm:p-8 ${
                    plan.highlight ? 'bg-white text-gray-900' : 'bg-[#F5F4F3]'
                  }`}>
                    <div className="flex justify-between items-start mb-6 gap-2">
                      <span className="text-[13px] font-bold tracking-[0.1em] text-gray-500 uppercase leading-snug">
                        {plan.title}
                      </span>
                      {plan.badge && (
                        <span className="bg-[#F7931E] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap shrink-0">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-baseline gap-3 mb-4">
                      <h3 className="text-[2.25rem] sm:text-[3rem] font-medium leading-none tracking-tight font-inter">
                        <AnimatedNumber value={plan.price} />
                      </h3>
                      {plan.originalPrice && (
                        <span className="text-gray-400 text-[16px] sm:text-[18px] line-through font-medium font-inter">
                          {plan.originalPrice}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed">
                      {plan.description}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <hr className={`mx-8 my-2 border-t border-dashed ${
                  plan.highlight ? 'border-white/40' : 'border-gray-200'
                }`} />

                {/* Features List */}
                <div className="px-6 py-6 sm:px-8 sm:py-8 flex flex-col flex-1 relative z-10">
                  <ul className="flex flex-col gap-4 mb-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`flex items-center justify-center w-5 h-5 rounded-full mt-0.5 shrink-0 ${
                          plan.highlight ? 'bg-white/20' : 'bg-gray-100'
                        }`}>
                          <CheckIcon highlight={plan.highlight} />
                        </div>
                        <span className={`text-[15px] sm:text-[16px] font-medium leading-tight ${
                          plan.highlight ? 'text-white' : 'text-gray-900'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={plan.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`group mt-auto w-full flex items-center justify-center py-3 rounded-xl font-semibold text-base transition-colors duration-300 ${
                      plan.highlight 
                        ? 'bg-[#1c1c1c] text-white hover:bg-[#1c1c1c] shadow-lg shadow-black/20' 
                        : 'bg-[#F7931E] text-white hover:bg-[#F7931E] shadow-lg shadow-orange-500/20'
                    }`}
                  >
                    <div className="relative overflow-hidden leading-tight">
                      <span
                        className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full"
                        data-text={plan.buttonText}
                      >
                        {plan.buttonText}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Refund Policy Container */}
        <div className="max-w-[1000px] mx-auto bg-[#e6e6e6] rounded-[24px] p-2 sm:p-2.5 mt-4 sm:mt-6">
          <div className="bg-[#1C1C1C] rounded-[24px] p-6 sm:p-8 flex flex-col lg:flex-row gap-6 sm:gap-8 relative overflow-hidden">
            
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F7931E] rounded-full blur-[120px] opacity-[0.03] pointer-events-none"></div>

            {/* Left Side - Guarantee Details */}
            <div className="lg:w-5/12 flex flex-col relative z-10 pr-0 lg:pr-4">
              <div className="flex items-center gap-2 mb-5">
                <Image 
                  src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" 
                  alt="Left Dots" 
                  width={6}
                  height={10}
                  className="w-[6px] h-[10px] opacity-40 brightness-0 invert"
                />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase pt-[1px]">
                  {refundData.badge}
                </span>
                <Image 
                  src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" 
                  alt="Right Dots" 
                  width={6}
                  height={10}
                  className="w-[6px] h-[10px] opacity-40 scale-x-[-1] brightness-0 invert"
                />
              </div>
              
              <h3 className="text-3xl sm:text-[2rem] font-medium leading-[1.2] tracking-tight text-white mb-4">
                {refundData.title}
              </h3>
              
              <p className="text-gray-400 text-[15px] leading-relaxed mb-8">
                {refundData.subtitle}
              </p>

              <div className="mt-auto pt-6 border-t border-dashed border-white/20">
                <p className="text-[13px] text-gray-500 italic leading-relaxed">
                  * {refundData.footer}
                </p>
              </div>
            </div>

            {/* Right Side - Eligibility Requirements */}
            <div className="lg:w-7/12 w-full border border-gray-200 bg-[#E6E6E6] rounded-[20px] p-6 sm:p-8 relative z-10">
              <h4 className="text-[16px] font-medium text-gray-900 mb-4 flex items-center gap-2.5 border-b border-dashed border-gray-200 pb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F7931E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                {refundData.eligibilityTitle}
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 mt-6">
                {refundData.requirements.map((req, idx) => (
                  <div key={idx}>
                    <h5 className="font-medium text-gray-900 text-[14.5px] lg:text-[15px] mb-2 flex items-center gap-2.5 whitespace-nowrap">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F7931E] shrink-0"></div>
                      {req.title}
                    </h5>
                    <p className="text-[14px] text-gray-500 pl-4 leading-relaxed">
                      {req.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Pricing;
