"use client";

import { useContext } from 'react';
import { TemaContexto } from '@/context/TemaContexto';

export const useTheme = () => {
  const context = useContext(TemaContexto);
  
  if (context === undefined) {
    throw new Error('useTheme debe ser usado dentro de un TemaProveedor');
  }
  
  return {
    tema: context.tema,
    cambiarTema: context.cambiarTema
  };
};
