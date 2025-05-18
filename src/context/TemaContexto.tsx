"use client";

import { createContext, useState, useEffect, ReactNode } from 'react';

interface TemaContextoProps {
  tema: 'claro' | 'oscuro';
  cambiarTema: () => void;
}

export const TemaContexto = createContext<TemaContextoProps>({
  tema: 'claro',
  cambiarTema: () => {},
});

interface TemaProveedorProps {
  children: ReactNode;
}

export const TemaProveedor = ({ children }: TemaProveedorProps) => {
  const [tema, setTema] = useState<'claro' | 'oscuro'>('claro');
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    setMontado(true);
    const temaGuardado = localStorage.getItem('tema') as 'claro' | 'oscuro';
    if (temaGuardado) {
      setTema(temaGuardado);
      document.body.className = `tema-${temaGuardado}`;
    } else {
      // Detectar preferencia del sistema
      const prefiereModoOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const temaInicial = prefiereModoOscuro ? 'oscuro' : 'claro';
      setTema(temaInicial);
      document.body.className = `tema-${temaInicial}`;
    }
  }, []);

  const cambiarTema = () => {
    const nuevoTema = tema === 'claro' ? 'oscuro' : 'claro';
    setTema(nuevoTema);
    document.body.className = `tema-${nuevoTema}`;
    localStorage.setItem('tema', nuevoTema);
  };

  if (!montado) {
    return <>{children}</>;
  }

  return (
    <TemaContexto.Provider value={{ tema, cambiarTema }}>
      {children}
    </TemaContexto.Provider>
  );
};
