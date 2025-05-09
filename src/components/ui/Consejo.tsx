"use client";

import { useState } from "react";

interface ConsejoProps {
  texto: string;
  tipo?: 'info' | 'exito' | 'advertencia' | 'error';
  esDesechable?: boolean;
}

const Consejo = ({
  texto,
  tipo = 'info',
  esDesechable = false
}: ConsejoProps) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  // Colores y iconos según el tipo
  const estilos = {
    info: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-800 dark:text-blue-200',
      icono: (
        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-9a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm0-4a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
        </svg>
      )
    },
    exito: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-800 dark:text-green-200',
      icono: (
        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    advertencia: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      text: 'text-yellow-800 dark:text-yellow-200',
      icono: (
        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    error: {
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      text: 'text-red-800 dark:text-red-200',
      icono: (
        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      )
    },
  };
  
  return (
    <div className={`relative overflow-hidden rounded-lg border p-4 my-4 shadow-sm ${estilos[tipo].bg} ${estilos[tipo].border} animate-fadeIn`}>
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          {estilos[tipo].icono}
        </div>
        <div className={`flex-grow ${estilos[tipo].text}`}>
          <p className="text-sm">{texto}</p>
        </div>
        
        {esDesechable && (
          <button
            onClick={() => setVisible(false)}
            className="flex-shrink-0 ml-auto -mx-1.5 -my-1.5 rounded-md p-1.5 inline-flex text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 focus:outline-none"
            aria-label="Descartar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        )}
      </div>
      
      {/* Decoración de fondo */}
      <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full opacity-10 blur-xl bg-gradient-to-r from-primary to-primary-600"></div>
    </div>
  );
};

export default Consejo;
