interface PieProps {
  className?: string;
}

const Pie = ({ className = "" }: PieProps) => {
  return (
    <footer className={className}>
      <div className="container">
        <p className="footer-tagline">Hecho con ❤️ para un mejor desarrollo de productos con IA</p>
        <p className="attribution">
          Basado e inspirado en <a
            href="https://github.com/nurettincoban/cursor-ai-prd-workflow"
            target="_blank"
            rel="noopener noreferrer"
          >
            PRD Workflow Tools
          </a> de <a
            href="https://github.com/nurettincoban"
            target="_blank"
            rel="noopener noreferrer"
          >
            nurettincoban
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Pie;
