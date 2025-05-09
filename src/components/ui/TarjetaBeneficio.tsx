interface TarjetaBeneficioProps {
  icono: string;
  titulo: string;
  beneficios: string[];
}

const TarjetaBeneficio = ({
  icono,
  titulo,
  beneficios
}: TarjetaBeneficioProps) => {
  return (
    <div className="benefit-card">
      <div className="benefit-icon">{icono}</div>
      <h3 className="text-center">{titulo}</h3>
      <ul>
        {beneficios.map((beneficio, index) => (
          <li key={index}>{beneficio}</li>
        ))}
      </ul>
    </div>
  );
};

export default TarjetaBeneficio;
