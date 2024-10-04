import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-bg-gray-100 footer-text-gray-600 footer-py-6">
      <div className="footer-container footer-mx-auto footer-text-center">
        {/* Información básica */}
        <div className="footer-mb-4">
          <p>2024 Caster Team. No pain no gain.</p>
          <p>Desarrollado con ❤️ por <a href='#' className=' text-purple-950 font-semibold'>@codemallow</a></p>
        </div>

        {/* Redes sociales */}
        <div className="footer-flex footer-justify-center footer-space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-text-gray-600 hover:footer-text-gray-900">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-text-gray-600 hover:footer-text-gray-900">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="footer-text-gray-600 hover:footer-text-gray-900">
            <FaTiktok size={24} />
          </a>
          <a href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer" className="footer-text-gray-600 hover:footer-text-gray-900">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
