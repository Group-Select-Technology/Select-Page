import React from 'react'

const Trayectoria = () => {
    const logos = [
        "img/probando.png",
        "img/probando.png",
        "img/probando.png",
        "img/probando.png",
        "img/probando.png"
    ];

    return (
        <section className='mt-12 mb-10 bg-terciary p-6 sm:p-8 md:p-10'>
            <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 mt-8 sm:mt-12 md:mt-16'>
                <h2 className='uppercase text-center text-primary font-bold text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-12 lg:mb-16 leading-tight'>Únete a la red del software más eficiente</h2>

                {/* Trayectoria */}
                <div className='flex flex-col lg:flex-row justify-around gap-8 lg:gap-10 text-center px-0 sm:px-4 md:px-8 lg:px-16 xl:px-36'>
                    <div>
                        <div>
                            <h3 className='uppercase text-cyan-500 font-extrabold flex flex-col items-center text-3xl lg:text-5xl mb-3'>
                                09
                                <span className='text-2xl font-bold'>Años</span>
                            </h3>
                            <p>de trayectoria impecable dedicados a resolver retos.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className='uppercase text-cyan-500 font-extrabold flex flex-col items-center text-3xl lg:text-5xl mb-3'>
                                +1000
                                <span className='text-2xl font-bold'>Clientes</span>
                            </h3>
                            <p>satisfechos que respaldan nuestra calidad.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className='uppercase text-cyan-500 font-extrabold flex flex-col items-center text-3xl lg:text-5xl mb-3'>
                                +50
                                <span className='text-2xl font-bold'>Funciones</span>
                            </h3>
                            <p>diseñadas para facilitar tu gestión en un solo click.</p>
                        </div>
                    </div>
                </div>

                {/*Carrusel de logos de clientes*/}
                <div className='mt-12 sm:mt-16 md:mt-20 overflow-hidden'>
                    {/* Primera fila - movimiento hacia la izquierda */}
                    <div className='flex mb-2'>
                        <div className='flex animate-scroll-left'>
                            {logos.map((logo, index) => (
                                <img 
                                    key={`left-1-${index}`} 
                                    src={logo} 
                                    alt={`Cliente ${index + 1}`} 
                                    className='h-12 w-auto mx-4 sm:mx-6 md:mx-8 object-contain grayscale hover:grayscale-0 transition-all duration-300'
                                />
                            ))}
                            {/* Duplicamos para efecto infinito */}
                            {logos.map((logo, index) => (
                                <img 
                                    key={`left-2-${index}`} 
                                    src={logo} 
                                    alt={`Cliente ${index + 1}`} 
                                    className='h-12 w-auto mx-4 sm:mx-6 md:mx-8 object-contain grayscale hover:grayscale-0 transition-all duration-300'
                                />
                            ))}
                        </div>
                    </div>

                    {/* Segunda fila - movimiento hacia la derecha */}
                    <div className='flex'>
                        <div className='flex animate-scroll-right'>
                            {logos.map((logo, index) => (
                                <img 
                                    key={`right-1-${index}`} 
                                    src={logo} 
                                    alt={`Cliente ${index + 1}`} 
                                    className='h-12  w-auto mx-4 sm:mx-6 md:mx-8 object-contain grayscale hover:grayscale-0 transition-all duration-300'
                                />
                            ))}
                            {/* Duplicamos para efecto infinito */}
                            {logos.map((logo, index) => (
                                <img 
                                    key={`right-2-${index}`} 
                                    src={logo} 
                                    alt={`Cliente ${index + 1}`} 
                                    className='h-12 w-auto mx-4 sm:mx-6 md:mx-8 object-contain grayscale hover:grayscale-0 transition-all duration-300'
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trayectoria