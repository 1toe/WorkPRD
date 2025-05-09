"use client";

import { useState } from "react";
import contenidoPrompts from "@/constants/contenidoPrompts";
import Modal from "@/components/ui/Modal";

interface VisualizadorPromptProps {
  idPrompt: string;
  titulo: string;
  children?: React.ReactNode;
}

const VisualizadorPrompt = ({
  idPrompt,
  titulo,
  children
}: VisualizadorPromptProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const abrirModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  // Obtener el contenido del prompt desde el objeto de prompts
  const contenido = contenidoPrompts[idPrompt as keyof typeof contenidoPrompts] || "";

  return (
    <>
      <div className="prompt-card">
        <h3>{titulo}</h3>
        {children}
        
        <button 
          className="bg-primary text-light px-md py-sm rounded-md mt-md"
          onClick={abrirModal}
          tabIndex={0}
          aria-label={`Ver prompt completo: ${titulo}`}
        >
          Ver Prompt Completo
        </button>
      </div>
      
      <Modal
        isVisible={modalVisible}
        titulo={titulo}
        contenido={contenido}
        onClose={cerrarModal}
      />
    </>
  );
};

export default VisualizadorPrompt;
