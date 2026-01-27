import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pregunta from '../common/Pregunta'

const ListaPreguntas = () => {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    const getFaq = async () => {
      try {
        const response = await axios.get('/data/faq.json');
        setFaq(response.data);
      } catch (error) {
        console.log("Error al cargar faq:", error);
        setFaq([]);
      }
    }
    getFaq();
  }, []);

  return (
    <section className="py-12 lg:py-16 px-6 sm:px-10 lg:px-32 xl:px-64">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 lg:mb-12">
          <h1 className="text-primary font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 uppercase">
            Preguntas Frecuentes
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Resolvemos tus dudas para que empieces a transformar tu botica hoy
            mismo con total tranquilidad.
          </p>
        </div>

        <div>
          {faq.map((f) => (
            <Pregunta
              key={f.id}
              pregunta={f.pregunta}
              respuesta={f.respuesta}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ListaPreguntas
