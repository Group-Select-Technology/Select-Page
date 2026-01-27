import React from 'react'

const Presencia = () => {
  return (
    <section className="py-12 lg:pb-0 lg:pt-0 px-6 sm:px-10 lg:px-32 xl:px-64">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-primary font-bold text-2xl sm:text-3xl lg:text-4xl uppercase mb-6">
              Presencia Estratégica en Latinoamérica
            </h2>
            
            <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
              Inauguramos negocios desde hace tiempo para toda la región. Nuestra tecnología ya cruza fronteras, llevando soluciones a múltiples países. Estamos comprometidos con servir a Latinoamérica y el mundo.
            </p>
            
            <div className="flex items-center">
              <img 
                src="/img/banderas.png" 
                alt="Banderas de países en Latinoamérica" 
                className="h-8 sm:h-10"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img 
              src="/img/mapa.png" 
              alt="Mapa de presencia en Latinoamérica" 
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presencia
