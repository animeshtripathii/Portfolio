import React, { useState, useEffect, useRef } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [transition, setTransition] = useState(inactiveTransition);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate distance to closest edge of bounding box
      let dx = 0;
      if (mouseX < rect.left) {
        dx = rect.left - mouseX;
      } else if (mouseX > rect.right) {
        dx = mouseX - rect.right;
      }

      let dy = 0;
      if (mouseY < rect.top) {
        dy = rect.top - mouseY;
      } else if (mouseY > rect.bottom) {
        dy = mouseY - rect.bottom;
      }

      const distanceToEdge = Math.sqrt(dx * dx + dy * dy);

      if (distanceToEdge <= padding) {
        // Mouse is within magnetic pull distance, offset towards it
        const targetX = (mouseX - centerX) / strength;
        const targetY = (mouseY - centerY) / strength;
        setTransform({ x: targetX, y: targetY });
        setTransition(activeTransition);
      } else {
        // Return to resting position
        setTransform({ x: 0, y: 0 });
        setTransition(inactiveTransition);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
