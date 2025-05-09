import Link from "next/link";

interface NavegacionProps {
  className?: string;
}

const Navegacion = ({ className = "" }: NavegacionProps) => {
  return (
    <nav className={`main-nav ${className}`}>
      <div className="container">
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/views/prompts-index">Índice de Prompts</Link>
          </li>
          <li>
            <Link href="#descripcion">Descripción</Link>
          </li>
          <li>
            <Link href="#proceso">Proceso</Link>
          </li>
          <li>
            <Link href="#ejemplo">Ejemplo de Resultado</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navegacion;
