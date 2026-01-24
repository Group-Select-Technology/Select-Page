import React from 'react'

const Destacada = (props) => {

    const {title, description, image, isReversed } = props;

    return (
        <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-12 lg:py-16 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
            {/* Imagen - 3/5 del ancho */}
            <div className="w-full lg:w-3/5">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-auto rounded-2xl shadow-lg"
                />
            </div>

            {/* Contenido - 2/5 del ancho */}
            <div className={`w-full lg:w-2/5 ${isReversed ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                <h3 className="text-primary font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 uppercase">
                    {title}
                </h3>

                <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Destacada