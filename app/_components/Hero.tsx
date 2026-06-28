"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const ALL_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces",
];

const Hero = () => {
  const [avatars, setAvatars] = useState(ALL_AVATARS.slice(0, 3));
  const [count, setCount] = useState(98);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
      setAvatars((prev) => {
        const available = ALL_AVATARS.filter((a) => !prev.includes(a));
        const nextAvatar = available[Math.floor(Math.random() * available.length)];
        return [nextAvatar, ...prev.slice(0, 2)];
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative w-full py-8 lg:py-8 px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto lg:border-x lg:border-gray-300/70">
      {/* Center Vertical Separator */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300/70 hidden lg:block -translate-x-1/2 pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start lg:pt-10"
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-[#F4F2F0] border border-white shadow-[inset_0px_0px_5px_0px_rgba(6,6,18,0.18)] mb-6 cursor-default">
            {/* Left Dots */}
            <img 
              src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" 
              alt="Icon" 
              className="w-[7px] h-[12px] object-contain"
            />
            
            <span className="text-[10px] font-extrabold text-[#69686E] tracking-[0.15em] uppercase leading-none mt-[1px]">
              6-Month Live Program
            </span>

            {/* Right Dots */}
            <img 
              src="https://framerusercontent.com/images/T2mfWqIsv4Kpdf5hFk22cxmmg78.svg?width=9&height=15" 
              alt="Icon" 
              className="w-[7px] h-[12px] object-contain"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.15] font-semibold tracking-tight text-gray-900 mb-5">
            Master Contract{" "}
            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#F7931E] rounded-lg lg:rounded-xl mx-1 align-middle transform -rotate-12 hover:rotate-0 transition-transform duration-300">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" strokeWidth={2.5} />
            </span>
            <br />
            Drafting & Build a<br />
            Legal Career
          </h1>

          {/* Paragraph */}
          <p className="text-base text-gray-600 mb-8 max-w-xl leading-relaxed">
            Master 24+ real-world contracts through 54 live sessions, learn legal freelancing, receive career support, and build the practical skills top law <br />firms and clients are looking for all in one premium 6-month program.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-10 w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-black text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer">
              Start Learning Today
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center bg-transparent border border-gray-200 hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer">
              Course Curriculum
            </button>
          </div>

          {/* Students / Rating */}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex -space-x-3 overflow-hidden px-1 py-1">
              <AnimatePresence mode="popLayout">
                {avatars.map((src, i) => (
                  <motion.img
                    layout
                    key={src}
                    src={src}
                    alt="Student"
                    initial={{ x: -30 }}
                    animate={{ x: 0, zIndex: 10 - i }}
                    exit={{ x: 30, zIndex: -1, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white object-cover shadow-sm relative shrink-0"
                  />
                ))}
              </AnimatePresence>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white bg-gray-50 shadow-sm flex items-center justify-center relative z-20 text-[11px] font-bold text-gray-700 overflow-hidden tabular-nums">
                <div className="flex">
                  {`+${count}`.split("").map((char, index, arr) => {
                    const rightIndex = arr.length - index - 1;
                    return (
                      <div key={rightIndex} className="relative inline-flex items-center justify-center">
                        <AnimatePresence mode="popLayout">
                          <motion.span
                            key={char}
                            initial={{ y: 24 }}
                            animate={{ y: 0 }}
                            exit={{ y: -24 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-block"
                          >
                            {char}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-0.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#FF5B22] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[15px] sm:text-base font-semibold text-gray-700">4.9/5</span>
              </div>
              <span className="text-[13px] sm:text-[15px] text-gray-500 font-medium">
                Trusted by <span className="font-bold text-gray-900">Aspiring Lawyers</span> Across India
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Content / Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative w-full h-[400px] sm:h-[500px] lg:h-[620px] rounded-xl overflow-hidden"
        >
          <img
            src="/images/hero_legal_educator.png"
            alt="Instructor waving"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;