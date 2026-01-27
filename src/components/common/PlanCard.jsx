import React from 'react'
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

const Plan = ({ tier, moneda, periodo }) => {

    const { title, subtitle, isHighlighted, prices, features } = tier;

    // Obtener el precio según moneda y período
    const precio = prices?.[periodo]?.[moneda] || 0;
    const simbolo = moneda === 'soles' ? 'S/' : '$';

    return (
        <div
            className={`
                bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:py-10
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:shadow-xl
                flex flex-col relative
                ${isHighlighted
                    ? 'scale-95 lg:scale-100 z-10'
                    : 'scale-90 lg:scale-95'
                }
            `}
        >
            {/* Badge destacado */}
            {isHighlighted && (
                <div className="absolute -z-10 -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md uppercase tracking-wide">
                    <span>Recomendado</span>
                </div>
            )}

            {/* Título del plan */}
            <h3
                className={`
                    text-3xl font-bold uppercase tracking-wide text-center mb-2 pt-6 lg:pt-0
                    ${isHighlighted ? 'text-terciary' : 'text-blue-600'}
                `}
            >
                {title}
            </h3>



            {/* Precio con animación */}
            <div className="text-center mt-2 mb-6">
                <div
                    className="flex items-baseline justify-center gap-1"
                    key={`${moneda}-${periodo}`}
                    style={{ animation: 'fadeInUp 0.4s ease-out' }}
                >
                    <span className={`text-5xl font-extrabold transition-all duration-500 ease-out
                        ${isHighlighted ? 'text-terciary' : 'text-blue-600'}`}
                    >
                        {simbolo} {precio}
                    </span>
                    <span
                        className={`text-xs ml-1 font-semibold ${isHighlighted ? 'text-terciary' : 'text-blue-600'}`}>
                        *Incl.<br />IGV
                    </span>
                </div>

                {/* Subtítulo */}
                <p className="text-gray-500 text-sm text-center mt-2 leading-relaxed">
                    {subtitle}
                </p>
            </div>

            {/* Botón */}
            <div className="mb-6">
                {isHighlighted ? (
                    <ButtonPrimary colorFrom='#33D5FF' colorTo='#0095FF' to='/demo' className='text-center uppercase flex justify-center mx-10' children='Agendar una DEMO' />
                ) : (
                    <ButtonSecondary colorBack='#FFF' colorBorder='#33D5FF' to='/demo' className='text-center uppercase flex justify-center mx-10' children='Agendar una DEMO' />
                )}
            </div>

            {/* Features */}
            <ul className="flex-1 space-y-3">
                {features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                        <svg
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isHighlighted ? 'text-cyan-500' : 'text-cyan-400'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span
                            className={`
                                text-gray-700 text-sm sm:text-base
                                ${idx === 0 ? 'font-bold' : ''}
                            `}
                        >
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Plan