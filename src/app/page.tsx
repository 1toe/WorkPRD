"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BotonTema from "@/components/ui/BotonTema";
import Hero from "@/components/ui/Hero";
import Seccion from "@/components/ui/Seccion";
import Pie from "@/components/ui/Pie";
import FondoAnimado from "@/components/ui/FondoAnimado";
import TarjetaPrompt from "@/components/ui/TarjetaPrompt";

export default function Home() {
  const [montado, setMontado] = useState(false);

  // Asegurarse de que el componente solo se renderiza en el cliente
  useEffect(() => {
    setMontado(true);
  }, []);

  if (!montado) {
    return null;
  }

  const beneficios = [
    {
      icono: "🤖",
      titulo: "Colaboración Mejorada con IA",
      descripcion: "Instrucciones claras y documentación estructurada para resultados precisos"
    },
    {
      icono: "⚙️",
      titulo: "Proceso de Desarrollo Mejorado",
      descripcion: "Alcance definido y verificación incremental para minimizar retrabajos"
    },
    {
      icono: "💼",
      titulo: "Beneficios de Negocio",
      descripcion: "Resultados predecibles y alineación entre equipos técnicos y de negocio"
    },
    {
      icono: "🧠",
      titulo: "Ventajas Específicas de IA",
      descripcion: "Optimización de contexto y refinamiento iterativo para implementaciones de alta calidad"
    }
  ];

  const flujoTrabajo = [
    {
      numero: 1,
      titulo: "Crear PRD",
      descripcion: "Desarrolla una idea vaga en un PRD completo"
    },
    {
      numero: 2,
      titulo: "Verificar PRD",
      descripcion: "Identifica brechas y mejora la calidad"
    },
    {
      numero: 3,
      titulo: "Extraer Características",
      descripcion: "Organiza características con prioridades"
    },
    {
      numero: 4,
      titulo: "Crear Reglas",
      descripcion: "Establece directrices técnicas"
    },
    {
      numero: 5,
      titulo: "Generar RFCs",
      descripcion: "Divide el proyecto en unidades manejables"
    },
    {
      numero: 6,
      titulo: "Implementar RFCs",
      descripcion: "Desarrolla cada unidad siguiendo la plantilla"
    }
  ];

  const promptsDestacados = [
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
      id: "rfcs",
      titulo: "PRD a RFCs",
      descripcion: "Divide tu proyecto en RFCs implementables"
    }
  ];

  return (
    <>
      <FondoAnimado />
      <Hero titulo="Desarrollo Guiado por PRD & RFC" />
      
      <BotonTema />
      
      <nav className="main-nav">
        <div className="container">
          <ul className="nav-list">
            <li className="nav-item"><Link href="#beneficios" className="nav-link">Beneficios</Link></li>
            <li className="nav-item"><Link href="#flujo-trabajo" className="nav-link">Flujo de Trabajo</Link></li>
            <li className="nav-item"><Link href="#prompts" className="nav-link">Prompts</Link></li>
            <li className="nav-item"><Link href="/views/prompts-index" className="nav-link">Índice Completo</Link></li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <Seccion id="beneficios">
          <h2 className="section-title">Beneficios del Desarrollo Guiado por PRD & RFC</h2>
          <p className="section-description">
            Seguir un enfoque estructurado de desarrollo guiado por PRD & RFC ofrece ventajas significativas, 
            especialmente al colaborar con herramientas de IA:
          </p>
          
          <div className="beneficios-grid">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="beneficio-card">
                <div className="beneficio-icono">{beneficio.icono}</div>
                <h3 className="beneficio-titulo">{beneficio.titulo}</h3>
                <p className="beneficio-descripcion">{beneficio.descripcion}</p>
              </div>
            ))}
          </div>
        </Seccion>
        
        <Seccion id="flujo-trabajo">
          <h2 className="section-title">Flujo de Trabajo Recomendado</h2>
          <p className="section-description">
            Sigue este proceso paso a paso para maximizar los beneficios del desarrollo guiado por PRD & RFC:
          </p>
          
          <div className="flujo-trabajo-container">
            {flujoTrabajo.map((paso) => (
              <div key={paso.numero} className="paso-flujo-trabajo">
                <div className="paso-numero">{paso.numero}</div>
                <div className="paso-contenido">
                  <h3 className="paso-titulo">{paso.titulo}</h3>
                  <p className="paso-descripcion">{paso.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </Seccion>
        
        <Seccion id="prompts">
          <h2 className="section-title">Prompts Destacados</h2>
          <p className="section-description">
            Estos prompts te ayudarán a implementar el flujo de trabajo de desarrollo guiado por PRD & RFC:
          </p>
          
          <div className="prompts-destacados-grid">
            {promptsDestacados.map((prompt) => (
              <TarjetaPrompt 
                key={prompt.id}
                id={prompt.id}
                titulo={prompt.titulo}
                descripcion={prompt.descripcion}
              />
            ))}
          </div>
          
          <div className="action-container mt-xl">
            <Link href="/views/prompts-index" className="btn-primary bg-primary text-light px-md py-sm rounded-md">
              Ver todos los prompts
            </Link>
          </div>
        </Seccion>
      </main>

      <Pie />
    </>
  );
}
