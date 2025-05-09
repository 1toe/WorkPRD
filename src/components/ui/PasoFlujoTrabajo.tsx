interface PasoFlujoTrabajoProps {
  numero: number;
  titulo: string;
  descripcion: string;
}

const PasoFlujoTrabajo = ({
  numero,
  titulo,
  descripcion
}: PasoFlujoTrabajoProps) => {
  return (
    <div className="workflow-step">
      <div className="step-number">{numero}</div>
      <div className="step-content">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default PasoFlujoTrabajo;
