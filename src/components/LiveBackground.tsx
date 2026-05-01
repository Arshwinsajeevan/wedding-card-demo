"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function LiveBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      // Reduce particle count slightly for better performance
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 12 : 25;
      const newParticles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100, // percentage
          y: Math.random() * 100, // percentage
          size: Math.random() * 4 + 2, // 2px to 6px
          duration: Math.random() * 15 + 15, // 15s to 30s
          delay: Math.random() * 10,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener("resize", generateParticles);
    return () => window.removeEventListener("resize", generateParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <style>{`
        @keyframes floatParticle {
          0% {
            transform: translateY(120vh) translateX(0px) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
            transform: translateY(100vh) translateX(10px) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: translateY(50vh) translateX(-15px) scale(1.2);
          }
          90% {
            opacity: 0.8;
            transform: translateY(10vh) translateX(10px) scale(1);
          }
          100% {
            transform: translateY(-20vh) translateX(-10px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gold-light/60 blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            animation: `floatParticle ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
