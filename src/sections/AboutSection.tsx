import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/Buttons';

export const AboutSection: React.FC = () => {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about" 
      className="relative flex flex-col items-center justify-center text-center bg-[#0C0C0C] text-[#D7E2EA] min-h-screen py-20 px-5 sm:px-8 md:px-10 overflow-hidden w-full"
    >
      {/* Decorative Assets */}
      
      {/* Top-Left: Moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon"
          className="w-full h-auto select-none pointer-events-none"
        />
      </FadeIn>

      {/* Bottom-Left: 3D Object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D object"
          className="w-full h-auto select-none pointer-events-none"
        />
      </FadeIn>

      {/* Top-Right: Lego */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego"
          className="w-full h-auto select-none pointer-events-none"
        />
      </FadeIn>

      {/* Bottom-Right: 3D Group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Sphere Group"
          className="w-full h-auto select-none pointer-events-none"
        />
      </FadeIn>

      {/* Content Container */}
      <div className="flex flex-col items-center z-20 max-w-[90vw]">
        {/* About heading */}
        <FadeIn delay={0} y={40}>
          <h2 
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Space between heading and paragraph */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Scroll Reveal Text */}
        <AnimatedText
          text="With a solid foundation in computer science and full-stack engineering, i specialize in building robust applications using React, Next.js, Node.js, and AWS. From real-time collaboration environments using Socket.io to AI integrations powered by Google Gemini, i focus on creating scalable, clean, and highly performant digital solutions. Let's build something incredible together!"
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)]"
        />

        {/* Space between paragraph and button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact CTA */}
        <FadeIn delay={0.2} y={30}>
          <ContactButton onClick={handleScrollToContact} />
        </FadeIn>
      </div>
    </section>
  );
};
