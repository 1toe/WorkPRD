"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BotonTema from "@/components/ui/BotonTema";
import Hero from "@/components/ui/Hero";
import Seccion from "@/components/ui/Seccion";
import Pie from "@/components/ui/Pie";
import FondoAnimado from "@/components/ui/FondoAnimado";

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
      id: "int-prd",
      titulo: "Creación Interactiva de PRD",
      descripcion: "Crea un PRD a través de un proceso guiado de preguntas paso a paso"
    },
    {
      id: "verif",
      titulo: "Verificación Integral de PRD",
      descripcion: "Identifica brechas y mejora la calidad de tu PRD existente"
    },
    {
      id: "feat",
      titulo: "Extracción de Características de PRD",
      descripcion: "Extrae características estructuradas a partir de tu PRD"
    },
    {
      id: "rules",
      titulo: "PRD a Reglas",
      descripcion: "Genera reglas técnicas y directrices de desarrollo"
    },
    {
      id: "rfcs",
      titulo: "PRD a RFCs",
      descripcion: "Divide tu proyecto en RFCs implementables"
    },
    {
      id: "impl",
      titulo: "Plantilla de Implementación",
      descripcion: "Guía para implementar cada RFC de forma estructurada"
    },
    {
      id: "change",
      titulo: "Gestión de Cambios de PRD",
      descripcion: "Analiza y gestiona cambios en requisitos durante el desarrollo"
    }
  ];

  return (
    <>
      <FondoAnimado />
      <Hero titulo="Índice de Prompts" />
      
      <BotonTema />
      
      <nav className="main-nav">
        <div className="container">
          <ul className="nav-list">
            <li className="nav-item"><Link href="/" className="nav-link">Inicio</Link></li>
            <li className="nav-item"><Link href="#prompts" className="nav-link">Prompts Disponibles</Link></li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <Seccion id="prompts">
          <h2 className="section-title">Prompts disponibles</h2>
          <p className="section-description mb-lg">
            Selecciona cualquiera de los siguientes prompts para ver su contenido detallado. 
            Puedes copiar el texto completo del prompt para utilizarlo en tu asistente de IA preferido.
          </p>
          
          <div className="prompt-index-container">
            <ul className="prompt-list">
              {promptsDisponibles.map((prompt) => (
                <li key={prompt.id} className="prompt-item">
                  <Link href={`/p/${prompt.id}`} className="prompt-link">
                    <div className="prompt-card-link">
                      <h3 className="prompt-title text-lg mb-xs">{prompt.titulo}</h3>
                      <p className="prompt-description text-sm text-medium">{prompt.descripcion}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="action-container mt-xl">
            <Link href="/" className="btn-primary bg-primary text-light px-md py-sm rounded-md">
              Volver al inicio
            </Link>
          </div>
        </Seccion>
      </main>

      <Pie />
    </>
  );
}
