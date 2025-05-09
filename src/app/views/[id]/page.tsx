"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import contenidoPrompts from "@/constants/contenidoPrompts";
import BotonTema from "@/components/ui/BotonTema";
import Navegacion from "@/components/ui/Navegacion";
import Hero from "@/components/ui/Hero";
import Seccion from "@/components/ui/Seccion";
import Pie from "@/components/ui/Pie";
import Modal from "@/components/ui/Modal";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

interface PromptPageProps {
  params: { id: string };
}

export default function PromptPage() {
  const [montado, setMontado] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const pathname = usePathname();
  
  // Extraer el ID del prompt del pathname
  const promptId = pathname.split('/').pop()?.replace('-prompt', '') || '';
  
  let titulo = "";
  
  switch (promptId) {
    case "interactive-prd-creation":
      titulo = "Creación Interactiva de PRD";
      break;
    case "prd-comprehensive-verification":
      titulo = "Verificación Integral de PRD";
      break;
    case "prd-to-features":
      titulo = "PRD a Características";
      break;
    case "prd-to-rules":
      titulo = "PRD a Reglas";
      break;
    case "prd-to-rfcs":
      titulo = "PRD a RFCs";
      break;
    case "implementation-prompt-template":
      titulo = "Plantilla de Implementación";
      break;
    case "prd-change-management":
      titulo = "Gestión de Cambios de PRD";
      break;
    default:
      titulo = "Detalles del Prompt";
  }

  // Mapear el ID de la URL al ID de contenido
  const contenidoId = ((): keyof typeof contenidoPrompts => {
    switch (promptId) {
      case "interactive-prd-creation":
        return "interactive-prd-creation";
      case "prd-comprehensive-verification":
        return "verification";
      case "prd-to-features":
        return "features";
      case "prd-to-rules":
        return "rules";
      case "prd-to-rfcs":
        return "rfcs";
      case "implementation-prompt-template":
        return "implementation";
      case "prd-change-management":
        return "change-management";
      default:
        return "interactive-prd-creation";
    }
  })();

  const contenido = contenidoPrompts[contenidoId] || "";

  // Asegurarse de que el componente solo se renderiza en el cliente
  useEffect(() => {
    setMontado(true);
  }, []);

  const abrirModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  const copiarContenido = () => {
    navigator.clipboard.writeText(contenido);
    alert("Contenido copiado al portapapeles");
  };

  if (!montado) {
    return null;
  }

  return (
    <>
      <Hero titulo={titulo} />
      
      <BotonTema />
      
      <nav className="main-nav">
        <div className="container">
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/views/prompts-index">Índice de Prompts</Link></li>
            <li><Link href="#descripcion">Descripción</Link></li>
          </ul>
        </div>
      </nav>

      <Modal
        isVisible={modalVisible}
        titulo={titulo}
        contenido={contenido}
        onClose={cerrarModal}
      />

      <main>
        <Seccion id="descripcion">
          <div className="breadcrumbs">
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/views/prompts-index">Índice de Prompts</Link></li>
              <li>{titulo}</li>
            </ul>
          </div>

          <h2>Descripción</h2>
          
          <div className="prompt-details active">
            <div className="prompt-content">
              <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {contenido}
              </ReactMarkdown>
            </div>
            
            <div className="prompt-actions mt-lg">
              <button 
                onClick={copiarContenido}
                className="bg-primary text-light px-md py-sm rounded-md mr-md"
              >
                Copiar Prompt
              </button>
              
              <button 
                onClick={abrirModal}
                className="bg-secondary text-light px-md py-sm rounded-md"
              >
                Ver en Modal
              </button>
            </div>
          </div>
        </Seccion>
      </main>

      <Pie />
    </>
  );
}
