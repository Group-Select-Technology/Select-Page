import React from 'react'
import ButtonPrimary from '../common/ButtonPrimary'

const Intro = () => {
  return (
    <section className='relative'>
      <div className='bg-primary text-white pt-12 lg:pt-16 pb-40 lg:pb-60'>
        <div className='mx-6 sm:mx-10 lg:mx-32 xl:mx-64'>
          <h1 className='text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase mb-6 leading-tight'>
            MÁS QUE SOFTWARE, SOMOS TU ALIADO
            <br />
            EN EL CRECIMIENTO
          </h1>

          <p className='text-center text-sm sm:text-base lg:text-lg max-w-4xl mx-auto mb-0 leading-relaxed px-4'>
            En Select Tecnology, llevamos 9 años transformando la gestión farmacéutica en Perú,
            creando soluciones prácticas que hacen que gestionar un negocio no sea una carga.
            Nuestros clientes no solo buscan un sistema: confían en nosotros para resolver
            problemas reales, desde inventarios mal llevados hasta la complejidad de cumplir con SUNAT.
          </p>
        </div>
      </div>

      <div className='mx-6 sm:mx-10 lg:mx-32 xl:mx-64 relative z-10 -mt-20 lg:-mt-32'>
        <div className='bg-white rounded-2xl py-8 px-6 sm:px-10 lg:px-16 shadow-lg'>
          <div className='flex flex-col lg:flex-row justify-around gap-8 lg:gap-10 text-center'>
            <div className='flex-1'>
              <h3 className='uppercase text-cyan-500 font-extrabold flex flex-col items-center text-4xl lg:text-5xl mb-2'>
                09
                <span className='text-2xl font-bold text-cyan-500'>Años</span>
              </h3>
              <p className='text-gray-600 text-sm sm:text-base'>
                de trayectoria impecable dedicados a resolver retos.
              </p>
            </div>

            <div className='flex-1'>
              <h3 className='uppercase text-cyan-500 font-extrabold flex flex-col items-center text-4xl lg:text-5xl mb-2'>
                +1000
                <span className='text-2xl font-bold text-cyan-500'>Clientes</span>
              </h3>
              <p className='text-gray-600 text-sm sm:text-base'>
                satisfechos que respaldan nuestra calidad.
              </p>
            </div>

            <div className='flex-1'>
              <h3 className='uppercase text-cyan-500 font-extrabold flex flex-col items-center text-4xl lg:text-5xl mb-2'>
                +50
                <span className='text-2xl font-bold text-cyan-500'>Funciones</span>
              </h3>
              <p className='text-gray-600 text-sm sm:text-base'>
                diseñadas para facilitar tu gestión en un solo click.
              </p>
            </div>
          </div>
        </div>

        <div className='text-center mt-12 lg:mt-16 pb-20'>
          <ButtonPrimary
            colorFrom="#2EC6DF"
            colorTo="#1A2980"
            className="uppercase px-8 py-3"
            to="/planes"
          >
            Conoce nuestros planes
          </ButtonPrimary>
        </div>

      </div>
    </section>
  )
}

export default Intro