"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BotonTema from "@/components/ui/BotonTema";
import Hero from "@/components/ui/Hero";
import Seccion from "@/components/ui/Seccion";
import Pie from "@/components/ui/Pie";

export default function PromptsIndex() {
  const [montado, setMontado] = useState(false);

  // Asegurarse de que el componente solo se renderiza en el cliente
  useEffect(() => {
    setMontado(true);
  }, []);

  if (!montado) {
    return null;
  }

  const promptsDisponibles = [
    {
      id: "interactive-prd-creation-prompt",
      titulo: "Creación Interactiva de PRD",
      descripcion: "Crea un PRD a través de un proceso guiado de preguntas paso a paso"
    },
    {
      id: "prd-comprehensive-verification-prompt",
      titulo: "Verificación Integral de PRD",
      descripcion: "Identifica brechas y mejora la calidad de tu PRD existente"
    },
    {
      id: "prd-to-features-prompt",
      titulo: "Extracción de Características de PRD",
      descripcion: "Extrae características estructuradas a partir de tu PRD"
    },
    {
      id: "prd-to-rules-prompt",
      titulo: "PRD a Reglas",
      descripcion: "Genera reglas técnicas y directrices de desarrollo"
    },
    {
      id: "prd-to-rfcs-prompt",
      titulo: "PRD a RFCs",
      descripcion: "Divide tu proyecto en RFCs implementables"
    },
    {
      id: "implementation-prompt-template",
      titulo: "Plantilla de Implementación",
      descripcion: "Guía para implementar cada RFC de forma estructurada"
    },
    {
      id: "prd-change-management-prompt",
      titulo: "Gestión de Cambios de PRD",
      descripcion: "Analiza y gestiona cambios en requisitos durante el desarrollo"
    }
  ];

  return (
    <>
      <Hero titulo="Índice de Prompts" />
      
      <BotonTema />      <nav className="main-nav">
        <div className="container">
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="#prompts">Prompts Disponibles</Link></li>
          </ul>
        </div>
      </nav>

      <main>
        <Seccion id="prompts">
          <h2>Prompts disponibles</h2>
          <p className="mb-lg">
            Selecciona cualquiera de los siguientes prompts para ver su contenido detallado. 
            Puedes copiar el texto completo del prompt para utilizarlo en tu asistente de IA preferido.
          </p>
          
          <div className="prompt-index-container">
            <ul>
              {promptsDisponibles.map((prompt) => (
                <li key={prompt.id}>
                  <Link href={`/views/${prompt.id}`}>
                    <div className="prompt-card-link">
                      <h3 className="text-lg mb-xs">{prompt.titulo}</h3>
                      <p className="text-sm text-medium">{prompt.descripcion}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-xl">
            <Link href="/" className="bg-primary text-light px-md py-sm rounded-md">
              Volver al inicio
            </Link>
          </div>
        </Seccion>
      </main>

      <Pie />
    </>
  );
}
