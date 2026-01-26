import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pregunta from '../common/Pregunta'
import ButtonPrimary from '../common/ButtonPrimary'

const Preguntas = () => {
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
    <section className="py-12 lg:py-48 px-6 sm:px-10 lg:px-32 xl:px-64 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4 mb-8 lg:mb-0">
            <h2 className="text-primary font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 uppercase">
              PREGUNTAS
              <br />
              FRECUENTES
            </h2>

            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Todo lo que necesitas saber, para dar el paso hacia la
              digitalización de tu farmacia.
            </p>

            <ButtonPrimary
              colorFrom="#17359d"
              colorTo="#17359d"
              className="uppercase px-7 py-3"
            >
              Ver más
            </ButtonPrimary>
          </div>

          <div className="lg:col-span-8">
            {faq.map((f) => (
              <Pregunta
                key={f.id}
                pregunta={f.pregunta}
                respuesta={f.respuesta}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Preguntas