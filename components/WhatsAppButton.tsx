'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Optional: npm install react-icons

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Configuration for AmaniCrafts
  const phoneNumber = "27632768141"; // Replace with your actual number
  const message = "Hello AmaniCrafts! I'm browsing your collection of African arts and clothes and would like some assistance.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me{phoneNumber}?text=${encodedMessage}`;

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after 200px scroll
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      {/* Tooltip Label */}
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md border border-gray-100 whitespace-nowrap hidden md:block">
        Chat with AmaniCrafts
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulsing Ring Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        
        {/* WhatsApp Icon */}
        <svg
          className="w-9 h-9 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.048c0 2.12.554 4.189 1.605 6.006L0 24l6.135-1.61a11.83 11.83 0 005.912 1.586h.005c6.635 0 12.045-5.413 12.048-12.05a11.81 11.81 0 00-3.488-8.522z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
