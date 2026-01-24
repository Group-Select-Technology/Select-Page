
import { useEffect, useState } from 'react';
import Rubro from '../common/Rubro';
import axios from 'axios';
import useCategoria from '../../hooks/useCategoria';

const Rubros = () => {
    const [sistemas, setSistemas] = useState([]);
    const { categoriaActiva, setCategoriaActiva } = useCategoria();

    useEffect(() => {

        const getRubros = async () => {
            try {
                const response = await axios.get('/data/system.json');
                setSistemas(response.data);

            } catch (error) {
                console.error('Error al cargar sistemas:', error);
                setSistemas([]);
            }
        }

        getRubros();

    }, []);

    // Colores para cada sistema
    const getColors = (id) => {
        if (id === 1) {
            return {
                colorFrom: '#33D5FF',
                colorTo: '#1D98B7',
                overlayColor: 'rgba(6, 182, 212, 0.85)' // Celeste
            };
        }
        return {
            colorFrom: '#3388FF',
            colorTo: '#17359D',
            overlayColor: 'rgba(23, 53, 157, 0.85)' // Azul #17359d
        };
    };

    // Mapeo de id a categoría
    const getCategoriaById = (id) => {
        return id === 1 ? 'farmacia' : 'generales';
    };

    const handleRubroClick = (id) => {
        setCategoriaActiva(getCategoriaById(id));
    };

    return (
        <section className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 my-16 lg:my-32">
            <div>
                <h2 className="text-primary font-bold text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-12 lg:mb-16 leading-tight uppercase text-center">Encuentra la solución perfecta
                    <br />
                    para tu tipo de negocio
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-8 lg:gap-16">
                    {sistemas.map((sistema) => (
                        <Rubro
                            key={sistema.id}
                            {...sistema}
                            {...getColors(sistema.id)}
                            onClick={() => handleRubroClick(sistema.id)}
                            isActive={categoriaActiva === getCategoriaById(sistema.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Rubros