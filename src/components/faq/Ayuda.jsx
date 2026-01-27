import React from 'react'

const Ayuda = () => {
  return (
    <section className="bg-fifthary py-12 lg:py-24 px-6 sm:px-10 lg:px-32 xl:px-64">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-primary font-bold text-2xl sm:text-3xl lg:text-4xl uppercase text-center mb-4">
          ¿Necesitas Ayuda?
        </h2>
        
        <p className="text-center text-gray-700 text-base sm:text-lg mb-8 max-w-3xl mx-auto">
          Si tienes alguna consulta o necesitas asesoría, nuestro equipo comercial está disponible. Contáctanos ahora para recibir atención personalizada.
        </p>
        
        <div className="flex justify-center mb-8">
          <a 
            href="https://wa.me/51987654321" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img 
              src="/img/asesor.png" 
              alt="Hablar con un asesor" 
              className="h-12 sm:h-16 xl:h-24 hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-2 gap-x-6 text-center text-gray-500 text-sm mt-6">
          <p>
            Si tienes alguna consulta, nuestro equipo comercial está disponible las 24hs
          </p>
          
          <span className="hidden md:block text-gray-300">|</span>
          
          <p>
            Más de 9 años brindando una solución profesional
          </p>
          
          <span className="hidden md:block text-gray-300">|</span>
          
          <p>
            En plan perfecto para tu proyecto
          </p>
        </div>
      </div>
    </section>
  )
}

export default Ayuda
