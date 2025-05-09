"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Tema = "light" | "dark";

interface ContextoTema {
  tema: Tema;
  alternarTema: () => void;
}

const TemaContexto = createContext<ContextoTema | undefined>(undefined);

interface ProveedorTemaProps {
  children: ReactNode;
}

export function ProveedorTema({ children }: ProveedorTemaProps) {
  const [tema, setTema] = useState<Tema>("light");
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    // Recuperar tema guardado o usar preferencia del sistema
    const temaGuardado = localStorage.getItem("theme") as Tema | null;
    
    if (temaGuardado) {
      setTema(temaGuardado);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTema("dark");
    }
    
    setMontado(true);
  }, []);

  useEffect(() => {
    if (montado) {
      // Aplicar tema al documento
      document.documentElement.setAttribute("data-theme", tema);
      // Guardar tema en localStorage
      localStorage.setItem("theme", tema);
    }
  }, [tema, montado]);

  const alternarTema = () => {
    setTema(temaActual => temaActual === "light" ? "dark" : "light");
  };

  // Evitar renderizado hidratación
  if (!montado) {
    return <>{children}</>;
  }

  return (
    <TemaContexto.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContexto.Provider>
  );
}

export function useTema() {
  const contexto = useContext(TemaContexto);
  
  if (contexto === undefined) {
    throw new Error("useTema debe utilizarse dentro de un ProveedorTema");
  }
  
  return contexto;
}
