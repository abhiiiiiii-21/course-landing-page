"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const COMPARISON_DATA = [
  { typical: "Pre-recorded videos", lawctopus: "54 Live Interactive Sessions" },
  { typical: "Limited drafting practice", lawctopus: "Draft 24+ Real-World Contracts" },
  { typical: "Theory-focused learning", lawctopus: "Hands-on Practical Training" },
  { typical: "No freelancing guidance", lawctopus: "Learn Legal Freelancing" },
  { typical: "Minimal mentorship", lawctopus: "Personal Mentor Support" },
  { typical: "No placement assistance", lawctopus: "Career & Placement Support" },
];

export default function WhyChoose() {
  const [isActive, setIsActive] = useState(true);

  return (
    <section className="relative w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto lg:border-x lg:border-gray-300/70 bg-[#f6f6f6]">
      <div className="flex flex-col items-center relative z-10">
        
        {/* Headings */}
        <div className="max-w-3xl text-center mb-12 sm:mb-20 px-2 sm:px-0">
          <h2 className={`text-2xl sm:text-3xl lg:text-[2.25rem] leading-[1.3] font-medium mb-6 sm:mb-8 tracking-tight transition-colors duration-500 ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
            We know choosing the right legal course{' '}
            <br className="hidden sm:block" />
            shouldn't be a <span className={`transition-colors duration-500 ${isActive ? 'text-[#F7931E]' : 'text-gray-900'}`}>leap of faith.</span>
          </h2>
          <h3 className={`text-2xl sm:text-3xl lg:text-[2.25rem] leading-[1.4] sm:leading-[1.4] font-medium tracking-tight transition-colors duration-500 ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
            <span className={`transition-colors duration-500 ${isActive ? 'text-[#F7931E]' : 'text-gray-900'}`}>Compare</span> what most online <br className="block sm:hidden" /> courses offer{' '}
            <br className="block" />
            <span className="inline-flex items-center gap-2 sm:gap-3 align-middle justify-center flex-wrap my-1 sm:my-0">
              with the 
              <button
                type="button"
                role="switch"
                aria-checked={isActive}
                onClick={() => setIsActive(!isActive)}
                className={`relative inline-flex h-[26px] w-[46px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-500 ease-in-out focus:outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] -top-0.5 ${isActive ? 'bg-[#F26419]' : 'bg-gray-600'}`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white shadow-sm ring-0 transition-transform duration-500 ease-in-out ${isActive ? 'translate-x-[20px]' : 'translate-x-[2px]'}`}
                />
              </button>
              practical learning
            </span>{' '}
            <br className="block" />
            experience at <br className="block sm:hidden" />
            <span className={`transition-colors duration-500 ${isActive ? 'text-[#F7931E]' : 'text-gray-900'}`}>Lawctopus Law School.</span>
          </h3>
        </div>

        {/* Comparison Table */}
        <div className="relative w-full max-w-[760px] mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mt-4 md:mt-0">
          
          {/* Left Column - Typical Online Courses */}
          <div className="w-full md:w-1/2 bg-white rounded-2xl md:rounded-tr-none md:rounded-br-none md:rounded-l-2xl py-6 md:py-8 px-5 sm:px-6 md:px-8 z-0 shadow-sm border border-gray-100">
            <h4 className="text-[17px] font-semibold text-gray-900 mb-5 md:mb-6 text-center md:text-left">Typical Online Courses</h4>
            
            <ul className="flex flex-col">
              {COMPARISON_DATA.map((item, i) => (
                <li key={`typical-${i}`} className={`flex items-start sm:items-center gap-3 py-3 ${i !== COMPARISON_DATA.length - 1 ? 'border-b border-gray-200 border-dashed' : ''}`}>
                  <img 
                    src="https://framerusercontent.com/images/ugnop9rgvLtICnv4zctDFsv5Q.svg?width=6&height=9" 
                    alt="Icon" 
                    className="w-[7px] h-[12px] object-contain shrink-0 opacity-40 mt-1 sm:mt-0"
                  />
                  <span className="text-[14px] sm:text-[15px] font-medium text-gray-500 leading-tight">{item.typical}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Lawctopus Law School */}
          <div className="w-full md:w-[55%] rounded-2xl z-10 md:-ml-4 relative md:-my-4">
            {/* Gray Background Base */}
            <div className="absolute inset-0 rounded-2xl bg-[#EAEAEA] shadow-sm border border-gray-200 pointer-events-none" />
            
            {/* Orange Gradient Overlay */}
            <div 
              className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-[#ffb471] to-[#F7931E] shadow-[0_20px_40px_-15px_rgba(247,147,30,0.4)] transition-opacity duration-500 ease-in-out pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Content Container */}
            <div className="relative z-10 py-8 md:py-12 px-5 sm:px-6 md:px-8">
              <h4 className={`text-[17px] font-semibold mb-5 md:mb-6 text-center md:text-left transition-colors duration-500 ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                Lawctopus Law School
              </h4>
              
              <ul className="flex flex-col">
                {COMPARISON_DATA.map((item, i) => (
                  <li key={`lawctopus-${i}`} className={`flex items-start sm:items-center gap-3 py-3 ${i !== COMPARISON_DATA.length - 1 ? 'border-b border-black/10' : ''}`}>
                    <img 
                      src="https://framerusercontent.com/images/ugnop9rgvLtICnv4zctDFsv5Q.svg?width=6&height=9" 
                      alt="Icon" 
                      className={`w-[7px] h-[12px] object-contain shrink-0 mt-1 sm:mt-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}
                    />
                    <span className={`text-[14px] sm:text-[15px] font-semibold leading-tight transition-colors duration-500 ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                      {item.lawctopus}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
