"use client";

import { useState } from "react";
import Link from "next/link";

interface TarjetaPromptProps {
  id: string;
  titulo: string;
  descripcion: string;
  ruta: string;
}

const TarjetaPrompt = ({
  id,
  titulo,
  descripcion,
  ruta
}: TarjetaPromptProps) => {
  const [expandido, setExpandido] = useState(false);

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
    <div className="prompt-card" id={id}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      
      <button 
        className="prompt-toggle"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={expandido}
        aria-controls={`${id}-details`}
        tabIndex={0}
      >
        {expandido ? "Ocultar Detalles" : "Ver Detalles"}
      </button>
      
      <div 
        id={`${id}-details`}
        className={`prompt-details ${expandido ? "active" : ""}`}
      >
        <div className="prompt-actions">
          <Link href={ruta} className="btn">
            Ver Prompt Completo
          </Link>
        </div>
        <div className="prompt-filename">
          <code>{`${id}.md`}</code>
        </div>
      </div>
    </div>
  );
};

export default TarjetaPrompt;
