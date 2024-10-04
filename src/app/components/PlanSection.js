"use client";

import React, { useEffect, useRef, useState } from 'react';
import { FaDumbbell, FaRunning, FaHeartbeat, FaChalkboardTeacher, FaMobileAlt, FaCalendarCheck } from 'react-icons/fa';

const PlansSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const plansectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.7 }
    );

    const currentRef = plansectionRef.current;  // Capturar el valor actual de serviceRef
  
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);  // Usar la variable capturada para el cleanup
      }
    };
  }, []);

  return (
    <section className="w-auto lg:w-9/12 mx-auto mt-12" ref={plansectionRef}>
      {/* Título y subtítulo de introducción */}
      <div className={`price-hidden  text-center mb-12 ${isVisible ? 'price-fade-in' : ''}`}>
        <h2 className="text-4xl font-bold text-yellow-400 font-[family-name:var(--font-Milker-Regular)] italic">Planes de Entrenamiento Personal</h2>
        <p className="text-lg mt-4 text-black">
          Elige el plan ideal para recibir entrenamiento personalizado con nuestra instructora experta.
        </p>
      </div>

      {/* Tarjetas de planes */}
      <div className={`price-hidden flex justify-center gap-8 ${isVisible ? 'price-slide-in' : ''}`}>
        {/* Plan Básico */}
        <div className="price-card bg-black bg-opacity-60 rounded-lg shadow-lg p-6 text-white flex flex-col items-center transition transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Plan Básico</h3>
          <p className="text-md mb-6 text-center text-gray-300">
            Ideal para quienes comienzan su viaje fitness con un plan estructurado de seguimiento básico.
          </p>
          {/* Lista de ítems del Plan Básico */}
          <ul className="mb-6 text-left text-gray-300">
            <li className="flex items-center mb-2">
              <FaChalkboardTeacher className="text-yellow-400 mr-2" /> 1 sesión semanal presencial o virtual
            </li>
            <li className="flex items-center mb-2">
              <FaMobileAlt className="text-yellow-400 mr-2" /> Soporte por chat para dudas rápidas
            </li>
            <li className="flex items-center mb-2">
              <FaCalendarCheck className="text-yellow-400 mr-2" /> Rutina básica semanal
            </li>
          </ul>
          <span className="text-4xl font-bold text-yellow-400 mb-4">$49,9/mes</span>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition">
            Comprar Plan Básico
          </button>
        </div>

        {/* Plan Premium - más grande */}
        <div className="price-card bg-black bg-opacity-60 rounded-lg shadow-lg p-6 text-white flex flex-col items-center transition transform hover:scale-110 hover:shadow-2xl lg:scale-105 lg:hover:scale-110 lg:hover:shadow-2xl price-premium">
          <h3 className="text-4xl font-semibold text-yellow-400 mb-4">Plan Premium</h3>
          <p className="text-md mb-6 text-center text-gray-300">
            Para quienes buscan un entrenamiento intensivo con mayor frecuencia y monitoreo constante.
          </p>
          {/* Lista de ítems del Plan Premium */}
          <ul className="mb-6 text-left text-gray-300">
            <li className="flex items-center mb-2">
              <FaChalkboardTeacher className="text-yellow-400 mr-2" /> 2 sesiones semanales presenciales o virtuales
            </li>
            <li className="flex items-center mb-2">
              <FaMobileAlt className="text-yellow-400 mr-2" /> Soporte continuo por chat y llamadas
            </li>
            <li className="flex items-center mb-2">
              <FaCalendarCheck className="text-yellow-400 mr-2" /> Rutina personalizada semanal
            </li>
            <li className="flex items-center mb-2">
              <FaHeartbeat className="text-yellow-400 mr-2" /> Plan de nutrición personalizado
            </li>
          </ul>
          <span className="text-5xl font-bold text-yellow-400 mb-4">$99,9/mes</span>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition">
            Comprar Plan Premium
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
