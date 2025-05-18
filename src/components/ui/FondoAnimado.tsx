"use client";

import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';

const FondoAnimado = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { tema } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Ajustar el tamaño del canvas al tamaño de la ventana
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Configuración de partículas
    const particulas: Particula[] = [];
    const numParticulas = 50;
    
    // Colores según el tema
    const colorPrimario = tema === 'oscuro' ? 'rgba(100, 149, 237, 0.5)' : 'rgba(70, 130, 180, 0.3)';
    const colorSecundario = tema === 'oscuro' ? 'rgba(138, 43, 226, 0.5)' : 'rgba(123, 104, 238, 0.3)';
    
    // Clase para las partículas
    class Particula {
      x: number;
      y: number;
      tamaño: number;
      velocidadX: number;
      velocidadY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.tamaño = Math.random() * 5 + 1;
        this.velocidadX = Math.random() * 2 - 1;
        this.velocidadY = Math.random() * 2 - 1;
        this.color = Math.random() > 0.5 ? colorPrimario : colorSecundario;
      }
      
      actualizar() {
        this.x += this.velocidadX;
        this.y += this.velocidadY;
        
        // Rebote en los bordes
        if (this.x > canvas.width || this.x < 0) {
          this.velocidadX = -this.velocidadX;
        }
        
        if (this.y > canvas.height || this.y < 0) {
          this.velocidadY = -this.velocidadY;
        }
      }
      
      dibujar() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.tamaño, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Crear partículas
    for (let i = 0; i < numParticulas; i++) {
      particulas.push(new Particula());
    }
    
    // Función para dibujar líneas entre partículas cercanas
    const conectarParticulas = () => {
      const distanciaMaxima = 150;
      
      for (let a = 0; a < particulas.length; a++) {
        for (let b = a; b < particulas.length; b++) {
          const dx = particulas[a].x - particulas[b].x;
          const dy = particulas[a].y - particulas[b].y;
          const distancia = Math.sqrt(dx * dx + dy * dy);
          
          if (distancia < distanciaMaxima) {
            if (!ctx) return;
            ctx.beginPath();
            ctx.strokeStyle = tema === 'oscuro' 
              ? `rgba(255, 255, 255, ${1 - distancia / distanciaMaxima})` 
              : `rgba(70, 130, 180, ${1 - distancia / distanciaMaxima})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particulas[a].x, particulas[a].y);
            ctx.lineTo(particulas[b].x, particulas[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Función de animación
    const animar = () => {
      requestAnimationFrame(animar);
      
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Actualizar y dibujar partículas
      for (const particula of particulas) {
        particula.actualizar();
        particula.dibujar();
      }
      
      conectarParticulas();
    };
    
    animar();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [tema]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fondo-animado"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.7,
      }}
    />
  );
};

export default FondoAnimado;
