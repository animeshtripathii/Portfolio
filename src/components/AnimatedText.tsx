import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const characters = text.split("");

  return (
    <p ref={containerRef} className={className}>
      {characters.map((char, index) => (
        <Character 
          key={index} 
          char={char} 
          index={index} 
          total={characters.length} 
          progress={scrollYProgress} 
        />
      ))}
    </p>
  );
};

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, index, total, progress }) => {
  // Distribute the animation windows across the scroll progress range [0, 1]
  // Start from 0 to 0.8, and let each character animate over 0.2 window size
  const start = (index / total) * 0.8;
  const end = Math.min(1, start + 0.2);
  
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  if (char === " ") {
    return <span className="inline-block">&nbsp;</span>;
  }

  return (
    <span className="relative inline-block select-none">
      {/* Invisible placeholder for size and layout flow */}
      <span className="opacity-0">{char}</span>
      {/* Absolute positioned animated character */}
      <motion.span 
        style={{ opacity }} 
        className="absolute top-0 left-0"
      >
        {char}
      </motion.span>
    </span>
  );
};
