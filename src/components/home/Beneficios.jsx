import React from 'react'

const Beneficios = () => {
    return (
        <section className='lg:flex justify-center gap-[14rem] items-center my-10 lg:mx-32 mx-12'>
            <div className='pb-10 lg:pb-0'>
                <img src="img/seccion_beneficios.png" alt="Beneficios" width="500" />
            </div>
            <div>
                <h3 className='text-primary font-bold text-xl sm:text-2xl lg:text-3xl mb-4 uppercase'>
                    Sabemos que el desorden puede <br />
                    <span>costar mucho dinero</span>
                </h3>
                <p className='mb-4'>
                    Por eso optimiza cada proceso con un sistema diseñado para ser <br />
                    potente por dentro y extremadamente sencillo por fuera
                </p>
                <ul>
                    <li className='flex gap-2 mb-1'>
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        Aprendes a usarlo en menos de 2 horas</li>
                    <li className='flex gap-2 mb-1'>
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        Tu información siempre respaldada y lista para SUNAT.</li>
                    <li className='flex gap-2 mb-1'>
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        Tecnología que evoluciona con las normativas del mercado peruano.</li>
                </ul>
            </div>
        </section>
    )
}

export default Beneficios