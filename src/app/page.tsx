"use client";

import { useState, useEffect } from "react";
import BotonTema from "@/components/ui/BotonTema";
import Navegacion from "@/components/ui/Navegacion";
import Seccion from "@/components/ui/Seccion";
import Hero from "@/components/ui/Hero";
import Pie from "@/components/ui/Pie";
import TarjetaBeneficio from "@/components/ui/TarjetaBeneficio";
import PasoFlujoTrabajo from "@/components/ui/PasoFlujoTrabajo";
import TarjetaPrompt from "@/components/ui/TarjetaPrompt";
import Consejo from "@/components/ui/Consejo";

export default function Home() {
  const [montado, setMontado] = useState(false);

  // Asegurarse de que el componente solo se renderiza en el cliente
  // para evitar errores de hidratación con localStorage
  useEffect(() => {
    setMontado(true);
  }, []);

  if (!montado) {
    // Renderizado del lado del servidor o primera carga
    return null;
  }

  const beneficiosColaboracion = [
    "Instrucciones más claras: Los PRD y RFC bien definidos proporcionan a la IA un contexto y requisitos precisos, resultando en implementaciones más precisas",
    "Reducción de alucinaciones: La documentación estructurada minimiza la tendencia de la IA a 'rellenar los vacíos' con suposiciones incorrectas",
    "Modelo mental consistente: Tanto humanos como IA trabajan desde la misma comprensión documentada, reduciendo desalineaciones"
  ];

  const beneficiosDesarrollo = [
    "Establecimiento de límites: Un alcance claramente definido evita que la IA implemente características no deseadas o fuera de alcance",
    "Verificación incremental: Dividir el trabajo en RFC permite la validación en cada paso en lugar de solo al finalizar el proyecto",
    "Trazabilidad: Cada implementación puede rastrearse hasta requisitos específicos, facilitando la verificación de corrección",
    "Reducción de retrabajos: Especificaciones claras desde el inicio minimizan la necesidad de revisiones importantes más adelante"
  ];

  const beneficiosEmpresariales = [
    "Resultados predecibles: El enfoque estructurado conduce a cronogramas y resultados de desarrollo más predecibles",
    "Preservación del conocimiento: La documentación sirve como referencia persistente incluso cuando cambian los miembros del equipo o las herramientas de IA",
    "Alineación de stakeholders: Los PRD crean un entendimiento compartido entre equipos de negocio, técnicos y asistentes de IA",
    "Incorporación más rápida: Nuevos miembros del equipo o herramientas de IA pueden entender rápidamente los objetivos y restricciones del proyecto"
  ];

  const beneficiosIA = [
    "Optimización de ventana de contexto: Dividir proyectos grandes en RFC enfocados ayuda a la IA a trabajar dentro de las limitaciones de ventana de contexto",
    "Experiencia dirigida: Diferentes aspectos del proyecto pueden dirigirse a modelos o prompts de IA especializados",
    "Refinamiento iterativo: La IA puede sugerir mejoras a PRD y RFC antes de que comience la implementación",
    "Control de calidad: La documentación estructurada proporciona criterios claros para que la IA autoevalúe sus resultados"
  ];

  const pasosFlujoTrabajo = [
    {
      numero: 1,
      titulo: "Crear PRD",
      descripcion: "Comienza con una idea vaga y desarróllala en un PRD completo usando el prompt de Creación Interactiva"
    },
    {
      numero: 2,
      titulo: "Verificar PRD",
      descripcion: "Identifica brechas críticas y mejora la calidad usando el prompt de Verificación Integral"
    },
    {
      numero: 3,
      titulo: "Extraer Características",
      descripcion: "Transforma tu PRD verificado en características organizadas con prioridades y criterios de aceptación"
    },
    {
      numero: 4,
      titulo: "Crear Reglas",
      descripcion: "Establece directrices técnicas y estándares basados en tu PRD y características"
    },
    {
      numero: 5,
      titulo: "Generar RFCs",
      descripcion: "Divide el proyecto en unidades de implementación lógicas y manejables"
    },
    {
      numero: 6,
      titulo: "Implementar RFCs",
      descripcion: "Usa la plantilla de implementación para cada RFC para guiar el desarrollo"
    }
  ];

  const promptsDisponibles = [
    {
      id: "interactive-prd-creation",
      titulo: "Creación Interactiva de PRD",
      descripcion: "Crea un PRD a través de un proceso guiado de preguntas paso a paso",
      ruta: "/views/interactive-prd-creation-prompt"
    },
    {
      id: "verification",
      titulo: "Verificación Integral de PRD",
      descripcion: "Identifica brechas y mejora la calidad de tu PRD existente",
      ruta: "/views/prd-comprehensive-verification-prompt"
    },
    {
      id: "features",
      titulo: "PRD a Características",
      descripcion: "Extrae características estructuradas a partir de tu PRD",
      ruta: "/views/prd-to-features-prompt"
    },
    {
      id: "rules",
      titulo: "PRD a Reglas",
      descripcion: "Genera reglas técnicas y directrices de desarrollo",
      ruta: "/views/prd-to-rules-prompt"
    },
    {
      id: "rfcs",
      titulo: "PRD a RFCs",
      descripcion: "Divide tu proyecto en RFCs implementables",
      ruta: "/views/prd-to-rfcs-prompt"
    },
    {
      id: "implementation",
      titulo: "Plantilla de Implementación",
      descripcion: "Guía para implementar cada RFC de forma estructurada",
      ruta: "/views/implementation-prompt-template"
    },
    {
      id: "change-management",
      titulo: "Gestión de Cambios de PRD",
      descripcion: "Analiza y gestiona cambios en requisitos durante el desarrollo",
      ruta: "/views/prd-change-management-prompt"
    }
  ];

  const consejos = [
    "Responde cualquier pregunta aclaratoria que la IA haga",
    "Sé específico sobre prioridades y restricciones",
    "Revisa y personaliza los resultados de la IA antes de la implementación",
    "Usa los prompts en secuencia para mejores resultados",
    "Para proyectos complejos, itera a través de los prompts según sea necesario"
  ];

  return (
    <>
      <Hero 
        titulo="WorkPRD" 
        subtitulo="Herramientas de flujo de trabajo para desarrollo de productos con IA"
      />

      <BotonTema />
      
      <Navegacion />

      <main>
        <Seccion id="introduccion" esImpar={true}>
          <h2>¿Qué es PRD Workflow Tools?</h2>
          <p>
            PRD Workflow Tools es una colección de prompts (instrucciones) diseñados para asistentes de IA que
            automatizan tareas comunes en el proceso de desarrollo de productos. Estos prompts pueden copiarse y
            pegarse en cualquier asistente de IA (como Cursor, ChatGPT, Claude, etc.) para mejorar y agilizar tu
            flujo de trabajo de desarrollo.
          </p>
          <p>
            El enfoque se basa en la metodología de desarrollo impulsada por PRD (Product Requirements Document)
            y RFC (Request for Comments), que proporciona una estructura clara y eficiente para la colaboración
            entre humanos y asistentes de IA.
          </p>
        </Seccion>

        <Seccion id="beneficios">
          <h2>Beneficios del Desarrollo basado en PRD y RFC</h2>

          <div className="benefits-grid">
            <TarjetaBeneficio 
              icono="🤖" 
              titulo="Colaboración Mejorada con IA"
              beneficios={beneficiosColaboracion}
            />
            
            <TarjetaBeneficio 
              icono="⚙️" 
              titulo="Proceso de Desarrollo Mejorado"
              beneficios={beneficiosDesarrollo}
            />
            
            <TarjetaBeneficio 
              icono="💼" 
              titulo="Beneficios Empresariales"
              beneficios={beneficiosEmpresariales}
            />
            
            <TarjetaBeneficio 
              icono="🧠" 
              titulo="Ventajas Específicas para IA"
              beneficios={beneficiosIA}
            />
          </div>
        </Seccion>

        <Seccion id="flujo-trabajo" esImpar={true}>
          <h2>Flujo de Trabajo Recomendado</h2>

          <div className="workflow-diagram">
            {pasosFlujoTrabajo.map((paso) => (
              <PasoFlujoTrabajo 
                key={paso.numero}
                numero={paso.numero}
                titulo={paso.titulo}
                descripcion={paso.descripcion}
              />
            ))}
          </div>

          <div className="workflow-change-management">
            <h3>Gestión de Cambios</h3>
            <p>Cuando surgen nuevos requisitos o cambios durante el desarrollo:</p>
            <ol>
              <li>
                <strong>Analizar Cambios</strong> - Usa el prompt de Gestión de Cambios para evaluar el
                impacto y la estrategia de integración
              </li>
              <li>
                <strong>Actualizar Documentos</strong> - Revisa el PRD, características, reglas y RFCs
                afectados según el análisis
              </li>
              <li>
                <strong>Continuar Implementación</strong> - Reanuda el desarrollo con la documentación
                actualizada
              </li>
            </ol>
          </div>
        </Seccion>

        <Seccion id="prompts">
          <h2>Prompts Disponibles</h2>

          <div className="prompts-grid">
            {promptsDisponibles.map((prompt) => (
              <TarjetaPrompt
                key={prompt.id}
                id={prompt.id}
                titulo={prompt.titulo}
                descripcion={prompt.descripcion}
                ruta={prompt.ruta}
              />
            ))}
          </div>
        </Seccion>

        <Seccion id="consejos" esImpar={true}>
          <h2>Consejos Rápidos</h2>

          <div className="tips-container">
            {consejos.map((consejo, index) => (
              <Consejo key={index} texto={consejo} />
            ))}
          </div>
        </Seccion>
      </main>

      <Pie />
    </>
  );
}
