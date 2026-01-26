import Beneficios from '../components/home/Beneficios'
import Destacadas from '../components/home/Destacadas'
import Hero from '../components/home/Hero'
import Planes from '../components/home/Planes'
import Rubros from '../components/home/Rubros'
import Trayectoria from '../components/home/Trayectoria'
import { CategoriaProvider } from '../context/CategoriaContext'

const Home = () => {
    return (
        <CategoriaProvider>
            <Hero />
            <Rubros />
            <Destacadas />
            <Beneficios />
            <Planes />
            <Trayectoria />
        </CategoriaProvider>
    )
}

export default Home