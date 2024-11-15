import Image from "next/image";
import Hero from './components/Hero';
import Service from "./components/Service";
import AboutMe from "./components/AboutMe";
import PlansSection from "./components/PlanSection";
import Testimony from "./components/testimony";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Hero />
      <Service/>
      <AboutMe/>
      <PlansSection/>
      <Testimony/>      
      <ContactMe/>      
    </main>
  );
}
