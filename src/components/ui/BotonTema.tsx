"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface BotonTemaProps {}

const BotonTema = ({}: BotonTemaProps) => {
  const [tema, setTema] = useState<'claro' | 'oscuro'>('claro');
  const [montado, setMontado] = useState(false);

  // Efecto para cargar el tema desde localStorage
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
    return null;
  }

  return (
    <motion.button
      className="tema-toggle"
      onClick={cambiarTema}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      aria-label={`Cambiar a tema ${tema === 'claro' ? 'oscuro' : 'claro'}`}
    >
      {tema === 'claro' ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0-7a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 17a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zM5.636 4.222a1 1 0 0 1 0 1.414L4.93 6.344a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zm12.728 12.728a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM3 12a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3zm17 0a1 1 0 0 1 1-1 1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1zM4.222 18.364a1 1 0 0 1 1.414 0l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414zm12.728-12.728a1 1 0 0 1 1.414 0l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414z" />
        </svg>
      )}
    </motion.button>
  );
};

export default BotonTema;
