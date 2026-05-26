import React, { useEffect, useRef, useState } from 'react';

const ROW1_IMAGES = [
  "/codePrep1.png",
  "/agroAi1.png",
  "/smartEdu1.png",
  "/codePrep2.png",
  "/agroAi2.png",
  "/smartedu2.png"
];

const ROW2_IMAGES = [
  "/codePrep2.png",
  "/agroAi2.png",
  "/smartedu2.png",
  "/codePrep1.png",
  "/agroAi1.png",
  "/smartEdu1.png"
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Triple the arrays to ensure a seamless overflow scroll loop
  const tripledRow1 = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
  const tripledRow2 = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Moves Right on Scroll */}
        <div className="w-full overflow-hidden">
          <div 
            className="flex gap-3 w-max"
            style={{ 
              transform: `translateX(${scrollOffset - 200}px)`,
              willChange: 'transform'
            }}
          >
            {tripledRow1.map((url, index) => (
              <img 
                key={`row1-${index}`}
                src={url}
                alt={`Project Screenshot 1-${index}`}
                className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 border border-[#D7E2EA]/5"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Row 2: Moves Left on Scroll */}
        <div className="w-full overflow-hidden">
          <div 
            className="flex gap-3 w-max"
            style={{ 
              transform: `translateX(${-(scrollOffset - 200)}px)`,
              willChange: 'transform'
            }}
          >
            {tripledRow2.map((url, index) => (
              <img 
                key={`row2-${index}`}
                src={url}
                alt={`Project Screenshot 2-${index}`}
                className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0 border border-[#D7E2EA]/5"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
