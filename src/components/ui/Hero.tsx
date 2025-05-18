"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

interface HeroProps {
  titulo: string;
}

const Hero = ({ titulo }: HeroProps) => {
  const { tema } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="hero">
      <motion.h1 
        className="hero-titulo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {titulo}
      </motion.h1>
      
      <motion.div
        className="hero-decoration"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <svg 
          width="100" 
          height="10" 
          viewBox="0 0 100 10" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ margin: '0 auto' }}
        >
          <rect 
            width="100" 
            height="10" 
            rx="5" 
            fill={`url(#${tema === 'oscuro' ? 'gradientDark' : 'gradientLight'})`} 
          />
          <defs>
            <linearGradient id="gradientLight" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4682b4" />
              <stop offset="1" stopColor="#7b68ee" />
            </linearGradient>
            <linearGradient id="gradientDark" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6495ED" />
              <stop offset="1" stopColor="#8A2BE2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;
