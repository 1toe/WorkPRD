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
import FondoAnimado from "@/components/ui/FondoAnimado";
import Boton from "@/components/ui/Boton";
import SeccionTarjetasFlotantes from "@/components/ui/SeccionTarjetasFlotantes";

export default function Home() {
  const [montado, setMontado] = useState(false);

  // Asegurarse de que el componente solo se renderiza en el cliente
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

  const tarjetasDestacadas = [
    {
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      ),
      titulo: "Documentación Estructurada",
      descripcion: "Genera PRDs completos y bien organizados que sirven como base sólida para todo el ciclo de desarrollo",
      color: "border-primary-500"
    },
    {
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      titulo: "Colaboración Mejorada",
      descripcion: "Facilita la colaboración efectiva entre los equipos humanos y los asistentes de IA para un desarrollo más eficiente",
      color: "border-secondary-500"
    },
    {
      icono: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      titulo: "Desarrollo Acelerado",
      descripcion: "Acelera el proceso de desarrollo con implementaciones más precisas y menos iteraciones correctivas",
      color: "border-accent-500"
    }
  ];

  return (
    <main className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light">
      {/* Fondo animado */}
      <FondoAnimado />
      
      {/* Navegación */}
      <Navegacion />
      
      {/* Hero */}
      <div className="pt-28">
        <Hero 
          titulo="WorkPRD" 
          subtitulo="Herramienta de flujo de trabajo para optimizar el desarrollo de productos con asistentes de IA"
        />
        
        <div className="container mx-auto px-6 flex justify-center mt-8">
          <Boton 
            href="/views/prompts-index"
            variante="primario"
            tamaño="grande"
            conIcono={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            }
            iconoPosicion="derecha"
          >
            Explorar Prompts
          </Boton>
        </div>
      </div>
      
      {/* Sección de Tarjetas Destacadas */}
      <SeccionTarjetasFlotantes 
        titulo="Optimiza tu desarrollo con IA"
        subtitulo="Conjunto de herramientas diseñadas para mejorar la colaboración entre desarrolladores humanos y asistentes de IA"
        tarjetas={tarjetasDestacadas}
        className="mt-20"
      />
      
      {/* Sección de Descripción */}
      <Seccion 
        id="descripcion" 
        titulo="¿Qué es WorkPRD?"
        subtitulo="Una herramienta para estructurar el desarrollo guiado por IA"
        esImpar={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <TarjetaBeneficio
            icono="👥"
            titulo="Mejor Colaboración"
            beneficios={beneficiosColaboracion}
            gradientFrom="from-blue-500"
            gradientTo="to-blue-600"
          />
          <TarjetaBeneficio
            icono="⚙️"
            titulo="Desarrollo Optimizado"
            beneficios={beneficiosDesarrollo}
            gradientFrom="from-secondary-500"
            gradientTo="to-secondary-600"
          />
          <TarjetaBeneficio
            icono="📊"
            titulo="Valor Empresarial"
            beneficios={beneficiosEmpresariales}
            gradientFrom="from-accent-500"
            gradientTo="to-accent-600"
          />
        </div>

        <div className="mt-10">
          <Consejo 
            texto="Los PRDs completos sirven como referencia continua durante todo el ciclo de desarrollo, asegurando que todas las partes interesadas tengan el mismo entendimiento de los objetivos del proyecto." 
            tipo="info"
          />
        </div>
      </Seccion>
      
      {/* Sección de Proceso */}
      <Seccion 
        id="proceso" 
        titulo="Flujo de Trabajo PRD"
        subtitulo="Estructuración de proyectos complejos en pasos manejables"
      >
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="workflow-diagram">
            {pasosFlujoTrabajo.map((paso, index) => (
              <PasoFlujoTrabajo
                key={index}
                numero={paso.numero}
                titulo={paso.titulo}
                descripcion={paso.descripcion}
                delay={index * 150}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Boton
            href="/views/prompts-index"
            variante="secundario"
            tamaño="grande"
            conIcono={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            }
          >
            Comenzar a Usar
          </Boton>
        </div>
      </Seccion>
      
      {/* Sección de Prompts */}
      <Seccion 
        id="prompts" 
        titulo="Prompts Disponibles"
        subtitulo="Herramientas para cada fase del desarrollo de productos"
        esImpar={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {promptsDisponibles.map((prompt) => (
            <TarjetaPrompt
              key={prompt.id}
              id={prompt.id}
              titulo={prompt.titulo}
              descripcion={prompt.descripcion}
              ruta={prompt.ruta}
              categoria="PRD"
            />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Boton
            href="/views/prompts-index"
            variante="terciario"
            tamaño="mediano"
            conIcono={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            }
          >
            Ver todos los prompts
          </Boton>
        </div>
        
        <div className="mt-10">
          <Consejo 
            texto="Usa el prompt de verificación completa periódicamente durante el desarrollo para asegurar que la implementación sigue alineada con los requisitos originales."
            tipo="advertencia"
            esDesechable={true}
          />
        </div>
      </Seccion>
      
      {/* Pie de página */}
      <Pie />
    </main>
  );
}
