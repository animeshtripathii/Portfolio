import { useState } from 'react';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { FadeIn } from './components/FadeIn';
import { Preloader } from './components/Preloader';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [startTyping, setStartTyping] = useState(false);

  return (
    <div className="main-wrapper min-h-screen bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip">
      {showPreloader && (
        <Preloader 
          onComplete={() => setShowPreloader(false)} 
          onStartReveal={() => setStartTyping(true)}
        />
      )}
      <HeroSection startTyping={startTyping} />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      
      {/* Footer / Contact Section */}
      <footer 
        id="contact" 
        className="bg-[#0C0C0C] text-[#D7E2EA] py-20 px-6 md:px-10 border-t border-[#D7E2EA]/10 w-full relative z-20"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <FadeIn delay={0} y={30} className="flex flex-col text-left">
            <h2 className="hero-heading font-black uppercase text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
              Let&apos;s build together
            </h2>
            <p className="font-light text-[#D7E2EA]/70 max-w-sm uppercase tracking-wider text-sm">
              Get in touch to discuss software projects, AI integration, or freelance opportunities.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} y={30} className="flex flex-col items-start md:items-end text-left md:text-right gap-4">
            <a 
              href="mailto:tripathianimesh890@gmail.com" 
              className="text-xl sm:text-2xl font-medium tracking-wide hover:opacity-75 transition-opacity border-b-2 border-[#D7E2EA]/30 pb-1"
            >
              tripathianimesh890@gmail.com
            </a>
            <div className="flex gap-6 mt-2">
              <a href="https://github.com/animeshtripathii" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity text-xs font-semibold uppercase tracking-widest text-[#D7E2EA]">GitHub</a>
              <a href="https://www.linkedin.com/in/animesh003" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity text-xs font-semibold uppercase tracking-widest text-[#D7E2EA]">LinkedIn</a>
            </div>
          </FadeIn>
        </div>
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-[#D7E2EA]/5 flex justify-between items-center text-xs font-light text-[#D7E2EA]/40">
          <span>&copy; {new Date().getFullYear()} ANIMESH TRIPATHI. ALL RIGHTS RESERVED.</span>
          <span>FULL-STACK DEVELOPER PORTFOLIO</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
