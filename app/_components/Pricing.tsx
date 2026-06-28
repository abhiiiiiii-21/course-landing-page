'use client';
import React from 'react';
import pricingData from '@/data/pricing.json';

const CheckIcon = ({ highlight }: { highlight?: boolean }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="9" 
    height="15" 
    fill="none"
    viewBox="0 0 9 15"
    className={`scale-x-[-1] ${highlight ? "text-white" : "text-[#F7931E]"}`}
  >
    <path fill="currentColor" d="M1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m3 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m3 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-3-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m3-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
  </svg>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" 
              alt="Left Dots" 
              className="w-[7px] h-[12px] opacity-40"
            />
            <span className="text-[12px] font-bold tracking-[0.2em] text-gray-500 uppercase">
              Pricing
            </span>
            <img 
              src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" 
              alt="Right Dots" 
              className="w-[7px] h-[12px] opacity-40 scale-x-[-1]"
            />
          </div>
          <h2 className="text-[2.5rem] sm:text-[3rem] leading-[1.2] font-medium text-gray-900 tracking-tight mb-4">
            Choose Your <span className="text-[#F7931E]">Learning Path</span>
          </h2>
          <p className="text-gray-500 text-lg">
            {pricingData.sectionSubtitle}
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="max-w-[1000px] mx-auto bg-[#e6e6e6] rounded-[32px] p-2.5 sm:p-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
            
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
                {plan.highlight ? (
                  <img 
                    src="https://framerusercontent.com/images/9BY8QGZ6BC7rUougPKebw9pUP00.svg" 
                    alt="Fire" 
                    className="absolute bottom-0 right-0 w-[120px] opacity-20 pointer-events-none"
                  />
                ) : (
                  <img 
                    src="https://framerusercontent.com/images/yIJ73LClsZ5nE4tcWMpobKYTlQ.svg" 
                    alt="Rocket" 
                    className="absolute bottom-0 right-[20px] w-[80px] opacity-[0.03] pointer-events-none grayscale"
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
                        {plan.price}
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

                  <a 
                    href="https://www.lawctopuslawschool.com/courses/cdn6-months" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`mt-auto w-full text-center py-4 rounded-lg font-bold text-[15px] transition-colors block ${
                      plan.highlight 
                        ? 'bg-[#1c1c1c] text-white hover:bg-black' 
                        : 'bg-[#F7931E] text-white hover:bg-[#e0861b]'
                    }`}
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Pricing;
