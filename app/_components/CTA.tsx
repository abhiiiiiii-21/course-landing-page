import React from 'react';
import footerData from '@/data/footer.json';
import linksData from '@/data/links.json';
import Image from 'next/image';

const CTA = () => {
  const { cta } = footerData;
  const ctaLink = linksData[0].enrollNow;

  return (
    <section className="pt-24 bg-transparent pb-0">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className="bg-[#e6e6e6] rounded-[21px] p-2 sm:p-2.5 pb-0 sm:pb-0 rounded-b-none">
          <div className="bg-white rounded-[16px] py-16 px-6 sm:px-10 text-center flex flex-col items-center">
            
            <div className="flex items-center gap-2 mb-6">
              <Image 
                src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" 
                alt="Left Dots" 
                width={6}
                height={10}
                className="w-[6px] h-[10px] opacity-40"
              />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase pt-[1px]">
                {cta.badge}
              </span>
              <Image 
                src="https://framerusercontent.com/images/F8wan4JxRuiIlSJe5tqI0wnJhM.svg?width=9&height=15" 
                alt="Right Dots" 
                width={6}
                height={10}
                className="w-[6px] h-[10px] opacity-40 scale-x-[-1]"
              />
            </div>

            <h2 className="text-[2rem] sm:text-[2.5rem] font-medium leading-[1.2] text-[#1c1c1c] tracking-tight mb-4 max-w-2xl">
              {cta.titleLine1} <br />
              <span className="text-[#F7931E]">{cta.titleLine2}</span>
            </h2>
            
            <p className="text-[#7c7c7c] text-[16px] sm:text-[17px] leading-relaxed mb-8 max-w-xl">
              {cta.subtitle}
            </p>

            <a 
              href={ctaLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1c1c1c] hover:bg-black text-white text-[15px] font-medium px-6 py-2.5 rounded-lg transition-colors"
            >
              {cta.button.text}
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
