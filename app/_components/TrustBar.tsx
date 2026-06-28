"use client";

import React from "react";
import { GraduationCap, FileText, Video, Briefcase, Laptop, Sparkles } from "lucide-react";

const MARQUEE_ITEMS = [
  { text: "6-Month Live Program", icon: GraduationCap },
  { text: "24+ Real-World Contracts", icon: FileText },
  { text: "54 Live Sessions", icon: Video },
  { text: "Career & Placement Support", icon: Briefcase },
  { text: "Legal Freelancing", icon: Laptop },
  { text: "AI-Ready Legal Skills", icon: Sparkles },
];

const TrustBar = () => {
  return (
    <div className="w-full py-6 lg:py-8 bg-transparent">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        {/* Text */}
        <div className="flex-shrink-0 text-center lg:text-left">
          <p className="text-gray-600 font-medium text-sm sm:text-[15px] leading-snug">
            Trusted by <span className="text-[#F7931E] font-bold">8,000+</span><br className="hidden lg:block" />
            Law Students
          </p>
        </div>

        {/* Divider for desktop */}
        <div className="hidden lg:block w-12 h-px bg-gray-300/70"></div>

        {/* Scrolling Features */}
        <div className="flex-1 w-full overflow-hidden relative">
          
          {/* Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#f6f6f6] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#f6f6f6] to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Track */}
          <div className="flex w-max animate-marquee items-center h-full py-2">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-3 px-6 sm:px-8 shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" strokeWidth={1.5} />
                  <span className="text-[13px] sm:text-[14px] font-medium text-gray-700 uppercase tracking-wider">
                    {item.text}
                  </span>
                  {/* Dot Separator */}
                  <div className="w-1 h-1 rounded-full bg-gray-300 ml-6 sm:ml-8"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
