import React from 'react'

const Valores = () => {
  return (
    <section className='py-12 lg:py-16 px-6 sm:px-10 lg:px-32 xl:px-64 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-primary font-bold text-2xl sm:text-3xl lg:text-4xl mb-10 lg:mb-12 uppercase text-center'>
          Nuestros Valores
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-24'>
          <div className='bg-cyan-400 rounded-3xl aspect-square flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <h3 className='text-white font-bold text-xl sm:text-2xl uppercase'>
              Innovación
            </h3>
          </div>

          <div className='bg-blue-600 rounded-3xl aspect-square flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <h3 className='text-white font-bold text-xl sm:text-2xl uppercase'>
              Confiabilidad
            </h3>
          </div>

          <div className='bg-primary rounded-3xl aspect-square flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <h3 className='text-white font-bold text-xl sm:text-2xl uppercase text-center px-4'>
              Servicio al
              <br />
              Cliente
            </h3>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Valores