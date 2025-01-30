"use client";

import React, { useEffect, useRef, useState } from 'react';
import { FaDumbbell, FaRunning, FaSwimmer, FaPray, FaHotjar, FaHeartbeat, FaChalkboardTeacher, FaMobileAlt, FaCalendarCheck } from 'react-icons/fa';
import Modal from './Modal';
import ModalEbook from './ModalEbook';

const PlansSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const plansectionRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEbook, setIsOpenEbook] = useState(false);
  const [planName, setPlanName] = useState("");
  const [text, setText] = useState("");
  const [ebookImage, setEbookImage] = useState("");
  const [planData, setPlanData] = useState("");
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const openModalEbook = () => setIsOpenEbook(true);
  const closeModalEbook = () => setIsOpenEbook(false);

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

  const dataPremium = [
    { value: 30, name: 'Workout', icon: <FaDumbbell />, calories: 190, minutes: 30 },
    { value: 50, name: 'Running', icon: <FaRunning />, calories: 170, minutes: 25 },
    { value: 10, name: 'Swimming', icon: <FaSwimmer />, calories: 90, minutes: 15},
    { value: 10, name: 'Yoga', icon: <FaPray />, calories: 90, minutes: 20 },
    { value: 100, name: 'Total', icon: <FaHotjar />, calories: 0, minutes: 0 },
  ];

  const ebookUno = `

> **Autora:** Florencia Caster  

> **Enfoque:** Recetas saludables para desayunos, meriendas, postres y snacks.  

> **Contenido**  

* [x] Muffins proteicos de zucchini  
* [x] Brownie de batata 
* [x] Muffin de avena y manzana
* [x] Panqueque proteico
* [x] Helado de proteína
* [x] Batido proteico de arándanos o frutillas 
* [x] Jugo detox
* [x] Dorinachos Caster 
>
> **Extras**  
📌 Consejos para disfrutar las recetas.  

> 📖 **Formato:** Ebook en PDF  


`;


const ebookDos = `
**Autora:** Florencia Caster  

> **Enfoque:** Recetas saludables y balanceadas para todas las comidas del día.  

> **Desayunos y meriendas** 
* [x] Yogur con cereal y fruta  
* [x] Postre proteico 

> **Almuerzos y cenas**
* [x] Ensalada de atún  
* [x] Omelette  

> **Snacks y batidos** 
* [x] Chocotorta  
* [x] Jugo detox

> **Formato:** Ebook en PDF  

> 📌 **Extras**
* [x] Links a recetas en Instagram  
* [x] Consejos y recomendaciones  

`;

  return (
    <div className='w-fill-available' id='servicePlan'>
      <div className="w-9/12 mx-auto mt-12" ref={plansectionRef}>
        {/* Título y subtítulo de introducción */}
        <div className={`price-hidden  text-center mb-12 ${isVisible ? 'price-fade-in' : ''}`}>
          <h2 className=" text-3xl lg:text-4xl font-bold text-yellow-400 font-[family-name:var(--font-Milker-Regular)] italic">Ebooks y plan de Entrenamiento Personal</h2>
          <p className="text-lg mt-4 text-black">
            Elige el ebook ideal más el plan para recibir entrenamiento personalizado con nuestra instructora experta
          </p>
        </div>

        {/* Tarjetas de planes */}
        <div className={` overflow-hidden lg:overflow-visible price-hidden hidden lg:flex justify-center items-center gap-8 ${isVisible ? 'price-slide-in' : ''}`}>
          {/* Plan Básico 
          <div className="price-card bg-black bg-opacity-60 rounded-lg shadow-lg p-6 text-white flex flex-col items-center transition transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-4">Plan Básico</h3>
            <p className="text-md mb-6 text-center text-gray-300">
              Ideal para quienes comienzan su viaje fitness con un plan estructurado de seguimiento básico.
            </p>
            {/* Lista de ítems del Plan Básico 
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
            <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition" onClick={() => {openModal(), setPlanName("Plan Básico"), setPlanData(dataBasico)}}>
              Comprar Plan Básico
            </button>
          </div>
          */}

          <div className="flex flex-col gap-6">
            {/* Ebook 1 */}
            <div className="price-cardEbook bg-black bg-opacity-60 rounded-lg shadow-lg p-6 text-white flex flex-col items-center transition transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4 lowercase"><span className="text-3xl capitalize">Ebook:</span> Cocina FAT y vive FIT</h3>
              <p className="">Recetario que reúne opciones saludables y deliciosas para desayunos, meriendas, postres y snacks</p>
              <span className="text-4xl font-bold text-yellow-400 mb-4 mt-2">$9,99</span>
              <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition" onClick={() => {openModalEbook(), setText(ebookUno), setEbookImage('https://i.postimg.cc/k4PnGJn5/ebook-vol-1.png')}}>
                Comprar Ebook
              </button>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            {/* Ebook 2 */}
            <div className="price-cardEbook bg-black bg-opacity-60 rounded-lg shadow-lg p-6 text-white flex flex-col items-center transition transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4 lowercase"><span className="text-3xl capitalize">Ebook:</span> Clásicos de la comida FIT</h3>
              <p className="mt-2">Recetario con opciones saludables y deliciosas para todas las comidas del día, sin renunciar al sabor ni a los antojos</p>
              <span className="text-4xl font-bold text-yellow-400 mb-4 mt-2">$9,99</span>
              <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition" onClick={() => {openModalEbook(), setText(ebookDos), setEbookImage('https://i.postimg.cc/FRbhJMRV/ebook-vol-2.png')}}>
                Comprar Ebook
              </button>
            </div>
          </div>

          {/* Plan Premium - más grande */}
          <div className="price-card bg-black bg-opacity-60 rounded-lg shadow-lg p-6 text-white flex flex-col items-center transition transform hover:scale-110 hover:shadow-2xl lg:scale-105 lg:hover:scale-110 lg:hover:shadow-2xl price-premium">
            <h3 className="text-4xl font-semibold text-yellow-400 mb-4">Acompañamiento exclusivo</h3>
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
            <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition" onClick={() => {openModal(), setPlanName("Plan personalizado")}}>
              Comprar Plan Premium
            </button>
          </div>
        </div>
      </div>

      {/* Carrusel en versión móvil */}
      <div className="lg:hidden overflow-x-auto snap-x snap-mandatory flex space-x-4 pb-8 px-8 lg:overflow-visible lg:flex-row lg:justify-center">
        {/* Plan Básico */}
        <div className="snap-center flex-shrink-0 min-w-[85%] max-w-[85%] lg:min-w-0 lg:max-w-none price-card bg-black bg-opacity-60 rounded-lg shadow-lg p-6 text-white flex flex-col justify-end">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4 lowercase"><span className="text-3xl capitalize">Ebook:</span> Cocina FAT y vive FIT</h3>
          <p className="mt-2 mb-8">Recetario que reúne opciones saludables y deliciosas para desayunos, meriendas, postres y snacks</p>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-yellow-400 mb-4">$9,99/mes</span>
            <button className=" bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition" onClick={() => {openModalEbook(), setText(ebookUno), setEbookImage('https://i.postimg.cc/k4PnGJn5/ebook-vol-1.png')}}>
              Comprar Ahora
            </button>
          </div>
        </div>

        {/* Plan Básico */}
        <div className="snap-center flex-shrink-0 min-w-[85%] max-w-[85%] lg:min-w-0 lg:max-w-none price-card bg-black bg-opacity-60 rounded-lg shadow-lg p-6 text-white flex flex-col justify-end">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4 lowercase"><span className="text-3xl capitalize">Ebook:</span> Clásicos de la comida FIT</h3>
          <p className="mt-2 mb-8">Recetario con opciones saludables y deliciosas para todas las comidas del día, sin renunciar al sabor ni a los antojos</p>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-yellow-400 mb-4">$9,99/mes</span>
            <button className=" bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition" onClick={() => {openModalEbook(), setText(ebookDos), setEbookImage('https://i.postimg.cc/FRbhJMRV/ebook-vol-2.png')}}>
              Comprar Ahora
            </button>
          </div>
        </div>

        {/* Plan Premium */}
        <div className="snap-center flex-shrink-0 min-w-[85%] max-w-[85%] lg:min-w-0 lg:max-w-none price-card bg-black bg-opacity-60 rounded-lg shadow-lg p-6 text-white flex flex-col items-center">
          <h3 className="text-4xl font-semibold text-yellow-400 mb-4">Plan Premium</h3>
          <p className="text-md mb-6 text-center text-gray-300">
            Para quienes buscan un entrenamiento intensivo con mayor frecuencia y monitoreo constante.
          </p>
          <ul className="mb-6 text-left text-gray-300">
            <li className="flex items-center mb-2">
              <FaChalkboardTeacher className="text-yellow-400 mr-2" /> 2 sesiones semanales presenciales o virtuales
            </li>
            <li className="flex items-center mb-2 ">
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
          <button className=" bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition" onClick={() => {openModal(), setPlanName("Plan Premium"), setPlanData(dataPremium)}}>
            Suscribirse a Plan
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} planName={planName} data={planData}/>
      <ModalEbook isOpen={isOpenEbook} onClose={closeModalEbook} text={text} ebookImage={ebookImage}/>

    </div>
  );
};

export default PlansSection;
