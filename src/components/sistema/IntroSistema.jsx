import { useParams } from 'react-router-dom'

const IntroSistema = ({sistema}) => {

    const { tipo } = useParams();

    const sistemaSeleccionado = sistema.length > 0 ? sistema[0][tipo] : null;
    const { title, subtitle, description, image } = sistemaSeleccionado;

    return (
        <section className='mt-16 mb-10 mx-2 md:mx-16 lg:mx-32 xl:mx-48'>
            <div>
                <div>
                    <h1 className={`text-5xl font-bold uppercase text-center mb-2 ${tipo === "farma" ? "text-fourthary" : "text-primary"}`}>
                        {title}
                    </h1>
                    <h2 className={`text-2xl font-bold uppercase text-center mb-2 ${tipo === "farma" ? "text-fourthary" : "text-primary"}`}>
                        {subtitle}
                    </h2>
                    <p className='text-base text-center mb-2 lg:mx-16 xl:mx-96'>
                        {description}
                    </p>
                </div>
                <div className='my-8'>
                    <img src={image} alt={title} className='mx-auto' />
                </div>
            </div>
        </section>
    )
}

export default IntroSistema