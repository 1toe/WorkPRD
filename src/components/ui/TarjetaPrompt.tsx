"use client";

import { useState } from "react";
import Link from "next/link";
import Boton from "./Boton";

interface TarjetaPromptProps {
  id: string;
  titulo: string;
  descripcion: string;
  ruta: string;
  categoria?: string;
}

const TarjetaPrompt = ({
  id,
  titulo,
  descripcion,
  ruta,
  categoria = "PRD"
}: TarjetaPromptProps) => {
  const [expandido, setExpandido] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleToggle = () => {
    setExpandido(prevExpandido => !prevExpandido);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div 
      className="group bg-white dark:bg-dark/80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
      id={id}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Franja de categoría */}
      <div className="w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
      
      <div className="p-6">
        {/* Etiqueta de categoría */}
        <div className="mb-4">
          <span className="inline-block text-xs font-semibold py-1 px-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-300">
            {categoria}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-dark dark:text-light group-hover:text-primary transition-colors">{titulo}</h3>
        <p className="text-medium dark:text-medium/80 mb-6 line-clamp-3">{descripcion}</p>
          <div className="flex flex-wrap gap-3">
          <Boton
            variante="primario"
            tamaño="pequeño"
            onClick={handleToggle}
            aria-expanded={expandido}
            aria-controls={`${id}-details`}
            conIcono={
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${expandido ? "rotate-180" : ""}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            }
            iconoPosicion="derecha"
          >
            {expandido ? "Ocultar" : "Ver Detalles"}
          </Boton>
          
          <Link href={ruta}>
            <Boton
              variante="secundario"
              tamaño="pequeño"
              conIcono={
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              }
              iconoPosicion="derecha"
            >
              Ver Completo
            </Boton>
          </Link>
        </div>
        
        {expandido && (
          <div 
            id={`${id}-details`}
            className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 animate-fadeIn"
          >
            <div className="flex items-center justify-between mb-2 text-xs text-medium">
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded font-mono">
                {`${id}.md`}
              </span>
              <span className="text-xs text-medium">Clic en "Ver Completo" para más detalles</span>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
              <p className="text-sm text-medium">{descripcion}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TarjetaPrompt;
