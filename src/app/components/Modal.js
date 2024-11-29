"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import EchartsDonut from "./EchartsDonut";
import { FaRunning, FaSwimmer, FaDumbbell, FaPray, FaHotjar } from 'react-icons/fa';


const Modal = ({ isOpen, onClose, planName, data }) => {
  
  return (
    <Dialog
  open={isOpen}
  onClose={onClose}
  className={`fixed inset-0 z-50 flex items-center justify-center ${
    isOpen ? "modal-open" : "modal-close"
  }`}
>
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <DialogPanel className="modal-panel relative bg-cover bg-center w-11/12 max-w-4xl px-2 lg:px-5 py-20 text-center bg-black rounded-lg ">
      <button
      onClick={onClose}
      className="absolute top-12 right-4 lg:top-2 lg:right-2 text-gray-500 hover:text-yellow-400"
    >
      &#10005; {/* Código HTML para una "X" */}
    </button>
        <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-Milker-Regular)] italic">
          Comienza <span className="text-yellow-400">ahora</span>
        </h2>
        <h3 className="text-xl font-bold text-yellow-400">
           {planName}
        </h3>
        <p className="mt-2 text-sm text-gray-300">
          Tu cuerpo y mente están listos para el cambio. ¡Empieza hoy mismo!
        </p>
        <div className="flex justify-center">
          <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 p-6 shadow-md rounded-md w-full lg:w-auto">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="correo"
              placeholder="Correo"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input type="hidden" name="plan" value="{props.plan}" />
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-600 focus:outline-none"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Gráficos */}
        <EchartsDonut
          data={data}
        />

      </DialogPanel>
    </Dialog>
  );
};

export default Modal;
