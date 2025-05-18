"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import contenidoPrompts from "@/constants/contenidoPrompts";
import BotonTema from "@/components/ui/BotonTema";
import Hero from "@/components/ui/Hero";
import Seccion from "@/components/ui/Seccion";
import Pie from "@/components/ui/Pie";
import Modal from "@/components/ui/Modal";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import FondoAnimado from "@/components/ui/FondoAnimado";

interface PromptPageProps {
  params: { id: string };
}

export default function PromptPage() {
  const [montado, setMontado] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const pathname = usePathname();
  
  // Extraer el ID del prompt del pathname
  const promptId = pathname.split('/').pop() || '';
  
  let titulo = "";
  
  switch (promptId) {
    case "int-prd":
      titulo = "Creación Interactiva de PRD";
      break;
    case "verif":
      titulo = "Verificación Integral de PRD";
      break;
    case "feat":
      titulo = "Extracción de Características de PRD";
      break;
    case "rules":
      titulo = "PRD a Reglas";
      break;
    case "rfcs":
      titulo = "PRD a RFCs";
      break;
    case "impl":
      titulo = "Plantilla de Implementación";
      break;
    case "change":
      titulo = "Gestión de Cambios de PRD";
      break;
    default:
      titulo = "Detalles del Prompt";
  }

  // Mapear el ID de la URL al ID de contenido
  const contenidoId = ((): keyof typeof contenidoPrompts => {
    switch (promptId) {
      case "int-prd":
        return "interactive-prd-creation";
      case "verif":
        return "verification";
      case "feat":
        return "features";
      case "rules":
        return "rules";
      case "rfcs":
        return "rfcs";
      case "impl":
        return "implementation";
      case "change":
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
      <FondoAnimado />
      <Hero titulo={titulo} />
      
      <BotonTema />
      
      <nav className="main-nav">
        <div className="container">
          <ul className="nav-list">
            <li className="nav-item"><Link href="/" className="nav-link">Inicio</Link></li>
            <li className="nav-item"><Link href="/views/prompts-index" className="nav-link">Índice de Prompts</Link></li>
            <li className="nav-item"><Link href="#descripcion" className="nav-link">Descripción</Link></li>
          </ul>
        </div>
      </nav>

      <Modal
        isVisible={modalVisible}
        titulo={titulo}
        contenido={contenido}
        onClose={cerrarModal}
      />

      <main className="main-content">
        <Seccion id="descripcion">
          <div className="breadcrumbs">
            <ul className="breadcrumb-list">
              <li className="breadcrumb-item"><Link href="/" className="breadcrumb-link">Inicio</Link></li>
              <li className="breadcrumb-item"><Link href="/views/prompts-index" className="breadcrumb-link">Índice de Prompts</Link></li>
              <li className="breadcrumb-item">{titulo}</li>
            </ul>
          </div>

          <h2 className="section-title">Descripción</h2>
          
          <div className="prompt-details active">
            <div className="prompt-content">
              <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {contenido}
              </ReactMarkdown>
            </div>
            
            <div className="prompt-actions mt-lg">
              <button 
                onClick={copiarContenido}
                className="btn-primary bg-primary text-light px-md py-sm rounded-md mr-md"
              >
                Copiar Prompt
              </button>
              
              <button 
                onClick={abrirModal}
                className="btn-secondary bg-secondary text-light px-md py-sm rounded-md"
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
