import { useState } from "react"
import { Link } from "react-router-dom"
import ButtonPrimary from "./ButtonPrimary"


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="py-7">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/">
                    <img src="img/logo_full.png" alt="Logo" className="p-0 m-0 w-48" />
                </Link>

                {/* Botón hamburguesa - visible solo en móvil */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-primary rounded-full my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-primary rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>

                {/* Navegación desktop */}
                <nav className="hidden lg:flex gap-10 text-xl items-center text-primary font-medium">
                    <Link to="/nosotros" className="hover:underline">Nosotros</Link>
                    <Link to="/sistema" className="hover:underline">Sistema</Link>
                    <Link to="/planes" className="hover:underline">Planes</Link>
                    <Link to="/contacto" className="hover:underline">Contacto</Link>
                    <ButtonPrimary colorFrom="#2EC6DF" colorTo="#1A2980">
                        AGENDA UNA DEMO
                    </ButtonPrimary>
                </nav>

                {/* Menú móvil desplegable */}
                <div className={`
                    lg:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50
                    transform transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    {/* Botón cerrar */}
                    <button
                        onClick={toggleMenu}
                        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Links del menú móvil */}
                    <nav className="flex flex-col gap-6 pt-20 px-8 text-lg text-primary font-medium">
                        <Link to="/nosotros" className="py-2 border-b border-gray-100 hover:text-cyan-500 transition-colors" onClick={toggleMenu}>Nosotros</Link>
                        <Link to="/sistema" className="py-2 border-b border-gray-100 hover:text-cyan-500 transition-colors" onClick={toggleMenu}>Sistema</Link>
                        <Link to="/planes" className="py-2 border-b border-gray-100 hover:text-cyan-500 transition-colors" onClick={toggleMenu}>Planes</Link>
                        <Link to="/contacto" className="py-2 border-b border-gray-100 hover:text-cyan-500 transition-colors" onClick={toggleMenu}>Contacto</Link>
                        <div className="pt-4">
                            <ButtonPrimary colorFrom="#2EC6DF" colorTo="#1A2980" onClick={toggleMenu}>
                                AGENDA UNA DEMO
                            </ButtonPrimary>
                        </div>
                    </nav>
                </div>

                {/* Overlay oscuro cuando el menú está abierto */}
                {isMenuOpen && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black/50 z-40"
                        onClick={toggleMenu}
                    ></div>
                )}
            </div>
        </header>
    )
}

export default Header