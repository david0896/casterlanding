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
      <div id="serviceCaster" className="p-5"></div>
      <Service/>
      <div id="aboutMeCaster" className="p-5"></div>
      <AboutMe/>
      <PlansSection/>
      <Testimony/>      
      <ContactMe/>      
    </main>
  );
}
