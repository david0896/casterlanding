"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';

const ModalEbook = ({ isOpen, onClose, text, ebookImage}) => {

    const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

**strong importance**

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;
  
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
        const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
    
        if (response.ok) {
            alert("Correo enviado exitosamente");
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.error || "Error desconocido"}`);
        }
        } catch (error) {
        console.error("Error al enviar el formulario:", error);
        alert("Error al enviar el formulario.");
        }
    };
  
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            className={`fixed inset-0 z-50 flex items-center justify-center ${
                isOpen ? "modal-open" : "modal-close"
            }`}
        >
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
            <DialogPanel className="modal-panel relative bg-cover bg-center w-11/12 max-w-4xl px-2 lg:px-5 py-10 bg-black rounded-lg ">
            <button
                onClick={onClose}
                className="absolute top-12 right-4 lg:top-2 lg:right-2 text-gray-500 hover:text-yellow-400"
            >
                &#10005; {/* Código HTML para una "X" */}
            </button>
            <div className=" grid grid-cols-2 gap-4">
                <div className="">
                    <img src={ebookImage} alt="portada de ebook" className=" w-[90%] h-[30vw]"/>
                </div>
                <div className="flex flex-col justify-start items-start text-white">
                    <h2 className="text-2xl font-bold font-[family-name:var(--font-Milker-Regular)] italic mb-3">
                        Comienza <span className="text-yellow-400">ahora</span>
                    </h2>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}> 
                        {text}
                    </ReactMarkdown>
                </div>
            </div>
            
        </DialogPanel>
        </Dialog>
    );
};

export default ModalEbook;