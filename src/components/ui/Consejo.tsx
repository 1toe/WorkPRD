interface ConsejoProps {
  texto: string;
}

const Consejo = ({
  texto
}: ConsejoProps) => {
  return (
    <div className="tip">
      <div className="tip-icon">💡</div>
      <p>{texto}</p>
    </div>
  );
};

export default Consejo;
