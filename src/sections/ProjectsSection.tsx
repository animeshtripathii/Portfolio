import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton, GithubButton } from '../components/Buttons';
import { FadeIn } from '../components/FadeIn';

interface Project {
  num: string;
  name: string;
  category: string;
  images: string[];
  githubLink: string;
  liveLink?: string;
}

const PROJECTS: Project[] = [
  {
    num: "01",
    name: "CodePrep",
    category: "Collaborative Coding Platform",
    images: ["/codePrep1.png", "/codePrep2.png"],
    githubLink: "https://github.com/animeshtripathii/CodePrep",
    liveLink: "https://code-prep-beryl.vercel.app/"
  },
  {
    num: "02",
    name: "AgroAI",
    category: "AI Agricultural Platform",
    images: ["/agroAi1.png", "/agroAi2.png"],
    githubLink: "https://github.com/animeshtripathii/AgroAI",
    liveLink: "https://agroai-1-8jho.onrender.com/"
  },
  {
    num: "03",
    name: "EcoPower Hub",
    category: "Renewable Energy Platform",
    images: ["https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"],
    githubLink: "https://github.com/animeshtripathii/EcoPower-hub"
  },
  {
    num: "04",
    name: "SmartEdu",
    category: "AI Education Platform",
    images: ["/smartEdu1.png", "/smartedu2.png"],
    githubLink: "https://github.com/animeshtripathii/SmartEdu",
    liveLink: "https://smart-edu-web.vercel.app/"
  }
];

export const ProjectsSection: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 sm:pt-24 md:pt-32 pb-24 px-5 sm:px-8 md:px-10 w-full relative z-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2 
            className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Stacking Cards Container */}
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 relative">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.num}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Tracks the scroll progress of this specific card container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Calculate targetScale for stacking depth (scale down as subsequent cards scroll up)
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div 
      ref={containerRef}
      className="h-[85vh] sticky w-full flex justify-center items-start"
      style={{ 
        top: `calc(var(--sticky-top, 96px) + ${index * 28}px)`,
        zIndex: index + 1
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col justify-between h-[75vh] shadow-[0_20px_50px_rgba(0,0,0,0.8)] will-change-transform"
      >
        {/* Card Top Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span 
              className="font-black text-[#D7E2EA]/20 leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/50">
                {project.category}
              </span>
              <span className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide">
                {project.name}
              </span>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3 flex-shrink-0 self-end sm:self-auto">
            <GithubButton href={project.githubLink} />
            {project.liveLink && (
              <LiveProjectButton href={project.liveLink} />
            )}
          </div>
        </div>

        {/* Card Bottom Row: Dynamic Image Grid */}
        <div className="flex-grow overflow-hidden h-full mt-2">
          <div className={`grid gap-3 sm:gap-4 h-full ${
            project.images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
          }`}>
            {project.images.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`${project.name} showcase ${idx + 1}`}
                className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-[#D7E2EA]/10"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
