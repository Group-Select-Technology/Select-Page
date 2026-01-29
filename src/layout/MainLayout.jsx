import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import WhatsAppIcon from '../components/common/WhatsappIcon'
import ScrollToTop from '../components/common/ScrollToTop'

const MainLayout = () => {
    return (
        <>
            <Header />
                <main className="lg:pt-28">
                    <Outlet />
                    <ScrollToTop />
                    <WhatsAppIcon />
                </main>
                
            <Footer />
        </>
    )
}

export default MainLayout