import React, { useState, useEffect } from 'react'

// Mapeo de títulos a rutas de iconos
const iconos = {
    "Compras Sugeridas": "/img/iconos/compras-sugeridas.svg",
    "Gestión de Pedidos": "/img/iconos/gestion-pedidos.svg",
    "Compras XML": "/img/iconos/compras-xml.svg",
    "Medicamentos PreCargados": "/img/iconos/medicamentos-precargados.svg",
    "Transferencias entre Sucursales": "/img/iconos/transferencias-sucursales.svg",
    "Dashboard Ejecutivo": "/img/iconos/dashboard-ejecutivo.svg",
    "Agilidad Operativa": "/img/iconos/teclas-rapidas.svg",
    "Nuevo Punto de Venta": "/img/iconos/venta-fraccionamiento.svg",
    "Búsqueda por Principio Activo": "/img/iconos/busqueda-sustancia.svg",
    "Gestión de Caja y Caja Bóveda": "/img/iconos/gestion-cajas.svg",
    "Programa de Lealtad y Puntos": "/img/iconos/programa-lealtad.svg",
    "Kardex de Inventario Integral": "/img/iconos/kardex-inventario.svg",
};

// Icono por defecto
const iconoDefault = "/img/iconos/default.svg";

const SeccionCard = ({ tipo, secciones, seccionSeleccionada, onSeleccionSeccion }) => {
    const [animating, setAnimating] = useState(false);
    const [currentDetailed, setCurrentDetailed] = useState(seccionSeleccionada?.detailed || []);
    const [modalImage, setModalImage] = useState(null); // Estado para el modal de imagen

    // Colores según el tipo
    const colorPrimario = tipo === "farma" ? "bg-fourthary" : "bg-primary";
    const textoPrimario = tipo === "farma" ? "text-fourthary" : "text-primary";
    const borderPrimario = tipo === "farma" ? "border-fourthary" : "border-primary";
    
    // Filtros CSS para colorear los iconos SVG
    // Primary (#17359d): azul oscuro
    // Fourthary (#1d98b7): azul verdoso
    const filtroColorPrimario = tipo === "farma" 
        ? "invert(49%) sepia(65%) saturate(485%) hue-rotate(145deg) brightness(91%) contrast(93%)"
        : "invert(17%) sepia(89%) saturate(2186%) hue-rotate(220deg) brightness(93%) contrast(97%)";
    const filtroBlanco = "brightness(0) invert(1)";

    useEffect(() => {
        if (seccionSeleccionada) {
            setAnimating(true);
            const timeout = setTimeout(() => {
                setCurrentDetailed(seccionSeleccionada.detailed || []);
                setAnimating(false);
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [seccionSeleccionada]);

    const obtenerIcono = (titulo) => {
        return iconos[titulo] || iconoDefault;
    };

    const openModal = (detalle) => {
        setModalImage(detalle);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div>
            {/* Iconos de secciones */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {secciones.map((seccion) => {
                    const isSelected = seccionSeleccionada?.id === seccion.id;
                    return (
                        <button
                            key={seccion.id}
                            onClick={() => onSeleccionSeccion(seccion)}
                            className={`
                                flex flex-col items-center justify-center
                                w-24 h-28 md:w-32 md:h-36 lg:w-36 lg:h-40
                                rounded-2xl border-2 
                                transition-all duration-300 ease-in-out
                                cursor-pointer
                                p-2
                                ${isSelected
                                    ? `${colorPrimario} text-white border-transparent shadow-lg transform scale-105`
                                    : `bg-white ${textoPrimario} ${borderPrimario} hover:shadow-md hover:scale-102`
                                }
                            `}
                        >
                            <div className="mb-1">
                                <img 
                                    src={obtenerIcono(seccion.title)} 
                                    alt={seccion.title}
                                    className="w-8 h-8 md:w-10 md:h-10"
                                    style={{ 
                                        filter: isSelected ? filtroBlanco : filtroColorPrimario
                                    }}
                                />
                            </div>
                            <span className="text-[9px] md:text-xs font-semibold text-center px-1 uppercase leading-tight break-words hyphens-auto">
                                {seccion.title}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Contenido detallado */}
            {seccionSeleccionada && (
                <div 
                    className={`
                        bg-[#f3faff] rounded-3xl p-6 md:p-10 
                        transition-all duration-300 ease-in-out
                        ${animating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}
                    `}
                >
                    {currentDetailed.map((detalle, index) => (
                        <div
                            key={index}
                            className={`
                                flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                                items-center gap-6 md:gap-10
                                ${index !== currentDetailed.length - 1 ? 'mb-10' : ''}
                            `}
                        >
                            {/* Texto */}
                            <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}>
                                <div className="flex items-start gap-2 mb-2">
                                    <span className={`${textoPrimario} text-xl mt-1`}>•</span>
                                    <div>
                                        <h4 className={`${textoPrimario} font-bold text-lg md:text-2xl md:mb-3`}>
                                            {detalle.title}
                                        </h4>
                                        <p className="text-gray-700 text-base 2xl:text-lg leading-relaxed">
                                            {detalle.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Imagen */}
                            <div className="flex-1 flex justify-center items-center">
                                <img
                                    src={detalle.img}
                                    alt={detalle.title}
                                    onClick={() => openModal(detalle)}
                                    className="rounded-xl shadow-lg max-w-full max-h-56 md:max-h-72 object-contain cursor-pointer
                                               transition-transform duration-300 hover:scale-105 hover:shadow-2xl
                                               animate-pulse-shadow"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal para imagen ampliada */}
            {modalImage && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 md:p-8"
                    onClick={closeModal}
                >
                    <div 
                        className="relative bg-white rounded-xl shadow-2xl max-w-6xl w-auto max-h-[92vh] overflow-hidden flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botón cerrar */}
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-white bg-black bg-opacity-50 hover:bg-opacity-70 
                                     text-2xl font-bold z-10 w-9 h-9 flex items-center justify-center rounded-full 
                                     transition-all duration-200"
                        >
                            ×
                        </button>

                        {/* Header con título */}
                        <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-4 border-b border-gray-200">
                            <h3 className={`${textoPrimario} font-bold text-lg md:text-xl text-center`}>
                                {modalImage.title}
                            </h3>
                        </div>

                        {/* Imagen - área principal */}
                        <div className="flex justify-center items-center p-4 md:p-6 bg-gray-50 overflow-auto">
                            <img
                                src={modalImage.img}
                                alt={modalImage.title}
                                className="rounded-lg shadow-lg max-w-full h-auto max-h-[65vh] object-contain"
                            />
                        </div>

                        {/* Footer con descripción */}
                        <div className="bg-white px-6 py-4 border-t border-gray-200">
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                                {modalImage.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SeccionCard