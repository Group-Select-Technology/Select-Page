import React from 'react'

const WhatsAppIcon = () => {
  return (
    <a 
      href="https://wa.link/5f8h8h"
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 hover:bg-green-600 rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110"
     aria-label="Contactar por WhatsApp"
    >
      <img 
        src="/img/logo_whatsapp.svg" 
        className="h-12 w-12 md:h-12 md:w-12"
        alt="WhatsApp" 
      />
    </a>
  )
}

export default WhatsAppIcon