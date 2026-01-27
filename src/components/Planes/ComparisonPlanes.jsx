import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PlanCompare from '../common/PlanCompare';

const ComparisonPlanes = () => {

    const [plans, setPlans] = useState([]);
    const [features, setFeatures] = useState([]);
    const { tipo } = useParams();

    useEffect(() => {

        const getFeatures = async () => {
            try {
                const response = await axios.get('/data/plans_comparison.json');
                setPlans(response.data.plans);
                setFeatures(response.data.features);    
            } catch (error) {
                console.log("Error al cargar características de comparación:", error);
                setPlans([]);
                setFeatures([]);
            }
        }

        getFeatures();

    }, []);

    return (
        <section className='my-20 px-4 lg:px-20'>
            <h2 className={`font-bold text-center text-3xl lg:text-4xl mb-10 uppercase ${tipo === "farma" ? "text-fourthary" : "text-primary"}`}>
                Compara los planes
            </h2>

            <div className="max-w-6xl mx-auto">
                <PlanCompare plans={plans} features={features} tipo={tipo} />
            </div>
        </section>
    )
}

export default ComparisonPlanes