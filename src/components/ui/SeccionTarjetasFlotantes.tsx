"use client";

import { useState, useEffect } from 'react';

interface TarjetaFlotanteProps {
  icono: React.ReactNode;
  titulo: string;
  descripcion: string;
  color: string;
  delay?: number;
}

export const TarjetaFlotante = ({ 
  icono, 
  titulo, 
  descripcion, 
  color,
  delay = 0
}: TarjetaFlotanteProps) => {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrar(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transition-all duration-1000 transform ${
        mostrar 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-16 opacity-0'
      }`}
    >      <div 
        className={`relative overflow-hidden p-4 sm:p-6 rounded-2xl shadow-lg bg-white dark:bg-dark hover:shadow-xl transition-shadow duration-300 
        border-t-4 ${color} group animate-float h-full`}
      >
        <div className="flex items-center mb-4">
          <div className={`p-2 rounded-lg ${color.replace('border', 'bg').replace('-500', '-100')} ${color.replace('border', 'text')}`}>
            {icono}
          </div>
        </div>
        <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-dark dark:text-light transition-colors duration-300 group-hover:text-primary">
          {titulo}
        </h3>
        <p className="text-medium text-xs sm:text-sm">
          {descripcion}
        </p>
        
        {/* Círculo decorativo fondo */}
        <div className={`absolute right-0 bottom-0 w-24 h-24 -m-12 rounded-full ${color.replace('border', 'bg').replace('-500', '-50')} dark:opacity-10 blur-xl transition-all duration-300 group-hover:scale-150`}></div>
      </div>
    </div>
  );
};

interface SeccionTarjetasFlotantesProps {
  titulo: string;
  subtitulo: string;
  tarjetas: Array<{
    icono: React.ReactNode;
    titulo: string;
    descripcion: string;
    color: string;
  }>;
  className?: string;
}

const SeccionTarjetasFlotantes = ({ 
  titulo, 
  subtitulo, 
  tarjetas,
  className = ""
}: SeccionTarjetasFlotantesProps) => {
  return (    <section className={`py-10 md:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {titulo}
          </h2>
          <p className="text-medium text-sm md:text-base px-2">
            {subtitulo}
          </p>
        </div>
        
        {/* Cuadrícula de tarjetas - responsive en todos los tamaños de pantalla */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {tarjetas.map((tarjeta, index) => (
            <TarjetaFlotante
              key={index}
              icono={tarjeta.icono}
              titulo={tarjeta.titulo}
              descripcion={tarjeta.descripcion}
              color={tarjeta.color}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeccionTarjetasFlotantes;
