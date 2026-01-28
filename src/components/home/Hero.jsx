import { useState, useEffect } from "react";
import ButtonPrimary from "../common/ButtonPrimary"
import ButtonSecondary from "../common/ButtonSecondary"
import useCategoria from "../../hooks/useCategoria";

const Hero = () => {

    const {categoriaActiva} = useCategoria('farmacia');
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "img/banner_1.png",
        "img/banner_1.png",
        "img/banner_1.png",
    ];

    const imagesMobile = [
        "img/prueba3.png",
        "img/prueba3.png",
        "img/prueba3.png",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const getSlideStyles = (index) => {
        if (index === currentIndex) {
            return "z-20 scale-100 opacity-100 translate-x-0 translate-y-0";
        }
        if (index === (currentIndex + 1) % images.length) {
            return "z-10 scale-95 opacity-60 translate-x-8 translate-y-3";
        }
        return "z-0 scale-90 opacity-0 hidden";
    };

    return (
        <section className="relative overflow-hidden">
            {/* Versión Desktop */}
            <div className="hidden lg:flex justify-between items-center mt-32 mb-10 w-full max-w-7xl mx-auto px-8 relative min-h-[600px]">
                <div className="w-1/2 z-30">
                    <h1 className="text-primary font-bold text-5xl xl:text-6xl mb-6 leading-tight">
                        <span>UN SISTEMA DE</span> <br />
                        <span>GESTIÓN INTELIGENTE</span><br />
                        <span>PARA EL CONTROL DE</span><br />
                        <span>TU NEGOCIO</span>
                    </h1>
                    <p className="text-primary mb-10 text-lg xl:text-xl max-w-lg">
                        Olvídate de las mermas, el desorden en el inventario
                        y los errores en facturación. Con Select, gestionas tu negocio
                        de manera eficiente y precisa.
                    </p>
                    <div className="flex gap-6">
                        <ButtonPrimary colorFrom="#2EC6DF" colorTo="#1A2980" to="/demo">
                            AGENDA UNA DEMO
                        </ButtonPrimary>
                        <ButtonSecondary colorBack="#FFF" colorBorder="#17359d" to={categoriaActiva === "farmacia" ? "planes/farma" : "planes/pos"}>
                            VER PLANES
                        </ButtonSecondary>
                    </div>
                </div>
                
                {/* Carousel Desktop */}
                <div className="w-1/2 relative flex flex-col items-center justify-center">
                    {/* Círculo difuminado de fondo */}
                    <div className="absolute -top-4 -right-8 w-72 h-72 rounded-full bg-blue-300 opacity-100 blur-3xl z-0"></div>
                    
                    <div className="relative w-full max-w-lg h-[500px]">
                        {images.map((img, index) => (
                            <img 
                                key={index}
                                src={img} 
                                alt={`Banner ${index}`}
                                className={`absolute top-0 right-0 w-full h-full object-contain transition-all duration-700 ease-in-out rounded-[2.5rem] ${getSlideStyles(index)}`}
                            />
                        ))}
                    </div>

                    {/* Dots Desktop */}
                    <div className="flex justify-center gap-3 mt-8 z-30">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
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
            </div>

            {/* Versión Móvil y Tablet - Diseño mejorado */}
            <div className="lg:hidden">
                {/* Imagen hero con overlay degradado */}
                <div className="relative w-full h-64 sm:h-80 md:h-96">
                    {imagesMobile.map((img, index) => (
                        <img 
                            key={index}
                            src={img} 
                            alt={`Banner ${index}`} 
                            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${
                                currentIndex === index ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                     ))}
                   
                    {/* Degradado sutil en la parte inferior de la imagen */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
                </div>

                {/* Contenido principal */}
                <div className="px-6 sm:px-10 md:px-16 -mt-6 relative z-10">
                    {/* Título con mejor tipografía */}
                    <h1 className="text-primary font-extrabold text-2xl sm:text-3xl md:text-4xl text-center leading-snug mb-4">
                        UN SISTEMA DE <br />
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-800 bg-clip-text text-transparent">
                            GESTIÓN INTELIGENTE
                        </span><br />
                        PARA EL CONTROL DE <br />
                        TU NEGOCIO
                    </h1>

                    {/* Descripción más legible */}
                    <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed">
                        Olvídate de las mermas, el desorden en el inventario y los errores en facturación. 
                        Con Select, gestionas tu negocio de manera eficiente y precisa.
                    </p>

                    {/* Botones con mejor espaciado */}
                    <div className="flex flex-col gap-3 max-w-xs mx-auto">
                        <ButtonPrimary colorFrom="#2EC6DF" colorTo="#1A2980" className="w-full py-4 text-center" to="demo">
                            AGENDA UNA DEMO
                        </ButtonPrimary>
                        <ButtonSecondary colorBack="#FFF" colorBorder="#17359d" to={categoriaActiva === "farmacia" ? "planes/farma" : "planes/pos"} className="w-full py-4 text-center">
                            VER PLANES
                        </ButtonSecondary>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero