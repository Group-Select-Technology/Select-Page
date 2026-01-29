import React from 'react'

const WhatsAppIcon = () => {
  return (
    <a 
      href="https://wa.link/5f8h8h"
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-3 group focus:outline-none"
      aria-label="Contactar por WhatsApp"
    >
      
      <span className="
        hidden md:block
        bg-white 
        text-slate-800 
        font-medium 
        text-sm
        px-4 py-2 
        rounded-xl 
        shadow-xl 
        whitespace-nowrap
        opacity-0 
        translate-x-4
        transition-all duration-300 ease-out
        group-hover:opacity-100 
        group-hover:translate-x-0
      ">
        ¿Necesitas ayuda? Chatea con nosotros
      </span>

      <div className="
        shrink-0 
        bg-green-500 
        group-hover:bg-green-600 
        rounded-full 
        p-2 md:p-3 
        shadow-lg 
        transition-all duration-300 
        transform group-hover:scale-110
        flex items-center justify-center
      ">
        <img 
          src="/img/logo_whatsapp.svg" 
          className="h-12 w-12 md:h-12 md:w-12"
          alt="WhatsApp" 
        />
      </div>

    </a>
  )
}

export default WhatsAppIcon