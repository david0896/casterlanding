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

  return (
<section className="aboutme-section relative w-full h-[800px] overflow-hidden">
  {/* Contenedor de las imágenes animadas */}
  <div className="aboutme-bg absolute inset-0 w-full h-full overflow-hidden">
    <div className="aboutme-bg-grid grid grid-cols-12 gap-2">
      {/* Columna 1: Imágenes animadas (izquierda) */}
      <div className="col-span-2 flex flex-col">
        <img
          src="https://www.spinningcentergym.com/wp-content/uploads/2024/03/gimnasios-en-las-americas-spinning-center-gym_Body-pump-scaled.webp"
          alt="image1"
          className="aboutme-bg-image"
        />
        <img
          src="https://www.spinningcentergym.com/wp-content/uploads/2024/06/IMG_5235-scaled.webp"
          alt="image2"
          className="aboutme-bg-image"
        />
      </div>

      {/* Columna 2: Imágenes animadas (derecha, replicadas en distinto orden) */}
      <div className="col-span-2 flex flex-col">
        <img
          src="https://www.spinningcentergym.com/wp-content/uploads/2024/06/IMG_3186-1-scaled.webp"
          alt="image3"
          className="aboutme-bg-image"
        />
        <img
          src="https://www.spinningcentergym.com/wp-content/uploads/2024/06/padelh.webp"
          alt="image4"
          className="aboutme-bg-image"
        />
      </div>

      {/* Columna 3: Imágenes animadas (derecha, replicadas en distinto orden) */}
      <div className="col-span-2 flex flex-col">
        <img
          src="https://www.spinningcentergym.com/wp-content/uploads/2024/06/IMG_3186-1-scaled.webp"
          alt="image3"
          className="aboutme-bg-image"
        />
        <img
          src="https://www.spinningcentergym.com/wp-content/uploads/2024/06/padelh.webp"
          alt="image4"
          className="aboutme-bg-image"
        />
      </div>

      {/* Columna 4: Imágenes animadas (derecha, replicadas en distinto orden) */}
      <div className="col-span-2 flex flex-col">
        <img
          src="https://www.spinningcentergym.com/wp-content/uploads/2024/06/IMG_3186-1-scaled.webp"
          alt="image3"
          className="aboutme-bg-image"
        />
        <img
          src="https://www.spinningcentergym.com/wp-content/uploads/2024/06/padelh.webp"
          alt="image4"
          className="aboutme-bg-image"
        />
      </div>

      {/* Columna 5: Imágenes animadas (derecha, replicadas en distinto orden) */}
      <div className="col-span-2 flex flex-col">
        <img
          src="https://www.spinningcentergym.com/wp-content/uploads/2024/06/IMG_3186-1-scaled.webp"
          alt="image3"
          className="aboutme-bg-image"
        />
        <img
          src="https://www.spinningcentergym.com/wp-content/uploads/2024/06/padelh.webp"
          alt="image4"
          className="aboutme-bg-image"
        />
      </div>

      {/* Columna 6: Imágenes animadas (derecha, replicadas en distinto orden) */}
      <div className="col-span-2 flex flex-col">
        <img
          src="https://www.spinningcentergym.com/wp-content/uploads/2024/06/IMG_3186-1-scaled.webp"
          alt="image3"
          className="aboutme-bg-image"
        />
        <img
          src="https://www.spinningcentergym.com/wp-content/uploads/2024/06/padelh.webp"
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
      <h2 className="text-4xl font-bold mb-2 aboutme-title font-[family-name:var(--font-Milker-Regular)] italic">
        Conoce a <span className="text-yellow-500">Flor Caster</span>
      </h2>
      <p className="text-xl font-light">
        Entrenadora fitness con +10 años de experiencia
      </p>
    </div>

    {/* Tarjetas */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center p-6 bg-black bg-opacity-70 rounded-lg shadow-lg aboutme-card h-full flex flex-col justify-between">
        <FaDumbbell className="mx-auto text-4xl text-yellow-400 mb-4 aboutme-icon" />
        <h3 className="text-2xl font-semibold">Trayectoria</h3>
        <p className="text-md mt-2">
          +10 años transformando vidas a través de entrenamientos personalizados.
        </p>
      </div>

      <div className="text-center p-6 bg-black bg-opacity-70 rounded-lg shadow-lg aboutme-card h-full flex flex-col justify-between">
        <FaAward className="mx-auto text-4xl text-yellow-400 mb-4 aboutme-icon" />
        <h3 className="text-2xl font-semibold">Reconocimientos</h3>
        <p className="text-md mt-2">
          Premio "Entrenadora del Año 2022". Embajadora fitness internacional.
        </p>
      </div>

      <div className="text-center p-6 bg-black bg-opacity-70 rounded-lg shadow-lg aboutme-card h-full flex flex-col justify-between">
        <FaHeartbeat className="mx-auto text-4xl text-yellow-400 mb-4 aboutme-icon" />
        <h3 className="text-2xl font-semibold">Valores</h3>
        <p className="text-md mt-2">
          Compromiso, innovación y disciplina en cada entrenamiento.
        </p>
      </div>
    </div>

    {/* Sección de Mi Motivación, Misión y Visión */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      <div className="space-y-6">
        <div>
          <h3 className="text-3xl font-semibold mb-4 text-yellow-400">
            Mi motivación
          </h3>
          <p className="text-lg">
            Ayudar a las personas a descubrir su mejor versión. Crear hábitos
            saludables para toda la vida, no solo a corto plazo.
          </p>
        </div>

        <div className="flex space-x-6">
          {/* Misión */}
          <div className="bg-black bg-opacity-70 rounded-lg p-6 shadow-lg text-center flex flex-col items-center justify-center w-1/2 aboutme-card">
            <h3 className="text-3xl font-bold text-yellow-400 mb-2">Misión</h3>
            <p className="text-md text-center mb-4">
              Transformar vidas a través del fitness, ofreciendo programas
              adaptados a cada cliente.
            </p>
            <FaBullseye className="text-yellow-400 text-4xl" />
          </div>

          {/* Visión */}
          <div className="bg-black bg-opacity-70 rounded-lg p-6 shadow-lg text-center flex flex-col items-center justify-center w-1/2 aboutme-card">
            <h3 className="text-3xl font-bold text-yellow-400 mb-2">Visión</h3>
            <p className="text-md text-center mb-4">
              Ser líder en el mundo del fitness, inspirando a miles de personas
              a alcanzar su máximo potencial.
            </p>
            <FaEye className="text-yellow-400 text-4xl" />
          </div>
        </div>
      </div>

      {/* Imagen principal */}
      <div className="overflow-hidden h-[800px]">
        <img
          src="https://lapaulettefitness.com/wp-content/uploads/elementor/thumbs/footer-pmj2lzreop9d3wf5pgea6jfdu7zkvm3uctihr6zmrk.png"
          alt="Flor Caster Training"
          id="instructoraImg"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>

    {/* Llamado a la acción */}
    <div className="text-center mt-12">
      <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition-all">
        ¡Empieza tu transformación ahora!
      </button>
    </div>
  </div>
</section>

  );
};

export default AboutMe;

