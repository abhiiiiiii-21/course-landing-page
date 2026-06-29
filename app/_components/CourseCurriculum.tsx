"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { SplitTextReveal } from "./SplitTextReveal";
import { CheckCircle2, Plus, Minus, PlayCircle, ShieldCheck, MonitorPlay, FileText, Briefcase, GraduationCap } from "lucide-react";

const CURRICULUM = [
  {
    phase: "Months 1 & 2",
    title: "Contracts & Negotiation Fundamentals",
    lessons: [
      { title: "Contract Structure & Core Clauses" },
      { title: "Execution & Legal Formalities" },
      { title: "Contract Lab & Negotiation Exercises" }
    ]
  },

  {
    phase: "Month 3",
    title: "Business Agreements & Career Growth",
    lessons: [
      { title: "Partnership & Shareholder Agreements" },
      { title: "Joint Venture & Business Transfer Agreements" },
      { title: "CV, LinkedIn & Career Building" }
    ]
  },

  {
    phase: "Month 4",
    title: "International Contracts & Freelancing",
    lessons: [
      { title: "International Commercial Agreements" },
      { title: "NDA, Loan & Employment Agreements" },
      { title: "Upwork & Freelancing Mastery" }
    ]
  },

  {
    phase: "Month 5",
    title: "IP & Technology Agreements",
    lessons: [
      { title: "Trademark, Copyright & Patent Agreements" },
      { title: "SAAS & Software Licensing Agreements" },
      { title: "Website Policies & Fiverr Growth" }
    ]
  },

  {
    phase: "Month 6",
    title: "Real Estate & Professional Practice",
    lessons: [
      { title: "Sale Deed & Power of Attorney" },
      { title: "Franchise & Leave License Agreements" },
      { title: "Networking, Negotiation & Final Projects" }
    ]
  }
];

function AccordionItem({ module, isOpen, onClick }: { module: any, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="bg-white rounded-[16px] overflow-hidden transition-all duration-300 shadow-md">
      <button 
        onClick={onClick}
        className="w-full flex flex-col gap-3 p-5 sm:p-6 text-left hover:bg-gray-50/50 transition-colors cursor-pointer"
      >
        <div className="w-full flex items-start justify-between">
          <span className="text-[14px] font-medium text-[#7C7C7C]">{module.phase}</span>
          <div className={`w-[28px] h-[28px] rounded-full bg-[#E8E8E8] flex items-center justify-center text-gray-600 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}>
            {isOpen ? <Minus className="w-4 h-4" strokeWidth={1.5} /> : <Plus className="w-4 h-4" strokeWidth={1.5} />}
          </div>
        </div>
        <span className="text-[20px] sm:text-[22px] font-medium text-gray-900 tracking-tight leading-snug">{module.title}</span>
      </button>
      
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="mx-5 sm:mx-6 border-t border-black/10"></div>
          <div className="px-5 sm:px-6 pb-2">
            <ul className="flex flex-col">
              {module.lessons.map((lesson: any, i: number) => (
                <li key={i} className={`flex items-center gap-4 py-4 ${i !== module.lessons.length - 1 ? 'border-b border-black/10' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" className="shrink-0">
                    <rect width="40" height="40" fill="#F5F5F5" rx="5"/>
                    <path stroke="#F7931E" strokeWidth="1.25" d="M20.333 28.667a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667Z"/>
                    <path stroke="#F7931E" strokeLinejoin="round" strokeWidth="1.25" d="M23.621 20.662c-.147.522-.843.892-2.235 1.63-1.346.713-2.019 1.07-2.56.927a1.4 1.4 0 0 1-.594-.327c-.398-.376-.398-1.103-.398-2.559 0-1.455 0-2.183.398-2.558a1.4 1.4 0 0 1 .593-.327c.542-.144 1.215.213 2.56.927 1.393.738 2.089 1.107 2.236 1.63.061.215.061.442 0 .657Z"/>
                  </svg>
                  <div className="flex flex-col justify-center">
                    <span className="text-[15px] font-medium text-[#7C7C7C] leading-snug">{i + 1}. {lesson.title}</span>
                    {lesson.duration && (
                      <span className="text-[13px] font-medium text-[#3B3838] mt-0.5">{lesson.duration}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CourseCurriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px 0px" });
  
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-10%" });

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section id="curriculum" className="relative w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto lg:border-x lg:border-gray-300/70">
      <div className="flex flex-col items-center relative z-10">
        
        {/* Section Badge */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Image src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" alt="Icon" width={6} height={10} className="opacity-60 brightness-0" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#1c1c1c]/70 uppercase pt-[1px]">Course Curriculum</span>
          <Image src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" alt="Icon" width={6} height={10} className="opacity-60 brightness-0 scale-x-[-1]" />
        </div>

        {/* Headings */}
        <motion.div 
          ref={headerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="max-w-3xl text-center mb-16 sm:mb-20 mx-auto"
        >
          <SplitTextReveal 
            as="h2"
            className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3rem] leading-[1.2] sm:leading-[1.15] font-medium text-gray-900 tracking-tight mb-4 px-2 sm:px-0"
          >
            Master Contract Drafting,<br className="hidden sm:block" />
            <span className="text-[#F7931E] relative inline-block">
              One Practical Module at a Time
            </span>
          </SplitTextReveal>
          <SplitTextReveal 
            as="p"
            className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0"
          >
            A comprehensive, step-by-step curriculum designed to take you from legal basics to professional freelance mastery.
          </SplitTextReveal>
        </motion.div>

        {/* Main Content: Left & Right */}
        <div ref={cardsRef} className="w-full flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch max-w-[1200px] mx-auto">
          
          {/* Left Column - Dark Card */}
          <motion.div 
            initial={{ x: -60, opacity: 0 }}
            animate={isCardsInView ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="w-full lg:flex-1"
          >
            <div className="bg-[#1c1c1c] rounded-[24px] sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-md h-full flex flex-col">
              
              <div className="flex-1 flex flex-col">
                {/* Badge */}
                <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-10">
                  <Image 
                    src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" 
                    alt="Left Dots" 
                    width={5}
                    height={10}
                    className="w-[5px] h-[10px] opacity-40"
                  />
                  <span className="text-[12px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                    30 Days money back guarantee
                  </span>
                  <Image 
                    src="https://framerusercontent.com/images/T2mfWqIsv4Kpdf5hFk22cxmmg78.svg?width=9&height=15" 
                    alt="Right Dots" 
                    width={5}
                    height={10}
                    className="w-[5px] h-[10px] opacity-40 scale-x-[-1]"
                  />
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-medium mb-8 sm:mb-10 tracking-tight text-white leading-tight">
                  What You'll Learn
                </h3>

                {/* Grid Stats */}
                <div className="grid grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-4 sm:gap-x-6 mb-8 sm:mb-10">
                  <div className="flex flex-col gap-1.5 sm:gap-2.5">
                    <div className="flex items-center gap-2 text-[#F7931E]">
                      <MonitorPlay className="w-[18px] h-[18px]" strokeWidth={2.5} />
                      <span className="font-semibold text-[13px]">Format</span>
                    </div>
                    <span className="text-gray-200 text-[15px] font-medium">54 Live Sessions</span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-2 text-[#F7931E]">
                      <FileText className="w-[18px] h-[18px]" strokeWidth={2.5} />
                      <span className="font-semibold text-[13px]">Practice</span>
                    </div>
                    <span className="text-gray-200 text-[15px] font-medium">24+ Contracts</span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-2 text-[#F7931E]">
                      <Briefcase className="w-[18px] h-[18px]" strokeWidth={2.5} />
                      <span className="font-semibold text-[13px]">Outcomes</span>
                    </div>
                    <span className="text-gray-200 text-[15px] font-medium">Career Support</span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center gap-2 text-[#F7931E]">
                      <GraduationCap className="w-[18px] h-[18px]" strokeWidth={2.5} />
                      <span className="font-semibold text-[13px]">Mentors</span>
                    </div>
                    <span className="text-gray-200 text-[15px] font-medium">Expert Faculty</span>
                  </div>
                </div>

                <hr className="border-gray-700/60 mb-6 sm:mb-8" />

                <h4 className="text-[12px] sm:text-[13px] font-medium text-gray-400 mb-5 sm:mb-6 uppercase tracking-wider">Program at a Glance</h4>
                
                <ul className="flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-10">
                  {[
                    '6-Month Structured Live Program',
                    'Draft 24+ Industry-Ready Contracts',
                    'Career Advancement & Placement Support',
                    'Freelancing & Client Acquisition Guidance',
                    'CV & LinkedIn Profile Building',
                    'Upwork & Fiverr Growth Masterclasses',
                    'AI-Ready Legal Career Training'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <Image 
                        src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" 
                        alt="Arrow" 
                        width={9}
                        height={15}
                        className="w-[9px] h-[15px] mt-1 shrink-0 opacity-80"
                      />
                      <span className="text-gray-200 text-[15px] leading-snug font-medium pt-[1px]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 relative">
                <Link 
                  href="/curriculum/main.pdf" 
                  download="Lawctopus_Course_Curriculum.pdf"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-full bg-[#F7931E] hover:bg-[#F7931E] text-white font-semibold rounded-xl py-3 transition-colors duration-300 flex items-center justify-center text-base shadow-lg shadow-orange-500/20"
                >
                  <div className="relative overflow-hidden leading-tight flex items-center h-[24px]">
                    <span
                      className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full"
                      data-text="Download Curriculum"
                    >
                      Download Curriculum
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Curriculum Accordion */}
          <motion.div 
            initial={{ x: 60, opacity: 0 }}
            animate={isCardsInView ? { x: 0, opacity: 1 } : { x: 60, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="relative w-full lg:flex-1 bg-[#E6E6E6] rounded-[24px] p-2 sm:p-3.5 flex flex-col gap-2 sm:gap-3 h-full"
          >
            
            {/* Handwritten arrow and text pointing to the first phase card */}
            <div className="absolute -top-23 -right-8 hidden xl:flex flex-col items-center pointer-events-none rotate-[8deg] z-10 gap-2">
              <span 
                style={{ fontFamily: 'var(--font-caveat)' }} 
                className="text-[#FF6321] text-[20px] tracking-wide font-medium whitespace-nowrap"
              >
                Learn step by step
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" fill="none" className="mb-1 opacity-90 rotate-[150deg]">
                <path fill="#FF6321" d="M27.933 3.426c.218.018.43.18.42.42-.01.21-.186.44-.42.42a24.734 24.734 0 0 0-8.242.68 26.07 26.07 0 0 0-3.922 1.337 25.717 25.717 0 0 0-3.667 1.97 23.484 23.484 0 0 0-3.274 2.537 24.172 24.172 0 0 0-2.754 3.014 25.55 25.55 0 0 0-2.252 3.506 24.685 24.685 0 0 0-1.633 3.765 25.822 25.822 0 0 0-1.099 4.543l-.03.218-.005.033-.004.03-.023.175A25.017 25.017 0 0 0 .84 29.2c.001.339.01.677.025 1.015.01.22-.2.43-.42.42a.429.429 0 0 1-.42-.42 25.585 25.585 0 0 1 1.06-8.437 26.292 26.292 0 0 1 3.69-7.615 25.21 25.21 0 0 1 6.023-6.04 26.186 26.186 0 0 1 7.645-3.704 25.76 25.76 0 0 1 8.473-1.06c.34.015.679.037 1.018.067Z"/>
                <path fill="#FF6321" d="M25.647.12c.168.163.343.317.525.463l.097.076a9.09 9.09 0 0 0 .38.275c.377.26.77.495 1.168.722.798.455 1.617.876 2.381 1.387.446.297.874.625 1.262.994.241.23.102.603-.186.702a56.01 56.01 0 0 0-3.338 1.274l-.074.03-.017.008a56.949 56.949 0 0 0-2.95 1.351c-.197.097-.464.06-.575-.15-.1-.19-.06-.471.15-.575a56.92 56.92 0 0 1 5.876-2.499l-.009-.006-.052-.042a8.97 8.97 0 0 0-.427-.307 17.025 17.025 0 0 0-1.171-.718c-.799-.454-1.617-.876-2.38-1.39A9.16 9.16 0 0 1 25.053.714c-.158-.153-.165-.442 0-.594a.428.428 0 0 1 .594 0Z"/>
              </svg>
            </div>

            {CURRICULUM.map((module, idx) => (
              <AccordionItem 
                key={idx} 
                module={module} 
                isOpen={openIndex === idx} 
                onClick={() => {
                  if (openIndex !== idx) setOpenIndex(idx);
                }} 
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
