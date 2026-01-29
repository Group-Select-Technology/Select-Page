import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SeccionCard from '../common/SeccionCard';

const DestacadosSistema = () => {
    const { tipo } = useParams();

    const [secciones, setSecciones] = useState([]);
    const [seccionSeleccionada, setSeccionSeleccionada] = useState(null);

    useEffect(() => {
        const getSecciones = async () => {
            try {
                const response = await axios.get('/data/sections.json');
                // Filtrar según el tipo: farma -> farmacia, pos -> generales
                const categoriaFiltro = tipo === "farma" ? "farmacia" : "generales";
                const seccionesFiltradas = response.data.filter(
                    (seccion) => seccion.category === categoriaFiltro
                );
                setSecciones(seccionesFiltradas);
                // Seleccionar la primera sección por defecto
                if (seccionesFiltradas.length > 0) {
                    setSeccionSeleccionada(seccionesFiltradas[0]);
                }
            } catch (error) {
                console.log("Error al cargar secciones:", error);
                setSecciones([]);
            }
        }

        getSecciones();
    }, [tipo]);

    const handleSeleccionSeccion = (seccion) => {
        setSeccionSeleccionada(seccion);
    };

    return (
        <section className='mt-8 mb-20'>
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <h3 className={`text-3xl font-bold uppercase text-center mb-8 ${tipo === "farma" ? "text-fourthary" : "text-primary"}`}>
                    ¿Qué puedo hacer con el sistema?
                </h3>
                
                <SeccionCard
                    tipo={tipo}
                    secciones={secciones}
                    seccionSeleccionada={seccionSeleccionada}
                    onSeleccionSeccion={handleSeleccionSeccion}
                />
            </div>
        </section>
    )
}

export default DestacadosSistema