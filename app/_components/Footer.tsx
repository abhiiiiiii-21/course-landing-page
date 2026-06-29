'use client';
import React from 'react';
import { SplitTextReveal } from './SplitTextReveal';
import footerData from '@/data/footer.json';
import linksData from '@/data/links.json';
import Link from 'next/link';

const Footer = () => {
  const { footer } = footerData;
  const socials = linksData[0];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#') && href !== '#') {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="pb-8 bg-transparent">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className="bg-[#e6e6e6] rounded-[21px] rounded-t-none p-2 sm:p-2.5">
          <div className="flex flex-col lg:flex-row gap-2 sm:gap-2.5">
            
            {/* Left Card - Newsletter */}
            <div className="lg:w-5/12 bg-[#1c1c1c] rounded-[16px] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <SplitTextReveal as="h4" className="text-white text-[18px] sm:text-[20px] font-medium mb-6">
                  {footer.newsletter.title}
                </SplitTextReveal>
                
                <form className="flex gap-2 sm:gap-3 w-full mb-4">
                  <input 
                    type="email" 
                    placeholder={footer.newsletter.placeholder} 
                    className="flex-1 bg-[#f4f4f4] text-[#1c1c1c] px-4 py-3 rounded-[10px] text-[14px] outline-none placeholder:text-[#7c7c7c]"
                    required
                  />
                  <button type="submit" className="bg-[#F7931E] hover:bg-[#e0861b] text-white px-4 py-3 rounded-[10px] transition-colors shrink-0 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </form>
                
                <p className="text-[#dedede] text-[13px] leading-relaxed">
                  {footer.newsletter.description}
                </p>
              </div>

              <div className="mt-10 sm:mt-12">
                <p className="text-[#dedede] text-[12px]">
                  {footer.newsletter.copyright}
                </p>
              </div>
            </div>

            {/* Right Card - Links and Info */}
            <div className="lg:w-7/12 bg-[#1c1c1c] rounded-[16px] p-6 sm:p-8 flex flex-col justify-between">
              
              <div className="grid grid-cols-2 gap-8">
                {/* Navigation Column 1 */}
                <div>
                  <ul className="flex flex-col gap-3">
                    {footer.navigation.left.map((link, idx) => (
                      <li key={idx}>
                        <Link onClick={handleScroll} href={link.href} className="group inline-block text-white text-[15px]">
                          <div className="relative overflow-hidden leading-tight">
                            <span
                              className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full text-white/80 group-hover:text-white"
                              data-text={link.label}
                            >
                              {link.label}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Navigation Column 2 */}
                <div>
                  <ul className="flex flex-col gap-3">
                    {footer.navigation.right.map((link, idx) => (
                      <li key={idx}>
                        <Link onClick={handleScroll} href={link.href} className="group inline-block text-white text-[15px]">
                          <div className="relative overflow-hidden leading-tight">
                            <span
                              className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full text-white/80 group-hover:text-white"
                              data-text={link.label}
                            >
                              {link.label}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[#dedede]">
                  <div>
                    <h5 className="text-[13px] font-medium text-[#F7931E] mb-1">{footer.contact.administrative.heading}</h5>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px]">
                      <Link href={`tel:${footer.contact.administrative.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{footer.contact.administrative.phone}</Link>
                      <span className="text-white/20 hidden sm:inline">|</span>
                      <Link href={`mailto:${footer.contact.administrative.email}`} className="hover:text-white transition-colors">{footer.contact.administrative.email}</Link>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-[13px] font-medium text-[#F7931E] mb-1">{footer.contact.admissions.heading}</h5>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px]">
                      <Link href={`tel:${footer.contact.admissions.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{footer.contact.admissions.phone}</Link>
                      <span className="text-white/20 hidden sm:inline">|</span>
                      <Link href={`mailto:${footer.contact.admissions.email}`} className="hover:text-white transition-colors">{footer.contact.admissions.email}</Link>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Row - Legal & Socials */}
              <div className="mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  {footer.legal.map((link, idx) => (
                    <Link onClick={handleScroll} key={idx} href={link.href} className="group inline-block text-white text-[14px] font-medium">
                      <div className="relative overflow-hidden leading-tight">
                        <span
                          className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full text-white/80 group-hover:text-white"
                          data-text={link.label}
                        >
                          {link.label}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 text-[#F7931E]">
                  {socials.instagram && (
                    <Link href={socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 2c-2.717 0-3.056.012-4.123.06-1.064.049-1.79.218-2.427.465a4.902 4.902 0 00-1.772 1.153 4.902 4.902 0 00-1.153 1.772c-.247.637-.416 1.363-.465 2.427C2.012 8.944 2 9.283 2 12c0 2.717.012 3.056.06 4.123.049 1.064.218 1.79.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.637.247 1.363.416 2.427.465C8.944 21.988 9.283 22 12 22c2.717 0 3.056-.012 4.123-.06 1.064-.049 1.79-.218 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.247-.637.416-1.363.465-2.427C21.988 15.056 22 14.717 22 12c0-2.717-.012-3.056-.06-4.123-.049-1.064-.218-1.79-.465-2.427a4.902 4.902 0 00-1.153-1.772 4.902 4.902 0 00-1.772-1.153c-.637-.247-1.363-.416-2.427-.465C15.056 2.012 14.717 2 12 2zM12 6.838a5.162 5.162 0 100 10.324 5.162 5.162 0 000-10.324zM12 15a3 3 0 110-6 3 3 0 010 6zm5.838-8.162a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
                    </Link>
                  )}
                  {socials.twiter && (
                    <Link href={socials.twiter} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </Link>
                  )}
                  {socials.facebook && (
                    <Link href={socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </Link>
                  )}
                  {socials.youtube && (
                    <Link href={socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </Link>
                  )}
                  {socials.linkedIn && (
                    <Link href={socials.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </Link>
                  )}
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
