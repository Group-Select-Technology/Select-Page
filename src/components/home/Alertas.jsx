import { useState } from 'react'

const alertas = [
    {
        id: 1,
        titulo: 'Alerta de Envío SUNAT',
        descripcion: 'Asegura que tus comprobantes lleguen a tiempo para mantener tu negocio siempre al día y protegido.',
        descripcionCel: 'Asegura que tus comprobantes lleguen a tiempo.',
        icono: '/img/iconos/alerta-sunat.svg',
    },
    {
        id: 2,
        titulo: 'Control de Vencimientos',
        descripcion: 'Anticípate a la fecha de expiración de tus productos para gestionar su salida a tiempo y garantizar la seguridad de tus clientes.',
        descripcionCel: 'Anticípate a la fecha de expiración de tus productos.',
        icono: '/img/iconos/control-vencimientos.svg',
    },
    {
        id: 3,
        titulo: 'Agenda de Cobros',
        descripcion: 'Recordatorio de clientes que tienen pagos pendientes para que nunca olvides realizar una cobranza a tiempo.',
        descripcionCel: 'Recordatorio de clientes que tienen pagos pendientes.',
        icono: '/img/iconos/agenda-cobros.svg',
    },
    {
        id: 4,
        titulo: 'Alerta de Reposición',
        descripcion: 'Te muestra qué productos están por agotarse para que nunca pierdas una venta por falta de stock.',
        descripcionCel: 'Te muestra qué productos están por agotarse.',
        icono: '/img/iconos/alerta-reposicion.svg',
    },
]

const AlertaCard = ({ titulo, descripcion, descripcionCel, icono }) => {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className="relative w-48 h-48 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-2xl border-2 border-[#17359d] cursor-pointer overflow-hidden flex flex-col items-center justify-center transition-all duration-300 group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Estado normal: icono + titulo */}
            <div
                className={`absolute inset-0 flex flex-col items-center justify-center gap-3 px-3 transition-all duration-300 ${hovered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                    }`}
            >
                <img src={icono} alt={titulo} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-[#17359d]"
                    style={{ filter: 'invert(16%) sepia(90%) saturate(3000%) hue-rotate(224deg) brightness(60%) contrast(120%)' }}
                />
                <p className="text-[#17359d] font-bold text-sm sm:text-base text-center uppercase leading-tight">
                    {titulo}
                </p>
            </div>

            {/* Estado hover: fondo azul con titulo y descripcion */}
            <div
                className={`absolute inset-0 bg-[#17359d] flex flex-col items-center justify-center gap-3 px-5 py-4 transition-all duration-300 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
            >
                <h4 className="text-white font-bold text-base text-center uppercase leading-tight">
                    {titulo}
                </h4>
                <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
                {/* Descripción para celular */}
                <p className="md:hidden text-white/90 text-sm text-center font-bold">
                    {descripcionCel}
                </p>
                {/* Descripción para PC/laptop */}
                <p className="hidden md:block text-white/90 text-sm md:text-md text-center font-bold">
                    {descripcion}
                </p>
            </div>
        </div>
    )
}

const Alertas = () => {
    return (
        <section className="mx-4 sm:mx-8 md:mx-16 lg:mx-36 my-16 lg:my-24 lg:mb-40">
            <h2 className="text-primary font-bold text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-12 lg:mb-16 leading-tight uppercase text-center">
                Alertas Inteligentes
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
                {alertas.map((alerta) => (
                    <AlertaCard key={alerta.id} {...alerta} />
                ))}
            </div>
        </section>
    )
}

export default Alertas