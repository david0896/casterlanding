'use client';

import { useEffect } from 'react';
import { FaDumbbell, FaAward, FaHeartbeat, FaBullseye, FaEye } from 'react-icons/fa';

const AboutMe = () => {
  useEffect(() => {
    const images = document.querySelectorAll('.aboutme-bg-image');
    images.forEach((img, index) => {
      img.style.animationDelay = `${index * 0.5}s`; // Ajuste para retraso de animación en cada imagen
    });
  }, []);

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
    <section className="aboutme-section relative w-full h-full lg:h-[930px] overflow-hidden">
      {/* Contenedor de las imágenes animadas */}
      <div className="aboutme-bg absolute inset-0 w-full h-full overflow-hidden">
        <div className="aboutme-bg-grid grid grid-cols-12 gap-2">
          {/* Columna 1: Imágenes animadas (izquierda) */}
          <div className="col-span-2 flex flex-col">
            <img
              src="https://i.postimg.cc/hj0pQkb0/fitness-caster-team.jpg"
              alt="image1"
              className="aboutme-bg-image"
            />
            <img
              src="https://i.postimg.cc/6pDHkLpC/flor-caster-team.jpg"
              alt="image2"
              className="aboutme-bg-image"
            />
          </div>

          {/* Columna 2: Imágenes animadas (derecha, replicadas en distinto orden) */}
          <div className="col-span-2 flex flex-col">
            <img
              src="https://i.postimg.cc/TYsQbqmB/ejercicios-gym-fitness-caster-team.jpg"
              alt="image3"
              className="aboutme-bg-image"
            />
            <img
              src="https://i.postimg.cc/QxC0VnBp/sesion-fitness-caster-team.jpg"
              alt="image4"
              className="aboutme-bg-image"
            />
          </div>

          {/* Columna 3: Imágenes animadas (derecha, replicadas en distinto orden) */}
          <div className="col-span-2 flex flex-col">
            <img
              src="https://i.postimg.cc/Hk7z9c9n/rutina-de-ejercicio-fitness-caster-team.jpg"
              alt="image3"
              className="aboutme-bg-image"
            />
            <img
              src="https://i.postimg.cc/zBqkNdZH/entrenadora-personal-caster-team.png"
              alt="image4"
              className="aboutme-bg-image"
            />
          </div>

          {/* Columna 4: Imágenes animadas (derecha, replicadas en distinto orden) */}
          <div className="col-span-2 flex flex-col">
            <img
              src="https://i.postimg.cc/bvcTCymT/entrenadora-personal-caster-team.jpg"
              alt="image3"
              className="aboutme-bg-image"
            />
            <img
              src="https://i.postimg.cc/x8CyJcd0/caster-team-rutina-de-pesas.png"
              alt="image4"
              className="aboutme-bg-image"
            />
          </div>

          {/* Columna 5: Imágenes animadas (derecha, replicadas en distinto orden) */}
          <div className="col-span-2 flex flex-col">
            <img
              src="https://i.postimg.cc/6pDHkLpC/flor-caster-team.jpg"
              alt="image3"
              className="aboutme-bg-image"
            />
            <img
              src="https://i.postimg.cc/TYsQbqmB/ejercicios-gym-fitness-caster-team.jpg"
              alt="image4"
              className="aboutme-bg-image"
            />
          </div>

          {/* Columna 6: Imágenes animadas (derecha, replicadas en distinto orden) */}
          <div className="col-span-2 flex flex-col">
            <img
              src="https://i.postimg.cc/Hk7z9c9n/rutina-de-ejercicio-fitness-caster-team.jpg"
              alt="image3"
              className="aboutme-bg-image"
            />
            <img
              src="https://i.postimg.cc/QxC0VnBp/sesion-fitness-caster-team.jpg"
              alt="image4"
              className="aboutme-bg-image"
            />
          </div>

          {/* Repetir las columnas según sea necesario */}
        </div>
      </div>

      {/* Overlay gris */}
      <div className="aboutme-overlay absolute inset-0 bg-black opacity-90"></div>

      {/* Contenido sobre las imágenes */}
      <div
        id="sobreImg"
        className="relative z-10 aboutme-content text-white w-11/12 md:w-9/12 mx-auto py-12 space-y-8"
      >
        {/* Encabezado principal */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2 aboutme-title font-[family-name:var(--font-Milker-Regular)] italic">
            Conoce a <span className="text-yellow-400">Flor Caster</span>
          </h2>
          <p className="text-xl font-light">
            Entrenadora fitness con +4 años de experiencia.
          </p>
          {/* Llamado a la acción */}
          <div className="text-center my-12 block lg:hidden">
            <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition-all" onClick={handleScroll}>
              ¡Empieza tu transformación ahora!
            </button>
          </div>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-black bg-opacity-70 rounded-lg shadow-lg aboutme-card h-full flex flex-col justify-between">
            <FaDumbbell className="mx-auto text-4xl text-yellow-400 mb-4 aboutme-icon" />
            <h3 className="text-2xl font-semibold">Trayectoria</h3>
            <p className="text-md mt-2">
            He ayudado a más de 1500 personas a alcanzar no solo un cambio
            físico, si no también mental y emocional
            </p>
          </div>

          <div className="text-center p-6 bg-black bg-opacity-70 rounded-lg shadow-lg aboutme-card h-full flex flex-col justify-between">
            <FaAward className="mx-auto text-4xl text-yellow-400 mb-4 aboutme-icon" />
            <h3 className="text-2xl font-semibold">Enfoque</h3>
            <p className="text-md mt-2">
            Combinar ciencia, aprendizaje autodidacta y experiencia para perder grasa y ganar músculo
            </p>
          </div>

          <div className="text-center p-6 bg-black bg-opacity-70 rounded-lg shadow-lg aboutme-card h-full flex flex-col justify-between">
            <FaHeartbeat className="mx-auto text-4xl text-yellow-400 mb-4 aboutme-icon" />
            <h3 className="text-2xl font-semibold">La Fórmula</h3>
            <p className="text-md mt-2">
              Me formé en nutrición y desarrollé métodos propios para transformar cuerpos, creando hábitos que cambian vidas
            </p>
          </div>
        </div>

        {/* Sección de Mi Motivación, Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="space-y-6">
            <div className=' mb-10 text-center lg:text-left'>
              <h3 className="text-3xl font-bold mb-4 text-yellow-400">
                Mi motivación
              </h3>
              <p className="text-lg">
              Prepárarte para un cambio que trascienda lo físico. Aquí comienza tu camino hacia una transformación integral, donde mente y cuerpo trabajan en armonía
              </p>
              {/* Llamado a la acción */}
              <div className="text-center my-12 block lg:hidden">
                <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition-all" onClick={handleScroll}>
                  ¡Empieza tu transformación ahora!
                </button>
              </div>
            </div>

            <div className="block lg:flex space-y-6 lg:space-y-0 lg:space-x-6">
              {/* Misión */}
              <div className="bg-black bg-opacity-70 rounded-lg p-6 shadow-lg text-center flex flex-col items-center justify-center w-full lg:w-1/2 aboutme-card">
                <h3 className="text-3xl font-semibold text-yellow-400 mb-2">Filosofía</h3>
                <p className="text-md text-center mb-4">
                Como entrenadora y exprofesora de música, valoro la conexión humana, la pasión y la disciplina, transmitiéndolas en cada sesión de entrenamiento
                </p>
                <FaBullseye className="text-yellow-400 text-4xl" />
              </div>

              {/* Visión */}
              <div className="bg-black bg-opacity-70 rounded-lg p-6 shadow-lg text-center flex flex-col items-center justify-center w-full lg:w-1/2 aboutme-card">
                <h3 className="text-3xl font-semibold text-yellow-400 mb-2">Visión</h3>
                <p className="text-md text-center mb-4">
                Mi misión es guiarte para que encuentres en el entrenamiento la fuerza y la liberación que te empoderen para superar cualquier límite
                </p>
                <FaEye className="text-yellow-400 text-4xl" />
              </div>
            </div>
          </div>

          {/* Imagen principal */}
          <div className="overflow-hidden h-[300px] lg:h-[800px] -mb-12 lg:mb-0">
            <img
              src="https://i.postimg.cc/c40pLBV1/entrrenamiento-con-pesas-alterofilia.png"
              alt="Flor Caster Training"
              id="instructoraImg"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Llamado a la acción */}
        <div className="text-center mt-12 block lg:hidden">
            <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition-all" onClick={handleScroll}>
              ¡Empieza tu transformación ahora!
            </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

