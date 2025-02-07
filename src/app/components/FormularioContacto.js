import React, { useState } from "react";

const FormularioContacto = ({ respuestas }) => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    usuarioInstagram: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const datosCompletos = {
      ...formulario,
      respuestas: respuestas,
    };
    console.log("Datos enviados:", datosCompletos);
    alert("Gracias por completar la encuesta. Nos pondremos en contacto contigo.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold mb-4 text-white">Formulario de Contacto</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-white">Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formulario.nombre}
          onChange={handleChange}
          className="w-full p-2 border-[1px] border-solid border-gray-200 rounded-lg focus:border-gray-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-white">Usuario de instagram:</label>
        <input
          type="text"
          name="usuarioInstagram"
          value={formulario.usuarioInstagram}
          onChange={handleChange}
          className="w-full p-2 border-[1px] border-solid border-gray-200 rounded-lg focus:border-gray-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-white">Email:</label>
        <input
          type="email"
          name="email"
          value={formulario.email}
          onChange={handleChange}
          className="w-full p-2 border-[1px] border-solid border-gray-200 rounded-lg focus:border-gray-500"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-600 font-bold text-white px-4 py-2 rounded-lg w-full"
      >
        Enviar
      </button>
    </form>
  );
};

export default FormularioContacto;