import React, { useState, useEffect } from 'react'

const Memorias = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "/img/memorias/memoria-1.png",
        "/img/memorias/memoria-2.png",
        "/img/memorias/memoria-3.png",
        "/img/memorias/memoria-4.jpg",
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

    const getDesktopStyles = (index) => {
        const length = images.length;
        let diff = (index - currentIndex);
        if (diff < -1) diff += length;
        if (diff > 1) diff -= length;

        if (index === currentIndex) return "z-30 scale-100 opacity-100 translate-x-0";

        if ((currentIndex + 1) % length === index) return "z-20 scale-90 opacity-60 translate-x-[60%]";

        if ((currentIndex - 1 + length) % length === index) return "z-20 scale-90 opacity-60 -translate-x-[60%]";

        return "z-0 scale-75 opacity-0 hidden";
    };


    return (
        <section className='py-12 lg:py-16 px-6 sm:px-10 lg:px-32 xl:px-64 overflow-hidden'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-primary font-bold text-2xl sm:text-3xl lg:text-4xl mb-10 lg:mb-16 uppercase text-center'>
                    Memorias Select
                </h2>

                {/* --- MOBILE VIEW (Carousel Simple) --- */}
                <div className='lg:hidden relative w-full overflow-hidden rounded-2xl shadow-lg mb-6'>
                    <div
                        className='flex transition-transform duration-700 ease-in-out'
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className='min-w-full h-64 sm:h-80 bg-gray-200 flex items-center justify-center'
                            >
                                <img
                                    src={image}
                                    alt={`Memoria ${index + 1}`}
                                    className='w-full h-full object-cover'
                                    onError={(e) => {
                                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="20"%3EImagen de Memoria%3C/text%3E%3C/svg%3E';
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- DESKTOP VIEW (Center Focus Carousel) --- */}
                <div className='hidden lg:flex relative items-center justify-center h-[500px] mb-8'>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 bottom-0 m-auto w-[600px] h-[400px] transition-all duration-700 ease-in-out rounded-2xl overflow-hidden shadow-xl ${getDesktopStyles(index)}`}
                        >
                            <img
                                src={image}
                                alt={`Memoria Desktop ${index}`}
                                className='w-full h-full object-cover'
                                onError={(e) => { e.target.src = 'data:image/svg+xml,...'; }}
                            />
                        </div>
                    ))}
                </div>

                <div className='flex justify-center gap-3'>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${currentIndex === index
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
