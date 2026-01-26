import React from 'react'
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

const BasicPlan = (props) => {

    const { title, description, features, isHighlighted } = props;

    return (
        <div
            className={`
                bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:py-14
                transition-all duration-300 ease-in-out 
                hover:scale-105 hover:shadow-xl
                flex flex-col
                ${isHighlighted
                    ? 'scale-95 sm:scale-100 lg:scale-100'
                    : 'scale-85 sm:scale-95'
                }
            `}
        >
            {/* Título */}
            <h3
                className={`
                    text-2xl sm:text-3xl font-bold uppercase tracking-wide text-center mb-4
                    ${isHighlighted ? 'text-terciary' : 'text-blue-600'}
                `}
            >
                {title}
            </h3>

            {/* Descripción */}
            <p className="text-gray-500 text-sm text-center mb-6 leading-relaxed">
                {description}
            </p>

            {/* Lista de características */}
            <ul className="flex-1 space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
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
                                ${index === features.length - 1 ? 'italic text-cyan-600' : ''}
                                ${index === 0 ? 'font-bold' : ''}
                            `}
                        >
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            {/* <div className='mx-5'> */}
                {isHighlighted ? (
                    <ButtonPrimary colorFrom='#33D5FF' colorTo='#0095FF' to='/planes' className='w-auto text-center m-5 uppercase' children='Ver Precios'/>
                ) : (
                    <ButtonSecondary colorBack='#FFF' colorBorder='#33D5FF' to='/planes' className='w-auto text-center m-5 uppercase' children='Ver Precios'/>
                )}
            {/* </div> */}

        </div>
    )
}

export default BasicPlan