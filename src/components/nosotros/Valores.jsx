import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Valores = () => {
  const [valores, setValores] = useState([]);

  useEffect(() => {
    const getValores = async () => {
      try {
        const response = await axios.get('/data/valores.json');
        setValores(response.data);
      } catch (error) {
        console.log("Error al cargar valores:", error);
        setValores([]);
      }
    }
    getValores();
  }, []);

  return (
    <section className='py-12 lg:py-20 px-4 sm:px-8 lg:px-20 xl:px-40 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-primary font-bold text-2xl sm:text-3xl lg:text-4xl mb-12 lg:mb-16 uppercase text-center'>
          Nuestros Valores
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
          {valores.map((valor) => (
            <div 
              key={valor.id} 
              className='bg-white rounded-[40px] px-8 py-12 shadow-[0_0_15px_rgba(0,0,0,0.25)] hover:shadow-[0_0_15px_rgba(0,0,0,0.25)] transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2'
            >
              <div className='w-20 h-20 mb-6 flex items-center justify-center'>
                <img 
                  src={valor.imagen} 
                  alt={valor.valor} 
                  className='w-full h-full object-contain'
                />
              </div>
              
              <h3 className='text-primary font-extrabold text-xl lg:text-2xl xl:text-3xl mb-4 uppercase tracking-wide'>
                {valor.valor}
              </h3>
              
              <p className='text-base leading-relaxed px-2'>
                {valor.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Valores