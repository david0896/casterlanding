'use client';

import { useLoading } from '../context/LoadingContext'; // Hook personalizado para manejar el loading
import LoadingScreen from './LoadingScreen';

export default function LayoutClient({ children }) {
  const { isLoading, fadeOut } = useLoading(); // Obtenemos los estados de carga y fadeOut

  return (
    <>
      {isLoading ? <LoadingScreen fadeOut={fadeOut} /> : children}
    </>
  );
}
