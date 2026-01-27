import { useEffect, useState } from 'react'
import useCategoria from '../../hooks/useCategoria'
import axios from 'axios';
import BasicPlan from '../common/BasicPlan';
import ButtonPrimary from '../common/ButtonPrimary';

const Planes = () => {

    const { categoriaActiva } = useCategoria();
    const [planes, setPlanes] = useState([]);

    useEffect(() => {
        const getPlanes = async () => {
            try {
                const response = await axios.get('/data/basic-plan.json');
                setPlanes(response.data);
            } catch (error) {
                console.log("Error al cargar planes:", error);
                setPlanes([]);
            }
        }
        getPlanes();
    }, []);


    return (
        <section className='mt-16 sm:mt-24 md:mt-32 mb-10 p-6 sm:p-8 md:p-10'>
            <div>
                <h2 className='text-primary font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 leading-tight uppercase text-center'>Nuestros Planes</h2>
                <p className='text-center text-lg mt-5 lg:flex lg:flex-col lg:justify-center'>
                    Desde tu primera botica hasta grandes cadenas farmacéuticas. Selecciona el nivel de potencia
                    <span>que tu negocio necesita hoy.</span>
                </p>
            </div>
            {categoriaActiva === 'farmacia' ? (
                <>
                    <div className="mt-10 sm:mt-14">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center max-w-6xl mx-auto px-4">
                            {planes.map((plan) => (
                                <BasicPlan
                                    key={plan.id}
                                    categoria={categoriaActiva}
                                    {...plan}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center mt-20">
                        <ButtonPrimary colorFrom={'#33D5FF'} colorTo={'#1D98B7'} to='/demo'/>
                    </div>
                </>

            ) : (
                <>
                    <div className="mt-10 sm:mt-14">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 items-center max-w-6xl mx-auto px-4">
                            {planes.map((plan) => (
                                <BasicPlan
                                    key={plan.id}
                                    categoria={categoriaActiva}
                                    {...plan}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center mt-20">
                        <ButtonPrimary colorFrom={'#2EC6DF'} colorTo={'#1A2980'} to='/demo' />
                    </div>
                </>

            )}

        </section>
    )
}

export default Planes