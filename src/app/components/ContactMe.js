"use client";
import React, { useState, useEffect, useRef } from 'react';
//import nodemailer from 'nodemailer'; // Importación de nodemailer para enviar emails

const ContactMe = () => { 
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [formStatus, setFormStatus] = useState({ message: '', error: false });

  // Animación para mostrar el formulario al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 } // Se activa cuando el 40% del componente es visible
    );

    const currentRef = contactRef.current;  // Capturar el valor actual de serviceRef
  
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);  // Usar la variable capturada para el cleanup
      }
    };
  }, []);

  // Función para manejar el cambio en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para enviar el formulario por correo
 /*  const handleSubmit = async (e) => {
    e.preventDefault();

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Puedes cambiar el servicio según lo que uses
      auth: {
        user: 'tu-email@gmail.com', // Cambia con tu email
        pass: 'tu-password', // Cambia con tu contraseña
      },
    });

    const mailOptions = {
      from: formData.email,
      to: 'instructora@example.com', // Cambia con el email de la instructora
      subject: `Mensaje de ${formData.name}`,
      text: `Teléfono: ${formData.phone}\n\nMensaje: ${formData.email}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      setFormStatus({ message: 'Mensaje enviado correctamente.', error: false });
      setFormData({ name: '', email: '', phone: '' }); // Limpiar el formulario
    } catch (error) {
      setFormStatus({ message: 'Error al enviar el mensaje.', error: true });
    }
  }; */

  return (
    <section ref={contactRef} className="bg-white w-9/12 mx-auto -mt-10 mb-14">
      <div className="text-center mb-8">
        <h2 className={`text-4xl italic font-bold ${isVisible ? 'contact-animate-fadeIn' : 'contact-hidden'} text-yellow-400 mt-12 mb-4 font-[family-name:var(--font-Milker-Regular)]`}>
          Contáctame
        </h2>
        <p className={`text-lg text-gray-600 ${isVisible ? 'contact-animate-fadeIn' : 'contact-hidden'}`}>
          ¡Estoy aquí para ayudarte! Déjame un mensaje.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Información de contacto */}
        <div className={`${isVisible ? 'contact-animate-fadeIn' : 'contact-hidden'}`}>
          <div className="flex items-center mb-4">
            <i className="fas fa-phone-alt mr-3 text-gray-600"></i>
            <span className="text-lg">+123 456 7890</span>
          </div>
          <div className="flex items-center mb-4">
            <i className="fas fa-envelope mr-3 text-gray-600"></i>
            <span className="text-lg">instructora@example.com</span>
          </div>
          <div className="flex items-center mb-4">
            <i className="fas fa-map-marker-alt mr-3 text-gray-600"></i>
            <span className="text-lg">Ubicación: Calle 123, Ciudad</span>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className={`${isVisible ? 'contact-animate-fadeIn' : 'contact-hidden'}`}>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                className="border-b-2 border-gray-300 focus:border-gray-600 focus:outline-none py-2"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                className="border-b-2 border-gray-300 focus:border-gray-600 focus:outline-none py-2"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                className="border-b-2 border-gray-300 focus:border-gray-600 focus:outline-none py-2"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white contact-button py-2 px-4 rounded transition duration-300"
              >
                Enviar
              </button>
            </div>
          </form>
          {formStatus.message && (
            <div
              className={`mt-4 text-center ${formStatus.error ? 'text-red-500' : 'text-green-500'}`}
            >
              {formStatus.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
