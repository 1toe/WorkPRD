"use client";

import { useEffect, useRef, useState } from "react";

interface SeccionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  esImpar?: boolean;
  titulo?: string;
  subtitulo?: string;
  conAnimacion?: boolean;
}

const Seccion = ({ 
  id, 
  className = "", 
  children, 
  esImpar = false,
  titulo,
  subtitulo,
  conAnimacion = true
}: SeccionProps) => {
  const seccionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!conAnimacion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      }
    );

    if (seccionRef.current) {
      observer.observe(seccionRef.current);
    }

    return () => {
      if (seccionRef.current) {
        observer.unobserve(seccionRef.current);
      }
    };
  }, [conAnimacion]);

  return (
    <section 
      id={id} 
      ref={seccionRef}
      className={`
        relative py-16 md:py-24 
        ${esImpar ? "bg-alt dark:bg-dark" : "bg-light dark:bg-dark/80"} 
        overflow-hidden
        ${className}
      `}
    >
      {/* Formas decorativas si es una sección impar */}
      {esImpar && (
        <>
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary opacity-5 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary opacity-5 blur-3xl"></div>
        </>
      )}

      <div className={`
        container mx-auto px-6
        transition-all duration-700
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
      `}>
        {/* Encabezado de sección si se proporcionó título */}
        {(titulo || subtitulo) && (
          <div className="mb-12 text-center">
            {titulo && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {titulo}
              </h2>
            )}
            {subtitulo && (
              <p className="text-medium max-w-2xl mx-auto">
                {subtitulo}
              </p>
            )}
            <div className="mx-auto mt-6 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default Seccion;
