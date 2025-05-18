"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TarjetaPromptProps {
  id: string;
  titulo: string;
  descripcion: string;
}

const TarjetaPrompt = ({ id, titulo, descripcion }: TarjetaPromptProps) => {
  return (
    <motion.div
      className="tarjeta-prompt"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 }
      }}
    >
      <a href={`/p/${id}`} className="tarjeta-prompt-link">
        <h3 className="tarjeta-prompt-titulo">{titulo}</h3>
        <p className="tarjeta-prompt-descripcion">{descripcion}</p>
        <div className="tarjeta-prompt-flecha">→</div>
      </a>
    </motion.div>
  );
};

export default TarjetaPrompt;
