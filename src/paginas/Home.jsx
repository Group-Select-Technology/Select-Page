import Beneficios from '../components/home/Beneficios'
import Destacadas from '../components/home/Destacadas'
import Hero from '../components/home/Hero'
import Planes from '../components/home/Planes'
import Rubros from '../components/home/Rubros'
import Trayectoria from '../components/home/Trayectoria'
import Preguntas from "../components/home/Preguntas"
import { CategoriaProvider } from '../context/CategoriaContext'
import WhatsappIcon from '../components/common/WhatsappIcon'

const Home = () => {
    return (
        <CategoriaProvider>
            <Hero />
            <Rubros />
            <Destacadas />
            <Beneficios />
            <Planes />
            <Trayectoria />
            <Preguntas />
            <WhatsappIcon />
        </CategoriaProvider>
    )
}

export default Home