import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Botón primario con degradado personalizado.
 * Puede funcionar como botón normal o como Link de navegación.
 * @param {Object} props
 * @param {string} props.colorFrom - Color inicial del degradado (ej: '#2EC6DF' o 'from-cyan-400')
 * @param {string} props.colorTo - Color final del degradado (ej: '#1A2980' o 'to-blue-800')
 * @param {string} [props.children] - Texto del botón
 * @param {string} [props.className] - Clases adicionales
 * @param {function} [props.onClick] - Handler opcional (solo si no se usa 'to')
 * @param {string} [props.to] - Ruta para navegar (si se proporciona, se renderiza como Link)
 */
const ButtonPrimary = ({
	colorFrom = '#2EC6DF',
	colorTo = '#1A2980',
	children = 'AGENDA UNA DEMO',
	className = '',
	onClick,
	to,
	...rest
}) => {
	const baseClasses = `
		px-7 py-3
		rounded-3xl
		font-bold
		text-white
		text-sm
		tracking-wide
		shadow-md
		transition duration-200
		focus:outline-none
		border-none
		bg-gradient-to-r
		inline-block
		${colorFrom.startsWith('from-') ? colorFrom : ''}
		${colorTo.startsWith('to-') ? colorTo : ''}
		${!colorFrom.startsWith('from-') || !colorTo.startsWith('to-') ? '' : ''}
		${className}
	`;

	const style =
		!colorFrom.startsWith('from-') && !colorTo.startsWith('to-')
			? { backgroundImage: `linear-gradient(90deg, ${colorFrom}, ${colorTo})` }
			: undefined;

	// Si tiene prop "to", renderizar como Link
	if (to) {
		return (
			<Link
				to={to}
				className={baseClasses}
				style={style}
				{...rest}
			>
				{children}
			</Link>
		);
	}

	// Si no, renderizar como button normal
	return (
		<button
			className={baseClasses}
			style={style}
			onClick={onClick}
			{...rest}
		>
			{children}
		</button>
	)
}

export default ButtonPrimary