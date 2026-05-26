import React, { useState, useEffect } from 'react';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/Buttons';

interface HeroSectionProps {
  startTyping?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ startTyping = false }) => {
  const fullText = "Hi, i'm animesh";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (!startTyping) return;

    let i = 0;
    const interval = setInterval(() => {
      const sliced = fullText.slice(0, i + 1);
      setTypedText(sliced);
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
      }
    }, 70); // 70ms per character typing

    return () => clearInterval(interval);
  }, [startTyping]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-hidden bg-[#0C0C0C] text-[#D7E2EA] w-full">
      {/* Header / Navbar */}
      <FadeIn 
        delay={0} 
        y={-20} 
        as="nav" 
        className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full z-20"
      >
        <button 
          onClick={() => handleScrollTo('about')} 
          className="hover:opacity-70 transition-opacity duration-200 text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider bg-transparent border-none cursor-pointer text-[#D7E2EA]"
        >
          About
        </button>
        <button 
          onClick={() => handleScrollTo('services')} 
          className="hover:opacity-70 transition-opacity duration-200 text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider bg-transparent border-none cursor-pointer text-[#D7E2EA]"
        >
          Skills
        </button>
        <button 
          onClick={() => handleScrollTo('projects')} 
          className="hover:opacity-70 transition-opacity duration-200 text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider bg-transparent border-none cursor-pointer text-[#D7E2EA]"
        >
          Projects
        </button>
        <a 
          href="/Animesh_Tripathi_CV.pdf" 
          download="Animesh_Tripathi_CV.pdf"
          className="hover:opacity-70 transition-opacity duration-200 text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider text-[#D7E2EA]"
        >
          CV
        </a>
        <button 
          onClick={() => handleScrollTo('contact')} 
          className="hover:opacity-70 transition-opacity duration-200 text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider bg-transparent border-none cursor-pointer text-[#D7E2EA]"
        >
          Contact
        </button>
      </FadeIn>

      {/* Hero Content Grid (Split Columns) */}
      <div className="flex-grow flex items-center px-6 md:px-10 py-10 md:py-16 w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center w-full max-w-7xl mx-auto h-full">
          
          {/* Left Column: Text content */}
          <div className="md:col-span-7 flex flex-col items-start text-left justify-center h-full">
            <FadeIn delay={0.15} y={40} as="div" className="w-full">
              <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-[9vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[5.5vw] min-h-[1.2em] select-none">
                {typedText}
                {startTyping && typedText.length < fullText.length && (
                  <span className="animate-pulse text-[#BBCCD7] font-light">|</span>
                )}
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3} y={30} as="div" className="mt-6 md:mt-8">
              <p 
                className="text-[#D7E2EA]/85 font-light uppercase tracking-wider leading-relaxed max-w-[450px]"
                style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1.2rem)' }}
              >
                a full-stack developer driven by building scalable web applications and AI-powered solutions
              </p>
            </FadeIn>

            <FadeIn delay={0.45} y={30} as="div" className="mt-8 md:mt-10">
              <ContactButton onClick={() => handleScrollTo('contact')} />
            </FadeIn>
          </div>

          {/* Right Column: Portrait Photo */}
          <div className="md:col-span-5 flex items-center justify-center md:justify-end w-full h-full">
            <FadeIn delay={0.6} y={40} className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[400px]">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#D7E2EA]/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-[#121212] aspect-[3/4] w-full group">
                <img
                  src="/home_portrait.jpg"
                  alt="Animesh Portrait Home"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out select-none pointer-events-none group-hover:scale-105"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-[9px] tracking-[0.25em] uppercase font-light text-[#D7E2EA] mb-2">Scroll Down</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#D7E2EA] to-transparent animate-pulse" />
      </div>
    </section>
  );
};
