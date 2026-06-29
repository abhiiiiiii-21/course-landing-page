'use client';
import React, { useState, useEffect, useRef } from 'react';
import mentors from '@/data/mentors.json';
import { SplitTextReveal } from './SplitTextReveal';

const Mentors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const directionRef = useRef(1);

  // Auto-scroll logic (ping-pong effect)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= mentors.length - 1) {
          directionRef.current = -1;
        } else if (prev <= 0) {
          directionRef.current = 1;
        }
        return prev + directionRef.current;
      });
    }, 5000); // 5 seconds per slide

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="faculty" className="py-24 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img 
              src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" 
              alt="Left Dots" 
              className="w-[7px] h-[12px] opacity-40"
            />
            <span className="text-[12px] font-bold tracking-[0.2em] text-gray-500 uppercase">
              Meet Your Instructors
            </span>
            <img 
              src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" 
              alt="Right Dots" 
              className="w-[7px] h-[12px] opacity-40 scale-x-[-1]"
            />
          </div>
          <SplitTextReveal 
            as="h2"
            className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3rem] leading-[1.2] sm:leading-[1.15] font-medium text-gray-900 tracking-tight mb-4 px-2 sm:px-0"
          >
            Learn from India's <br />
            <span className="text-[#F7931E]">Leading Legal Professionals</span>
          </SplitTextReveal>
          <SplitTextReveal 
            as="p"
            className="text-gray-500 text-base sm:text-lg max-w-3xl mx-auto px-4 sm:px-0"
          >
            Every session is led by practicing lawyers, corporate counsels, legal entrepreneurs, and career mentors who bring real-world experience to the classroom.
          </SplitTextReveal>
        </div>

        {/* Mentors Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {mentors.map((mentor, idx) => (
                <div key={idx} className="w-full shrink-0 px-1 pb-2">
                  <div className="bg-[#e6e6e6] p-2.5 sm:p-3 rounded-[24px] flex flex-col lg:flex-row gap-2.5 sm:gap-3 items-stretch">
                    
                    {/* Left Image */}
                    <div className="w-full lg:w-1/2 rounded-[24px] overflow-hidden relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                      <img 
                        src={mentor.image} 
                        alt={mentor.name} 
                        className="absolute inset-0 w-full h-full object-cover object-top"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3149&auto=format&fit=crop';
                        }}
                      />
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                      {/* Details Card */}
                      <div className="flex-1 bg-[#1c1c1c] rounded-[24px] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                        <div>
                          <h3 className="text-white text-2xl sm:text-3xl lg:text-[2rem] leading-tight font-medium tracking-tight mb-1.5 sm:mb-2">
                            {idx === 0 ? `Hi, I'm ${mentor.name}.` : mentor.name}
                          </h3>
                          <p className="text-gray-200 text-[14px] sm:text-[15px] lg:text-[16px] font-normal mb-6 sm:mb-8">
                            {mentor.role}
                          </p>
                          <hr className="border-white/10" />
                        </div>

                        <div className="mt-6 sm:mt-8">
                          <h4 className="text-white text-xl sm:text-2xl lg:text-[1.5rem] font-medium mb-3 sm:mb-4">Bio</h4>
                          <p className="text-gray-300 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] sm:leading-[1.7]">
                            {mentor.bio}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center mt-8">
            <div className="bg-white px-3.5 py-2 rounded-full flex items-center gap-2">
              {mentors.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full w-2 h-2 ${
                    currentIndex === idx 
                      ? 'bg-[#F7931E]' 
                      : 'bg-[#cfcfcf] hover:bg-[#B0B0B0]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Mentors;