import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import WhatsAppIcon from '../components/common/WhatsappIcon'

const MainLayout = () => {
    return (
        <>
            <Header />
                <main className="lg:pt-28">
                    <Outlet />
                    <WhatsAppIcon />
                </main>
                
            <Footer />
        </>
    )
}

export default MainLayout