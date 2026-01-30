import React, { useEffect, useState } from 'react'
import Destacada from '../common/Destacada'
import axios from 'axios';
import useCategoria from '../../hooks/useCategoria';
import ButtonPrimary from '../common/ButtonPrimary';

const Destacadas = () => {

    const [secciones, setSecciones] = useState([]);
    const [seccionesFiltradas, setSeccionesFiltradas] = useState([]);
    const [animating, setAnimating] = useState(false);
    const { categoriaActiva } = useCategoria();

    useEffect(() => {

        const getSecciones = async () => {
            try {
                const response = await axios.get('/data/sections.json');
                setSecciones(response.data);
            } catch (error) {
                console.log("Error al cargar secciones:", error);
                setSecciones([]);
            }
        }

        getSecciones();

    }, []);

    // Filtrar secciones cuando cambia la categoría
    useEffect(() => {
        // Iniciar animación de salida
        setAnimating(true);

        // Después de la animación, actualizar contenido
        const timer = setTimeout(() => {
            const filtradas = secciones.filter(
                (seccion) => seccion.category === categoriaActiva
            ).filter(seccion => seccion.isHighlighted === true );
            
            setSeccionesFiltradas(filtradas);
            setAnimating(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [categoriaActiva, secciones]);

    // Título dinámico según la categoría
    const getTitulo = () => {
        return categoriaActiva === 'farmacia'
            ? 'Secciones destacadas - Farmacia'
            : 'Secciones destacadas - Generales';
    };


    return (
        <>
            <section>
                <div className="info-titulo mb-12 lg:mb-16 px-10 lg:px-0">
                    <h2 className="text-primary font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 leading-tight uppercase text-center">
                        {getTitulo()}
                    </h2>
                    <p className="text-center text-lg">
                        Monitorea tu stock en tiempo real. Recibe alertas
                    </p>
                </div>

                <div className={`w-full max-w-7xl mx-auto px-4 sm:px-8 transition-all duration-300 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                    {seccionesFiltradas.map((seccion, index) => (
                        <Destacada
                            key={seccion.id}
                            {...seccion}
                            isReversed={index % 2 !== 0}
                        />
                    ))}
                </div>

                <div className="flex justify-center">
                    {categoriaActiva === 'farmacia' ? (
                        <ButtonPrimary
                            to="/sistema/farma"
                            colorFrom={"#33D5FF"}
                            colorTo={"#1D98B7"}
                            className={"uppercase mx-auto mt-12 mb-16 px-8 py-3 text-sm sm:text-base"}
                        >
                            Ver Más
                        </ButtonPrimary>
                    ) : (
                        <ButtonPrimary
                            to="/sistema/pos"
                            colorFrom={"#17359d"}
                            colorTo={"#17359d"}
                            className={"uppercase mx-auto mt-12 mb-16 px-8 py-3 text-sm sm:text-base"}
                        >
                            Ver Más
                        </ButtonPrimary>
                    )}

                </div>


            </section>
        </>
    )
}

export default Destacadas