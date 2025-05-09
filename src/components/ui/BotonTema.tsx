"use client";

import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";

interface BotonTemaProps {
  className?: string;
}

const BotonTema = ({ className = "" }: BotonTemaProps) => {
  const { tema, alternarTema } = useTheme();
  const [montado, setMontado] = useState(false);

  // Asegurarse de que el componente solo se renderiza en el cliente
  useEffect(() => {
    setMontado(true);
  }, []);

  const handleClick = () => {
    alternarTema();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      alternarTema();
    }
  };

  if (!montado) {
    // Renderizar un botón vacío durante SSR para evitar hidratación 
    return <button className={`w-10 h-10 rounded-full ${className}`} />;
  }

  return (
    <button 
      className={`relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 ${
        tema === "dark" 
          ? "bg-gradient-to-r from-violet-600 to-blue-600" 
          : "bg-gradient-to-r from-amber-300 to-yellow-500"
      } ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label="Cambiar tema"
      tabIndex={0}
    >
      <span 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          tema === "dark" ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-white"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </span>
      <span 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          tema === "dark" ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </span>
      
      {/* Efecto de brillos */}
      <span className={`absolute -inset-0.5 rounded-full blur opacity-30 transition-opacity duration-300 ${
        tema === "dark" ? "bg-blue-400" : "bg-yellow-400"
      } ${tema === "dark" ? "animate-pulse" : ""}`}></span>
    </button>
  );
};

export default BotonTema;
