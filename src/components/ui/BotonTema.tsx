"use client";

import { useTheme } from "@/hooks/useTheme";

interface BotonTemaProps {
  className?: string;
}

const BotonTema = ({ className = "" }: BotonTemaProps) => {
  const { tema, alternarTema } = useTheme();

  const handleClick = () => {
    alternarTema();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      alternarTema();
    }
  };

  return (
    <button 
      className={`theme-toggle ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label="Cambiar tema"
      tabIndex={0}
    >
      <span className="icon-light" aria-hidden="true">☀️</span>
      <span className="icon-dark" aria-hidden="true">🌙</span>
    </button>
  );
};

export default BotonTema;
