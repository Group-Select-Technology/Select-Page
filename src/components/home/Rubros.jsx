
import { useEffect, useState } from 'react';
import Rubro from '../common/Rubro';
import axios from 'axios';

const Rubros = () => {
    const [sistemas, setSistemas] = useState([]);

    useEffect(() => {

        const getRubros = async () => {
            try {
                const response = await axios.get('/data/system.json');
                setSistemas(response.data);
            } catch (error) {
                console.log(error.response.data.msg);
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
            colorFrom: '#2EC6DF', 
            colorTo: '#1A2980',
            overlayColor: 'rgba(23, 53, 157, 0.85)' // Azul #17359d
        };
    };

    return (
        <section className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 my-16 lg:my-32">
            <div>
                <h3 className="text-primary font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-4xl mb-8 sm:mb-12 lg:mb-16 leading-tight uppercase text-center">Encuentra la solución perfecta
                    <br />
                    para tu tipo de negocio
                </h3>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-8 lg:gap-16">
                    {sistemas.map((sistema) => (
                        <Rubro
                            key={sistema.id}
                            {...sistema}
                            {...getColors(sistema.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Rubros