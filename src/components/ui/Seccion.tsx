interface SeccionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  esImpar?: boolean;
}

const Seccion = ({ 
  id, 
  className = "", 
  children, 
  esImpar = false 
}: SeccionProps) => {
  return (
    <section 
      id={id} 
      className={`section ${esImpar ? "bg-alt" : "bg-light"} ${className}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Seccion;
