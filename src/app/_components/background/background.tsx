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
  hue: number;
}

const numberOfParticles = 25; // Reduced from 50
const initialVelocity = 0.3; // Reduced from 0.5
const fadeSpeed = 0.006; // Slightly decreased for longer particle life

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Performance optimizations
    ctx.imageSmoothingEnabled = false;
    
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Limit DPR for performance
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      ctx.scale(dpr, dpr);
      return { width: rect.width, height: rect.height };
    };

    const { width, height } = updateCanvasSize();

    const initializeParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < numberOfParticles; i++) {
        const angle = Math.random() * Math.PI * 2;
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.5 + 0.5, // Smaller particles
          alpha: Math.random() * 0.8 + 0.2,
          vx: Math.cos(angle) * initialVelocity * (Math.random() * 0.5 + 0.5),
          vy: Math.sin(angle) * initialVelocity * (Math.random() * 0.5 + 0.5),
          hue: Math.random() * 60 + 200, // Blue-purple range
        });
      }
    };

    initializeParticles();

    const animate = (currentTime: number) => {
      // Throttle to ~30 FPS for better performance
      if (currentTime - lastTimeRef.current < 33) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = currentTime;

      // Use fillRect for better performance than clearRect
      // Increased alpha from 0.1 to 0.3 to make trails fade faster
      ctx.fillStyle = 'rgba(10, 14, 23, 0.3)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Batch rendering optimizations
      ctx.globalCompositeOperation = 'lighter';
      
      particlesRef.current.forEach((p) => {
        // Update particle
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= fadeSpeed;

        // Reset particle if it fades out or goes off screen
        if (p.alpha <= 0 || p.x < -10 || p.x > canvas.width + 10 || p.y < -10 || p.y > canvas.height + 10) {
          const angle = Math.random() * Math.PI * 2;
          Object.assign(p, {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.8 + 0.2,
            vx: Math.cos(angle) * initialVelocity * (Math.random() * 0.5 + 0.5),
            vy: Math.sin(angle) * initialVelocity * (Math.random() * 0.5 + 0.5),
            hue: Math.random() * 60 + 200,
          });
        }

        // Render particle with subtle color
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 80%, ${Math.max(0, p.alpha * 0.6)})`;
        ctx.fill();
      });

      ctx.globalCompositeOperation = 'source-over';
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      updateCanvasSize();
      // Re-initialize particles on resize to prevent them from being stuck off-screen
      initializeParticles();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-40" 
        style={{ 
          zIndex: -1,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }} 
      />
      {/* Simplified gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/50 via-transparent to-indigo-950/30 pointer-events-none" />
    </div>
  );
}