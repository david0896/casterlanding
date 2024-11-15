"use client";

// app/components/Hero.js
import Image from 'next/image';
import SvgComponent from './SvgComponent';

export default function Hero() {
  const handleScroll = (e) => {
    e.preventDefault();
    const destination = document.getElementById("servicePlan");
    const offset = 50; // Ajuste para el navbar
    const topPosition = destination.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  };

    return (
        <section className="relative w-full min-h-screen bg-cover bg-center bg-gray-900">
            <video
                id='herovideo'
                autoPlay
                playsInline
                muted
                loop
                poster="https://static.vecteezy.com/system/resources/thumbnails/010/172/831/original/young-fit-woman-exercising-with-dumbbels-in-the-gym-free-video.jpg"
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source
                src="https://static.vecteezy.com/system/resources/previews/010/172/831/mp4/young-fit-woman-exercising-with-dumbbels-in-the-gym-free-video.mp4"
                type="video/mp4"
                />
                <source
                src="https://static.vecteezy.com/system/resources/previews/010/172/831/young-fit-woman-exercising-with-dumbbels-in-the-gym-free-video.webm"
                type="video/webm"
                />
                Your browser does not support the video tag.
            </video>

            <div className="relative flex items-center justify-center w-full min-h-screen bg-black bg-opacity-90">
                <div className='w-auto lg:w-9/12 mx-auto'>
                    <div className="container mx-auto px-6 lg:px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-white flex flex-col justify-center lg:items-center md:items-start text-left">
                            <h1 className="text-4xl italic sm:text-4xl md:text-6xl font-bold mb-4 font-[family-name:var(--font-Milker-Regular)]">
                                Transforma 
                                <span className='flex items-center lg:ml-10'>
                                    <SvgComponent className=" w-[70px] mr-4 mt-1"/>
                                    tu cuerpo
                                </span> 
                            </h1>
                            <div className='lg:ml-14'>
                                <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-2">
                                <span className='text-[#FFD700]'>Clases de fitness</span> diseñadas para la comunidad latina
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl mb-6">
                                Únete a nuestras clases y empieza tu jornada de salud y bienestar con la mejor instructora.
                                </p>
                                <div className="relative flex justify-center lg:justify-start">
                                  <button className="cta-button" onClick={handleScroll}>
                                    Descubre nuestros planes
                                  </button>
                                  <div className="pulse-container">
                                    <div className="hidden lg:flex pulse pulse--1"></div>
                                    <div className="hidden lg:flex pulse pulse--2"></div>
                                    <div className="hidden lg:flex pulse pulse--3"></div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <img
                                id='heroimg'
                                src="https://static.wixstatic.com/media/53a3ab_bf957264d4d5458685f0cf125ca825cb~mv2.png/v1/fill/w_874,h_1090,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/gym-woman-cutout.png"
                                alt="Fitness Woman"
                                className="max-w-full h-auto w-3/4"
                            />
                        </div>                        
                    </div>
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1726499121">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                  className="shape-fill"
                />
              </svg>
            </div>
        </section>    
      );
}
