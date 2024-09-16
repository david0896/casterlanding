import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const heroVideo = document.getElementById('herovideo');
    const heroImage = document.getElementById('heroimg');

    const minLoadingTime = 6000; // Tiempo mínimo de 6 segundos
    const startTime = Date.now();

    let mediaLoaded = false;

    const checkMediaLoaded = () => {
      const videoLoaded = heroVideo && heroVideo.readyState === 4;
      const imageLoaded = heroImage && heroImage.complete && heroImage.naturalHeight !== 0;

      if (videoLoaded && imageLoaded) {
        mediaLoaded = true;
        const elapsedTime = Date.now() - startTime;

        const remainingTime = minLoadingTime - elapsedTime;

        setTimeout(() => {
          setIsLoading(false);
          document.body.classList.remove('loading'); // Hacer visible el contenido de la página
        }, remainingTime > 0 ? remainingTime : 0);
      }
    };

    // Escuchar eventos de carga del video e imagen
    heroVideo?.addEventListener('loadeddata', checkMediaLoaded);
    heroImage?.addEventListener('load', checkMediaLoaded);

    // Garantizar un tiempo mínimo de pantalla de carga
    setTimeout(() => {
      if (!mediaLoaded) {
        setIsLoading(false);
        document.body.classList.remove('loading');
      }
    }, minLoadingTime);

    return () => {
      heroVideo?.removeEventListener('loadeddata', checkMediaLoaded);
      heroImage?.removeEventListener('load', checkMediaLoaded);
    };
  }, []);

  // Fade-out effect para la pantalla de carga
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setIsVisible(false), 1000); // Fade-out en 1 segundo
    }
  }, [isLoading]);

  if (!isVisible) return null; // No mostrar nada si ya se quitó la pantalla de carga

  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center z-50 transition-opacity duration-1000 ${
        !isLoading ? 'screenLoading-opacity-0' : 'screenLoading-opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="text-3xl font-bold mb-4 screenLoading-fade-in">CASTER TEAM</div>
        <div className="animate-pulse">
          <img
            src="https://i.postimg.cc/13Qd5czS/pesas.gif"
            alt="Gym Loading"
            className="w-32 h-32 object-cover mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
