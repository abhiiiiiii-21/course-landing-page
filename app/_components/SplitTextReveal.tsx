"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SplitTextRevealProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const SplitTextReveal = ({ children, className = "", as: Tag = "div" }: SplitTextRevealProps) => {
  const textRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    // Wait for fonts to load before splitting
    document.fonts.ready.then(() => {
      if (!textRef.current) return;
      
      const split = new SplitType(textRef.current, { 
        types: 'lines',
        lineClass: 'split-line' 
      });

      // Wrap each line in a mask to replicate SplitText mask: 'lines'
      split.lines?.forEach(line => {
        const wrapper = document.createElement('div');
        wrapper.style.overflow = 'hidden';
        wrapper.style.display = 'block'; 
        wrapper.style.paddingBottom = '4px'; // Ensure text doesn't get cut off at the bottom
        wrapper.style.marginBottom = '-4px'; // Compensate for padding
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      gsap.set(textRef.current, { opacity: 1 });

      gsap.from(split.lines, {
        duration: 1.2,
        yPercent: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%", 
        }
      });
      
      // Cleanup on unmount or resize
      const handleResize = () => {
        split.revert();
        // Simple reload or we just let it be for now since it's a reveal animation
      };
      
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        split.revert();
      };
    });
  }, { scope: textRef });

  return (
    <Tag ref={textRef} className={`opacity-0 ${className}`}>
      {children}
    </Tag>
  );
};
