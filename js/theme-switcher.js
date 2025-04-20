/**
 * Controlador de cambio de tema (claro/oscuro)
 * 
 * Este script maneja la funcionalidad de cambio entre tema claro y oscuro,
 * guardando la preferencia del usuario en localStorage.
 */

// Función para establecer el tema
function setTheme(themeName) {
  // Guardar tema en localStorage
  localStorage.setItem('theme', themeName);
  
  // Aplicar tema al documento
  document.documentElement.setAttribute('data-theme', themeName);
}

// Función para alternar entre temas
function toggleTheme() {
  // Verificar tema actual
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Cambiar al tema opuesto
  if (currentTheme === 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

// Inicializar tema al cargar la página
(function() {
  // Verificar si hay un tema guardado en localStorage
  const savedTheme = localStorage.getItem('theme');
  
  // Aplicar tema guardado o tema predeterminado (claro)
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Verificar preferencia del sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  
  // Agregar evento de clic al botón de cambio de tema
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
})();
