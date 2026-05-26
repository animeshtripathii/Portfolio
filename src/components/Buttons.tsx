import React from 'react';
import { Github, Globe } from 'lucide-react';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

interface LinkButtonProps {
  href: string;
  className?: string;
  label?: string;
}

export const ContactButton: React.FC<ButtonProps> = ({ onClick, className = '', label = "Contact Me" }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full text-white font-medium uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </button>
  );
};

export const LiveProjectButton: React.FC<LinkButtonProps> = ({ href, className = '', label = "Live Link" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-4 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs md:text-sm transition-colors duration-200 hover:bg-[#D7E2EA]/15 ${className}`}
    >
      <Globe size={14} />
      <span>{label}</span>
    </a>
  );
};

export const GithubButton: React.FC<LinkButtonProps> = ({ href, className = '', label = "GitHub" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA]/70 font-medium uppercase tracking-widest px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs md:text-sm transition-colors duration-200 hover:border-[#D7E2EA] hover:text-[#D7E2EA] hover:bg-[#D7E2EA]/10 ${className}`}
    >
      <Github size={14} />
      <span>{label}</span>
    </a>
  );
};
