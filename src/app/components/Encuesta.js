import React, { useState, useEffect } from "react";
import Preguntas from "./Preguntas";
import FormularioContacto from "./FormularioContacto";

const Encuesta = () => {
  const [respuestas, setRespuestas] = useState({});
  const [preguntaActual, setPreguntaActual] = useState(0);

  const preguntas = [
    {
      id: 1,
      texto: "¿Qué buscar conseguir con este programa?",
      opciones: [
        "Mejorar mi salud",
        "Perder peso",
        "Ganar masa muscular",
        "Mejorar mi rendimiento deportivo",
      ],
    },
    {
      id: 2,
      texto: "¿Cuántas veces a la semana puedes entrenar?",
      opciones: ["1-2 veces", "3-4 veces", "5-6 veces", "Todos los días"],
    },
    {
      id: 3,
      texto: "¿Prefieres entrenar en casa o en el gimnasio?",
      opciones: ["En casa", "En el gimnasio", "Ambos", "No tengo preferencia"],
    },
    {
      id: 4,
      texto: "¿Qué te motiva a comenzar ahora?",
      tipo: "textarea",
    },
  ];

  const handleSeleccion = (preguntaId, respuesta) => {
    setRespuestas((prev) => ({ ...prev, [preguntaId]: respuesta }));
  };

  const avanzarPregunta = () => {
    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual((prev) => prev + 1);
    }
  };

  const retrocederPregunta = () => {
    if (preguntaActual > 0) {
      setPreguntaActual((prev) => prev - 1);
    }
  };

  const finalizarEncuesta = () => {
    setPreguntaActual(preguntas.length); // Avanza al formulario de contacto
  };

  useEffect(() => {
    localStorage.setItem("respuestasEncuesta", JSON.stringify(respuestas));
  }, [respuestas]);

  return (
    <div className="bg-tranparent flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">Encuesta</h1>
        <p className={`${preguntaActual > 3 ? 'hidden' : 'block'} text-sm text-white mb-4 text-center`}>
          Progreso: {preguntaActual + 1} de {preguntas.length}
        </p>
        {preguntaActual < preguntas.length ? (
          <Preguntas
            pregunta={preguntas[preguntaActual]}
            handleSeleccion={handleSeleccion}
            retrocederPregunta={retrocederPregunta}
            avanzarPregunta={avanzarPregunta}
            finalizarEncuesta={finalizarEncuesta}
            preguntaActual={preguntaActual}
            esUltimaPregunta={preguntaActual === preguntas.length - 1}
          />
        ) : (
          <FormularioContacto respuestas={respuestas} />
        )}
      </div>
    </div>
  );
};

export default Encuesta;