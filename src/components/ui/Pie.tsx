"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PieProps {}

const Pie = ({}: PieProps) => {
  const año = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            PRD & RFC
          </motion.div>
          
          <div className="footer-links">
            <a href="/" className="footer-link">Inicio</a>
            <a href="/views/prompts-index" className="footer-link">Prompts</a>
          </div>
        </div>
        
        <div className="footer-copyright">
          © {año} Desarrollo Guiado por PRD & RFC. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Pie;
