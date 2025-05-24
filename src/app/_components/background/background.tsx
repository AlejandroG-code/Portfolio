// src/app/_components/Background.tsx
'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  vx: number;
  vy: number;
}

const numberOfParticles = 50;
const initialVelocity = 0.5;
const fadeSpeed = 0.005;

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const initializeParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < numberOfParticles; i++) {
        const angle = Math.random() * Math.PI * 2;
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 1,
          alpha: Math.random(),
          vx: Math.cos(angle) * initialVelocity * Math.random(),
          vy: Math.sin(angle) * initialVelocity * Math.random(),
        });
      }
    };

    initializeParticles();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= fadeSpeed;

        if (p.alpha <= 0) {
          const angle = Math.random() * Math.PI * 2;
          Object.assign(p, {
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 1,
            alpha: 1,
            vx: Math.cos(angle) * initialVelocity * Math.random(),
            vy: Math.sin(angle) * initialVelocity * Math.random(),
          });
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, p.alpha)})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      canvas.width = newWidth;
      canvas.height = newHeight;
      initializeParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <canvas ref={canvasRef} className="absolute inset-0 z-[-1]" style={{ zIndex: -1 }} />
      {/* Modern Background Texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 20%),
                           linear-gradient(to bottom right, transparent 60%, rgba(99, 102, 241, 0.05) 100%)`,
          backgroundSize: 'cover',
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5 bg-grid"
        style={{
          backgroundSize: '40px 40px',
        }}
      />

      {/* Animated lighting on the grid */}
      <div
        className="absolute inset-0 bg-lighting-overlay opacity-30 mix-blend-soft-light"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-indigo-900/20" />

      <style jsx global>{`
        .bg-grid {
          background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
        }

        .bg-lighting-overlay {
          background-image: linear-gradient(45deg, rgba(139, 0, 139, 0.4), transparent 50%, rgba(0, 0, 255, 0.4));
          background-size: 200% 200%;
          background-repeat: no-repeat;
          animation: grid-lighting 5s infinite alternate linear;
          opacity: 0.5;
          mix-blend-mode: soft-light;
        }

        @keyframes grid-lighting {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}</style>
    </div>
  );
}