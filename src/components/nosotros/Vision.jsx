import React from 'react'

const Vision = () => {
  return (
    <section className='py-12 lg:py-16 px-6 sm:px-10 lg:px-32 xl:px-64'>
      <div className='max-w-6xl mx-auto'>
        
        <div className='mb-12 lg:mb-16'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-12 items-center'>
            <div className='mb-8 lg:mb-0'>
              <h2 className='text-primary font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 uppercase'>
                Nuestra Misión
              </h2>
              <p className='text-sm sm:text-base leading-relaxed'>
                Optimizar la eficiencia y productividad de las empresas mediante
                soluciones innovadoras de software, ofreciendo herramientas intuitivas
                y personalizables que se adapten a las necesidades específicas de cada
                negocio, garantizando un servicio que brinde máxima confianza de
                nuestro sistema.
              </p>
            </div>

            <div className='flex justify-center lg:justify-end'>
              <img 
                src="/img/mision.png" 
                alt="Nuestra Misión" 
                className='w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain'
              />
            </div>
          </div>
        </div>

        <div>
          <div className='lg:grid lg:grid-cols-2 lg:gap-12 items-center'>
            <div className='flex justify-center lg:justify-start order-2 lg:order-1 mb-8 lg:mb-0'>
              <img 
                src="/img/vision.png" 
                alt="Nuestra Visión" 
                className='w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain'
              />
            </div>

            <div className='order-1 lg:order-2 mb-8 lg:mb-0'>
              <h2 className='text-primary font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 uppercase'>
                Nuestra Visión
              </h2>
              <p className='text-sm sm:text-base leading-relaxed'>
                Consolidarnos como la empresa líder en soluciones de software en el
                Perú, siendo reconocido por nuestra innovación, calidad y compromiso
                con nuestros clientes. Aspiramos a ser el aliado estratégico de las
                empresas en sus objetivos de transformación digital, expandiendo
                nuestra presencia hacia nuevos mercados para convertirínos en una
                referencia internacional en la industria tecnológica.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Vision