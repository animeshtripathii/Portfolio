import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
  onStartReveal?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete, onStartReveal }) => {
  const [progress, setProgress] = useState(0);
  const [isOpening, setIsOpening] = useState(false);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Loading timer progression
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Custom progression speed to make it feel natural and premium
      const increment = Math.floor(Math.random() * 6) + 2;
      current = Math.min(current + increment, 100);
      setProgress(current);

      if (current === 100) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Trigger curtain opening on complete
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsOpening(true);
        if (onStartReveal) {
          onStartReveal();
        }
      }, 600); // Small pause for user to read completed text
      return () => clearTimeout(timeout);
    }
  }, [progress, onStartReveal]);

  // Typing effect parameters
  const nameText = "ANIMESH TRIPATHI";
  const roleText = "FULL-STACK DEVELOPER";

  let visibleName = "";
  let visibleRole = "";

  if (progress < 50) {
    const charCount = Math.floor((progress / 50) * nameText.length);
    visibleName = nameText.slice(0, charCount);
  } else {
    visibleName = nameText;
    const charCount = Math.floor(((progress - 50) / 50) * roleText.length);
    visibleRole = roleText.slice(0, charCount);
  }

  // Curtain variants for split-screen curtain reveal
  const leftCurtainVariants = {
    closed: { x: 0 },
    open: { x: "-100%" },
  };

  const rightCurtainVariants = {
    closed: { x: 0 },
    open: { x: "100%" },
  };

  // Centered visual content (portrait card + text)
  const renderCurtainContent = () => (
    <div className="flex flex-col items-center justify-center text-center">
      {/* 3D Photo Container - Fixed size to keep the image sharp (no stretching or blurriness) */}
      <div className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-2xl overflow-hidden bg-[#121212] border border-[#D7E2EA]/10 flex items-center justify-center shadow-[0_15px_50px_rgba(0,0,0,0.8)] mb-8 transition-all duration-300">
        <img
          src="/preloader_portrait.jpg"
          alt="Animesh Portrait"
          className="w-full h-full object-cover select-none pointer-events-none"
        />
      </div>

      {/* Typing Name and Role */}
      <div className="min-h-[100px] flex flex-col items-center">
        <h2 className="text-[#D7E2EA] font-black uppercase tracking-wider text-xl sm:text-2xl md:text-3xl lg:text-4xl min-h-[1.5em] flex items-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          {visibleName}
          {progress < 50 && (
            <span className="animate-pulse text-[#D7E2EA]/70 font-normal ml-0.5">|</span>
          )}
        </h2>
        <p className="text-[#D7E2EA]/60 font-light uppercase tracking-[0.25em] text-xs sm:text-sm mt-2 min-h-[1.5em] flex items-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {visibleRole}
          {progress >= 50 && progress < 100 && (
            <span className="animate-pulse text-[#D7E2EA]/40 font-normal ml-0.5">|</span>
          )}
        </p>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex overflow-hidden select-none pointer-events-none w-screen h-screen">
      
      {/* Left Curtain */}
      <motion.div
        variants={leftCurtainVariants}
        initial="closed"
        animate={isOpening ? "open" : "closed"}
        onAnimationComplete={(definition) => {
          if (definition === "open") {
            onComplete();
          }
        }}
        // width uses calc(50% + 1px) to overlap with right curtain and avoid subpixel rendering gaps
        className="w-[calc(50%+1px)] h-full absolute left-0 top-0 bg-[#0C0C0C] overflow-hidden z-50 pointer-events-auto"
        transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Full-width canvas centered on Left Curtain */}
        <div className="w-[100vw] h-full absolute left-0 top-0 flex flex-col justify-center items-center px-4">
          {renderCurtainContent()}
        </div>

        {/* Timer in left corner */}
        <div className="absolute left-6 bottom-6 sm:left-10 sm:bottom-10 font-mono text-[#D7E2EA] z-50 text-left">
          <div className="text-[6vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.2vw] font-black leading-none tracking-tight">
            {String(progress).padStart(3, '0')}%
          </div>
          <div className="text-[8px] md:text-[10px] tracking-[0.25em] opacity-40 uppercase mt-2 font-medium">
            System Initialization
          </div>
        </div>
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        variants={rightCurtainVariants}
        initial="closed"
        animate={isOpening ? "open" : "closed"}
        // width uses calc(50% + 1px) to overlap with left curtain and avoid subpixel rendering gaps
        className="w-[calc(50%+1px)] h-full absolute right-0 top-0 bg-[#0C0C0C] overflow-hidden z-50 pointer-events-auto"
        transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Full-width canvas centered on Right Curtain (aligned using right-0) */}
        <div className="w-[100vw] h-full absolute right-0 top-0 flex flex-col justify-center items-center px-4">
          {renderCurtainContent()}
        </div>
      </motion.div>

    </div>
  );
};
