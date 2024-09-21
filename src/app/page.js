import Image from "next/image";
import Hero from './components/Hero';
import Service from "./components/Service";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Service/>
      <AboutMe/>
      {/* Siguiente sección */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">Siguiente Sección</h2>
        </div>
      </section>
          
    </main>
  );
}
