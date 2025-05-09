interface PieProps {
  className?: string;
}

const Pie = ({ className = "" }: PieProps) => {
  const anioActual = new Date().getFullYear();
  
  return (
    <footer className={`relative bg-alt dark:bg-dark pt-16 pb-10 overflow-hidden ${className}`}>
      {/* Formas decorativas */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo y eslogan */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                WorkPRD
              </h2>
            </div>
            <p className="text-medium text-sm max-w-md">
              Herramienta de flujo de trabajo para optimizar el desarrollo de productos con asistentes de IA
            </p>
          </div>
          
          {/* Enlaces útiles */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-dark dark:text-light font-semibold mb-3 text-sm">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-medium hover:text-primary text-sm transition-colors">Inicio</a></li>
                <li><a href="/views/prompts-index" className="text-medium hover:text-primary text-sm transition-colors">Índice de Prompts</a></li>
                <li><a href="#descripcion" className="text-medium hover:text-primary text-sm transition-colors">Descripción</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-dark dark:text-light font-semibold mb-3 text-sm">Recursos</h3>
              <ul className="space-y-2">
                <li><a href="#proceso" className="text-medium hover:text-primary text-sm transition-colors">Proceso PRD</a></li>
                <li><a href="#ejemplo" className="text-medium hover:text-primary text-sm transition-colors">Ejemplos</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-medium text-sm mb-4 md:mb-0">
            © {anioActual} WorkPRD. Todos los derechos reservados.
          </p>
          
          <p className="text-medium text-sm">
            Basado e inspirado en <a
              href="https://github.com/nurettincoban/cursor-ai-prd-workflow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              PRD Workflow Tools
            </a> de <a
              href="https://github.com/nurettincoban"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              nurettincoban
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Pie;
