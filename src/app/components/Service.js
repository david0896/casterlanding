'use client';

import { FaDumbbell, FaRunning, FaHeartbeat, FaAppleAlt, FaSpa } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);
  const serviceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 } // Activar cuando el 70% del componente esté visible
    );
    
    const currentRef = serviceRef.current;  // Capturar el valor actual de serviceRef
  
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
    <section ref={serviceRef} className="bg-white w-9/12 mx-auto mt-12 mb-14">
      <div className="grid grid-cols-6 gap-6">
        {/* Columna Título y Subtítulo */}
        <div className={`col-span-6 md:col-span-2 text-center md:text-left ${isVisible ? 'service-animate-fadeIn' : 'service-hidden'}`} style={{ animationDelay: '0ms' }}>
            <h2 className="text-4xl italic font-bold text-gray-900 mb-4 font-[family-name:var(--font-Milker-Regular)]">Servicios</h2>
            <p className="text-lg text-gray-600 mb-8">
                Entrenamientos personalizados que transformarán tu cuerpo y mente. Vive una experiencia única con Caster Team.
            </p>
            <div className="flex justify-center md:justify-start">
                <img 
                src="https://i0.wp.com/lifegym.fit/wp-content/uploads/2023/04/about-3-16.png?w=629&ssl=1" 
                alt="Flor Caster" 
                className={`${isVisible ? 'service-animate-fadeIn' : 'service-hidden'}`} 
                style={{ animationDelay: '300ms' }}
                />
            </div>
            <div className="relative flex justify-center lg:justify-start mt-8 mb-5">
                <a href="#planes-de-pago" className="cta-button">
                Descubre nuestros planes
                </a>
                <div className="pulse-container">
                    <div className="hidden lg:flex  pulse pulse--1"></div>
                    <div className="hidden lg:flex pulse pulse--2"></div>
                    <div className="hidden lg:flex pulse pulse--3"></div>
                </div>
            </div>
        </div>

        {/* Cartas de Servicios */}
        <div className="col-span-6 md:col-span-4 grid grid-cols-6 gap-6">
          {/* Tarjeta 1 */}
          <div className={`col-span-6 md:col-span-4 card bg-black p-6 rounded-lg shadow-lg ${isVisible ? 'service-animate-fadeIn' : 'service-hidden'}`} style={{ animationDelay: '500ms' }}>
            <FaDumbbell className="text-4xl text-[#FFD700] mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Entrenamiento de Fuerza</h3>
            <p className="text-gray-200">Mejora tu fuerza muscular con planes de entrenamiento adaptados a tu nivel.</p>
          </div>

          {/* Tarjeta 2 */}
          <div className={`col-span-6 md:col-span-2 card bg-[#FFD700] p-6 rounded-lg shadow-lg ${isVisible ? 'service-animate-fadeIn' : 'service-hidden'}`} style={{ animationDelay: '700ms' }}>
            <FaRunning className="text-4xl text-white mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Cardio Intenso</h3>
            <p className="text-gray-800">Aumenta tu resistencia cardiovascular con rutinas de alta intensidad.</p>
          </div>

          {/* Tarjeta 3 */}
          <div className={`col-span-6 md:col-span-3 card bg-gray-50 p-6 rounded-lg shadow-lg ${isVisible ? 'service-animate-fadeIn' : 'service-hidden'}`} style={{ animationDelay: '900ms' }}>
            <FaHeartbeat className="text-4xl text-[#FFD700] mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Salud y Bienestar</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Control de peso</li>
              <li>Mejora tu bienestar mental</li>
              <li>Reducción del estrés</li>
            </ul>
          </div>

          {/* Tarjeta 4 */}
          <div className={`col-span-6 md:col-span-3 card bg-black p-6 rounded-lg shadow-lg ${isVisible ? 'service-animate-fadeIn' : 'service-hidden'}`} style={{ animationDelay: '1100ms' }}>
            <FaAppleAlt className="text-4xl text-[#FFD700] mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Nutrición Personalizada</h3>
            <p className="text-gray-200">Planes alimenticios adaptados a tus objetivos.</p>
          </div>

          {/* Tarjeta 5 */}
          <div className={`col-span-6 md:col-span-5 card bg-[#FFD700] p-6 rounded-lg shadow-lg ${isVisible ? 'service-animate-fadeIn' : 'service-hidden'}`} style={{ animationDelay: '1300ms' }}>
            <FaSpa className="text-4xl text-white mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Entrenamiento de Flexibilidad</h3>
            <p className="text-gray-800">Mejora tu flexibilidad con ejercicios adaptados que evitarán lesiones y aumentarán tu movilidad.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
