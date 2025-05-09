"use client";

import { useState, useEffect, useRef } from "react";
import rehypeHighlight from "rehype-highlight";
import ReactMarkdown from "react-markdown";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ClipboardIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

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
  const [montado, setMontado] = useState(false);
  const [animacionSalida, setAnimacionSalida] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Asegurar renderizado solo en cliente
  useEffect(() => {
    setMontado(true);
  }, []);

  // Manejar el cierre del modal con la tecla Escape
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        handleCloseWithAnimation();
      }
    };
    
    // Cerrar al hacer clic fuera del modal
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleCloseWithAnimation();
      }
    };

    if (isVisible) {
      window.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
  
  // Función para cerrar con animación
  const handleCloseWithAnimation = () => {
    setAnimacionSalida(true);
    setTimeout(() => {
      onClose();
      setAnimacionSalida(false);
    }, 300);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(contenido);
    setCopiado(true);
    
    // Restablecer el estado después de 2 segundos
    setTimeout(() => {
      setCopiado(false);
    }, 2000);
  };

  if (!montado) return null;
  if (!isVisible && !animacionSalida) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center overflow-y-auto pt-10 pb-10
        transition-opacity duration-300 ease-in-out
        ${isVisible && !animacionSalida ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleCloseWithAnimation}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className={`relative w-full max-w-4xl mx-4 bg-white dark:bg-dark rounded-xl shadow-2xl overflow-hidden
          transition-all duration-300 ease-out
          ${isVisible && !animacionSalida ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}
          ${animacionSalida ? 'translate-y-8 opacity-0' : ''}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Decoración superior */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        
        {/* Botón de cierre */}
        <button 
          className="absolute top-4 right-4 p-2 rounded-full text-medium hover:text-dark dark:text-light/70 dark:hover:text-light
            bg-light/50 dark:bg-dark/50 hover:bg-light/80 dark:hover:bg-dark/80
            transition-all duration-200 hover:rotate-90"
          onClick={handleCloseWithAnimation}
          aria-label="Cerrar modal"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
        
        <div className="p-6 md:p-10">
          {/* Título del modal */}
          <h2 
            id="modal-title"
            className="text-xl md:text-2xl font-bold text-primary mb-6 pb-2 border-b border-primary/30 dark:border-primary/20"
          >
            {titulo}
          </h2>
          
          {/* Cuerpo del modal */}
          <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none mb-8 overflow-auto">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {contenido}
            </ReactMarkdown>
          </div>
        </div>
        
        {/* Botón de copiar */}
        <div className="px-6 md:px-10 pb-6 md:pb-10 pt-0">
          <button 
            onClick={handleCopy}
            className={`flex items-center justify-center w-full py-3 px-4 rounded-lg font-medium text-white
              transition-all duration-300 ease-out
              ${copiado 
                ? 'bg-secondary hover:bg-secondary/90' 
                : 'bg-primary hover:bg-primary/90'}`}
          >
            <span className="mr-2">
              {copiado 
                ? <ClipboardDocumentCheckIcon className="w-5 h-5" /> 
                : <ClipboardIcon className="w-5 h-5" />}
            </span>
            {copiado ? "¡Copiado al portapapeles!" : "Copiar contenido"}
          </button>
        </div>
        
        {/* Decoración inferior */}
        <div className="absolute bottom-0 right-0 w-32 h-32 -m-10 rounded-full opacity-10 bg-gradient-to-br from-primary to-secondary blur-xl"></div>
      </div>
    </div>
  );
};

export default Modal;
