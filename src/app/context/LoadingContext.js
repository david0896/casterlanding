'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const LoadingContext = createContext();

// Hook personalizado para usar el contexto
export function useLoading() {
  return useContext(LoadingContext);
}

// Proveedor del contexto
export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [isHeroLoaded, setIsHeroLoaded] = useState(false); // Estado para el Hero

  useEffect(() => {
    if (isHeroLoaded) {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Desvanecer la pantalla de carga después de 1 segundo
    }
  }, [isHeroLoaded]);

  return (
    <LoadingContext.Provider value={{ isLoading, fadeOut, isHeroLoaded, setIsHeroLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
}
