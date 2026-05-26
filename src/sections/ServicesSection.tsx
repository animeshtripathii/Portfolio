import React from 'react';
import { FadeIn } from '../components/FadeIn';

const SERVICES = [
  {
    num: "01",
    name: "Frontend Development",
    desc: "Building interactive, responsive user interfaces using React.js, Next.js, and Tailwind CSS, enriched with Three.js animations."
  },
  {
    num: "02",
    name: "Backend Development",
    desc: "Designing scalable server-side systems, RESTful APIs, and real-time features using Node.js, Express.js, Nest.js, Redis, and Socket.io."
  },
  {
    num: "03",
    name: "AI Integration",
    desc: "Leveraging the Gemini API and Machine Learning models to build intelligent assistants, automated reporting, and predictive crop analytics."
  },
  {
    num: "04",
    name: "Cloud & DevOps",
    desc: "Deploying applications using Docker containers on AWS (EC2), managing databases like MongoDB/MySQL, and configuring CI/CD."
  },
  {
    num: "05",
    name: "System Architecture",
    desc: "Designing secure full-stack applications with role-based access control (RBAC), JWT authentication, and optimized data retrieval pipelines."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section 
      id="services" 
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2 
            className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 leading-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col">
          {SERVICES.map((service, index) => (
            <FadeIn 
              key={service.num} 
              delay={index * 0.1} 
              y={30}
              className={`flex items-center gap-6 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] ${
                index === 0 ? 'border-t' : ''
              }`}
            >
              {/* Number on the left */}
              <div 
                className="font-black text-[#0C0C0C] leading-none select-none min-w-[70px] sm:min-w-[120px] md:min-w-[150px]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.num}
              </div>

              {/* Stacked details on the right */}
              <div className="flex flex-col text-left">
                <h3 
                  className="font-medium uppercase text-[#0C0C0C] mb-2 leading-tight"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p 
                  className="font-light text-[#0C0C0C] opacity-60 leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
