// Actualizar el archivo index.html para incluir el nuevo CSS
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar highlight.js
  hljs.highlightAll();
  
  // Inicializar los toggles de los prompts
  initPromptToggles();
  
  // Inicializar el modal
  initModal();
});

// Función para inicializar los toggles de los prompts
function initPromptToggles() {
  const promptToggleButtons = document.querySelectorAll('.prompt-toggle');
  
  promptToggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const promptId = this.getAttribute('data-prompt-id');
      showPromptModal(promptId);
    });
  });
}

// Función para inicializar el modal
function initModal() {
  const modal = document.getElementById('prompt-modal');
  const closeButton = document.querySelector('.modal-close');
  const copyButton = document.getElementById('modal-copy');
  
  // Cerrar el modal al hacer clic en el botón de cierre
  closeButton.addEventListener('click', function() {
    closeModal();
  });
  
  // Cerrar el modal al hacer clic fuera del contenido
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
  
  // Cerrar el modal al presionar Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
  
  // Copiar el contenido del prompt al portapapeles
  copyButton.addEventListener('click', function() {
    const modalBody = document.getElementById('modal-body');
    const textToCopy = modalBody.textContent;
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        copyButton.textContent = '¡Copiado al portapapeles!';
        copyButton.classList.add('copied');
        
        setTimeout(() => {
          copyButton.textContent = 'Copiar al portapapeles';
          copyButton.classList.remove('copied');
        }, 2000);
      })
      .catch(err => {
        console.error('Error al copiar: ', err);
        copyButton.textContent = 'Error al copiar';
        
        setTimeout(() => {
          copyButton.textContent = 'Copiar al portapapeles';
        }, 2000);
      });
  });
}

// Función para mostrar el modal con el contenido del prompt
function showPromptModal(promptId) {
  const modal = document.getElementById('prompt-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  
  // Obtener el título del prompt
  let title = '';
  switch(promptId) {
    case 'interactive-prd-creation':
      title = 'Creación Interactiva de PRD';
      break;
    case 'verification':
      title = 'Verificación Integral de PRD';
      break;
    case 'features':
      title = 'Extracción de Características de PRD';
      break;
    case 'rules':
      title = 'PRD a Reglas';
      break;
    case 'rfcs':
      title = 'PRD a RFCs';
      break;
    case 'implementation':
      title = 'Plantilla de Implementación';
      break;
    case 'change-management':
      title = 'Gestión de Cambios de PRD';
      break;
    default:
      title = 'Prompt';
  }
  
  // Establecer el título del modal
  modalTitle.textContent = title;
  
  // Establecer el contenido del modal
  if (promptsContent[promptId]) {
    // Convertir el contenido de markdown a HTML
    modalBody.innerHTML = `<pre>${promptsContent[promptId]}</pre>`;
  } else {
    modalBody.innerHTML = '<p>Lo sentimos, no se pudo cargar el contenido del prompt.</p>';
  }
  
  // Mostrar el modal
  modal.classList.add('visible');
  
  // Deshabilitar el desplazamiento del cuerpo
  document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById('prompt-modal');
  
  // Ocultar el modal
  modal.classList.remove('visible');
  
  // Habilitar el desplazamiento del cuerpo
  document.body.style.overflow = '';
}
