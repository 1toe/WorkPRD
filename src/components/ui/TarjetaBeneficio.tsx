interface TarjetaBeneficioProps {
  icono: string;
  titulo: string;
  beneficios: string[];
  gradientFrom?: string;
  gradientTo?: string;
}

const TarjetaBeneficio = ({
  icono,
  titulo,
  beneficios,
  gradientFrom = "from-primary",
  gradientTo = "to-secondary"
}: TarjetaBeneficioProps) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl p-1 bg-gradient-to-br from-transparent to-transparent group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500">        <div className="bg-light dark:bg-dark/80 backdrop-blur-lg rounded-xl p-4 sm:p-6 md:p-8 h-full transition-all duration-300 relative z-10 overflow-hidden group-hover:shadow-xl">
          {/* Círculo de fondo con gradiente - adaptado para móviles */}
          <div className={`absolute -top-8 -right-8 sm:-top-10 sm:-right-10 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300`}></div>
          
          {/* Icono con efecto de escala en hover - más pequeño en móviles */}
          <div className="flex justify-center items-center mb-4 sm:mb-6 w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-md text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
            <div className={`bg-clip-text text-transparent bg-gradient-to-br ${gradientFrom} ${gradientTo}`}>
              {icono}
            </div>
          </div>
          
          {/* Título con efecto de gradiente - más pequeño en móviles */}
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center relative">
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradientFrom} ${gradientTo} group-hover:bg-gradient-to-br transition-all duration-300`}>
              {titulo}
            </span>
          </h3>
          
          {/* Lista de beneficios con marcadores personalizados - espaciado adaptado */}
          <ul className="space-y-2 sm:space-y-3 pl-0">
            {beneficios.map((beneficio, index) => (
              <li key={index} className="flex items-start space-x-2 sm:space-x-3 text-dark dark:text-light/80">
                <span className={`shrink-0 mt-1 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white text-xs`}>
                  ✓
                </span>
                <span className="text-xs sm:text-sm transition-all duration-300 group-hover:text-dark dark:group-hover:text-light">
                  {beneficio}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Sombra inferior con gradiente */}
      <div className={`h-1.5 w-5/6 mx-auto rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-30 blur-sm mt-1 transform transition-all duration-300 group-hover:w-full group-hover:opacity-50`}></div>
    </div>
  );
};

export default TarjetaBeneficio;
