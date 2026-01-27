import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Plan from '../components/Planes/Plan';

const Planes = () => {

    const [planes, setPlanes] = useState([]);
    const [moneda, setMoneda] = useState('soles');
    const [periodo, setPeriodo] = useState('mensual');
    const { tipo } = useParams();


    useEffect(() => {

        const getPlanes = async () => {

            try {
                const response = await axios.get('/data/planes.json');
                setPlanes(response.data);
            } catch (error) {
                console.log("Error al cargar planes detallados:", error);
                setPlanes([]);
            }
        }
        getPlanes();
    }, []);

    const planSeleccionado = planes.length > 0 ? planes[0][tipo] : null;

    // Mientras carga, muestra un loader
    if (planes.length === 0) {
        return (
            <section className='mt-16 mb-10 mx-8 md:mx-16 lg:mx-32 xl:mx-48'>
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
            </section>
        );
    }

    // Si el tipo no existe, muestra error
    if (!planSeleccionado) {
        return (
            <section className='mt-16 mb-10 mx-8 md:mx-16 lg:mx-32 xl:mx-48'>
                <div>
                    <h2 className='text-primary font-bold text-3xl mb-6 leading-tight uppercase text-center'>Tipo de plan no válido</h2>
                </div>
            </section>
        );
    }


    const { title, description, tiers } = planSeleccionado;


    return (
        <section className=' relative overflow-hidden'>
            <div className={`hidden lg:block absolute top-48 -right-36 w-64 h-96 rounded-full opacity-35 blur-3xl z-0 ${tipo === "farma" ? "bg-fourthary" : "bg-terciary"}`}></div>
            <div className={`hidden lg:block absolute top-48 -left-36 w-64 h-96 rounded-full opacity-35 blur-3xl z-0 ${tipo === "farma" ? "bg-fourthary" : "bg-terciary"}`}></div>

            <div className='mt-16 mb-10 mx-8 md:mx-16 lg:mx-32 xl:mx-48'>
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className={`font-bold lg:mx-96 text-4xl xl:text-5xl mb-5 uppercase ${tipo === "farma" ? "text-fourthary" : "text-primary"}`}>{title}</h2>
                    <p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto'>{description}</p>
                </div>

                {/* Controles de moneda y período */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:mb-24 lg:mt-12 lg:mr-96 lg:gap-52">
                    {/* Toggle Moneda - A la izquierda */}
                    <div className="flex items-center gap-2 border-gray-200 border-2 rounded-full p-1">
                        <button
                            onClick={() => setMoneda('soles')}
                            className={`px-5 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300
                            ${moneda === 'soles'
                                    ? 'text-white shadow-md'
                                    : 'bg-white text-gray-400 hover:text-secondary'
                                }`}
                            style={moneda === 'soles' ? { background: 'linear-gradient(90deg, #2ec6df, #34B1D1)' } : {}}
                        >
                            S/
                        </button>
                        <button
                            onClick={() => setMoneda('dolares')}
                            className={`px-5 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300
                            ${moneda === 'dolares'
                                    ? 'text-white shadow-md'
                                    : 'bg-white text-gray-400 hover:text-secondary'
                                }`}
                            style={moneda === 'dolares' ? { background: 'linear-gradient(90deg, #2BCCFF, #17359D)' } : {}}
                        >
                            $
                        </button>
                    </div>

                    {/* Toggle Período - Centrado */}
                    <div className="flex items-center bg-gray-100 rounded-full border-gray-200 border-2 p-1">
                        <button
                            onClick={() => setPeriodo('mensual')}
                            className={`px-5 sm:px-8 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-100
                            ${periodo === 'mensual'
                                    ? 'text-white shadow-md'
                                    : 'bg-transparent text-gray-500 hover:text-secondary'
                                }`}
                            style={periodo === 'mensual' ? { background: 'linear-gradient(90deg, #2ec6df, #34B1D1)' } : {}}
                        >
                            MENSUAL
                        </button>
                        <button
                            onClick={() => setPeriodo('anual')}
                            className={`px-5 sm:px-8 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-100
                            ${periodo === 'anual'
                                    ? 'text-white shadow-md'
                                    : 'bg-transparent text-gray-500 hover:text-secondary'
                                }`}
                            style={periodo === 'anual' ? { background: 'linear-gradient(90deg, #2BCCFF, #17359D)' } : {}}
                        >
                            ANUAL
                        </button>
                    </div>
                </div>

                {/* Grid de planes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-6 items-stretch xl:mx-32">
                    {tiers?.map((tier) => (
                        <Plan
                            key={tier.id}
                            tier={tier}
                            moneda={moneda}
                            periodo={periodo}
                        />
                    ))}
                </div>

                {/* Estilos de animación */}
                <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
            </div>
        </section>

    )
}

export default Planes