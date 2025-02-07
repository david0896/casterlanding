import React, { useEffect, useRef } from "react";

const Preguntas = ({
  pregunta,
  handleSeleccion,
  retrocederPregunta,
  avanzarPregunta,
  finalizarEncuesta,
  preguntaActual,
  esUltimaPregunta,
}) => {
  // Referencia para los inputs de tipo radio
  const radioRefs = useRef([]);

  // Limpiar los inputs de tipo radio al cambiar de pregunta
  useEffect(() => {
    if (radioRefs.current) {
      radioRefs.current.forEach((radio) => {
        if (radio) radio.checked = false;
      });
    }
  }, [pregunta]);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-white">{pregunta.texto}</h3>
      {pregunta.tipo === "textarea" ? (
        <textarea
          rows="4"
          className="w-full p-2 border rounded-lg"
          onChange={(e) => handleSeleccion(pregunta.id, e.target.value)}
        />
      ) : (
        <div className="space-y-2">
          {pregunta.opciones.map((opcion, index) => (
            <label key={index} className="block">
              {/* Input de tipo radio oculto */}
              <input
                type="radio"
                name={`pregunta-${pregunta.id}`}
                value={opcion}
                onChange={() => handleSeleccion(pregunta.id, opcion)}
                className="hidden" // Oculta el input nativo
                ref={(el) => (radioRefs.current[index] = el)} // Asignar referencia
              />
              {/* Botón personalizado */}
              <div
                className={`w-full p-3 text-left rounded-lg border transition-colors duration-200 cursor-pointer ${
                  radioRefs.current[index]?.checked
                    ? "bg-yellow-500 hover:bg-yellow-600 text-white border-yellow-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => radioRefs.current[index].click()} // Activa el radio button
              >
                {opcion}
              </div>
            </label>
          ))}
        </div>
      )}
      <div className="flex justify-between mt-6">
        {preguntaActual > 0 && (
          <button
            onClick={retrocederPregunta}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Atrás
          </button>
        )}
        <button
          onClick={esUltimaPregunta ? finalizarEncuesta : avanzarPregunta}
          className={`bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg ${
            !radioRefs.current.some((radio) => radio?.checked) &&
            pregunta.tipo !== "textarea"
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={
            !radioRefs.current.some((radio) => radio?.checked) &&
            pregunta.tipo !== "textarea"
          } // Deshabilitar si no hay selección
        >
          {esUltimaPregunta ? "Finalizar" : "Siguiente"}
        </button>
      </div>
    </div>
  );
};

export default Preguntas;