import React, { useState, useEffect } from 'react'

const Memorias = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/img/memoria-1.jpg',
    '/img/memoria-2.jpg',
    '/img/memoria-3.jpg',
    '/img/memoria-4.jpg',
    '/img/memoria-5.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className='py-12 lg:py-16 px-6 sm:px-10 lg:px-32 xl:px-64'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-primary font-bold text-2xl sm:text-3xl lg:text-4xl mb-10 lg:mb-12 uppercase text-center'>
          Memorias Select
        </h2>

        <div className='relative w-full overflow-hidden rounded-2xl shadow-lg mb-6'>
          <div 
            className='flex transition-transform duration-700 ease-in-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div 
                key={index} 
                className='min-w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] bg-gray-200 flex items-center justify-center'
              >
                <img
                  src={image}
                  alt={`Memoria ${index + 1}`}
                  className='w-full h-full object-cover'
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="20"%3EImagen de Memoria ' + (index + 1) + '%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-center gap-3'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'w-10 h-3 bg-primary'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Memorias
