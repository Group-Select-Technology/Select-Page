import React, { useEffect, useState } from 'react'
import IntroSistema from '../components/sistema/IntroSistema'
import DestacadosSistema from '../components/sistema/DestacadosSistema'
import axios from 'axios';

const Sistema = () => {
    const [sistema, setSistema] = useState([]);
    useEffect(() => {

        const getSistemaDetallado = async () => {
            try {
                const response = await axios.get('/data/system-detail.json');
                setSistema(response.data);
            } catch (error) {
                console.log("Error al cargar sistema detallado:", error);
                setSistema([]);
            }
        }

        getSistemaDetallado();

    }, []);

    if (sistema.length === 0) {
        return (
            <section className='mt-16 mb-10 mx-8 md:mx-16 lg:mx-32 xl:mx-48'>
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
            </section>
        );
    }

    return (
        <>
            <IntroSistema sistema={sistema} />
            <DestacadosSistema />
        </>
    )
}

export default Sistema