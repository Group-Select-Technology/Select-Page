import Beneficios from '../components/home/Beneficios'
import Destacadas from '../components/home/Destacadas'
import Hero from '../components/home/Hero'
import Rubros from '../components/home/Rubros'
import { CategoriaProvider } from '../context/CategoriaContext'

const Home = () => {
    return (
        <CategoriaProvider>
            <Hero />
            <Rubros />
            <Destacadas />
            <Beneficios />
        </CategoriaProvider>
    )
}

export default Home