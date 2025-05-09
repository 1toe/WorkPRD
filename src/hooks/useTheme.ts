"use client";

import { useEffect, useState } from "react";

/**
 * Hook para manejar el tema de la aplicación (claro/oscuro)
 */
export const useTheme = () => {
  const [tema, setTema] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Recuperar tema guardado o usar preferencia del sistema
    const temaGuardado = localStorage.getItem("theme") as "light" | "dark" | null;
    
    if (temaGuardado) {
      setTema(temaGuardado);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTema("dark");
    }
  }, []);

  useEffect(() => {
    // Aplicar tema al documento
    document.documentElement.setAttribute("data-theme", tema);
    // Guardar tema en localStorage
    localStorage.setItem("theme", tema);
  }, [tema]);

  // Función para alternar entre temas
  const alternarTema = () => {
    setTema(temaActual => temaActual === "light" ? "dark" : "light");
  };

  return { tema, alternarTema };
};
