"use client";

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isVisible: boolean;
  titulo: string;
  contenido: string;
  onClose: () => void;
}

const Modal = ({ isVisible, titulo, contenido, onClose }: ModalProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <div className={`modal-overlay ${isVisible ? 'visible' : ''}`}>
          <motion.div 
            className="modal-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="modal-header">
              <h2 className="modal-title">{titulo}</h2>
              <button className="modal-close" onClick={onClose}>×</button>
            </div>
            <div className="modal-body">
              <pre className="modal-content">{contenido}</pre>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
