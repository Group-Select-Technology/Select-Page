import { useState } from 'react'
import { Link } from 'react-router-dom'

const FooterAccordion = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="border-b border-white/20 lg:border-none">
			{/* Header - clickeable solo en móvil */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex justify-between items-center py-3 lg:py-0 lg:cursor-default"
			>
				<h2 className="uppercase font-bold text-lg">{title}</h2>
				{/* Flecha - solo visible en móvil */}
				<svg
					className={`w-5 h-5 lg:hidden transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
				</svg>
			</button>
			{/* Contenido - siempre visible en desktop, colapsable en móvil */}
			<div className={`overflow-hidden transition-all duration-300 lg:overflow-visible lg:max-h-none ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'} lg:pb-0`}>
				{children}
			</div>
		</div>
	)
}

const Footer = () => {
	return (
		<footer className="py-8 bg-primary">
			<div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center lg:justify-between">
					{/* Logo Section */}
					<Link to="/">
						<div className="flex justify-center lg:justify-start mb-0 lg:mb-0 shrink-0">
							<img src="/img/logo_vertical.png" alt="Logo Footer" className="md:w-52 lg:w-48 xl:w-56" />
						</div>
					</Link>

					{/* Links Section */}
					<div className="w-full lg:flex-1 lg:flex lg:gap-8 xl:gap-12 text-white lg:justify-end">
					<FooterAccordion title="Nosotros">
						<ul className="pl-0 lg:mt-2">
							<li className="mb-2"><Link to="/" className="mb-2">Inicio</Link></li>
							<li className="mb-2"><Link to="/nosotros" className="mb-2">Misión y Visión</Link></li>
							<li className="mb-2"><Link to="/preguntas-frecuentes" className="mb-2">Preguntas Frecuentes</Link></li>
						</ul>
					</FooterAccordion>

					<FooterAccordion title="Servicios">
						<ul className="pl-0 lg:mt-2">
							<li className="mb-2"><Link to="/sistema/farma" className="mb-2">Sistema</Link></li>
							<li className="mb-2"><Link to="/planes/farma" className="mb-2">Planes</Link></li>
						</ul>
					</FooterAccordion>

					<FooterAccordion title="Soporte">
						<ul className="pl-0 lg:mt-2 mb-4">
							<li>
								<a href="https://wa.me/51936267774" target='_blank'>+51 936 267 774</a>
							</li>
						</ul>
						<h3 className="uppercase font-bold text-lg mb-1">Cobranzas</h3>
						<ul className="pl-0">
							<li>
								<a href="https://wa.me/51904720983" target='_blank'>+51 904 720 983</a>
							</li>
						</ul>
					</FooterAccordion>

					<FooterAccordion title="Contáctanos">
						<ul className="pl-0 lg:mt-2">
							<li className="mb-2 flex items-center gap-2">
								<img className="w-4" src="/img/icono_mail.png" alt="Icono Mail" />
								<a
									href="mailto:selectperu1@gmail.com"
									className="hover:underline"
								>
									selectperu1@gmail.com
								</a>
							</li>
							<li className="mb-2 flex items-center gap-2">
								<img className="w-4" src="/img/icono_wsp.png" alt="Icono WhatsApp" />
								<a href="https://wa.me/51923195683" target="_blank"
  							rel="noopener noreferrer">+51 923 195 683</a>
							</li>
							<li className="mb-2 flex items-center gap-2">
								<img className="w-3" src="/img/icono_ubicacion.png" alt="Icono Ubicación" />
								<a href="https://www.google.com/maps?q=-12.066943665654088,-77.03799989972579" target="_blank"
								rel="noopener noreferrer"
								className="hover:underline">
									República de Chile 295 <br />
									Cercado de Lima - Lima
								</a>
							</li>
						</ul>
					</FooterAccordion>
				</div>
			</div>
		</div>

			{/* Copyright Section */}
		<div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
			<div className="mt-8 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center">
				{/* 1. Espaciador invisible para empujar el centro (solo en desktop) */}
				<div className="hidden md:block flex-1"></div>

				{/* 2. Texto Centrado */}
				<p className="text-white text-sm text-center flex-1">
					&copy; {new Date().getFullYear()} Select Technology. Todos los derechos reservados.
				</p>

				{/* 3. Texto a la Derecha */}
				<div className="flex-1 text-center md:text-right mt-2 md:mt-0">
					<span className='text-blue-900 text-sm'>Developed By {"<ERA/>"}</span>
				</div>
			</div>
		</div>
	</footer>
	)
}

export default Footer