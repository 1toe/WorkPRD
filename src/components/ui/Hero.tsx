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
  return (
    <header className={`hero ${className}`}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="text-center">{titulo}</h1>
            {subtitulo && <h2 className="text-center">{subtitulo}</h2>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
