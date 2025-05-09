"use client";

import { useEffect, useRef, useState } from "react";

interface PasoFlujoTrabajoProps {
  numero: number;
  titulo: string;
  descripcion: string;
  delay?: number;
}

const PasoFlujoTrabajo = ({
  numero,
  titulo,
  descripcion,
  delay = 0
}: PasoFlujoTrabajoProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Añadir un pequeño retraso para crear un efecto escalonado
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }, delay);
          
          return () => clearTimeout(timer);
        }
      },
      {
        threshold: 0.2,
      }
    );
    
    if (stepRef.current) {
      observer.observe(stepRef.current);
    }
    
    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, [delay]);
  
  return (    <div 
      ref={stepRef}
      className={`relative flex items-stretch mb-8 sm:mb-12 transition-all duration-700 
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
    >
      {/* Línea conectora vertical - Ajustada para móviles */}
      <div className="absolute left-4 sm:left-6 top-10 sm:top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary opacity-30"></div>
      
      {/* Número de paso - Más pequeño en móviles */}
      <div className="flex-shrink-0 z-10">
        <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-sm sm:text-lg shadow-lg">
          {numero}
        </div>
      </div>
      
      {/* Contenido del paso - Ajustado para móviles */}
      <div className="ml-4 sm:ml-6 p-3 sm:p-6 bg-white dark:bg-dark/80 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary flex-grow">
        <div className="relative">
          <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-3 text-dark dark:text-light pr-8">{titulo}</h3>
          <p className="text-xs sm:text-sm md:text-base text-medium dark:text-medium">{descripcion}</p>
          
          {/* Decoración de fondo - Adaptada para móviles */}
          <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-primary/5 dark:bg-primary/10"></div>
        </div>
      </div>
    </div>
  );
};

export default PasoFlujoTrabajo;
