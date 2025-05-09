"use client";

import { useState, useEffect } from "react";
import rehypeHighlight from "rehype-highlight";
import ReactMarkdown from "react-markdown";

interface ModalProps {
  isVisible: boolean;
  titulo: string;
  contenido: string;
  onClose: () => void;
}

const Modal = ({
  isVisible,
  titulo,
  contenido,
  onClose
}: ModalProps) => {
  const [copiado, setCopiado] = useState(false);

  // Manejar el cierre del modal con la tecla Escape
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [isVisible, onClose]);

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const handleCopy = () => {
    navigator.clipboard.writeText(contenido);
    setCopiado(true);
    
    // Restablecer el estado después de 2 segundos
    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  if (!isVisible) return null;

  return (
    <div className="modal visible" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span 
          className="modal-close" 
          onClick={onClose}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onClose();
            }
          }}
          aria-label="Cerrar modal"
        >
          &times;
        </span>
        <h2 id="modal-title">{titulo}</h2>
        <div id="modal-body">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {contenido}
          </ReactMarkdown>
        </div>
        <button 
          id="modal-copy" 
          className={`copy-button ${copiado ? "copied" : ""}`}
          onClick={handleCopy}
        >
          {copiado ? "¡Copiado!" : "Copiar al portapapeles"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
