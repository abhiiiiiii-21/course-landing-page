"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

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
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const lines = gsap.utils.toArray('.gsap-line');
    gsap.set(lines, { yPercent: 100, opacity: 0 });
    
    gsap.to(lines, {
      duration: 1.2,
      yPercent: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  const staggerContainer = {
    hidden: {},
    visible: { 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
    }
  };

  return (
    <section id="why-choose" className="relative w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto lg:border-x lg:border-gray-300/70 bg-[#f6f6f6]">
      <div className="flex flex-col items-center relative z-10">
        
        {/* Headings */}
        <motion.div 
          ref={containerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl text-center mb-12 sm:mb-20 px-2 sm:px-0"
        >
          <h2 
            className={`text-2xl sm:text-3xl md:text-[2.25rem] leading-[1.2] sm:leading-[1.25] font-medium mb-6 sm:mb-8 tracking-tight transition-colors duration-500 ${isActive ? 'text-gray-900' : 'text-gray-500'}`}
          >
            {/* Desktop Layout */}
            <div className="hidden sm:block">
              <span className="block overflow-hidden -mb-1">
                <span className="gsap-line block pb-1">
                  We know choosing the right legal course
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="gsap-line block pb-1">
                  shouldn't be a <span className={`transition-colors duration-500 ${isActive ? 'text-[#F7931E]' : 'text-gray-900'}`}>leap of faith.</span>
                </span>
              </span>
            </div>
            {/* Mobile Layout */}
            <div className="block sm:hidden">
              <span className="block overflow-hidden -mb-1">
                <span className="gsap-line block pb-1">
                  We know choosing the right
                </span>
              </span>
              <span className="block overflow-hidden -mb-1">
                <span className="gsap-line block pb-1">
                  legal course shouldn't be a
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="gsap-line block pb-1">
                  <span className={`transition-colors duration-500 ${isActive ? 'text-[#F7931E]' : 'text-gray-900'}`}>leap of faith.</span>
                </span>
              </span>
            </div>
          </h2>
          
          <h3 
            className={`text-2xl sm:text-3xl md:text-[2.25rem] leading-[1.2] sm:leading-[1.25] font-medium tracking-tight transition-colors duration-500 ${isActive ? 'text-gray-900' : 'text-gray-500'}`}
          >
            {/* Desktop Layout */}
            <div className="hidden sm:block">
              <span className="block overflow-hidden -mb-1 sm:-mb-2">
                <span className="gsap-line block pb-1 sm:pb-2">
                  <span className={`transition-colors duration-500 ${isActive ? 'text-[#F7931E]' : 'text-gray-900'}`}>Compare</span> what most online courses offer
                </span>
              </span>
              <span className="block overflow-hidden -mb-1 sm:-mb-2">
                <span className="gsap-line flex items-center gap-2 sm:gap-3 align-middle justify-center flex-wrap pb-1 sm:pb-2">
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
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="gsap-line block pb-1 sm:pb-2">
                  experience at <span className={`transition-colors duration-500 ${isActive ? 'text-[#F7931E]' : 'text-gray-900'}`}>Lawctopus Law School.</span>
                </span>
              </span>
            </div>

            {/* Mobile Layout */}
            <div className="flex sm:hidden flex-col items-center justify-center">
              <span className="block overflow-hidden -mb-1">
                <span className="gsap-line block pb-1">
                  <span className={`transition-colors duration-500 ${isActive ? 'text-[#F7931E]' : 'text-gray-900'}`}>Compare</span> what most online
                </span>
              </span>
              <span className="block overflow-hidden -mb-1">
                <span className="gsap-line block pb-1">
                  courses offer
                </span>
              </span>
              <span className="block overflow-hidden -mb-1">
                <span className="gsap-line flex items-center justify-center gap-2 pb-1">
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
                  practical
                </span>
              </span>
              <span className="block overflow-hidden -mb-1">
                <span className="gsap-line block pb-1">
                  learning experience at
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="gsap-line block pb-1">
                  <span className={`transition-colors duration-500 ${isActive ? 'text-[#F7931E]' : 'text-gray-900'}`}>Lawctopus Law School.</span>
                </span>
              </span>
            </div>
          </h3>
        </motion.div>

        {/* Comparison Table */}
        <div className="relative w-full max-w-[760px] mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 mt-4 md:mt-0">
          
          {/* Left Column - Typical Online Courses */}
          <motion.div 
            initial={{ x: -60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="w-full md:w-1/2 bg-white rounded-2xl md:rounded-tr-none md:rounded-br-none md:rounded-l-2xl py-6 md:py-8 px-5 sm:px-6 md:px-8 z-0 shadow-md border border-gray-100"
          >
            <h4 className="text-[17px] font-semibold text-gray-900 mb-5 md:mb-6 text-center md:text-left">Typical Online Courses</h4>
            
            <ul className="flex flex-col">
              {COMPARISON_DATA.map((item, i) => (
                <li key={`typical-${i}`} className={`flex items-start sm:items-center gap-3 py-3 ${i !== COMPARISON_DATA.length - 1 ? 'border-b border-gray-200 border-dashed' : ''}`}>
                  <Image 
                    src="https://framerusercontent.com/images/ugnop9rgvLtICnv4zctDFsv5Q.svg?width=6&height=9" 
                    alt="Icon" 
                    width={7}
                    height={12}
                    className="w-[7px] h-[12px] object-contain shrink-0 opacity-40 mt-1 sm:mt-0"
                  />
                  <span className="text-[14px] sm:text-[15px] font-medium text-gray-500 leading-tight">{item.typical}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Lawctopus Law School */}
          <motion.div 
            initial={{ x: 60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 60, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="w-full md:w-[55%] rounded-2xl z-10 md:-ml-4 relative md:-my-4"
          >
            {/* Gray Background Base */}
            <div className="absolute inset-0 rounded-2xl bg-[#EAEAEA] shadow-md border border-gray-200 pointer-events-none" />
            
            {/* Orange Background Overlay */}
            <div 
              className={`absolute inset-0 rounded-2xl bg-[#F7A13D] shadow-md transition-opacity duration-500 ease-in-out pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Content Container */}
            <div className="relative z-10 py-8 md:py-12 px-5 sm:px-6 md:px-8">
              <h4 className={`text-[17px] font-semibold mb-5 md:mb-6 text-center md:text-left transition-colors duration-500 ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                Lawctopus Law School
              </h4>
              
              <ul className="flex flex-col">
                {COMPARISON_DATA.map((item, i) => (
                  <li key={`lawctopus-${i}`} className={`flex items-start sm:items-center gap-3 py-3 ${i !== COMPARISON_DATA.length - 1 ? 'border-b border-black/15 border-dashed' : ''}`}>
                    <Image 
                      src="https://framerusercontent.com/images/ugnop9rgvLtICnv4zctDFsv5Q.svg?width=6&height=9" 
                      alt="Icon" 
                      width={7}
                      height={12}
                      className={`w-[7px] h-[12px] object-contain shrink-0 mt-1 sm:mt-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}
                    />
                    <span className={`text-[14px] sm:text-[15px] font-semibold leading-tight transition-colors duration-500 ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                      {item.lawctopus}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute -top-12 -right-12 sm:-right-48 hidden xl:flex flex-col items-center pointer-events-none rotate-[12deg]">
              <span 
                style={{ fontFamily: 'var(--font-caveat)' }} 
                className="text-[#FF6321] text-[20px] tracking-wide font-medium whitespace-nowrap mb-1"
              >
                Why Choose this course
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" fill="none" className="opacity-90 rotate-[135deg] -ml-8">
                <path fill="#FF6321" d="M27.933 3.426c.218.018.43.18.42.42-.01.21-.186.44-.42.42a24.734 24.734 0 0 0-8.242.68 26.07 26.07 0 0 0-3.922 1.337 25.717 25.717 0 0 0-3.667 1.97 23.484 23.484 0 0 0-3.274 2.537 24.172 24.172 0 0 0-2.754 3.014 25.55 25.55 0 0 0-2.252 3.506 24.685 24.685 0 0 0-1.633 3.765 25.822 25.822 0 0 0-1.099 4.543l-.03.218-.005.033-.004.03-.023.175A25.017 25.017 0 0 0 .84 29.2c.001.339.01.677.025 1.015.01.22-.2.43-.42.42a.429.429 0 0 1-.42-.42 25.585 25.585 0 0 1 1.06-8.437 26.292 26.292 0 0 1 3.69-7.615 25.21 25.21 0 0 1 6.023-6.04 26.186 26.186 0 0 1 7.645-3.704 25.76 25.76 0 0 1 8.473-1.06c.34.015.679.037 1.018.067Z"/>
                <path fill="#FF6321" d="M25.647.12c.168.163.343.317.525.463l.097.076a9.09 9.09 0 0 0 .38.275c.377.26.77.495 1.168.722.798.455 1.617.876 2.381 1.387.446.297.874.625 1.262.994.241.23.102.603-.186.702a56.01 56.01 0 0 0-3.338 1.274l-.074.03-.017.008a56.949 56.949 0 0 0-2.95 1.351c-.197.097-.464.06-.575-.15-.1-.19-.06-.471.15-.575a56.92 56.92 0 0 1 5.876-2.499l-.009-.006-.052-.042a8.97 8.97 0 0 0-.427-.307 17.025 17.025 0 0 0-1.171-.718c-.799-.454-1.617-.876-2.38-1.39A9.16 9.16 0 0 1 25.053.714c-.158-.153-.165-.442 0-.594a.428.428 0 0 1 .594 0Z"/>
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
