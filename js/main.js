/**
 * Funcionalidad principal del sitio web PRD Workflow Tools
 * 
 * Este script maneja la interactividad general del sitio web,
 * incluyendo la expansión de tarjetas de prompts y el resaltado de sintaxis.
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar resaltado de sintaxis
  initializeCodeHighlighting();
  
  // Configurar interactividad de tarjetas de prompts
  setupPromptCards();
  
  // Configurar navegación suave
  setupSmoothScrolling();
});

/**
 * Inicializa el resaltado de sintaxis para bloques de código
 */
function initializeCodeHighlighting() {
  // Aplicar resaltado a todos los bloques de código
  document.querySelectorAll('pre code').forEach(function(block) {
    hljs.highlightBlock(block);
  });
}

/**
 * Configura la interactividad de las tarjetas de prompts
 */
function setupPromptCards() {
  // Obtener todos los botones de alternancia de prompts
  const toggleButtons = document.querySelectorAll('.prompt-toggle');
  
  // Agregar evento de clic a cada botón
  toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Obtener el contenedor de detalles del prompt
      const details = this.previousElementSibling;
      
      // Alternar clase activa
      details.classList.toggle('active');
      
      // Cambiar texto del botón
      if (details.classList.contains('active')) {
        this.textContent = 'Ocultar detalles';
      } else {
        this.textContent = 'Ver detalles';
      }
    });
  });
}

/**
 * Configura la navegación suave al hacer clic en enlaces internos
 */
function setupSmoothScrolling() {
  // Obtener todos los enlaces internos
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  
  // Agregar evento de clic a cada enlace
  internalLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      // Prevenir comportamiento predeterminado
      e.preventDefault();
      
      // Obtener el destino del enlace
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      // Desplazarse suavemente al destino
      if (targetElement) {
        // Calcular posición de desplazamiento (considerando la barra de navegación fija)
        const navHeight = document.querySelector('.main-nav').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        // Realizar desplazamiento suave
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Detecta cuando los elementos entran en el viewport para animaciones
 */
function setupScrollAnimations() {
  // Verificar soporte para Intersection Observer
  if ('IntersectionObserver' in window) {
    // Crear un nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Agregar clase cuando el elemento es visible
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Dejar de observar después de la animación
          observer.unobserve(entry.target);
        }
      });
    }, {
      // Opciones del observador
      threshold: 0.1, // Activar cuando al menos 10% del elemento es visible
      rootMargin: '0px 0px -50px 0px' // Margen negativo para activar un poco antes
    });
    
    // Observar todos los elementos animables
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
  } else {
    // Fallback para navegadores que no soportan Intersection Observer
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      element.classList.add('visible');
    });
  }
}
