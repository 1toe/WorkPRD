import Link from "next/link";
import { useState, useEffect } from "react";
import BotonTema from "./BotonTema";

interface NavegacionProps {
  className?: string;
}

const Navegacion = ({ className = "" }: NavegacionProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', manejarScroll);
    return () => {
      window.removeEventListener('scroll', manejarScroll);
    };
  }, []);

  const alternarMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-light/80 dark:bg-dark/80 backdrop-blur-lg shadow-md' : 'py-4'} ${className}`}
      style={{
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              WorkPRD
            </span>
          </Link>
          
          {/* Menú de escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="relative text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium">
              Inicio
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link href="/views/prompts-index" className="relative text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium">
              Prompts
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link href="#descripcion" className="relative text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium">
              Descripción
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link href="#proceso" className="relative text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium">
              Proceso
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link href="#ejemplo" className="relative text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors duration-200 font-medium">
              Ejemplos
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            
            <div className="ml-4">
              <BotonTema />
            </div>
          </div>
          
          {/* Botón menú móvil */}
          <button 
            onClick={alternarMenu}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 border-none focus:outline-none"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-dark dark:bg-light mb-1.5 transition-transform ${menuAbierto ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-dark dark:bg-light mb-1.5 transition-opacity ${menuAbierto ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-dark dark:bg-light transition-transform ${menuAbierto ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
          {/* Menú móvil */}
        <div 
          className={`md:hidden fixed top-[60px] left-0 right-0 bg-light/95 dark:bg-dark/95 backdrop-blur-lg shadow-lg
            border-t border-gray-100 dark:border-gray-800 px-6 py-6 
            transition-all duration-300 ease-in-out
            ${menuAbierto ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
          aria-hidden={!menuAbierto}
        >
          <div className="flex flex-col space-y-6">
            <Link 
              href="/" 
              className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors text-lg font-medium" 
              onClick={() => setMenuAbierto(false)}
            >
              Inicio
            </Link>
            <Link 
              href="/views/prompts-index" 
              className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors text-lg font-medium" 
              onClick={() => setMenuAbierto(false)}
            >
              Prompts
            </Link>
            <Link 
              href="#descripcion" 
              className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors text-lg font-medium" 
              onClick={() => setMenuAbierto(false)}
            >
              Descripción
            </Link>
            <Link 
              href="#proceso" 
              className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors text-lg font-medium" 
              onClick={() => setMenuAbierto(false)}
            >
              Proceso
            </Link>
            <Link 
              href="#ejemplo" 
              className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors text-lg font-medium" 
              onClick={() => setMenuAbierto(false)}
            >
              Ejemplos
            </Link>
            
            <div className="pt-2 flex items-center">
              <span className="mr-3 text-medium text-sm">Cambiar tema:</span>
              <BotonTema />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navegacion;
