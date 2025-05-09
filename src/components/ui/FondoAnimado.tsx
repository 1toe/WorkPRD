"use client";

import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';

interface FondoAnimadoProps {
  className?: string;
}

const FondoAnimado = ({ className = "" }: FondoAnimadoProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { tema } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuración inicial
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Colores según el tema
    const isDark = tema === 'dark';
    
    // Parámetros de las partículas
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
    const particleColor = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 40, 0.5)';
    const lineColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 40, 0.1)';
    const particleRadius = 1.5;
    const maxDistance = 150;
    
    // Array de partículas
    const particles: {
      x: number;
      y: number;
      dx: number;
      dy: number;
    }[] = [];
    
    // Crear partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
      });
    }
    
    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dibujar y actualizar partículas
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
        
        // Actualizar posición
        p.x += p.dx;
        p.y += p.dy;
        
        // Rebote en los bordes
        if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
        if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy;
        
        // Dibujar líneas entre partículas cercanas
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5 * (1 - distance / maxDistance);
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Iniciar animación
    animate();
    
    // Ajustar canvas al cambiar el tamaño de la ventana
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Limpiar
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [tema]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full -z-10 opacity-20 ${className}`}
    />
  );
};

export default FondoAnimado;
