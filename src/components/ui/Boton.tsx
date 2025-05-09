"use client";

import { ReactNode } from 'react';
import Link from 'next/link';

interface BotonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variante?: 'primario' | 'secundario' | 'terciario' | 'fantasma';
  tamaño?: 'pequeño' | 'mediano' | 'grande';
  className?: string;
  conIcono?: ReactNode;
  iconoPosicion?: 'izquierda' | 'derecha';
  completo?: boolean;
  estaDisabled?: boolean;
  conEfecto?: boolean;
}

const Boton = ({ 
  children, 
  href, 
  onClick, 
  variante = 'primario', 
  tamaño = 'mediano', 
  className = '',
  conIcono,
  iconoPosicion = 'izquierda',
  completo = false,
  estaDisabled = false,
  conEfecto = true,
}: BotonProps) => {
  // Estilos base
  let estilosBase = `
    relative
    inline-flex
    items-center
    justify-center
    font-medium
    transition-all
    duration-300
    overflow-hidden
    ${completo ? 'w-full' : ''}
    ${estaDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `;
  
  // Estilos según tamaño
  const estilosTamaño = {
    pequeño: 'text-sm rounded-lg px-3 py-1.5',
    mediano: 'text-base rounded-lg px-5 py-2.5',
    grande: 'text-lg rounded-xl px-7 py-3',
  };
  
  // Estilos según variante
  const estilosVariante = {
    primario: `
      text-white 
      bg-gradient-to-r from-primary to-primary-600 
      hover:from-primary-600 hover:to-primary-700 
      shadow-md hover:shadow-lg
      ${conEfecto ? 'hover:scale-[1.03]' : ''}
    `,
    secundario: `
      text-white 
      bg-gradient-to-r from-secondary to-secondary-600
      hover:from-secondary-600 hover:to-secondary-700
      shadow-md hover:shadow-lg
      ${conEfecto ? 'hover:scale-[1.03]' : ''}
    `,
    terciario: `
      text-dark dark:text-light
      bg-white dark:bg-dark/90
      border border-gray-200 dark:border-gray-700
      hover:bg-gray-50 dark:hover:bg-gray-800
      shadow-sm hover:shadow
      ${conEfecto ? 'hover:scale-[1.03]' : ''}
    `,
    fantasma: `
      text-primary dark:text-primary-400
      bg-transparent
      border border-primary/30 dark:border-primary-400/30
      hover:bg-primary/5 dark:hover:bg-primary-400/10
      ${conEfecto ? 'hover:scale-[1.03]' : ''}
    `,
  };
  
  // Combinar todos los estilos
  const estilosFinales = `
    ${estilosBase}
    ${estilosTamaño[tamaño]}
    ${estilosVariante[variante]}
    ${className}
  `;
  
  // Contenido del botón
  const contenido = (
    <>
      {/* Efecto de brillo */}
      {(variante === 'primario' || variante === 'secundario') && conEfecto && (
        <span 
          className="absolute inset-0 overflow-hidden rounded-lg"
          aria-hidden="true"
        >
          <span className="absolute top-0 left-1/4 w-1/2 h-full bg-white/20 transform -skew-x-12 transition-all duration-700 ease-out blur-md opacity-0 group-hover:opacity-100 group-hover:translate-x-24"></span>
        </span>
      )}
      
      {/* Icono a la izquierda */}
      {conIcono && iconoPosicion === 'izquierda' && (
        <span className="mr-2">{conIcono}</span>
      )}
      
      {/* Texto del botón */}
      <span className="relative z-10">{children}</span>
      
      {/* Icono a la derecha */}
      {conIcono && iconoPosicion === 'derecha' && (
        <span className="ml-2">{conIcono}</span>
      )}
    </>
  );
  
  // Renderizar como link o botón
  if (href) {
    return (
      <Link href={href} className={`group ${estilosFinales}`}>
        {contenido}
      </Link>
    );
  }
  
  return (
    <button 
      onClick={onClick} 
      disabled={estaDisabled}
      className={`group ${estilosFinales}`}
    >
      {contenido}
    </button>
  );
};

export default Boton;
