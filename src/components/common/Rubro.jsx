import React from 'react'
import ButtonPrimary from './ButtonPrimary';


const Rubro = (props) => {
    // Usar los nombres de props tal como llegan (en inglés)
    const { title, description, features, image, colorFrom, colorTo, overlayColor, onClick, isActive } = props;
    // Preferir los props en inglés si existen
    const displayTitle = title;
    const displayDescription = description;
    const displayFeatures = features;

    return (
        <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
            <div className={`relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-lg group transition-all duration-300 ${isActive ? ' ring-offset-4  scale-[1.02]' : 'hover:scale-[1.01]'}`}>
                {/* Imagen de fondo */}
                <img
                    src={image}
                    alt={displayTitle}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay con info, visible solo en hover */}
                <div
                    className="absolute inset-0 backdrop-blur-sm flex flex-col justify-center items-center text-center px-4 sm:px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: overlayColor || 'rgba(6, 182, 212, 0.8)' }}
                >
                    <h2 className="text-white font-extrabold text-lg sm:text-3xl lg:text-4xl mb-2 drop-shadow-lg uppercase">{displayTitle}</h2>
                    <p className="text-white text-sm sm:text-lg lg:text-xl mb-3 lg:mb-4 drop-shadow-lg font-semibold">{displayDescription}</p>
                    <ul className="text-white font-medium text-xs sm:text-base lg:text-lg space-y-1 sm:space-y-2 mb-6 lg:mb-10">
                        {displayFeatures && displayFeatures.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 ">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <button
                        className="bg-white text-cyan-500 font-bold px-8 py-2 rounded-full shadow-md">
                        VER MÁS
                    </button>
                </div>
            </div>

            {/* Botón debajo de la imagen */}
            <ButtonPrimary
                colorFrom={colorFrom}
                colorTo={colorTo}
                className={`mt-4 sm:mt-6 px-8 sm:px-12 py-2 sm:py-3 text-sm sm:text-base transition-all duration-300 ${isActive ? 'scale-105 shadow-lg' : ''}`}
            >
                {displayTitle}
            </ButtonPrimary>
        </div>
    )
}

export default Rubro