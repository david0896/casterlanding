"use client";

import React, { useState, useEffect } from "react";
const avatar = "https://i.postimg.cc/5tLCmrVL/usuario.png"

const testimonies = [
  {
    name: "Macca Figueroa",
    text: "Decidí ir por el cambio, este cambio de volver a sentirme bien, no hubiera podido sin la ayuda de vos Flor Caster.",
    image: avatar,
  },
  {
    name: "Gym-goer",
    text: "Me motivo a seguir y a no abandonar en ningun momento, ademas me hizo creer en los cambios grosos y a tener buenos habitos.",
    image: avatar,
  },
  {
    name: "Gym-goer",
    text: "Los resultados se ven aunque en mi cuesta un poco, el bajar practicamente 10kg es más que una motivación para mi.",
    image: avatar,
  },
];

const TestimonyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Estado para rastrear si es mobile

  useEffect(() => {
    // Función para verificar si es mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Ejecutar la verificación inicial y agregar listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpieza del listener al desmontar
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = isMobile ? 1 : 5;
  const cardWidthPercentage = 100 / visibleCards;

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  };


  return (
    <section className="testimony-carousel-container">
      <h2 className="text-3xl lg:text-4xl italic font-bold text-yellow-400 mt-8 lg:mt-12 mb-4 font-[family-name:var(--font-Milker-Regular)]">Lo que dicen mis clientes</h2>
        <p className="text-lg text-gray-600 mb-10">
            Clientes satisfechos que han visto resultados con los entrenamientos online.
        </p>
      <div className="testimony-carousel-wrapper">
        <div
          className="testimony-carousel-inner"
          style={{
            transform: `translateX(-${currentIndex * cardWidthPercentage}%)`,
          }}
        >
          {[...testimonies, ...testimonies].map((item, index) => (
            <div
              key={index}
              className="testimony-carousel-item"
              style={{ width: `${cardWidthPercentage}%` }}
            >
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonyCarousel;
