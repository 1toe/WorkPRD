interface HeroProps {
  titulo: string;
  subtitulo?: string;
  className?: string;
}

const Hero = ({ 
  titulo, 
  subtitulo, 
  className = "" 
}: HeroProps) => {
  return (    <header className={`relative overflow-hidden py-20 md:py-32 ${className}`}>
      {/* Formas decorativas responsivas */}
      <div className="absolute top-20 left-5 md:left-10 w-48 md:w-64 h-48 md:h-64 rounded-full bg-primary opacity-10 blur-3xl"></div>
      <div className="absolute top-40 right-0 md:right-10 w-64 md:w-96 h-64 md:h-96 rounded-full bg-secondary opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-1/4 md:left-1/3 w-56 md:w-80 h-56 md:h-80 rounded-full bg-accent opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {titulo}
          </h1>
          {subtitulo && (
            <h2 className="text-base sm:text-xl md:text-2xl max-w-3xl mb-6 md:mb-10 text-medium px-4">
              {subtitulo}
            </h2>
          )}
          
          {/* Pill-shaped decorative element - más pequeño en móviles */}
          <div className="mt-4 md:mt-6 inline-flex items-center justify-center px-4 md:px-6 py-1.5 md:py-2 border border-transparent text-sm md:text-base font-medium rounded-full shadow-sm text-light bg-gradient-to-r from-primary to-secondary transform transition-transform duration-300 hover:scale-105">
            Optimiza tu desarrollo
          </div>
        </div>
      </div>
      
      {/* Líneas de cuadrícula decorativas */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </header>
  );
};

export default Hero;
