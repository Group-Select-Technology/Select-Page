import React from 'react'

const Redes = () => {
  return (
    <section className='py-12 lg:py-16 px-6 sm:px-10'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-primary font-bold text-2xl sm:text-3xl lg:text-4xl mb-8 uppercase'>
          Síguenos
        </h2>

        <div className='flex justify-center items-center gap-6 sm:gap-8'>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className='hover:scale-110 transition-transform duration-300'
          >
            <img 
              src="/img/facebook.png" 
              alt="Facebook" 
              className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16'
            />
          </a>

          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className='hover:scale-110 transition-transform duration-300'
          >
            <img 
              src="/img/instagram.png" 
              alt="Instagram" 
              className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16'
            />
          </a>

          <a 
            href="https://tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className='hover:scale-110 transition-transform duration-300'
          >
            <img 
              src="/img/tiktok.png" 
              alt="TikTok" 
              className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16'
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Redes