import React from 'react';
import footerData from '@/data/footer.json';
import linksData from '@/data/links.json';

const Footer = () => {
  const { footer } = footerData;
  const socials = linksData[0];

  return (
    <footer className="pb-8 bg-transparent">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        <div className="bg-[#e6e6e6] rounded-[21px] rounded-t-none p-2 sm:p-2.5">
          <div className="flex flex-col md:flex-row gap-2 sm:gap-2.5">
            
            {/* Left Card - Newsletter */}
            <div className="md:w-5/12 bg-[#1c1c1c] rounded-[16px] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-white text-[18px] sm:text-[20px] font-medium mb-6">
                  {footer.newsletter.title}
                </h4>
                
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
            <div className="md:w-7/12 bg-[#1c1c1c] rounded-[16px] p-6 sm:p-8 flex flex-col justify-between">
              
              <div className="grid grid-cols-2 gap-8">
                {/* Navigation Column 1 */}
                <div>
                  <ul className="flex flex-col gap-3">
                    {footer.navigation.left.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.href} className="text-white hover:text-gray-300 transition-colors text-[15px]">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Navigation Column 2 */}
                <div>
                  <ul className="flex flex-col gap-3">
                    {footer.navigation.right.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.href} className="text-white hover:text-gray-300 transition-colors text-[15px]">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[#dedede]">
                  <div>
                    <h5 className="text-[13px] font-medium text-[#F7931E] mb-1">{footer.contact.administrative.heading}</h5>
                    <div className="flex items-center gap-3 text-[13px]">
                      <a href={`tel:${footer.contact.administrative.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{footer.contact.administrative.phone}</a>
                      <span className="text-white/20">|</span>
                      <a href={`mailto:${footer.contact.administrative.email}`} className="hover:text-white transition-colors">{footer.contact.administrative.email}</a>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-[13px] font-medium text-[#F7931E] mb-1">{footer.contact.admissions.heading}</h5>
                    <div className="flex items-center gap-3 text-[13px]">
                      <a href={`tel:${footer.contact.admissions.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{footer.contact.admissions.phone}</a>
                      <span className="text-white/20">|</span>
                      <a href={`mailto:${footer.contact.admissions.email}`} className="hover:text-white transition-colors">{footer.contact.admissions.email}</a>
                    </div>
                  </div>
                </div>
                <p className="text-[13px] leading-relaxed text-[#dedede] mt-6 max-w-lg">
                  {footer.contact.address}
                </p>
              </div>

              {/* Bottom Row - Legal & Socials */}
              <div className="mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  {footer.legal.map((link, idx) => (
                    <a key={idx} href={link.href} className="text-white hover:text-gray-300 text-[14px] transition-colors font-medium">
                      {link.label}
                    </a>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 text-[#F7931E]">
                  {socials.instagram && (
                    <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                  )}
                  {socials.twiter && (
                    <a href={socials.twiter} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                  )}
                  {socials.facebook && (
                    <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                  )}
                  {socials.youtube && (
                    <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                    </a>
                  )}
                  {socials.linkedIn && (
                    <a href={socials.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
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
