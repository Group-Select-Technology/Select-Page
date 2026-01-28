import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Canales = () => {

  const [asesores, setAsesores] = useState([]);

  useEffect(() => {
    const getAsesores = async () => {
      try {
        const response = await axios.get('/data/asesores.json');
        setAsesores(response.data);
      } catch (error) {
        console.log("Error al cargar asesores:", error);
        setAsesores([]);
      }
    }
    getAsesores();
  }, []);

  return (
    <section className='w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-gray-50'>
      
      <div className='max-w-4xl w-full text-center mb-4'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-montserrat uppercase leading-tight'>
          PONTE EN CONTACTO CON<br />
          NUESTRO EQUIPO SELECT
        </h1>
      </div>

      <div className='max-w-3xl w-full text-center mb-16'>
        <p className='text-base md:text-lg text-primary font-montserrat'>
          Nuestro equipo de expertos está listo para asesorarte y encontrar la solución tecnológica perfecta para tu negocio
        </p>
      </div>

      {/* Contenedor principal */}
      <div className='max-w-7xl w-full flex flex-col md:flex-row items-center justify-center px-4'>
          
          {/* Tarjeta izquierda */}
          <div className='w-full md:w-[750px] bg-white rounded-3xl shadow-2xl relative h-fit overflow-hidden'>
            
            {/* Barra azul */}
            <div className='flex items-center gap-4 bg-[#17359D] px-8 py-8 w-full'>
              <h3 className='text-3xl font-bold text-white font-montserrat uppercase tracking-wide'>
                HABLAR CON UN ASESOR
              </h3>
            </div>

            {/* Lista de asesores */}
            <div className='p-8 flex flex-col gap-4'>
              {asesores.map((asesor) => (
                <a key={asesor.id} href={asesor.link} target="_blank" rel="noopener noreferrer" className='flex items-center gap-4 group cursor-pointer hover:bg-gray-50 rounded-xl transition-all duration-300'>
                  <div className='w-7 h-7 flex-shrink-0'>
                    <img 
                      src="/img/logo_whatsapp.svg" 
                      alt="WhatsApp" 
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <span className='text-gray-700 font-medium text-lg group-hover:text-[#1e3a8a] transition-colors'>
                    {asesor.nombre}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Tarjeta derecha */}
          <div className='w-full md:w-[480px] h-[450px] md:h-[550px] mt-8 md:mt-0 md:-ml-24 relative z-10'>
            <div className='bg-[#00adef] rounded-[2.5rem] overflow-hidden shadow-xl h-full w-full relative'>
              <img 
                src="/img/contact.png" 
                alt="Contacto Select" 
                className='w-full h-full object-cover object-center'
              />
            </div>
          </div>

      </div>

    </section>
  )
}

export default Canales