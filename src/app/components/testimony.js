"use client";

import React, { useState, useEffect } from "react";

const testimonies = [
  {
    name: "John Doe",
    text: "This gym changed my life! The trainers are amazing, and the environment is so motivating.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    text: "Great experience! The workouts are tough, but I love every minute of it. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Paul Johnson",
    text: "Excellent trainers and a motivating environment. I'm in the best shape of my life!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emily Brown",
    text: "Friendly staff and the best workout routines. Highly recommend for anyone looking to get fit.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Mike Wilson",
    text: "I love the flexible schedules and the personal attention I get from the instructors.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Sophie Taylor",
    text: "The perfect place to stay fit and healthy. Great instructors and workout plans.",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    name: "Chris Green",
    text: "The support and guidance I've received here is exceptional. It has truly been life-changing!",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
];

const TestimonyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Estado para pausar la animación

  const cardWidthPercentage = 20; // 5 tarjetas visibles, 20% cada una

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        goToNext();
      }, 3000); // Cambia de tarjeta cada 3 segundos
    }
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonies.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="carousel-container">
        <h2 className="text-4xl italic font-bold text-yellow-400 mt-12 mb-4 font-[family-name:var(--font-Milker-Regular)]">Lo que dicen mis clientes</h2>
        <p className="text-lg text-gray-600">
            Clientes satisfechos que han visto resultados con los entrenamientos online.
        </p>
        <div
            className="carousel-wrapper"
            onMouseEnter={() => setIsPaused(true)} // Pausar al poner el cursor
            onMouseLeave={() => setIsPaused(false)} // Reanudar al sacar el cursor
        >
            <div className="carousel">
            <div
                className="carousel-inner"
                style={{ transform: `translateX(-${currentIndex * cardWidthPercentage}%)` }}
            >
                {[...testimonies, ...testimonies].map((item, index) => (
                <div key={index} className="carousel-item">
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.text}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
    </section>
  );
};

export default TestimonyCarousel;
