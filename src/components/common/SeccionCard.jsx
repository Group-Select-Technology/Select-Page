import React, { useState, useEffect } from 'react'

// Mapeo de títulos a rutas de iconos
const iconos = {
    "Compras Sugeridas": "/img/iconos/compras-sugeridas.svg",
    "Gestión de Pedidos": "/img/iconos/gestion-pedidos.svg",
    "Compras XML": "/img/iconos/compras-xml.svg",
    "Medicamentos PreCargados": "/img/iconos/medicamentos-precargados.svg",
    "Transferencias entre Sucursales": "/img/iconos/transferencias-sucursales.svg",
    "Reportes avanzados de Compras": "/img/iconos/reportes-compras.svg",
    "Control de Psicotrópicos": "/img/iconos/control-psicotropicos.svg",
    "Venta por Fraccionamiento": "/img/iconos/venta-fraccionamiento.svg",
    "Búsqueda por Sustancia Activa": "/img/iconos/busqueda-sustancia.svg",
    "Gestión de Múltiples Cajas": "/img/iconos/gestion-cajas.svg",
    "Programa de Lealtad y Puntos": "/img/iconos/programa-lealtad.svg",
    "Kardex de Inventario Integral": "/img/iconos/kardex-inventario.svg",
};

// Icono por defecto
const iconoDefault = "/img/iconos/default.svg";

const SeccionCard = ({ tipo, secciones, seccionSeleccionada, onSeleccionSeccion }) => {
    const [animating, setAnimating] = useState(false);
    const [currentDetailed, setCurrentDetailed] = useState(seccionSeleccionada?.detailed || []);

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
                                        <h4 className={`${textoPrimario} font-bold text-lg md:text-xl`}>
                                            {detalle.title}
                                        </h4>
                                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                            {detalle.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Imagen */}
                            <div className="flex-1 flex justify-center">
                                <img
                                    src={detalle.img}
                                    alt={detalle.title}
                                    className="rounded-xl shadow-lg max-w-full h-auto max-h-64 md:max-h-80 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SeccionCard