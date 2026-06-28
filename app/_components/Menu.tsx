"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import linksData from '@/data/links.json';

const MotionLink = motion(Link);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/5 backdrop-blur-[3px] z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
        className="fixed top-3.5 left-0 w-full flex justify-center z-50 px-4 pointer-events-none"
      >
        <motion.div
          initial={false}
          animate={{ maxWidth: isOpen ? "420px" : "380px" }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="bg-white rounded-[14px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-300/70 overflow-hidden w-full pointer-events-auto"
        >
        {/* Header / Closed Menu State */}
        <div className="flex items-center h-[52px] sm:h-[60px]">
          {/* Left: Logo */}
          <div className="flex-1 h-full flex items-center pl-3 sm:pl-4 pr-1 sm:pr-2">
            <Link href="/" className="cursor-pointer">
              <img src="/logo/full.webp" alt="Logo" className="h-[28px] sm:h-[40px] max-w-[110px] sm:max-w-[160px] w-auto object-contain" />
            </Link>
          </div>
          
          {/* Middle: Hamburger / Close */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-[52px] sm:w-[72px] h-full flex items-center justify-center border-x border-gray-100 hover:bg-gray-50 transition-colors shrink-0 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 scale-90 sm:scale-100">
              <motion.line
                initial={false}
                animate={{
                  x1: isOpen ? 6 : 4,
                  y1: isOpen ? 6 : 10,
                  x2: isOpen ? 18 : 20,
                  y2: isOpen ? 18 : 10,
                  strokeWidth: isOpen ? 1.5 : 1.25,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              />
              <motion.line
                initial={false}
                animate={{
                  x1: isOpen ? 6 : 4,
                  y1: isOpen ? 18 : 14,
                  x2: isOpen ? 18 : 20,
                  y2: isOpen ? 6 : 14,
                  strokeWidth: isOpen ? 1.5 : 1.25,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              />
            </svg>
          </button>

          {/* Right: CTA */}
          <div className="flex-1 h-full flex items-center justify-end pr-2 sm:pr-3 pl-1 sm:pl-2">
            <Link 
              href="https://www.lawctopuslawschool.com/courses/cdn6-months" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-[#1C1C1C] hover:bg-black text-white text-[13px] sm:text-[15px] font-medium px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-md sm:rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <div className="relative overflow-hidden leading-tight">
                <span
                  className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full"
                  data-text="Enroll Now"
                >
                  Enroll Now
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { 
                  height: "auto", 
                  opacity: 1,
                  transition: { 
                    height: { duration: 0.5, delay: 0.15, ease: [0.32, 0.72, 0, 1] }, 
                    opacity: { duration: 0.4, delay: 0.15 },
                    staggerChildren: 0.05,
                    delayChildren: 0.25
                  }
                },
                closed: { 
                  height: 0, 
                  opacity: 0,
                  transition: { 
                    duration: 0.4, 
                    ease: [0.32, 0.72, 0, 1],
                    staggerChildren: 0.02,
                    staggerDirection: -1
                  }
                }
              }}
              className="border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col py-2 px-6">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Overview", href: "#overview" },
                  { label: "Curriculum", href: "#curriculum" },
                  { label: "Faculty", href: "#faculty" },
                  { label: "Pricing", href: "#pricing" }
                ].map(
                  (item) => (
                    <MotionLink
                      variants={{
                        open: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
                        closed: { opacity: 0, x: -10, transition: { duration: 0.2 } }
                      }}
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group block w-full py-3.5 border-b border-gray-300/70 border-dashed last:border-b-0 text-[15px] font-medium transition-colors cursor-pointer ${
                        item.label === "Home"
                          ? "text-[#F7931E]"
                          : "text-[#0F172A] hover:text-[#F7931E]"
                      }`}
                    >
                      <div className="relative overflow-hidden leading-tight inline-block">
                        <span
                          className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full"
                          data-text={item.label}
                        >
                          {item.label}
                        </span>
                      </div>
                    </MotionLink>
                  )
                )}
              </div>

              {/* Footer */}
              <motion.div 
                variants={{
                  open: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
                  closed: { opacity: 0, x: -10, transition: { duration: 0.2 } }
                }}
                className="px-6 py-4 flex items-center justify-between mt-1"
              >
                <div className="flex items-center gap-2">
                  {[
                    { Icon: InstagramIcon, url: linksData[0].instagram },
                    { Icon: XIcon, url: linksData[0].twiter },
                    { Icon: FacebookIcon, url: linksData[0].facebook },
                    { Icon: LinkedinIcon, url: linksData[0].linkedIn },
                    { Icon: YoutubeIcon, url: linksData[0].youtube }
                  ].map(({ Icon, url }, i) => (
                    <Link
                      key={i}
                      href={url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-md bg-[#F4F4F5] text-gray-700 flex items-center justify-center hover:bg-gray-100 hover:text-[#F7931E] transition-colors cursor-pointer"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
                <span className="text-[10px] text-gray-400 font-medium">
                  © 2026 Lawctopus
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Menu;