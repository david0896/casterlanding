"use client";

import { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// Frases motivacionales relacionadas con el gimnasio
const frasesGym = [
  "¡No pares cuando estés cansado, para cuando hayas terminado!",
  "El dolor que sientes hoy es la fuerza que sentirás mañana",
  "El éxito no se mide por lo que logras, sino por los obstáculos que superas",
  "Los campeones siguen jugando hasta que lo hacen bien",
  "Cada entrenamiento es un paso más cerca de tus metas",
  "Esfuerzo es el primer paso hacia el progreso",
  "La única manera de lograrlo es intentarlo"
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentFrase, setCurrentFrase] = useState(0);
  const [isFading, setIsFading] = useState(false); // Controla el desvanecimiento

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fraseInterval = setInterval(() => {
      setIsFading(true); // Inicia el desvanecimiento

      // Cambia la frase después de 1 segundo (tiempo para desvanecer)
      setTimeout(() => {
        setCurrentFrase((prevFrase) => (prevFrase + 1) % frasesGym.length);
        setIsFading(false); // Reaparece la frase
      }, 1000); // 1 segundo de desvanecimiento
    }, 7000); // Cambia de frase cada 20 segundos
    return () => clearInterval(fraseInterval);
  }, []);

  return (
    <nav className="bg-black text-white py-4 px-6 fixed w-full z-50 Oswald">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold font-[family-name:var(--font-Milker-Regular)]">Caster Team</a>

        {/* Menu Toggle (Visible en todas las resoluciones) */}
        <button
          className="text-3xl hover:text-[#ffe65b] transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

     {/* Fullscreen Menu (Visible en todas las resoluciones) */}
     <div
        className={`fixed inset-0 bg-yellow-400 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Imagen de Fondo Translucida Superpuesta */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        ></div>

        {/* Icono de Cerrar en Fullscreen */}
        <button
          className="absolute top-5 right-5 text-3xl text-black hover:text-[#ffe65b] transition-colors duration-300 z-10"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <AiOutlineClose />
        </button>

        {/* Redes Sociales en Fullscreen */}
        <div className="absolute top-5 left-5 flex flex-row items-center space-x-6 z-10">
          {/* Facebook */}
          <div className="relative group">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-black hover:text-[#ffe65b] transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
          </div>

          {/* Instagram */}
          <div className="relative group">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-black hover:text-[#ffe65b] transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>

          {/* TikTok */}
          <div className="relative group">
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-black hover:text-[#ffe65b] transition-colors duration-300"
            >
              <FaTiktok />
            </a>
          </div>

          {/* WhatsApp */}
          <div className="relative group">
            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-black hover:text-[#ffe65b] transition-colors duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Menú con Animación (superpuesto sobre la imagen) */}
        <a
          href="#services"
          className={`text-3xl text-black font-semibold mb-6 z-10 opacity-0 transition-opacity duration-500 delay-[200ms] font-[family-name:var(--font-Montserrat-Wght)] ${
            isOpen ? "opacity-100" : ""
          } relative group`}
          onClick={toggleMenu}
        >
          Servicios
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#about"
          className={`text-3xl text-black font-semibold mb-6 z-10 opacity-0 transition-opacity duration-500 delay-[300ms] font-[family-name:var(--font-Montserrat-Wght)] ${
            isOpen ? "opacity-100" : ""
          } relative group`}
          onClick={toggleMenu}
        >
          Instructora
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#pricing"
          className={`text-3xl text-black font-semibold mb-6 z-10 opacity-0 transition-opacity duration-500 delay-[400ms] font-[family-name:var(--font-Montserrat-Wght)] ${
            isOpen ? "opacity-100" : ""
          } relative group`}
          onClick={toggleMenu}
        >
          Precios
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#testimonials"
          className={`text-3xl text-black font-semibold mb-6 z-10 opacity-0 transition-opacity duration-500 delay-[500ms] font-[family-name:var(--font-Montserrat-Wght)] ${
            isOpen ? "opacity-100" : ""
          } relative group`}
          onClick={toggleMenu}
        >
          Testimonios
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#contact"
          className={`text-3xl text-black font-semibold mb-6 z-10 opacity-0 transition-opacity duration-500 delay-[600ms] font-[family-name:var(--font-Montserrat-Wght)] ${
            isOpen ? "opacity-100" : ""
          } relative group`}
          onClick={toggleMenu}
        >
          Contacto
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* FRASES MOTIVACIONALES */}
        {/* Sección para las frases motivacionales relacionadas con el gimnasio */}
        <div className={`absolute bottom-10 w-full p-5 lg:p-0 flex justify-center items-center opacity-0 transition-opacity duration-500 delay-[800ms] ${
            isOpen ? "opacity-100" : ""
          }`}>
          <p
            className={`text-lg italic font-semibold text-black text-center transition-opacity duration-1000 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            &quot;{frasesGym[currentFrase]}&quot;
          </p>
        </div>
      </div>
    </nav>
  );
}
